/** Chunk was on 61344 **/
/** chunk id: 637384, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk92674 = require("./92674.js"),
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

function b(e) {
  let {
    summary: t,
    channel: n
  } = e, r = (0, s.bG)([h.A], () => h.A.summaryFeedback(t)), i = (e, l) => {
    e.stopPropagation(), (0, p.A)({
      summary: t,
      channel: n,
      rating: l
    })
  }, c = (0, o.pnh)(null == r, {
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
  return (0, l.jsx)(l.Fragment, {
    children: c((e, t) => t ? (0, l.jsx)("div", {
      className: A.RD,
      children: (0, l.jsxs)(a.animated.div, {
        style: e,
        className: A.GK,
        children: [(0, l.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "interactive-text-default",
          children: g.intl.string(g.t["5ZsiE9"])
        }), (0, l.jsx)(o.DUT, {
          onClick: e => i(e, f.P0.GOOD),
          children: (0, l.jsx)(d.A, {
            className: A.O1,
            width: 12,
            height: 12
          })
        }), (0, l.jsx)(o.DUT, {
          onClick: e => i(e, f.P0.BAD),
          children: (0, l.jsx)(u.A, {
            className: A.O1,
            width: 12,
            height: 12
          })
        })]
      })
    }) : null)
  })
}

function _(e) {
  var t, n;
  let r, {
      item: a,
      channel: u,
      index: d
    } = e,
    p = (0, s.bG)([h.A], () => h.A.selectedSummary(u.id));
  if (null == p) return null;
  let f = null != a.unreadId,
    g = null != a.content;
  return r = g ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(o.Kck, {
      size: "xs",
      color: "currentColor",
      className: A.cR
    }), a.content]
  }) : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(b, {
      summary: p,
      channel: u
    }), (0, l.jsx)(o.Kck, {
      size: "xs",
      color: "currentColor",
      className: A.Jq
    })]
  }), (0, l.jsx)(c.A, {
    className: i()(A.aK, g ? A.Ke : A.hO),
    contentClassName: g ? A.Ew : A.rD,
    isUnread: f,
    id: f ? m.q4 : true,
    children: r
  }, "divider-".concat(null != (t = null != (n = a.contentKey) ? n : a.unreadId) ? t : d))
}