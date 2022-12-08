export class Film {
    constructor(
        public name: string,
        public type: string,
        public user_id: number,
        public scores: string[] = new Array<string>(),
        public review: string = "",
        public id?: number
    ) {}
}
