import { fetchPosts } from "@/app/lib/pocketData";
export default async function Page(){
    const results = await fetchPosts();
    return(
        
        <div className="block space-y-4">
            <h1>POSTS</h1>
           
                 <div className="">
                    <div className="bg-gray-200 grid grid-cols-3 rounded-lg p-2">
                    {results?.map((post) => 
                        <div key={post.id} className="p-2 bg-gray-100 col-span-1 m-2 rounded-lg shadow-sm">
                            <div className="flex flex-col">
                                <p>ID: {post.id}</p>
                                <br/>
                                <p className="self-center">{post.content}</p>
                            </div>
                        </div>
                        )}
                    </div>
                 </div>               
        </div>
    );
}


export const dynamic = 'auto',
            revalidate = 0,
            fetchCache = 'auto',
            runtime = 'nodejs',
            preferredRegion = 'auto'
