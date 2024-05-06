import * as React from 'react';
import { Link } from '@mui/material';
import AppModal from './AppModal'; // Asegúrate de que la ruta de importación es correcta

const ModalOpener = () => {
    const [modalOpen, setModalOpen] = React.useState(false);
    const [modalContent, setModalContent] = React.useState({ titulo: '', cuerpo: '' });

    const handleOpenModal = (titulo, cuerpo) => {
        setModalContent({ titulo, cuerpo });
        setModalOpen(true);
    };

    return (
        <React.Fragment>
            <Link 
                href="#" 
                color="inherit" 
                style={{ display: "block" }}
                onClick={(e) => {
                    e.preventDefault();
                    handleOpenModal('Métodos de pago', 'Aquí va la descripción de los métodos de pago.');
                }}
            >
                Métodos de pago
            </Link>
            <AppModal
                titulo={modalContent.titulo}
                cuerpo={modalContent.cuerpo}
                open={modalOpen}
                onClose={() => setModalOpen(false)}
            />
        </React.Fragment>
    );
};

export default ModalOpener;
