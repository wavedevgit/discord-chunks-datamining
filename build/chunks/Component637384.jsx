/** Chunk was on 1113 **/
/** chunk id: 637384, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk970984 = require("./970984.js"),
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
  } = e, l = (0, a.bG)([h.A], () => h.A.summaryFeedback(t)), i = (e, r) => {
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
      className: b.RD,
      children: (0, r.jsxs)(s.animated.div, {
        style: e,
        className: b.GK,
        children: [(0, r.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "interactive-text-default",
          children: m.intl.string(m.t["5ZsiE9"])
        }), (0, r.jsx)(o.DUT, {
          onClick: e => i(e, g.P0.GOOD),
          children: (0, r.jsx)(d.A, {
            className: b.O1,
            width: 12,
            height: 12
          })
        }), (0, r.jsx)(o.DUT, {
          onClick: e => i(e, g.P0.BAD),
          children: (0, r.jsx)(u.A, {
            className: b.O1,
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
      item: s,
      channel: u,
      index: d
    } = e,
    p = (0, a.bG)([h.A], () => h.A.selectedSummary(u.id));
  if (null == p) return null;
  let g = null != s.unreadId,
    m = null != s.content;
  return l = m ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.Kck, {
      size: "xs",
      color: "currentColor",
      className: b.cR
    }), s.content]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(A, {
      summary: p,
      channel: u
    }), (0, r.jsx)(o.Kck, {
      size: "xs",
      color: "currentColor",
      className: b.Jq
    })]
  }), (0, r.jsx)(c.A, {
    className: i()(b.aK, m ? b.Ke : b.hO),
    contentClassName: m ? b.Ew : b.rD,
    isUnread: g,
    id: g ? f.q4 : true,
    children: l
  }, "divider-".concat(null != (t = null != (n = s.contentKey) ? n : s.unreadId) ? t : d))
}