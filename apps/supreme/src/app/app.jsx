/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { useEffect, useRef, useState } from 'react';

import '../../../../dist/slcore/index';
import '../../../../dist/slcore/style.css';
// import "./theme.css";
import { Button } from '../../../../dist/shadcn/index';
import '../styles.css';

export function App() {
  //toggle button

  const [isDarkMode, setIsDarkMode] = useState(false);
  //Dialog button
  const dialogRef = useRef(null);
  // Function to toggle the class values
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Use useEffect to apply the class values to the <html> element
  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle('sl-theme-dark', isDarkMode);
    htmlElement.classList.toggle('sl-theme-light', !isDarkMode);
  }, [isDarkMode]);


  const handleOpen = () => {
    dialogRef.current.show(); // Access show() if dialogRef.current is not null
  };

  const handleClose = () => {
    dialogRef.current.hide();
  };

  //Tree Dropdown
  const selectionModeRef = useRef(null);
  const treeRef = useRef(null);

  useEffect(() => {
    const selectionMode = selectionModeRef.current;
    const tree = treeRef.current;

    const handleChange = () => {
      const selectedItems = tree.selectedItems;
      selectedItems.forEach((item) => (item.selected = false));
      tree.selection = selectionMode.value;
    };

    selectionMode.addEventListener('sl-change', handleChange);

    return () => {
      selectionMode.removeEventListener('sl-change', handleChange);
    };
  }, []);


  const dark = (<svg xmlns="http://www.w3.org/2000/svg" width="64px" height="64px" viewBox="0 0 24.00 24.00" fill="none" stroke="#000000" stroke-width="0.00024000000000000003">

    <g id="SVGRepo_bgCarrier" stroke-width="0" />

    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

    <g id="SVGRepo_iconCarrier"> <path d="M19.9001 2.30719C19.7392 1.8976 19.1616 1.8976 19.0007 2.30719L18.5703 3.40247C18.5212 3.52752 18.4226 3.62651 18.298 3.67583L17.2067 4.1078C16.7986 4.26934 16.7986 4.849 17.2067 5.01054L18.298 5.44252C18.4226 5.49184 18.5212 5.59082 18.5703 5.71587L19.0007 6.81115C19.1616 7.22074 19.7392 7.22074 19.9001 6.81116L20.3305 5.71587C20.3796 5.59082 20.4782 5.49184 20.6028 5.44252L21.6941 5.01054C22.1022 4.849 22.1022 4.26934 21.6941 4.1078L20.6028 3.67583C20.4782 3.62651 20.3796 3.52752 20.3305 3.40247L19.9001 2.30719Z" fill="#000000" /> <path d="M16.0328 8.12967C15.8718 7.72009 15.2943 7.72009 15.1333 8.12967L14.9764 8.52902C14.9273 8.65407 14.8287 8.75305 14.7041 8.80237L14.3062 8.95987C13.8981 9.12141 13.8981 9.70107 14.3062 9.86261L14.7041 10.0201C14.8287 10.0694 14.9273 10.1684 14.9764 10.2935L15.1333 10.6928C15.2943 11.1024 15.8718 11.1024 16.0328 10.6928L16.1897 10.2935C16.2388 10.1684 16.3374 10.0694 16.462 10.0201L16.8599 9.86261C17.268 9.70107 17.268 9.12141 16.8599 8.95987L16.462 8.80237C16.3374 8.75305 16.2388 8.65407 16.1897 8.52902L16.0328 8.12967Z" fill="#000000" /> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#000000" /> </g>

  </svg>);
  const light = (<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 24 24">
    <path d="M 11 0 L 11 3 L 13 3 L 13 0 L 11 0 z M 4.2226562 2.8085938 L 2.8085938 4.2226562 L 4.9296875 6.34375 L 6.34375 4.9296875 L 4.2226562 2.8085938 z M 19.777344 2.8085938 L 17.65625 4.9296875 L 19.070312 6.34375 L 21.191406 4.2226562 L 19.777344 2.8085938 z M 12 5 C 8.1458514 5 5 8.1458514 5 12 C 5 15.854149 8.1458514 19 12 19 C 15.854149 19 19 15.854149 19 12 C 19 8.1458514 15.854149 5 12 5 z M 12 7 C 14.773268 7 17 9.2267316 17 12 C 17 14.773268 14.773268 17 12 17 C 9.2267316 17 7 14.773268 7 12 C 7 9.2267316 9.2267316 7 12 7 z M 0 11 L 0 13 L 3 13 L 3 11 L 0 11 z M 21 11 L 21 13 L 24 13 L 24 11 L 21 11 z M 4.9296875 17.65625 L 2.8085938 19.777344 L 4.2226562 21.191406 L 6.34375 19.070312 L 4.9296875 17.65625 z M 19.070312 17.65625 L 17.65625 19.070312 L 19.777344 21.191406 L 21.191406 19.777344 L 19.070312 17.65625 z M 11 21 L 11 24 L 13 24 L 13 21 L 11 21 z" fill="white"></path>
  </svg>
  );
  return (

    <div>
      {/* <myButton variant="success">Button</myButton> */}
      {/* <sl-button variant="neutral" outline onClick={toggleTheme}>
        {isDarkMode ? light : dark}
      </sl-button> */}
      {/* <SlButton variant="success">Alll</SlButton> */}

      <div>
        <sl-button onClick={toggleTheme}>{isDarkMode ? light : dark} </sl-button>

      </div>

      <div style={{ width: "300px" }}>
        <sl-select>
          <sl-option value="Dark">Dark</sl-option>
          <sl-option value="Dark">Light</sl-option>
        </sl-select>
      </div>
      {/* Dialog */}
      <div style={{ display: 'flex' }}>

        <div>
          <sl-dialog label="Dialog" ref={dialogRef}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <sl-button slot="footer" variant="primary" onClick={handleClose}>
              Close
            </sl-button>
          </sl-dialog>
          <sl-button onClick={handleOpen}>Open Dialog</sl-button>
        </div>
      </div>
      {/* Button */}
      <div>
        <sl-button variant="primary">Button</sl-button>
      </div>
      {/* color picker */}
      <div>
        <sl-color-picker label="Select a color"></sl-color-picker>
      </div>
      {/* input */}
      <div style={{ width: "300px" }}>
        <sl-input></sl-input>
      </div>
      {/* Rating */}
      <div>
        <sl-rating label="Rating"></sl-rating>
      </div>
      {/* Tree dropdown */}
      <div>
        <sl-tree>
          <sl-tree-item>
            Deciduous
            <sl-tree-item>Birch</sl-tree-item>
            <sl-tree-item>
              Maple
              <sl-tree-item>Field maple</sl-tree-item>
              <sl-tree-item>Red maple</sl-tree-item>
              <sl-tree-item>Sugar maple</sl-tree-item>
            </sl-tree-item>
            <sl-tree-item>Oak</sl-tree-item>
          </sl-tree-item>

          <sl-tree-item>
            Coniferous
            <sl-tree-item>Cedar</sl-tree-item>
            <sl-tree-item>Pine</sl-tree-item>
            <sl-tree-item>Spruce</sl-tree-item>
          </sl-tree-item>

          <sl-tree-item>
            Non-trees
            <sl-tree-item>Bamboo</sl-tree-item>
            <sl-tree-item>Cactus</sl-tree-item>
            <sl-tree-item>Fern</sl-tree-item>
          </sl-tree-item>
        </sl-tree>
      </div>

      {/* Tree with multiple fetures */}
      <div style={{ width: "300px" }}>
        <sl-select
          id="selection-mode"
          value="leaf"
          label="Selection"
          ref={selectionModeRef}
        >
          <sl-option value="single">Single</sl-option>
          <sl-option value="multiple">Multiple</sl-option>
          <sl-option value="leaf">Leaf</sl-option>
        </sl-select>
        <br />

        <sl-tree className="tree-selectable" ref={treeRef}>
          <sl-tree-item>
            Item 1
            <sl-tree-item>
              Item A
              <sl-tree-item>Item Z</sl-tree-item>
              <sl-tree-item>Item Y</sl-tree-item>
              <sl-tree-item>Item X</sl-tree-item>
            </sl-tree-item>
            <sl-tree-item>Item B</sl-tree-item>
            <sl-tree-item>Item C</sl-tree-item>
          </sl-tree-item>
          <sl-tree-item>Item 2</sl-tree-item>
          <sl-tree-item>Item 3</sl-tree-item>
        </sl-tree>
      </div>

      <div>
        <sl-alert variant="danger" open>
          <sl-icon slot="icon" name="info-circle"></sl-icon>
          This is a standard alert. You can customize its content and even the icon.
        </sl-alert>

      </div>

      <div>
        <sl-badge>Badge</sl-badge>

      </div>

      <div>
        <sl-dropdown>
          <sl-button slot="trigger" caret>Dropdown</sl-button>
          <sl-menu>
            <sl-menu-item>Dropdown Item 1</sl-menu-item>
            <sl-menu-item>Dropdown Item 2</sl-menu-item>
            <sl-menu-item>Dropdown Item 3</sl-menu-item>
            <sl-divider></sl-divider>
            <sl-menu-item type="checkbox" checked>Checkbox</sl-menu-item>
            <sl-menu-item disabled>Disabled</sl-menu-item>
            <sl-divider></sl-divider>
            <sl-menu-item>
              Prefix
              <sl-icon slot="prefix" name="gift"></sl-icon>
            </sl-menu-item>
            <sl-menu-item>
              Suffix Icon
              <sl-icon slot="suffix" name="heart"></sl-icon>
            </sl-menu-item>
          </sl-menu>
        </sl-dropdown>

      </div>

      <div>
        <Button variant="secondary">Welcome to shadcn</Button>
      </div>
      <div className='w-[300px] h-[300px] bg-green-300'>
        <h1 >ss</h1>
      </div>


    </div >
  );
}

export default App;
