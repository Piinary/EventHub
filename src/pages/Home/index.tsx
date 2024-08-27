import { Children } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import Heading from '../../layouts/components/Heading/index';
function Home() {
    return ( <>
        <DefaultLayout >
            <div>
                <div>
                    <img src="src\assets\post_avt.png" alt="" />
                    <div>Kim Tien Nguyen</div>
                </div>
            </div>
        </DefaultLayout>
    </> );
}

export default Home;