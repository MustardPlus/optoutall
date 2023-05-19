import logo from '@public/assets/icons/ooall_logo_ex.png';
import Image from 'next/image';

export default function Branding(){
    return (
        <Image id="fronter" className="branding lead_photo" src={logo} alt="opt-out-all" width="1655" height="1065"/>
    );
}