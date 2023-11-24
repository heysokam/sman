import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/elements/ui/navigation-menu";
import { Button } from "@/elements/ui/button";
import { ListItem } from "./elements/ui/list-item";

function SleepMan() {
  const [count, setCount] = React.useState(0);

  return (
    <React.Fragment>
      <NavigationMenu className="flex-col bg-slate-400">
        <NavigationMenuList>
          <ListItem href="/docs" title="Introduction">
            Re-usable components built using Radix UI and Tailwind CSS.
          </ListItem>
          <ListItem href="/docs/installation" title="Installation">
            How to install dependencies and structure your app.
          </ListItem>
          <ListItem href="/docs/primitives/typography" title="Typography">
            Styles for headings, paragraphs, lists...etc
          </ListItem>
        </NavigationMenuList>
      </NavigationMenu>

      <nav className="flex flex-col bg-slate-900 w-auto p-2">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </nav>
      <div>
        <Button onClick={() => setCount((c) => c + 1)}>
          Click me. count is {count}
        </Button>
      </div>
    </React.Fragment>
  );
}

export default SleepMan;
