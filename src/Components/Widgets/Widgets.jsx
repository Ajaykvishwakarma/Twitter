// import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { Article } from "../Article/Article";
import { Suggested } from "../Suggested/Suggested";
import "./Widgets.css";
import { Search } from "../Twitter_Search/TwitterSearch";
export const Widgets = () => {
    return(
        <div className="widgets">
        <div >

            {/* Search Component */}
            <Search/>

            <div className="widget_cont1">
                <h2>What's Happening</h2>
                <Article 
                topic="War in Ukraine" 
                type="LIVE" 
                title="Russia says it will cut back military operations near Kyiv during peace talks" 
                image=""/>
                <Article 
                topic="War in Ukraine" 
                type="LIVE" 
                title="Russia says it will cut back military operations near Kyiv during peace talks" 
                image=""/>
                <Article 
                topic="War in Ukraine" 
                type="LIVE" 
                title="Russia says it will cut back military operations near Kyiv during peace talks" 
                image=""/>
                <Article 
                topic="War in Ukraine" 
                type="LIVE" 
                title="Russia says it will cut back military operations near Kyiv during peace talks" 
                image=""/>
                <div className="widget_explore_link">
                    Show More
                </div>
            </div>

            <div className="widget_cont2">
                <h2>Who to follow</h2>
                <Suggested/>
                <div className="widget_people_link">
                    Show More
                </div>
            </div>
            </div>
        </div>
    )
}