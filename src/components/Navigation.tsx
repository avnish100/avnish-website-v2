import Link from 'next/link';
import * as motion from 'motion/react-client';

export default function Navigation() {
  return (
    <nav className="flex space-x-8">
      <Link href="/" className="nav-link hover:text-gray-300 transition-colors">
        <motion.span className="relative inline-block" whileHover="hover">
          Home 
          <motion.div
            className="absolute left-0 bottom-0 h-[2px] bg-white mt-3"
            initial={{ width: 0 }}
            variants={{
              hover: { width: "100%" },
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.span>
      </Link>
      <motion.a href="/writing" className="nav-link hover:text-gray-300 transition-colors" whileHover="hover">
        <span className="relative inline-block">
        Writing
        <motion.div
          className="absolute left-0 bottom-0 h-[2px] bg-white mt-3"
          initial={{ width: 0 }}
          variants={{
            hover: { width: "100%" },
          }}
          transition={{ duration: 0.3 }}
        />
        </span>
      </motion.a>
      <motion.a href="/projects" className="nav-link hover:text-gray-300 transition-colors" whileHover="hover">
        <span className="relative inline-block">
        Projects
        <motion.div
          className="absolute left-0 bottom-0 h-[2px] bg-white mt-3"
        initial={{ width: 0 }}
          variants={{
            hover: { width: "100%" },
          }}
          transition={{ duration: 0.3 }}/>
          </span>
        </motion.a>
      <motion.a href="/photos" className="nav-link hover:text-gray-300 transition-colors" whileHover="hover">
        <span className="relative inline-block">
        Photos
        <motion.div
          className="absolute left-0 bottom-0 h-[2px] bg-white mt-3"
          initial={{ width: 0 }}
          variants={{
            hover: { width: "100%" },}}/>
          </span>
      </motion.a>
    </nav>
  );
} 