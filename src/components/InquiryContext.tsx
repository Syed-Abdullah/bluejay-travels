import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface InquiryContextType {
  selectedService: string | null;
  selectedCapacity: string | null;
  setSelectedService: (service: string) => void;
  setSelectedCapacity: (capacity: string) => void;
}

const InquiryContext = createContext<InquiryContextType | undefined>(undefined);

export function InquiryProvider({ children }: { children: ReactNode }) {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedCapacity, setSelectedCapacity] = useState<string | null>(null);

  return (
    <InquiryContext.Provider value={{ selectedService, selectedCapacity, setSelectedService, setSelectedCapacity }}>
      {children}
    </InquiryContext.Provider>
  );
}

export function useInquiry() {
  const context = useContext(InquiryContext);
  if (!context) {
    throw new Error('useInquiry must be used within an InquiryProvider');
  }
  return context;
}