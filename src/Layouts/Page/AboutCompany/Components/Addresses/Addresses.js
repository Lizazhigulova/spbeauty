import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";

function Addresses() {
    return (
        <div className='d-inline-flex flex-column gap-5 mt-4 borderFrame '>
            <div className='title'>Адреса заведений</div>
            <div className='d-inline-flex flex-column gap-4'>
               <div className="text-rg pt-2 pb-2"><ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement></div>
               <div className="text-rg pt-2 pb-2"><ListElement>Санкт-Петербург, Казанская ул, 7</ListElement></div>
            </div>
            <div className="mt-auto gap-4">
            <SecondaryButton>Закрыть запись</SecondaryButton></div>
        </div>
    );
}

export default Addresses;
