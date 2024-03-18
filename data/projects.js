const data = [
  {
    id: 1,
    title: "Pest Detecion using Convolutional Neural Networks",
    image: "/projects/CNNPest Detecion.jpg",
    description:
      "Convultional new networks was build in using python and tensorflow to detect pest in crops special Sugar cane plantaion in the state of Quintana Roo, Mexico. The model was trained using 1000 images of pest and 1000 images of healthy crops. The model was able to detect pest with an accuracy of 95%.",
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
    title: "Machine Learning Models Docker ",
    image: "/projects/docker.png",
    description:
      "Docker container was created to deploy machine learning models using tensorflow, cuda and cudnn. The container was created to be able to run on any machine without the need to install any dependencies. The container was tested on a windows machine and a linux machine and it was able to run without any issues.",
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
    title: "DeepLearning Tutorial using Tesnorflow, Keras and Pythorch ",
    image: "/projects/DL.png",
    description:
      "create a tutorial on how to use tensorflow, keras and pythorch to create deep learning models. The tutorial was created using jupyter notebook and was uploaded to github. The tutorial was created to help people who are new to deep learning to get started with deep learning. The tutorial was created to be easy to understand and to be able to run on any machine.",
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
    title: "mobile app uising kotlin to generate mexican CURP and RFC",
    image: "/projects/Kot.jpg",
    description:
      "The app was created using Kotlin and Android Studio. The app was created to generate the mexican CURP and RFC. The app was created to be able to run on any android device. The app was created to be easy to use and to be able to generate the curp and rfc in less than 5 seconds.",
    skills: [
      { id: 1, name: "kotlin", image: "/skills/kotlin.jpg" },
    ],
    source_code: "https://github.com/FranceCawich/kotlin",
    demo: "http://www.demo.com/mydemo",
  },

  {
    id: 5,
    title: "Create portfolio website using Next.js and tailwindcss",
    image: "/projects/portfolio.jpg",
    description:
      "Create a portfolio website using next.js and tailwindcss. The website was created to be able to run on any device. The website was created to be easy to use and to be able to show my work and skills. The website was created to be able to show my work and to be able to contact me. The website was created to be able to show my work and to be able to contact me.",
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
];
export default data;
