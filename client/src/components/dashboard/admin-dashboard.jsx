import React from "react";
import { useState } from "react";
import { AuthState } from "../../context/AuthContext";

const AdminDashboard = () => {
    const {user}=AuthState();
    const [dta,setDta]=useState([]);
    const getDash = async () => {
        
        
        //console.log(user)
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          };
          const { data } = await axios
            .get(`/api/admin/Dashboard`, config)
          //console.log(user)
          //console.log(data);
          setDta(data);
        } catch (error) {
          console.log(error);
        }
      };

    const decline=async()=>{
        try {
            const sender=
            const config = {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            };
            const { data } = await axios
              .post(`/api/admin/Dashboard/form-decline`, {},config)
           
            setDta(data);
          } 

    }
    
      useEffect(() =>{
        
    
        getDash();
        
       },[getDash])
    return (
        <div>
        <h1>Admin Dashboard</h1>
        </div>
    );
}

export default AdminDashboard;