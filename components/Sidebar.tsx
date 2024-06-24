import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Link from "next/link";
import {
  LayoutDashboard,
  Newspaper,
  Folders,
  CreditCard,
  Settings,
  User,
} from "lucide-react";
const Sidebar = () => {
  return (
    <>
      <div className="sticky top-0 h-screen z-40">
        <div className="hidden md:block h-[100vh] w-[300px]">
          <Command className="bg-secondary rounded-none h-[calc(100vh-4rem)]">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <LayoutDashboard className=" mr-2 h4 w-4" />
                  <Link href="/">Dashboard</Link>
                </CommandItem>
                <CommandItem>
                  <Newspaper className=" mr-2 h4 w-4" />
                  <Link href="/posts">Posts</Link>
                </CommandItem>
                <CommandItem>
                  <Folders className=" mr-2 h4 w-4" />
                  <Link href="/folders">Categoies</Link>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>
                  <User className=" mr-2 h4 w-4" />
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CreditCard className=" mr-2 h4 w-4" />
                  <span>Billing</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Settings className=" mr-2 h4 w-4" />
                  <span>Settings</span>

                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
