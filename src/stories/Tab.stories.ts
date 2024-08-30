import type {Meta, StoryObj} from '@storybook/react';
import Tab from './Tab'

const meta: Meta<typeof Tab> = {
    component: Tab,
    title: 'Menu',

    tags: ['autodocs'],

    
    argTypes: {
        Menu: [
            {
                title: "CAMPAIGNS",
                childrens:[
                    {
                        sub:"Active Campaigns",
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
            }
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


export default meta;

type Story = StoryObj<typeof Tab>;

export const C: Story = {
    args:{
        Menu: [
            {
                title: "CAMPAIGNS",
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
            }
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