export interface Post {
    id: string;
    title: string;
    body: string;
    auther: string;
    date: string;
    category: string;
    comments: PostComment[];
    featured: boolean;
}


export interface PostComment {
    id: string;
    text: string;
    username: string;
}