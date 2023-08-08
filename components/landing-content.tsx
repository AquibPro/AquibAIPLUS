"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Joel",
    avatar: "J",
    title: "Software Engineer",
    description: "This is the best AI web app I've ever used!",
  },
  {
    name: "Antonio",
    avatar: "A",
    title: "Designer",
    description: "I use this daily for generating new photos!",
  },
  {
    name: "Mark",
    avatar: "M",
    title: "CEO",
    description: "This app has changed my life, cannot imagine working without it!",
  },
  {
    name: "Mary",
    avatar: "M",
    title: "CFO",
    description: "The best in class, definitely worth the premium subscription!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
      <footer className="bg-gray-800 text-white py-4 text-center w-full mt-24 mx-0 rounded-tl-xl rounded-tr-xl">
    <div className="flex justify-center items-center gap-x-10 text-white-400 py-4 px-0">
      <a href="https://aquibai.aquibkhan.repl.co/privacy-policy.html" target="_blank">Privacy Policy</a>
      <a href="https://aquibai.aquibkhan.repl.co/terms-of-service.html" target="_blank">Terms of Service</a>
      <a href="https://aquibai.aquibkhan.repl.co/cancellation.html" target="_blank">Cancellation</a>
    </div>
    <p className="pt-4 pb-6 font-bold text-lg">Copyright © 2023 Aquib AI</p>
  </footer>



    </div>
  )
}