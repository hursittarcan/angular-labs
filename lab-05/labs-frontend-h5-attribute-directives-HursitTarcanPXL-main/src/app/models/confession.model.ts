export class Confession{
  post: string;
  author: string;
  department: string;
  isVisible: boolean;
  likes: number;
  dislikes: number;

  constructor(post: string, department: string, author: string, isVisible: boolean = false){
    this.post = post;
    this.author = author;
    this.department = department;
    this.isVisible = isVisible;
    this.likes = 0;
    this.dislikes = 0;
  }
}
