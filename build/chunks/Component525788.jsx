/** Chunk was on web.js **/
/** chunk id: 525788, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => L
}), require("./65821.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk451988 = require("./451988.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk820284 = require("./820284.jsx"),
  Chunk942857 = require("./942857.js"),
  Chunk538451 = require("./538451.jsx"),
  Chunk616356 = require("./616356.js"),
  Chunk287809 = require("./287809.js"),
  Chunk403362 = require("./403362.js"),
  Chunk562153 = require("./562153.js"),
  Chunk806931 = require("./806931.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk405434 = require("./405434.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      S(e, t, n[t])
    })
  }
  return e
}

function C(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let R = 150;

function w(e, t) {
  switch (e) {
    case O.lp.ACTIVITY:
      return A.intl.formatToPlainString(A.t.TCM94S, {
        numUsers: t
      });
    case O.lp.STREAM:
      return A.intl.formatToPlainString(A.t.BR7Tno, {
        numViewers: t
      });
    default:
      throw Error("Unknown participant type.")
  }
}

function P(e) {
  let {
    users: t,
    disableInteraction: n,
    guildId: i,
    participantType: a,
    channelId: o,
    handleUserContextMenu: l
  } = e, c = w(a, t.length);
  return (0, r.jsx)(f.lGe, {
    "aria-label": c,
    className: I.XM,
    children: (0, r.jsxs)(f.HOs, {
      className: I.XG,
      children: [(0, r.jsx)(f.Heading, {
        variant: "heading-deprecated-12/semibold",
        className: I.o,
        children: c
      }), (0, r.jsx)("div", {
        children: t.map(e => (0, r.jsx)(m.A, {
          user: e,
          guildId: null != i ? i : true,
          channelId: o,
          nick: b.Ay.getNickname(i, o, e),
          className: s()(I.kp, {
            [I.YR]: n
          }),
          textClassName: I.vc,
          disablePopout: n,
          onContextMenu: t => n ? null : l(t, e)
        }, e.id))
      })]
    })
  })
}

function D(e) {
  let {
    users: t,
    guildId: n,
    channelId: i,
    maxVisibleUsers: a = 3,
    className: o,
    participantType: l
  } = e, c = w(l, t.length), u = t.length < a ? A.intl.format(A.t["A+bT9O"], {
    users: t.length,
    user1: b.Ay.getName(n, i, t[0]),
    user2: b.Ay.getName(n, i, t[1]),
    commaSeparatedUsers: t.slice(0, t.length - 1).map(e => b.Ay.getName(n, i, e)).join(", "),
    lastUser: b.Ay.getName(n, i, t[t.length - 1])
  }) : c;
  return (0, r.jsx)(d.m_, {
    text: u,
    children: (0, r.jsxs)("div", {
      className: s()(I.Mj, o),
      children: [(0, r.jsx)(f.bMW, {
        size: "xs",
        color: "currentColor",
        className: I.N0
      }), (0, r.jsx)("span", {
        "aria-hidden": "true",
        children: t.length
      })]
    })
  })
}
let x = [];

function L(e) {
  let {
    channelId: t,
    guildId: a,
    participant: o,
    className: d,
    compact: m = false,
    disableInteraction: b = false,
    maxVisibleUsers: A = 3
  } = e, S = i.useRef(null), C = (0, h.A)(), [w, L] = i.useState(false), j = i.useRef(new u.J_(R, () => L(false))), M = (0, c.yK)([g.A, E.default], () => {
    if (o.type === O.lp.STREAM) {
      let e = g.A.getViewerIds(o.id);
      return e.length > 0 ? e.map(e => E.default.getUser(e)).filter(y.Vq) : x
    }
    return o.type === O.lp.ACTIVITY && o.participants.length > 0 ? Array.from(o.participants).map(e => E.default.getUser(e.userId)).filter(y.Vq) : x
  }, [o]);
  i.useEffect(() => {
    C && (j.current.cancel(), L(false))
  }, [C]);
  let k = i.useCallback(() => {
      j.current.cancel(), L(true)
    }, []),
    U = i.useCallback(() => {
      j.current.delay()
    }, []),
    G = i.useCallback((e, t) => {
      k(), (0, p.L3)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("97262"), n.e("32418"), n.e("8893")]).then(n.bind(n, 668569));
        return n => (0, r.jsx)(e, N(T({}, n), {
          user: t
        }))
      }, {
        onClose: U
      })
    }, [U, k]);
  if (0 === M.length) return null;
  if (m) return (0, r.jsx)(D, {
    maxVisibleUsers: A,
    users: M,
    guildId: a,
    channelId: t,
    className: d,
    participantType: o.type
  });
  let V = l()(M).take(A).map(e => (0, r.jsx)(f.euF, {
    src: e.getAvatarURL(a, 24),
    "aria-label": e.username,
    size: f._3J.SIZE_24,
    className: I.lJ
  }, e.id)).value();
  return M.length > A && (V[V.length - 1] = (0, r.jsxs)("div", {
    className: I.ju,
    children: ["+", M.length - A + 1]
  }, "overflow")), (0, r.jsx)(_.A, {
    section: v.JJy.STREAM_VIEWER_POPOUT,
    children: (0, r.jsx)("div", {
      onMouseEnter: k,
      onMouseLeave: U,
      children: (0, r.jsx)(f.YNO, {
        targetElementRef: S,
        renderPopout: () => (0, r.jsx)(P, {
          participantType: o.type,
          handleUserContextMenu: G,
          guildId: a,
          channelId: t,
          users: M,
          disableInteraction: b
        }),
        shouldShow: w && !C,
        position: "top",
        children: () => (0, r.jsx)("div", {
          ref: S,
          className: s()(I.Mj, d),
          children: V
        })
      })
    })
  })
}