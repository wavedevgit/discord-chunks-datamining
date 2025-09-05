/** Chunk was on 1272 **/
/** chunk id: 138176, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => g,
  X: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk907862 = require("./907862.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk626135 = require("./626135.js"),
  Chunk93237 = require("./93237.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk260012 = require("./260012.js"),
  Chunk712793 = require("./712793.js"),
  Chunk295234 = require("./295234.js");

function h(e) {
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
let g = e => {
    let {
      targetElementRef: t
    } = e, d = (0, s.eW)(), p = () => {
      (0, s.ZL)()
    };
    return (0, r.jsx)(i.J2, {
      targetElementRef: t,
      title: u.intl.string(u.t.K2DyeX),
      body: u.intl.string(u.t["JICo+/"]),
      graphic: {
        type: "image",
        src: f.Z
      },
      size: "md",
      shouldShow: d,
      align: "top",
      position: "right",
      gradientColor: "nitro-pink",
      caretConfig: {
        position: "left",
        align: "start"
      },
      actions: [{
        text: u.intl.string(u.t.t2N819),
        onClick: () => {
          o.default.track(c.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
            location_stack: [a.Z.HOME_PAGE_PREMIUM_TAB]
          }), p(), (0, l.ZDy)(async () => {
            let {
              default: e
            } = await Promise.resolve().then(n.bind(n, 656139));
            return t => (0, r.jsx)(e, h({}, t))
          })
        }
      }],
      onRequestClose: p
    })
  },
  m = e => {
    let {
      children: t
    } = e, n = (0, r.jsxs)("div", {
      className: d.flatContainer,
      children: [(0, r.jsx)("div", {
        children: (0, r.jsx)("img", {
          src: p.Z,
          alt: "",
          className: d.flatImage
        })
      }), (0, r.jsxs)("div", {
        className: d.flatContent,
        children: [(0, r.jsx)(l.X6q, {
          variant: "heading-md/semibold",
          children: u.intl.string(u.t.K2DyeX)
        }), (0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: u.intl.string(u.t["JICo+/"])
        })]
      })]
    });
    return (0, r.jsx)(l.ua7, {
      tooltipClassName: d.flatContainerTooltip,
      tooltipContentClassName: d.flatContainerTooltipContent,
      text: n,
      position: "right",
      "aria-label": u.intl.string(u.t.t2N819),
      allowOverflow: true,
      children: e => {
        var n, i;
        return (0, r.jsx)("div", (n = h({}, e), i = i = {
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