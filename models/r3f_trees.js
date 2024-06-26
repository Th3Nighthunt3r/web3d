/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 /Users/anthonyaragues/Documents/lab/web3d/public/models/r3f_trees.glb -o /Users/anthonyaragues/Documents/lab/web3d/models/r3f_trees.js -p 3 -i -s 
Files: /Users/anthonyaragues/Documents/lab/web3d/public/models/r3f_trees.glb [2.81MB] > r3f_trees-transformed.glb [248.58KB] (91%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'


export function Trees() {
const { nodes, materials } = useGLTF('models/r3f_trees-transformed.glb');
return { Tree1: nodes.LP_tree01, Tree2: nodes.Big_tree01 };
}
useGLTF.preload('models/r3f_trees-transformed.glb')
