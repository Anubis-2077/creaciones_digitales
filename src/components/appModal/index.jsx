import { Modal, ModalDialog, ModalClose, Typography } from '@mui/joy';
import PropTypes from 'prop-types';
import './styles.css'

const AppModal = ({ titulo, cuerpo, open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ModalDialog color="neutral" layout="center" size="lg" variant="soft" className='preguntasFrecuentes'>
                <ModalClose onClick={onClose} />
                <Typography level="h4" component="h2" className='appModalTitle'>{titulo}</Typography>
                <Typography className='appModalBody'>{cuerpo}</Typography>
            </ModalDialog>
        </Modal>
    );
};

AppModal.propTypes = {
    titulo: PropTypes.string.isRequired,
    cuerpo: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default AppModal;
