import React, {useContext, createContext} from "react";

const styles = {
    light: {
        background: '#fff',
        color: '#333'
    },
    dark: {
        background: '#0d1117',
        color: '#c8cfd7'
    }
};

const layout = {
    left: 'row',
    right: 'row-reverse'
};

const ThemeContext = createContext({...styles.light, direction: layout.left});

const Layout = () => {

    const theme = useContext(ThemeContext);

    return (
        <section
            className="layout-container"
            style={{backgroundColor: theme.background, color: theme.color, flexDirection: theme.direction}}>
            <div className="sidebar">
                <nav>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">Blogs</a>
                </nav>
            </div>

            <article>
                <h1>Welcome to my fantastic blog post</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula ipsum non orci elementum
                    condimentum. Aenean tempor, libero at pretium molestie, ligula purus sagittis sem, eget laoreet
                    tellus nisi in turpis. Nulla facilisi. Nullam tempus vel tortor non tristique. Cras mattis lectus
                    quis venenatis feugiat. Nulla vitae nulla sit amet nibh consectetur auctor. Vivamus a vulputate dui.
                    Mauris volutpat accumsan orci, ac maximus nunc venenatis non. Etiam volutpat mollis tempus. Nunc vel
                    massa scelerisque nibh convallis facilisis quis nec nulla. Sed ultricies, erat non consequat ornare,
                    lectus ex pulvinar erat, ac posuere elit lacus id dui. Phasellus molestie turpis non lectus sagittis
                    tristique. Ut pharetra consectetur eros, at gravida neque consequat a. Morbi mi lacus, pulvinar sed
                    mauris ut, malesuada porttitor est. Nullam malesuada pretium orci, non bibendum elit faucibus et.
                </p>

                <p>Integer euismod metus ut egestas laoreet. Proin in eros vulputate, sodales augue sed, volutpat
                    turpis. Donec vel nisl commodo, malesuada dolor ac, porttitor enim. Mauris vitae risus in sem
                    dignissim placerat nec et odio. Nulla facilisi. Maecenas a leo risus. Aliquam luctus vulputate
                    bibendum. Suspendisse auctor enim quis ultrices vehicula. Cras vitae felis ac est tempus consequat
                    eget et justo. Nam ultricies arcu massa, tristique fermentum mauris feugiat in. Sed a vulputate
                    neque, ut egestas risus. Nulla placerat sollicitudin sem, eget pulvinar libero pellentesque id. </p>

                <p>Phasellus scelerisque justo et velit sagittis, et auctor nulla ultrices. Aenean varius odio risus, ut
                    eleifend velit facilisis non. Ut vitae augue laoreet, laoreet metus vel, molestie enim. Morbi
                    tristique metus eu libero viverra, malesuada congue magna accumsan. Maecenas ac sem et ipsum
                    ultricies tincidunt sit amet vitae odio. Morbi aliquet egestas urna, id dignissim neque pulvinar
                    dictum. Integer efficitur mollis quam, eget volutpat felis vehicula quis. Phasellus tortor neque,
                    aliquet eget accumsan ut, fringilla eget magna. Quisque eu mauris vel urna consequat ultricies in
                    tincidunt lacus. Ut a viverra lectus. Nam dictum sit amet massa eu efficitur. Nam et velit a lacus
                    dignissim cursus. Donec tincidunt dolor tortor, at vulputate dolor laoreet id. Nulla orci tellus,
                    viverra eu tortor vitae, feugiat efficitur sem. Maecenas ornare, urna quis ultricies pretium, sapien
                    ipsum faucibus nulla, sit amet sodales sapien metus in est.</p>

                <p>Nam sit amet venenatis ligula. Etiam quis volutpat tellus. Fusce feugiat tincidunt velit, a elementum
                    neque gravida non. Morbi eros neque, faucibus id nulla eu, iaculis molestie tortor. Curabitur ut
                    purus porta, lobortis tortor sed, lobortis urna. Quisque mattis augue quis commodo iaculis. Sed ac
                    est finibus, maximus enim sed, tincidunt mauris. Fusce vel rutrum mauris. Proin tincidunt justo
                    dictum malesuada sagittis. Nullam molestie interdum ligula ut lacinia. Aliquam posuere bibendum
                    feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed nec leo aliquet, pharetra
                    magna ut, vestibulum ligula. </p>
            </article>
        </section>
    );
};

export default () => (
    <ThemeContext.Provider value={{...styles.dark, direction: layout.right}}>
        <Layout/>
    </ThemeContext.Provider>
);
