/** Chunk was on web.js **/
/** chunk id: 348238, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $3: () => z,
  Go: () => Y,
  JC: () => M,
  NU: () => Z,
  Nk: () => j,
  R9: () => U,
  RN: () => V,
  Wl: () => L,
  XO: () => x,
  Xn: () => q,
  bb: () => K,
  qo: () => B,
  rY: () => G,
  sR: () => H,
  tn: () => W,
  wq: () => F
}), require("./997841.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk374470 = require("./374470.js"),
  Chunk95015 = require("./95015.js"),
  Chunk239091 = require("./239091.js"),
  Chunk904245 = require("./904245.js"),
  Chunk144144 = require("./144144.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk992970 = require("./992970.js"),
  Chunk287941 = require("./287941.js"),
  Chunk235894 = require("./235894.js"),
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

function P(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function R(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach(function(n) {
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
    let i = E.default.getUser(e);
    if (null == i) return;
    if (r.preventDefault(), r.stopPropagation(), !r.shiftKey) return void n();
    let a = "@".concat(v.ZP.getUserTag(i, {
        decoration: "never"
      })),
      o = "<@".concat(e, ">");
    y.S.dispatchToLastSubscribed(A.CkL.INSERT_TEXT, {
      plainText: a,
      rawText: o
    }), c.Z.startTyping(t)
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

function Z(e, t) {
  return k(w("interactionAvatarProfile", e, t))
}

function B(e, t, a, l) {
  let {
    id: c
  } = t, {
    id: d,
    flags: f
  } = e, p = (0, o.yE)(f, A.iLy.EPHEMERAL), _ = (0, u.bp)();
  return i.useCallback((e, t) => {
    if (p) return;
    if (!O.isPlatformEmbedded) {
      let t = e.target;
      if ("A" === t.tagName && "" !== t.textContent || null == window.getSelection) return;
      let n = window.getSelection();
      if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return
    }
    let i = m.Z.getChannel(c),
      o = g.Z.getMessage(c, d),
      u = h.Z.isEditing(c, d);
    null == i || null == o || u || (b.default.track(A.rMx.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
      message_id: d,
      channel: c,
      location: "right_click"
    }), a({
      contextMenu: true
    }), (0, s.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("93375"), n.e("38342"), n.e("37220"), n.e("79531")]).then(n.bind(n, 225138));
      return n => (0, r.jsx)(e, R(N({}, n), {
        message: o,
        channel: i,
        mediaItem: t,
        shouldHideMediaOptions: l
      }))
    }, {
      onClose: () => a({
        contextMenu: false
      }),
      context: _
    }))
  }, [p, c, d, a, _, l])
}

function F(e, t) {
  return i.useCallback(n => {
    let r = E.default.getUser(e),
      i = m.Z.getChannel(t);
    null != r && null != i && (n.stopPropagation(), (0, S.Pv)(n, r, i))
  }, [e, t])
}

function V(e, t, n) {
  return i.useCallback(r => {
    let i = E.default.getUser(e),
      a = m.Z.getChannel(t);
    null != i && null != a && (r.stopPropagation(), (0, S._j)(r, {
      user: i,
      channel: a,
      moderationAlertId: n
    }))
  }, [e, t, n])
}

function H(e, t) {
  return i.useCallback(n => {
    let r = E.default.getUser(e),
      i = m.Z.getChannel(t);
    null != r && null != i && (n.stopPropagation(), (0, S.xS)(n, r, i.guild_id))
  }, [e, t])
}

function Y(e, t) {
  let {
    id: n
  } = e, {
    id: r
  } = t;
  return i.useCallback(e => {
    e.altKey && (e.preventDefault(), (0, I.Z)(r, n))
  }, [r, n])
}

function W(e) {
  let {
    groupId: t,
    message: n,
    defaultValue: r,
    popouts: a
  } = e, o = n.author.id, s = "".concat(t, ":").concat(o), l = i.useRef(r), c = Q(n, a), [u, d] = i.useState(r);
  l.current = u || l.current;
  let f = i.useCallback(e => {
      (0, _.T6)(), u || (y.S.dispatchKeyed(A.LPv.ANIMATE_CHAT_AVATAR, s, true), c(e), d(true))
    }, [u, s, c]),
    p = i.useCallback(() => {
      y.S.dispatchKeyed(A.LPv.ANIMATE_CHAT_AVATAR, s, false), d(false)
    }, [s]);
  return {
    hasHovered: l.current,
    isHovered: u,
    handleMouseEnter: f,
    handleMouseLeave: p
  }
}

function K(e, t) {
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

function z(e, t) {
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
    (null == t || (0, T.Z)(t, r)) && r()
  }, [t, e])
}

function q(e, t) {
  let n = w("interactionData", e, t);
  return i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), n()
  }, [n])
}

function Q(e, t) {
  return i.useCallback(n => {
    if (null == n || !(n.nativeEvent instanceof MouseEvent) || Object.values(t).some(e => e)) return;
    let r = n.target;
    if ((0, p.Uw)(e)) {
      let {
        x: t,
        y: n,
        width: i,
        height: a
      } = r.getBoundingClientRect();
      (0, f.Z)(e, {
        x: t,
        y: n,
        w: i,
        h: a
      }, false, d.LL.UserTriggered)
    }
  }, [e, t])
}