
import React from 'react';
import { Link } from 'react-router-dom';
import { TravelBlog } from '@/components/TravelBlog';
import { Weather } from '@/components/Weather';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TravelPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Button variant="ghost" asChild className="flex items-center gap-2 mb-6">
            <Link to="/">
              <ChevronLeft className="h-4 w-4" />
              <span>Back to Portfolio</span>
            </Link>
          </Button>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Travel Adventures</h1>
          <p className="text-xl text-gray-600">Documenting my journeys around the world</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-3">
            <TravelBlog />
          </div>
          <div className="md:col-span-1">
            <Weather />
            
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">Popular Destinations</h3>
              <ul className="space-y-2">
                {["Japan", "Greece", "Peru", "Italy", "New Zealand"].map((place) => (
                  <li key={place} className="px-3 py-2 bg-white rounded-md shadow-sm hover:bg-gray-50 cursor-pointer">
                    {place}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelPage;
