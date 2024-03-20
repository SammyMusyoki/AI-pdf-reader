"use client"

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import { Button } from './ui/button'

const UploadButton = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <Dialog 
    open={isOpen} 
    onOpenChange={(visible: boolean | ((prevState: boolean) => boolean)) => {
        if (!visible) {
            setIsOpen(visible)
        }
    }}
    >
        <DialogTrigger asChild onClick={() => setIsOpen(true)}>
            <Button>Upload PDF</Button>
        </DialogTrigger>

        <DialogContent>
          example
        </DialogContent>
    </Dialog>
  )
}

export default UploadButton
