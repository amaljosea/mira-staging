'use client';

import Header from "@/src/components/common/Header/Header";
import ActionButton from "@/src/components/common/ActionButton/ActionButton";
import FuelIcon from "@/src/components/icons/Fuel/FuelIcon";
import Swap from "@/src/components/common/Swap/Swap";
import DiscordIcon from "@/src/components/icons/Discord/DiscordIcon";
import XIcon from "@/src/components/icons/X/XIcon";
import Footer from "@/src/components/common/Footer/Footer";

import styles from './LandingPageLayout.module.css';
import {clsx} from "clsx";

const LandingPageLayout = () => {
  return (
    <>
      <Header/>
      <main className={clsx('mobileOnly', styles.main)}>
        <section className={styles.topBlock}>
          <h1>The Liquidity Hub on Fuel</h1>
          <h2 className={styles.subheading}>
            Trade, Earn and get Rewards using the Fuel most efficient AMM
          </h2>
          <ActionButton>Launch App</ActionButton>
          <div className={styles.fuel}>
            <FuelIcon/>
            <span>Powered by Fuel</span>
          </div>
        </section>
        <Swap/>
        <section className={styles.bottomBlock}>
          <h3>Join early</h3>
          <p className={styles.subheading}>
            Connect with our thriving community
          </p>
          <div className={clsx(styles.socialBlock, styles.discordBlock)}>
            <DiscordIcon/>
            <p>Mira Discord community</p>
          </div>
          <div className={clsx(styles.socialBlock, styles.xBlock)}>
            <XIcon/>
            <p>Follow us on X</p>
          </div>
        </section>
      </main>
      <main className={clsx('desktopOnly', styles.main)}>
        <section className={styles.topBlock}>
          <div className={styles.left}>
            <div className={styles.leftTop}>
              <h1>The Liquidity Hub on Fuel</h1>
              <h2 className={styles.subheading}>
                Trade, Earn and get Rewards using the Fuel<br/>most efficient AMM
              </h2>
              <ActionButton className={styles.launchAppButton}>Launch App</ActionButton>
            </div>
            <div className={styles.fuel}>
              <FuelIcon/>
              <span>Powered by Fuel</span>
            </div>
          </div>
          <div className={styles.swap}>
            <Swap/>
          </div>
        </section>
        <section className={styles.bottomBlock}>
          <div className={styles.bottomBlockText}>
            <h3>Join early</h3>
            <p className={styles.connect}>
              Connect with our thriving community
            </p>
          </div>
          <div className={styles.socialBlocks}>
            <div className={clsx(styles.socialBlock, styles.discordBlock)}>
              <DiscordIcon/>
              <p>Mira Discord community</p>
            </div>
            <div className={clsx(styles.socialBlock, styles.xBlock)}>
              <div className={styles.xIconWrapper}>
                <XIcon/>
              </div>
              <p>Follow us on X</p>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

export default LandingPageLayout;