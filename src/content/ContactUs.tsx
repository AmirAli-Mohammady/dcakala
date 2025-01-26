import {
  Box,
  //   Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
const contacts = [
  {
    name: "آقای محمدیان",
    details: "داخلی‌های ۱۰۹ و ۱۱۰ (مدیریت فروش و فروش به همکاران)",
  },
  {
    name: "خانم حسنی",
    details: "داخلی‌های ۱۰۳ و ۱۱۱ (دزدگیر و دوربین مداربسته)",
  },
  {
    name: "خانم داوودی",
    details: "داخلی‌های ۱۵۰ و ۱۵۱ (آیفون تصویری و حضور و غیاب، آرام بند و قفل)",
  },
  {
    name: "خانم اقدسی",
    details: "داخلی ۱۱۴ و ۱۰۴ (آیفون تصویری و اعلام حریق، گیت فروشگاهی)",
  },
  {
    name: "آقای شریف مرادی",
    details: "داخلی ۱۰۸ و ۱۰۸ (دکمه برق، درب شیشه‌ای و جک پارکینگی)",
  },
  {
    name: "خانم افشار",
    details: "داخلی‌های ۱۰۴ و ۱۰۴۰ (دکمه برق و درب اتوماتیک)",
  },
];
const contactData = [
  { label: "تلفن تماس", value: "021-7195" },
  { label: "تلفن تماس", value: "021-773831-02" },
  { label: "ارتباط از طریق تلگرام و واتساپ", value: "ID: dcakala" },
  {
    label: "آدرس",
    value: "تهران - نارمک - میدان ۴۷ - ضلع غربی میدان - پلاک ۸",
  },
  { label: "ایمیل", value: "info [at] dcakala.com" },
  { label: "تلگرام", value: "customer [at] dcakala.com (ارتباط با مدیریت)" },
];
const ContactUs = () => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      pt={"11rem"}
    >
      <img
        alt="تماس با ما"
        height="87"
        src="https://www.lighthome.ir/img/cms/contact%20us.png"
        width="282"
      ></img>
      <img
        alt="شماره تماس فروشگاه دی سی ای کالا"
        src="https://dashboard.dcakala.com/public/img/cms/call-dcakala.jpg"
        style={{ width: "1200px", height: "426px", borderRadius: "1rem" }}
      ></img>
      <Box
        sx={{
          border: "1px solid #52afc2",
          width: "1200px",
          margin: "1rem auto",
          padding: "1rem",
          background: "#fbfbfb",
          borderRadius: "2rem",
          boxShadow: " 0 0 10px #52afc2",
        }}
      >
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: "#00a8e8" }}>
              <TableRow>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  نام
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  شماره داخلی و توضیحات
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contacts.map((contact, index) => (
                <TableRow
                  key={index}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#f9f9f9" : "white",
                  }}
                >
                  <TableCell>{contact.name}</TableCell>
                  <TableCell>{contact.details}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box
        sx={{
          border: "1px solid #52afc2",
          maxWidth: "1200px",
          margin: "1rem auto",
          padding: "1rem",
          background: "#fbfbfb",
          borderRadius: "2rem",
          boxShadow: " 0 0 10px #52afc2",
        }}
      >
        <TableContainer sx={{ mt: "2rem" }} component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: "#00a8e8" }}>
              <TableRow>
                <TableCell
                  colSpan={2}
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  ارتباط با ما
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell
                  colSpan={2}
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    backgroundColor: "#f1f1f1",
                  }}
                >
                  ساعات کار فروشگاه اینترنتی دی سی کالا، شنبه تا چهارشنبه ۹ الی
                  ۱۸ - پنجشنبه ۹ الی ۱۵ می‌باشد
                </TableCell>
              </TableRow>
              {contactData.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#f9f9f9" : "white",
                  }}
                >
                  <TableCell>{item.label}:</TableCell>
                  <TableCell>{item.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
        <iframe
          style={{ border: 0, height: "175px", width: "100%" , margin:'3rem 0' }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.610330246402!2d51.495904514785636!3d35.73580078018166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0323e780e141%3A0x6a9565364c2d2ca6!2z2YHYsdmI2LTar9in2Ycg2K_bjCDYs9uMINin24wg2qnYp9mE2Kc!5e0!3m2!1sen!2sir!4v1503989196958"
        ></iframe>
    </Box>
  );
};

export default ContactUs;
