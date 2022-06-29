import React from "react";
import FullLayout from "../layouts/FullLayout";
import { IonSpinner, IonContent } from '@ionic/react';

import './SplashScreenPage.css';

const SplashScreenPage = (props) => {
    return (
        <React.Fragment>
            <IonContent className="content">
                {/*-- Crescent --*/}
                <IonSpinner name="crescent" className="spinner" />

            </IonContent>
        </React.Fragment>
    )
}

export default SplashScreenPage;
