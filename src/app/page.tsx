import FeaturesBanner from "@/components/layout/FeaturesBanner";
import Hero from "@/components/layout/Hero";
import { styles } from "@/lib/styles";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

export default function Landing() {
  return (
    <div>
      <Hero/>
      <FeaturesBanner/>
    </div>
  );
}
