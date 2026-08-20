import { Star, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import toast from 'react-hot-toast'

export function CareerCard({ career, onClick }) {
  const [favorites, setFavorites] = useLocalStorage('favorites', [])
  const isFavorited = favorites.includes(career.id)

  const handleFavorite = (e) => {
    e.stopPropagation()
    if (isFavorited) {
      setFavorites(favorites.filter(id => id !== career.id))
      toast.success('Removed from favorites')
    } else {
      setFavorites([...favorites, career.id])
      toast.success('Added to favorites')
    }
  }

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="card p-6 cursor-pointer group hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 dark:hover:border-indigo-400/30"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-3xl dark:bg-indigo-400/10">{career.icon}</div>
        <button
          onClick={handleFavorite}
          className={`p-2 rounded-lg transition-all ${
            isFavorited
              ? 'bg-accent text-white'
              : 'bg-slate-100 dark:bg-dark-border text-slate-400 group-hover:text-accent'
          }`}
        >
          <Star className="w-5 h-5" fill={isFavorited ? 'currentColor' : 'none'} />
        </button>
      </div>

      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
        {career.name}
      </h3>

      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-2">
        {career.description}
      </p>

      <div className="space-y-2.5 border-y border-slate-100 py-4 dark:border-dark-border">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Domain</span>
          <span className="font-medium">{career.domain}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Difficulty</span>
          <span className="font-medium">{career.difficulty}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Duration</span>
          <span className="font-medium">{career.duration}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Salary</span>
          <span className="font-medium text-green-600">{career.salary}</span>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-sm text-accent font-semibold">
        <TrendingUp className="w-4 h-4" />
        {career.demand} Demand
      </div>
    </motion.div>
  )
}
