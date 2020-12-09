import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Faq from "../components/Faq";

export default function Home() {
    return (
        <div className={styles.main_wrap}>
            <Head>
                <title>Frontend Mentor | FAQ Accordion Card</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.container}>
                <div className={styles.illustration}>
                    <div className={styles.illustration_wrap}>
                        <img
                            src="/images/illustration-woman-online-mobile.svg"
                            alt="woman"
                            className={styles.image_mobile}
                        />

                        <img
                            src="/images/illustration-woman-online-desktop.svg"
                            alt="woman"
                            className={styles.image_desktop}
                        />
                    </div>
                    <div className={styles.cube}>
                        <img
                            src="/images/illustration-box-desktop.svg"
                            alt="cube"
                        />
                    </div>
                </div>

                <div className={styles.faq}>
                    <h1>FAQ</h1>

                    <Faq
                        question="
                                How many team members can I invite? "
                        answer="
                                You can invite up to 2 additional users on the
                                Free plan. There is no limit on team members for
                                the Premium plan."
                    />

                    <Faq
                        question="
                        What is the maximum file upload size? "
                        answer="
                        No more than 2GB. All files in your account must fit your allotted storage space."
                    />

                    <Faq
                        question="
                        How do I reset my password? "
                        answer="
                        Click “Forgot password” from the login page or “Change password” from your profile page.
                        A reset link will be emailed to you."
                    />

                    <Faq
                        question="
                        Can I cancel my subscription? "
                        answer="
                        Yes! Send us a message and we’ll process your request no questions asked.."
                    />

                    <Faq
                        question="
                        Do you provide additional support? "
                        answer="
                        Chat and email support is available 24/7. Phone lines are open during normal business hours."
                    />
                </div>
            </div>
        </div>
    );
}
