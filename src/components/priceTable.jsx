const PriceTable = ({filter}) => {

        const priceTable = [
        {
            sections: [
            {
                header: "ชนิด/ขนาด",
                title: "แอร์ผนัง",
                columns: [
                    "ธรรมดา", "พิเศษ", "แขวนคอยล์", "ตัดล้างใหญ่", "ถอดแอร์", "ติดตั้ง"
                ],
                rows: [
                    { name: "แอร์ผนัง 9000-15000 BTU", service_1: 500, service_2: 900, service_3: 1800, service_4: 2500, uninstall: 500, install: 3000, },
                    { name: "แอร์ผนัง 18000-24000 BTU", service_1: 600, service_2: 1000, service_3: 1800, service_4: 2500, uninstall: 800, install: 3500 },
                    { name: "แอร์ผนัง 26000-36000 BTU", service_1: 800, service_2: 1200, service_3: 1800, service_4: 2500, uninstall: 1000, install: 4500 },
                ],
            },

            {
                header: "ชนิด/ขนาด",
                title: "แอร์แขวน",
                columns: [
                    "ธรรมดา", "พิเศษ", "แขวนคอยล์", "ตัดล้างใหญ่", "ถอดแอร์", "ติดตั้ง"
                ],
                rows: [
                    { name: "แอร์แขวน 9000-15000 BTU", service_1: 1000, service_2: "", service_3: "", service_4: "", uninstall: 800, install: 4000, },
                    { name: "แอร์แขวน 18000-24000 BTU", service_1: 1200, service_2: "", service_3: "", service_4: "", uninstall: 1200, install: 4500, },
                    { name: "แอร์แขวน 26000-36000 BTU", service_1: 1400, service_2: "", service_3: "", service_4: "", uninstall: 1500, install: 6000, }
                ],
            },
            
            {
                header: "ชนิด/ขนาด",
                title: "แอร์เปลือยฝังฝ้า",
                columns: [
                    "ธรรมดา", "พิเศษ", "แขวนคอยล์", "ตัดล้างใหญ่", "ถอดแอร์", "ติดตั้ง"
                ],
                rows: [
                    { name: "แอร์เปลือยฝังฝ้า 9000-15000 BTU", service_1: 1000, service_2: "", service_3: "", service_4: "", uninstall: 800, install: 4500, },
                    { name: "แอร์เปลือยฝังฝ้า 18000-24000 BTU", service_1: 1200, service_2: "", service_3: "", service_4: "", uninstall: 1000, install: 5500, },
                    { name: "แอร์เปลือยฝังฝ้า 26000-36000 BTU", service_1: 1400, service_2: "", service_3: "", service_4: "", uninstall: 1200, install: 6500, }
                ],
            },

            {
                header: "ชนิด/ขนาด",
                title: "แอร์ 4 ทิศทาง",
                columns: [
                    "ธรรมดา", "พิเศษ", "แขวนคอยล์", "ตัดล้างใหญ่", "ถอดแอร์", "ติดตั้ง"
                ],
                rows: [
                    { name: "แอร์ 4 ทิศทาง ทุกขนาด BTU", service_1: 1800, service_2: "", service_3: "", service_4: "", uninstall: 1500, install: 7000, },
                ],
            },
            {
                header: "ค่าใช้จ่ายเพิ่มเติม",
                title: "เพิ่มเติม",
                columns: [
                    "ราคา"
                ],
                rows: [
                    { name: "ท่อน้ำยา/เมตร ราคาตาม BTU แอร์", price: "500-800", },
                    { name: "รางครอบท่อ/เมตร พร้อมข้อต่อต่าง", price: 300, },
                    { name: "ขาแขวน 45/50/60 ซม./ชุด พร้อมติดตั้ง", price: 500, },
                    { name: "เบรคเกอร์/ชุด พร้อมติดตั้ง", price: 200, },
                    { name: "ท่อน้ำทิ้ง/เมตร", price: 50, },
                    { name: "สายไฟ 2*2.5 VCT /เมตร", price: 50, },
                    { name: "น้ำยา R32/ปอนด์", price: 20, },
                    { name: "น้ำยา R22, R410a/ปอนด์", price: 40, },
                ],
            },
            ],
        },
    ];

  return (
    <>
    {priceTable.map((table, tableIndex) => (
        <div className="w-full overflow-x-auto px-3 flex justify-start pb-5 sm:pb-2 sm:justify-center items-center">
            <div key={tableIndex} className="space-y-10">
                {table.sections
                    .filter(
                        (section) =>
                        section.title === "เพิ่มเติม" || section.title === filter
                    )
                    .map((section, sectionIndex) => (
                <div
                    key={sectionIndex}
                    className="w-full overflow-x-auto px-3 pb-2 flex justify-start sm:justify-center"
                >
                    <table className="w-full sm:w-2xl xl:w-5xl bg-White rounded-2xl overflow-hidden border-4 border-White shadow-[6px_6px_0_0_theme(colors.Darker-Secondary-2)]">
                    <thead>
                        <tr className="bg-Primary text-Secondary">
                        <th className="py-4 px-6 border-b-4 border-Darker-Secondary-1 text-left">
                            {section.header}
                        </th>

                        {section.columns.map((col, i) => (
                            <th
                            key={i}
                            className="py-4 px-6 border-b-4 border-Darker-Secondary-1 text-center"
                            >
                            {col}
                            </th>
                        ))}
                        </tr>
                    </thead>

                    <tbody>
                        {section.rows.map((row, i) => (
                            <tr
                            key={i}
                            className="hover:bg-gray-50 transition-colors border-b-2 border-Darker-Secondary-1 last:border-b-0"
                            >
                            <td className="py-4 px-6 font-bold text-Darker-Secondary-2">
                                {row.name}
                            </td>

                            {Object.entries(row)
                                .filter(([key]) => key !== "name")
                                .map(([_, value], idx) => (
                                <td key={idx} className="py-4 px-6 text-center">
                                    {value.toLocaleString()}.- 
                                </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                ))}
            </div>
        </div>
    ))}
    </>
  );
};

export default PriceTable;

