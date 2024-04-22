import React, { useState } from "react";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const navItems = [
        {
            id: 1,
            label: "Home",
            link: "/",
        },
        {
            id: 2,
            label: "Store",
            link: "/store",
        },
        {
            id: 3,
            label: "Dashboard",
            link: "/dashboard",
        },
    ];
    const onToggle = () => {
        setToggle((prev) => !prev);
    };

    return (
        <div className="">
            <nav className="w-full flex items-center justify-between px-5 py-3">
                <div className="">
                    <h5>EcoMarket</h5>
                </div>
                <div className="">
                    <button className={`nav-toggle ${toggle ? "show" : ""}`} onClick={onToggle}>
                        <span className=""></span>
                    </button>
                    <ul className="fixed w-full h-full -right-full top-0">
                        {navItems.map((item, idx) => (
                            <li key={item.id}>{item.label}</li>
                        ))}
                    </ul>
                </div>
                <div className="hidden"></div>
            </nav>
        </div>
    );
};

export default Navbar;
