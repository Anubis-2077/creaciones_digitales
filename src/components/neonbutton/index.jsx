import './styles.css'
import PropTypes from 'prop-types';

const NeonButton = ({nombreBoton})=>{
    return(
        <button className="custom-btn btn-7"><span>{nombreBoton}</span></button>
    )
}
export default NeonButton

NeonButton.propTypes = {
    nombreBoton: PropTypes.string.isRequired,
    
  };