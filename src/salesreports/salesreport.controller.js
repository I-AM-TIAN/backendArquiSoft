const prisma = require("../lib/prisma");

exports.generateReport = async (req, res) => {
  const { startDate, endDate } = req.body;
  try {
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);

    const salesReport = await prisma.Sale.findMany({
      where: {
        createdAt: {
          gte: new Date(startDate),
          lte: new Date(endDate),
        },
      },
      include: {
        product: true,
        customer: true,
      },
    });

    const formattedReport = salesReport.map((report) => ({
      id: report.id,
      date: report.date,
      productName: report.product.name,
      customerName: report.customer.name,
      quantity: report.quantity,
      totalPrice: report.totalPrice,
    }));

    res.status(200).json({
      message: "Sales report generated successfully",
      data: formattedReport,
    });
  } catch (error) {
    console.error("Error generating sales report:", error);
    res.status(500).json({
      message: "Error generating sales report",
      error: error.message,
    });
  }
};
