/** Chunk was on 30202 **/
/** chunk id: 994714, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk715495 = require("./715495.jsx"),
  Chunk538645 = require("./538645.jsx"),
  Chunk646420 = require("./646420.js");
let m = e => {
    let {
      setTab: t
    } = e;
    return (0, i.jsxs)("div", {
      children: [(0, i.jsx)(o.P3F, {
        onClick: () => {
          t(1)
        },
        children: (0, i.jsx)("div", {
          className: a()(u.banner, u.pfxBanner),
          children: (0, i.jsx)(l.xv, {
            variant: "text-md/bold",
            color: "always-white",
            children: "Profile Effects"
          })
        })
      }), (0, i.jsx)(o.P3F, {
        onClick: () => {
          t(2)
        },
        children: (0, i.jsx)("div", {
          className: a()(u.banner, u.nameplateBanner),
          children: (0, i.jsx)(l.xv, {
            variant: "text-md/bold",
            color: "always-white",
            children: "Nameplates"
          })
        })
      })]
    })
  },
  p = () => {
    let [e, t] = Chunk73800.useState(0);
    return (0, Chunk255367.jsxs)("div", {
      className: Chunk646420.wrapper,
      children: [(0, Chunk255367.jsxs)("div", {
        className: Chunk646420.nav,
        children: [(0, Chunk255367.jsx)(Chunk793030.X6, {
          variant: "heading-xxl/medium",
          children: "ShopKeeper"
        }), 0 !== module && (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          onClick: () => exports(0),
          text: "Back"
        })]
      }), (() => {
        switch (module) {
          case 1:
            return (0, Chunk255367.jsx)(Chunk538645.Z, {});
          case 2:
            return (0, Chunk255367.jsx)(Chunk715495.Z, {});
          default:
            return (0, Chunk255367.jsx)(m, {
              setTab: exports
            })
        }
      })()]
    })
  }