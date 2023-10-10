import { Button } from "@/components/ui/button";
import ThemeToggle from "@/theme/ThemeToggle";

const Header = () => {
  return (
    <header className="border-b border-b-accent">
      <div className="container flex items-center py-2 m-auto gap-1">
        <h2 className="text-2xl font-bold mr-auto">AppName</h2>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
