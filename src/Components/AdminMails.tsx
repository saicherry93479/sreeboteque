// @ts-nocheck

const AdminMails = () => {
  return (
    <div className="p-6">
      <section className="container mx-auto  font-mono">
        <div className="!w-[90vw] lg:!w-[800px] mb-8 overflow-hidden rounded-lg shadow-lg text-left">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="py-3 text-center">Mail</th>
                  <th className=" py-3 text-center">Message</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="text-gray-700">
                  <td className=" py-3 text-sm border w-[50%] px-3">
                    After the initial article, written in November of 2020, the
                    trend and the name exploded online
                  </td>
                  <td className="py-3 text-sm border w-[50%] px-3">
                    {" "}
                    After the initial article, written in November of 2020, the
                    trend and the name exploded online
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminMails;
