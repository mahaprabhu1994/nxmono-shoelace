import './tailwind.css';
/* eslint-disable-next-line */
export interface BtnProps {}

export function ButtonComp(props: BtnProps) {
  return (

<div className='w-[300px] h-[100px]  bg-yellow-500'>
<h1>button</h1>
</div>

  );
}

export default ButtonComp;
