export default function AboutUs () {
    return (
        <div className =" bg-gray-900 px-3 md:px-8 lg: px-16">
            < h1 className ="text-blue-500  text-4xl font-bold text-center mb-[20px] pt-[60px] px-[15%]">Welcome to Dooprecious - A culinary Journey through Nigeria and Beyond</h1>
            <p className="text-white text-2xl text-center px-[20%] mb-[5%]">Experience the perfect blend of authentic local flavours and exquiste intercontinental cuisines in the heart of Abuja city</p>
       
        <h2 className= "text-blue-500 text-center text-3xl ">About Us</h2>
        <p className="text-white text-center px-[12%] mb-[5%] ">At Dooprecious, we celebrate the rich culinary heritage of Nigeria while embracing global gastronomic trends. Our passionate chef crafts each dish using the freshest local ingredients,ensuring every bite is a delightful experience. Whether you are craving traditional Jellof rice,spicy suya or international gourmet pasta. Dooprecious offers diverse menu that cater for every palate.</p>

        <h3 className="text-blue-500 text-center text-3xl font-bold mb-5 gap-1">Explore our Menu</h3>
        <div className="sm:block text-center md:block text-center   lg:flex justify-between px-10">
            <div>
                <p className="text-blue-500 text-2xl pt-[3px] pl-2 " >Local Specialties</p>
                <ul className="text-white pl-5">
                    <li>Jellof Rice</li>
                    <li>Suya Rice</li>
                    <li>Egusi Soups</li>
                </ul>
            </div>
            <div className="p">
            <p className="text-blue-500 text-2xl pt-[3px] pl-2 " >intercontinental Favourites</p>
                <ul className="text-white pl-5">
                    <li>Truffle Mushroom Risotto</li>
                    <li>Grrilled Ribeye steak</li>
                    <li>Margheritta Pizza</li>
                </ul>

            </div>
            <div>
            <p className="text-blue-500 text-2xl pt-[3px] pl-2 " >Chinese Favourites</p>
                <ul className="text-white pl-5">
                    <li>Truffle Mushroom Risotto</li>
                    <li>Grrilled Ribeye steak</li>
                    <li>Margheritta Pizza</li>
                </ul>

            </div>
            
        </div>
        <h1 className="text-blue-500 text-center text-3xl pt-[5%] mb-5">TESTIMONIALS</h1>
        <p className="text-white text-center text-2xl mb-5">What our guest are saying</p>

       <div className=" sm:block md:block   lg:grid grid-cols-4 mx-[5%] pb-[8%] ">
        <div className="bg-gray-700 border border-gray-500 rounded-2xl w-[90%] h-[95%]  mr-[18%] shadow shadow-gray mt-[3%] ">
            <p className="text-white pt-2 pb-2 pl-2 pr-2">Dooprecious offers the best of both worlds. The jellof rice is unforgettable and the steak is cooked to perfection. A must-visit</p>
            <p className=""><i className="text-white pl-2 pb-2">-Amina T</i></p>

        </div>
        <div className="bg-gray-700 border border-gray-500 rounded-2xl w-[90%] h-[95%]  mr-[18%] shadow shadow-gray mt-[3%] ">
            <p className="text-white pt-2 pb-2 pl-2 pr-2">The ambience is fantastic, and the staff made us feel right at home. Their fusion dishes are innovation and delicious</p>
            <p className=""><i className="text-white pl-2 pb-2">-Chinedu M.</i></p>

        </div>
        <div className="bg-gray-700 border border-gray-500 rounded-2xl w-[90%] h-[95%]  mr-[18%] shadow shadow-gray mt-[3%] ">
            <p className="text-white pt-2 pb-2 pl-2 pr-2">A culinary gem in Abuja. Whether you are craving local or international cuisine, Dooprecious never disappoints</p>
            <p className=""><i className="text-white pl-2 pb-2">-Kemi S.</i></p>

        </div>
        <div className="bg-gray-700 border border-gray-500 rounded-2xl w-[90%] h-[95%]  mr-[18%] shadow shadow-gray mt-[3%] ">
            <p className="text-white pt-2 pb-2 pl-2 pr-2">They have the perfect customer service, every visit is a memorable one</p>
            <p className=""><i className="text-white pl-2 pb-2">-Augustine E.</i></p>

        </div>  
       </div>
       <div className="sm:block  md:block  lg:grid grid-cols-3 ml-[8%] pb-[4%]">
       <div>
       <div className="h-[250px] w-[250px] rounded-full bg-gradient-to-r from-blue-300 to-yellow-300 flex place-content-center ">
            <img src="https://vanilla-abuja.com/wp-content/uploads/2021/05/vanillaabout.jpg"className="w-[240px] h-[240px] rounded-full bg-white overflow-hidden my-auto object-cover hover:p-2"></img>
            <p></p>
            
        </div>
         <p className="text-white pt-2">At Dooprecious Ambience meets Taste</p>
       </div>
       <div>
       <div className="h-[250px] w-[250px] rounded-full bg-gradient-to-r from-blue-300 to-yellow-300 flex place-content-center">
            <img src="https://media.istockphoto.com/id/1388791611/photo/teppanyaki-style.jpg?b=1&s=612x612&w=0&k=20&c=G9l2E6Pwjc65ho5bUzGirecdr6_hc6AArfK3xqiXw7g="className="w-[240px] h-[240px] rounded-full bg-white overflow-hidden my-auto object-cover hover:p-2"></img>
            
        </div>
         <p className="text-white pt-2">Every bite delivers the value you deserve</p>
       </div>
       <div>
       <div className="h-[250px] w-[250px] rounded-full bg-gradient-to-r from-blue-300 to-yellow-300 flex place-content-center ">
            <img src="https://media.istockphoto.com/id/1054319798/photo/group-of-happy-friends-having-breakfast-in-the-restaurant.jpg?b=1&s=612x612&w=0&k=20&c=O5rWsvwdR7cfirDDGvvOEnMNu5iDrDQTCxf-ZhpwrnA="className="w-[240px] h-[240px] rounded-full bg-white overflow-hidden my-auto object-cover hover:p-2"></img>
        </div>
        <p className="text-white pt-2">An experience that leaves a smile on your face</p>
       </div>
       </div>

         </div>    
               
    )
  

}