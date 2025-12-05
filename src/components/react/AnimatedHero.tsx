import { motion } from 'motion/react';

interface Props {
  name: string;
  title: string;
  description: string;
  logoSrc?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function AnimatedHero({ name, title, description, logoSrc }: Props) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center text-center"
    >
      <motion.h1
        variants={itemVariants}
        className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter flex items-center justify-center"
        style={{ letterSpacing: '-0.03em' }}
      >
        {'VNDRE'.split('').map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {letter}
          </motion.span>
        ))}
        {logoSrc ? (
          <motion.div
            className="inline-flex items-center justify-center mx-1 sm:mx-2 p-1.5 sm:p-2 rounded-full glass-logo-inline cursor-pointer"
            initial={{ opacity: 0, scale: 0, rotate: -360 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            whileHover={{
              scale: [1, 1.2, 1.15],
              rotate: [0, -10, 10, -10, 10, 0],
              y: [0, -5, 0],
            }}
            whileTap={{ scale: 0.9 }}
            transition={{
              duration: 0.7,
              delay: 0.55,
              ease: [0.34, 1.56, 0.64, 1],
              rotate: { duration: 0.7, delay: 0.55, ease: [0.34, 1.56, 0.64, 1] },
            }}
          >
            <motion.img
              src={logoSrc}
              alt={`${name} Logo`}
              className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full object-cover"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            />
          </motion.div>
        ) : (
          <motion.span
            className="text-neutral-700 dark:text-neutral-300"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            .
          </motion.span>
        )}
        {'DEV'.split('').map((letter, i) => (
          <motion.span
            key={i + 6}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 + i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="mt-4 text-xl sm:text-2xl text-[var(--text-secondary)] font-normal"
        style={{ letterSpacing: '0.05em' }}
      >
        {name}
      </motion.p>

      <motion.p
        variants={itemVariants}
        className="mt-6 text-2xl sm:text-3xl text-[var(--text-primary)] font-medium"
        style={{ letterSpacing: '-0.01em' }}
      >
        {title}
      </motion.p>

      <motion.p
        variants={itemVariants}
        className="mt-8 max-w-3xl text-xl sm:text-2xl text-[var(--text-secondary)] leading-relaxed"
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
