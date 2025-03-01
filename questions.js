// Define question categories and their target percentages
const TOPIC_DISTRIBUTION = {
    cloudConcepts: { min: 20, max: 25 },
    azureArchitecture: { min: 35, max: 40 },
    managementGovernance: { min: 30, max: 35 },
    pricingSupport: { min: 20, max: 25 }
};

const allQuestions = {
    cloudConcepts: [
        {
            question: "Which cloud service model requires the most management from the customer?",
            answers: [
                { text: "Infrastructure as a Service (IaaS)", correct: true },
                { text: "Platform as a Service (PaaS)", correct: false },
                { text: "Software as a Service (SaaS)", correct: false },
                { text: "Function as a Service (FaaS)", correct: false }
            ]
        },
        {
            question: "What is a characteristic of the public cloud deployment model?",
            answers: [
                { text: "Resources are accessible only to a single organization", correct: false },
                { text: "Services are available to the general public over the internet", correct: true },
                { text: "Hardware must be purchased for long-term use", correct: false },
                { text: "The organization must manage their own datacenter", correct: false }
            ]
        },
        {
            question: "Which of the following is a benefit of cloud computing's elasticity?",
            answers: [
                { text: "Pay only for resources you use", correct: false },
                { text: "Automatically scale resources based on demand", correct: true },
                { text: "Access resources from anywhere", correct: false },
                { text: "High availability of resources", correct: false }
            ]
        },
        {
            question: "What is a key characteristic of the private cloud deployment model?",
            answers: [
                { text: "Resources are shared with multiple organizations", correct: false },
                { text: "Resources are exclusively used by a single organization", correct: true },
                { text: "No upfront infrastructure costs", correct: false },
                { text: "Always hosted by Microsoft Azure", correct: false }
            ]
        },
        {
            question: "Which cloud computing benefit refers to the ability to deploy applications worldwide?",
            answers: [
                { text: "High Availability", correct: false },
                { text: "Scalability", correct: false },
                { text: "Global Reach", correct: true },
                { text: "Disaster Recovery", correct: false }
            ]
        },
        {
            question: "What is a primary characteristic of cloud computing agility?",
            answers: [
                { text: "The ability to quickly deploy and configure cloud resources", correct: true },
                { text: "The ability to access resources from anywhere", correct: false },
                { text: "The ability to pay only for used resources", correct: false },
                { text: "The ability to automatically scale resources", correct: false }
            ]
        },
        {
            question: "Which cloud model combines public and private clouds?",
            answers: [
                { text: "Community Cloud", correct: false },
                { text: "Hybrid Cloud", correct: true },
                { text: "Multi Cloud", correct: false },
                { text: "Distributed Cloud", correct: false }
            ]
        },
        {
            question: "Which cloud computing characteristic enables rapid elasticity?",
            answers: [
                { text: "Resource pooling", correct: false },
                { text: "On-demand self-service", correct: false },
                { text: "Automatic scaling based on demand", correct: true },
                { text: "Broad network access", correct: false }
            ]
        },
        {
            question: "What is a key advantage of cloud computing's pay-as-you-go pricing model?",
            answers: [
                { text: "Fixed monthly costs", correct: false },
                { text: "Converting capital expenses to operating expenses", correct: true },
                { text: "Unlimited resource usage", correct: false },
                { text: "Free service levels", correct: false }
            ]
        },
        {
            question: "Which is a benefit of cloud computing high availability?",
            answers: [
                { text: "Reduced costs", correct: false },
                { text: "Continuous system operation with minimal downtime", correct: true },
                { text: "Increased security", correct: false },
                { text: "Better performance", correct: false }
            ]
        }
    ],
    azureArchitecture: [
        {
            question: "Which Azure service should you use to run containerized applications?",
            answers: [
                { text: "Azure Virtual Machines", correct: false },
                { text: "Azure App Service", correct: false },
                { text: "Azure Kubernetes Service (AKS)", correct: true },
                { text: "Azure Functions", correct: false }
            ]
        },
        {
            question: "What is the purpose of Azure Availability Zones?",
            answers: [
                { text: "To provide backup services", correct: false },
                { text: "To protect against entire datacenter failures", correct: true },
                { text: "To reduce costs", correct: false },
                { text: "To improve application performance", correct: false }
            ]
        },
        {
            question: "Which Azure service would you use to store non-relational data?",
            answers: [
                { text: "Azure SQL Database", correct: false },
                { text: "Azure Table Storage", correct: false },
                { text: "Azure Cosmos DB", correct: true },
                { text: "Azure Database for MySQL", correct: false }
            ]
        },
        {
            question: "What is Azure Virtual Network (VNet) used for?",
            answers: [
                { text: "To store virtual machine images", correct: false },
                { text: "To provide isolated network environments in Azure", correct: true },
                { text: "To manage user access to resources", correct: false },
                { text: "To backup data in Azure", correct: false }
            ]
        },
        {
            question: "Which Azure service is best suited for serverless computing?",
            answers: [
                { text: "Azure Virtual Machines", correct: false },
                { text: "Azure Container Instances", correct: false },
                { text: "Azure Functions", correct: true },
                { text: "Azure App Service", correct: false }
            ]
        },
        {
            question: "What is Azure ExpressRoute used for?",
            answers: [
                { text: "Connecting to Azure over a public internet connection", correct: false },
                { text: "Creating a private connection between on-premises infrastructure and Azure", correct: true },
                { text: "Managing virtual networks in Azure", correct: false },
                { text: "Implementing a VPN gateway", correct: false }
            ]
        },
        {
            question: "Which Azure storage service is best for storing unstructured data like images and videos?",
            answers: [
                { text: "Azure Files", correct: false },
                { text: "Azure Queues", correct: false },
                { text: "Azure Blob Storage", correct: true },
                { text: "Azure Disks", correct: false }
            ]
        },
        {
            question: "What is the purpose of Azure Load Balancer?",
            answers: [
                { text: "To distribute incoming network traffic across multiple resources", correct: true },
                { text: "To store and manage container images", correct: false },
                { text: "To monitor application performance", correct: false },
                { text: "To backup Azure virtual machines", correct: false }
            ]
        },
        {
            question: "Which service provides fully managed SQL databases in Azure?",
            answers: [
                { text: "Azure SQL Database", correct: true },
                { text: "Azure Table Storage", correct: false },
                { text: "Azure Cosmos DB", correct: false },
                { text: "Azure Cache for Redis", correct: false }
            ]
        },
        {
            question: "What is Azure Active Directory primarily used for?",
            answers: [
                { text: "File storage and sharing", correct: false },
                { text: "Identity and access management", correct: true },
                { text: "Virtual machine management", correct: false },
                { text: "Database hosting", correct: false }
            ]
        },
        {
            question: "What is Azure DNS used for?",
            answers: [
                { text: "Host your domain's DNS records", correct: true },
                { text: "Protect against DDoS attacks", correct: false },
                { text: "Monitor network performance", correct: false },
                { text: "Configure virtual networks", correct: false }
            ]
        },
        {
            question: "Which Azure service provides serverless databases?",
            answers: [
                { text: "Azure SQL Server", correct: false },
                { text: "Azure Database for MySQL", correct: false },
                { text: "Azure Cosmos DB", correct: true },
                { text: "Azure SQL Data Warehouse", correct: false }
            ]
        },
        {
            question: "What is the purpose of Azure Content Delivery Network (CDN)?",
            answers: [
                { text: "Store backup files", correct: false },
                { text: "Deliver content to users with low latency", correct: true },
                { text: "Process big data", correct: false },
                { text: "Host web applications", correct: false }
            ]
        }
    ],
    managementGovernance: [
        {
            question: "Which Azure service helps you manage multiple Azure subscriptions using custom policies?",
            answers: [
                { text: "Azure Policy", correct: true },
                { text: "Azure Monitor", correct: false },
                { text: "Azure Security Center", correct: false },
                { text: "Azure Advisor", correct: false }
            ]
        },
        {
            question: "What is the purpose of Azure Role-Based Access Control (RBAC)?",
            answers: [
                { text: "To monitor resource performance", correct: false },
                { text: "To manage resource costs", correct: false },
                { text: "To control access to Azure resources", correct: true },
                { text: "To backup Azure resources", correct: false }
            ]
        },
        {
            question: "Which tool provides recommendations to improve the security, performance, and reliability of your Azure resources?",
            answers: [
                { text: "Azure Monitor", correct: false },
                { text: "Azure Advisor", correct: true },
                { text: "Azure Security Center", correct: false },
                { text: "Azure Policy", correct: false }
            ]
        },
        {
            question: "What is the purpose of Azure Resource Groups?",
            answers: [
                { text: "To organize and manage related Azure resources", correct: true },
                { text: "To provide internet connectivity to Azure resources", correct: false },
                { text: "To backup Azure resources", correct: false },
                { text: "To monitor resource performance", correct: false }
            ]
        },
        {
            question: "Which feature helps you track changes to Azure resources over time?",
            answers: [
                { text: "Azure Monitor", correct: false },
                { text: "Azure Activity Log", correct: true },
                { text: "Azure Advisor", correct: false },
                { text: "Azure Security Center", correct: false }
            ]
        },
        {
            question: "What is Azure Cost Management used for?",
            answers: [
                { text: "Managing resource access", correct: false },
                { text: "Monitoring service health", correct: false },
                { text: "Analyzing and optimizing cloud spending", correct: true },
                { text: "Creating virtual networks", correct: false }
            ]
        },
        {
            question: "Which service helps you assess regulatory compliance in Azure?",
            answers: [
                { text: "Azure Policy", correct: false },
                { text: "Azure Compliance Manager", correct: true },
                { text: "Azure Monitor", correct: false },
                { text: "Azure Security Center", correct: false }
            ]
        },
        {
            question: "What is Azure Blueprints used for?",
            answers: [
                { text: "Creating standardized environment definitions", correct: true },
                { text: "Monitoring resource usage", correct: false },
                { text: "Managing backup policies", correct: false },
                { text: "Configuring virtual networks", correct: false }
            ]
        },
        {
            question: "Which service helps you monitor application performance?",
            answers: [
                { text: "Azure Monitor", correct: true },
                { text: "Azure Advisor", correct: false },
                { text: "Azure Security Center", correct: false },
                { text: "Azure Policy", correct: false }
            ]
        },
        {
            question: "What is the purpose of Azure Service Health?",
            answers: [
                { text: "Monitor application performance", correct: false },
                { text: "Track Azure service issues and planned maintenance", correct: true },
                { text: "Manage health records", correct: false },
                { text: "Monitor virtual machine health", correct: false }
            ]
        }
    ],
    pricingSupport: [
        {
            question: "What factor affects the cost of Azure Virtual Machines?",
            answers: [
                { text: "The number of Azure policies applied", correct: false },
                { text: "The VM size and running time", correct: true },
                { text: "The number of users accessing the VM", correct: false },
                { text: "The Azure region of other resources", correct: false }
            ]
        },
        {
            question: "Which Azure support plan provides access to Azure technical support engineers by email only?",
            answers: [
                { text: "Basic", correct: false },
                { text: "Developer", correct: true },
                { text: "Standard", correct: false },
                { text: "Professional Direct", correct: false }
            ]
        },
        {
            question: "What is the Azure Service Level Agreement (SLA)?",
            answers: [
                { text: "A support plan for Azure services", correct: false },
                { text: "A formal agreement between Microsoft and the customer about performance targets", correct: true },
                { text: "A tool for monitoring Azure services", correct: false },
                { text: "A pricing calculator for Azure services", correct: false }
            ]
        },
        {
            question: "Which factor can help reduce Azure costs?",
            answers: [
                { text: "Using Azure Reserved VM Instances for long-term workloads", correct: true },
                { text: "Using more Azure regions", correct: false },
                { text: "Creating more resource groups", correct: false },
                { text: "Enabling all available Azure features", correct: false }
            ]
        },
        {
            question: "What is Azure Resource Manager (ARM)?",
            answers: [
                { text: "A monitoring service", correct: false },
                { text: "The deployment and management service for Azure", correct: true },
                { text: "A billing service", correct: false },
                { text: "A security service", correct: false }
            ]
        },
        {
            question: "Which of the following is a characteristic of the consumption-based model?",
            answers: [
                { text: "Fixed monthly costs", correct: false },
                { text: "Pay for unused resources", correct: false },
                { text: "Pay only for what you use", correct: true },
                { text: "Requires long-term commitment", correct: false }
            ]
        },
        {
            question: "What is the Azure Price Calculator used for?",
            answers: [
                { text: "Monitoring current spending", correct: false },
                { text: "Estimating costs before deploying resources", correct: true },
                { text: "Setting spending limits", correct: false },
                { text: "Creating budgets", correct: false }
            ]
        },
        {
            question: "Which Azure support plan includes architectural guidance?",
            answers: [
                { text: "Basic", correct: false },
                { text: "Developer", correct: false },
                { text: "Standard", correct: false },
                { text: "Professional Direct", correct: true }
            ]
        },
        {
            question: "What is the minimum duration for an Azure Reserved VM Instance?",
            answers: [
                { text: "6 months", correct: false },
                { text: "1 year", correct: true },
                { text: "2 years", correct: false },
                { text: "3 years", correct: false }
            ]
        },
        {
            question: "Which factor does NOT affect Azure service pricing?",
            answers: [
                { text: "Resource location", correct: false },
                { text: "Resource tags", correct: true },
                { text: "Resource usage", correct: false },
                { text: "Resource type", correct: false }
            ]
        },
        {
            question: "What is the Azure Total Cost of Ownership (TCO) Calculator used for?",
            answers: [
                { text: "Calculate current Azure spending", correct: false },
                { text: "Compare costs between on-premises and Azure", correct: true },
                { text: "Set spending limits", correct: false },
                { text: "Monitor resource costs", correct: false }
            ]
        },
        {
            question: "Which Azure support plan provides the fastest initial response time?",
            answers: [
                { text: "Basic", correct: false },
                { text: "Developer", correct: false },
                { text: "Standard", correct: false },
                { text: "Professional Direct", correct: true }
            ]
        },
        {
            question: "What is included in the Azure Free account?",
            answers: [
                { text: "Unlimited use of all services", correct: false },
                { text: "Popular services free for 12 months", correct: true },
                { text: "All services free for 30 days", correct: false },
                { text: "Production workload support", correct: false }
            ]
        }
    ]
};

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function selectQuestionsForTopic(questions, count) {
    return shuffleArray([...questions]).slice(0, count);
}

function generateQuestionSet(totalQuestions = 50) {
    const selectedQuestions = [];
    
    // Calculate number of questions needed for each topic
    const cloudConceptsCount = Math.floor(totalQuestions * 0.22); // 22.5% average
    const azureArchitectureCount = Math.floor(totalQuestions * 0.375); // 37.5% average
    const managementGovernanceCount = Math.floor(totalQuestions * 0.325); // 32.5% average
    const pricingSupportCount = totalQuestions - cloudConceptsCount - azureArchitectureCount - managementGovernanceCount;

    // Select random questions for each topic
    selectedQuestions.push(...selectQuestionsForTopic(allQuestions.cloudConcepts, cloudConceptsCount));
    selectedQuestions.push(...selectQuestionsForTopic(allQuestions.azureArchitecture, azureArchitectureCount));
    selectedQuestions.push(...selectQuestionsForTopic(allQuestions.managementGovernance, managementGovernanceCount));
    selectedQuestions.push(...selectQuestionsForTopic(allQuestions.pricingSupport, pricingSupportCount));

    // Shuffle the final set of questions
    return shuffleArray(selectedQuestions);
}

// Generate the questions for this session
const questions = generateQuestionSet();
