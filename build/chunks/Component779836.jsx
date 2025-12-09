/** Chunk was on 34740 **/
/** chunk id: 779836, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk205120 = require("./205120.js"),
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
  Chunk363350 = require("./363350.js");

function y(e) {
  let {
    summary: t,
    channel: n
  } = e, r = (0, o.e7)([p.Z], () => p.Z.summaryFeedback(t)), l = (e, i) => {
    e.stopPropagation(), (0, h.Z)({
      summary: t,
      channel: n,
      rating: i
    })
  }, c = (0, s.Yzy)(null == r, {
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
  return (0, i.jsx)(i.Fragment, {
    children: c((e, t) => t ? (0, i.jsx)("div", {
      className: b.summaryFeedbackWrapper,
      children: (0, i.jsxs)(a.animated.div, {
        style: e,
        className: b.summaryFeedback,
        children: [(0, i.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "interactive-normal",
          children: g.intl.string(g.t["5ZsiE9"])
        }), (0, i.jsx)(s.P3F, {
          onClick: e => l(e, f.aZ.GOOD),
          children: (0, i.jsx)(d.Z, {
            className: b.thumbIcon,
            width: 12,
            height: 12
          })
        }), (0, i.jsx)(s.P3F, {
          onClick: e => l(e, f.aZ.BAD),
          children: (0, i.jsx)(u.Z, {
            className: b.thumbIcon,
            width: 12,
            height: 12
          })
        })]
      })
    }) : null)
  })
}

function C(e) {
  var t, n;
  let r, {
      item: a,
      channel: u,
      index: d
    } = e,
    h = (0, o.e7)([p.Z], () => p.Z.selectedSummary(u.id));
  if (null == h) return null;
  let f = null != a.unreadId,
    g = null != a.content;
  return r = g ? (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(s.sVe, {
      size: "xs",
      color: "currentColor",
      className: b.summaryStartIcon
    }), a.content]
  }) : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(y, {
      summary: h,
      channel: u
    }), (0, i.jsx)(s.sVe, {
      size: "xs",
      color: "currentColor",
      className: b.summaryEndIcon
    })]
  }), (0, i.jsx)(c.Z, {
    className: l()(b.summaryDivider, g ? b.summaryDividerStart : b.summaryDividerEnd),
    contentClassName: g ? b.summaryStartContent : b.summaryEndContent,
    isUnread: f,
    id: f ? m.j1 : true,
    children: r
  }, "divider-".concat(null != (n = null != (t = a.contentKey) ? t : a.unreadId) ? n : d))
}