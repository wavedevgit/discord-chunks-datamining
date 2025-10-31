/** Chunk was on web.js **/
/** chunk id: 221888, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./415506.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
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

function S(e) {
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

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let N = 150;

function R(e, t) {
  switch (e) {
    case y.fO.ACTIVITY:
      return v.intl.formatToPlainString(v.t.TCM94S, {
        numUsers: t
      });
    case y.fO.STREAM:
      return v.intl.formatToPlainString(v.t.BR7Tno, {
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
    channelId: s,
    handleUserContextMenu: l
  } = e, c = R(a, t.length);
  return (0, r.jsx)(d.VqE, {
    "aria-label": c,
    className: I.popoutWrapper,
    children: (0, r.jsxs)(d.Ttm, {
      className: I.scroller,
      children: [(0, r.jsx)(d.Heading, {
        variant: "heading-deprecated-12/semibold",
        className: I.memberListHeader,
        children: c
      }), (0, r.jsx)("div", {
        children: t.map(e => (0, r.jsx)(h.Z, {
          user: e,
          guildId: null != i ? i : true,
          channelId: s,
          nick: b.ZP.getNickname(i, s, e),
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

function w(e) {
  let {
    users: t,
    guildId: n,
    channelId: i,
    maxVisibleUsers: a = 3,
    className: s,
    participantType: l
  } = e, c = R(l, t.length), u = t.length < a ? t.map(e => (0, r.jsx)("div", {
    className: I.viewersTooltipItem,
    children: b.ZP.getName(n, i, e)
  }, e.id)) : c;
  return (0, r.jsx)(d.jSM, {
    text: u,
    "aria-label": c,
    children: (0, r.jsxs)("div", {
      className: o()(I.viewers, s),
      children: [(0, r.jsx)(d.tEF, {
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
let D = [];

function x(e) {
  let {
    channelId: t,
    guildId: a,
    participant: s,
    className: h,
    compact: b = false,
    disableInteraction: v = false,
    maxVisibleUsers: T = 3
  } = e, A = i.useRef(null), R = (0, p.Z)(), [x, L] = i.useState(false), M = i.useRef(new u.sW(N, () => L(false))), k = (0, c.Wu)([m.Z, g.default], () => {
    if (s.type === y.fO.STREAM) {
      let e = m.Z.getViewerIds(s.id);
      return e.length > 0 ? e.map(e => g.default.getUser(e)).filter(E.lm) : D
    }
    return s.type === y.fO.ACTIVITY && s.participants.length > 0 ? Array.from(s.participants).map(e => g.default.getUser(e.userId)).filter(E.lm) : D
  }, [s]);
  i.useEffect(() => {
    R && (M.current.cancel(), L(false))
  }, [R]);
  let j = i.useCallback(() => {
      M.current.cancel(), L(true)
    }, []),
    U = i.useCallback(() => {
      M.current.delay()
    }, []),
    G = i.useCallback((e, t) => {
      j(), (0, f.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("69220")]).then(n.bind(n, 881351));
        return n => (0, r.jsx)(e, C(S({}, n), {
          user: t
        }))
      }, {
        onClose: U
      })
    }, [U, j]);
  if (0 === k.length) return null;
  if (b) return (0, r.jsx)(w, {
    maxVisibleUsers: T,
    users: k,
    guildId: a,
    channelId: t,
    className: h,
    participantType: s.type
  });
  let B = l()(k).take(T).map(e => (0, r.jsx)(d.qEK, {
    src: e.getAvatarURL(a, 24),
    "aria-label": e.username,
    size: d.EFr.SIZE_24,
    className: I.viewer
  }, e.id)).value();
  return k.length > T && (B[B.length - 1] = (0, r.jsxs)("div", {
    className: I.overflow,
    children: ["+", k.length - T + 1]
  }, "overflow")), (0, r.jsx)(_.Z, {
    section: O.jXE.STREAM_VIEWER_POPOUT,
    children: (0, r.jsx)("div", {
      onMouseEnter: j,
      onMouseLeave: U,
      children: (0, r.jsx)(d.yRy, {
        targetElementRef: A,
        renderPopout: () => (0, r.jsx)(P, {
          participantType: s.type,
          handleUserContextMenu: G,
          guildId: a,
          channelId: t,
          users: k,
          disableInteraction: v
        }),
        shouldShow: x && !R,
        position: "top",
        children: () => (0, r.jsx)("div", {
          ref: A,
          className: o()(I.viewers, h),
          children: B
        })
      })
    })
  })
}