const Contact = () => {
  return (
    <div>
      <h1 className="p-4 m-4 text-3xl font-bold">Contact</h1>
      <form action="">
        <input
          type="text"
          className="m-2 border border-black"
          placeholder="name"
        />
        <input
          type="text"
          className="m-2 border border-black"
          placeholder="message"
        />
        <button className="p-2 m-2 bg-gray-100 border border-black rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
