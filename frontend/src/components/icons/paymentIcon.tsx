import { Icon } from "@chakra-ui/react";

const PaymentIcon = () => {
  return (
    <Icon fontSize={{ base: "20px", md: "45px" }} color="brand.icon">
      <svg
        width="46"
        height="45"
        viewBox="0 0 46 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M35.8701 7.85956C37.3476 7.85956 38.7647 8.44651 39.8094 9.49129C40.8542 10.5361 41.4412 11.9531 41.4412 13.4306V32.0008C41.4412 33.4784 40.8542 34.8954 39.8094 35.9402C38.7647 36.985 37.3476 37.5719 35.8701 37.5719H9.87179C8.39425 37.5719 6.97723 36.985 5.93245 35.9402C4.88767 34.8954 4.30072 33.4784 4.30072 32.0008V13.4306C4.30072 11.9531 4.88767 10.5361 5.93245 9.49129C6.97723 8.44651 8.39425 7.85956 9.87179 7.85956H35.8701ZM37.7271 19.0017H8.01476V32.0008C8.01482 32.4557 8.18182 32.8947 8.48406 33.2346C8.78631 33.5745 9.20279 33.7917 9.65452 33.8449L9.87179 33.8579H35.8701C36.3249 33.8578 36.764 33.6908 37.1039 33.3886C37.4438 33.0863 37.6609 32.6698 37.7141 32.2181L37.7271 32.0008V19.0017ZM32.1561 24.5728C32.6294 24.5733 33.0846 24.7545 33.4288 25.0794C33.773 25.4044 33.9801 25.8484 34.0078 26.3209C34.0356 26.7935 33.8818 27.2587 33.578 27.6217C33.2743 27.9846 32.8433 28.2179 32.3733 28.2738L32.1561 28.2868H26.585C26.1117 28.2863 25.6564 28.105 25.3122 27.7801C24.9681 27.4552 24.761 27.0111 24.7332 26.5386C24.7055 26.0661 24.8592 25.6008 25.163 25.2379C25.4668 24.8749 25.8977 24.6417 26.3677 24.5858L26.585 24.5728H32.1561ZM35.8701 11.5736H9.87179C9.37927 11.5736 8.90693 11.7693 8.55867 12.1175C8.21042 12.4658 8.01476 12.9381 8.01476 13.4306V15.2876H37.7271V13.4306C37.7271 12.9381 37.5315 12.4658 37.1832 12.1175C36.835 11.7693 36.3626 11.5736 35.8701 11.5736Z"
          fill="#D0D5DD"
        />
      </svg>
    </Icon>
  );
};

export default PaymentIcon;
