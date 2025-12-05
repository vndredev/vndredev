import { useState, useEffect } from 'react';
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { Project } from '@/types';

export function useProjects(featuredOnly = false) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const q = query(collection(db, 'projects'));
        const snapshot = await getDocs(q);

        let projectsData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as Project[];

        // Sort by order, then filter if needed
        projectsData.sort((a, b) => (a.order ?? 99) - (b.order ?? 99));

        if (featuredOnly) {
          projectsData = projectsData.filter(p => p.featured);
        }

        setProjects(projectsData);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, [featuredOnly]);

  return { projects, loading, error };
}
