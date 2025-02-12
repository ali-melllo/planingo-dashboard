'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, UserPenIcon } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import EditMetaTagPage from './edit';

interface CellActionProps {
    data: unknown;
}

export const CellAction: React.FC<CellActionProps> = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem className='!p-0' onClick={() => setOpen(true)}>
                        <Button variant="outline" className='border-none text-[#6B7280] h-full w-full'>
                            <UserPenIcon fill='#6B7280' color='#6B7280' className="mr-2 size-5" /> Edit
                        </Button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Hotel Page</DialogTitle>
                    </DialogHeader>
                    <div className="grid">
                        <EditMetaTagPage />
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};
