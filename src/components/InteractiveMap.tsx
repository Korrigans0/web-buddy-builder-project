
import React, { useState } from 'react';
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as Icons from "lucide-react";
import { 
  Dialog,
  DialogContent, 
  DialogHeader,
  DialogTitle,
  DialogTrigger 
} from "@/components/ui/dialog";

type Marker = {
  id: string;
  x: number;
  y: number;
  title: string;
  description: string;
  icon: keyof typeof Icons;
  color: string;
}

const iconOptions: (keyof typeof Icons)[] = [
  'Skull', 'Castle', 'Tent', 'Scroll', 'Sword', 'Shield', 'Crown', 'Bird'
];

const colorOptions = [
  'red', 'blue', 'green', 'yellow', 'purple', 'orange'
];

const InteractiveMap = () => {
  const [markers, setMarkers] = useState<Marker[]>([{
    id: '1',
    x: 50,
    y: 50,
    title: "Embuscade des Gobelins",
    description: "4-6 gobelins embusqués derrière les arbres",
    icon: 'Skull',
    color: 'red'
  }]);
  const [isAddingMarker, setIsAddingMarker] = useState(false);
  const [newMarker, setNewMarker] = useState<Partial<Marker>>({
    icon: 'Skull',
    color: 'red'
  });

  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isAddingMarker) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setNewMarker(prev => ({
      ...prev,
      x,
      y
    }));
  };

  const handleAddMarker = () => {
    if (newMarker.title && newMarker.x !== undefined && newMarker.y !== undefined) {
      setMarkers(prev => [...prev, {
        id: Date.now().toString(),
        x: newMarker.x,
        y: newMarker.y,
        title: newMarker.title,
        description: newMarker.description || "",
        icon: newMarker.icon as keyof typeof Icons || 'Skull',
        color: newMarker.color || 'red'
      }]);
      setIsAddingMarker(false);
      setNewMarker({ icon: 'Skull', color: 'red' });
    }
  };

  const handleRemoveMarker = (id: string) => {
    setMarkers(prev => prev.filter(marker => marker.id !== id));
  };

  return (
    <div>
      <div className="mb-4 flex gap-2">
        <Button 
          variant={isAddingMarker ? "secondary" : "default"}
          onClick={() => setIsAddingMarker(!isAddingMarker)}
        >
          {isAddingMarker ? "Annuler" : "Ajouter un marqueur"}
        </Button>
      </div>

      <div className="relative" onClick={handleMapClick}>
        {/* Image de la carte */}
        <img 
          src="/lovable-uploads/71cc30eb-3679-44d8-9f55-84558735b8e6.png"
          alt="Carte de la région"
          className="w-full rounded-lg"
        />
        
        {/* Markers */}
        {markers.map((marker) => {
          const Icon = Icons[marker.icon];
          return (
            <div
              key={marker.id}
              className="absolute cursor-pointer group"
              style={{ 
                left: `${marker.x}%`, 
                top: `${marker.y}%`, 
                transform: 'translate(-50%, -50%)' 
              }}
            >
              <div className="relative">
                <Icon 
                  className={`h-8 w-8 text-${marker.color}-600 animate-pulse`} 
                />
                <div className="hidden group-hover:block absolute z-10 
                  bg-black/90 text-white p-3 rounded-lg 
                  whitespace-nowrap left-1/2 transform -translate-x-1/2 mt-2">
                  <p className="font-semibold">{marker.title}</p>
                  {marker.description && (
                    <p className="text-sm mt-1">{marker.description}</p>
                  )}
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    className="mt-2"
                    onClick={() => handleRemoveMarker(marker.id)}
                  >
                    Supprimer
                  </Button>
                </div>
              </div>
            </div>
          );
        })}

        {/* New marker preview when adding */}
        {isAddingMarker && newMarker.x !== undefined && newMarker.y !== undefined && (
          <Dialog>
            <DialogTrigger asChild>
              <div
                className="absolute cursor-pointer"
                style={{ 
                  left: `${newMarker.x}%`, 
                  top: `${newMarker.y}%`, 
                  transform: 'translate(-50%, -50%)' 
                }}
              >
                {React.createElement(Icons[newMarker.icon || 'Skull'], {
                  className: `h-8 w-8 text-${newMarker.color}-600 animate-pulse`
                })}
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Ajouter un marqueur</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Input
                    placeholder="Titre"
                    value={newMarker.title || ''}
                    onChange={e => setNewMarker(prev => ({ ...prev, title: e.target.value }))}
                  />
                  <Input
                    placeholder="Description (optionnelle)"
                    value={newMarker.description || ''}
                    onChange={e => setNewMarker(prev => ({ ...prev, description: e.target.value }))}
                  />
                  <div className="flex gap-2 flex-wrap">
                    {iconOptions.map(icon => (
                      <Button
                        key={icon}
                        variant={newMarker.icon === icon ? "secondary" : "outline"}
                        size="icon"
                        onClick={() => setNewMarker(prev => ({ ...prev, icon }))}
                      >
                        {React.createElement(Icons[icon], { className: "h-4 w-4" })}
                      </Button>
                    ))}
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {colorOptions.map(color => (
                      <Button
                        key={color}
                        variant={newMarker.color === color ? "secondary" : "outline"}
                        size="icon"
                        className={`bg-${color}-600`}
                        onClick={() => setNewMarker(prev => ({ ...prev, color }))}
                      >
                        <div className={`w-4 h-4 rounded-full bg-${color}-600`} />
                      </Button>
                    ))}
                  </div>
                </div>
                <Button onClick={handleAddMarker}>Ajouter</Button>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>

      {/* Légende */}
      <div className="mt-4 flex flex-wrap gap-2">
        {markers.map(marker => {
          const Icon = Icons[marker.icon];
          return (
            <Badge key={marker.id} variant="outline" className="flex items-center gap-2">
              <Icon className={`h-4 w-4 text-${marker.color}-600`} />
              {marker.title}
            </Badge>
          );
        })}
      </div>
    </div>
  );
};

export default InteractiveMap;
