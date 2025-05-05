function Profile({children, name}) {
    return <div>
        <h1>{name}</h1>
        {children}
    </div>;
}

export default Profile;
