export default function (props){
    return <div style={{
        'margin':"10px",
        'border':'1px solid black'
     }}>
    <h1>{props.title}</h1>
    <h2>{props.author}</h2>
    </div>
}