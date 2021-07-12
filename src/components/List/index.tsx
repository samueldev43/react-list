
import { HeaderComponent } from "../Header"

import { Container } from './style'

import {MdChildCare} from 'react-icons/md'

import {StudentDatas} from '../../App'


interface ListProps {
    setIsOpen: () => void,
    data: StudentDatas[],
    vagas: number
}

export const List: React.FC<ListProps> = ({setIsOpen, data, vagas}: ListProps) => {

    return (
        <>
        <HeaderComponent setIsOpen={setIsOpen}/>
        <Container>
        <strong>Vagas abertas {vagas}</strong>

            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th>Mãe</th>
                        <th>Idade</th>
                    </tr>
                </thead>

                <tbody>
                   {data.map( eachData => (
                    <tr key={eachData.id}>
                        <td>{eachData.studentName}</td>
                        <td>{eachData.surname}</td>
                        <td>{eachData.mumsName}</td>
                        <td>
                         {eachData.age}
                         <MdChildCare />
                         </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Container>
        </>
    )
}