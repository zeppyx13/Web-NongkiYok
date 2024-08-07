import React from "react";

const TableDashboard = () => {

  return (
    <div className="container mx-auto p-4 rounded mb-4 max-w-screen-lg"> {/* Adjust max width */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl kodchasan-bold text-white ">Lokasi Ngopi</h1>
        <button className="bg-color-yellow hover:bg-button-gray text-color-black hover:text-white font-bold py-2 px-4 rounded">
          + Tambahkan Tempat
        </button>
      </div>
      <table className="min-w-full rounded-md table-fixed bg-white rounded"> {/* Added table-fixed for fixed layout */}
        <thead>
          <tr>
            <th className="w-40 px-4 py-2 text-xs">Nama</th> {/* Reduced width for Nama column */}
            <th className="w-64 px-4 py-2 text-xs">Deskripsi</th> {/* Reduced width for Deskripsi column */}
            <th className="w-36 px-4 py-2 text-xs">Harga</th> {/* Reduced width for Rata-rata Harga column */}
            <th className="w-28 px-4 py-2 text-xs">Latitude</th> {/* Reduced width for Latitude column */}
            <th className="w-28 px-4 py-2 text-xs">Longitude</th> {/* Reduced width for Longitude column */}
            <th className="w-24 px-4 py-2 text-xs">Aksi</th> {/* Reduced width for Aksi column */}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-2 whitespace-nowrap">p</td>
              <td className="px-4 py-2 whitespace-nowrap">p</td>
              <td className="px-4 py-2 whitespace-nowrap">p</td>
              <td className="px-4 py-2 whitespace-nowrap">p</td>
              <td className="px-4 py-2 whitespace-nowrap">p</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm leading-5 font-medium">
                <button className="text-white-600 hover:text-indigo-900 mr-2 bg-blue-500 text-white py-1 px-4 rounded">Edit</button>
                <button className="text-white-600 hover:text-indigo-900 mr-2 bg-red-500 text-white py-1 px-4 rounded">Delete</button>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableDashboard;
