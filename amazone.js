
CallAllFunction();

function CallAllFunction(){
NavBar();
BestDeal();
sliderImage();
CallArrayAndObject();
AllSideNavBarFun()
}

function BestDeal(){
    let bestDealContainer =  document.querySelector('.best_deal_content_con');
    let innerhtml = '';
    BeastDealItems.forEach(items => {
        innerhtml +=  ` <a href="#"><img src="${items.Image}" alt=""></a>`

     bestDealContainer.innerHTML = innerhtml;

    });
}

function NavBar(){
    let navecontainer = document.querySelector('.navebar_container');
    let innerhtml = '';
    NavBarData.forEach(items => {
        innerhtml += `<a href= "${items.link}">${items.name}</a>`
    });

    return navecontainer.innerHTML = innerhtml;

}

function sliderImage(){
 let sliderImageCntainer = document.querySelector('#banerImaheCon');
 let innerhtml = ''
 sideImage.forEach(element => {
    innerhtml +=`<a href="${element.link}" class= "SideIMageBaner"><img src="${element.Image}" id="imageBaner"  alt="baner" class="baner_image"></a>`
    
 });
  
 sliderImageCntainer.innerHTML = innerhtml;

}

function pro_four_img_cont(arrItems){
    let innerhtml = '';
    arrItems.forEach(items => {
        innerhtml += `
        <div class="single_img_con">
            <a href="${items.link}">
             <img class="allImage_sam" src="${items.Image}"alt="">
                <span>${items.productName}</span>
            </a>
        </div>
        `
    });
    return innerhtml;

}

function pro_one_img_cont(arrItems){
    let innerhtml = '';
    arrItems.forEach(items => {
       innerhtml += `
       <div class="single_img_box">
            <a href="${items.link}">
                <img class="single_image" src="${items.Image}" alt="">
            </a>
        </div>`
    });
    return innerhtml;
}

function showAds(arrItems){
    let innerhtml = '';
    arrItems.forEach(items => {
        innerhtml += 
        `<a href="${items.link}" class = "AddResponse">
         <img " src="${items.Image}" alt="">
        </a>`
    });
    return innerhtml;
}

function sectionThird(arrItems){
    let innerhtml = '';
    arrItems.forEach(items => {
        innerhtml += ` 
        <div class="Bal_image_container sameAll_img_con">
            <a href="${items.link}"> 
              <img src="${items.Image}" alt="">
            </a>
            <div class="Ba_content_con">
                <a href="${items.link}" style="text-decoration: none; color: black;">
                    <div class="discount">
                        <span class="off">${items.discout.offer} off</span>
                        <span class="freedom_sale">${items.discout.name}</span>
                    </div>
                    <span class="Price_container"> 
                        <span class="price">₹${items.priceContainer.cureentPrice}<sup>00</sup></span>
                        <span class="MRP">M.R.P:</span>
                        <del class="delete">₹${items.priceContainer.oraginalPrice}.00</del> 
                    </span>
                    <span class="product_info">${items.productName}</span>
                </a>
            </div>
        </div>`
    });
    return innerhtml;
}

// container 6

function sectionSix(arrItems){
    let innerhtml ='';
    arrItems.forEach(items => {
        innerhtml += ` 

        <div class=" sectionSIX_content_container " >
            <a href="${items.link}" class = contSixImageAndName> 
                <img src="${items.Image}" alt="">
                <span> ${items.productName}</span>
            </a>
            <div class="Ba_content_con">
                <a href="${items.rating.link}" style="text-decoration: none; color: black;">
                    <div class="rating">
                        <span class="star">${items.rating.star}</span>
                        <span class="reveiw">${items.rating.reveiw}</span>
                    </div>
                </a>
                <a href="${items.link}" style="text-decoration: none; color: black;">
                    <div class="Price_container"> 
                        <span class="price">₹${items.priceContainer.cureentPrice}</sup></span>
                        <span> (${items.priceContainer.cureentPrice}/${items.priceContainer.Quantity})</sppan>
                    </div>
                </a>
                <div class="delivery_containr">
                    <span class="delivery_date">Get it by ${items.delivery.date}</span>
                    <span class="delivery_status">${items.delivery.date}</span>
                </div>
            </div>
        </div> `
    });

    return innerhtml;
}


function CallArrayAndObject(){


                                
    // section1 

    const  boxFirstcon = document.querySelector('.AllfourImage_con');
    boxFirstcon.innerHTML = pro_four_img_cont(Box1Data);

    const BoxSecandCont = document.querySelector('#BoxSecandImg');
    BoxSecandCont.innerHTML = pro_four_img_cont(box2Data);

    const BoxthirdCont = document.querySelector('#boxSingleImg');
    BoxthirdCont.innerHTML = pro_one_img_cont(box3Data);

    const AdsImgCont = document.querySelector('.ads_container');
    AdsImgCont.innerHTML = showAds(box4Data);

    // section2

    const sec2Boxfirstcon =document.querySelector('#sectionsecandfistcon');
    sec2Boxfirstcon.innerHTML =  pro_four_img_cont(sectionsecBoxone)

    const sec2BoxSecandcon =document.querySelector('#secndContBoxTwo');
    sec2BoxSecandcon.innerHTML =  pro_one_img_cont(secandContBoxTwo);

    const sectionTwoBoxthird = document.querySelector('#secndContBoxthree');
    sectionTwoBoxthird.innerHTML = pro_four_img_cont(sectionsecdBoxthree);

    const sectionTwoBoxfour = document.querySelector('#secndContBoxfour');
    sectionTwoBoxfour.innerHTML = pro_four_img_cont(sectionsecdBoxfour);

    // section3

    const sectionthird = document.querySelector('#sectionThirdContainer');
    sectionthird.innerHTML = sectionThird(section3);

    // section4
    const sectionfourBoxOne= document.querySelector('#sectionFiveImageCont');
    sectionfourBoxOne.innerHTML = pro_four_img_cont(sectionFourcBoxone);

    const sectionfourBoxTwo= document.querySelector('#SectionFiveBoxTwoCont');
    sectionfourBoxTwo.innerHTML = pro_four_img_cont(sectionFourBoxtwo);

    const sectionfourBoxThree= document.querySelector('#SectionFiveBoxThreeCont');
    sectionfourBoxThree.innerHTML = pro_four_img_cont(sectionFourBoxThree);

    const sectionfourBoxFour= document.querySelector('#SectionFiveBoxFourCont');
    sectionfourBoxFour.innerHTML = pro_one_img_cont(sectionFourBoxFour);

      
    // section 6

    const sectionsix = document.querySelector('#sectionSixdContainer');
    sectionsix.innerHTML = sectionSix(section6); 

}





