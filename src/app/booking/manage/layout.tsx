import { ReactNode } from "react";

export default function ManageBookingLayout ({children, dashboard, manage}:{children:ReactNode, dashboard:ReactNode, manage:ReactNode}) {
    return (
        <div className="flex flex-col w-full">
            {children}
            {dashboard}
            {manage}
        </div>
    )
}