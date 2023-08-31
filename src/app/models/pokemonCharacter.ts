export class PokemonCharacter
{
  id:number;
  name:string;
  imageUrl:string;

  /**
   * Constructor which holds the data of a Pokemon character
   * @param id
   * @param name
   * @param imageUrl
   */
  constructor(id: number, name: string, imageUrl: string) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
  }
}
