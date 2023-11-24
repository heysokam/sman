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
import { ListItem } from "@/elements/ui/list-item";

function SleepMan() {
  const [count, setCount] = React.useState(0);

  return (
    <React.Fragment>
      <NavigationMenu className="flex flex-col bg-slate-400 w-400px">
        <NavigationMenuList>
          <ul className="flex flex-col">
            <ListItem href="/docs" title="Introduction">
              <a
                href="https://vitejs.dev"
                target="_blank"
                className="flex flex-row"
              >
                <img src={viteLogo} className="logo" alt="Vite logo" />
                Re-usable components
              </a>
            </ListItem>
            <ListItem href="/docs/installation" title="Installation">
              <a
                href="https://react.dev"
                target="_blank"
                className="flex flex-row"
              >
                <img src={reactLogo} alt="React logo" className="logo react" />
                Install dependencies.
              </a>
            </ListItem>
            <ListItem href="/docs/primitives/typography" title="Typography">
              Styles for headings
            </ListItem>
          </ul>
        </NavigationMenuList>
      </NavigationMenu>
      <div>
        <Button className="bg-slate-100" onClick={() => setCount((c) => c + 1)}>
          Click me. count is {count}
        </Button>
      </div>
    </React.Fragment>
  );
}

export default SleepMan;
