import React, { useState, useEffect } from "react";
import SidebarComponent from "react-sidebar";

const Sidebar = () => {
  const [state, setState] = useState({
    open: true,
  });

  return (
    <div>
      {" "}
      <SidebarComponent
        sidebar={
          <div>
            <p>primer</p>
            <p>segundo</p>
          </div>
        }
        open={state.open}
        onSetOpen={setState}
        styles={{
          sidebar: { backgroundColor: "#219ebc", color: "red" },
          //   root: {
          //     position: "absolute",
          //     top: 0,
          //     left: 0,
          //     right: 0,
          //     bottom: 0,
          //     overflow: "hidden",
          //   },
          //   sidebar: {
          //     zIndex: 2,
          //     position: "absolute",
          //     top: 0,
          //     bottom: 0,
          //     transition: "transform .3s ease-out",
          //     WebkitTransition: "-webkit-transform .3s ease-out",
          //     willChange: "transform",
          //     overflowY: "auto",
          //   },
          //   content: {
          //     position: "absolute",
          //     top: 0,
          //     left: 0,
          //     right: 0,
          //     bottom: 0,
          //     overflowY: "auto",
          //     WebkitOverflowScrolling: "touch",
          //     transition: "left .3s ease-out, right .3s ease-out",
          //   },
          //   overlay: {
          //     zIndex: 1,
          //     position: "fixed",
          //     top: 0,
          //     left: 0,
          //     right: 0,
          //     bottom: 0,
          //     opacity: 0,
          //     visibility: "hidden",
          //     transition: "opacity .3s ease-out, visibility .3s ease-out",
          //     backgroundColor: "rgba(0,0,0,.3)",
          //   },
          //   dragHandle: {
          //     zIndex: 1,
          //     position: "fixed",
          //     top: 0,
          //     bottom: 0,
          //   },
        }}
      >
        <button onClick={() => setState({ open: true })}>Open sidebar</button>
      </SidebarComponent>
    </div>
  );
};

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       sidebarOpen: true
//     };
//     this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
//   }

//   onSetSidebarOpen(open) {
//     this.setState({ sidebarOpen: open });
//   }

//   render() {
//     return (
//       <Sidebar
//         sidebar={<b>Sidebar content</b>}
//         open={this.state.sidebarOpen}
//         onSetOpen={this.onSetSidebarOpen}
//         styles={{ sidebar: { background: "white" } }}
//       >
//         <button onClick={() => this.onSetSidebarOpen(true)}>
//           Open sidebar
//         </button>
//       </Sidebar>
//     );
//   }
export default Sidebar;
