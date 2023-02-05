import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";
function AboutCompany() {
    return (
        <div>
            <Heading/> {/* Заголовок и кнопка справа */}
            <div className='flex-direction: row'>
                <div className="d-inline-flex col-lg-5 "><General/>  {/* Основная информация вроде названия, типа и телефона */}</div>
                <div className="d-inline-flex col-lg-5 "><Addresses/> {/* Список доступных адресов заведений */}</div>
            </div>
        </div>
    );
}

export default AboutCompany;
