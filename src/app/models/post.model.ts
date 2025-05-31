export class PostModel{
  public id!:number;
  public title!:String | undefined;
  public content!:String | undefined;
  public author!:String | undefined;
  public image?:String  | undefined ;
  public document?:String|undefined;
  public like!:number;
  public createdAt!: Date | undefined;

}
