import React from 'react';
import Image from 'next/image';

const iconMap = {
  python: { 
    src: '/icons/python.png', 
    alt: 'Python' 
  },
  csharp: { 
    src: '/icons/csharp.png', 
    alt: 'C#'
  },
  javascript: { 
    src: '/icons/javascript.svg', 
    alt: 'JavaScript' 
  },
  react: { 
    src: '/icons/react.png', 
    alt: 'React' 
  },
  nextjs: { 
    src: '/icons/nextjs.png', 
    alt: 'Next.js' 
  },
  databricks: { 
    src: '/icons/databricks.svg', 
    alt: 'Databricks' 
  },
  pyspark: { 
    src: '/icons/pyspark.svg', 
    alt: 'PySpark' 
  },
  mlflow: { 
    src: '/icons/mlflow.svg', 
    alt: 'MLflow' 
  },
  jupyter: { 
    src: '/icons/jupyter.png', 
    alt: 'Jupyter Notebook' 
  },
  fastapi: { 
    src: '/icons/fastapi.png', 
    alt: 'FastAPI' 
  },
  docker: { 
    src: '/icons/docker.svg', 
    alt: 'Docker' 
  },
  dotnet: {
    src: '/icons/dotnet.svg',
    alt: '.NET'
  },
  graphql: {
    src: '/icons/graphql.svg',
    alt: 'GraphQL'
  },
  kubernetes: {
    src: '/icons/kubernetes.svg',
    alt: 'Kubernetes'
  },
  helm: {
    src: '/icons/helm.svg',
    alt: 'Helm'
  },
  gremlin: {
    src: '/icons/gremlin.png',
    alt: 'Gremlin'
  },
  mongodb: {
    src: '/icons/mongodb.svg',
    alt: 'MongoDB'
  },
  
  // Add more technologies as needed
};

export default function TechnologyIcons({ technologies }) {
  if (!technologies || technologies.length === 0) {
    return null;
  }

  return (
    <div className="flex gap-3 mt-4">
      {technologies.map(tech => {
        const icon = iconMap[tech.toLowerCase()];
        if (!icon) {
          console.warn(`Icon for technology "${tech}" not found.`);
          return null;
        }
        
        return (
          <div key={tech} className="flex items-center" title={icon.alt}>
            <Image 
              src={icon.src} 
              alt={icon.alt} 
              width={24} 
              height={24} 
              className="object-contain" 
            />
          </div>
        );
      })}
    </div>
  );
}

<TechnologyIcons technologies={['python', 'react', 'nextjs']} />