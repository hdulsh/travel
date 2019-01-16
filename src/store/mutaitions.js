/**
 * Created by 110 on 2019/1/16.
 */

export default {

  changeCity (state,city){
  state.city = city
  try{
    localStorage.city = city
  }catch(e){}
}
}
