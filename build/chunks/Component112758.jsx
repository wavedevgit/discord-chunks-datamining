/** Chunk was on web.js **/
/** chunk id: 112758, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Am: () => F,
  Ck: () => W,
  G8: () => Y,
  Ge: () => M,
  H9: () => P,
  I: () => x,
  Jo: () => j,
  T0: () => D,
  UY: () => V,
  U_: () => K,
  VL: () => U,
  Yq: () => k,
  m: () => R,
  r4: () => G,
  ri: () => B,
  yp: () => H
}), require("./938796.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk621466 = require("./621466.js"),
  Chunk665260 = require("./665260.js"),
  Chunk442433 = require("./442433.js"),
  Chunk843472 = require("./843472.js"),
  Chunk414798 = require("./414798.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk594061 = require("./594061.js"),
  Chunk734057 = require("./734057.js"),
  Chunk580745 = require("./580745.js"),
  Chunk320501 = require("./320501.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk203982 = require("./203982.js"),
  Chunk723702 = require("./723702.js"),
  Chunk427262 = require("./427262.js"),
  Chunk841549 = require("./841549.jsx"),
  Chunk439147 = require("./439147.js"),
  Chunk81437 = require("./81437.js"),
  Chunk652215 = require("./652215.js");

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

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
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

function w(e, t, n) {
  return i.useCallback(r => {
    let i = h.default.getUser(e);
    if (null == i) return;
    if (r.preventDefault(), r.stopPropagation(), !r.shiftKey) return void n();
    let a = "@".concat(y.Ay.getUserTag(i, {
        decoration: "never"
      })),
      s = "<@".concat(e, ">");
    g._.dispatchToLastSubscribed(A.jej.INSERT_TEXT, {
      plainText: a,
      rawText: s
    }), c.A.startTyping(t)
  }, [e, t, n])
}

function R(e, t, n, r) {
  let i = N("usernameProfile", n, r);
  return w(e.author.id, t.id, i)
}

function P(e, t, n, r) {
  let i = N("referencedUsernameProfile", n, r);
  return w(null == e ? true : e.author.id, t.id, i)
}

function D(e, t, n, r) {
  let i = N("interactionUsernameProfile", n, r);
  return w(null == e ? true : e.user.id, t.id, i)
}

function x(e, t, n, r) {
  let i = N("referencedUsernameProfile", n, r);
  return w(e, t.id, i)
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
  } = e, g = (0, s.Lt)(h, A.pr7.EPHEMERAL), y = (0, u.Us)();
  return i.useCallback((e, t) => {
    if (g) return;
    if (!E.isPlatformEmbedded) {
      let t = e.target;
      if ("A" === t.tagName && "" !== t.textContent || null == window.getSelection) return;
      let n = window.getSelection();
      if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return
    }
    let i = f.A.getChannel(c),
      s = _.A.getMessage(c, d),
      u = p.A.isEditing(c, d);
    null == i || null == s || u || (m.default.track(A.HAw.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
      message_id: d,
      channel: c,
      location: "right_click"
    }), a({
      contextMenu: true
    }), (0, o.L3)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("24202"), n.e("6502"), n.e("1636"), n.e("27687"), n.e("42897")]).then(n.bind(n, 547983));
      return n => (0, r.jsx)(e, C(S({}, n), {
        message: s,
        channel: i,
        mediaItem: t,
        shouldHideMediaOptions: l
      }))
    }, {
      onClose: () => a({
        contextMenu: false
      }),
      context: y
    }))
  }, [g, c, d, a, y, l])
}

function G(e, t) {
  return i.useCallback(n => {
    let r = h.default.getUser(e),
      i = f.A.getChannel(t);
    null != r && null != i && (n.stopPropagation(), (0, b.wQ)(n, r, i))
  }, [e, t])
}

function V(e, t, n) {
  return i.useCallback(r => {
    let i = h.default.getUser(e),
      a = f.A.getChannel(t);
    null != i && null != a && (r.stopPropagation(), (0, b.B8)(r, {
      user: i,
      channel: a,
      moderationAlertId: n
    }))
  }, [e, t, n])
}

function F(e, t) {
  return i.useCallback(n => {
    let r = h.default.getUser(e),
      i = f.A.getChannel(t);
    null != r && null != i && (n.stopPropagation(), (0, b.pB)(n, r, i.guild_id))
  }, [e, t])
}

function B(e, t) {
  let {
    id: n
  } = e, {
    id: r
  } = t;
  return i.useCallback(e => {
    e.altKey && (e.preventDefault(), (0, O.A)(r, n))
  }, [r, n])
}

function H(e) {
  let {
    groupId: t,
    message: n,
    defaultValue: r
  } = e, a = n.author.id, s = "".concat(t, ":").concat(a), o = i.useRef(r), [l, c] = i.useState(r);
  o.current = l || o.current;
  let u = i.useCallback(() => {
      (0, d.cE)(), l || (g._.dispatchKeyed(A.zOV.ANIMATE_CHAT_AVATAR, s, true), c(true))
    }, [l, s]),
    f = i.useCallback(() => {
      g._.dispatchKeyed(A.zOV.ANIMATE_CHAT_AVATAR, s, false), c(false)
    }, [s]);
  return {
    hasHovered: o.current,
    isHovered: l,
    handleMouseEnter: u,
    handleMouseLeave: f
  }
}

function Y(e, t) {
  let [n, r] = i.useState(false), [s, o] = i.useState(false);
  return {
    handleFocus: i.useCallback(t => {
      var n, i;
      let s = null != (n = null == (i = (0, a.BF)(t)) ? true : i.activeElement) ? n : null;
      (t.target === t.currentTarget || t.currentTarget.contains(s)) && (o(true), r(true)), null != e && e(t)
    }, [e]),
    handleBlur: i.useCallback(e => {
      var n, i;
      let s = null != (n = null == (i = (0, a.BF)(e)) ? true : i.activeElement) ? n : null;
      e.target !== e.currentTarget && e.currentTarget.contains(s) || r(false), null != t && t(e)
    }, [t]),
    isFocused: n,
    hasFocused: s
  }
}

function W(e, t) {
  return i.useCallback(() => {
    let {
      messageReference: n
    } = e, r = () => {
      l.A.jumpToMessage({
        channelId: n.channel_id,
        messageId: n.message_id,
        flash: true,
        returnMessageId: e.id
      })
    };
    (null == t || (0, v.A)(t, r)) && r()
  }, [t, e])
}

function K(e, t) {
  let n = N("interactionData", e, t);
  return i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), n()
  }, [n])
}