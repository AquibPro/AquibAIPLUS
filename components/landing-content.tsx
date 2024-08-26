"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Joel",
    avatar: "J",
    title: "Software Engineer",
    description: "This is the best AI web app I've ever used! It has completely transformed my workflow, allowing me to integrate AI solutions seamlessly into my daily tasks. The user interface is intuitive, and the AI's responses are incredibly accurate and helpful.",
  },
  {
    name: "Antonio",
    avatar: "A",
    title: "Designer",
    description: "I use this daily for generating new photos! The quality of the images is astonishing, and it saves me so much time. Whether I'm brainstorming concepts or finalizing designs, this app is an invaluable tool in my creative arsenal.",
  },
  {
    name: "Mark",
    avatar: "M",
    title: "CEO",
    description: "This app has changed my life, cannot imagine working without it! It's not just about the technology, but how it empowers me to make better decisions and drive my business forward with confidence. The AI's insights are spot on.",
  },
  {
    name: "Mary",
    avatar: "M",
    title: "CFO",
    description: "The best in class, definitely worth the premium subscription! The ROI we've seen after integrating this AI solution into our financial analysis process has been phenomenal. It's a game-changer for any business looking to stay ahead.",
  },
];

const aboutUs = [
  {
    title: "Our Mission",
    description: "At Aquib AI, our mission is to revolutionize the way people interact with AI technology. We aim to provide accessible, powerful tools that empower creativity, productivity, and innovation across various domains. Our focus is on delivering cutting-edge AI solutions that are both user-friendly and highly effective, making advanced technology available to everyone, regardless of their technical background.",
  },
  {
    title: "Our Vision",
    description: "We envision a world where AI is seamlessly integrated into everyday life, enhancing human potential and making the impossible possible. Our vision is to be at the forefront of AI advancements, driving change and delivering top-notch solutions that not only meet but exceed the expectations of our users. By fostering a culture of innovation and continuous improvement, we strive to push the boundaries of what AI can achieve.",
  },
  {
    title: "Our Values",
    description: "Integrity, innovation, and customer satisfaction are at the core of everything we do. We believe in creating technology that respects user privacy, upholds ethical standards, and delivers real value. Our commitment to these values ensures that every product we release is of the highest quality, tailored to meet the specific needs of our users, and developed with a deep understanding of the societal impact of AI.",
  },
  {
    title: "Our Story",
    description: "Founded by Aquib Khan, Aquib AI started as a small project with a big dream—making AI technology accessible to everyone. Over the years, what began as a personal endeavor has grown into a globally recognized brand. Today, Aquib AI serves thousands of users worldwide, helping them harness the power of AI to achieve their goals. Our journey is a testament to the power of innovation, dedication, and a relentless pursuit of excellence. From our humble beginnings to our current status as a leader in the AI industry, we have always been driven by a passion for technology and a desire to make a positive impact on the world.",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10">
      {/* About Us Section */}
      <h2 className="text-center text-4xl text-white font-extrabold mb-12">About Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        {aboutUs.map((item) => (
          <Card key={item.title} className="bg-[#192339] border-none text-white p-4">
            <CardHeader>
              <CardTitle className="text-2xl font-bold mb-3">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed">
              {item.description}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Testimonials Section */}
      <h2 className="text-center text-4xl text-white font-extrabold mb-8">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white p-4">
            <CardHeader>
              <CardTitle className="text-2xl font-bold mb-3">{item.name}</CardTitle>
              <p className="text-zinc-400 text-sm">{item.title}</p>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed">
              {item.description}
            </CardContent>
          </Card>
        ))}
      </div>

      <footer className="bg-gray-800 text-white py-4 text-center w-full mt-24 mx-0 rounded-tl-xl rounded-tr-xl">
        <div className="flex flex-wrap justify-center items-center gap-x-10 text-white-400 py-4 px-0">
          <a href="https://aquibai.com/privacy-policy.html" target="_blank">Privacy Policy</a>
          <a href="https://aquibai.com/terms-of-service.html" target="_blank">Terms of Service</a>
          <a href="https://aquibai.com/cancellation.html" target="_blank">Cancellation</a>
          <a href="https://status.aquibai.com" target="_blank">Status</a>
          <a href="https://aquibai.com/contact.html" target="_blank">Contact Us</a>
        </div>
        <p className="pt-4 pb-1 font-bold text-lg">Copyright <sup>©</sup> 2024 Aquib AI. All rights reserved.</p>
        <p className="pb-2 text-lg text-white text-sm">AQUIB KHAN</p>
      </footer>
    </div>
  );
}
