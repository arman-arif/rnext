export default function Avatar({id, name, size = 100}) {
    const srcId = id ?? Math.floor(Math.random() * 100);

    return (<>
        <div className="avatar">
            <div className="w-24 rounded-full">
                <img
                    src={"https://avatar.iran.liara.run/public/" + srcId}
                    width={size + 'px'}
                    height={size + 'px'}
                    alt={name ?? 'Avatar'}
                />
            </div>
        </div>
    </>);
}