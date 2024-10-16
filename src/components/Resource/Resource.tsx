import styles from "./Resource.module.css"

export type resourceProps = {
    name: string
    amount: number
    onChange: (increment: number) => void
    production: number
    productionChange: (increment: number) => void
}

const Resource = (props: resourceProps) => {
    return (
        <div className={styles.ResourceContainer}>
            <p>{props.name}: <span>{props.amount}</span></p>
            <div className={styles.buttonContainer}>
                <button type="button" onClick={() => props.onChange(-1)}>-</button>
                <button type="button" onClick={() => props.onChange(+1)}>+</button>
            </div>
            <p>Termelés: <span>{props.production}</span></p>
            <div className={styles.buttonContainer}>
                <button type="button" onClick={() => props.productionChange(-1)}>-</button>
                <button type="button" onClick={() => props.productionChange(+1)}>+</button>
            </div>
        </div>
    )
}

export default Resource