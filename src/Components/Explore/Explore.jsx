import styled from "styled-components";
import { Sidebar } from '../Sidebar/Sidebar';
import { Widgets } from '../Widgets/Widgets';
const A = styled.div`
.line{
  line-height: 1;
}
.imgs{
  margin-top: 10px;
}
.btn{
  background-color: white;
  border: none;
  padding: 15px;
  margin: auto;

  font-size: large;

 }
 .btn:hover{
   border-bottom: 2px solid blue;
   cursor: pointer;
 }
 img{
   margin-top: 30px;
width: 98%;
height: 400px;
margin: auto;
 }
 .btncc{
 
   width: 600px;
   margin: auto;
     margin-top: 2px;
 }
 .closet{
   color:rgb(112,115,118);
   font-size: 15px;
 }
 .sty{
  color:#76797e;
  font-size: 15px;
  font-weight: bold;
 
 }

 .box{
  display:grid;
  margin-top:20px;
  border:1px solid whitesmoke;
  padding:15px;
  grid-template-columns: 90% 10%;
 }
`

export function Explore() {
  const data = [[ "Politics · Trending","Sushant Ke Hatyare Azaad Kyun","1,536 Tweets"],["Entertainment · Trending", "#AlluRamalingaiah","1,382 Tweets"],["Trending in India", "#PetrolPrice","2,513 Tweets"]];
  return (
    <div style={{display:"flex"}}>
      <div><Sidebar /></div>
      
      <div style={{width:"48%"}}>
  <A>
    <div className="btncc">
    <button className="btn">For you</button>
    <button className="btn">Covid-90</button>
    <button className="btn">Trending</button>
    <button className="btn">News</button>
    <button className="btn">Sports</button>
      <button className="btn">Entertainment</button>
    </div>
    <div className="imgs">
      <img src="https://www.behindwoods.com/hindi-movies/event-photos-pictures-stills/ipl-2018/ipl-2018-hd-posters-photos-stills-21.jpg" alt="image" />
    </div>
    {data.map((e,i) => {
      return <div className="box">
        <div className="line" >
          <div className="line closet">{ data[i][0]}</div>
          <div className="line sty">{ data[i][1]}</div>
          <div className="sknckjn closet">{ data[i][2]}</div>
        </div>
      
        <div style={{ width: "25px" }}>---</div>
      </div>
    })}
  
  </A>
  </div>
  <div><Widgets /></div>
  </div>
  )
}
