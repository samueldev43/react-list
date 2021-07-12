import { useState,useCallback, FormEvent } from "react";
import { IoCloseSharp } from 'react-icons/io5'
import Modal from 'react-modal'
import { Form } from "./style";

import axios from 'axios'

interface ModalProps {
    isOpen: boolean,
    openRequestClose: () => void,
    vagas: number
}

Modal.setAppElement('#root')

export const RegisterModal: React.FC<ModalProps> = ({isOpen, openRequestClose, vagas}: ModalProps) => {
    const [studentName, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [mumsName, setMumsName] = useState('')
    const [age, setAge] = useState(0)

    const register = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(vagas !== 0) {
            axios.post('http://localhost:3001/registeredStudents', {
                studentName,
                surname,
                mumsName,
                age
            })

            setName('')
            setSurname('')
            setMumsName('')
            setAge(0)

            openRequestClose()
        } else {
            setName('')
            setSurname('')
            setMumsName('')
            setAge(0)
        }
    },[studentName, surname, mumsName, age, openRequestClose, vagas])

    return(
        <>
        <Modal
        isOpen={isOpen}
        onRequestClose={openRequestClose}
        overlayClassName="modal-overlay"
        className="modal-content"
        >
        <Form onSubmit={register}>
        <button className="close-btn" onClick={openRequestClose}><IoCloseSharp size={20}/></button>

            <input type="text"  
            placeholder="Nome" 
            value={studentName}
            onChange={(e) => setName(e.target.value)}
            required/>

            <input type="text"  
            placeholder="Sobrenome" 
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
            />
            <input type="text"
            placeholder="Nome da mãe"
            value={mumsName}
            onChange={(e) => setMumsName(e.target.value)}
            required
            />
            <input type="number"
            placeholder="Idade"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            required/>

            <button type="submit">
                Matricular
            </button>
        </Form>
        </Modal>
        </>
    )
}