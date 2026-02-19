// export default function ProductCard({ name, image, price }) {
//   return (
//     <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
//       {/* Image */}
//       <div className="relative flex h-56 w-full items-center justify-center bg-slate-50">
//         <img
//           src={image}
//           alt={name}
//           loading="lazy"
//           className="h-40 w-40 object-contain transition duration-300 group-hover:scale-105"
//         />
//       </div>

//       {/* Content */}
//       <div className="space-y-3 p-5">
//         <h2 className="line-clamp-2 text-lg font-semibold text-slate-900">
//           {name}
//         </h2>

//         <div className="flex items-center justify-between">
//           <p className="text-xl font-bold text-slate-900">
//             {price}
//           </p>

//           <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
//             In stock
//           </span>
//         </div>

//         <button
//           type="button"
//           className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-[0.99]"
//         >
//           View more
//           <svg
//             className="h-4 w-4"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//             aria-hidden="true"
//           >
//             <path
//               fillRule="evenodd"
//               d="M7.21 14.77a.75.75 0 0 1 .02-1.06L10.94 10 7.23 6.29a.75.75 0 1 1 1.06-1.06l4.24 4.24a.75.75 0 0 1 0 1.06l-4.24 4.24a.75.75 0 0 1-1.06.02Z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// }
