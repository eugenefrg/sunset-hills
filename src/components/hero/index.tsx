import React, { useEffect } from "react";
import Rellax from "rellax";
import "../common.scss";

export const HeroPage: React.FC = () => {
  useEffect(() => {
    new Rellax(".sun", {
      speed: -1,
      center: false,
      round: true,
      vertical: true,
      horizontal: false,
    });
      new Rellax(".mtn_front", {
          speed: 3,
          center: false,
          round: true,
          vertical: true,
          horizontal: false,
      });
      new Rellax(".mtn_rear", {
          speed: -1,
          center: false,
          round: true,
          vertical: true,
          horizontal: false,
      });
      new Rellax(".ocean", {
          speed: -1,
          center: false,
          round: true,
          vertical: true,
          horizontal: false,
      });
      new Rellax(".information", {
          speed: -8,
      });

  },[]);

  return (
    <div className="bg-background1 h-screen m-0 grid align-center overflow-hidden relative">
        <svg viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute h-full md:w-full">
            <g clipPath="objectBoundingBox">
                <g className="sun">
                    <path opacity="0.11" d="M975.5 1732C1567.83 1732 2048 1252.05 2048 660C2048 67.951 1567.83 -412 975.5 -412C383.175 -412 -97 67.951 -97 660C-97 1252.05 383.175 1732 975.5 1732Z" fill="#F28F46"/>
                    <path opacity="0.21" d="M975.5 1624.21C1508.27 1624.21 1940.17 1192.52 1940.17 660C1940.17 127.484 1508.27 -304.206 975.5 -304.206C442.724 -304.206 10.8242 127.484 10.8242 660C10.8242 1192.52 442.724 1624.21 975.5 1624.21Z" fill="#F28F46"/>
                    <path opacity="0.21" d="M975.5 1509.36C1444.83 1509.36 1825.3 1129.09 1825.3 660C1825.3 190.914 1444.83 -189.355 975.5 -189.355C506.166 -189.355 125.695 190.914 125.695 660C125.695 1129.09 506.166 1509.36 975.5 1509.36Z" fill="#F28F46"/>
                    <path opacity="0.21" d="M975.5 1427.28C1399.47 1427.28 1743.16 1083.76 1743.16 660C1743.16 236.243 1399.47 -107.279 975.5 -107.279C551.533 -107.279 207.84 236.243 207.84 660C207.84 1083.76 551.533 1427.28 975.5 1427.28Z" fill="#F28F46"/>
                    <path opacity="0.21" d="M975.5 1315.49C1337.72 1315.49 1631.35 1022.02 1631.35 660C1631.35 297.982 1337.72 4.50699 975.5 4.50699C613.284 4.50699 319.65 297.982 319.65 660C319.65 1022.02 613.284 1315.49 975.5 1315.49Z" fill="#F28F46"/>
                    <path opacity="0.21" d="M975.5 1224.69C1287.54 1224.69 1540.49 971.87 1540.49 660C1540.49 348.131 1287.54 95.311 975.5 95.311C663.465 95.311 410.51 348.131 410.51 660C410.51 971.87 663.465 1224.69 975.5 1224.69Z" fill="#F28F46"/>
                    <path opacity="0.21" d="M975.5 1142.61C1242.17 1142.61 1458.35 926.54 1458.35 660C1458.35 393.46 1242.17 177.386 975.5 177.386C708.831 177.386 492.652 393.46 492.652 660C492.652 926.54 708.831 1142.61 975.5 1142.61Z" fill="#F28F46"/>
                    <path opacity="0.21" d="M975.5 1086.35C1211.09 1086.35 1402.07 895.47 1402.07 660C1402.07 424.534 1211.09 233.651 975.5 233.651C739.912 233.651 548.93 424.534 548.93 660C548.93 895.47 739.912 1086.35 975.5 1086.35Z" fill="#F28F46"/>
                    <path opacity="0.21" d="M975.5 994.34C1160.24 994.34 1310.01 844.65 1310.01 660C1310.01 475.35 1160.24 325.662 975.5 325.662C790.756 325.662 640.992 475.35 640.992 660C640.992 844.65 790.756 994.34 975.5 994.34Z" fill="#F28F46"/>
                    <path d="M975.5 913.28C1115.44 913.28 1228.88 799.88 1228.88 660C1228.88 520.115 1115.44 406.716 975.5 406.716C835.559 406.716 722.115 520.115 722.115 660C722.115 799.88 835.559 913.28 975.5 913.28Z" fill="#FAFF3B"/>
                </g>
                <g opacity="0.8" className="ocean">
                    <path opacity="0.8" d="M1679.07 849.473H-1102.49V849.612C-878.507 856.364 -435.384 869.871 92.4575 885.995C1197.66 919.623 2674.22 964.69 3289.47 983.569V1002.87C3012.7 1012.93 2561.44 1029.33 2048.11 1048.07C875.805 1090.93 -620.292 1145.92 -1102.49 1163.97V1665.49H3292V975.164L1679.07 849.473Z" fill="#C94331"/>
                    <path opacity="0.8" d="M3292 643.436H-1102.49V1665.49H3292V643.436Z" fill="#ED583B"/>
                    <path opacity="0.8" d="M2833.21 768.437L1479.27 725.988C1479.46 725.851 1479.66 725.713 1479.66 725.574C1481.41 724.335 1482.95 723.095 1484.69 721.717C1485.66 720.889 1486.62 720.201 1487.79 719.373C1489.91 717.72 1491.84 716.204 1493.79 714.551C1494.75 713.723 1495.72 712.896 1496.68 712.207C1498.43 710.829 1500.17 709.313 1501.71 707.934C1502.68 707.108 1503.64 706.281 1504.6 705.453C1506.16 704.076 1507.7 702.698 1509.24 701.319C1510.02 700.631 1510.8 699.94 1511.58 699.252C1513.7 697.322 1515.83 695.392 1517.76 693.463C1518.73 692.637 1519.51 691.672 1520.47 690.845C1521.83 689.468 1523.18 688.226 1524.54 686.848C1525.32 686.022 1526.28 685.195 1527.04 684.23C1528.6 682.576 1530.14 681.06 1531.68 679.407L2413.3 643.573H-1102.49V726.953C-721.451 725.851 314.697 715.653 749.31 711.242L798.632 709.175C799.406 709.726 685.197 711.891 801.146 710.691C544.183 778.911 945.215 815.782 1056.24 815.782C1157.98 815.782 1304.81 853.056 1380.25 812.676L1479.66 725.988C1478.88 726.539 1478.1 727.092 1477.34 727.643C1475.02 729.434 1472.5 731.226 1470.18 732.88C1469.22 733.568 1468.25 734.258 1467.29 734.947C1465.54 736.188 1463.8 737.427 1462.05 738.669C1461.09 739.357 1459.94 740.046 1458.97 740.736C1456.45 742.389 1453.94 744.181 1451.42 745.835C1450.64 746.386 1449.67 746.937 1448.91 747.488C1446.96 748.729 1445.03 749.969 1442.92 751.21C1441.75 751.899 1440.78 752.587 1439.61 753.138C1437.5 754.517 1435.18 755.758 1433.05 757.135C1432.27 757.686 1431.3 758.1 1430.54 758.651C1428.02 760.167 1425.51 761.545 1422.8 763.061C1421.63 763.612 1420.67 764.303 1419.5 764.854C1417.38 765.956 1415.25 767.195 1413.32 768.299C1412.35 768.851 1411.39 769.264 1410.61 769.816C1407.71 771.331 1404.8 772.847 1402.09 774.224C1401.13 774.777 1400.16 775.189 1399.01 775.74C1396.88 776.844 1394.74 777.946 1392.42 778.911C1391.46 779.462 1390.31 779.876 1389.34 780.427C1386.43 781.806 1383.33 783.322 1380.25 784.699C1379.47 785.112 1378.69 785.389 1377.72 785.801C1375.4 786.905 1372.9 788.007 1370.38 789.109C1369.23 789.523 1368.26 790.074 1367.09 790.488C1364.38 791.727 1361.67 792.829 1358.78 793.933C1358.2 794.208 1357.61 794.485 1357.03 794.622C1353.93 795.863 1350.85 797.103 1347.75 798.344C1346.58 798.756 1345.62 799.17 1344.47 799.584C1341.94 800.548 1339.44 801.513 1336.73 802.478C1335.95 802.753 1334.99 803.167 1334.21 803.443C1330.92 804.682 1327.64 805.785 1324.35 806.889C1323.39 807.163 1322.4 807.577 1321.44 807.852C1318.93 808.679 1316.22 809.644 1313.7 810.472C1312.73 810.746 1311.58 811.16 1310.62 811.437C1309.26 811.849 1307.91 812.262 1306.55 812.676L895.727 817.775L-515.266 835.278L-1102.49 786.905V849.473H1679.07L2833.21 768.437Z" fill="#C94331"/>
                    <path opacity="0.8" d="M3289.47 782.769L2833.21 768.437L1679.07 849.473L3292 975.164V736.325L3289.47 736.462V782.769Z" fill="#EA6E5E"/>
                    <path opacity="0.8" d="M2048.11 1048.07C2561.44 1029.33 3012.7 1012.93 3289.47 1002.87V983.569C2674.22 964.69 1197.65 919.623 92.4551 885.995L2048.11 1048.07Z" fill="#FF833E"/>
                    <path opacity="0.8" d="M2847.13 1018.99L510.824 920.725L2048.12 1048.21C2341.74 1037.32 2615.02 1027.4 2847.13 1018.99Z" fill="#E87338"/>
                    <path opacity="0.8" d="M1559.17 648.121C1558 649.637 1556.83 651.153 1555.47 652.669C1554.71 653.634 1553.93 654.599 1553.15 655.564C1551.8 657.08 1550.65 658.596 1549.29 660.249C1548.51 661.214 1547.55 662.316 1546.77 663.281C1545.23 665.073 1543.69 666.864 1542.13 668.656C1541.37 669.621 1540.41 670.586 1539.63 671.412C1538.27 672.79 1537.1 674.169 1535.75 675.548C1534.99 676.373 1534.21 677.201 1533.43 678.166C1533.06 678.579 1532.67 678.993 1532.28 679.268L2458.95 641.506H1563.99C1563.03 642.746 1562.06 644.124 1561.1 645.366C1560.5 646.331 1559.93 647.156 1559.17 648.121Z" fill="#EF763A"/>
                    <path opacity="0.8" d="M92.4577 885.995C-437.317 869.871 -881.794 856.364 -1105 849.473L-1102.49 1163.97C-622.806 1145.92 873.872 1090.93 2048.11 1048.07L92.4577 885.995Z" fill="#E37A76"/>
                    <path opacity="0.8" d="M-1105 968.961L-1102.49 1163.97C-622.806 1145.92 873.872 1090.93 2048.11 1048.07L1939.6 1039.11C1133.63 1020.37 -681.024 978.333 -1105 968.961Z" fill="#AA6465"/>
                    <path opacity="0.8" d="M-109.032 707.041C-112.025 708.26 -115.016 709.377 -118.009 710.596C-119.505 711.204 -121.375 711.814 -122.869 712.524C-125.489 713.54 -128.106 714.453 -130.725 715.468C-132.595 716.076 -134.092 716.787 -135.962 717.398C-140.076 718.818 -143.816 720.239 -147.93 721.659C-149.426 722.169 -150.922 722.676 -152.417 723.183C-155.41 724.197 -158.403 725.214 -161.394 726.228C-163.264 726.838 -165.134 727.447 -167.004 728.055C-170.37 729.071 -173.363 730.187 -176.728 731.203C-178.598 731.812 -180.468 732.422 -182.338 732.929C-186.078 734.147 -190.194 735.364 -193.934 736.481C-195.804 737.09 -197.674 737.599 -199.918 738.207C-203.284 739.121 -206.275 740.137 -209.642 741.05C-210.015 741.151 -210.389 741.252 -210.389 741.354L3290.01 783.179V679.125H1683.99L-109.032 707.041Z" fill="#F28F46"/>
                    <path opacity="0.8" d="M2977.97 698.735C2973.08 696.828 2968.2 694.921 2963.74 693.015C2961.53 692.196 2959.76 691.243 2957.54 690.425C2954.42 689.063 2951.32 687.837 2948.2 686.476C2946.44 685.658 2944.2 684.84 2942.44 684.024C2937.98 682.115 2933.55 680.073 2929.11 678.166C2927.33 677.348 2925.56 676.53 2923.78 675.576C2920.68 674.215 2918.01 672.853 2914.89 671.49C2913.12 670.536 2910.91 669.583 2909.12 668.765C2905.57 666.995 2902.02 665.224 2898.47 663.452C2896.68 662.499 2894.46 661.41 2892.68 660.455C2889.58 658.958 2886.91 657.459 2883.81 655.825C2882.02 654.871 2880.24 653.916 2878.47 652.963C2875.8 651.464 2873.14 649.967 2870.04 648.468C2868.7 647.65 2866.92 646.697 2865.58 645.879C2863.36 644.654 2861.15 643.291 2858.93 642.065H-1104.49V645.335L2981.97 700.506C2980.64 699.826 2979.3 699.28 2977.97 698.735Z" fill="#EF763A"/>
                    <path opacity="0.8" d="M2625.41 816.801C2625.41 816.801 2625.06 816.801 2625.41 816.801C2619.64 816.297 2614.22 815.796 2609.17 815.208C2607.73 815.041 2606.3 814.957 2604.86 814.789C2598.35 814.118 2592.24 813.53 2585.73 812.861C2583.92 812.693 2581.77 812.442 2579.96 812.274C2575.28 811.77 2570.23 811.267 2565.53 810.68C2563.72 810.512 2561.92 810.262 2560.13 810.094C2553.99 809.423 2547.86 808.668 2541.72 807.997C2540.28 807.829 2538.47 807.577 2537.04 807.411C2532.36 806.824 2527.66 806.237 2522.61 805.649C2520.45 805.398 2518.64 805.146 2516.47 804.894C2510.7 804.141 2504.93 803.386 2499.16 802.631C2498.08 802.463 2497.01 802.295 2495.92 802.211C2490.87 801.542 2485.45 800.787 2480.4 800.116C2478.25 799.864 2476.44 799.528 2474.28 799.276C2469.58 798.607 2465.25 797.936 2460.57 797.265C2459.14 797.013 2457.68 796.845 2456.24 796.594C2450.47 795.756 2445.05 794.917 2439.29 793.995C2437.48 793.659 2435.32 793.407 2433.52 793.073C2429.56 792.402 2425.22 791.731 2421.26 791.144C2419.46 790.808 2417.65 790.556 2415.47 790.223C2410.07 789.3 2404.66 788.461 2399.61 787.538C2397.8 787.204 2395.99 786.952 2394.56 786.617C2390.59 785.946 2386.63 785.191 2382.65 784.519C2380.49 784.186 2378.69 783.766 2376.53 783.43C2371.83 782.508 2366.78 781.669 2362.1 780.748C2360.64 780.412 2358.86 780.16 2357.4 779.825C2353.44 778.986 2349.11 778.232 2345.15 777.393C2342.97 776.974 2341.18 776.554 2339.01 776.219C2335.4 775.465 2331.43 774.71 2327.82 773.955C2326.38 773.62 2324.58 773.284 2323.14 772.95C2318.46 771.944 2313.76 770.937 2309.08 769.848C2307.27 769.428 2305.1 769.009 2303.31 768.589C2300.05 767.834 2296.8 767.081 2293.56 766.326C2291.75 765.906 2289.95 765.487 2288.16 765.067C2283.46 763.978 2279.13 762.972 2274.8 761.881C2273.01 761.461 2271.55 761.044 2269.75 760.624C2266.51 759.869 2263.63 759.114 2260.39 758.277C2258.58 757.774 2256.78 757.354 2254.97 756.851C2251.01 755.844 2247.39 754.839 2243.43 753.832C2242.69 753.664 2241.97 753.497 2241.26 753.245L-1105 797.684L-5.93282 827.367L2625.41 816.801Z" fill="#FF833E"/>
                    <path opacity="0.8" d="M1423.19 683.816L862.459 706.694L1363.23 722.405C1384.68 710.828 1404.8 697.873 1423.19 683.816Z" fill="#F28F46"/>
                </g>
                <g className="mtn_rear">
                    <path d="M52.0129 751.594C65.4276 755.601 74.7563 752.596 88.6334 750.67C118.933 746.432 149.231 742.195 179.53 737.957C194.95 748.436 218.155 749.206 236.813 748.513C243.674 748.282 250.536 747.896 257.32 747.434C282.607 745.816 307.741 742.966 332.72 738.804C346.135 744.044 366.719 738.573 379.44 731.716C392.161 724.859 404.496 716.307 418.836 714.766C382.601 699.665 344.515 677.321 305.351 680.172C288.852 681.405 272.585 685.796 256.086 686.182C236.273 686.721 216.845 681.559 197.339 678.092C150.079 669.693 101.123 670.927 54.4029 681.79C34.5891 686.413 14.6984 692.731 -5.26953 696.891L-239 720C-222.611 731.434 -210.862 737.019 -182 744.5C-114.55 753.37 -76.6431 755.149 -5.26953 753.521C14.0045 757.064 33.4327 757.604 52.0129 751.594Z" fill="#C94331"/>
                    <path d="M93.3363 734.105C144.759 726.4 199.113 711.915 251.075 713.379C268.807 713.842 286 719.158 303.655 721.161C321.31 723.164 340.507 721.392 353.844 709.758C374.429 712.223 396.247 713.071 416.986 713.765C406.423 691.652 371.576 686.104 352.919 670.31C326.475 647.966 296.331 614.451 292.63 580.011C269.115 565.217 242.517 533.551 219.466 518.065C212.142 513.134 196.414 502.579 187.548 502.81C163.726 503.349 139.748 495.337 121.014 480.543C114.538 475.458 104.052 456.813 106.597 448.954C88.8652 437.396 81.849 407.503 72.983 388.241C65.8902 372.986 55.0968 351.413 48.0809 336.08C35.6685 334.231 21.5599 323.598 20.6348 311.117C20.018 302.256 14.0815 287.849 6.68037 282.994C2.90266 280.606 -1.10634 278.603 -5.26953 277.063C-5.26953 277.063 -38.5 311.117 -65 401C-91.5 490.883 -122.5 480.543 -122.5 480.543C-166.5 550.548 -143.6 547.522 -159.5 580.011C-175.4 612.5 -164 618.69 -192.5 644.5C-221 670.31 -236 721.161 -236 721.161C-143.939 748.497 -93.8121 748.448 -5.26953 739.113C27.265 742.118 60.8018 738.959 93.3363 734.105Z" fill="#5F031B"/>
                    <path d="M272.74 694.04C253.004 689.726 230.723 674.624 213.453 663.992C204.202 658.29 191.866 661.064 181.998 656.518C179.222 655.209 176.755 653.436 174.057 652.05C169.277 649.584 163.958 648.582 158.715 647.427C144.914 644.345 131.345 640.03 118.239 634.637C113.382 632.634 108.448 630.322 104.67 626.624C100.893 622.926 96.1123 602.662 97.3466 597.5C86.3986 585.558 77.3783 571.921 70.6709 557.127C65.5055 545.648 64.3491 521.455 60.5714 509.435C52.5534 502.347 55.3288 489.172 50.7802 479.465C47.0795 471.529 38.9845 466.751 32.4313 460.974C25.8781 455.118 21.0211 442.867 24.7988 435.008C20.7898 405.345 16.7808 375.606 12.8488 345.942C10.1506 325.756 7.37501 305.261 0.205109 286.153C-0.874236 283.38 -2.03068 280.529 -3.26422 277.832C-4.03518 277.524 -4.72904 277.217 -5.5 276.908C-33.5379 313.664 -46.0238 336.155 -58.5 382C-78.3736 453.623 -92.5085 472.331 -121.5 479.465C-144.723 513.402 -152.15 533.404 -154.5 571C-164.261 587.083 -169.631 598.783 -179 626.624C-209.606 651.806 -221.002 685.227 -238 721.007C-170.293 741.878 -89.614 753.919 -5.5 738.958C27.1116 741.963 60.6484 738.804 93.1826 733.95C144.606 726.246 198.959 711.761 250.922 713.225C268.654 713.688 285.846 719.004 303.501 721.007C313.6 722.162 324.318 722.085 334.031 719.542C314.526 708.833 294.481 698.817 272.74 694.04Z" fill="#470318"/>
                    <path d="M1866.4 750.578C1851.37 755.072 1840.92 751.701 1825.37 749.54C1791.43 744.785 1757.5 740.031 1723.55 735.277C1706.28 747.033 1680.28 747.898 1659.38 747.12C1651.7 746.86 1644.02 746.428 1636.42 745.91C1608.09 744.094 1579.93 740.895 1551.95 736.227C1536.92 742.105 1513.87 735.969 1499.62 728.275C1485.46 720.582 1471.55 710.986 1455.49 709.258C1496.08 692.314 1538.74 667.246 1582.61 670.444C1601.1 671.827 1619.32 676.755 1637.79 677.187C1659.99 677.792 1681.75 672 1703.6 668.111C1756.55 658.688 1811.38 660.071 1863.72 672.259C1885.92 677.447 1891.96 677.014 1914.33 681.768L2293 645.5C2185.33 732.739 2103.03 755.101 1914.33 745.305C1892.65 749.194 1887.21 757.319 1866.4 750.578Z" fill="#C94331"/>
                    <path d="M1803.78 730.954C1746.18 722.31 1685.3 706.059 1627.09 707.701C1607.23 708.22 1587.96 714.184 1568.19 716.432C1548.41 718.68 1526.91 716.692 1511.97 703.638C1488.91 706.405 1464.47 707.356 1441.24 708.134C1453.07 683.325 1492.11 677.1 1513.01 659.38C1542.63 634.311 1576.39 596.708 1580.53 558.068C1606.88 541.471 1636.68 505.943 1662.5 488.568C1670.7 483.035 1688.31 471.193 1698.25 471.452C1724.93 472.057 1751.79 463.067 1772.78 446.47C1780.04 440.765 1791.78 419.845 1788.93 411.028C1808.8 398.061 1816.65 364.522 1826.58 342.911C1834.53 325.709 1846.53 301.504 1854.48 284.302C1868.38 282.227 1884.19 270.298 1885.22 256.294C1885.91 246.353 1892.56 230.189 1900.86 224.743C1905.08 222.063 1909.57 219.815 1914.24 218.087C1932.48 219.655 1945.21 228.739 2018.5 411.028C2031.32 471.075 2054.93 505.422 2176.5 570C2209.99 609.653 2234.55 626.73 2293.5 643.5C2243.3 677.839 2208.74 694.163 2132 716.432C2043.99 734.911 1996.93 737.109 1914.24 736.487C1877.8 739.945 1840.23 736.401 1803.78 730.954Z" fill="#5F031B"/>
                    <path d="M1602.82 686.004C1624.93 681.163 1649.89 664.221 1669.23 652.292C1679.6 645.894 1693.42 649.006 1704.47 643.906C1707.58 642.436 1710.34 640.448 1713.36 638.893C1718.72 636.126 1724.67 635.003 1730.55 633.706C1746 630.248 1761.2 625.407 1775.89 619.356C1781.33 617.108 1786.86 614.515 1791.09 610.366C1795.32 606.217 1800.68 583.482 1799.29 577.691C1811.55 564.292 1821.66 548.991 1829.18 532.394C1834.96 519.514 1836.26 492.371 1840.49 478.885C1849.47 470.933 1846.36 456.152 1851.46 445.259C1855.6 436.355 1864.67 430.996 1872.01 424.513C1879.35 417.943 1884.79 404.199 1880.56 395.382C1885.05 362.101 1889.54 328.734 1893.95 295.453C1896.96 272.805 1900.08 249.811 1908.11 228.373C1909.32 225.261 1910.61 222.063 1911.99 219.037C1912.86 218.692 1913.64 218.346 1914.5 218C1941.82 223.639 1967.39 279.382 2019.5 412C2049.59 488.993 2086.53 522.55 2177 570.5C2251.56 639.112 2266.19 639.47 2295 643.906C2165.98 722.542 2078.63 734.035 1914.5 736.4C1877.97 739.772 1840.4 736.227 1803.95 730.781C1746.35 722.137 1685.47 705.886 1627.26 707.528C1607.4 708.047 1588.14 714.012 1568.36 716.259C1557.05 717.555 1545.04 717.469 1534.16 714.617C1556.01 702.601 1578.47 691.364 1602.82 686.004Z" fill="#470318"/>
                </g>
                <g className="mtn_front">
                    <path d="M1952.98 151.621L1922.03 150.33C1922.03 150.33 1862.65 143.881 1858.79 145.171C1854.92 146.461 1811.01 147.75 1807.52 150.33C1804.03 152.911 1790.23 154.657 1782.65 156.781C1775.06 158.906 1763.31 161.942 1763.31 161.942H1751.7C1751.7 161.942 1737.52 168.392 1734.26 169.682C1731.08 170.972 1705.21 181.294 1705.21 181.294L1670.4 182.584L1648.94 180.004L1599.42 177.423L1581.37 168.392L1563.32 161.942L1545.27 167.102L1520.77 177.423H1501.44H1484.91H1461.47H1447.59L1440.16 189.034L1447.59 203.301L1461.47 212.332L1475.73 221.364L1479.98 226.22V229.863V242.308C1479.98 242.308 1481.49 249.974 1481.94 252.326C1482.4 254.679 1484.3 270.919 1484.3 270.919C1484.3 270.919 1484.3 287.159 1484.3 288.601C1484.3 290.043 1484.75 312.506 1484.3 314.404C1483.84 316.301 1481.04 332.541 1482.17 334.438C1483.31 336.335 1484.45 330.72 1484.45 330.72L1486.5 322.676C1486.5 322.676 1488.02 317.059 1488.02 316.149C1488.02 315.238 1488.32 310.002 1488.02 309.319C1487.71 308.636 1488.55 304.538 1488.17 303.324C1487.71 302.11 1488.32 295.887 1488.32 295.887C1488.32 295.887 1488.25 290.27 1488.32 289.36C1488.4 288.449 1488.32 283.137 1488.32 283.137C1488.32 283.137 1488.02 274.486 1488.32 273.651C1488.62 272.74 1487.71 270.084 1488.32 269.173C1488.92 268.263 1488.17 264.696 1488.4 263.785C1488.62 262.874 1489.07 257.942 1488.55 257.259C1488.02 256.651 1488.77 252.174 1488.77 252.174L1491.58 255.437V260.218V264.392V269.477V273.044L1494.54 272.133C1494.54 272.133 1494.54 265.607 1494.54 264.392C1494.54 263.178 1494.24 261.13 1494.54 259.611C1494.84 258.093 1496.05 256.651 1496.35 255.437C1496.66 254.223 1496.05 253.388 1496.35 251.87C1496.66 250.353 1496.2 248.607 1496.43 247.393C1496.66 246.179 1496.43 244.433 1496.43 244.433C1496.43 244.433 1494.69 244.13 1495.07 241.929L1502.96 249.063L1505 250.504L1503.94 255.741L1504.47 259.839C1504.47 259.839 1504.92 263.709 1505.08 265.227C1505.23 266.745 1505.76 269.932 1505.83 271.45C1505.91 272.968 1505.83 279.798 1505.83 279.798V285.186V291.712V300.06V305.145C1505.83 305.145 1502.88 306.967 1502.28 309.319C1501.67 311.672 1500.22 313.72 1499.92 315.845C1499.62 317.895 1499.62 319.109 1499.62 320.323C1499.62 321.537 1499.92 322.978 1499.92 323.89C1499.92 324.8 1500.53 326.546 1500.53 326.546C1499.92 323.89 1502.58 320.626 1502.88 319.716C1503.19 318.805 1503.19 316.756 1503.78 315.542C1504.09 315.011 1504.92 313.492 1505.76 312.202C1506.67 310.761 1507.51 309.395 1507.51 309.395C1507.51 309.395 1509.71 306.055 1509.71 305.221C1509.71 304.386 1509.71 301.958 1509.71 300.136C1509.71 298.315 1509.4 296.569 1509.71 295.052C1510.01 293.534 1509.1 290.878 1509.71 289.132C1510.31 287.311 1508.64 285.262 1509.78 284.048C1510.92 282.834 1510.31 281.088 1511.22 280.177C1512.13 279.267 1513.04 276.307 1513.04 276.307C1513.04 276.307 1513.65 274.258 1513.04 273.044C1512.43 271.83 1512.13 270.691 1511.82 269.477C1511.52 268.263 1510.62 266.821 1510.62 265.607C1510.62 264.392 1510.01 263.558 1510.01 261.736C1510.01 259.915 1509.78 253.996 1509.78 253.996L1514.41 257.335L1529.95 260.067C1529.95 264.544 1529.95 269.629 1529.95 270.388C1529.95 271.83 1530.41 294.293 1529.95 296.19C1529.5 298.087 1526.69 314.328 1527.83 316.225C1528.97 318.122 1530.11 312.506 1530.11 312.506L1532.16 304.462C1532.16 304.462 1533.66 298.846 1533.66 297.935C1533.66 297.025 1533.97 291.788 1533.66 291.106C1533.36 290.422 1534.2 286.325 1533.82 285.11C1533.36 283.896 1533.97 277.673 1533.97 277.673C1533.97 277.673 1533.89 272.058 1533.97 271.146C1534.04 270.236 1533.97 264.923 1533.97 264.923C1533.97 264.923 1533.89 262.874 1533.89 260.75L1551.57 263.861V267.049V273.575V281.922V287.007C1551.57 287.007 1548.6 288.829 1548.01 291.182C1547.4 293.534 1545.96 295.583 1545.65 297.707C1545.35 299.757 1545.35 300.971 1545.35 302.186C1545.35 303.4 1545.65 304.841 1545.65 305.752C1545.65 306.663 1546.26 308.408 1546.26 308.408C1545.65 305.752 1548.3 302.488 1548.6 301.578C1548.91 300.668 1548.91 298.619 1549.52 297.405C1549.82 296.873 1550.66 295.355 1551.49 294.065C1552.4 292.624 1553.24 291.258 1553.24 291.258C1553.24 291.258 1555.44 287.918 1555.44 287.083C1555.44 286.249 1555.44 283.82 1555.44 281.998C1555.44 280.177 1555.14 278.432 1555.44 276.915C1555.73 275.396 1554.83 272.74 1555.44 270.994C1556.04 269.249 1554.38 267.125 1555.51 265.91C1555.81 265.531 1556.04 265.151 1556.11 264.696L1614.21 274.865H1676.7H1740.56L1807.75 309.395V316.68C1807.75 316.68 1809.26 324.345 1809.72 326.697C1810.17 329.05 1812.07 345.29 1812.07 345.29C1812.07 345.29 1812.07 361.531 1812.07 362.972C1812.07 364.414 1812.53 386.878 1812.07 388.775C1811.61 390.672 1808.8 406.912 1809.94 408.809C1811.08 410.707 1812.22 405.091 1812.22 405.091L1814.27 397.047C1814.27 397.047 1815.78 391.431 1815.78 390.521C1815.78 389.609 1816.09 384.374 1815.78 383.69C1815.49 383.084 1816.31 378.909 1815.93 377.695C1815.56 376.481 1816.09 370.258 1816.09 370.258C1816.09 370.258 1816.01 364.642 1816.09 363.732C1816.16 362.821 1816.09 357.509 1816.09 357.509C1816.09 357.509 1815.78 348.857 1816.09 348.023C1816.39 347.112 1815.49 344.456 1816.09 343.544C1816.69 342.634 1815.93 339.067 1816.16 338.157C1816.39 337.246 1816.84 332.314 1816.31 331.63C1815.78 330.947 1816.54 326.546 1816.54 326.546L1819.35 329.809V334.59V338.764V343.848V347.415L1822.31 346.505C1822.31 346.505 1822.31 339.978 1822.31 338.764C1822.31 337.549 1822.01 335.501 1822.31 333.983C1822.62 332.465 1823.82 331.023 1824.12 329.809C1824.43 328.595 1823.82 327.76 1824.12 326.242C1824.43 324.724 1823.97 322.978 1824.2 321.764C1824.35 321.006 1824.28 319.943 1824.28 319.336L1832.85 324.496L1831.71 330.113L1832.24 334.21C1832.24 334.21 1832.7 338.081 1832.85 339.599C1833 341.116 1833.53 344.304 1833.61 345.822C1833.68 347.339 1833.61 354.17 1833.61 354.17V359.557V366.084V374.432V379.517C1833.61 379.517 1830.65 381.338 1830.05 383.69C1829.44 386.043 1828 388.092 1827.69 390.217C1827.39 392.266 1827.39 393.48 1827.39 394.694C1827.39 395.908 1827.69 397.35 1827.69 398.261C1827.69 399.171 1828.3 400.917 1828.3 400.917C1827.69 398.261 1830.35 394.998 1830.65 394.088C1830.95 393.176 1830.95 391.127 1831.56 389.913C1831.86 389.382 1832.7 387.865 1833.53 386.574C1834.44 385.132 1835.28 383.766 1835.28 383.766C1835.28 383.766 1837.48 380.427 1837.48 379.593C1837.48 378.757 1837.48 376.329 1837.48 374.508C1837.48 372.686 1837.18 370.941 1837.48 369.423C1837.78 367.905 1836.87 365.249 1837.48 363.504C1838.08 361.758 1836.42 359.633 1837.56 358.419C1838.69 357.205 1838.08 355.46 1838.99 354.549C1839.9 353.638 1840.81 350.679 1840.81 350.679C1840.81 350.679 1841.42 348.629 1840.81 347.415C1840.2 346.201 1839.9 345.063 1839.6 343.848C1839.29 342.634 1838.38 341.192 1838.38 339.978C1838.38 338.764 1837.78 337.929 1837.78 336.108C1837.78 334.286 1837.56 328.367 1837.56 328.367C1837.56 328.367 1837.56 327.987 1837.48 327.381L1840.96 329.505V338.991V351.437C1840.96 351.437 1842.48 359.103 1842.94 361.455C1843.39 363.808 1845.29 380.047 1845.29 380.047C1845.29 380.047 1845.29 396.288 1845.29 397.73C1845.29 399.171 1845.74 421.635 1845.29 423.532C1844.84 425.43 1842.03 441.67 1843.17 443.567C1844.3 445.464 1845.43 439.849 1845.43 439.849L1847.48 431.804C1847.48 431.804 1849 426.188 1849 425.278C1849 424.367 1849.31 419.131 1849 418.447C1848.7 417.841 1849.53 413.666 1849.15 412.452C1848.77 411.238 1849.31 405.015 1849.31 405.015C1849.31 405.015 1849.23 399.399 1849.31 398.489C1849.38 397.578 1849.31 392.266 1849.31 392.266C1849.31 392.266 1849 383.614 1849.31 382.78C1849.61 381.869 1848.7 379.213 1849.31 378.303C1849.91 377.391 1849.15 373.824 1849.38 372.914C1849.61 372.004 1850.07 367.071 1849.53 366.388C1849 365.704 1849.76 361.303 1849.76 361.303L1852.57 364.566V369.347V373.522V378.605V382.172L1855.52 381.262C1855.52 381.262 1855.52 374.736 1855.52 373.522C1855.52 372.307 1855.22 370.258 1855.52 368.741C1855.83 367.223 1857.04 365.78 1857.35 364.566C1857.65 363.352 1857.04 362.517 1857.35 360.999C1857.65 359.481 1857.19 357.736 1857.42 356.522C1857.65 355.308 1857.42 353.562 1857.42 353.562C1857.42 353.562 1855.52 353.258 1856.13 350.906C1856.74 348.553 1856.13 341.724 1856.13 341.724L1856.81 339.143L1864.02 343.469L1866.83 355.308L1864.93 364.87L1865.46 368.967C1865.46 368.967 1865.92 372.838 1866.07 374.356C1866.22 375.874 1866.75 379.061 1866.83 380.579C1866.9 382.096 1866.83 388.927 1866.83 388.927V394.314V400.841V409.189V414.274C1866.83 414.274 1863.87 416.095 1863.26 418.447C1862.65 420.8 1861.21 422.849 1860.91 424.974C1860.6 427.023 1860.6 428.237 1860.6 429.451C1860.6 430.666 1860.91 432.108 1860.91 433.018C1860.91 433.929 1861.51 435.674 1861.51 435.674C1860.91 433.018 1863.56 429.755 1863.87 428.845C1864.17 427.934 1864.17 425.884 1864.78 424.67C1865.08 424.14 1865.92 422.622 1866.75 421.331C1867.66 419.889 1868.49 418.523 1868.49 418.523C1868.49 418.523 1870.69 415.184 1870.69 414.35C1870.69 413.515 1870.69 411.087 1870.69 409.265C1870.69 407.444 1870.39 405.698 1870.69 404.18C1871 402.663 1870.08 400.007 1870.69 398.261C1871.3 396.44 1869.63 394.39 1870.77 393.176C1871.91 391.962 1871.3 390.217 1872.21 389.307C1873.12 388.395 1874.03 385.436 1874.03 385.436C1874.03 385.436 1874.64 383.386 1874.03 382.172C1873.43 380.958 1873.12 379.82 1872.82 378.605C1872.51 377.391 1871.6 375.95 1871.6 374.736C1871.6 373.522 1871 372.686 1871 370.865C1871 369.043 1870.77 363.124 1870.77 363.124C1870.77 363.124 1870.39 357.129 1871 355.08C1871.3 353.942 1871.38 350.603 1871.38 347.947L1874.26 349.692V358.647C1874.26 358.647 1875.77 366.312 1876.23 368.665C1876.68 371.017 1878.58 387.257 1878.58 387.257C1878.58 387.257 1878.58 403.498 1878.58 404.94C1878.58 406.381 1879.03 428.845 1878.58 430.741C1878.12 432.639 1875.31 448.879 1876.45 450.777C1877.59 452.674 1878.73 447.058 1878.73 447.058L1880.78 439.013C1880.78 439.013 1882.3 433.398 1882.3 432.487C1882.3 431.577 1882.6 426.34 1882.3 425.657C1882 425.05 1882.82 420.876 1882.45 419.661C1882.07 418.447 1882.59 412.225 1882.59 412.225C1882.59 412.225 1882.53 406.609 1882.59 405.698C1882.67 404.788 1882.59 399.475 1882.59 399.475C1882.59 399.475 1882.3 390.824 1882.59 389.989C1882.9 389.079 1882 386.422 1882.59 385.512C1883.2 384.601 1882.45 381.034 1882.67 380.123C1882.9 379.213 1883.35 374.28 1882.82 373.597C1882.3 372.914 1883.05 368.513 1883.05 368.513L1885.86 371.776V376.557V380.731V385.815V389.382L1888.82 388.471C1888.82 388.471 1888.82 381.945 1888.82 380.731C1888.82 379.517 1888.52 377.467 1888.82 375.95C1889.12 374.432 1890.33 372.99 1890.63 371.776C1890.94 370.561 1890.33 369.727 1890.63 368.209C1890.94 366.691 1890.48 364.946 1890.71 363.732C1890.94 362.517 1890.71 360.772 1890.71 360.772C1890.71 360.772 1889.2 360.544 1889.28 358.799L1899.58 365.022L1898.14 372.155L1898.67 376.253C1898.67 376.253 1899.13 380.123 1899.28 381.641C1899.43 383.16 1899.96 386.346 1900.04 387.865C1900.12 389.382 1900.04 396.212 1900.04 396.212V401.6V408.127V416.474V421.559C1900.04 421.559 1897.09 423.38 1896.48 425.733C1895.87 428.085 1894.43 430.135 1894.13 432.259C1893.82 434.308 1893.82 435.522 1893.82 436.737C1893.82 437.951 1894.13 439.393 1894.13 440.303C1894.13 441.215 1894.73 442.96 1894.73 442.96C1894.13 440.303 1896.78 437.04 1897.09 436.13C1897.39 435.22 1897.39 433.17 1897.99 431.956C1898.29 431.425 1899.13 429.907 1899.96 428.617C1900.88 427.175 1901.71 425.809 1901.71 425.809C1901.71 425.809 1903.91 422.47 1903.91 421.635C1903.91 420.725 1903.91 418.372 1903.91 416.55C1903.91 414.729 1903.61 412.984 1903.91 411.466C1904.22 409.948 1903.31 407.292 1903.91 405.546C1904.52 403.726 1902.85 401.676 1903.99 400.462C1905.12 399.247 1904.52 397.502 1905.42 396.591C1906.33 395.681 1907.24 392.721 1907.24 392.721C1907.24 392.721 1907.85 390.672 1907.24 389.457C1906.64 388.243 1906.33 387.105 1906.03 385.891C1905.73 384.677 1904.82 383.235 1904.82 382.021C1904.82 380.807 1904.22 379.971 1904.22 378.151C1904.22 377.543 1904.22 376.481 1904.14 375.342L1937.28 483.788L1920.82 521.809L1887.91 547.156L1833.08 557.552L1766.57 592.613L1751.25 598.154H1744.57L1740.18 610.599L1745.33 626.612L1752.61 633.897L1757.16 646.647V663.115C1757.16 663.115 1752.01 675.864 1751.32 677.23C1750.64 678.596 1739.65 687.551 1740.18 688.614C1740.79 689.676 1729.63 695.443 1729.63 695.443L1721.75 703.488L1718.64 710.773L1717.2 719.197H1704.53L1696.94 725.344L1691.33 734.147L1638.78 743.026L1581.29 821.873L1553.77 894.276L1434.47 966.671L1396.74 1270.69L1975.5 1950H4006V743.026L3624.5 547.156L3327 483.788L2834.5 398.489L2485 274.865L2210 181.294L1975.5 151.545L1952.98 151.621Z" fill="#33132C"/>
                    <path d="M746.646 952.49C731.025 952.49 697.653 965.029 682.308 962.058C664.349 958.622 638.751 961.441 621.342 955.86C594.85 947.393 551.844 954.208 529.274 937.948C513.447 926.52 494.869 905.648 478.423 895.178C453.033 878.919 427.985 862.175 403.283 844.814C400.461 842.821 388.42 834.763 387.181 831.526C379.062 810.653 359.588 791.224 350.711 770.696C341.766 750.03 332.684 728.813 331.238 706.288C330.688 698.296 327.523 683.21 323.945 675.977C309.839 676.735 302.338 649.181 288.232 650.214C261.534 652.074 226.233 662.476 200.843 654.14C177.585 646.494 154.259 627.55 137.951 609.227C113.11 608.882 82.4889 605.507 60.4014 594.003C42.3042 584.565 23.5879 569.548 12.9224 552.12C3.56416 536.827 3.77062 519.949 -2.35352 503.141C-5.24359 495.219 -7.51428 483.715 -10.3354 475.725C-20.0377 474.691 -29.671 467.871 -38.0659 462.843C-51.0023 455.058 -59.3283 440.179 -59.1907 425.024C-59.6035 424.887 -60.0164 424.542 -60.498 424.06L-366 307L-908.5 368.5L-1296 609.227L-1729 844.814V1270.69H-60.498H804.19H1413.19L1451.91 961.947L1259.35 1003.32L1041.85 993.776L812.979 968.265C812.979 968.189 812.909 968.189 812.909 968.123C794.056 962.409 766.394 952.49 746.646 952.49Z" fill="#33132C"/>
                    <path d="M379.266 941.261C377.064 938.433 374.174 936.297 371.284 934.161C359.862 925.695 335.296 911.362 323.873 902.895C323.117 899.583 318.575 899.098 315.203 899.45C300.822 900.826 284.858 897.105 270.546 898.482C260.638 889.255 250.384 865.763 254.307 852.807C257.127 843.372 260.5 828.498 268.206 822.291C258.986 796.738 246.6 762.569 241.577 735.911C232.906 727.989 214.465 721.513 203.456 725.439C186.873 731.295 170.358 740.457 155.633 749.963C129.21 766.978 79.6661 771.386 60.6748 746.312C52.6238 735.704 41.4083 720.273 34.802 708.7C25.3064 706.84 12.9892 699.263 3.42456 700.365C-11.0944 685.279 -25.7508 667.161 -34.2145 648.011C-42.9533 650.353 -51.6923 652.626 -60.5 654.969L-140.5 575.5L-249.5 483H-597.5L-829 575.5L-1095.5 735.911L-1405.5 926.5L-1729 1041V2768.5H4006V937L3366 716.5L2801.5 636.5L2205.5 423C1858.5 98.4999 2143 423 1975.5 604.93C1909.19 604.93 1938.37 782.643 1909.19 686.094C1864.2 731.233 1860.39 870.703 1777.63 782.643C1744.2 823.293 1795.14 892.984 1715.03 902.002C1691.49 921.797 1678.96 988.471 1645.01 938.075C1625.91 925.874 1444.49 983.166 1460.93 1026.14C1436.53 1095.63 1211.07 1033.56 1225.93 1086.61C1125.13 1050.54 1100.73 1148.15 1017.98 1116.32C1047.15 1076.53 795.702 1039.4 811.617 1086.61C736.288 1129.58 701.276 1050.54 662.551 1086.61C530.46 1086.61 545.844 1027.2 515.076 1050.54C461.497 1049.48 387.11 958.071 384.977 952.832C383.463 948.769 381.949 944.641 379.266 941.261Z" fill="#280F23"/>
                </g>
            </g>
        </svg>

        <div className="absolute top-0 h-screen w-full  p-16 md:p-32 information">
            <div className="space-y-6 overlayed">
                <h1 className="text-3xl md:text-6xl font-bold text-white">Sunset Hills</h1>
                <div>
                    <p className="text-md md:text-2xl font-semibold text-white">when given an array of buildings, and the </p>
                    <p className="text-md md:text-2xl font-semibold text-white">sun is to the left side, visualise which </p>
                    <p className="text-md md:text-2xl font-semibold text-white">
                        buildings or it’s parts of buildings are sunlit.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};
