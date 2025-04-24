import React from 'react';
import Image from 'next/image';

export const iconMap = {
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
  nextjs: { 
    src: '/icons/nextjs.svg', 
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
  // Adding Azure icons
  azure: {
    src: '/icons/azure.svg',
    alt: 'Azure'
  },
  azureblob: {
    src: '/icons/az_blob.svg',
    alt: 'Azure Blob Storage'
  },
  azureaisearch: {
    src: '/icons/az_aisearch.svg',
    alt: 'Azure AI Search'
  },
  azureaistudio: {
    src: '/icons/az_aistudio.svg',
    alt: 'Azure AI Studio'
  },
  azuredocunentintelligence: {
    src: '/icons/az_docint.svg',
    alt: 'Azure Document Intelligence'
  },
  azureappinsights: {
    src: '/icons/az_appinsight.svg',
    alt: 'Azure Application Insights'
  },
  azureappservice: {
    src: '/icons/az_appservice.svg',
    alt: 'Azure App Service'
  },
  azurecontainerregistry: {
    src: '/icons/az_contreg.svg',
    alt: 'Azure Container Registry'
  },
  azurecosmos: {
    src: '/icons/az_cosmos.svg',
    alt: 'Azure Cosmos DB'
  },
  azurefunctions: {
    src: '/icons/az_funcapp.svg',
    alt: 'Azure Functions'
  },
  azureiothub: {
    src: '/icons/az_iothub.svg',
    alt: 'Azure IoT Hub'
  },
  azurekubernetes: {
    src: '/icons/az_kubeserv.svg',
    alt: 'Azure Kubernetes Service'
  },
  azurelogicapps: {
    src: '/icons/az_logicapp.svg',
    alt: 'Azure Logic Apps'
  },
  azureopenai: {
    src: '/icons/az_openai.svg',
    alt: 'Azure OpenAI'
  },
  azureservicebus: {
    src: '/icons/az_servbus.svg',
    alt: 'Azure Service Bus'
  },
  datafactory: {
    src: '/icons/datafactory.svg',
    alt: 'Azure Data Factory'
  },
  eventhub: {
    src: '/icons/eventhub.svg',
    alt: 'Azure Event Hub'
  },
  grafana: {
    src: '/icons/grafana.svg',
    alt: 'Grafana'
  },
  powerbi: {
    src: '/icons/powerbi.svg',
    alt: 'Power BI'
  },
  powerapps: {
    src: '/icons/powerapp.svg',
    alt: 'Power Apps'
  },
  sql: {
    src: '/icons/sql.svg',
    alt: 'SQL'
  },
  streamanalytics: {
    src: '/icons/stream_analytics.svg',
    alt: 'Azure Stream Analytics'
  },
  deltatable: {
    src: '/icons/deltatable.svg',
    alt: 'Delta Table'
  },
  semantickernel: {
    src: '/icons/az_sk.png',
    alt: 'Semantic Kernel'
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