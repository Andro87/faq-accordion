import styles from "./Faq.module.scss";

export default function Faq(props) {
    const { question, answer } = props;
    return (
        <div className={styles.details_wrap}>
            <details className={styles.details}>
                <summary className={styles.question}>
                    {question}
                    <span>
                        <svg
                            width="10"
                            height="7"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 .799l4 4 4-4"
                                stroke="#F47B56"
                                stroke-width="2"
                                fill="none"
                                fill-rule="evenodd"
                            />
                        </svg>{" "}
                    </span>
                </summary>

                <p className={styles.answer}>{answer}</p>
            </details>
            <hr className={styles.divider}></hr>
        </div>
    );
}
