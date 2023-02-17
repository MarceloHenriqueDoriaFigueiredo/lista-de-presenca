import styles from './Style.module.css'

export function Card(props){
    return(
        <div id="card" className={styles.card}>
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    )
}