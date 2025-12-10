/** Chunk was on web.js **/
/** chunk id: 221888, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => L
}), require("./415506.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk350810 = require("./350810.js"),
  Chunk751688 = require("./751688.jsx"),
  Chunk199902 = require("./199902.js"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk5192 = require("./5192.js"),
  Chunk354459 = require("./354459.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk238377 = require("./238377.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let P = 150;

function R(e, t) {
  switch (e) {
    case O.fO.ACTIVITY:
      return S.intl.formatToPlainString(S.t.TCM94S, {
        numUsers: t
      });
    case O.fO.STREAM:
      return S.intl.formatToPlainString(S.t.BR7Tno, {
        numViewers: t
      });
    default:
      throw Error("Unknown participant type.")
  }
}

function w(e) {
  let {
    users: t,
    disableInteraction: n,
    guildId: i,
    participantType: a,
    channelId: s,
    handleUserContextMenu: l
  } = e, c = R(a, t.length);
  return (0, r.jsx)(f.VqE, {
    "aria-label": c,
    className: I.popoutWrapper,
    children: (0, r.jsxs)(f.Ttm, {
      className: I.scroller,
      children: [(0, r.jsx)(f.Heading, {
        variant: "heading-deprecated-12/semibold",
        className: I.memberListHeader,
        children: c
      }), (0, r.jsx)("div", {
        children: t.map(e => (0, r.jsx)(h.Z, {
          user: e,
          guildId: null != i ? i : true,
          channelId: s,
          nick: y.ZP.getNickname(i, s, e),
          className: o()(I.memberListItem, {
            [I.popoutDisabled]: n
          }),
          textClassName: I.memberListItemText,
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
    className: s,
    participantType: l
  } = e, c = R(l, t.length), u = t.length < a ? S.intl.format(S.t["A+bT9O"], {
    users: t.length,
    user1: y.ZP.getName(n, i, t[0]),
    user2: y.ZP.getName(n, i, t[1]),
    commaSeparatedUsers: t.slice(0, t.length - 1).map(e => y.ZP.getName(n, i, e)).join(", "),
    lastUser: y.ZP.getName(n, i, t[t.length - 1])
  }) : c;
  return (0, r.jsx)(d.u, {
    text: u,
    children: (0, r.jsxs)("div", {
      className: o()(I.viewers, s),
      children: [(0, r.jsx)(f.tEF, {
        size: "xs",
        color: "currentColor",
        className: I.viewersIcon
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
    participant: s,
    className: d,
    compact: h = false,
    disableInteraction: y = false,
    maxVisibleUsers: S = 3
  } = e, T = i.useRef(null), A = (0, m.Z)(), [R, L] = i.useState(false), j = i.useRef(new u.sW(P, () => L(false))), M = (0, c.Wu)([g.Z, E.default], () => {
    if (s.type === O.fO.STREAM) {
      let e = g.Z.getViewerIds(s.id);
      return e.length > 0 ? e.map(e => E.default.getUser(e)).filter(b.lm) : x
    }
    return s.type === O.fO.ACTIVITY && s.participants.length > 0 ? Array.from(s.participants).map(e => E.default.getUser(e.userId)).filter(b.lm) : x
  }, [s]);
  i.useEffect(() => {
    A && (j.current.cancel(), L(false))
  }, [A]);
  let k = i.useCallback(() => {
      j.current.cancel(), L(true)
    }, []),
    U = i.useCallback(() => {
      j.current.delay()
    }, []),
    G = i.useCallback((e, t) => {
      k(), (0, p.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("69220"), n.e("77635")]).then(n.bind(n, 881351));
        return n => (0, r.jsx)(e, N(C({}, n), {
          user: t
        }))
      }, {
        onClose: U
      })
    }, [U, k]);
  if (0 === M.length) return null;
  if (h) return (0, r.jsx)(D, {
    maxVisibleUsers: S,
    users: M,
    guildId: a,
    channelId: t,
    className: d,
    participantType: s.type
  });
  let Z = l()(M).take(S).map(e => (0, r.jsx)(f.qEK, {
    src: e.getAvatarURL(a, 24),
    "aria-label": e.username,
    size: f.EFr.SIZE_24,
    className: I.viewer
  }, e.id)).value();
  return M.length > S && (Z[Z.length - 1] = (0, r.jsxs)("div", {
    className: I.overflow,
    children: ["+", M.length - S + 1]
  }, "overflow")), (0, r.jsx)(_.Z, {
    section: v.jXE.STREAM_VIEWER_POPOUT,
    children: (0, r.jsx)("div", {
      onMouseEnter: k,
      onMouseLeave: U,
      children: (0, r.jsx)(f.yRy, {
        targetElementRef: T,
        renderPopout: () => (0, r.jsx)(w, {
          participantType: s.type,
          handleUserContextMenu: G,
          guildId: a,
          channelId: t,
          users: M,
          disableInteraction: y
        }),
        shouldShow: R && !A,
        position: "top",
        children: () => (0, r.jsx)("div", {
          ref: T,
          className: o()(I.viewers, d),
          children: Z
        })
      })
    })
  })
}