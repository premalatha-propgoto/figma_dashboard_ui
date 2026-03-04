import axios from "axios";
import { useState } from "react";

export default function CreateProjectModal() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    if (!name) {
      alert("Project name is required");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/CreateProject", {
        name,
        description,
      });

      console.log(response.data);
      alert("Project created successfully!");
      setName("");
      setDescription("");
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Failed to create project");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
      <input
        type="text"
        placeholder="Project Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleCreate} disabled={loading}>
        {loading ? "Creating..." : "Create Project"}
      </button>
    </div>
  );
}