import { Box, Typography } from "@mui/material";
import { TitleComponent } from "./textComponent/TitleComponent";
import { ParComponent } from "./textComponent/ParComponent";
import { MiniTitleComponent } from "./textComponent/MiniTitleComponent";
const ShoppingGuide = () => {
  return (
    <Box pt={"11rem"}>
      <Box>
        <TitleComponent
          textAlign={"center"}
          color="var(--title-color)"
          variant="h2"
          fontSize={35}
        >
          مرحله اول: راهنمای انتخاب محصول از سایت
        </TitleComponent>
        <ParComponent fontSize={"21.5px"} lineHeight={4}>
          جستجو و انتخاب کالا <br />
          برای دریافت اطلاعات در مورد کالای مورد نظر خود در سایت دی سی ای کالا
          می‏‌توانید از سه روش استفاده کنید: <br />
          استفاده از نوار جستجو
          <br /> در صورتی که محصول مورد نظر خود را از قبل انتخاب کرده باشید
          می‌‏توانید با نوشتن نام یا بخشی از نام آن در نوار جستجو که در بالای
          صفحات قرار گرفته است، به صورت مستقیم به سراغ محصول مورد نظر خود بروید.{" "}
          <br />
          استفاده از منو درست در زیر کادر مخصوص جستجو، گروه بندی کالا ها (منو)
          قرار دارد. با قرار دادن نشان‏گر موس بر روی هر یک از گروه ها، دسته بندی
          محصولات مرتبط آن نمایش داده می‌‏‏شود و می توانید به سادگی دسته مورد
          نظر خود را انتخاب نمایید. <br /> استفاده از پیشنهادات دی سی ای کالا{" "}
          <br /> بخش‌‏ هایی با نام های «تازه وارد ها»، «منتخب دی سی ای کالا» و
          «فروش ویژه» در نظر گرفته شده‌‏‏اند که بررسی محصولات در این بخش‏‏‌ها
          می‌‏تواند شما را در انتخاب کالای مورد نظرتان کمک نماید.
        </ParComponent>
      </Box>
      <Box>
        <TitleComponent>مرحله دوم: راهنمای خرید محصول از سایت</TitleComponent>
        <ParComponent mt={5} mb={4} lineHeight={2} fontSize={"21.5px"}>
          در ابتدا شما محصول مورد نظرتان را داخل سایت باز کرده و می توانید با
          توجه به نوع محصول ویژگی های مورد نظرتان را از سمت چپ صفحه محصول انتخاب
          نمایید. همچنین تعداد محصول را نیز از باکس تعداد می توانید انتخاب کنید.
          سپس کلید سبز رنگ "افزودن به سبد خرید" را بزنید.
        </ParComponent>
        <img
          alt="افزودن محصول به سبد خرید"
          src="https://dashboard.dcakala.com/public/img/cms/guideline/step1.jpg"
          style={{ width: "1200px", height: "596px" }}
        />
        <ParComponent>
          دبعد از انتخاب "افزودن به سبد خرید" محصول شما با تعداد مورد نظرتان که
          در مرحله قبل انتخاب کرده اید به سبد خرید شما اضافه می شود. حال در
          اینجا با دو گزینه مواجه می شوید، "افزودن محصول دیگر" که شما را به صفحه
          محصول در فروشگاه باز می گرداند. "تکمیل فرآیند خرید" که شما را به سبد
          خرید محصولتان وارد می کند.
        </ParComponent>
        <img
          alt="ورود به صفحه سبد خرید"
          src="https://dashboard.dcakala.com/public/img/cms/guideline/step2.jpg"
          style={{ width: "1200px", height: "596px" }}
        ></img>
        <Typography>
          شما با انتخاب "تکمیل فرآیند خرید" وارد سبد کالای خود می شوید. در این
          مرحله نیز با انتخاب "بازگشت به فروشگاه" می توانید دوباره به صفحه محصول
          برگشته و یا محصول جدیدی را در سایت انتخاب کنید. گزینه دیگری که در این
          صفحه مشاهده می کنید "پرداخت نهایی" است که شما را به صفحه "ورود یا ثبت
          نام" وارد می کند. در این مرحله در صورتی که حساب کاربری دارید می توانید
          شماره موبایل یا ایمیل خود را وارد نمایید و سپس رمز عبور را زده یا از
          گزینه "ارسال رمز یکبار مصرف" استفاده کنید.
          <br />
          <br />
          در صورتی که حساب کاربری ندارید در همین صفحه می توانید ثبت نام خود را
          انجام دهید
        </Typography>
        <img
          alt="ثبت نام و ورود به سایت"
          src="https://dashboard.dcakala.com/public/img/cms/guideline/step3.jpg"
          style={{ width: "1200px", height: "596px" }}
        />
        <ParComponent>
          در این مرحله در صورتی که حساب کاربری ندارید می توانید از قسمت مشخص شده
          وارد شده و برای ثبت نام مراحل زیر را انجام دهید. در کادر اول باید
          شماره همراه یا ایمیلی که با آن قصد ثبت نام را دارید وارد نماید. سپس
          نام در کادر دوم و سوم نام و نام خانوادگی خود را به ترتیب با حروف فارسی
          وارد کنید. در کادر آخر یک رمز عبور مناسب انتخاب کنید و درنهایت کلید
          "ثبت اطلاعات" را انتخاب کنید.
        </ParComponent>
        <img
          alt="صفحه ثبت نام در سایت"
          src="https://dashboard.dcakala.com/public/img/cms/guideline/step4.jpg"
          style={{ width: "1200px", height: "596px" }}
        ></img>
        <Typography mt={5} mb={4} lineHeight={2} fontSize={"21.5px"}>
          بعد از وارد کردن اطلاعات باید کد تاییدی که برای شما پیامک می شود را در
          قسمت مشخص شده وارد نمایید. در صورتی که با ایمیل ثبت نام کرده اید کد
          تایید به ایمیل شما ارسال می شود.
        </Typography>
        <img
          alt="ورود به سایت با رمز عبور"
          src="https://dashboard.dcakala.com/public/img/cms/guideline/step5.jpg"
          style={{ width: "1200px", height: "596px" }}
        ></img>
        <ParComponent>
          در این مرحله شما وارد صفحه کاربری خود می شوید که می توانید از طریق این
          صفحه به تمامی بخش های مورد نظرتان در صفحه خود دسترسی داشته باشید. حال
          در اینجا برای ادامه ی فرآیند پرداخت محصولی که خریداری کرده اید باید در
          گوشه بالا سمت چپ وارد بخش سبد خرید شوید.
        </ParComponent>
        <img
          alt="ادامه فرآیند خرید"
          src="https://dashboard.dcakala.com/public/img/cms/guideline/step6.jpg"
          style={{ width: "1200px", height: "596px" }}
        ></img>
        <ParComponent>
          شما بعد از مرحله بالا با زدن سبد خرید می توانید صفحه زیر را مشاهده
          کرده و "پرداخت نهایی" را بزنید.
        </ParComponent>
        <img
          alt="پرداخت نهایی"
          src="https://dashboard.dcakala.com/public/img/cms/guideline/step7.jpg"
          style={{ width: "1200px", height: "596px" }}
        ></img>
        <ParComponent>
          با زدن "پرداخت نهایی" وارد صفحه زیر می شوید (سمت چپ تصویر)، در این بخش
          شما چهار مرحله را مشاهده می کنید مرحله اول و دوم که در سمت راست تصویر
          نمایش داده شده است شامل تکمیل اطلاعات شخصی و وارد کردن آدرس و کد پستی
          شما می باشد. در قسمت بعدی از همین صفحه باید "روش ارسال" مورد نظرتان را
          انتخاب نمایید که تصویر آن را در پایین سمت راست عکس زیر مشاهده می کنید.
          در مرحله آخر بعد از تکمیل این اطلاعات شما وارد بخش "پرداخت" می شوید و
          به صفحه درگاه بانکی وارد می شوید و بعد از ثبت سفارش، مراحل بعدی از طرف
          شرکت دی سی ای کالا انجام می شود.
        </ParComponent>
        <img
          alt="انتقال به صفحه بانک و تکمیل خرید"
          src="https://dashboard.dcakala.com/public/img/cms/guideline/step8.jpg"
          style={{ width: "1200px", height: "596px" }}
        ></img>
      </Box>
      <Box mt={7}>
        <TitleComponent>مرحله سوم: راهنمای روش های پرداخت</TitleComponent>
        <TitleComponent>- پرداخت از طریق درگاه اینترنتی</TitleComponent>
        <ParComponent lineHeight={2} fontSize={"20.8px"}>
          شما می توانید در هنگام ثبت سفارش خود، از طریق درگاه اینترنتی بانک ‌های
          ملت و پاسارگاد در سایت دی سی ای کالا و یا از طریق پنل اینترنت بانک
          شخصی خود، هزینه سفارش خود را به صورت آنلاین پرداخت و ثبت نمایید.
          پرداخت موفق مبلغ به منزله ثبت قطعی این پرداخت برای سفارش است و نیازی
          به اطلاع دادن آن نیست، سپس سفارش به صورت خودکار وارد مراحل آماده سازی
          و ارسال می‏‌شود.
          <br />
          <br />
          توجه داشته باشید که تحویل گیرنده سفارش هنگام دریافت کالا، باید کارت
          شناسایی همراه داشته باشد. لازم به ذکر است که پرداخت اینترنتی باعث
          ایجاد اولویت و تسریع در پردازش سفارش کاربران می‌شود.
          <br />
          <br />
          کاربران محترم سایت دی سی ای کالا می‌توانند مبلغ سفارش خود را با
          استفاده از همه کارت‌های بانکی عضو شبکه شتاب پرداخت کنند. هم اکنون، با
          کارت بانک‏‌های ملی، صادرات، پارسیان، سامان، اقتصاد نوین، پاسارگاد،
          ملت، کشاورزی، توسعه صادرات، صنعت و معدن، سینا و کارآفرین امکان خرید
          اینترنتی وجود دارد. هنگام پرداخت اینترنتی اطلاعات زیر از شما پرسیده
          می‌شود که پس از وارد کردن آنها و تایید پرداخت، از موفقیت عملیات پرداخت
          خود مطلع می‌شوید.
        </ParComponent>
        <Box mt={3}>
          <MiniTitleComponent mb={3} variant="h6" fontWeight={"bold"}>
            شماره 16 رقمی کارت
          </MiniTitleComponent>
          <Typography fontSize={20}>
            این شماره در کارت همه بانک‏‌ها، بر روی کارت درج شده است.
          </Typography>
          <MiniTitleComponent mt={3} variant="h6" fontWeight={"bold"}>
            رمز خرید اینترنتی یا رمز دوم
          </MiniTitleComponent>
          <Typography fontSize={"20px"} mt={3} lineHeight={2}>
            برای پرداخت اینترنتی لازم است قبلاْ رمز دوم (رمز خرید اینترنتی) کارت
            بانکی خود را فعال کرده باشید. <br /> رمز دوم (رمز خرید اینترنتی) با
            رمزی که شما هنگام استفاده از دستگاه ‌‏های خودپرداز وارد می‌کنید،
            تفاوت دارد. برخی از بانک‌ها مثل بانک سامان معمولاً رمز اینترنتی را
            هنگام صدور کارت تحویل می‌دهند، اما کارت بیشتر بانک‏‌ها در زمان
            تحویل، رمز خرید اینترنتی ندارند، برای فعال کردن رمز خرید اینترنتی،
            می‏‌توانید به دستگاه خودپرداز بانک صادر کننده کارت خود مراجعه کرده،
            کارت خود را وارد کنید و بخش عملیات رمز را انتخاب کنید. سپس، در بخش
            رمز دوم یا رمز اینترنتی، رمز دوم خود را انتخاب کنید.
          </Typography>
          <MiniTitleComponent mt={2} variant="h6" fontWeight={"bold"}>
            کد CVV2
          </MiniTitleComponent>
          <Typography fontSize={"20px"} mt={2} lineHeight={2}>
            این کد یک عدد ۳ یا ۴ رقمی است که پشت یا روی
            کارت‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌های بانکی
            درج می‌شود و به
            ‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌عنوان یک کد
            امنیتی در
            پرداخت‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌های
            اینترنتی کاربرد دارد. این کد روی
            کارت‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ بانک‏‌های
            ملت، صادرات، پاسارگاد، سامان، پارسیان و... به صورت یک عدد 3 رقمی حک
            شده است یا در برخی کارت ها مانند بانک ملی 4 رقمی است.
          </Typography>
          <Typography mt={2} variant="h6" fontWeight={"bold"}>
            تاریخ انقضا
          </Typography>
          <ParComponent mb={0}>
            تاریخ انقضا هم روی بیشتر کارت‌های بانکی حک شده است. اگر روی کارت شما
            تاریخ انقضاء وجود ندارد، می‏‌توانید از عدد 12 به جای ماه و از 99 به
            جای سال انقضای کارت استفاده کنید.
          </ParComponent>
        </Box>
        <Box mt={5}>
          <MiniTitleComponent
            mb={0}
            fontSize={"24px"}
            color="var(--theme-color)"
          >
            پرداخت در فروشگاه
          </MiniTitleComponent>
          <ParComponent mt={0}>
            کاربران عزیز دی سی ای کالا می توانند با مراجعه حضوری به فروشگاه دی
            سی ای کالا واقع در تهران- بزرگراه رسالت شرق، بین چهارراه سرسبز و
            دردشت، پلاک 675، ضمن بازدید از نمایشگاه دایمی دی سی ای کالا، بصورت
            حضوری پرداخت خود را انجام دهند.
          </ParComponent>
          <MiniTitleComponent
            mb={0}
            fontSize={"24px"}
            color="var(--theme-color)"
          >
            پرداخت با کارت بانکی در محل تحویل
          </MiniTitleComponent>
          <ParComponent>
            از آنجا که تمامی ماموران تحویل سفارش دی سی ای کالا در تهران دستگاه
            ‏‏‌های کارت خوان سیار (POS) همراه دارند، می‌توان هنگام تحویل سفارش
            در محل، با استفاده از کارت‌های عضو شبکه شتاب پرداخت خود را انجام
            داد.
          </ParComponent>
          <MiniTitleComponent
            mb={0}
            fontSize={"24px"}
            color="var(--theme-color)"
          >
            پرداخت نقدی در محل تحویل
          </MiniTitleComponent>
          <ParComponent>
            برای آسودگی بیشترآن دسته از مشتریان ساکن تهران که تمایل به پرداخت
            نقدی هزینه سفارش خود دارند، دی سی ای کالا امکان پرداخت نقدی در محل
            خرید را نیز فراهم آورده است.
          </ParComponent>
          <MiniTitleComponent
            mb={0}
            fontSize={"24px"}
            color="var(--theme-color)"
          >
            پرداخت به روش کارت به کارت یا انتقال وجه
          </MiniTitleComponent>
          <ParComponent>
            کاربرانی که امکان پرداخت اینترنتی و یا پرداخت در محل را ندارند
            می‌توانند وجه سفارش خود را به شماره کارت ‌های قید شده در این قسمت
            کارت به کارت نمایند. جهت پرداخت به صورت کارت به کارت می‌توان از
            دستگاه های ATM (عابر بانک) و یا کارت به کارت اینترنتی استفاده کرد.
            با این حال پرداخت از طریق درگاه پرداخت اینترنتی سایت دی سی ای کالا
            به علت میزان اتوماسیون بالای آن آسان‌تر و سریع‌تر است و دی سی ای
            کالا پیشنهاد می‌کند که از این روش جهت پرداخت استفاده کنید. اما در
            صورت انتخاب این روش می توانید از شماره حساب یا شماره کارت های زیر
            استفاده کنید:
          </ParComponent>
          <Typography
            mt={5}
            lineHeight={2}
            fontSize={"21.5px"}
            fontWeight={500}
          >
            شماره حساب: 4225027437 بانک ملت به نام آقای امیرحسین بقایی
            <br />
            شماره کارت: 0168 - 9926 - 3378 - 6104 بانک ملت به آقای نام امیرحسین
            بقایی
          </Typography>
          <MiniTitleComponent  fontSize={"24px"} color="var(--theme-color)">
            پرداخت سریع
          </MiniTitleComponent>
          <ParComponent >
            روش دیگر برای پرداخت هزینه خرید شما، پرداخت سریع است. به این صورت که
            با پرداخت مبلغی به عنوان بیعانه و به صورت اینترنتی، می توانید باقی
            مانده هزینه خرید خود را در محل پرداخت نمایید.
          </ParComponent>
        </Box>
      </Box>
    </Box>
  );
};

export default ShoppingGuide;
