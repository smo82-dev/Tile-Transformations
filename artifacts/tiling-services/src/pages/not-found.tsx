import { AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground">
      <div className="max-w-md mx-4 text-center">
        <AlertCircle className="h-12 w-12 text-primary mx-auto mb-6" strokeWidth={1.5} />
        <h1 className="text-4xl font-display font-bold uppercase tracking-widest mb-4">404 Not Found</h1>
        <p className="mt-4 text-muted-foreground font-light mb-8">
          The page you are looking for does not exist.
        </p>
        <Link href="/" className="px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-[0.2em] text-xs hover:bg-white transition-colors duration-300">
          Return Home
        </Link>
      </div>
    </div>
  );
}
