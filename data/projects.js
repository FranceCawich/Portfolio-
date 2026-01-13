const data = [
  {
    id: 1,
    title: "Pest Detection using Convolutional Neural Networks",
    image: "/projects/CNNPest Detecion.jpg",
    description:
      "Developed a convolutional neural network using Python and TensorFlow to detect pest infestations in sugar cane crops across Quintana Roo, Mexico. The model was trained on a dataset of 1000 pest-affected and 1000 healthy crop images, achieving a detection accuracy of 95%. This solution enables early pest identification, minimizing crop damage and reducing agricultural losses.",
    skills: [
      { id: 1, name: "python", image: "/skills/python.png" },
      { id: 4, name: "Tensorflow", image: "/skills/Tensorflow.png" },
      { id: 2, name: "GoogleColab", image: "/skills/colab.png" },
      { id: 3, name: "docker", image: "/skills/docker.png" },
      //{ id: 3, name: "node", image: "/skills/node-js.png" },
      { id: 5, name: "mongodb", image: "/skills/mongodb.png" },
      { id: 6, name: "NvidaCuda", image: "/skills/Nvidia_CUDA_Logo.jpg" },
      { id: 7, name: "github", image: "/skills/git.png" },
    ],
    source_code:
      "https://colab.research.google.com/drive/1KyZMR23lGqSzPxomt3te8QafLg8vz8hg",
    demo: "http://www.demo.com/mydemo",
  },
  {
    id: 2,
    title: "Machine Learning Models Docker Deployment",
    image: "/projects/docker.png",
    description:
      "Engineered a containerized environment using Docker to streamline machine learning model deployment with TensorFlow, CUDA, and cuDNN. The container ensures consistent execution across different systems by eliminating dependency conflicts. Successfully validated on both Windows and Linux platforms, providing a robust, reproducible solution for ML model operationalization.",
    skills: [
      { id: 1, name: "docker", image: "/skills/docker.png" },
      { id: 2, name: "Tensorflow", image: "/skills/Tensorflow.png" },
      { id: 3, name: "NvidaCuda", image: "/skills/Nvidia_CUDA_Logo.jpg" },
    ],
    source_code:
      "https://github.com/FranceCawich/dockerFile/blob/main/Dockerfile",
    demo: "http://www.demo.com/mydemo",
  },

  {
    id: 3,
    title: "Deep Learning Tutorial: TensorFlow, Keras, and PyTorch",
    image: "/projects/DL.png",
    description:
      "Created a comprehensive deep learning educational resource utilizing Jupyter notebooks covering TensorFlow, Keras, and PyTorch frameworks. The tutorial series provides practical, hands-on guidance for machine learning practitioners transitioning into deep learning. Designed with accessibility in mind, each module includes clear explanations and executable code samples compatible across multiple platforms.",
    skills: [
      { id: 1, name: "python", image: "/skills/python.png" },
      { id: 4, name: "Tensorflow", image: "/skills/Tensorflow.png" },
      { id: 2, name: "GoogleColab", image: "/skills/colab.png" },
      { id: 3, name: "docker", image: "/skills/docker.png" },

      { id: 5, name: "Pytorch", image: "/skills/pythorch.png" },

      { id: 6, name: "NvidaCuda", image: "/skills/Nvidia_CUDA_Logo.jpg" },
    ],
    source_code: "https://github.com/FranceCawich/deepLearningTensorflow",
    demo: "http://www.demo.com/mydemo",
  },
  {
    id: 4,
    title: "Mobile Application for Mexican CURP and RFC Generation",
    image: "/projects/kot.jpg",
    description:
      "Developed a Kotlin-based Android application for generating official Mexican identification documents (CURP and RFC). Built with Android Studio, the application delivers fast, reliable generation of these standardized credentials. Optimized for user experience with sub-5-second processing time, the application is compatible with all Android devices and provides an intuitive interface.",
    skills: [
      { id: 1, name: "kotlin", image: "/skills/k.png" },
    ],
    source_code: "https://github.com/FranceCawich/kotlin",
    demo: "http://www.demo.com/mydemo",
  },

  {
    id: 5,
    title: "Professional Portfolio Website using Next.js and Tailwind CSS",
    image: "/projects/portfolio.jpg",
    description:
      "Designed and developed a responsive portfolio website leveraging Next.js and Tailwind CSS to showcase technical expertise and professional accomplishments. The platform features dynamic content management, seamless navigation, and comprehensive project documentation. Optimized for performance and accessibility, the website provides an effective medium for professional networking and project showcasing.",
    skills: [
      { id: 1, name: "react", image: "/skills/react.png" },
      { id: 2, name: "next", image: "/skills/next-js.png" },
      { id: 3, name: "tailwindcss", image: "/skills/tailwind.png" },
      { id: 4, name: "github", image: "/skills/git.png" },

      { id: 7, name: "node", image: "/skills/node-js.png" },
      { id: 6, name: "JavaScript", image: "/skills/javascript.png" },
      { id: 8, name: "TypeScript", image: "/skills/typescript.png" },
    ],
    source_code: "https://github.com/FranceCawich/deepLearningTensorflow",
    demo: "http://www.demo.com/mydemo",
  },
  {
    id: 6,
    title: "YouTube Downloader Backend using FastAPI",
    image: "/projects/fast.png",
    description:
      "Engineered a robust backend service using FastAPI to provide efficient YouTube video downloading capabilities. This service prioritizes user experience by eliminating intrusive advertisements and streamlining the download process. Built with extensibility in mind, the backend infrastructure supports planned frontend enhancements and additional feature implementations for enhanced functionality.",

    skills: [
      { id: 4, name: "github", image: "/skills/git.png" },
      { id: 1, name: "python", image: "/skills/python.png" },

    ],
    source_code: "https://github.com/FranceCawich/YoutubeDownloader_FastAPi_Backend",
    demo: "http://www.demo.com/mydemo",


  },

];
export default data;
