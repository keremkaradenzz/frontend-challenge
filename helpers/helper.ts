
/**
 * @Description sort object key 
 * @Param       object , key  
 * @Returns     object
 * @Author      Kerem Karadeniz
 */
export function sortObjects(object:any,key:any){
  object.sort((a:any,b:any) => (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0))
  return object
}
