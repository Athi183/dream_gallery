import { useState } from "react";

const AddForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, image, description });
    setName("");
    setImage("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-pink-100 p-4 rounded-xl shadow-md space-y-2"
    >
      <input
        type="text"
        placeholder="Destination Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 rounded-lg border"
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="w-full p-2 rounded-lg border"
        required
      />
      <textarea
        placeholder="Short Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 rounded-lg border"
        required
      />
      <button
        type="submit"
        className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
      >
        Add Destination
      </button>
    </form>
  );
};

export default AddForm;
