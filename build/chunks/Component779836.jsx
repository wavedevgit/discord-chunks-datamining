/** Chunk was on 13873 **/
/** chunk id: 779836, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk13941 = require("./13941.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk511010 = require("./511010.jsx"),
  Chunk446183 = require("./446183.jsx"),
  Chunk677281 = require("./677281.jsx"),
  Chunk765104 = require("./765104.js"),
  Chunk477291 = require("./477291.jsx"),
  Chunk531578 = require("./531578.js"),
  Chunk959517 = require("./959517.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk339060 = require("./339060.js");

function _(e) {
  let {
    summary: t,
    channel: n
  } = e, i = (0, o.e7)([p.Z], () => p.Z.summaryFeedback(t)), l = (e, r) => {
    e.stopPropagation(), (0, f.Z)({
      summary: t,
      channel: n,
      rating: r
    })
  }, c = (0, s.Yzy)(null == i, {
    enter: {
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      }
    },
    leave: {
      opacity: 0
    },
    config: {
      mass: 1,
      tension: 500,
      friction: 18,
      clamp: true
    }
  }, "animate-always");
  return (0, r.jsx)(r.Fragment, {
    children: c((e, t) => t ? (0, r.jsx)("div", {
      className: b.summaryFeedbackWrapper,
      children: (0, r.jsxs)(a.animated.div, {
        style: e,
        className: b.summaryFeedback,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "interactive-normal",
          children: g.intl.string(g.t["5ZsiE9"])
        }), (0, r.jsx)(s.P3F, {
          onClick: e => l(e, h.aZ.GOOD),
          children: (0, r.jsx)(d.Z, {
            className: b.thumbIcon,
            width: 12,
            height: 12
          })
        }), (0, r.jsx)(s.P3F, {
          onClick: e => l(e, h.aZ.BAD),
          children: (0, r.jsx)(u.Z, {
            className: b.thumbIcon,
            width: 12,
            height: 12
          })
        })]
      })
    }) : null)
  })
}

function y(e) {
  var t, n;
  let i, {
      item: a,
      channel: u,
      index: d
    } = e,
    f = (0, o.e7)([p.Z], () => p.Z.selectedSummary(u.id));
  if (null == f) return null;
  let h = null != a.unreadId,
    g = null != a.content;
  return i = g ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.sVe, {
      size: "xs",
      color: "currentColor",
      className: b.summaryStartIcon
    }), a.content]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(_, {
      summary: f,
      channel: u
    }), (0, r.jsx)(s.sVe, {
      size: "xs",
      color: "currentColor",
      className: b.summaryEndIcon
    })]
  }), (0, r.jsx)(c.Z, {
    className: l()(b.summaryDivider, g ? b.summaryDividerStart : b.summaryDividerEnd),
    contentClassName: g ? b.summaryStartContent : b.summaryEndContent,
    isUnread: h,
    id: h ? m.j1 : true,
    children: i
  }, "divider-".concat(null != (n = null != (t = a.contentKey) ? t : a.unreadId) ? n : d))
}