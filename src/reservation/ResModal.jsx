import React, { useState } from "react";
import Modal from "react-modal";
import "./ResModal.css"; // CSS 파일을 임포트

Modal.setAppElement("#root");

function OneSeatModal({ isOpen, closeModal, content }) {
  const [studentId, setStudentId] = useState("");

  const handleStudentIdChange = (e) => {
    setStudentId(e.target.value);
  };

  const handleReserveClick = () => {
    if (!studentId) {
      alert("학번을 입력하세요.");
    } else {
      alert(`학번 ${studentId}으로 ${content} 좌석 예약을 진행합니다.`);
      closeModal();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="ResModal" // ResModal 클래스 추가
    >
      <div className="ModalContent"> 
        <h1>{content}</h1>
        <h2>좌석을 예약하시겠습니까?</h2>
        <p>학번을 입력하세요</p>
        <input className="stdnum" type="text" value={studentId} onChange={handleStudentIdChange} />
        <button className="res" onClick={handleReserveClick}>예약</button>
        <button className="notres" onClick={closeModal}>닫기</button>
      </div>
    </Modal>
  );
}

export default OneSeatModal;
