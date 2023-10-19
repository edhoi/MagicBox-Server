type MessageProps = {
    id: string
    message: string 
}

export function Message({id, message}: MessageProps) {
    return <li className="flex gap-1 items-center">
            {message}
    </li>
}