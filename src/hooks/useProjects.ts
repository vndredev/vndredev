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
        let q = query(collection(db, 'projects'), orderBy('order', 'asc'));

        if (featuredOnly) {
          q = query(
            collection(db, 'projects'),
            where('featured', '==', true),
            orderBy('order', 'asc')
          );
        }

        const snapshot = await getDocs(q);
        const projectsData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as Project[];

        setProjects(projectsData);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, [featuredOnly]);

  return { projects, loading, error };
}
