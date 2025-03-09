export function useMDXComponents(components) {
  return {
    h1: ({ children }) => <h1 className="text-4xl font-bold mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold mb-3">{children}</h2>,
    p: ({ children }) => <p className="mb-4">{children}</p>,
    ul: ({ children }) => <ul className="list-disc list-inside mb-4">{children}</ul>,
    ...components,
  }
} 