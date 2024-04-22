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
                <div className="xl:flex-1">
                    <button className={`nav-toggle ${toggle ? "show" : ""} xl:hidden`} onClick={onToggle}>
                        <span className=""></span>
                    </button>
                    <div
                        className={`fixed w-full h-full transition-all top-0 ${
                            toggle ? "right-0" : "-right-full"
                        } flex justify-center items-center bg-primary xl:static xl:justify-between xl:h-max xl:bg-inherit xl:max`}
                    >
                        <ul className="xl:flex xl:space-x-10">
                            {navItems.map((item, idx) => (
                                <li key={item.id}>{item.label}</li>
                            ))}
                        </ul>
                        <div className=""></div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
