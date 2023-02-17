import styles from './Style.module.css'

export function Card(props){
    return(
        <div className={styles.card}>
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    )
}