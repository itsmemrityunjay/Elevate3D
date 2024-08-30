import Fence from "./Fence";
import Pillar from "./Pillar";
import SingleGate from "./SingleGate";
const FenceAndGateAssembly = (props) => {
    return ( <
        group { ...props
        } >
        <
        SingleGate position = {
            [1.3, 0, 0.6]
        }
        rotation = {
            [0, -Math.PI / 2.3, 0]
        }
        /> <
        SingleGate position = {
            [-1.3, 0, 0.6]
        }
        rotation = {
            [0, -Math.PI / 2.8, 0]
        }
        />

        { /*Right Fences */ } <
        Fence position = {
            [-1.55, -0.1, -6]
        }
        /> <
        Fence position = {
            [-0.25, -0.1, -6]
        }
        /> <
        Fence position = {
            [1.05, -0.1, -6]
        }
        /> <
        Fence position = {
            [2.35, -0.1, -6]
        }
        /> <
        Fence position = {
            [3.65, -0.1, -6]
        }
        /> <
        Fence position = {
            [4.95, -0.1, -6]
        }
        /> <
        Pillar position = {
            [-1.45, -0.2, -6]
        }
        />

        <
        Pillar position = {
            [-0.2, -0.2, -6]
        }
        /> <
        Pillar position = {
            [1.1, -0.2, -6]
        }
        />


        <
        Pillar position = {
            [2.4, -0.2, -6]
        }
        /> <
        Pillar position = {
            [3.7, -0.2, -6]
        }
        /> <
        Pillar position = {
            [5, -0.2, -6]
        }
        /> <
        Pillar position = {
            [6.3, -0.2, -6]
        }
        /> { /*Left Fences */ } <
        Fence position = {
            [-5.35, -0.1, -6]
        }
        /> <
        Fence position = {
            [-6.65, -0.1, -6]
        }
        /> <
        Fence position = {
            [-7.95, -0.1, -6]
        }
        /> <
        Fence position = {
            [-9.25, -0.1, -6]
        }
        /> <
        Fence position = {
            [-10.55, -0.1, -6]
        }
        /> <
        Fence position = {
            [-11.85, -0.1, -6]
        }
        /> <
        Pillar position = {
            [-4.05, -0.2, -6]
        }
        /> <
        Pillar position = {
            [-5.3, -0.2, -6]
        }
        /> <
        Pillar position = {
            [-6.6, -0.2, -6]
        }
        /> <
        Pillar position = {
            [-7.89, -0.2, -6]
        }
        /> <
        Pillar position = {
            [-9.2, -0.2, -6]
        }
        /> <
        Pillar position = {
            [-10.49, -0.2, -6]
        }
        /> <
        Pillar position = {
            [-11.8, -0.2, -6]
        }
        /> <
        /group>
    );
};

export default FenceAndGateAssembly;