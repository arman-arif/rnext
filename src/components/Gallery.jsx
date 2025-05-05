import Profile from "./Profile";
import Avatar from "./Avatar";

export default function Gallery() {
    const items = [
        {id: 10, name: "Albert Einstein"},
        {id: 20, name: "Isaac Newton"},
        {id: 100, name: "Marie Curie"},
    ];

    return (
        <section>
            <h1>Amazing scientists</h1>
            {items.map((props, index) => (
                <Profile key={index} name={props.name}>
                    <Avatar
                        {...props}
                        size={80}
                    />
                </Profile>
            ))}
        </section>
    );
}
