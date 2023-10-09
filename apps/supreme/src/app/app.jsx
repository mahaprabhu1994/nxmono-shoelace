/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { useEffect, useRef } from 'react';
import '../../../../dist/slcore/index';



// eslint-disable-next-line @typescript-eslint/no-unused-vars


export function App() {
  //Dialog button
  const dialogRef = useRef(null);

  const handleOpen = () => {
    dialogRef.current.show();
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
  return (
    <div>
      {/* <sl-dialog label="Dialog" class="dialog-overview">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <sl-button slot="footer" variant="primary">Close</sl-button>
      </sl-dialog>

      <sl-button>Open Dialog</sl-button> */}

      {/* <h1>NX with shoelace in NEXT JS App</h1> */}
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
      <div>
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
      <div>
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
    </div>
  );
}

export default App;
