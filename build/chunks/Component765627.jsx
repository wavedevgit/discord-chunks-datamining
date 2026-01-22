/** Chunk was on 97492 **/
/** chunk id: 765627, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk417597 = require("./417597.js"),
  Chunk873298 = require("./873298.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk835835 = require("./835835.jsx"),
  Chunk966597 = require("./966597.js"),
  Chunk85109 = require("./85109.js"),
  Chunk566908 = require("./566908.js"),
  Chunk646468 = require("./646468.jsx"),
  Chunk790368 = require("./790368.jsx"),
  Chunk435084 = require("./435084.jsx"),
  Chunk412484 = require("./412484.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk655967 = require("./655967.js");

function A(e) {
  let {
    tab: t,
    setTab: n,
    badgeState: f,
    closePopout: h
  } = e, {
    enabled: b,
    inInbox: A
  } = c.A.useExperiment({
    location: "RecentsPopout"
  }), O = (0, d.Sc)({
    location: "RecentsHeader"
  }), j = (0, l.bG)([u.A], () => u.A.getOverdueMessageReminderCount());
  return (0, r.jsxs)(o.Y9, {
    className: m.wx,
    children: [(0, r.jsxs)("div", {
      className: m.qd,
      children: [(0, r.jsx)(s.K$s, {
        size: "md",
        color: "currentColor",
        className: m.yH
      }), (0, r.jsx)(s.Heading, {
        className: m.Hi,
        variant: "text-lg/semibold",
        color: "interactive-text-active",
        children: g.intl.string(g.t.GSmTKJ)
      }), (0, r.jsxs)(s.sqX, {
        className: m.ne,
        onClick: e => e.stopPropagation(),
        focusProps: {
          enabled: false
        },
        "aria-label": g.intl.string(g.t["8k+6QY"]),
        children: [(0, r.jsx)(y, {
          tab: t
        }), (0, r.jsx)(p.A, {
          closePopout: h
        })]
      })]
    }), (0, r.jsx)("div", {
      className: m.YF,
      children: (0, r.jsxs)(s.VQ0, {
        selectedItem: t,
        type: "top",
        look: "brand",
        onItemSelect: n,
        className: m.$H,
        children: [(0, r.jsxs)(s.VQ0.Item, {
          id: i.Y2.FOR_YOU,
          "aria-label": g.intl.string(g.t["En+D+u"]),
          className: m.Mf,
          children: [g.intl.string(g.t["En+D+u"]), (null == f ? true : f.badgeForYou) ? (0, r.jsx)(s.SC0, {
            color: a.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
            className: m.bG
          }) : null]
        }), (0, r.jsx)(s.VQ0.Item, {
          id: i.Y2.UNREADS,
          className: m.Mf,
          children: g.intl.string(g.t.sRUdB8)
        }), (0, r.jsx)(s.VQ0.Item, {
          "aria-label": g.intl.string(g.t.GRZF96),
          id: i.Y2.MENTIONS,
          className: m.Mf,
          children: g.intl.string(g.t.GRZF96)
        }), b && A ? (0, r.jsx)(s.VQ0.Item, {
          "aria-label": g.intl.string(g.t["2pAkDA"]),
          id: i.Y2.BOOKMARKS,
          className: m.Mf,
          children: 0 === j ? g.intl.string(g.t["2pAkDA"]) : g.intl.formatToPlainString(g.t.I4fryG, {
            count: j
          })
        }) : null, O ? (0, r.jsx)(s.VQ0.Item, {
          "aria-label": "scheduled",
          id: i.Y2.SCHEDULED,
          className: m.Mf,
          children: g.intl.string(g.t.Fn6Odn)
        }) : null]
      })
    })]
  })
}

function y(e) {
  let {
    tab: t
  } = e;
  return t === i.Y2.FOR_YOU ? (0, r.jsx)(f.xc, {}) : t === i.Y2.UNREADS ? (0, r.jsx)(b.NH, {}) : t === i.Y2.MENTIONS ? (0, r.jsx)(h.A, {}) : null
}