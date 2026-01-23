/** Chunk was on 22477 **/
/** chunk id: 264461, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk902592 = require("./902592.jsx"),
  Chunk996958 = require("./996958.jsx"),
  Chunk869146 = require("./869146.js"),
  Chunk680108 = require("./680108.jsx"),
  Chunk439895 = require("./439895.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk569885 = require("./569885.js");
let g = e => {
    let {
      setTab: t
    } = e, n = (0, o.bG)([u.A], () => u.A.getWindowOpen(h.MLl.DEVTOOLS_POPOUT));
    return (0, a.jsxs)("div", {
      className: x.Qs,
      children: [(0, a.jsx)(s.DUT, {
        onClick: () => {
          t(1)
        },
        children: (0, a.jsx)("div", {
          className: i()(x.vK, x.Dg),
          children: (0, a.jsx)(s.EYj, {
            variant: "text-md/bold",
            color: "always-white",
            children: "Profile Effects"
          })
        })
      }), (0, a.jsx)(s.DUT, {
        onClick: () => {
          t(2)
        },
        children: (0, a.jsx)("div", {
          className: i()(x.vK, x.st),
          children: (0, a.jsx)(s.EYj, {
            variant: "text-md/bold",
            color: "always-white",
            children: "Nameplates"
          })
        })
      }), (0, a.jsx)(s.DUT, {
        onClick: () => {
          t(3)
        },
        children: (0, a.jsx)("div", {
          className: i()(x.vK, x.IP),
          children: (0, a.jsx)(s.EYj, {
            variant: "text-md/bold",
            color: "always-white",
            children: "Products"
          })
        })
      }), !n && (0, a.jsx)("div", {
        style: {
          marginTop: 16
        },
        children: (0, a.jsx)(s.wx6, {
          type: "warning",
          children: (0, a.jsxs)(s.BJc, {
            gap: 8,
            children: [(0, a.jsx)(s.EYj, {
              variant: "text-md/semibold",
              children: "Not enough space?"
            }), (0, a.jsx)(s.EYj, {
              variant: "text-sm/normal",
              children: "You can pop out the DevTools to see the full layout."
            }), (0, a.jsx)(s.$nd, {
              size: "sm",
              icon: s.tfB,
              variant: "secondary",
              onClick: c.openDevToolsPopout,
              text: "Popout DevTools"
            })]
          })
        })
      })]
    })
  },
  f = () => {
    let [e, t] = l.useState(0);
    return (0, a.jsxs)(s.IpV, {
      className: x.iE,
      children: [(0, a.jsxs)("div", {
        className: x.C$,
        children: [(0, a.jsx)(s.DZT, {
          variant: "heading-xxl/medium",
          children: "Collectibles DevTools"
        }), 0 !== e && (0, a.jsx)(s.$nd, {
          variant: "primary",
          onClick: () => t(0),
          text: "Back"
        })]
      }), (() => {
        switch (e) {
          case 1:
            return (0, a.jsx)(m.A, {});
          case 2:
            return (0, a.jsx)(d.A, {});
          case 3:
            return (0, a.jsx)(p.A, {});
          default:
            return (0, a.jsx)(g, {
              setTab: t
            })
        }
      })()]
    })
  }