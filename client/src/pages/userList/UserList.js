import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DeleteOutline } from '@material-ui/icons';
import { DataGrid } from '@material-ui/data-grid';

import styles from './UserList.module.css';
import { userRows } from '../../dumData';

const UserList = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    console.log('i am called');
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
      field: 'username',
      headerName: 'User',
      width: 150,
      renderCell: (params) => {
        return (
          <div className={styles.userListUser}>
            <img className={styles.userAvatar} src={params.row.avatar} alt='' />
            {params.row.username}
          </div>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 175 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 150,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`}>
              <button className={styles.userListEdit}>Edit</button>
            </Link>
            <DeleteOutline
              className={styles.userListDelete}
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className={styles.userList}>
      <DataGrid
        rows={userRows}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
};

export default UserList;
