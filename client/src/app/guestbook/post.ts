export class Post {
	constructor(
		public content: string = "",
		public createdAt: Date = new Date(),
		public updatedAt: Date = new Date()
	){}
}
