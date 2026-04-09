function Dashboard() {
    const token = localStorage.getItem("token");

    let role: string | null = null;

    if (token) {
    try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        role = payload.role;
    } catch {
        console.error("Invalid token");
    }
    }

    if (!role) return <p>Loading...</p>;

    return (
    <div>
        <h1>Dashboard</h1>

        <p>Logged in as: {role}</p>

        {role === "USER" && (
        <div style={{ border: "1px solid green", padding: "10px" }}>
            <h3>User Content</h3>
            <p>This is visible only to USER</p>
        </div>
        )}

        {role === "ADMIN" && (
        <div style={{ border: "1px solid red", padding: "10px" }}>
            <h3>Admin Content</h3>
            <p>This is visible only to ADMIN</p>
        </div>
        )}
    </div>
    );
}

export default Dashboard;