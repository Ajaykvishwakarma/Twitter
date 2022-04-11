import "./SidebarLink.css";

export const SidebarLink = ({active, text, Icon}) => {
  return (
    <>
      <div className={`sidebarLink ${active && 'sidebarLink--active'}`}>
         <Icon className="Sidebar_Icons" />
         <p style={{marginTop:"15px"}}>{text}</p>
        
      </div>
    </>
    
  )
}
