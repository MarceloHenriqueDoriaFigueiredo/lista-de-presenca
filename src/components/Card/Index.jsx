import styles from './Style.module.css'

function Card(props){
    return(
        <div className={styles.card}>
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    )
}

export default Card