/** Chunk was on 21738 **/
/** chunk id: 52144, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk319354 = require("./319354.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk573435 = require("./573435.jsx"),
  Chunk545167 = require("./545167.js"),
  Chunk851580 = require("./851580.jsx"),
  Chunk222823 = require("./222823.js"),
  Chunk287809 = require("./287809.js"),
  Chunk371911 = require("./371911.jsx"),
  Chunk790782 = require("./790782.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk656678 = require("./656678.js");

function E(e) {
  let {
    onOpen: t,
    onClose: n,
    "data-jump-section": l
  } = e, E = (0, s.bG)([A.default], () => A.default.getCurrentUser()), O = i.useRef(null), y = (0, s.bG)([h.Ay], () => (null == E ? true : E.id) != null && h.Ay.getMentionCount(E.id, m.P.NOTIFICATION_CENTER) > 0), {
    titlebarIconSize: I,
    titlebarHoverHighlight: v
  } = (0, p.p)({
    location: "RecentsButton"
  }), S = "sm" === I ? "refresh_sm" : "md", C = i.useMemo(() => (0, r.jsx)(u.K$s, {
    size: S,
    color: "currentColor"
  }), [S]);
  return (0, r.jsx)(g.C, {
    targetElementRef: O,
    onOpen: t,
    onClose: n,
    badgeState: {
      badgeForYou: y
    },
    popoutPosition: "bottom",
    popoutAlign: "right",
    children: (e, t, n, i) => {
      var s, p;
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(c.m_, {
          targetElementRef: O,
          shouldShow: !t,
          text: b.intl.string(b.t.GSmTKJ),
          children: (0, r.jsx)(u.DUT, (s = function(e) {
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
            innerRef: O,
            onClick: e,
            "data-jump-section": l,
            "aria-label": b.intl.string(b.t.GSmTKJ),
            className: a()(_.vk, {
              [_.l9]: v
            }),
            children: y || i ? (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(d.Ay, {
                mask: d.Ay.Masks.HEADER_BAR_BADGE_BOTTOM,
                height: o.E[S],
                width: o.E[S],
                children: C
              }), (0, r.jsx)("span", {
                className: a()(_.qS, {
                  [_.mf]: "refresh_sm" === S
                })
              })]
            }) : C
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
        }), (0, r.jsx)(f.v, {
          location: "inbox-button",
          targetElementRef: O
        })]
      })
    }
  })
}