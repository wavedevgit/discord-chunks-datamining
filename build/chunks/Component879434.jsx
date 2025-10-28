/** Chunk was on 32945 **/
/** chunk id: 879434, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk678717 = require("./678717.jsx"),
  Chunk715495 = require("./715495.jsx"),
  Chunk928518 = require("./928518.js"),
  Chunk538645 = require("./538645.jsx"),
  Chunk383036 = require("./383036.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk511130 = require("./511130.js");
let f = e => {
    let {
      setTab: t
    } = e, n = (0, s.e7)([u.Z], () => u.Z.getWindowOpen(h.KJ3.DEVTOOLS_POPOUT));
    return (0, a.jsxs)("div", {
      className: x.content,
      children: [(0, a.jsx)(o.P3F, {
        onClick: () => {
          t(1)
        },
        children: (0, a.jsx)("div", {
          className: i()(x.banner, x.pfxBanner),
          children: (0, a.jsx)(o.xvT, {
            variant: "text-md/bold",
            color: "always-white",
            children: "Profile Effects"
          })
        })
      }), (0, a.jsx)(o.P3F, {
        onClick: () => {
          t(2)
        },
        children: (0, a.jsx)("div", {
          className: i()(x.banner, x.nameplateBanner),
          children: (0, a.jsx)(o.xvT, {
            variant: "text-md/bold",
            color: "always-white",
            children: "Nameplates"
          })
        })
      }), (0, a.jsx)(o.P3F, {
        onClick: () => {
          t(3)
        },
        children: (0, a.jsx)("div", {
          className: i()(x.banner, x.bundlesBanner),
          children: (0, a.jsx)(o.xvT, {
            variant: "text-md/bold",
            color: "always-white",
            children: "Products"
          })
        })
      }), !n && (0, a.jsx)("div", {
        style: {
          marginTop: 16
        },
        children: (0, a.jsx)(o.M14, {
          type: "warning",
          children: (0, a.jsxs)(o.Kqy, {
            gap: 8,
            children: [(0, a.jsx)(o.xvT, {
              variant: "text-md/semibold",
              children: "Not enough space?"
            }), (0, a.jsx)(o.xvT, {
              variant: "text-sm/normal",
              children: "You can pop out the DevTools to see the full layout."
            }), (0, a.jsx)(o.zxk, {
              size: "sm",
              icon: o.rgF,
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
    let [e, t] = Chunk647438.useState(0);
    return (0, Chunk951288.jsxs)(Chunk793030.zJl, {
      className: Chunk511130.wrapper,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk511130.nav,
        children: [(0, Chunk951288.jsx)(Chunk793030.X6q, {
          variant: "heading-xxl/medium",
          children: "Collectibles DevTools"
        }), 0 !== module && (0, Chunk951288.jsx)(Chunk793030.zxk, {
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
            return (0, Chunk951288.jsx)(f, {
              setTab: exports
            })
        }
      })()]
    })
  }