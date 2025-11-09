/** Chunk was on web.js **/
/** chunk id: 505953, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk79712 = require("./79712.jsx"),
  Chunk276952 = require("./276952.jsx"),
  Chunk91159 = require("./91159.js"),
  Chunk496675 = require("./496675.js"),
  Chunk306680 = require("./306680.js"),
  Chunk446183 = require("./446183.jsx"),
  Chunk677281 = require("./677281.jsx"),
  Chunk709054 = require("./709054.js"),
  Chunk765104 = require("./765104.js"),
  Chunk477291 = require("./477291.jsx"),
  Chunk478758 = require("./478758.jsx"),
  Chunk789707 = require("./789707.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk531578 = require("./531578.js"),
  Chunk179078 = require("./179078.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function C(e) {
  let {
    summary: t,
    channel: f,
    members: b,
    guildId: I,
    unread: T,
    onClick: C
  } = e, [N, R] = i.useState(false), P = (0, u.Ye)(h.default.extractTimestamp(t.startId)), w = (0, a.e7)([m.Z], () => m.Z.summaryFeedback(t)), D = (e, n) => {
    e.stopPropagation(), (0, g.Z)({
      summary: t,
      channel: f,
      rating: n
    })
  }, x = d.Z.can(y.Plq.MANAGE_MESSAGES, f), L = e => {
    x && (0, s.jW)(e, async () => {
      let {
        default: e
      } = await n.e("12891").then(n.bind(n, 519620));
      return n => (0, r.jsx)(e, A(S({}, n), {
        summary: t
      }))
    })
  };
  return (0, r.jsxs)(o.P3F, {
    className: v.container,
    onClick: C,
    onContextMenu: L,
    onMouseEnter: () => R(true),
    onMouseLeave: () => R(false),
    children: [(0, r.jsx)(c.Z, {
      hovered: N,
      unread: T,
      className: v.unreadPill
    }), (0, r.jsx)("div", {
      className: v.rowHeader,
      children: (0, r.jsxs)("div", {
        className: v.rowHeaderLeft,
        children: [(0, r.jsx)(o.Text, {
          className: v.timestamp,
          color: "interactive-normal",
          variant: "text-xs/normal",
          children: P
        }), (0, r.jsx)(l.Z, {
          height: 4,
          width: 4,
          "aria-hidden": "true",
          className: v.dot
        }), (0, r.jsx)(o.kBi, {
          size: "xxs",
          color: "currentColor",
          className: v.icon
        }), (0, r.jsx)(o.Text, {
          className: v.count,
          color: "interactive-normal",
          variant: "text-xs/normal",
          children: t.count
        }), b.length > 0 && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(l.Z, {
            height: 4,
            width: 4,
            "aria-hidden": "true",
            className: v.dot
          }), (0, r.jsx)(E.Z, {
            partySize: {
              knownSize: b.length,
              totalSize: b.length
            },
            maxAvatarsShown: 3,
            members: b,
            guildId: I
          })]
        })]
      })
    }), N && !w && (0, r.jsxs)("div", {
      className: v.feedbackContainer,
      children: [(0, r.jsx)(o.P3F, {
        onClick: e => D(e, O.aZ.GOOD),
        children: (0, r.jsx)(p.Z, {
          className: v.thumbIcon,
          width: 12,
          height: 12
        })
      }), (0, r.jsx)(o.P3F, {
        onClick: e => D(e, O.aZ.BAD),
        children: (0, r.jsx)(_.Z, {
          className: v.thumbIcon,
          width: 12,
          height: 12
        })
      })]
    }), (0, r.jsx)(o.Text, {
      color: "header-primary",
      variant: "text-sm/semibold",
      className: v.title,
      children: t.topic
    }), (0, r.jsx)(o.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: v.subtitle,
      children: t.summShort
    })]
  })
}

function N(e) {
  let {
    summaries: t,
    summariesMembers: n,
    channel: o,
    selectTopic: s,
    setOpen: l
  } = e, c = (0, a.e7)([f.ZP], () => f.ZP.getOldestUnreadMessageId(o.id)), u = i.useCallback(e => {
    s(e), l(false)
  }, [s, l]);
  return t.length < 1 ? (0, r.jsx)(b.Z, {}) : (0, r.jsx)(r.Fragment, {
    children: t.map((e, t) => {
      var i;
      let a = null != (i = n[t]) ? i : [];
      return (0, r.jsx)(C, {
        summary: e,
        channel: o,
        members: a,
        guildId: o.guild_id,
        unread: null != c && h.default.compare(e.endId, c) > 0,
        onClick: () => u(t)
      }, t)
    })
  })
}