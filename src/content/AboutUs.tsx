import { Box, Typography, List, ListItem } from "@mui/material";
import { ParComponent } from "./textComponent/ParComponent";
import { MiniTitleComponent } from "./textComponent/MiniTitleComponent";
import { useEffect, useState } from "react";
import axios from "axios";
// import { TitleComponent } from "./textComponent/TitleComponent";
// import { TitleComponent } from "./textComponent/TitleComponent";
interface LogoType {
  src: string;
  alt: string;
}
const AboutUs = () => {
  const [logo, setLogo] = useState<LogoType[]>([]);
  useEffect(function () {
    axios.get(`http://localhost:9000/logo`).then((res) => {
      const data = res.data;
      setLogo(data);
      console.log(data);
    });
  }, []);
  return (
    <Box pt={"11rem"}>
      <Typography
        variant="h1"
        fontSize={"2.5rem"}
        sx={{ color: "var(--theme-color)", textShadow: "0 0 3px #333" }}
        textAlign={"center"}
        mb={6}
      >
        چرا دی سی ای کالا
      </Typography>
      <ParComponent>
        دی سی ای کالا فروشگاه اینترنتی و حضوری است که شروع فعالیت ها آن به ۱۳۸۸
        بر می گردد پس می توان این فروشگاه را با سابقه ترین فروشگاه تخصصی سیستم
        های حفاظتی و نظارتی و برق ساختمانی در ایران دانست
      </ParComponent>
      <video
        style={{
          borderRadius: ".75rem",
          border: " 1px solid #ccc",
          boxShadow: "0 0 10px 2px #ccc",
          margin: "1rem auto",
        }}
        className="video"
        controls={true}
        height="720"
        poster="https://www.dcakala.com/img/img-si/banner/personals/cover-film-forosh.jpg"
        preload="metadata"
        width="1280"
      >
        <source
          src="https://video.dcakala.com/video-files/special_video/mr_Mohamadian.mp4"
          type="video/mp4"
        />
      </video>
      <MiniTitleComponent
        color="var(--title-color)"
        mt={5}
        fontSize={"27px"}
        variant="h5"
      >
        تیم قدرتمند فروش
      </MiniTitleComponent>
      <ParComponent variant="body2" fontSize={"19px"}>
        اکثر فروشگاههای اینترنتی بزرگ تنها اجناس را با یک سری اطلاعات پایه ای در
        سایت خود قرار می‌دهند و به لحاظ فنی اطلاعات کافی از محصول خود ندارد. اما
        تیم فروش دی سی ای کالا برای هر بخش از متخصصان همان رشته استفاده کرده تا
        بهترین تجربه خرید را برای مشتریان خود به ارمغان آورد.
      </ParComponent>
      <MiniTitleComponent
        color="var(--title-color)"
        mt={5}
        fontSize={"27px"}
        variant="h5"
      >
        نمایندگی اکثر برندها
      </MiniTitleComponent>
      <ParComponent variant="body2" fontSize={"19px"}>
        مشکل جدیدی که گریبان گیر بسیاری از فروشگاه های اینترنتی شده این است که
        مشتری پس از خرید متوجه می شود محصول که خریده از طرف شرکت اصلی خدماتی
        دریافت نمی کند علت هم عدم تایید فروشنده از طرف تولید کننده و وارد کننده
        است. دی سی ای کالا با داشتن نمایندگی اکثر برندهای قرار داده شده در سایت
        این مشکل را کاملاً برطرف کرده است
      </ParComponent>
      <List sx={{ display: "flex", overflowY: "hidden" }}>
        {logo.map((img, index) => (
          <ListItem
            sx={{
              width: "180px",
              margin: " 1rem .5rem",
              border: " 1px solid #ccc",
              padding: ".25rem",
              borderRadius: ".5rem",
              boxShadow: "0 0 4px #ccc",
              background: " #fff",
              cursor: "pointer",
            }}
            key={index}
          >
            <img
              style={{ height: "auto", maxWidth: "100%" }}
              src={img.src}
              alt={img.alt}
            />
          </ListItem>
        ))}
      </List>
      <MiniTitleComponent
        color="var(--title-color)"
        mt={5}
        fontSize={"27px"}
        variant="h5"
      >
        تیم نصب و خدمات پس از فروش
      </MiniTitleComponent>
      <ParComponent variant="body2" fontSize={"19px"}>
        جایی که تفاوت فروشگاه دی سی کالا با بقیه فروشگاه کاملاً مشخص می‌شود. این
        فروشگاه در تهران و کرج تیم مستقیم برای نصب صحیح و اصولی دارد و در اکثر
        شهرستان‌ها با تیم‌های قدرتمندی که خدمات نصب را برعهده دارند همکاری
        می‌کند که در صورت تمایل خریدار، جنس پس از فروش به صورت استاندارد نصب شود
        . به نحوی که گارانتی محصول معتبر بمانند. اما اگر بعد از چند وقت مشکلی
        برای اجناس پیش آمد همین تیم فنی به کمک او آمده و مشکل را به سرعت برطرف
        می کند.
      </ParComponent>
      <video
        controls={true}
        height="720"
        poster="https://www.dcakala.com/img/img-si/banner/personals/khadamat.jpg"
        preload="metadata"
        width="1280"
        style={{
          borderRadius: ".75rem",
          border: " 1px solid #ccc",
          boxShadow: "0 0 10px 2px #ccc",
          margin: "1rem auto",
        }}
      >
        <source
          src="https://video.dcakala.com/video-files/special_video/mr_Sharifmoradi.mp4"
          type="video/mp4"
        />
      </video>
      <MiniTitleComponent
        color="var(--title-color)"
        mt={5}
        fontSize={"27px"}
        variant="h5"
      >
        سرعت تحویل را با ما تجربه کنید
      </MiniTitleComponent>
      <ParComponent variant="body2" fontSize={"19px"}>
        اکثر فروشگاه اینترنتی اجناس را پس از سفارش تهیه می‌کنند اما ما در دی سی
        ای کالا این ادعا را داریم که ۷۰ درصد اجناس درخواستی را از انبار خود
        ارسال می‌کنیم این مورد دو حسن دارد یکی اینکه سرعت ارسال محصول بسیار
        بالاست به نحوی که مصرف کننده تهران می تواند جنس سفارش داده را همان روز
        سفارش تحویل بگیرد و مورد دوم این است که مشکل لغو سفارش به علت عدم موجودی
        کالا تقریباً وجود ندارد.
      </ParComponent>
      <MiniTitleComponent
        color="var(--title-color)"
        mt={5}
        fontSize={"27px"}
        variant="h5"
      >
        ۷ روز ضمانت بازگشت واقعی
      </MiniTitleComponent>
      <ParComponent variant="body2" fontSize={"19px"}>
        اکثر کالاهای دی سی کالا دارای ۷ روز ضمانت بازگشت هستند البته باید شرایط
        اولیه کالا حفظ شده باشد یعنی جنس نصب یا پیچ نشده باشد و خط و خش روی
        محصول ایجاد نشده باشد. اگر از ظاهر محصول خوشتان نیامد و یا محصول با آن
        چیزی که در ذهن شما بود فرق داشت می توانید محصول را تا حداکثر 7 روز پس از
        تحویل مرجع نمایید.
      </ParComponent>
      <MiniTitleComponent
        color="var(--title-color)"
        mt={5}
        fontSize={"27px"}
        variant="h5"
      >
        پرداخت در محل
      </MiniTitleComponent>
      <ParComponent variant="body2" fontSize={"19px"}>
        پرداخت پس از تحویل جنس امکانی است که دی سی ای کالا برای مشتریان شهر
        تهران فراهم کرده است ما تمام تلاش خود را می کنیم که بتوانیم به زودی این
        امکان را برای سایر شهرستانها نیز فراهم آوریم. پس اگر با پرداخت درب محل
        راحت تر هستید از این امکان جدید دی سی ای کالا استفاده کنید. قبل از خرید
        از هر سایتی اعتبار نامه های آن را بررسی کنید. ای نماد و اعتبار نامه
        رسانه های دیجیتال مواردی هستند که نشان می دهند شما در حال خرید از یک
        سایت معتبر هستید.
      </ParComponent>
    </Box>
  );
};

export default AboutUs;
