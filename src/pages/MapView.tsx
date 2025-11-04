import { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Navigation from "@/components/Navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const MapView = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [apiKey, setApiKey] = useState('');
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const initializeMap = (token: string) => {
    if (!mapContainer.current || !token) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-98.5795, 39.8283], // Center of United States
      zoom: 3.5,
      pitch: 0,
    });

    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    map.current.on('load', () => {
      setIsMapLoaded(true);
    });
  };

  const handleLoadMap = () => {
    if (apiKey) {
      initializeMap(apiKey);
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8 pt-24">
        <h1 className="text-4xl font-bold mb-8">United States Map</h1>
        
        {!isMapLoaded && (
          <Card className="mb-8 max-w-2xl">
            <CardHeader>
              <CardTitle>Enter Mapbox API Key</CardTitle>
              <CardDescription>
                Get your free Mapbox public token at{' '}
                <a 
                  href="https://mapbox.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  mapbox.com
                </a>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="apiKey">Mapbox Public Token</Label>
                  <Input
                    id="apiKey"
                    type="text"
                    placeholder="pk.eyJ1..."
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="mt-2"
                  />
                </div>
                <Button onClick={handleLoadMap} disabled={!apiKey}>
                  Load Map
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
          <div ref={mapContainer} className="absolute inset-0" />
          {!isMapLoaded && (
            <div className="absolute inset-0 bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">Enter your Mapbox API key to load the map</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default MapView;
