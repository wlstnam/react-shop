import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      console.log("성공");
      props.closeModal();
    } catch (error) {
      console.error("Error logging in", error);
    }
  };

  const goToSignup = () => {
    setIsModalOpen(false);
    navigate("/signup");
  };

  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        로그인
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black opacity-50 absolute inset-0"></div>
          <div className="bg-white p-8 rounded-lg shadow-lg z-10 relative">
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email: </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="p-2 border rounded text-black"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Password: </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="p-2 border rounded text-black"
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="mr-2 px-4 py-2 bg-green-500 text-white rounded"
                >
                  로그인
                </button>
                <button
                  onClick={goToSignup}
                  className="bg-blue-600 text-white px-4 py-2 rounded mr-2"
                >
                  회원가입
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-red-500 text-white rounded"
                >
                  닫기
                </button>
              </div>
            </form>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
