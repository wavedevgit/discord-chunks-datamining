/** Chunk was on web.js **/
/** chunk id: 348238, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $3: () => Y,
  Go: () => B,
  JC: () => x,
  NU: () => k,
  Nk: () => D,
  R9: () => j,
  RN: () => Z,
  Wl: () => R,
  XO: () => w,
  Xn: () => W,
  bb: () => H,
  qo: () => U,
  rY: () => M,
  sR: () => F,
  tn: () => V,
  wq: () => G
}), require("./997841.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk374470 = require("./374470.js"),
  Chunk95015 = require("./95015.js"),
  Chunk239091 = require("./239091.js"),
  Chunk904245 = require("./904245.js"),
  Chunk144144 = require("./144144.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk675478 = require("./675478.js"),
  Chunk592125 = require("./592125.js"),
  Chunk323873 = require("./323873.js"),
  Chunk375954 = require("./375954.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk585483 = require("./585483.js"),
  Chunk358085 = require("./358085.js"),
  Chunk51144 = require("./51144.js"),
  Chunk91047 = require("./91047.jsx"),
  Chunk50284 = require("./50284.js"),
  Chunk804063 = require("./804063.js"),
  Chunk981631 = require("./981631.js");

function I(e, t, n) {
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
      I(e, t, n[t])
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

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function N(e, t, n) {
  return i.useCallback(() => {
    n({
      [e]: !t
    })
  }, [e, n, t])
}

function P(e, t, n) {
  return i.useCallback(r => {
    let i = h.default.getUser(e);
    if (null == i) return;
    if (r.preventDefault(), r.stopPropagation(), !r.shiftKey) return void n();
    let a = "@".concat(b.ZP.getUserTag(i, {
        decoration: "never"
      })),
      o = "<@".concat(e, ">");
    g.S.dispatchToLastSubscribed(S.CkL.INSERT_TEXT, {
      plainText: a,
      rawText: o
    }), c.Z.startTyping(t)
  }, [e, t, n])
}

function w(e, t, n, r) {
  let i = N("usernameProfile", n, r);
  return P(e.author.id, t.id, i)
}

function R(e, t, n, r) {
  let i = N("referencedUsernameProfile", n, r);
  return P(null == e ? true : e.author.id, t.id, i)
}

function D(e, t, n, r) {
  let i = N("interactionUsernameProfile", n, r);
  return P(null == e ? true : e.user.id, t.id, i)
}

function x(e, t, n, r) {
  let i = N("referencedUsernameProfile", n, r);
  return P(e, t.id, i)
}

function L(e) {
  return i.useCallback(t => {
    t.preventDefault(), t.stopPropagation(), e()
  }, [e])
}

function j(e, t) {
  return L(N("avatarProfile", e, t))
}

function M(e, t) {
  return L(N("referencedAvatarProfile", e, t))
}

function k(e, t) {
  return L(N("interactionAvatarProfile", e, t))
}

function U(e, t, a, l) {
  let {
    id: c
  } = t, {
    id: d,
    flags: h
  } = e, g = (0, o.yE)(h, S.iLy.EPHEMERAL), b = (0, u.bp)();
  return i.useCallback((e, t) => {
    if (g) return;
    if (!E.isPlatformEmbedded) {
      let t = e.target;
      if ("A" === t.tagName && "" !== t.textContent || null == window.getSelection) return;
      let n = window.getSelection();
      if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return
    }
    let i = f.Z.getChannel(c),
      o = _.Z.getMessage(c, d),
      u = p.Z.isEditing(c, d);
    null == i || null == o || u || (m.default.track(S.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
      message_id: d,
      channel: c,
      location: "right_click"
    }), a({
      contextMenu: true
    }), (0, s.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("93375"), n.e("76676"), n.e("37220"), n.e("26503"), n.e("94207")]).then(n.bind(n, 225138));
      return n => (0, r.jsx)(e, A(T({}, n), {
        message: o,
        channel: i,
        mediaItem: t,
        shouldHideMediaOptions: l
      }))
    }, {
      onClose: () => a({
        contextMenu: false
      }),
      context: b
    }))
  }, [g, c, d, a, b, l])
}

function G(e, t) {
  return i.useCallback(n => {
    let r = h.default.getUser(e),
      i = f.Z.getChannel(t);
    null != r && null != i && (n.stopPropagation(), (0, y.Pv)(n, r, i))
  }, [e, t])
}

function Z(e, t, n) {
  return i.useCallback(r => {
    let i = h.default.getUser(e),
      a = f.Z.getChannel(t);
    null != i && null != a && (r.stopPropagation(), (0, y._j)(r, {
      user: i,
      channel: a,
      moderationAlertId: n
    }))
  }, [e, t, n])
}

function F(e, t) {
  return i.useCallback(n => {
    let r = h.default.getUser(e),
      i = f.Z.getChannel(t);
    null != r && null != i && (n.stopPropagation(), (0, y.xS)(n, r, i.guild_id))
  }, [e, t])
}

function B(e, t) {
  let {
    id: n
  } = e, {
    id: r
  } = t;
  return i.useCallback(e => {
    e.altKey && (e.preventDefault(), (0, O.Z)(r, n))
  }, [r, n])
}

function V(e) {
  let {
    groupId: t,
    message: n,
    defaultValue: r
  } = e, a = n.author.id, o = "".concat(t, ":").concat(a), s = i.useRef(r), [l, c] = i.useState(r);
  s.current = l || s.current;
  let u = i.useCallback(() => {
      (0, d.T6)(), l || (g.S.dispatchKeyed(S.LPv.ANIMATE_CHAT_AVATAR, o, true), c(true))
    }, [l, o]),
    f = i.useCallback(() => {
      g.S.dispatchKeyed(S.LPv.ANIMATE_CHAT_AVATAR, o, false), c(false)
    }, [o]);
  return {
    hasHovered: s.current,
    isHovered: l,
    handleMouseEnter: u,
    handleMouseLeave: f
  }
}

function H(e, t) {
  let [n, r] = i.useState(false), [o, s] = i.useState(false);
  return {
    handleFocus: i.useCallback(t => {
      var n, i;
      let o = null != (i = null == (n = (0, a.uB)(t)) ? true : n.activeElement) ? i : null;
      (t.target === t.currentTarget || t.currentTarget.contains(o)) && (s(true), r(true)), null != e && e(t)
    }, [e]),
    handleBlur: i.useCallback(e => {
      var n, i;
      let o = null != (i = null == (n = (0, a.uB)(e)) ? true : n.activeElement) ? i : null;
      e.target !== e.currentTarget && e.currentTarget.contains(o) || r(false), null != t && t(e)
    }, [t]),
    isFocused: n,
    hasFocused: o
  }
}

function Y(e, t) {
  return i.useCallback(() => {
    let {
      messageReference: n
    } = e, r = () => {
      l.Z.jumpToMessage({
        channelId: n.channel_id,
        messageId: n.message_id,
        flash: true,
        returnMessageId: e.id
      })
    };
    (null == t || (0, v.Z)(t, r)) && r()
  }, [t, e])
}

function W(e, t) {
  let n = N("interactionData", e, t);
  return i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), n()
  }, [n])
}