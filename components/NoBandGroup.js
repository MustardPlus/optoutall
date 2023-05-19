import NoBand from './NoBand';

const renderNoBands = (instances) => {
    if (instances.length > 0) {      
        return instances.map((inst, index) => (
            <NoBand key={index} text={inst[0]} color={inst[1]} />
        ));
    }
    else return [];
}

export default function NoBandGroup({group}){
    return (
        <div className="noband_group">
            { renderNoBands(group) }
        </div>
    );
}