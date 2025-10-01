/** Chunk was on 8345 **/
/** chunk id: 722332, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk678717 = require("./678717.jsx"),
  Chunk715495 = require("./715495.jsx"),
  Chunk928518 = require("./928518.js"),
  Chunk538645 = require("./538645.jsx"),
  Chunk383036 = require("./383036.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk431638 = require("./431638.js");
let b = e => {
    let {
      setTab: t
    } = e, n = (0, o.e7)([m.Z], () => m.Z.getWindowOpen(x.KJ3.DEVTOOLS_POPOUT));
    return (0, a.jsxs)("div", {
      className: f.content,
      children: [(0, a.jsx)(c.P3F, {
        onClick: () => {
          t(1)
        },
        children: (0, a.jsx)("div", {
          className: l()(f.banner, f.pfxBanner),
          children: (0, a.jsx)(s.xvT, {
            variant: "text-md/bold",
            color: "always-white",
            children: "Profile Effects"
          })
        })
      }), (0, a.jsx)(c.P3F, {
        onClick: () => {
          t(2)
        },
        children: (0, a.jsx)("div", {
          className: l()(f.banner, f.nameplateBanner),
          children: (0, a.jsx)(s.xvT, {
            variant: "text-md/bold",
            color: "always-white",
            children: "Nameplates"
          })
        })
      }), (0, a.jsx)(c.P3F, {
        onClick: () => {
          t(3)
        },
        children: (0, a.jsx)("div", {
          className: l()(f.banner, f.bundlesBanner),
          children: (0, a.jsx)(s.xvT, {
            variant: "text-md/bold",
            color: "always-white",
            children: "Product Preview Tool"
          })
        })
      }), !n && (0, a.jsx)(c.ToO, {
        className: f.notice,
        type: c.Dd5.WARNING,
        title: "Not enough space?",
        body: (0, a.jsxs)("div", {
          className: f.noticeBody,
          children: [(0, a.jsx)("span", {
            children: " You can pop out the DevTools to see the full layout. "
          }), (0, a.jsx)(c.zxk, {
            size: "sm",
            icon: s.rgF,
            variant: "secondary",
            onClick: d.openDevToolsPopout,
            text: "Popout DevTools"
          })]
        })
      })]
    })
  },
  g = () => {
    let [e, t] = Chunk647438.useState(0);
    return (0, Chunk951288.jsxs)(Chunk793030.zJl, {
      className: Chunk431638.wrapper,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk431638.nav,
        children: [(0, Chunk951288.jsx)(Chunk793030.X6q, {
          variant: "heading-xxl/medium",
          children: "ShopKeeper"
        }), 0 !== module && (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          onClick: () => exports(0),
          text: "Back"
        })]
      }), (() => {
        switch (module) {
          case 1:
            return (0, Chunk951288.jsx)(Chunk538645.Z, {});
          case 2:
            return (0, Chunk951288.jsx)(Chunk715495.Z, {});
          case 3:
            return (0, Chunk951288.jsx)(Chunk383036.Z, {});
          default:
            return (0, Chunk951288.jsx)(b, {
              setTab: exports
            })
        }
      })()]
    })
  }