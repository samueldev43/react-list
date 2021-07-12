
import { Header, Container } from './style'

interface HeaderProps {
    setIsOpen: () => void
}

export const HeaderComponent: React.FC<HeaderProps> = ({setIsOpen}: HeaderProps) => {
    return (
        <Header>
            <Container>
            <h1>Matricule seu filho</h1>
            <button type="button" onClick={setIsOpen}>
                matricula
            </button>
            </Container>
        </Header>
    )
}

