
export default function ReadToFile(pathFile) 
{
    debugger;
    let file = new FileReader();
    let fso = file.readAsText(pathFile);
    console.log( fso);
    console.log( fso.FileReader(pathFile));
 }