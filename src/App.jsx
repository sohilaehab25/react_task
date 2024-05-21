// import React, { useState } from "react";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import AllTeachers from './teachers/AllTeachers';
// import ListChildren from './children/ListChildren';
import ListClasses from './classes/ListAllclasses';
import { Home } from "./copmonents/Home";
import { NotFound } from "./copmonents/NotFound";
import SharedLayout from "./Sharedlayout/SharedLayout";
import ChildDetailsModal from "./children/ChildDetailsModal";
// import AddChildForm from "./children/AddChildForm";
// import UpdateChildForm from './children/UpdateChildForm';
import ChildrenTable from "./children/ChildrenTable";
import FormChild from "./children/FormChild";


function App() {

    // const handleAddChild = (newChild) => {
    //     ListChildren(prevChildren => [...prevChildren, newChild]);
    // };

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path='/' element={<SharedLayout />}>
                    <Route path="home" index element={<Home />} />
                    <Route path="list_all_teachers" element={<AllTeachers />} />
                    <Route path="list_all_children" element={<ChildrenTable />} />
                    <Route path="list_all_classes" element={<ListClasses />} />
                    <Route path="/child_info/:id" element={<ChildDetailsModal />} />
                     <Route path="add_child" element={<FormChild  />} />
                    <Route path="/child_update/:id" element={< FormChild />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </>
        )
    );

    return (
        <RouterProvider router={router} />
    );
}

export default App;
