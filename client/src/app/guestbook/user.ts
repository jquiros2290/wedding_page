export class User {
	constructor(
		public first_name: string = "",
		public last_name: string = "",
		public email: string = "",
		public password: string = "",
		public createdAt: Date = new Date(),
		public updatedAt: Date = new Date()
	){}
}
