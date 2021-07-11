import profile from '../../../../assets/profile.jpg';

export default function ProfileComponent()
{
    const img = {
        margin:'0px',
        padding:'0px',
        width:'240px',
        height:'250px',
        borderRadius:'25% 25%',
        
    }

    return (<img src={profile} alt='profile' style={img} />)
}
