import React from "react";

const Home = () => {
  return (
    <div style={{background:"red",display:"flex",height:"400px" ,width:"1200px",boxShadow:"0px 0px 10px black",margin:"100px auto"}}>
      <div style={{width:"30%"}}>
      <img src="https://www.pixilstudio.com/models/denver-headshot-actor-corp/content/images/large/headshot-20150217-model-zach-110-Edit.jpg" 
       width="100%" height="400px" alt="Autograph"  />
      </div>
      <div style={{width:"70%",padding:"10px",color:"white",margin:"30px"}}>
        <h2>Sam</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nihil eveniet pariatur dolore adipisci et neque voluptatem, tenetur ipsa quis autem, recusandae quaerat iure beatae accusantium corrupti hic qui nemo commodi? Vitae illo molestias, in dignissimos, labore ullam rem quia accusamus nam incidunt impedit facere, pariatur repudiandae. Sed ut facilis delectus eveniet neque. Placeat, laboriosam perspiciatis. Tempora alias veniam, provident quis vitae sit harum pariatur reiciendis ipsa distinctio fugiat cupiditate quod fugit hic minus, iure inventore itaque totam tempore numquam? Libero sapiente, nemo velit nobis repellat consequuntur nulla doloremque blanditiis, commodi iste, exercitationem nesciunt autem? Non amet molestias tempore sint.</p>
       <button style={{padding:"10px",background:"green",border:"none",color:"white"}}>Explore More</button> 
      </div>
    </div>
  );
};

export default Home;
