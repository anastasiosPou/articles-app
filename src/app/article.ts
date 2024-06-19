/*
This is the main interface that'll be used to represent the articles on the app.

*/
export interface Article {
    id: number,
    title: string,
    subtitle: string,
    author: string,
    datePosted: string,
    content: string,
    category: string,
    photo: string,
    photoDescription: string
}
