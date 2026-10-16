/**
 * Komponen Card untuk manampilkan informasi user
 *
 * @typedef {object} CardProps
 * @property {string} variant - variasi warna tema
 * @property {string} className - class tambahan untuk elemen Card
 * @property {ReactNode} children - elemen react apapun yang bisa ditambahkan sebagai children
 * @returns {JSX.Element}
 */
export default function Card({ variant = '', className, children, ...rest }) {
  const theme =
    variant === 'var1'
      ? 'bg-amber-400 border-amber-700'
      : variant === 'var2'
        ? 'bg-emerald-400 border-emerald-700'
        : 'bg-cyan-400 border-cyan-700';

  return (
    <div
      className={`p-2 mb-2 rounded-md border-b-2 ${theme} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
