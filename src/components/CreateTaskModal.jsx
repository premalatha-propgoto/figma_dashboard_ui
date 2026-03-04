
import { useEffect, useState } from "react";
import axios from "axios";

export default function CreateTaskModal({ isOpen, onClose }) {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedProject, setSelectedProject] = useState("");

  useEffect(() => {
    if (isOpen) { 
      fetchProjects();
    }
  }, [isOpen]);

  const fetchProjects = async () => {
    try {
      const response = await axios.get("/api/project_list"); 
      setProjects(response.data.projects);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    }
  };

  const handleSubmit = () => {
    console.log({ title, description, selectedProject });
  };

  return (
    isOpen && (
      <div className="modal">
        <h2>Create Task</h2>
        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <textarea 
          placeholder="Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)}
        />
        <select 
          value={selectedProject} 
          onChange={(e) => setSelectedProject(e.target.value)}
        >
          <option value="">Select Project</option>
          {projects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.name}
            </option>
          ))}
        </select>
        <button onClick={handleSubmit}>Create Task</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    )
  );
}