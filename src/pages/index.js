import Layout from "@/components/layout";
import { Button } from "@mantine/core";
import styles from './HeaderSimple.module.css';
import HomeFeatures, { Dashboard } from "../features/home/dashboard";
import HeaderSimple from "@/components/header";

export default function Home(){
  return(
   <Layout> 
    <HeaderSimple/>
   </Layout>
  )
}