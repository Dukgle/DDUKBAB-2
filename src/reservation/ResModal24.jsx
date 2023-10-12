import React, { useState } from 'react';
import Modal from 'react-modal';
import "./ResModal24.css"; // CSS 파일을 임포트

Modal.setAppElement('#root');

function TwoFourSeatModal({ isOpen, closeModal, seatCount, tableInfo }) {
    const [studentIds, setStudentIds] = useState(Array(seatCount).fill(''));

    const handleStudentIdChange = (e, index) => {
        const newStudentIds = [...studentIds];
        newStudentIds[index] = e.target.value;
        setStudentIds(newStudentIds);
    };

    const handleReserveClick = () => {
        const reservedSeats = studentIds.filter((studentId) => studentId !== '');
        if (reservedSeats.length === seatCount) {
            alert(`테이블 ${tableInfo}, 학번 ${reservedSeats.join(', ')}으로 좌석 예약을 진행합니다.`);
            closeModal();
        } else {
            alert('학번을 모두 입력하세요.');
        }
    };

    const renderInputFields = () => {
        const inputFields = [];
        for (let i = 0; i < seatCount; i++) {
            inputFields.push(
                <div key={i}>
                    <p>학번 {i + 1}을 입력하세요:</p>
                    <input
                        type="text"
                        value={studentIds[i]}
                        onChange={(e) => handleStudentIdChange(e, i)}
                        className="stdnum" // stdnum 클래스 추가
                    />
                </div>
            );
        }
        return inputFields;
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={closeModal} className="ResModal">
            <div className='ModalContent'>
                <h1>{tableInfo}</h1>
                <h2>테이블을 예약하시겠습니까?</h2>
                {renderInputFields()}
                <button onClick={handleReserveClick} className="res">예약</button>
                <button onClick={closeModal} className="notres">닫기</button>
            </div>
        </Modal>
    );
}

export default TwoFourSeatModal;
