
export default function NoBand({text, color}){
    const myclass = "noband sm:text-2xl text-base "+color;
    return (
        <>
        <div className={myclass}>
            {text}
        </div>
        </>
    );
}