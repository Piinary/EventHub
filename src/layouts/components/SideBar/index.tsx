import clsx from 'clsx';
import styles from './sideBar.module.css';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import img from '../../../../public/img.jfif';
import { Bounce, ToastContainer, toast } from 'react-toastify';
interface Props {
    position: 'left' | 'right';
}
function SideBar(props: Props) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    toast('Hello cục cưng của anh', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    setShow(true)};

    return ( <div className={clsx(props.position =='left'?  styles.position_l: styles.position_r, styles.wrapper)}>
        <h1>SideBar</h1>
        
        <Button onClick={handleShow} variant='warning'>Button</Button>
        <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Siuuuu Yêu Emmmm</Modal.Title>
        </Modal.Header>
        <Modal.Body><div className={styles.image_wrapper}>
        <img src={img} alt="" className={styles.image} />
        </div></Modal.Body>
        <br />
      </Modal>
    </div>
    </div> );
}

export default SideBar;