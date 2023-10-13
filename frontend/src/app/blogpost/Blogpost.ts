export class Blogpost {
  constructor(public id: number, public name: string, public description: string, public content: string, public views: number, public image: string) {
  }

  public toString() : string {
    return `${this.name} ${this.description} ${this.views}`
  }
}
