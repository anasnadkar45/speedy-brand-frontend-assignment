import { Input } from '../ui/input'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { Music2Icon, Music4Icon } from 'lucide-react'
import { ModeToggle } from '../mode-toggle'

const Navbar = () => {
    return (
        <div>
            <header className="sticky top-0 z-30 flex justify-between h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
                <a href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
                    <Music4Icon className="h-6 w-6" />
                    <span className="text-primary text-2xl font-bold">Streamify</span>
                </a>
                <nav className="ml-auto hidden items-center gap-2 md:flex">
                    <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
                        Overview
                    </a>
                    <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
                        Audience
                    </a>
                    <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
                        Engagement
                    </a>
                    <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
                        Revenue
                    </a>
                </nav>
                <div className="relative hidden md:flex flex-1 md:max-w-md">
                    <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search artists, albums, songs..."
                        className="w-full rounded-lg bg-muted pl-8 pr-4 text-sm"
                    />
                </div>
                <div className='flex items-center gap-2'>
                    <ModeToggle />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/4140/4140037.png"
                                    width={36}
                                    height={36}
                                    alt="Avatar"
                                    className="overflow-hidden rounded-full"
                                    style={{ aspectRatio: "36/36", objectFit: "cover" }}
                                />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Playlists</DropdownMenuItem>
                            <DropdownMenuItem>Recommendations</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>
        </div>
    )
}

export default Navbar