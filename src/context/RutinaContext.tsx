import React, { createContext, useState, useContext } from "react";

export interface Ejercicio {
  id: string;
  name: string;
  image: string;
  sets: string;
  reps: string;
  muscles: string[];
}

interface RutinaContextType {
  misEjercicios: Ejercicio[];
  agregarEjercicio: (ejercicio: Ejercicio) => void;
}

export const RutinaContext = createContext<RutinaContextType>({
  misEjercicios: [],
  agregarEjercicio: () => {},
});

export const RutinaProvider = ({ children }: any) => {
  const [misEjercicios, setMisEjercicios] = useState<Ejercicio[]>([]);

  const agregarEjercicio = (ejercicio: Ejercicio) => {
    setMisEjercicios((prev) => [...prev, ejercicio]);
  };

  return (
    <RutinaContext.Provider value={{ misEjercicios, agregarEjercicio }}>
      {children}
    </RutinaContext.Provider>
  );
};

// Hook personalizado
export const useRutinas = () => useContext(RutinaContext);
