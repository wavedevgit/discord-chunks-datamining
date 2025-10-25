/** Chunk was on 1272 **/
/** chunk id: 141321, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk212605 = require("./212605.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk719961 = require("./719961.js"),
  Chunk388035 = require("./388035.jsx"),
  Chunk306680 = require("./306680.js"),
  Chunk594174 = require("./594174.js"),
  Chunk178088 = require("./178088.jsx"),
  Chunk490897 = require("./490897.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk741047 = require("./741047.js");

function O(e) {
  let {
    onOpen: t,
    onClose: n,
    "data-jump-section": l
  } = e, O = (0, s.e7)([m.default], () => m.default.getCurrentUser()), I = i.useRef(null), v = (0, s.e7)([h.ZP], () => (null == O ? true : O.id) != null && h.ZP.getMentionCount(O.id, _.W.NOTIFICATION_CENTER) > 0), {
    titlebarIconSize: y,
    titlebarHoverHighlight: C
  } = (0, p.T)({
    location: "RecentsButton"
  }), S = "sm" === y ? "refresh_sm" : "md", T = i.useMemo(() => (0, r.jsx)(u.xx7, {
    size: S,
    color: "currentColor"
  }), [S]);
  return (0, r.jsx)(g.k, {
    targetElementRef: I,
    onOpen: t,
    onClose: n,
    badgeState: {
      badgeForYou: v
    },
    popoutPosition: "bottom",
    popoutAlign: "right",
    children: (e, t, n, i) => {
      var s, p;
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(c.u, {
          targetElementRef: I,
          shouldShow: !t,
          text: b.intl.string(b.t.GSmTKJ),
          children: (0, r.jsx)(u.P3F, (s = function(e) {
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
          }({}, n), p = p = {
            tag: "div",
            innerRef: I,
            onClick: e,
            "data-jump-section": l,
            "aria-label": b.intl.string(b.t.GSmTKJ),
            className: a()(E.clickable, {
              [E.withHighlight]: C
            }),
            children: v || i ? (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(d.ZP, {
                mask: d.ZP.Masks.HEADER_BAR_BADGE_BOTTOM,
                height: o.Z[S],
                width: o.Z[S],
                children: T
              }), (0, r.jsx)("span", {
                className: a()(E.badge, {
                  [E.smol]: "refresh_sm" === S
                })
              })]
            }) : T
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(p)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(p)).forEach(function(e) {
            Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(p, e))
          }), s))
        }), (0, r.jsx)(f.U, {
          location: "inbox-button",
          targetElementRef: I
        })]
      })
    }
  })
}