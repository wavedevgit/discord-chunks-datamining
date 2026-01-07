/** Chunk was on 6043 **/
/** chunk id: 879434, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk678717 = require("./678717.jsx"),
  Chunk715495 = require("./715495.jsx"),
  Chunk928518 = require("./928518.js"),
  Chunk538645 = require("./538645.jsx"),
  Chunk383036 = require("./383036.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk55915 = require("./55915.js");
let x = e => {
    let {
      setTab: t
    } = e, n = (0, o.e7)([u.Z], () => u.Z.getWindowOpen(f.KJ3.DEVTOOLS_POPOUT));
    return (0, a.jsxs)("div", {
      className: h.content,
      children: [(0, a.jsx)(s.P3F, {
        onClick: () => {
          t(1)
        },
        children: (0, a.jsx)("div", {
          className: l()(h.banner, h.pfxBanner),
          children: (0, a.jsx)(s.xvT, {
            variant: "text-md/bold",
            color: "always-white",
            children: "Profile Effects"
          })
        })
      }), (0, a.jsx)(s.P3F, {
        onClick: () => {
          t(2)
        },
        children: (0, a.jsx)("div", {
          className: l()(h.banner, h.nameplateBanner),
          children: (0, a.jsx)(s.xvT, {
            variant: "text-md/bold",
            color: "always-white",
            children: "Nameplates"
          })
        })
      }), (0, a.jsx)(s.P3F, {
        onClick: () => {
          t(3)
        },
        children: (0, a.jsx)("div", {
          className: l()(h.banner, h.bundlesBanner),
          children: (0, a.jsx)(s.xvT, {
            variant: "text-md/bold",
            color: "always-white",
            children: "Products"
          })
        })
      }), !n && (0, a.jsx)("div", {
        style: {
          marginTop: 16
        },
        children: (0, a.jsx)(s.M14, {
          type: "warning",
          children: (0, a.jsxs)(s.Kqy, {
            gap: 8,
            children: [(0, a.jsx)(s.xvT, {
              variant: "text-md/semibold",
              children: "Not enough space?"
            }), (0, a.jsx)(s.xvT, {
              variant: "text-sm/normal",
              children: "You can pop out the DevTools to see the full layout."
            }), (0, a.jsx)(s.zxk, {
              size: "sm",
              icon: s.rgF,
              variant: "secondary",
              onClick: c.openDevToolsPopout,
              text: "Popout DevTools"
            })]
          })
        })
      })]
    })
  },
  b = () => {
    let [e, t] = r.useState(0);
    return (0, a.jsxs)(s.zJl, {
      className: h.wrapper,
      children: [(0, a.jsxs)("div", {
        className: h.nav,
        children: [(0, a.jsx)(s.X6q, {
          variant: "heading-xxl/medium",
          children: "Collectibles DevTools"
        }), 0 !== e && (0, a.jsx)(s.zxk, {
          variant: "primary",
          onClick: () => t(0),
          text: "Back"
        })]
      }), (() => {
        switch (e) {
          case 1:
            return (0, a.jsx)(m.Z, {});
          case 2:
            return (0, a.jsx)(d.Z, {});
          case 3:
            return (0, a.jsx)(p.Z, {});
          default:
            return (0, a.jsx)(x, {
              setTab: t
            })
        }
      })()]
    })
  }