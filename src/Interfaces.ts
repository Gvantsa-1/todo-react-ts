export interface ITask {
  taskname?:string;
  task?:string;
  id?:any;  
  dateHours?: boolean;
  setDateHours?: boolean;
  dark?: boolean;
  setDark?:boolean |undefined;
}

export type Props = {
  dateHours?: boolean;
  setDateHours?: boolean;
  dark?: boolean ;
  setDark?:boolean |undefined;
};