import { Loader2 } from 'lucide-react';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex h-full min-h-[calc(100vh-100px)] w-full items-center justify-center" aria-live="polite" aria-busy="true">
      <Loader2 className="h-16 w-16 animate-spin text-primary" />
    </div>
  );
}
