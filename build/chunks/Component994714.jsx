/** Chunk was on web.js **/
/** chunk id: 994714, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk715495 = require("./715495.jsx"),
  Chunk538645 = require("./538645.jsx"),
  Chunk383036 = require("./383036.jsx"),
  Chunk646420 = require("./646420.js");
let _ = e => {
    let {
      setTab: t
    } = e;
    return (0, r.jsxs)("div", {
      children: [(0, r.jsx)(l.P3F, {
        onClick: () => {
          t(1)
        },
        children: (0, r.jsx)("div", {
          className: a()(f.banner, f.pfxBanner),
          children: (0, r.jsx)(s.xv, {
            variant: "text-md/bold",
            color: "always-white",
            children: "Profile Effects"
          })
        })
      }), (0, r.jsx)(l.P3F, {
        onClick: () => {
          t(2)
        },
        children: (0, r.jsx)("div", {
          className: a()(f.banner, f.nameplateBanner),
          children: (0, r.jsx)(s.xv, {
            variant: "text-md/bold",
            color: "always-white",
            children: "Nameplates"
          })
        })
      }), (0, r.jsx)(l.P3F, {
        onClick: () => {
          t(3)
        },
        children: (0, r.jsx)("div", {
          className: a()(f.banner, f.bundlesBanner),
          children: (0, r.jsx)(s.xv, {
            variant: "text-md/bold",
            color: "always-white",
            children: "Product Preview Tool"
          })
        })
      })]
    })
  },
  p = () => {
    let [e, t] = Chunk647438.useState(0), n = () => {
      switch (module) {
        case 1:
          return (0, Chunk951288.jsx)(Chunk538645.Z, {});
        case 2:
          return (0, Chunk951288.jsx)(Chunk715495.Z, {});
        case 3:
          return (0, Chunk951288.jsx)(Chunk383036.Z, {});
        default:
          return (0, Chunk951288.jsx)(_, {
            setTab: exports
          })
      }
    };
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk646420.wrapper,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk646420.nav,
        children: [(0, Chunk951288.jsx)(Chunk793030.X6, {
          variant: "heading-xxl/medium",
          children: "ShopKeeper"
        }), 0 !== module && (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          onClick: () => exports(0),
          text: "Back"
        })]
      }), require()]
    })
  }