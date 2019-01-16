/**
 * Created by 110 on 2019/1/16.
 */
let defaultCity = '上海'
try{
  if(localStorage.city){
    defaultCity = localStorage.city
  }
}catch(e){}

export default {

  city: defaultCity

}
