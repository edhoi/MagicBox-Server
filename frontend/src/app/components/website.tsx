type WebsiteProps = {
    id: string
    website: string 
    
}

export function Website({id, website}: WebsiteProps) {
    return <li className="flex gap-1 items-center">
            {website}
    </li>
}