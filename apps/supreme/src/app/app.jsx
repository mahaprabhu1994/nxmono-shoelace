// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import '../../../../dist/slcore/index';
import '../../../../dist/slcore/style.css';

export function App() {

  return (
    <div>
      <sl-dialog label="Dialog" class="dialog-overview">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <sl-button slot="footer" variant="primary">Close</sl-button>
      </sl-dialog>

      <sl-button>Open Dialog</sl-button>

    </div>
  );
}

export default App;
