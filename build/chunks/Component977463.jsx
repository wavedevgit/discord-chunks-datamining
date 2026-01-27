/** Chunk was on web.js **/
/** chunk id: 977463, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => N
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk640708 = require("./640708.jsx"),
  Chunk941971 = require("./941971.jsx"),
  Chunk707539 = require("./707539.js"),
  Chunk576705 = require("./576705.js"),
  Chunk222823 = require("./222823.js"),
  Chunk340833 = require("./340833.jsx"),
  Chunk913642 = require("./913642.jsx"),
  Chunk661191 = require("./661191.js"),
  Chunk513272 = require("./513272.js"),
  Chunk798505 = require("./798505.jsx"),
  Chunk781605 = require("./781605.jsx"),
  Chunk870721 = require("./870721.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk670455 = require("./670455.js"),
  Chunk995255 = require("./995255.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      A(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function C(e) {
  let {
    summary: t,
    channel: f,
    members: y,
    guildId: A,
    unread: S,
    onClick: C
  } = e, [N, w] = i.useState(false), R = (0, u.aK)(h.default.extractTimestamp(t.startId)), P = (0, a.bG)([m.A], () => m.A.summaryFeedback(t)), D = (e, n) => {
    e.stopPropagation(), (0, g.A)({
      summary: t,
      channel: f,
      rating: n
    })
  }, L = d.A.can(b.xBc.MANAGE_MESSAGES, f), x = e => {
    L && (0, s.L3)(e, async () => {
      let {
        default: e
      } = await n.e("43921").then(n.bind(n, 304232));
      return n => (0, r.jsx)(e, T(I({}, n), {
        summary: t
      }))
    })
  };
  return (0, r.jsxs)(o.DUT, {
    className: v.kL,
    onClick: C,
    onContextMenu: x,
    onMouseEnter: () => w(true),
    onMouseLeave: () => w(false),
    children: [(0, r.jsx)(c.A, {
      hovered: N,
      unread: S,
      className: v.dM
    }), (0, r.jsx)("div", {
      className: v.uV,
      children: (0, r.jsxs)("div", {
        className: v.Hw,
        children: [(0, r.jsx)(o.Text, {
          className: v.vE,
          color: "interactive-text-default",
          variant: "text-xs/normal",
          children: R
        }), (0, r.jsx)(l.A, {
          height: 4,
          width: 4,
          "aria-hidden": "true",
          className: v.Om
        }), (0, r.jsx)(o.oyn, {
          size: "xxs",
          color: "currentColor",
          className: v.Kk
        }), (0, r.jsx)(o.Text, {
          className: v.U9,
          color: "interactive-text-default",
          variant: "text-xs/normal",
          children: t.count
        }), y.length > 0 && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(l.A, {
            height: 4,
            width: 4,
            "aria-hidden": "true",
            className: v.Om
          }), (0, r.jsx)(E.A, {
            partySize: {
              knownSize: y.length,
              totalSize: y.length
            },
            maxAvatarsShown: 3,
            members: y,
            guildId: A
          })]
        })]
      })
    }), N && !P && (0, r.jsxs)("div", {
      className: v.p_,
      children: [(0, r.jsx)(o.DUT, {
        onClick: e => D(e, O.P0.GOOD),
        children: (0, r.jsx)(_.A, {
          className: v.O1,
          width: 12,
          height: 12
        })
      }), (0, r.jsx)(o.DUT, {
        onClick: e => D(e, O.P0.BAD),
        children: (0, r.jsx)(p.A, {
          className: v.O1,
          width: 12,
          height: 12
        })
      })]
    }), (0, r.jsx)(o.Text, {
      color: "text-strong",
      variant: "text-sm/semibold",
      className: v.DD,
      children: t.topic
    }), (0, r.jsx)(o.Text, {
      color: "text-default",
      variant: "text-sm/normal",
      className: v.VA,
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
  } = e, c = (0, a.bG)([f.Ay], () => f.Ay.getOldestUnreadMessageId(o.id)), u = i.useCallback(e => {
    s(e), l(false)
  }, [s, l]);
  return t.length < 1 ? (0, r.jsx)(y.A, {}) : (0, r.jsx)(r.Fragment, {
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