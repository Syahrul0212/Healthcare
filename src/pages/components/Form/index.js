import { useState } from "react";

const TreatmentForm = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    patientId: "",
    dateOfTreatment: "",
    treatmentDescription: "",
    medicationsPrescribed: "",
    costOfTreatment: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const treatmentOptions = {
    "Pemeriksaan Fisik": [
      "Pemeriksaan Mata",
      "Pemeriksaan Telinga",
      "Pemeriksaan Gigi",
    ],
    "Tes Darah": ["Tes Darah Rutin", "Tes Darah Kolesterol", "Tes Darah Gula"],
    Rontgen: ["Rontgen Dada", "Rontgen Tulang Belakang", "Rontgen Kepala"],
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "treatmentDescription") {
      setFormData({
        ...formData,
        treatmentDescription: value,
        medicationsPrescribed: "",
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsSubmitted(true);
    setFormData({
      patientName: "",
      patientId: "",
      dateOfTreatment: "",
      treatmentDescription: "",
      medicationsPrescribed: "",
      costOfTreatment: "",
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        {isSubmitted && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <span className="block sm:inline">
              Sukses terkirim! Silahkan cek log.
            </span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                className="fill-current h-6 w-6 text-green-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                onClick={() => setIsSubmitted(false)}
              >
                <title>Close</title>
                <path
                  fillRule="evenodd"
                  d="M18.293 4.293a1 1 0 0 0-1.414 0L10 10.586 3.707 4.293a1 1 0 1 0-1.414 1.414L8.586 12l-6.293 6.293a1 1 0 0 0 1.414 1.414L10 13.414l6.293 6.293a1 1 0 0 0 1.414-1.414L11.414 12l6.293-6.293a1 1 0 0 0 0-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        )}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="patientName"
          >
            Nama Pasien
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="patientName"
            type="text"
            placeholder="Nama Pasien"
            name="patientName"
            value={formData.patientName}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="patientId"
          >
            ID Pasien
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="patientId"
            type="text"
            placeholder="ID Pasien"
            name="patientId"
            value={formData.patientId}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="dateOfTreatment"
          >
            Tanggal Pengobatan
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="dateOfTreatment"
            type="date"
            name="dateOfTreatment"
            value={formData.dateOfTreatment}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Deskripsi Pengobatan
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="treatmentDescription"
            value={formData.treatmentDescription}
            onChange={handleInputChange}
          >
            <option value="">Pilih Deskripsi Pengobatan</option>
            {Object.keys(treatmentOptions).map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        {formData.treatmentDescription && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Jenis {formData.treatmentDescription}
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="medicationsPrescribed"
              value={formData.medicationsPrescribed}
              onChange={handleInputChange}
            >
              <option value="">
                Pilih Jenis {formData.treatmentDescription}
              </option>
              {treatmentOptions[formData.treatmentDescription] &&
                treatmentOptions[formData.treatmentDescription].map(
                  (option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  )
                )}
            </select>
          </div>
        )}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="costOfTreatment"
          >
            Biaya Pengobatan
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="costOfTreatment"
            type="number"
            step="0.01"
            placeholder="Biaya Pengobatan"
            name="costOfTreatment"
            value={formData.costOfTreatment}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Kirim
          </button>
        </div>
      </form>
    </div>
  );
};

export default TreatmentForm;
