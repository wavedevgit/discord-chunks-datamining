/** Chunk was on 97492 **/
/** chunk id: 637384, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk432022 = require("./432022.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk922529 = require("./922529.jsx"),
  Chunk340833 = require("./340833.jsx"),
  Chunk913642 = require("./913642.jsx"),
  Chunk513272 = require("./513272.js"),
  Chunk798505 = require("./798505.jsx"),
  Chunk670455 = require("./670455.js"),
  Chunk381941 = require("./381941.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk112178 = require("./112178.js");

function A(e) {
  let {
    summary: t,
    channel: n
  } = e, l = (0, s.bG)([f.A], () => f.A.summaryFeedback(t)), i = (e, r) => {
    e.stopPropagation(), (0, p.A)({
      summary: t,
      channel: n,
      rating: r
    })
  }, c = (0, o.pnh)(null == l, {
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
      className: m.RD,
      children: (0, r.jsxs)(a.animated.div, {
        style: e,
        className: m.GK,
        children: [(0, r.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "interactive-text-default",
          children: g.intl.string(g.t["5ZsiE9"])
        }), (0, r.jsx)(o.DUT, {
          onClick: e => i(e, h.P0.GOOD),
          children: (0, r.jsx)(d.A, {
            className: m.O1,
            width: 12,
            height: 12
          })
        }), (0, r.jsx)(o.DUT, {
          onClick: e => i(e, h.P0.BAD),
          children: (0, r.jsx)(u.A, {
            className: m.O1,
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
  let l, {
      item: a,
      channel: u,
      index: d
    } = e,
    p = (0, s.bG)([f.A], () => f.A.selectedSummary(u.id));
  if (null == p) return null;
  let h = null != a.unreadId,
    g = null != a.content;
  return l = g ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.Kck, {
      size: "xs",
      color: "currentColor",
      className: m.cR
    }), a.content]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(A, {
      summary: p,
      channel: u
    }), (0, r.jsx)(o.Kck, {
      size: "xs",
      color: "currentColor",
      className: m.Jq
    })]
  }), (0, r.jsx)(c.A, {
    className: i()(m.aK, g ? m.Ke : m.hO),
    contentClassName: g ? m.Ew : m.rD,
    isUnread: h,
    id: h ? b.q4 : true,
    children: l
  }, "divider-".concat(null != (t = null != (n = a.contentKey) ? n : a.unreadId) ? t : d))
}