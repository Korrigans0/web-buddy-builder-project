
import React from 'react';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skull } from "lucide-react";

const InteractiveMap = () => {
  return (
    <div className="relative">
      {/* Image de la carte */}
      <img 
        src="/lovable-uploads/71cc30eb-3679-44d8-9f55-84558735b8e6.png"
        alt="Carte de la région"
        className="w-full rounded-lg"
      />
      
      {/* Marqueur d'embuscade */}
      <div className="absolute top-1/2 left-1/2 transform -translate 
        cursor-pointer group">
        <div className="relative">
          <Skull className="h-8 w-8 text-red-600 animate-pulse" />
          <div className="hidden group-hover:block absolute z-10 
            bg-black/90 text-white p-3 rounded-lg -translate 
            whitespace-nowrap left-1/2 transform -translate-x-1/2 mt-2">
            <p className="font-semibold">Embuscade des Gobelins</p>
            <p className="text-sm mt-1">4-6 gobelins embusqués derrière les arbres</p>
          </div>
        </div>
      </div>

      {/* Légende */}
      <div className="mt-4 flex flex-wrap gap-2">
        <Badge variant="outline" className="flex items-center gap-2">
          <Skull className="h-4 w-4 text-red-600" />
          Point d'embuscade
        </Badge>
      </div>
    </div>
  );
};

export default InteractiveMap;
