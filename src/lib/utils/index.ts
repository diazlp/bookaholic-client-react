/**
 * Utility class for common functions.
 */
class Utils {
  /**
   * Get a random color from a predefined list of Tailwind CSS colors.
   * @returns {string} A random color class name.
   */
  static getRandomColor(): string {
    const colors = [
      'bg-red-300',
      'bg-orange-300',
      'bg-yellow-300',
      'bg-green-300',
      'bg-teal-300',
      'bg-blue-300',
      'bg-indigo-300',
      'bg-purple-300',
      'bg-pink-300',
      'bg-gray-300',
      'bg-amber-300',
      'bg-emerald-300',
      'bg-fuchsia-300',
      'bg-lime-300',
      'bg-cyan-300',
      'bg-violet-300',
      'bg-rose-300',
      'bg-amber-300',
      'bg-lime-300',
      'bg-sky-300',
      'bg-cyan-300',
      'bg-emerald-300'
    ]
    return colors[Math.floor(Math.random() * colors.length)]
  }
}

export default Utils
