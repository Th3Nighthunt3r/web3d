import {Setup} from "../components/setup.js";
import {Model} from "../models/r3f_trees.js";
import '../app/global.css';
import { Stage, Float } from "@react-three/drei";

export default function R3fScene() {
    return(
        <>
        <Setup 
          orbitControls={false}
          ambientLight={1}
          shadows={true}
          toneMappingExposure={0.1}
          >
            <Stage environment="city" adjustCamera>
                <Float>
                    <Model/>
                </Float>
            </Stage>
        </Setup>
        </>
    );
}