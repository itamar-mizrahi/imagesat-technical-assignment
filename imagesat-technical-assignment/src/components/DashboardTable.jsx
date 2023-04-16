import React from "react";
import { useTable } from "react-table";
import { useMemo } from "react";
import { Columns } from "./columns";

export const DashboardTable = ({ data }) => {

    const columns = useMemo(()=> Columns, []);
    const table=useTable({ columns, data });
    return (
        <table>     
        </table>
    )
    }