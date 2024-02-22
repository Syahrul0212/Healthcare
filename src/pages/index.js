import Navbar from "./components/Navbar";
import TreatmentForm from "./components/Form";

const YourPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-4">
        <h1 className="text-3xl text-center font-bold mb-4">
          Formulir Pengobatan
        </h1>
        <TreatmentForm />
      </div>
    </div>
  );
};

export default YourPage;
