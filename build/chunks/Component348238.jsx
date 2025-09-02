/** Chunk was on web.js **/
/** chunk id: 348238, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $3: () => z,
  Go: () => Y,
  JC: () => M,
  NU: () => B,
  Nk: () => j,
  R9: () => U,
  RN: () => V,
  Wl: () => L,
  XO: () => x,
  Xn: () => q,
  bb: () => K,
  qo: () => Z,
  rY: () => G,
  sR: () => H,
  tn: () => W,
  wq: () => F
}), require("./997841.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk239091 = require("./239091.js"),
  Chunk904245 = require("./904245.js"),
  Chunk144144 = require("./144144.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk407477 = require("./407477.js"),
  Chunk992970 = require("./992970.js"),
  Chunk287941 = require("./287941.js"),
  Chunk235894 = require("./235894.js"),
  Chunk675478 = require("./675478.js"),
  Chunk592125 = require("./592125.js"),
  Chunk323873 = require("./323873.js"),
  Chunk375954 = require("./375954.js"),
  Chunk594174 = require("./594174.js"),
  Chunk585483 = require("./585483.js"),
  Chunk5967 = require("./5967.js"),
  Chunk630388 = require("./630388.js"),
  Chunk358085 = require("./358085.js"),
  Chunk51144 = require("./51144.js"),
  Chunk91047 = require("./91047.jsx"),
  Chunk50284 = require("./50284.js"),
  Chunk804063 = require("./804063.js"),
  Chunk981631 = require("./981631.js");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      C(e, t, n[t])
    })
  }
  return e
}

function R(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function w(e, t, n) {
  return i.useCallback(() => {
    n({
      [e]: !t
    })
  }, [e, n, t])
}

function D(e, t, n) {
  return i.useCallback(r => {
    let i = g.default.getUser(e);
    if (null == i) return;
    if (r.preventDefault(), r.stopPropagation(), !r.shiftKey) return void n();
    let a = "@".concat(v.ZP.getUserTag(i, {
        decoration: "never"
      })),
      o = "<@".concat(e, ">");
    E.S.dispatchToLastSubscribed(A.CkL.INSERT_TEXT, {
      plainText: a,
      rawText: o
    }), s.Z.startTyping(t)
  }, [e, t, n])
}

function x(e, t, n, r) {
  let i = w("usernameProfile", n, r);
  return D(e.author.id, t.id, i)
}

function L(e, t, n, r) {
  let i = w("referencedUsernameProfile", n, r);
  return D(null == e ? true : e.author.id, t.id, i)
}

function j(e, t, n, r) {
  let i = w("interactionUsernameProfile", n, r);
  return D(null == e ? true : e.user.id, t.id, i)
}

function M(e, t, n, r) {
  let i = w("referencedUsernameProfile", n, r);
  return D(e, t.id, i)
}

function k(e) {
  return i.useCallback(t => {
    t.preventDefault(), t.stopPropagation(), e()
  }, [e])
}

function U(e, t) {
  return k(w("avatarProfile", e, t))
}

function G(e, t) {
  return k(w("referencedAvatarProfile", e, t))
}

function B(e, t) {
  return k(w("interactionAvatarProfile", e, t))
}

function Z(e, t, o, s) {
  let {
    id: c
  } = t, {
    id: u,
    flags: d
  } = e, f = (0, y.yE)(d, A.iLy.EPHEMERAL), _ = (0, l.bp)();
  return i.useCallback((e, t) => {
    if (f) return;
    if (!O.isPlatformEmbedded) {
      let t = e.target;
      if ("A" === t.tagName && "" !== t.textContent || null == window.getSelection) return;
      let n = window.getSelection();
      if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return
    }
    let i = p.Z.getChannel(c),
      l = m.Z.getMessage(c, u),
      d = h.Z.isEditing(c, u);
    null == i || null == l || d || (o({
      contextMenu: true
    }), (0, a.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79381"), n.e("76676"), n.e("37220"), n.e("93077"), n.e("3719")]).then(n.bind(n, 225138));
      return n => (0, r.jsx)(e, P(N({}, n), {
        message: l,
        channel: i,
        mediaItem: t,
        shouldHideMediaOptions: s
      }))
    }, {
      onClose: () => o({
        contextMenu: false
      }),
      context: _
    }))
  }, [f, c, u, o, _, s])
}

function F(e, t) {
  return i.useCallback(n => {
    let r = g.default.getUser(e),
      i = p.Z.getChannel(t);
    null != r && null != i && (n.stopPropagation(), (0, I.Pv)(n, r, i))
  }, [e, t])
}

function V(e, t, n) {
  return i.useCallback(r => {
    let i = g.default.getUser(e),
      a = p.Z.getChannel(t);
    null != i && null != a && (r.stopPropagation(), (0, I._j)(r, {
      user: i,
      channel: a,
      moderationAlertId: n
    }))
  }, [e, t, n])
}

function H(e, t) {
  return i.useCallback(n => {
    let r = g.default.getUser(e),
      i = p.Z.getChannel(t);
    null != r && null != i && (n.stopPropagation(), (0, I.xS)(n, r, i.guild_id))
  }, [e, t])
}

function Y(e, t) {
  let {
    id: n
  } = e, {
    id: r
  } = t;
  return i.useCallback(e => {
    e.altKey && (e.preventDefault(), (0, S.Z)(r, n))
  }, [r, n])
}

function W(e) {
  let {
    groupId: t,
    message: n,
    defaultValue: r,
    popouts: a
  } = e, {
    canShowReactionsOnMessageHover: o
  } = c.ZP.useExperiment({
    location: "useHoveredMessage"
  }, {
    autoTrackExposure: false
  }), s = n.author.id, l = "".concat(t, ":").concat(s), u = i.useRef(r), d = X(n, a), [f, p] = i.useState(r);
  u.current = f || u.current;
  let h = i.useCallback(e => {
      o && (0, _.T6)(), f || (E.S.dispatchKeyed(A.LPv.ANIMATE_CHAT_AVATAR, l, true), d(e), p(true))
    }, [f, l, o, d]),
    m = i.useCallback(() => {
      E.S.dispatchKeyed(A.LPv.ANIMATE_CHAT_AVATAR, l, false), p(false)
    }, [l]);
  return {
    hasHovered: u.current,
    isHovered: f,
    handleMouseEnter: h,
    handleMouseLeave: m
  }
}

function K(e, t) {
  let [n, r] = i.useState(false), [a, o] = i.useState(false);
  return {
    handleFocus: i.useCallback(t => {
      var n, i;
      let a = null != (i = null == (n = (0, b.uB)(t)) ? true : n.activeElement) ? i : null;
      (t.target === t.currentTarget || t.currentTarget.contains(a)) && (o(true), r(true)), null != e && e(t)
    }, [e]),
    handleBlur: i.useCallback(e => {
      var n, i;
      let a = null != (i = null == (n = (0, b.uB)(e)) ? true : n.activeElement) ? i : null;
      e.target !== e.currentTarget && e.currentTarget.contains(a) || r(false), null != t && t(e)
    }, [t]),
    isFocused: n,
    hasFocused: a
  }
}

function z(e, t) {
  return i.useCallback(() => {
    let {
      messageReference: n
    } = e;
    (null == t || (0, T.Z)(t)) && o.Z.jumpToMessage({
      channelId: n.channel_id,
      messageId: n.message_id,
      flash: true,
      returnMessageId: e.id
    })
  }, [t, e])
}

function q(e, t) {
  let n = w("interactionData", e, t);
  return i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), n()
  }, [n])
}

function X(e, t) {
  return i.useCallback(n => {
    if (null == n || !(n.nativeEvent instanceof MouseEvent) || Object.values(t).some(e => e)) return;
    let r = n.target;
    if ((0, f.Uw)(e)) {
      let {
        x: t,
        y: n,
        width: i,
        height: a
      } = r.getBoundingClientRect();
      (0, d.Z)(e, {
        x: t,
        y: n,
        w: i,
        h: a
      }, false, u.LL.UserTriggered)
    }
  }, [e, t])
}