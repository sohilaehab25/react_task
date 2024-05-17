import React, { useState } from "react";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import AllTeachers from './teachers/AllTeachers';
import ListChildren from './children/ListChildren';
import ListClasses from './classes/ListAllclasses';
import { Home } from "./copmonents/Home";
import { NotFound } from "./copmonents/NotFound";
import SharedLayout from "./Sharedlayout/SharedLayout";
import ChildDetailsModal from "./children/ChildDetailsModal";
import AddChildForm from "./children/AddChildForm";
import UpdateChildForm from './children/UpdateChildForm'

function App() {
    const [childrenList, setChildrenList] = useState([
        { id: 1, fullName: 'John Doe', age: 5, level: 'Kg1' },
        { id: 2, fullName: 'Jane Doe', age: 4, level: 'PreKG1' },
        // Add more children objects here
    ]);

    const handleAddChild = (newChild) => {
        setChildrenList(prevChildren => [...prevChildren, newChild]);
    };

    const handleDeleteChild = (index) => {
        setChildrenList(prevChildren => prevChildren.filter((_, i) => i !== index));
    };

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path='/' element={<SharedLayout />}>
                    <Route path="home" index element={<Home />} />
                    <Route path="list_all_teachers" element={<AllTeachers />} />
                    <Route path="list_all_children" element={
                        <ListChildren childrenList={childrenList} onDeleteChild={handleDeleteChild} />
                    } />
                    <Route path="list_all_classes" element={<ListClasses />} />
                    <Route path="/child_info/:id" element={<ChildDetailsModal />} />
                    <Route path="add_child" element={
                        <AddChildForm onAddChild={handleAddChild} />
                    } />
                    <Route path="/child_update/:id" element={< UpdateChildForm />} />
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
