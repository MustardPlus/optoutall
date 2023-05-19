import LinkBand from './LinkBand';

const renderLinkBands = (instances) => {
    if (instances.length > 0) {      
        return instances.map((inst, index) => (
            <LinkBand key={index} text={inst[0]} goto={inst[1]} color={inst[2]} />
        ));
    }
    else return [];
}

export default function LinkBandGroup({group}){
    return (
        <div className="linkband_group">
            { renderLinkBands(group) }
        </div>
    );
}