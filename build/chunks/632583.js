/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => N
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(692547),
  a = n(325767);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function d(e, t) {
  if (null == e) return {};
  var n, r, i = f(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let _ = "currentColor",
  p = "url(#nitro_hover)",
  h = "url(#birthday_gradient_1_light)",
  g = "url(#birthday_gradient_2_light)",
  m = "url(#birthday_gradient_3_light)",
  E = "url(#birthday_secondary_gradient_1_light)",
  v = "url(#birthday_secondary_gradient_2_light)",
  b = "url(#birthday_secondary_gradient_3_light)",
  y = new Map([
    ["url(#birthday_gradient_1)", "url(#birthday_secondary_gradient_1)"],
    ["url(#birthday_gradient_2)", "url(#birthday_secondary_gradient_2)"],
    ["url(#birthday_gradient_3)", "url(#birthday_secondary_gradient_3)"]
  ]),
  O = new Map([
    [h, E],
    [g, v],
    [m, b]
  ]),
  S = e => {
    let {
      referralsRemaining: t,
      fillColor: n,
      secondaryFillColor: i
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M27.1899 15.6966C26.7297 16.7497 26.0852 17.7137 25.2855 18.5425C24.38 19.4811 23.2941 20.2272 22.0931 20.7358C19.704 21.7967 16.9967 21.8902 14.54 20.9969C12.0833 20.1036 10.0685 18.2928 8.91879 15.9452C8.46102 14.9636 8.16829 13.9132 8.05239 12.8363H6.06478C5.8034 12.8364 5.55253 12.7334 5.36652 12.5498C5.1805 12.3661 5.07432 12.1166 5.07097 11.8553C5.07263 11.7264 5.09966 11.5992 5.1505 11.4808C5.20135 11.3624 5.27502 11.2552 5.3673 11.1653C5.45959 11.0753 5.56868 11.0045 5.68836 10.9567C5.80803 10.909 5.93594 10.8853 6.06478 10.8869H8.91879C9.04763 10.8869 9.1752 10.8616 9.29423 10.8123C9.41326 10.763 9.52141 10.6907 9.61251 10.5996C9.70361 10.5085 9.77588 10.4003 9.82518 10.2813C9.87448 10.1623 9.89986 10.0347 9.89986 9.90587C9.89986 9.77704 9.87448 9.64946 9.82518 9.53043C9.77588 9.4114 9.70361 9.30325 9.61251 9.21215C9.52141 9.12105 9.41326 9.04879 9.29423 8.99948C9.1752 8.95018 9.04763 8.9248 8.91879 8.9248H4.34473C4.21589 8.92649 4.08798 8.90278 3.9683 8.85502C3.84863 8.80727 3.73954 8.73641 3.64725 8.64649C3.55496 8.55657 3.4813 8.44935 3.43045 8.33096C3.37961 8.21257 3.35258 8.08532 3.35092 7.95648C3.35427 7.69512 3.46045 7.4456 3.64646 7.26197C3.83248 7.07834 4.08334 6.97539 4.34473 6.97541H10.779C10.9164 6.99114 11.0555 6.97766 11.1873 6.93586C11.3191 6.89405 11.4405 6.82487 11.5437 6.73283C11.6469 6.6408 11.7294 6.528 11.7859 6.40183C11.8425 6.27566 11.8717 6.13897 11.8717 6.00071C11.8717 5.86246 11.8425 5.72577 11.7859 5.5996C11.7294 5.47342 11.6469 5.36063 11.5437 5.26859C11.4405 5.17656 11.3191 5.10738 11.1873 5.06557C11.0555 5.02377 10.9164 5.01029 10.779 5.02602H8.19255C7.98262 5.04532 7.77097 5.02064 7.57112 4.95354C7.37127 4.88644 7.1876 4.7784 7.03186 4.63632C6.87611 4.49424 6.75171 4.32124 6.66659 4.12838C6.58147 3.93551 6.53751 3.72701 6.53751 3.51619C6.53751 3.30538 6.58147 3.09688 6.66659 2.90401C6.75171 2.71115 6.87611 2.53815 7.03186 2.39607C7.1876 2.25399 7.37127 2.14595 7.57112 2.07885C7.77097 2.01175 7.98262 1.98707 8.19255 2.00637H18.3855C18.7845 2.02155 19.181 2.06039 19.573 2.12223C18.4001 3.20574 17.5522 4.63592 17.192 6.25005C16.658 6.32722 16.133 6.48003 15.6334 6.70785C14.9556 7.00255 14.3439 7.43011 13.8342 7.96527C13.3245 8.50042 12.9273 9.13232 12.666 9.82361C12.4047 10.5149 12.2846 11.2515 12.3128 11.99C12.341 12.7285 12.517 13.4539 12.8303 14.1232C13.4795 15.479 14.6341 16.5265 16.0465 17.041C17.4589 17.5554 19.0167 17.496 20.3858 16.8753C21.0624 16.5792 21.673 16.1508 22.1817 15.6154C22.2111 15.5845 22.2401 15.5532 22.2687 15.5216C23.121 15.8312 24.0408 16 25 16C25.7593 16 26.4939 15.8942 27.1899 15.6966ZM20.4791 14.601L20.1568 15.1419C20.1268 15.1966 20.0825 15.242 20.0286 15.2734C19.9748 15.3049 19.9134 15.3211 19.851 15.3203H16.1943C16.132 15.3211 16.0706 15.3049 16.0167 15.2734C15.9629 15.242 15.9185 15.1966 15.8885 15.1419L14.0156 12.0203C13.9844 11.9638 13.968 11.9002 13.968 11.8356C13.968 11.771 13.9844 11.7074 14.0156 11.6508L15.8885 8.59296C15.9211 8.54156 15.9664 8.49936 16.0199 8.47036C16.0734 8.44137 16.1335 8.42656 16.1943 8.42733H17.0112C17.1461 10.991 18.488 13.2347 20.4791 14.601ZM1.54168 8.9248C1.80309 8.92824 2.05533 8.82853 2.24374 8.64728C2.43215 8.46602 2.54155 8.21783 2.54823 7.95648C2.54165 7.69616 2.43445 7.44851 2.24913 7.26557C2.06381 7.08263 1.8148 6.97862 1.55442 6.97541H0.993808C0.733423 6.97862 0.484416 7.08263 0.299097 7.26557C0.113779 7.44851 0.00657271 7.69616 0 7.95648C0.0066466 8.21561 0.114278 8.46189 0.299938 8.64279C0.485597 8.82369 0.73459 8.92489 0.993808 8.9248H1.54168Z",
        fill: n
      }), (0, r.jsx)("path", {
        d: "M31 8C31 11.3137 28.3137 14 25 14C21.6863 14 19 11.3137 19 8C19 4.68629 21.6863 2 25 2C28.3137 2 31 4.68629 31 8Z",
        fill: null != i ? i : n,
        mask: "url(#mask)"
      }), (0, r.jsxs)("mask", {
        id: "mask",
        children: [(0, r.jsx)("path", {
          d: "M31 8C31 11.3137 28.3137 14 25 14C21.6863 14 19 11.3137 19 8C19 4.68629 21.6863 2 25 2C28.3137 2 31 4.68629 31 8Z",
          fill: "white"
        }), (0, r.jsx)("text", {
          fill: "black",
          fontFamily: "gg sans",
          fontSize: "12",
          fontWeight: "600",
          letterSpacing: "0em",
          children: (0, r.jsx)("tspan", {
            x: "21.6367",
            y: "12.212",
            children: t
          })
        })]
      })]
    })
  },
  I = e => {
    let {
      fillColor: t
    } = e;
    return (0, r.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.24374 8.64728C3.05533 8.82853 2.80309 8.92824 2.54168 8.9248H1.99381C1.73459 8.92489 1.4856 8.82369 1.29994 8.64279C1.11428 8.46189 1.00665 8.21561 1 7.95648C1.00657 7.69616 1.11378 7.44851 1.2991 7.26557C1.48442 7.08263 1.73342 6.97862 1.99381 6.97541H2.55442C2.8148 6.97862 3.06381 7.08263 3.24913 7.26557C3.43445 7.44851 3.54165 7.69616 3.54823 7.95648C3.54155 8.21783 3.43215 8.46602 3.24374 8.64728ZM26.2855 18.5425C25.38 19.4811 24.2941 20.2272 23.0931 20.7358C20.704 21.7967 17.9967 21.8902 15.54 20.9969C13.0833 20.1036 11.0685 18.2928 9.91879 15.9452C9.46102 14.9636 9.16829 13.9132 9.05239 12.8363H7.06478C6.8034 12.8364 6.55253 12.7334 6.36652 12.5498C6.1805 12.3661 6.07432 12.1166 6.07097 11.8553C6.07263 11.7264 6.09966 11.5992 6.1505 11.4808C6.20135 11.3624 6.27502 11.2552 6.3673 11.1653C6.45959 11.0753 6.56868 11.0045 6.68836 10.9567C6.80803 10.909 6.93594 10.8853 7.06478 10.8869H9.91879C10.0476 10.8869 10.1752 10.8616 10.2942 10.8123C10.4133 10.763 10.5214 10.6907 10.6125 10.5996C10.7036 10.5085 10.7759 10.4003 10.8252 10.2813C10.8745 10.1623 10.8999 10.0347 10.8999 9.90587C10.8999 9.77704 10.8745 9.64946 10.8252 9.53043C10.7759 9.4114 10.7036 9.30325 10.6125 9.21215C10.5214 9.12105 10.4133 9.04879 10.2942 8.99948C10.1752 8.95018 10.0476 8.9248 9.91879 8.9248H5.34473C5.21589 8.92649 5.08798 8.90278 4.9683 8.85502C4.84863 8.80727 4.73954 8.73641 4.64725 8.64649C4.55496 8.55657 4.4813 8.44935 4.43045 8.33096C4.37961 8.21257 4.35258 8.08532 4.35092 7.95648C4.35427 7.69512 4.46045 7.4456 4.64646 7.26197C4.83248 7.07834 5.08334 6.97539 5.34473 6.97541H11.779C11.9164 6.99114 12.0555 6.97766 12.1873 6.93586C12.3191 6.89405 12.4405 6.82487 12.5437 6.73283C12.6469 6.6408 12.7294 6.528 12.7859 6.40183C12.8425 6.27566 12.8717 6.13897 12.8717 6.00071C12.8717 5.86246 12.8425 5.72577 12.7859 5.5996C12.7294 5.47342 12.6469 5.36063 12.5437 5.26859C12.4405 5.17656 12.3191 5.10738 12.1873 5.06557C12.0555 5.02377 11.9164 5.01029 11.779 5.02602H9.19255C8.98262 5.04532 8.77097 5.02064 8.57112 4.95354C8.37127 4.88644 8.1876 4.7784 8.03186 4.63632C7.87611 4.49424 7.75171 4.32124 7.66659 4.12838C7.58147 3.93551 7.53751 3.72701 7.53751 3.51619C7.53751 3.30538 7.58147 3.09688 7.66659 2.90401C7.75171 2.71115 7.87611 2.53815 8.03186 2.39607C8.1876 2.25399 8.37127 2.14595 8.57112 2.07885C8.77097 2.01175 8.98262 1.98707 9.19255 2.00637H19.3855C21.2132 2.07591 22.9875 2.64152 24.5182 3.64258C26.049 4.64363 27.2785 6.04239 28.0749 7.68891C28.6312 8.86858 28.9435 10.1485 28.993 11.4518C29.0425 12.7551 28.8282 14.055 28.363 15.2735C27.8977 16.4919 27.1911 17.6039 26.2855 18.5425ZM13.3128 11.99C13.341 12.7285 13.517 13.4539 13.8303 14.1232C14.4795 15.479 15.6341 16.5265 17.0465 17.041C18.4589 17.5554 20.0167 17.496 21.3858 16.8753C22.0624 16.5792 22.673 16.1508 23.1817 15.6154C23.6904 15.08 24.0869 14.4484 24.3481 13.7576C24.6092 13.0667 24.7296 12.3307 24.7023 11.5927C24.6749 10.8547 24.5004 10.1295 24.1889 9.45993C23.5422 8.1018 22.3878 7.05217 20.9744 6.53736C19.5611 6.02254 18.002 6.08377 16.6334 6.70785C15.9556 7.00255 15.3439 7.43011 14.8342 7.96527C14.3245 8.50042 13.9273 9.13232 13.666 9.82361C13.4047 10.5149 13.2846 11.2515 13.3128 11.99ZM17.1943 8.42733H20.851C20.9185 8.43261 20.9831 8.45698 21.0372 8.49759C21.0914 8.5382 21.1328 8.59337 21.1568 8.65667L22.9788 11.7145C23.01 11.7711 23.0264 11.8347 23.0264 11.8993C23.0264 11.9639 23.01 12.0275 22.9788 12.084L21.1568 15.1419C21.1268 15.1966 21.0825 15.242 21.0286 15.2734C20.9748 15.3049 20.9134 15.3211 20.851 15.3203H17.1943C17.132 15.3211 17.0706 15.3049 17.0167 15.2734C16.9629 15.242 16.9185 15.1966 16.8885 15.1419L15.0156 12.0203C14.9844 11.9638 14.968 11.9002 14.968 11.8356C14.968 11.771 14.9844 11.7074 15.0156 11.6508L16.8885 8.59296C16.9211 8.54156 16.9664 8.49936 17.0199 8.47036C17.0734 8.44137 17.1335 8.42656 17.1943 8.42733Z",
      fill: t
    })
  },
  T = (e, t, n, r) => {
    if (n) return e ? p : _;
    let i = t ? [...O.keys()].filter(e => e !== r) : [...y.keys()].filter(e => e !== r),
      o = Math.floor(Math.random() * i.length);
    return i[o]
  };

function N(e) {
  var t, {
      width: n = 31,
      height: s = 22,
      referralsRemaining: c,
      isResending: f,
      hovered: p,
      isLightTheme: h
    } = e,
    g = d(e, ["width", "height", "referralsRemaining", "isResending", "hovered", "isLightTheme"]);
  let [m, E] = i.useState(_), v = null !== (t = y.get(m)) && void 0 !== t ? t : null;
  return i.useEffect(() => {
    p ? E(e => T(p, h, f, e)) : f && E(_)
  }, [p, h, f]), (0, r.jsxs)("svg", u(l({
    width: n,
    height: s
  }, (0, a.Z)(g)), {
    xmlns: "http://www.w3.org/2000/svg",
    children: [f ? (0, r.jsx)(I, {
      fillColor: m
    }) : (0, r.jsx)(S, {
      referralsRemaining: c,
      fillColor: p ? m : _,
      secondaryFillColor: p ? v : null
    }), (0, r.jsxs)("defs", {
      children: [(0, r.jsxs)("linearGradient", {
        id: "nitro_hover",
        x1: "0",
        y1: "11.8026",
        x2: "27.1899",
        y2: "11.8026",
        gradientUnits: "userSpaceOnUse",
        children: [(0, r.jsx)("stop", {
          stopColor: o.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
        }), (0, r.jsx)("stop", {
          offset: "1",
          stopColor: o.Z.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
        })]
      }), (0, r.jsxs)("linearGradient", {
        id: "birthday_gradient_1",
        x1: "0",
        y1: "9.80261",
        x2: "27.1899",
        y2: "9.80261",
        gradientUnits: "userSpaceOnUse",
        children: [(0, r.jsx)("stop", {
          "stop-color": "#FF52D2"
        }), (0, r.jsx)("stop", {
          offset: "1",
          "stop-color": "#5665F9"
        })]
      }), (0, r.jsxs)("linearGradient", {
        id: "birthday_secondary_gradient_1",
        x1: "20",
        y1: "8",
        x2: "32",
        y2: "8",
        gradientUnits: "userSpaceOnUse",
        children: [(0, r.jsx)("stop", {
          "stop-color": "#FF52D2"
        }), (0, r.jsx)("stop", {
          offset: "1",
          "stop-color": "#5665F9"
        })]
      }), (0, r.jsxs)("linearGradient", {
        id: "birthday_gradient_2",
        x1: "9.91249",
        y1: "11.7943",
        x2: "20.7838",
        y2: "11.7943",
        gradientUnits: "userSpaceOnUse",
        children: [(0, r.jsx)("stop", {
          offset: "0.18",
          "stop-color": "#A4EF00"
        }), (0, r.jsx)("stop", {
          offset: "0.24",
          "stop-color": "#A2EB07"
        }), (0, r.jsx)("stop", {
          offset: "0.31",
          "stop-color": "#9CE01B"
        }), (0, r.jsx)("stop", {
          offset: "0.41",
          "stop-color": "#92CE3B"
        }), (0, r.jsx)("stop", {
          offset: "0.51",
          "stop-color": "#83B568"
        }), (0, r.jsx)("stop", {
          offset: "0.62",
          "stop-color": "#7196A1"
        }), (0, r.jsx)("stop", {
          offset: "0.74",
          "stop-color": "#5C6FE6"
        }), (0, r.jsx)("stop", {
          offset: "0.77",
          "stop-color": "#5665F9"
        })]
      }), (0, r.jsxs)("linearGradient", {
        id: "birthday_secondary_gradient_2",
        x1: "23.9334",
        y1: "7.99494",
        x2: "28.7314",
        y2: "7.99494",
        gradientUnits: "userSpaceOnUse",
        children: [(0, r.jsx)("stop", {
          offset: "0.18",
          "stop-color": "#A4EF00"
        }), (0, r.jsx)("stop", {
          offset: "0.24",
          "stop-color": "#A2EB07"
        }), (0, r.jsx)("stop", {
          offset: "0.31",
          "stop-color": "#9CE01B"
        }), (0, r.jsx)("stop", {
          offset: "0.41",
          "stop-color": "#92CE3B"
        }), (0, r.jsx)("stop", {
          offset: "0.51",
          "stop-color": "#83B568"
        }), (0, r.jsx)("stop", {
          offset: "0.62",
          "stop-color": "#7196A1"
        }), (0, r.jsx)("stop", {
          offset: "0.74",
          "stop-color": "#5C6FE6"
        }), (0, r.jsx)("stop", {
          offset: "0.77",
          "stop-color": "#5665F9"
        })]
      }), (0, r.jsxs)("linearGradient", {
        id: "birthday_gradient_3",
        x1: "0.01376",
        y1: "9.77244",
        x2: "27.1954",
        y2: "9.77244",
        gradientUnits: "userSpaceOnUse",
        children: [(0, r.jsx)("stop", {
          offset: "0.21",
          "stop-color": "#A4EF00"
        }), (0, r.jsx)("stop", {
          offset: "0.95",
          "stop-color": "#FF52D2"
        })]
      }), (0, r.jsxs)("linearGradient", {
        id: "birthday_secondary_gradient_3",
        x1: "19.0061",
        y1: "5.98154",
        x2: "31.0024",
        y2: "5.98154",
        gradientUnits: "userSpaceOnUse",
        children: [(0, r.jsx)("stop", {
          offset: "0.21",
          "stop-color": "#A4EF00"
        }), (0, r.jsx)("stop", {
          offset: "0.95",
          "stop-color": "#FF52D2"
        })]
      }), (0, r.jsxs)("linearGradient", {
        id: "birthday_gradient_1_light",
        x1: "6.85923",
        y1: "4.92266",
        x2: "28.1595",
        y2: "10.6567",
        gradientUnits: "userSpaceOnUse",
        children: [(0, r.jsx)("stop", {
          "stop-color": "#8547C6"
        }), (0, r.jsx)("stop", {
          offset: "0.52899",
          "stop-color": "#B845C1"
        }), (0, r.jsx)("stop", {
          offset: "1",
          "stop-color": "#AB5D8A"
        })]
      }), (0, r.jsxs)("linearGradient", {
        id: "birthday_secondary_gradient_1_light",
        x1: "22.0273",
        y1: "3.01307",
        x2: "31.7431",
        y2: "4.89899",
        gradientUnits: "userSpaceOnUse",
        children: [(0, r.jsx)("stop", {
          "stop-color": "#8547C6"
        }), (0, r.jsx)("stop", {
          offset: "0.52899",
          "stop-color": "#B845C1"
        }), (0, r.jsx)("stop", {
          offset: "1",
          "stop-color": "#AB5D8A"
        })]
      }), (0, r.jsxs)("linearGradient", {
        id: "birthday_gradient_2_light",
        x1: "8.91249",
        y1: "9.79433",
        x2: "19.7838",
        y2: "9.79433",
        gradientUnits: "userSpaceOnUse",
        children: [(0, r.jsx)("stop", {
          offset: "0.18",
          "stop-color": "#9EE700"
        }), (0, r.jsx)("stop", {
          offset: "0.31",
          "stop-color": "#9CE01B"
        }), (0, r.jsx)("stop", {
          offset: "0.41",
          "stop-color": "#92CE3B"
        }), (0, r.jsx)("stop", {
          offset: "0.51",
          "stop-color": "#83B568"
        }), (0, r.jsx)("stop", {
          offset: "0.62",
          "stop-color": "#7196A1"
        }), (0, r.jsx)("stop", {
          offset: "0.74",
          "stop-color": "#5C6FE6"
        }), (0, r.jsx)("stop", {
          offset: "0.77",
          "stop-color": "#5665F9"
        })]
      }), (0, r.jsxs)("linearGradient", {
        id: "birthday_secondary_gradient_2_light",
        x1: "22.9334",
        y1: "5.99494",
        x2: "27.7314",
        y2: "5.99494",
        gradientUnits: "userSpaceOnUse",
        children: [(0, r.jsx)("stop", {
          offset: "0.18",
          "stop-color": "#9EE700"
        }), (0, r.jsx)("stop", {
          offset: "0.31",
          "stop-color": "#9CE01B"
        }), (0, r.jsx)("stop", {
          offset: "0.41",
          "stop-color": "#92CE3B"
        }), (0, r.jsx)("stop", {
          offset: "0.51",
          "stop-color": "#83B568"
        }), (0, r.jsx)("stop", {
          offset: "0.62",
          "stop-color": "#7196A1"
        }), (0, r.jsx)("stop", {
          offset: "0.74",
          "stop-color": "#5C6FE6"
        }), (0, r.jsx)("stop", {
          offset: "0.77",
          "stop-color": "#5665F9"
        })]
      }), (0, r.jsxs)("linearGradient", {
        id: "birthday_gradient_3_light",
        x1: "0.01376",
        y1: "9.77244",
        x2: "27.1954",
        y2: "9.77244",
        gradientUnits: "userSpaceOnUse",
        children: [(0, r.jsx)("stop", {
          offset: "0.21",
          "stop-color": "#9EE700"
        }), (0, r.jsx)("stop", {
          offset: "0.95",
          "stop-color": "#FF52D2"
        })]
      }), (0, r.jsxs)("linearGradient", {
        id: "birthday_secondary_gradient_3_light",
        x1: "19.0061",
        y1: "5.98154",
        x2: "31.0024",
        y2: "5.98154",
        gradientUnits: "userSpaceOnUse",
        children: [(0, r.jsx)("stop", {
          offset: "0.21",
          "stop-color": "#9EE700"
        }), (0, r.jsx)("stop", {
          offset: "0.95",
          "stop-color": "#FF52D2"
        })]
      })]
    })]
  }))
}