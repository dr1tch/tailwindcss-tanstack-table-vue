export default {
  wrapper:
    "relative overflow-x-auto dark:bg-gray-800 w-full border border-gray-400 rounded-md dark:border-gray-600 dark:bg-gray-900",
  base: "min-w-full table-fixed",
  divide: "divide-y divide-gray-300 dark:divide-gray-700",
  thead: "relative",
  tbody: "divide-y divide-gray-200 dark:divide-gray-800",
  tr: {
    base: "",
    selected: "bg-gray-50 dark:bg-gray-800/50",
    active: "hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer",
  },
  th: {
    base: "text-left rtl:text-right",
    padding: "px-4 py-3.5",
    color: "text-gray-900 dark:text-white",
    font: "font-semibold",
    size: "text-sm",
  },
  td: {
    base: "whitespace-nowrap",
    padding: "px-4 py-4",
    color: "text-gray-700 dark:text-gray-400",
    font: "",
    size: "text-sm",
  },
  checkbox: {
    padding: "ps-4",
  },
  loadingState: {
    wrapper:
      "flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",
    label: "text-sm text-center text-gray-900 dark:text-white",
    icon: "w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4 animate-spin",
  },
  emptyState: {
    wrapper:
      "flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",
    label: "text-sm text-center text-gray-900 dark:text-white",
    icon: "w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4",
  },
  progress: {
    wrapper: "absolute inset-x-0 -bottom-[0.5px] p-0",
  },
  default: {
    sortButton: {
      icon: "w-5 h-5 font-semibold mx-auto text-gray-500 dark:text-gray-500",
      trailing: true,
      square: true,
      color: "gray" as const,
      variant: "ghost" as const,
      class: "-m-1.5 flex justify-start items-center gap-2",
    },
    progress: {
      color: "primary" as const,
      animation: "carousel" as const,
    },
    loadingState: {
      icon: "i-heroicons-arrow-path-20-solid",
      label: "Loading...",
    },
    emptyState: {
      icon: "i-heroicons-circle-stack-20-solid",
      label: "No items.",
    },
  },
}
