import styles from './styles.module.scss'

export function Membership() {
    return (
        <div className={styles.ContentContainer}>
            <div className={styles.headline}>
                <h1>Join our membership
                    to get special offer</h1>
                <div>
                    <input type="text" placeholder="Enter your email address"></input>
                    <button>Join</button>
                </div>

            </div>
            <img src="./images/bloco_final_image.svg" alt="" />
        </div>
    )
}