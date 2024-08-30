import { Button, Flex } from 'antd';
import './button.css'
import React from 'react'
import { useState } from "react"
import './sidebar.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {action} from '@storybook/addon-actions'

/*Icon, Image*/
import vertical from './Line 1.png'
import game from './Vector.jpg';
import { PlusOutlined } from '@ant-design/icons';
import { FaRocket } from "react-icons/fa6";
import { BsBrush } from "react-icons/bs";
import { BsFolder } from "react-icons/bs";


type Props={
    Menu: [
        {
            title: string;
            childrens:[
                {
                    sub:string;
                },

                {
                    sub:string;
                },

                {
                    sub:string;
                },

            ]
            
        },

        {
            title: string;
            childrens:[
                {
                    sub:string;
                },

                {
                    sub:string;
                },

                {
                    sub:string;
                },
            
            ]

        },

        {
            title: string;
            childrens:[
                {
                    sub:string;
                },

                {
                    sub:string;
                },

                {
                    sub:string;
                },

            ]
        },

        {
            title: string;
            childrens:[
                {
                    sub:string;
                },

                {
                    sub:string;
                },

                {
                    sub:string;
                },

            ]
        }
    ],

    Title?:{
        Menu_Title:string;
    },

    Box?:{
        Text:string;
    },

    selected:string[];

    loading: boolean;
};


    const meta: React.FC<Props> = ({Menu, Title, Box,selected}: Props) => {

        function SidebarItem({ item }: { item: { title: string; childrens?: { sub: string }[] } }) {
                
                const [open, setOpen] = useState(false);

                const [selectedItem, setSelectedItem] = useState<string | null>(null);

                const handleItemClick = (childSub: string) => {
                  setSelectedItem(prevSelectedItem => (prevSelectedItem === childSub ? null : childSub));
                  action("Click submenu")();
                };
                
                return (
                    
                    <div className={open ? "storybook-sidebar-item open" : "storybook-sidebar-item"}>
                        
                        {/* เริ่มต้นด้วยการแสดงชื่อหัวข้อ */}
                        
                        <div className="storybook-sidebar-title storybook-prompt-regular" onClick={action("Click Menu")}>
                            
                            <span>{item.title}</span> {/* แสดงชื่อหัวข้อ */}
                            
                            <i
                               
                                className="bi-chevron-right toggle-btn"
                                
                                onClick={() => setOpen(!open)} // เมื่อคลิกที่ไอคอน chevron เพื่อเปิดหรือปิด
                            
                            ></i>
                        
                        </div>
                        
                        {/* ตรวจสอบว่าถ้า open เป็น true และมี childrens ให้แสดงส่วนย่อย */}
                        {open && item.childrens && (
                            
                            <div>
                                {item.childrens.map((child, index) => (
                                    
                                    <div
                                    key={index}
                                    className="storybook-sidebar-child storybook-prompt-thin"
                                    
                                    onClick={() => handleItemClick(child.sub)}style={{
                                      backgroundColor: selectedItem === child.sub ? '#F2F2F2' : '#FFFFFF' && selected.includes(child.sub)? '#F2F2F2' : '#FFFFFF'
                                    }}>
                                    <span className="storybook-Text-child" style={{ color: selectedItem === child.sub ? '#1E1E1E' : 'inherit' &&  selected.includes (child.sub) ? '#1E1E1E' : 'inherit'}}>
                                    {child.sub}</span> {/* เป็นการกดปุ่ม SubMenu */}
                                            
                                        {/* แสดงเนื้อหาของ Icon ที่เป็น Active Campaigns */}
                                        { item.title && child.sub === "Active Campaigns" &&  ( 
                                        <FaRocket style={{ width: 16, height: 16, verticalAlign: 'middle', marginLeft: -136}} />
                                        )}

                                        {/* แสดงเนื้อหาของ Icon ที่เป็น Pre Campaigns */}
                                        {item.title && child.sub === "Pre Campaigns" && (
                                        <BsBrush style={{ width: 16, height: 16, verticalAlign: 'middle', marginLeft: -123}}/>
                                        )}

                                        {/* แสดงเนื้อหาของ Icon ที่เป็น End Campaigns */}
                                        {item.title && child.sub === "End Campaigns" && (
                                        <BsFolder style={{ width: 16, height: 16, verticalAlign: 'middle', marginLeft: -125}} />
                                        )}

                                        </div>
                                
                                ))}

                            </div>
                        
                        )}
                        
                        <img src={vertical} style={{
                            width: 295,
                            marginLeft: -11,
                        }}/>
                        
                    </div>
                )
                
                
            }

            function Sidebar() {
                return (
                    <div className='storybook-body storybook-prompt-extrabold'>
                        <img src={game} style={{
                            marginTop: 13,
                            marginLeft: 16
                        }}/>

                        <div className='storybook-Menu'>
                            {Title?.Menu_Title}
                        </div>

                        <img src={vertical}/>

                        <div>
                            <Flex gap="small" wrap>
                                <Button type='text' onClick={action("Click Button")} className='storybook-Box' style={{
                                    backgroundColor: '#F2F2F2',
                                    color: '#6D6D6D',
                                    
                                }}>
                                {<PlusOutlined style={{fontSize: 10}} />}{Box?.Text}</Button></Flex>
                        </div>
                    
                        <div className="storybook-sidebar">
                            { Menu.map((item, index) => <SidebarItem key={index} item={item} />) }
                        </div>
                        
                     </div>
                );
            }
        
            return (
                
                <Sidebar />
            )
    };
    export default meta;

