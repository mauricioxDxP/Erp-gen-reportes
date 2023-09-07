export const modalTexto = (): string => {
    return (
        `import { styled } from "@mui/system";
import AppModal from "components/AppModal";

const StyledAppModal = styled(AppModal)(({
    theme
}) => ({
    maxWidth: 700,
    minWidth: 300,
    outline: "none",
    padding: "1.5rem"
}));

export const UsuarioEliminarModal = ({
    open,
    data,
    onClose,
    editRol
}) => {
    return (
        <StyledAppModal open={open} handleClose={onClose}>
            
        </StyledAppModal>
    );

};        
`
    );
}