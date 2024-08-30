import type {Meta, StoryObj} from '@storybook/react';
import Select from './Select'
import { FaRocket } from "react-icons/fa6";
import { BsBrush } from "react-icons/bs";
import { BsFolder } from "react-icons/bs";

const S: Meta<typeof Select> = {
    component: Select,
    title: 'Control',
    argTypes: {
        Head: [
            {
                title: "CAMPAIGNS",
                childrens:[
                    {
                        sub:"Active Campaigns",
                        icon: FaRocket
                    },

                    {
                        sub:"Pre Campaigns",
                        icon: BsBrush
                    },

                    {
                        sub:"End Campaigns",
                        icon: BsFolder
                    },

                ],
                
            },

            {
                title: "GAMES",
                childrens:[
                    {
                        sub:"Active Campaigns"
                    },

                    {
                        sub:"Pre Campaigns"
                    },

                    {
                        sub:"End Campaigns"
                    },

                ]
                
            },

            {
                title: "LOGS",
                childrens:[
                    {
                        sub:"Active Campaigns"
                    },

                    {
                        sub:"Pre Campaigns"
                    },

                    {
                        sub:"End Campaigns"
                    },

                ]
            },

            {
                title: "MANAGER",
                childrens:[
                    {
                        sub:"Active Campaigns"
                    },

                    {
                        sub:"Pre Campaigns"
                    },

                    {
                        sub:"End Campaigns"
                    },

                ]
            },

        ],
        
        Title:{
            Menu_Title:'GAMIFY',
        },
    
        Box:{
            Text:'Create Campaign',
        },

        selected:[""]
           
    },
}


export default S;

type Story = StoryObj<typeof Select>;

export const Con: Story = {
    args:{
        Head: [
            {
                title: "CAMPAIGNS",
                childrens:[
                    {
                        sub:"Active Campaigns",
                        icon: FaRocket
                    },

                    {
                        sub:"Pre Campaigns",
                        icon: BsBrush
                    },

                    {
                        sub:"End Campaigns",
                        icon: BsFolder
                    },

                ],
            },

            {
                title: "GAMES",
                childrens:[
                    {
                        sub:"Active Campaigns"
                    },

                    {
                        sub:"Pre Campaigns"
                    },

                    {
                        sub:"End Campaigns"
                    },

                ]
                
            },

            {
                title: "LOGS",
                childrens:[
                    {
                        sub:"Active Campaigns"
                    },

                    {
                        sub:"Pre Campaigns"
                    },

                    {
                        sub:"End Campaigns"
                    },

                ]
            },

            {
                title: "MANAGER",
                childrens:[
                    {
                        sub:"Active Campaigns"
                    },

                    {
                        sub:"Pre Campaigns"
                    },

                    {
                        sub:"End Campaigns"
                    },

                ]
            },

            
        ],
        
        Title:{
            Menu_Title:'GAMIFY',
        },
    
        Box:{
            Text:'Create Campaign',
        },

        selected:[""]
    }
}