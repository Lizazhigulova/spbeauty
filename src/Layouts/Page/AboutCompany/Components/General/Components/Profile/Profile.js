import Avatar from "./Avatar";
function Profile() {
    return (
        <div className='d-inline-flex flex-row'>
            <Avatar/>
            <div className='ms-3 d-inline-flex flex-column justify-content-center'>
                <div className='title mb-2'>SPBEAUTY</div>
                <div className="mb-1 text-rg-cp">Салон красоты</div>
                <div className="mb-1 text-rg-cp">Санкт-Петербург, Невский пр-т. 28</div>
            </div>                  
        </div>
    );
}

export default Profile;
