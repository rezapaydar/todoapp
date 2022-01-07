export interface events{
    nikName?:string,
    description?:string,
    // آیا رویداد انجام شده است؟
    isComplete?:boolean,
    // برای خاموش یا روشن کردن تایمر مورد استفاده قرار میگیرد
    timerIsOn?:boolean,
    timer?:string,
    isImportant?:boolean,
    nowDate?:any,

}