
import React from 'react';
import { CalendarIcon, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  location: string;
  excerpt: string;
  imageUrl: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Exploring the Streets of Tokyo",
    date: "March 15, 2024",
    location: "Tokyo, Japan",
    excerpt: "Wandering through the busy streets of Tokyo, I discovered hidden temples, amazing food, and the perfect blend of tradition and technology.",
    imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 2,
    title: "Sunset in Santorini",
    date: "August 23, 2023",
    location: "Santorini, Greece",
    excerpt: "The white-washed buildings against the stunning blue sea created the perfect backdrop for what was possibly the most beautiful sunset I've ever seen.",
    imageUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 3,
    title: "Hiking the Inca Trail",
    date: "November 5, 2023",
    location: "Cusco, Peru",
    excerpt: "Four days of challenging terrain led to the most rewarding moment - watching the sun rise over Machu Picchu from the Sun Gate.",
    imageUrl: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=1000"
  }
];

export const TravelBlog = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">My Travel Blog</h2>
        <Button variant="outline">View All Posts</Button>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{post.title}</CardTitle>
              <div className="flex items-center text-sm text-gray-500 gap-4 mt-1">
                <div className="flex items-center gap-1">
                  <CalendarIcon className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{post.location}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Button variant="link" className="p-0">Read More</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
