import { Route, Routes } from "react-router-dom"

import Create from "./pages/Create"
import Edit from "./pages/Edit"
import List from "./pages/List"

export function AddRoutes() {
    return (
      <Routes>
        <Route path="/">
          <Route path="/users" element={<UserList />} />
          <Route path="/users/new" element={<UserCreate />} />
          <Route path="/users/:id" element={<UserEdit />} />
        </Route>
      </Routes>
    )
  }