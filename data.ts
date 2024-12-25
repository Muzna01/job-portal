export interface Job {
    id: number;
    title: string;
    image: string;
    salary: string;
    salaryType: string;
    location: string;
    jobtype: string;
    category: string;
    saved: boolean;
  }

  
  
  const JobData: Job[] = [
    {
      id: 1,
      title: "Software Engineer",
      category: "Fullstack Developer",
      image: "/images/c1.png",
      salary: "35k - 40k",
      salaryType: "month",
      location: "London,Uk",
      jobtype: "full time",
      saved: true
    },
    {
      id: 2,
      title: "DevOps Engineer",
      category: "Fullstack Developer",
      image: "/images/c2.png",
      salary: "35k - 40k",
      salaryType: "week",
      location: "Pakistan",
      jobtype: "full time",
      saved: false
    },
    {
      id: 3,
      title: "Fronetend Engineer",
      category: "Front-end Developer",
      image: "/images/c3.png",
      salary: "45k - 50k",
      salaryType: "day",
      location: "Kolkata,India",
      jobtype: "full time",
      saved: false
    },
    {
      id: 4,
      title: "Backend Developer",
      category: "Fullstack Developer",
      image: "/images/c4.png",
      salary: "25k - 30k",
      salaryType: "month",
      location: "USA",
      jobtype: "Part time",
      saved: false
    },
    {
      id: 5,
      title: "Fullstack Developer",
      category: "Full Stack Developer",
      image: "/images/c5.png",
      salary: "55k - 60k",
      salaryType: "week",
      location: "Australia",
      jobtype: "full time",
      saved: false
    },
    {
      id: 6,
      title: "Web Designer",
      category: "Designer",
      image: "/images/c6.png",
      salary: "25k - 30k",
      salaryType: "day",
      location: "Canada",
      jobtype: "Freelance",
      saved: false
    },
  ];

  export interface CustomerFeedback {
    id: number;
    feedbackType: string;
    feedback: string;
    image: string;
    name: string;
    category: string;

  }
  const FeedBackData: CustomerFeedback[] = [
    {
      id: 1,
      feedbackType: "Awesome Design",
      feedback: "Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything! Can’t quite… The Mitech team works really hard to ensure high level of quality",
      image: "/customer1.jpeg",
      name: "Ashely Jenkins",
      category: "Designer",
    },
    {
      id: 2,
      feedbackType: "Perfect Design",
      feedback: "Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything! Can’t quite… The Mitech team works really hard to ensure high level of quality",
      image: "/customer2.jpeg",
      name: "Nicole Wells",
      category: "Web Developer",
    },
    {
      id: 3,
      feedbackType: "Awesome Design",
      feedback: "Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything! Can’t quite… The Mitech team works really hard to ensure high level of quality",
      image: "/customer3.jpeg",
      name: "Brooklyn Simmons",
      category: "Consultant",
    },
    {
      id: 1,
      feedbackType: "Awesome Design",
      feedback: "Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything! Can’t quite… The Mitech team works really hard to ensure high level of quality",
      image: "/customer4.jpeg",
      name: "Ronald Richards",
      category: "Designer",
    },
  ]
  
  export default JobData;