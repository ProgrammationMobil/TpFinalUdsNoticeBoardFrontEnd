import { Injectable } from '@angular/core';
import {PostModel} from "../models/post.model";
import {Observable,of} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class PostService {
  Posts:PostModel[] =[
    {
      "id": 3,
      "title": "Why Space Exploration Inspires Us All",
      "content": "Space exploration has always captured the human imagination, pushing the boundaries of what we believe is possible. From the Apollo missions to the recent Mars rover landings, each milestone reminds us of our capacity for innovation and discovery. The cosmos is vast, with billions of galaxies, stars, and potentially habitable exoplanets waiting to be explored. Modern missions, like those targeting Jupiter’s moons or asteroid mining, aim to uncover clues about the origins of life and the resources available beyond Earth. But it’s not just about science—space exploration unites us, sparking wonder and curiosity across generations. Programs like the International Space Station demonstrate global collaboration, while private companies are making space more accessible than ever. Yet, challenges remain: the high costs, technical risks, and ethical questions about colonizing other planets. As we look to the stars, we must balance ambition with responsibility. What excites you most about space? Is it the possibility of life elsewhere or the technological leaps we’re making? Let’s dream big together! https://google.com",
      "author": "StarGazrX",
      "image": "assets/image/image2.jpg",
      "like": 392
    },
    {
      "id": 1,
      "title": "Exploring the Future of AI in Everyday Life",
      "content": "Artificial Intelligence is rapidly transforming the way we interact with technology and the world around us. From smart assistants that manage our schedules to autonomous vehicles navigating busy streets, AI is becoming an integral part of daily life. Imagine a world where your refrigerator can detect low stock and automatically order groceries, or where medical diagnostics are performed with precision by AI systems trained on vast datasets. The potential is enormous, but so are the challenges. Ethical considerations, such as ensuring fairness in AI decision-making, preventing bias in algorithms, and safeguarding user privacy, are critical topics that need addressing. Furthermore, the integration of AI into industries like education, healthcare, and entertainment promises to enhance efficiency but also raises questions about job displacement and the need for new skill sets. As we move forward, collaboration between technologists, policymakers, and the public will be essential to harness AI’s benefits while mitigating its risks. This post is just the beginning of a conversation—let’s discuss how AI can shape a better future for all.",
      "author": "TechEnthusiast42",
      "image": "assets/image/image.jpg",
      "like": 245
    },
    {
      "id": 2,
      "title": "The Beauty of Sustainable Gardening",
      "content": "Sustainable gardening is more than just a trend; it’s a lifestyle choice that benefits both the environment and our well-being. By adopting practices like composting, using native plants, and reducing water waste, gardeners can create ecosystems that thrive without harming the planet. Imagine a backyard filled with vibrant wildflowers that attract pollinators like bees and butterflies, contributing to biodiversity. Composting kitchen scraps reduces landfill waste and enriches soil naturally, eliminating the need for chemical fertilizers. Rain gardens, designed to capture and filter runoff, can prevent erosion and protect local waterways. Beyond the environmental impact, gardening fosters mindfulness and a deeper connection to nature. It’s a chance to slow down, dig in the dirt, and watch life unfold. Whether you have a small balcony or a sprawling yard, sustainable gardening is accessible to everyone. Start small with herbs in pots or a vertical garden, and watch your space transform into a green oasis. Share your tips—what’s your favorite eco-friendly gardening practice?",
      "author": "GreenThumbGuru",
      "image": "assets/image/image1.jpg",
      "like": 178
    },
    {
      "id": 3,
      "title": "Why Space Exploration Inspires Us All",
      "content": "Space exploration has always captured the human imagination, pushing the boundaries of what we believe is possible. From the Apollo missions to the recent Mars rover landings, each milestone reminds us of our capacity for innovation and discovery. The cosmos is vast, with billions of galaxies, stars, and potentially habitable exoplanets waiting to be explored. Modern missions, like those targeting Jupiter’s moons or asteroid mining, aim to uncover clues about the origins of life and the resources available beyond Earth. But it’s not just about science—space exploration unites us, sparking wonder and curiosity across generations. Programs like the International Space Station demonstrate global collaboration, while private companies are making space more accessible than ever. Yet, challenges remain: the high costs, technical risks, and ethical questions about colonizing other planets. As we look to the stars, we must balance ambition with responsibility. What excites you most about space? Is it the possibility of life elsewhere or the technological leaps we’re making? Let’s dream big together! https://google.com",
      "author": "StarGazrX",
      "image": "assets/image/image2.jpg",
      "like": 392
    },
    {
      "id": 4,
      "title": "The Rise of Digital Nomadism",
      "content": "The digital nomad lifestyle has exploded in popularity, offering freedom to work from anywhere with an internet connection. Picture this: coding from a beach in Bali, writing reports from a café in Lisbon, or designing graphics from a mountain cabin. Advances in technology, like cloud computing and collaboration tools, have made remote work seamless, while the pandemic accelerated its acceptance. Digital nomads aren’t just freelancers; they include full-time employees, entrepreneurs, and creatives who value flexibility over traditional office life. However, it’s not all glamorous. Unreliable Wi-Fi, time zone challenges, and the lack of a stable community can make it tough. Plus, navigating visas and taxes across countries adds complexity. Still, the ability to blend work and travel is life-changing for many. It encourages cultural exchange, broadens perspectives, and redefines work-life balance. If you’re considering this path, start by researching destinations with strong digital infrastructure and communities. What’s your take—would you trade the 9-to-5 for a nomadic adventure?",
      "author": "WanderlustCoder",
      "image": "assets/image/image3.jpg",
      "like": 301
    },

    {
      "id": 1,
      "title": "Exploring the Future of AI in Everyday Life",
      "content": "Artificial Intelligence is rapidly transforming the way we interact with technology and the world around us. From smart assistants that manage our schedules to autonomous vehicles navigating busy streets, AI is becoming an integral part of daily life. Imagine a world where your refrigerator can detect low stock and automatically order groceries, or where medical diagnostics are performed with precision by AI systems trained on vast datasets. The potential is enormous, but so are the challenges. Ethical considerations, such as ensuring fairness in AI decision-making, preventing bias in algorithms, and safeguarding user privacy, are critical topics that need addressing. Furthermore, the integration of AI into industries like education, healthcare, and entertainment promises to enhance efficiency but also raises questions about job displacement and the need for new skill sets. As we move forward, collaboration between technologists, policymakers, and the public will be essential to harness AI’s benefits while mitigating its risks. This post is just the beginning of a conversation—let’s discuss how AI can shape a better future for all.",
      "author": "TechEnthusiast42",
      "image": "assets/image/image.jpg",
      "like": 245
    },
  ]
  constructor() { }


  //Get All post

  getPostList():PostModel[]{
    return this.Posts
  }
}
