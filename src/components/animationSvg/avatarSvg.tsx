import * as React from "react"
import { SVGProps } from "react"
import { motion } from "framer-motion"
import "./avatar.modules.css"

const sharedAnimationBubbles = (animationElement) => {
    const sharedAnimationProperties = {
        transition: {
            times: [0, 1],
            duration: 5,
            repeat: Infinity,
            type: "keyframes",
            ease: "easeInOut",
        }
    }
    if (animationElement === "bubbles-mid") {
        return {
            ...sharedAnimationProperties,
            animate: {
                y: [0, -5, 0],
                x: [0, -5, 0, 5, 0, -7, 0, 7, 0]
            }
        }
    } else if (animationElement === "bubbles-small") {
        return {
            ...sharedAnimationProperties,
            animate: {
                y: [0, -10, 0, 10, 0],
                x: [0, -5, 0, 5, 0]
            }
        }
    } else if (animationElement === "bubbles-big") {
        return {
            ...sharedAnimationProperties,
            animate: {
                y: [0, -2, 0, 2, 0],
                x: [0, -2, 0, 2, 0],
                rotate: [2, 0, 2]
            }
        }
    } else if (animationElement === "bubbles-extra-small") {
        return {
            ...sharedAnimationProperties,
            animate: {
                y: [0, -3, 0, 3, 0],
                x: [0, -2, 0, 2, 0],
                opacity: [1, 0.5, 1, 0.5, 1, 0.5, 1]
            }
        }
    }
}

export const AvatarSVG = (props: SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 1015 974"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
    >
        <g id="avatar-svg">
            <g id="Mask group">
                <g id="background-color">
                    <path
                        fill="url(#a)"
                        stroke="#F0F"
                        strokeWidth={4}
                        d="M517.094 80.072c220.087 66.84 340.194 293.362 268.398 505.884S477.134 916.68 257.048 849.84c-55.024-16.711-94.699-40.638-122.202-70.348-27.494-29.701-42.927-65.291-49.285-105.508-12.735-80.553 10.947-179.518 47.026-286.314 36.078-106.797 77.447-200.39 137.173-258.936 29.819-29.23 64.189-49.696 104.766-58.724 40.591-9.03 87.545-6.648 142.568 10.062Z"
                    />
                    <defs>
                        <linearGradient
                            id="a"
                            x1={276}
                            x2={591.381}
                            y1={107.5}
                            y2={895.239}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#00ffff" />
                            <stop offset={1} stopColor="#0776ff" />
                        </linearGradient>
                    </defs>
                </g>
                <motion.g id="bubbles-inside-mid" {...sharedAnimationBubbles("bubbles-mid")}>
                    <circle
                        id="Ellipse 25"
                        cx={238.836}
                        cy={754.062}
                        r={23.048}
                        fill="#72FBFB"
                    />
                    <circle
                        id="Ellipse 26"
                        cx={201.958}
                        cy={788.058}
                        r={23.048}
                        fill="#72FBFB"
                    />
                    <circle
                        id="Ellipse 27"
                        cx={693.745}
                        cy={702.204}
                        r={23.048}
                        fill="#72FBFB"
                    />
                    <circle
                        id="Ellipse 28"
                        cx={799.478}
                        cy={621.536}
                        r={23.048}
                        fill="#72FBFB"
                    />
                </motion.g>
                <g id="avatar-frame">
                    <mask
                        id="mask0_882_17"
                        style={{
                            maskType: "alpha",
                        }}
                        maskUnits="userSpaceOnUse"
                        x={102}
                        y={62}
                        width={729}
                        height={809}
                    >
                        <path
                            id="Ellipse 18"
                            d="M539.094 80.0725C759.181 146.912 879.288 373.434 807.492 585.956C735.697 798.478 499.134 916.68 279.048 849.84C224.024 833.129 184.349 809.202 156.846 779.492C129.352 749.791 113.919 714.201 107.561 673.984C94.8258 593.431 118.508 494.466 154.587 387.67C190.665 280.873 232.034 187.28 291.76 128.734C321.579 99.5035 355.949 79.0379 396.526 70.0105C437.117 60.98 484.071 63.362 539.094 80.0725Z"
                            fill="#FF00FF"
                            stroke="#FF00FF"
                            strokeWidth={4}
                        />
                    </mask>
                    <g mask="url(#mask0_882_17)">
                        <rect
                            x="150"
                            y="125"
                            id="avatar-2 1"
                            className="avatarFrameSize avatarImageFrame"
                            fill="url(#pattern0_882_17)"
                        />
                        <image x="150" y="125" className="avatarFrameSize avatarImage" href="/avatar-2.png" />
                    </g>
                </g>
                <motion.g id="bubbles-inside-big" {...sharedAnimationBubbles("bubbles-big")}>
                    <path
                        id="Ellipse 24"
                        d="M224.172 858.241C222.351 847.859 226.525 837.44 235.11 828.972C243.693 820.507 256.583 814.119 271.768 811.937C286.952 809.756 301.394 812.217 312.452 817.861C323.512 823.506 331.046 832.242 332.867 842.625C333.778 847.815 333.019 851.982 331.032 855.429C329.024 858.912 325.665 861.827 321.091 864.295C311.883 869.262 298.278 872.144 282.72 874.379C267.161 876.614 253.239 877.687 242.784 875.545C237.59 874.481 233.399 872.65 230.298 869.901C227.23 867.181 225.082 863.431 224.172 858.241Z"
                        fill="#72FBFB"
                        stroke="#FF00FF"
                        strokeWidth={4}
                    />
                    <path
                        id="Ellipse 24_2"
                        d="M779.662 656.989C782.969 660.059 784.708 664.675 784.771 670.691C784.833 676.716 783.204 683.98 779.964 692.036C773.486 708.14 760.722 727.034 743.153 744.822C725.583 762.61 706.666 775.792 690.352 782.763C682.19 786.251 674.776 788.143 668.564 788.343C662.362 788.543 657.53 787.059 654.223 783.989C650.98 780.979 649.856 777.054 650.646 772.047C651.451 766.945 654.24 760.846 658.726 753.889C667.686 739.992 682.97 723.327 700.683 705.394C718.396 687.461 734.907 671.934 748.84 662.654C755.815 658.008 761.978 655.042 767.201 654.041C772.327 653.059 776.42 653.978 779.662 656.989Z"
                        fill="#72FBFB"
                        stroke="#FF00FF"
                        strokeWidth={4}
                    />
                    <path
                        id="Ellipse 23"
                        d="M579.373 833.074C584.015 846.911 579.615 862.306 568.205 876.104C556.808 889.885 538.566 901.849 516.143 908.606C493.719 915.362 471.537 915.579 453.837 910.565C436.115 905.546 423.144 895.385 418.503 881.547C416.185 874.636 416.547 868.649 418.965 863.3C421.408 857.896 426.026 852.981 432.502 848.428C445.492 839.295 465.402 831.993 488.148 825.14C510.894 818.286 531.598 813.35 547.768 813.696C555.829 813.869 562.592 815.354 567.88 818.429C573.113 821.473 577.055 826.162 579.373 833.074Z"
                        fill="#72FBFB"
                        stroke="#FF00FF"
                        strokeWidth={4}
                    />
                </motion.g>
            </g>
            <motion.g id="bubbles-frame-big" {...sharedAnimationBubbles("bubbles-big")}>
                <path
                    id="Ellipse 19"
                    d="M880.765 243.178C912.081 285.424 902.126 344.253 858.472 374.566C814.818 404.879 754.05 395.159 722.734 352.913C714.901 342.346 711.016 332.59 710.161 323.471C709.307 314.363 711.462 305.731 715.974 297.379C725.055 280.573 743.583 265.077 765.849 249.615C788.116 234.153 809.219 222.131 828.577 219.189C838.196 217.727 847.335 218.518 855.977 222.219C864.628 225.924 872.932 232.611 880.765 243.178Z"
                    fill="#72FBFB"
                    stroke="#FF00FF"
                    strokeWidth={4}
                />
                <path
                    id="Ellipse 20"
                    d="M980.779 435.263C998.105 480.499 966.234 533.875 908.396 553.999C850.558 574.122 790.104 552.869 772.778 507.632C768.44 496.304 767.941 486.501 770.389 477.848C772.843 469.175 778.31 461.473 786.227 454.465C802.126 440.391 827.544 429.422 856.786 419.248C886.028 409.074 912.883 401.855 934.556 402.857C945.348 403.356 954.736 405.89 962.474 411.016C970.195 416.131 976.441 423.935 980.779 435.263Z"
                    fill="#72FBFB"
                    stroke="#FF00FF"
                    strokeWidth={4}
                />
                <path
                    id="Ellipse 25_2"
                    d="M777.234 180.382C783.464 186.285 785.817 195.144 784.302 204.926C782.789 214.705 777.415 225.242 768.45 234.136C759.485 243.029 748.742 248.479 738.693 250.17C728.641 251.862 719.452 249.785 713.222 243.882C710.108 240.931 708.599 237.858 708.229 234.676C707.854 231.452 708.626 227.922 710.431 224.061C714.069 216.28 721.644 207.693 730.878 198.534C740.111 189.375 748.792 181.836 756.732 178.131C760.671 176.293 764.294 175.464 767.626 175.753C770.917 176.039 774.12 177.431 777.234 180.382Z"
                    fill="#72FBFB"
                    stroke="#FF00FF"
                    strokeWidth={4}
                />
                <path
                    id="Ellipse 21"
                    d="M179.344 719.598C184.831 733.925 182.075 749.739 172.898 763.8C163.72 777.861 148.175 790.054 128.392 796.937C108.609 803.82 88.4773 804.04 71.9533 798.921C55.4306 793.802 42.633 783.399 37.1458 769.072C34.4017 761.908 34.2241 755.713 35.9734 750.223C37.7326 744.701 41.5005 739.705 46.9727 735.08C57.9748 725.782 75.4408 718.331 95.5989 711.317C115.757 704.304 134.152 699.278 148.852 699.634C156.163 699.811 162.422 701.318 167.5 704.461C172.549 707.586 176.6 712.433 179.344 719.598Z"
                    fill="#72FBFB"
                    stroke="#FF00FF"
                    strokeWidth={4}
                />
                <path
                    id="Ellipse 22"
                    d="M145.003 600.321C145.622 610.844 140.281 620.715 130.782 628.143C121.286 635.569 107.749 640.437 92.414 640.863C77.0794 641.29 63.0149 637.19 52.6771 630.316C42.3365 623.439 35.8536 613.897 35.2347 603.375C34.9253 598.114 36.1566 594.062 38.5256 590.865C40.919 587.636 44.5901 585.124 49.4173 583.197C59.1339 579.318 72.9793 578.015 88.6915 577.578C104.404 577.141 118.357 577.671 128.497 580.997C133.535 582.65 137.489 584.949 140.254 588.035C142.991 591.09 144.694 595.061 145.003 600.321Z"
                    fill="#72FBFB"
                    stroke="#FF00FF"
                    strokeWidth={4}
                />
            </motion.g>
            <motion.g id="bubbles-outside-mid" {...sharedAnimationBubbles("bubbles-mid")}>
                <ellipse
                    id="Ellipse 29"
                    cx={627}
                    cy={805.5}
                    rx={23}
                    ry={23.5}
                    fill="#72FBFB"
                />
                <circle id="Ellipse 30" cx={727.5} cy={561.5} r={22.5} fill="#72FBFB" />
                <ellipse
                    id="Ellipse 32"
                    cx={112}
                    cy={527.5}
                    rx={23}
                    ry={23.5}
                    fill="#72FBFB"
                />
                <circle id="Ellipse 33" cx={225} cy={398} r={23} fill="#72FBFB" />
                <circle id="Ellipse 34" cx={745} cy={435} r={23} fill="#72FBFB" />
                <ellipse
                    id="Ellipse 31"
                    cx={215.5}
                    cy={661}
                    rx={23.5}
                    ry={23}
                    fill="#72FBFB"
                />
            </motion.g>
            <motion.g id="bubbles-inside-mid" {...sharedAnimationBubbles("bubbles-small")}>
                <circle id="Ellipse 35" cx={203.5} cy={713.5} r={11.5} fill="#72FBFB" />
                <ellipse
                    id="Ellipse 36"
                    cx={102}
                    cy={672.5}
                    rx={12}
                    ry={11.5}
                    fill="#72FBFB"
                />
                <circle id="Ellipse 37" cx={681.5} cy={333.5} r={11.5} fill="#72FBFB" />
                <ellipse
                    id="Ellipse 38"
                    cx={705}
                    cy={183.5}
                    rx={12}
                    ry={11.5}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 56"
                    cx={161}
                    cy={817}
                    rx={11}
                    ry={12}
                    fill="#72FBFB"
                />
                <circle id="Ellipse 55" cx={203.5} cy={828.5} r={11.5} fill="#72FBFB" />
                <ellipse
                    id="Ellipse 54"
                    cx={374}
                    cy={872.5}
                    rx={11}
                    ry={11.5}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 53"
                    cx={603.5}
                    cy={840}
                    rx={11.5}
                    ry={11}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 51"
                    cx={20}
                    cy={776.5}
                    rx={12}
                    ry={11.5}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 52"
                    cx={811.5}
                    cy={668}
                    rx={11.5}
                    ry={11}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 50"
                    cx={64.5}
                    cy={528}
                    rx={11.5}
                    ry={12}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 49"
                    cx={989}
                    cy={411.5}
                    rx={11}
                    ry={11.5}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 48"
                    cx={811.5}
                    cy={206}
                    rx={11.5}
                    ry={11}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 47"
                    cx={673}
                    cy={638}
                    rx={11}
                    ry={12}
                    fill="#72FBFB"
                />
                <circle id="Ellipse 46" cx={716} cy={656} r={11} fill="#72FBFB" />
                <ellipse
                    id="Ellipse 45"
                    cx={251}
                    cy={702.5}
                    rx={12}
                    ry={11.5}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 44"
                    cx={592.5}
                    cy={278}
                    rx={11.5}
                    ry={11}
                    fill="#72FBFB"
                />
                <circle id="Ellipse 43" cx={161} cy={684} r={11} fill="#72FBFB" />
                <ellipse
                    id="Ellipse 42"
                    cx={797.5}
                    cy={427}
                    rx={11.5}
                    ry={11}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 41"
                    cx={797.5}
                    cy={564}
                    rx={11.5}
                    ry={11}
                    fill="#72FBFB"
                />
                <circle id="Ellipse 40" cx={179.5} cy={586.5} r={11.5} fill="#72FBFB" />
                <circle id="Ellipse 39" cx={135} cy={449} r={11} fill="#72FBFB" />
                <ellipse
                    id="Ellipse 57"
                    cx={202}
                    cy={516}
                    rx={11}
                    ry={12}
                    fill="#72FBFB"
                />
            </motion.g>
            <motion.g className="moveSVGLeft" id="bubbles-extra-small" {...sharedAnimationBubbles("bubbles-extra-small")}>
                <circle id="Ellipse 64" cx={186.5} cy={703.5} r={4.5} fill="#72FBFB" />
                <circle id="Ellipse 63" cx={186.5} cy={681.5} r={4.5} fill="#72FBFB" />
                <ellipse
                    id="Ellipse 61"
                    cx={225}
                    cy={694.5}
                    rx={4}
                    ry={4.5}
                    fill="#72FBFB"
                />
                <circle id="Ellipse 70" cx={165.5} cy={633.5} r={4.5} fill="#72FBFB" />
                <ellipse
                    id="Ellipse 69"
                    cx={135}
                    cy={679.5}
                    rx={4}
                    ry={4.5}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 68"
                    cx={109.5}
                    cy={695.5}
                    rx={4.5}
                    ry={3.5}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 67"
                    cx={193}
                    cy={760}
                    rx={5}
                    ry={4}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 66"
                    cx={177.5}
                    cy={805}
                    rx={4.5}
                    ry={4}
                    fill="#72FBFB"
                />
                <circle id="Ellipse 65" cx={165.5} cy={787.5} r={4.5} fill="#72FBFB" />
                <circle id="Ellipse 140" cx={693.5} cy={166.5} r={4.5} fill="#72FBFB" />
                <circle id="Ellipse 141" cx={552.5} cy={83.5} r={4.5} fill="#72FBFB" />
                <circle id="Ellipse 142" cx={538.5} cy={79.5} r={4.5} fill="#72FBFB" />
                <ellipse
                    id="Ellipse 129"
                    cx={754}
                    cy={473}
                    rx={5}
                    ry={4}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 104"
                    cx={740.5}
                    cy={655.5}
                    rx={5.5}
                    ry={4.5}
                    fill="#72FBFB"
                />
                <circle id="Ellipse 103" cx={716.5} cy={602.5} r={4.5} fill="#72FBFB" />
                <circle id="Ellipse 71" cx={242} cy={649} r={4} fill="#72FBFB" />
                <circle id="Ellipse 173" cx={94.5} cy={504.5} r={4.5} fill="#72FBFB" />
                <ellipse
                    id="Ellipse 174"
                    cx={96}
                    cy={486.5}
                    rx={5}
                    ry={4.5}
                    fill="#72FBFB"
                />
                <circle id="Ellipse 171" cx={27.5} cy={614.5} r={4.5} fill="#72FBFB" />
                <circle id="Ellipse 170" cx={44.5} cy={724.5} r={4.5} fill="#72FBFB" />
                <ellipse
                    id="Ellipse 149"
                    cx={993}
                    cy={433.5}
                    rx={4}
                    ry={4.5}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 148"
                    cx={901.5}
                    cy={385}
                    rx={4.5}
                    ry={5}
                    fill="#72FBFB"
                />
                <circle id="Ellipse 147" cx={906.5} cy={329.5} r={4.5} fill="#72FBFB" />
                <ellipse
                    id="Ellipse 164"
                    cx={182.5}
                    cy={838}
                    rx={3.5}
                    ry={4}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 165"
                    cx={182.5}
                    cy={821.5}
                    rx={3.5}
                    ry={4.5}
                    fill="#72FBFB"
                />
                <circle id="Ellipse 166" cx={148.5} cy={829.5} r={4.5} fill="#72FBFB" />
                <circle id="Ellipse 167" cx={143.5} cy={800.5} r={4.5} fill="#72FBFB" />
                <ellipse
                    id="Ellipse 168"
                    cx={4}
                    cy={769}
                    rx={4}
                    ry={5}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 169"
                    cx={36}
                    cy={730.5}
                    rx={4}
                    ry={3.5}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 172"
                    cx={53.5}
                    cy={542}
                    rx={4.5}
                    ry={4}
                    fill="#72FBFB"
                />
                <circle id="Ellipse 157" cx={596} cy={805} r={4} fill="#72FBFB" />
                <ellipse
                    id="Ellipse 158"
                    cx={627}
                    cy={836.5}
                    rx={4}
                    ry={4.5}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 159"
                    cx={564}
                    cy={846.5}
                    rx={5}
                    ry={4.5}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 160"
                    cx={403}
                    cy={872}
                    rx={5}
                    ry={4}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 161"
                    cx={340}
                    cy={865}
                    rx={4}
                    ry={5}
                    fill="#72FBFB"
                />
                <circle id="Ellipse 162" cx={358.5} cy={883.5} r={4.5} fill="#72FBFB" />
                <ellipse
                    id="Ellipse 163"
                    cx={225.5}
                    cy={844}
                    rx={4.5}
                    ry={4}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 150"
                    cx={892.5}
                    cy={568}
                    rx={4.5}
                    ry={4}
                    fill="#72FBFB"
                />
                <circle id="Ellipse 151" cx={831} cy={642} r={4} fill="#72FBFB" />
                <circle id="Ellipse 152" cx={797.5} cy={653.5} r={4.5} fill="#72FBFB" />
                <ellipse
                    id="Ellipse 153"
                    cx={817}
                    cy={688.5}
                    rx={4}
                    ry={4.5}
                    fill="#72FBFB"
                />
                <circle id="Ellipse 154" cx={702} cy={786} r={4} fill="#72FBFB" />
                <ellipse
                    id="Ellipse 155"
                    cx={657}
                    cy={800.5}
                    rx={5}
                    ry={4.5}
                    fill="#72FBFB"
                />
                <circle id="Ellipse 156" cx={587.5} cy={827.5} r={4.5} fill="#72FBFB" />
                <ellipse
                    id="Ellipse 134"
                    cx={729}
                    cy={408}
                    rx={5}
                    ry={4}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 135"
                    cx={673}
                    cy={349.5}
                    rx={4}
                    ry={4.5}
                    fill="#72FBFB"
                />
                <circle id="Ellipse 136" cx={688.5} cy={358.5} r={4.5} fill="#72FBFB" />
                <circle id="Ellipse 137" cx={587.5} cy={257.5} r={4.5} fill="#72FBFB" />
                <ellipse
                    id="Ellipse 138"
                    cx={604}
                    cy={261.5}
                    rx={5}
                    ry={5.5}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 139"
                    cx={712.5}
                    cy={199}
                    rx={4.5}
                    ry={4}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 143"
                    cx={787}
                    cy={170.5}
                    rx={5}
                    ry={4.5}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 144"
                    cx={857.5}
                    cy={204}
                    rx={4.5}
                    ry={5}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 145"
                    cx={716.5}
                    cy={162}
                    rx={4.5}
                    ry={5}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 146"
                    cx={862.5}
                    cy={386}
                    rx={4.5}
                    ry={4}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 125"
                    cx={724.5}
                    cy={533.5}
                    rx={4.5}
                    ry={5.5}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 126"
                    cx={698}
                    cy={550.5}
                    rx={5}
                    ry={4.5}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 127"
                    cx={768.5}
                    cy={512}
                    rx={4.5}
                    ry={4}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 128"
                    cx={772}
                    cy={529.5}
                    rx={4}
                    ry={4.5}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 130"
                    cx={826.5}
                    cy={416}
                    rx={3.5}
                    ry={4}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 131"
                    cx={776.5}
                    cy={418.5}
                    rx={4.5}
                    ry={3.5}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 132"
                    cx={776.5}
                    cy={444}
                    rx={4.5}
                    ry={4}
                    fill="#72FBFB"
                />
                <circle id="Ellipse 133" cx={715.5} cy={399.5} r={4.5} fill="#72FBFB" />
                <ellipse
                    id="Ellipse 117"
                    cx={745.5}
                    cy={618}
                    rx={4.5}
                    ry={5}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 118"
                    cx={683}
                    cy={602.5}
                    rx={4}
                    ry={4.5}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 119"
                    cx={699.5}
                    cy={584}
                    rx={5.5}
                    ry={4}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 120"
                    cx={683}
                    cy={621.5}
                    rx={4}
                    ry={4.5}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 121"
                    cx={698}
                    cy={613}
                    rx={5}
                    ry={4}
                    fill="#72FBFB"
                />
                <circle id="Ellipse 122" cx={688.5} cy={559.5} r={4.5} fill="#72FBFB" />
                <ellipse
                    id="Ellipse 123"
                    cx={693.5}
                    cy={512}
                    rx={4.5}
                    ry={4}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 124"
                    cx={693.5}
                    cy={533.5}
                    rx={4.5}
                    ry={5.5}
                    fill="#72FBFB"
                />
                <circle id="Ellipse 109" cx={745} cy={598} r={4} fill="#72FBFB" />
                <ellipse
                    id="Ellipse 110"
                    cx={781}
                    cy={594}
                    rx={5}
                    ry={4}
                    fill="#72FBFB"
                />
                <circle id="Ellipse 111" cx={808.5} cy={585.5} r={4.5} fill="#72FBFB" />
                <ellipse
                    id="Ellipse 112"
                    cx={818.5}
                    cy={564}
                    rx={4.5}
                    ry={5}
                    fill="#72FBFB"
                />
                <circle id="Ellipse 113" cx={786} cy={543} r={4} fill="#72FBFB" />
                <ellipse
                    id="Ellipse 114"
                    cx={708.5}
                    cy={530}
                    rx={3.5}
                    ry={4}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 115"
                    cx={693.5}
                    cy={640}
                    rx={4.5}
                    ry={5}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 116"
                    cx={715.5}
                    cy={626}
                    rx={4.5}
                    ry={4}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 73"
                    cx={220.5}
                    cy={609}
                    rx={4.5}
                    ry={4}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 72"
                    cx={225}
                    cy={633.5}
                    rx={4}
                    ry={4.5}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 101"
                    cx={776.5}
                    cy={642}
                    rx={4.5}
                    ry={4}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 102"
                    cx={763.5}
                    cy={617}
                    rx={4.5}
                    ry={5}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 105"
                    cx={684.5}
                    cy={663}
                    rx={4.5}
                    ry={4}
                    fill="#72FBFB"
                />
                <circle id="Ellipse 106" cx={712.5} cy={674.5} r={4.5} fill="#72FBFB" />
                <ellipse
                    id="Ellipse 107"
                    cx={759.5}
                    cy={638}
                    rx={4.5}
                    ry={4}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 108"
                    cx={736.5}
                    cy={634}
                    rx={4.5}
                    ry={4}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 82"
                    cx={225}
                    cy={429.5}
                    rx={4}
                    ry={3.5}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 81"
                    cx={225}
                    cy={217.5}
                    rx={4}
                    ry={4.5}
                    fill="#72FBFB"
                />
                <circle id="Ellipse 80" cx={233} cy={356} r={5} fill="#72FBFB" />
                <circle id="Ellipse 79" cx={143.5} cy={408.5} r={4.5} fill="#72FBFB" />
                <ellipse
                    id="Ellipse 77"
                    cx={123.5}
                    cy={482}
                    rx={4.5}
                    ry={4}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 76"
                    cx={105}
                    cy={563}
                    rx={4}
                    ry={5}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 75"
                    cx={101}
                    cy={653.5}
                    rx={4}
                    ry={4.5}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 74"
                    cx={195}
                    cy={632.5}
                    rx={4}
                    ry={4.5}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 86"
                    cx={183}
                    cy={511.5}
                    rx={4}
                    ry={4.5}
                    fill="#72FBFB"
                />
                <circle id="Ellipse 98" cx={168} cy={478} r={4} fill="#72FBFB" />
                <ellipse
                    id="Ellipse 99"
                    cx={202}
                    cy={453}
                    rx={4}
                    ry={5}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 100"
                    cx={173.5}
                    cy={374}
                    rx={4.5}
                    ry={4}
                    fill="#72FBFB"
                />
                <circle id="Ellipse 85" cx={216} cy={532} r={4} fill="#72FBFB" />
                <ellipse
                    id="Ellipse 84"
                    cx={211.5}
                    cy={500}
                    rx={3.5}
                    ry={4}
                    fill="#72FBFB"
                />
                <circle id="Ellipse 83" cx={177.5} cy={437.5} r={4.5} fill="#72FBFB" />
                <ellipse
                    id="Ellipse 93"
                    cx={197.5}
                    cy={606}
                    rx={4.5}
                    ry={4}
                    fill="#72FBFB"
                />
                <circle id="Ellipse 92" cx={142} cy={579} r={4} fill="#72FBFB" />
                <ellipse
                    id="Ellipse 91"
                    cx={197.5}
                    cy={550}
                    rx={4.5}
                    ry={5}
                    fill="#72FBFB"
                />
                <circle id="Ellipse 90" cx={214} cy={578} r={4} fill="#72FBFB" />
                <ellipse
                    id="Ellipse 89"
                    cx={139.5}
                    cy={536}
                    rx={4.5}
                    ry={4}
                    fill="#72FBFB"
                />
                <circle id="Ellipse 88" cx={143.5} cy={515.5} r={4.5} fill="#72FBFB" />
                <ellipse
                    id="Ellipse 87"
                    cx={173.5}
                    cy={563}
                    rx={4.5}
                    ry={5}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 60"
                    cx={255}
                    cy={721.5}
                    rx={4}
                    ry={4.5}
                    fill="#72FBFB"
                />
                <ellipse
                    id="Ellipse 62"
                    cx={250}
                    cy={672.5}
                    rx={4}
                    ry={4.5}
                    fill="#72FBFB"
                />
                <circle id="Ellipse 78" cx={139.5} cy={425.5} r={4.5} fill="#72FBFB" />
                <ellipse
                    id="Ellipse 97"
                    cx={169.5}
                    cy={536}
                    rx={4.5}
                    ry={4}
                    fill="#72FBFB"
                />
                <circle id="Ellipse 96" cx={161} cy={668} r={4} fill="#72FBFB" />
                <ellipse
                    id="Ellipse 95"
                    cx={135}
                    cy={644.5}
                    rx={4}
                    ry={4.5}
                    fill="#72FBFB"
                />
                <circle id="Ellipse 94" cx={173.5} cy={653.5} r={4.5} fill="#72FBFB" />
                <ellipse
                    id="Ellipse 58"
                    cx={196.5}
                    cy={743}
                    rx={4.5}
                    ry={4}
                    fill="#72FBFB"
                />
                <circle id="Ellipse 59" cx={234.5} cy={717.5} r={4.5} fill="#72FBFB" />
            </motion.g>
        </g>
        <defs>
            <pattern
                id="pattern0_882_17"
                patternContentUnits="objectBoundingBox"
                width={1}
                height={1}
            >
                <use
                    xlinkHref="#image0_882_17"
                    transform="scale(0.000441112 0.000374111)"
                />
            </pattern>
        </defs>
    </svg>
)
export { AvatarSVG as ReactComponent }