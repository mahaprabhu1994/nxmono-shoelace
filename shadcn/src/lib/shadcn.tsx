import styles from './shadcn.module.css';

/* eslint-disable-next-line */
export interface ShadcnProps {}

export function Shadcn(props: ShadcnProps) {
  return (
    <>
    <div className={styles['container']} >
      <h1>Welcome to Shadcn!</h1>
    </div>
    <div className={styles['container2']} >
      <h1>this is DIV</h1>
    </div>

    </>
  );
}

export default Shadcn;
