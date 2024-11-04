import { useSearch } from "@/hooks/use-search"

type Props = {
    workspaceId: string
}
const Search = ({workspaceId}: Props) => {
    const { query, onSearchQuery, isFetching, onUsers} = useSearch('get-users', 'USERS')
    return (
        <div>
            workspace search
        </div>
    )
}
export default Search; 