import React from "react";
import styles from "./spinner.module.scss";

function ButtonSpinner() {
    return (
            <div className={styles.loading} />
        );
}

export default ButtonSpinner;