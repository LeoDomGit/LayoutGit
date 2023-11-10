import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Swal from "sweetalert2";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import Loader from "../components/Loading.jsx/Loader";
import { Link } from "react-router-dom";
function Education() {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [edit, setEdit1] = useState(false);
  const [edu, setEdu] = useState("");
  const [education, setEucation] = useState([]);
  const [idEdit, setIdEdit] = useState(0);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState([]);
  const [lastpage, setLast] = useState(0);
  const [lastpage1, setLast1] = useState(0);
  const [pageSc, setPageSc] = useState(1);
  const [show3, setShow3] = useState(false);

  const setSideBar1 = () => {
    if (show3 == false) {
      setShow3(true);
    } else {
      setShow3(false);
    }
  };
  return (
    <>
      <Sidebar show={show3} />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Loại hình giáo dục</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder="Loại hình giáo dục"
            onChange={(e) => setEdu(e.target.value)}
            className="form-control"
            value={edu}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          {!edit && <Button variant="primary">Lưu</Button>}
          {edit && <Button variant="warning">Lưu</Button>}
        </Modal.Footer>
      </Modal>
      <div classname={`content ${show3 ? "" : "open"} mt-3`}>
        {loading && <Loader />}
        <nav
          style={{
            paddingLeft: show3 ? "27%" : "2%",
            transition: "ease-in-out .3s",
          }}
          className="navbar navbar-expand sticky-top pt-3 px-4 py-0"
        >
          <button
            className="btn btn-success me-3"
            onClick={(e) => setSideBar1()}
          >
            <i class="bx bx-menu"></i>
          </button>
          <button className="btn btn-primary" onClick={(e) => setShow(true)}>
            Thêm
          </button>
        </nav>
        <div className="container-fluid">
          <div className="row mt-3">
            {education && education.length > 0 && (
              <div className="col-md ms-3">
                <div className="table-responsive">
                  <table className="table table-primary">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Giáo Dục</th>
                        <th scope="col">Tình trạng</th>
                        <th scope="col">Khởi tạo</th>
                        <th scope="col">Tùy chỉnh</th>
                      </tr>
                    </thead>
                    <tbody>
                      {education.map((item, index) => (
                        <tr key={index} className="">
                          <td>{++index}</td>
                          <td>
                            <Link
                              style={{ textDecoration: "none" }}
                              to={`/education/${item.id}`}
                            >
                              {item.name}
                            </Link>
                          </td>
                          <td>
                            {item.status == 0 ? (
                              <b>Đang khóa</b>
                            ) : (
                              <b>Đang mở</b>
                            )}
                          </td>
                          <td>{item.created_at}</td>
                          <td>
                            <button className="btn btn-warning btn-sm">
                              Sửa
                            </button>
                            <button className="btn btn-danger btn-sm">
                              Xóa
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {pagination.length > 1 && (
                    <div className="row w-100">
                      <div className="col-md">
                        <nav aria-label="...">
                          <ul className="pagination">
                            <li className={`page-item`}>
                              <a className="page-link">Previous</a>
                            </li>
                            {pagination.map((item, index) => (
                              <li key={index} className="page-item">
                                {item == page ? (
                                  <a
                                    className="page-link active"
                                    onClick={(e) => setPage(item)}
                                    href="#"
                                  >
                                    {item}
                                  </a>
                                ) : (
                                  <a
                                    className="page-link"
                                    onClick={(e) => setPage(item)}
                                    href="#"
                                  >
                                    {item}
                                  </a>
                                )}
                              </li>
                            ))}

                            <li className="page-item">
                              <a className="page-link" href="#">
                                Next
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
