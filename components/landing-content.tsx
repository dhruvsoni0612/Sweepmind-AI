"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Dhruv",
    avatar: "D",
    title: "Software Engineer",
    description: "SweepMind has been a gamechanger for my productivity!",
  },
  {
    name: "Mitali",
    avatar: "M",
    title: "Designer",
    description: "The Image Generation tool helps me convert my ideas into a design in seconds!",
  },
  {
    name: "Sanjay",
    avatar: "S",
    title: "CEO",
    description: "SweepMind helps me do my emails extremely quickly every morning!",
  },
  {
    name: "Navneet",
    avatar: "N",
    title: "CFO",
    description: "I cannot thank myself enough for getting the Pro Subscription!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
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
    </div>
  )
}
