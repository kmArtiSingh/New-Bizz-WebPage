window.onload = function() {
//   Main Body 
 var mainBody = document.body;
//   Top Bar
var top_con_fluid = document.createElement("div");
top_con_fluid.className = "Container-fluid top-bar";
mainBody.appendChild(top_con_fluid);

var top_cont = document.createElement("div");
top_cont.className = "container";
top_con_fluid.appendChild(top_cont);

var top_row = document.createElement("div");
top_row.className = "row";
top_cont.appendChild(top_row);
    
var top_left = document.createElement("div");
top_row.appendChild(top_left);
top_left.className = "top-left";
    
for (var i =0; i<topLeftIcon.length; i++) {
        
var top_left_icon = document.createElement("i");
top_left.appendChild(top_left_icon);
top_left_icon.className = topLeftIcon[i][0];
top_left_icon.innerHTML = topLeftIcon[i][1];    
}   
var top_right = document.createElement("div");
top_row.appendChild(top_right);
top_right.className = "top-right";
    
for (var i =0; i<topRightIcon.length; i++) {
        
var top_right_icon = document.createElement("i");
top_right.appendChild(top_right_icon);
top_right_icon.className = topRightIcon[i];   
}
    
//Nav Bar 

var nav_con_fluid = document.createElement("div");
nav_con_fluid.className = "Container-fluid nav-bar";
mainBody.appendChild(nav_con_fluid);

var nav_cont = document.createElement("div");
nav_cont.className = "container";
nav_con_fluid.appendChild(nav_cont);

var nav_row = document.createElement("div");
nav_row.className = "row";
nav_cont.appendChild(nav_row);
    
var nav_left = document.createElement("div");
nav_left.className = "nav-left";
nav_row.appendChild(nav_left); 

var nav_left_a = document.createElement("a");
nav_left.appendChild(nav_left_a);
nav_left_a.href = "#";
nav_left_a.innerHTML = "<span>NEU</span> Bizz";
    
var nav_right = document.createElement("div");
nav_right.className = "nav-right";
nav_row.appendChild(nav_right); 
    
for(var i=0; i<navRightList.length; i++) {
    
var nav_right_a = document.createElement("a");
nav_right.appendChild(nav_right_a);
nav_right_a.href = "#";
nav_right_a.innerHTML =  navRightList[i]; 
    
}
    

//banner section    
   
var banner_con_fluid = document.createElement("div");
banner_con_fluid.className = "Container-fluid banner";
mainBody.appendChild(banner_con_fluid);

    
var banner_img = document.createElement("img");
banner_con_fluid.appendChild(banner_img);
banner_img.src = "img/" +bannerImg;
    
var banner_content = document.createElement("div");
banner_con_fluid.appendChild(banner_content);
banner_content.className = "banner-cont";
    
var banner_content_h2 = document.createElement("h2");
banner_content.appendChild(banner_content_h2);
banner_content_h2.innerHTML = "BEST BUSINESS SERVICES";

    
var banner_content_p = document.createElement("p");
banner_content.appendChild(banner_content_p);
banner_content_p.innerHTML = "Lets Grow Your Business Togather";

    
var banner_content_a = document.createElement("a");
banner_content.appendChild(banner_content_a);
banner_content_a.innerHTML = "Quick Call";
banner_content_a.href = "#";

    

//Services Section
    
var ser_con_fluid = document.createElement("div");
ser_con_fluid.className = "Container-fluid services";
mainBody.appendChild(ser_con_fluid);

var ser_cont = document.createElement("div");
ser_cont.className = "container";
ser_con_fluid.appendChild(ser_cont);

var ser_row = document.createElement("div");
ser_row.className = "row";
ser_cont.appendChild(ser_row);
    
var ser_top = document.createElement("div");
ser_top.className = "ser-top";
ser_row.appendChild(ser_top); 
    
var ser_top_h2 = document.createElement("h2");
ser_top.appendChild(ser_top_h2);
ser_top_h2.innerHTML = "Our Services";
    
var ser_top_p = document.createElement("p");
ser_top.appendChild(ser_top_p); 
ser_top_p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.";
    
    
var ser_row_2 = document.createElement("div");
ser_row_2.className = "row";
ser_cont.appendChild(ser_row_2);
    
for (var i=0; i<serviceItem.length; i++) {
    
var ser_bottom = document.createElement("div");
ser_bottom.className = "ser-bottom";
ser_row_2.appendChild(ser_bottom); 
    

    
var ser_bootom_img = document.createElement("img");
ser_bottom.appendChild(ser_bootom_img);
ser_bootom_img.src = "img/" + serviceItem[i][0];
    
var ser_bootom_h3 = document.createElement("h3");
ser_bottom.appendChild(ser_bootom_h3);
ser_bootom_h3.innerHTML = serviceItem[i][1];
    
var ser_bootom_p = document.createElement("p");
ser_bottom.appendChild(ser_bootom_p);
ser_bootom_p.innerHTML = serviceItem[i][2];
    
var ser_bootom_a = document.createElement("a");
ser_bottom.appendChild(ser_bootom_a);
ser_bootom_a.innerHTML = serviceItem[i][3];

    
}
    
// Solution Section   
    
    
var sol_con_fluid = document.createElement("div");
sol_con_fluid.className = "Container-fluid solution";
mainBody.appendChild(sol_con_fluid); 
    
var sol_data = document.createElement("div");
sol_data.className = "solution-data";
sol_con_fluid.appendChild(sol_data);
    

var sol_h1 = document.createElement("h1");
sol_data.appendChild(sol_h1);
sol_h1.innerHTML = "Get all type of Solutions";
    
var sol_p = document.createElement("p");
sol_data.appendChild(sol_p);
sol_p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod dolor sit amet, consectetur adipiscing elit, sed do eiusmod";
    
var sol_a = document.createElement("a");
sol_data.appendChild(sol_a);
sol_a.innerHTML = "Read More";    
sol_a.href = "#";    
    
    


// Consulting Section   
    
var consulting_con_fluid = document.createElement("div");
consulting_con_fluid.className = "Container-fluid consulting";
mainBody.appendChild(consulting_con_fluid);

var consulting_cont = document.createElement("div");
consulting_cont.className = "container";
consulting_con_fluid.appendChild(consulting_cont);

var consulting_row = document.createElement("div");
consulting_row.className = "row";
consulting_cont.appendChild(consulting_row);
    
var consulting_left = document.createElement("div");
consulting_left.className = "consulting-left";
consulting_row.appendChild(consulting_left);   
    
var consulting_left_i = document.createElement("i");
consulting_left.appendChild(consulting_left_i);
consulting_left_i.className = "fa fa-connectdevelop";
    
var consulting_left_h3 = document.createElement("h3");
consulting_left.appendChild(consulting_left_h3);
consulting_left_h3.innerHTML = "We are Top Consulting Firm in the World";
    
var consulting_left_p = document.createElement("p");
consulting_left.appendChild(consulting_left_p);
consulting_left_p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet";

    
var consulting_left_a = document.createElement("a");
consulting_left.appendChild(consulting_left_a);
consulting_left_a.href = "#"; 
consulting_left_a.innerHTML = "Read More"; 
    
    
var consulting_right = document.createElement("div");
consulting_right.className = "consulting-right";
consulting_row.appendChild(consulting_right);   
    
var consulting_right_img = document.createElement("img");
consulting_right.appendChild(consulting_right_img);
consulting_right_img.src = "img/" + consultingImg;
    

// Request Quote   
    
var rqt_con_fluid = document.createElement("div");
rqt_con_fluid.className = "Container-fluid request";
mainBody.appendChild(rqt_con_fluid);

var rqt_cont = document.createElement("div");
rqt_cont.className = "container";
rqt_con_fluid.appendChild(rqt_cont);

var rqt_row = document.createElement("div");
rqt_row.className = "row";
rqt_cont.appendChild(rqt_row);
    
var rqt_left = document.createElement("div");
rqt_left.className = "request-left";
rqt_row.appendChild(rqt_left);   
    
    
var rqt_h3 = document.createElement("h3");
rqt_h3.innerHTML = "The best business consultancy services in world";
rqt_left.appendChild(rqt_h3);
    
var rqt_p = document.createElement("p");
rqt_p.innerHTML = "There are many variations of passages of Lorem Ipsum available the majority alteration.";
rqt_left.appendChild(rqt_p);
    

var rqt_right = document.createElement("div");
rqt_right.className = "request-right";
rqt_row.appendChild(rqt_right);   
    
    
var rqt_a = document.createElement("a");
rqt_a.innerHTML = "Request Quote";
rqt_a.href = "#";
rqt_right.appendChild(rqt_a);   

//Industry Section   
    
var indus_con_fluid = document.createElement("div");
indus_con_fluid.className = "Container-fluid industry";
mainBody.appendChild(indus_con_fluid);

var indus_cont = document.createElement("div");
indus_cont.className = "container";
indus_con_fluid.appendChild(indus_cont);

var indus_row = document.createElement("div");
indus_row.className = "row";
indus_cont.appendChild(indus_row);
    
var indus_left = document.createElement("div");
indus_left.className = "industry-left";
indus_row.appendChild(indus_left);   
    
var indus_left_h2 = document.createElement("h2");
indus_left.appendChild(indus_left_h2);
indus_left_h2.innerHTML = "Industry leader in consulting services";
    
var indus_left_p = document.createElement("p");
indus_left.appendChild(indus_left_p);
indus_left_p.innerHTML = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eligendi fugiat!";

    
    
    
var indus_right = document.createElement("div");
indus_right.className = "industry-right";
indus_row.appendChild(indus_right);   
    
var indus_right_img = document.createElement("img");
indus_right.appendChild(indus_right_img);
indus_right_img.src = "img/" + industryImg;
   

// Clients Section   
    
var client_con_fluid = document.createElement("div");
client_con_fluid.className = "Container-fluid client";
mainBody.appendChild(client_con_fluid); 
    
var client_data = document.createElement("div");
client_data.className = "client-data";
client_con_fluid.appendChild(client_data);
    

var client_h1 = document.createElement("h1");
client_data.appendChild(client_h1);
client_h1.innerHTML = "Our Clients";
    
for (var i=0; i<clientImg.length; i++) {
 
var client_img = document.createElement("img");
client_data.appendChild(client_img);
client_img.src = "img/" + clientImg[i]; 
}

//footer section

var footer_con_fluid = document.createElement("div");
footer_con_fluid.className = "Container-fluid footer";
mainBody.appendChild(footer_con_fluid);

var footer_cont = document.createElement("div");
footer_cont.className = "container";
footer_con_fluid.appendChild(footer_cont);

var footer_row = document.createElement("div");
footer_row.className = "row";
footer_cont.appendChild(footer_row);
    
for (var i=0; i<footerItem.length; i++)
{
var footer_content = document.createElement("div");
footer_content .className = "footer-content";
footer_row.appendChild(footer_content );  
    
var footer_ul = document.createElement("ul");
footer_content.appendChild(footer_ul);
    
var footer_ul_li = document.createElement("li");
footer_ul.appendChild(footer_ul_li);
footer_ul_li.innerHTML = "<h3>"+ footerItem[i][0]+ "</h3>"+ 
footerItem[i][1] +"<br>"  +footerItem[i][2]+ "<br>"+ footerItem[i][3] ;
        
}

var footer_last_row = document.createElement("div");
footer_last_row.className = "row";
footer_cont.appendChild(footer_last_row);
    
var footer_last_p = document.createElement("p");
footer_last_row.appendChild(footer_last_p);
footer_last_p.innerHTML = "<a href = '#'>Bootstrap Theme </a>by WebThemez. <br> © All Rights Reserved";

 
    
    
    
    
    
    
    
    
    
    
    
    
}

