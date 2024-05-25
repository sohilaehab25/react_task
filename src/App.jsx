import React from "react";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import ListClasses from './classes/ListAllclasses';
import TeacherTable from "./teacher/TeacherTable";
import { Home } from "./copmonents/Home"
import { NotFound } from "./copmonents/NotFound";
import SharedLayout from "./Sharedlayout/SharedLayout";
import ChildDetailsModal from "./children/ChildDetailsModal";
import ChildrenTable from "./children/ChildrenTable";
import FormChild from "./children/FormChild";
import TeacherForm from "./teacher/TeacherForm";
import TeacherDetails from "./teacher/TeacherDetails";
import { getAllTeachers } from "./redux/teacher";

function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path='/' element={<SharedLayout />}>
                    <Route path="/" index element={<Home />} />
                    <Route 
                    path="list_all_teachers"
                     element={<TeacherTable/>} />
                    <Route path="list_all_children" element={<ChildrenTable />} />
                    <Route path="list_all_classes" element={<ListClasses />} />
                    <Route path="child_info/:id" element={<ChildDetailsModal />} />
                    <Route path="teacher_info/:id" element={<TeacherDetails />} />
                    <Route path="add_child" element={<FormChild />} />
                    <Route path="add_teacher" element={<TeacherForm />} />
                    <Route path="teacher_update/:_id" element={<TeacherForm />} />
                    <Route path="child_update/:_id" element={<FormChild />} />
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
