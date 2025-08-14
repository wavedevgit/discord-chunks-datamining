/** Chunk was on 1272 **/
/** chunk id: 138176, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => E,
  X: () => y
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk920155 = require("./920155.jsx"),
  Chunk744399 = require("./744399.jsx"),
  Chunk454028 = require("./454028.jsx"),
  Chunk966902 = require("./966902.jsx"),
  Chunk237872 = require("./237872.jsx"),
  Chunk562618 = require("./562618.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk626135 = require("./626135.js"),
  Chunk93237 = require("./93237.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk20456 = require("./20456.js"),
  Chunk712793 = require("./712793.js"),
  Chunk295234 = require("./295234.js");

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
let E = e => {
    let {
      targetElementRef: t
    } = e, m = (0, f.eW)(), b = () => {
      (0, f.ZL)()
    };
    return (0, r.jsxs)(i.m, {
      targetElementRef: t,
      shouldShow: m,
      align: "top",
      position: "right",
      gradientColor: "nitro-pink",
      children: [(0, r.jsx)(s.u, {
        onClick: b,
        colorMix: true
      }), (0, r.jsx)(a.V, {
        asset: (0, r.jsx)("img", {
          src: _.Z,
          alt: ""
        }),
        size: "md"
      }), (0, r.jsx)(c.Y, {
        title: g.intl.string(g.t.K2DyeX),
        body: g.intl.string(g.t["JICo+/"])
      }), (0, r.jsx)(l.k, {
        actions: [{
          text: g.intl.string(g.t.t2N819),
          onClick: () => {
            p.default.track(h.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
              location_stack: [d.Z.HOME_PAGE_PREMIUM_TAB]
            }), b(), (0, u.ZDy)(async () => {
              let {
                default: e
              } = await Promise.all([n.e("83667"), n.e("4048")]).then(n.bind(n, 656139));
              return t => (0, r.jsx)(e, O({}, t))
            })
          }
        }]
      }), (0, r.jsx)(o.$, {
        caretConfig: {
          position: "left",
          align: "start"
        }
      })]
    })
  },
  y = e => {
    let {
      children: t
    } = e, n = (0, r.jsxs)("div", {
      className: m.flatContainer,
      children: [(0, r.jsx)("div", {
        children: (0, r.jsx)("img", {
          src: b.Z,
          alt: "",
          className: m.flatImage
        })
      }), (0, r.jsxs)("div", {
        className: m.flatContent,
        children: [(0, r.jsx)(u.X6q, {
          variant: "heading-md/semibold",
          children: g.intl.string(g.t.K2DyeX)
        }), (0, r.jsx)(u.Text, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: g.intl.string(g.t["JICo+/"])
        })]
      })]
    });
    return (0, r.jsx)(u.ua7, {
      tooltipClassName: m.flatContainerTooltip,
      tooltipContentClassName: m.flatContainerTooltipContent,
      text: n,
      position: "right",
      "aria-label": g.intl.string(g.t.t2N819),
      allowOverflow: true,
      children: e => {
        var n, i;
        return (0, r.jsx)("div", (n = O({}, e), i = i = {
          children: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
        }), n))
      }
    })
  }