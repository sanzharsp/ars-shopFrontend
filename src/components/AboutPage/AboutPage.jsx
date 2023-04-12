import './AboutPage.css'
import TextAnim from '../Animation/PrintsTextAnim'
import Footer from '../footer/footer'


const AboutPage = () => {


    return(
        <div className="about_page" >

       
 
        <div className="container_about text_before_after">

            <h1>Біз туралы</h1>
          
          
            </div>
   
            <div className="text_anim_style ">
            <TextAnim  width={46} text_main={"«Ыңғайлы,жылдам,тиімді–бізбен сауда жасаңыз!»"} />
            
            
        <div className="Content_container">
   
       <TextAnim  width={10} text_main={"(ARS-SHOP)"} />
       <div className="castom_text_design">
       <div className="container_about_text_design">
         <h1 className="text_about_pages">«Біздің интернет-дүкенмен шекарасыз сауда әлемін ашыңыз!»</h1>
       </div>
     </div>
        </div>
            <div className="text_container">
  
            <h4 className="text_about_us">
            Арсен әрқашан технологияға және Интернетке қатысты барлық нәрселерге құмар болды. Ол IT-компанияда жұмыс істеді, бірақ өз бизнесімен айналысуды армандады. Бір күні ол ғылыми фантастика мен қиялды ұнататын адамдар үшін эксклюзивті өнімдер сататын интернет-дүкен құру туралы ойлады.

Арсен көп уақытын нарықты зерттеп, өзінің мақсатты аудиториясының сұранысын зерттеді. Ол өзінің дүкенін бірегей заттармен қамтамасыз ете алатын жеткізушілер мен өндірушілерді іздей бастады. Белгілі болғандай, бұл оңай болмағанымен, Арсен берілмеді.</h4>

        </div>







        
        <div className="text_container">
        <h4 className="text_about_us">Соңында Арсен онымен жұмыс істеуге дайын бірнеше жеткізушілерді тапты. Ол веб-сайт жасап, өнімдерін сата бастады. Алғашқы айлар оңай болған жоқ, бірақ Арсен үмітін үзген жоқ және дүкенін жақсарту бойынша жұмысын жалғастырды.

Уақыт өте келе Арсеннің интернет-дүкені фантастика мен фантастика жанкүйерлері арасында танымал болды. Ол өз ассортиментін кеңейтуді және қызмет көрсетуді жақсартуды жалғастырды, тұтынушыларды көбірек тарта берді.

Бүгінде Арсеннің интернет-дүкені өз тауашасында үздіктердің бірі, ал Арсеннің өзі армандарын жүзеге асырып, кәсібін жетілдіру жолында жұмыс істеп жатқан табысты кәсіпкер.</h4>
        </div> 
        </div>
    

        <h4 className="text_brain">"«Интернет-дүкен – бұл сауда жасаудың ыңғайлы тәсілі ғана емес, сонымен қатар әлемнің түкпір-түкпірінен жаңа өнімдер мен брендтерді табу мүмкіндігі»."</h4>
 
        <div className="day-night-circle">
        
        <div className="sun"></div>
        <div className="moon">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="stars">
        
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
       
        <div className="water"></div>
   
        </div>
        <div className="paddings"/>
     
        <Footer/>

        </div>
    )
}



export default AboutPage;