/** Chunk was on 92917 **/
/** chunk id: 112758, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Am: () => k,
  Ck: () => F,
  G8: () => B,
  Ge: () => w,
  H9: () => I,
  I: () => T,
  Jo: () => P,
  T0: () => S,
  UY: () => M,
  U_: () => H,
  VL: () => D,
  Yq: () => R,
  m: () => C,
  r4: () => L,
  ri: () => U,
  yp: () => G
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

function E(e, t, n) {
  return i.useCallback(() => {
    n({
      [e]: !t
    })
  }, [e, n, t])
}

function j(e, t, n) {
  return i.useCallback(r => {
    let i = g.default.getUser(e);
    if (null == i) return;
    if (r.preventDefault(), r.stopPropagation(), !r.shiftKey) return void n();
    let l = "@".concat(A.Ay.getUserTag(i, {
        decoration: "never"
      })),
      a = "<@".concat(e, ">");
    _._.dispatchToLastSubscribed(O.jej.INSERT_TEXT, {
      plainText: l,
      rawText: a
    }), c.A.startTyping(t)
  }, [e, t, n])
}

function C(e, t, n, r) {
  let i = E("usernameProfile", n, r);
  return j(e.author.id, t.id, i)
}

function I(e, t, n, r) {
  let i = E("referencedUsernameProfile", n, r);
  return j(null == e ? true : e.author.id, t.id, i)
}

function S(e, t, n, r) {
  let i = E("interactionUsernameProfile", n, r);
  return j(null == e ? true : e.user.id, t.id, i)
}

function T(e, t, n, r) {
  let i = E("referencedUsernameProfile", n, r);
  return j(e, t.id, i)
}

function N(e) {
  return i.useCallback(t => {
    t.preventDefault(), t.stopPropagation(), e()
  }, [e])
}

function P(e, t) {
  return N(E("avatarProfile", e, t))
}

function w(e, t) {
  return N(E("referencedAvatarProfile", e, t))
}

function R(e, t) {
  return N(E("interactionAvatarProfile", e, t))
}

function D(e, t, l, o) {
  let {
    id: c
  } = t, {
    id: d,
    flags: g
  } = e, _ = (0, a.Lt)(g, O.pr7.EPHEMERAL), A = (0, u.Us)();
  return i.useCallback((e, t) => {
    if (_) return;
    if (!b.isPlatformEmbedded) {
      let t = e.target;
      if ("A" === t.tagName && "" !== t.textContent || null == window.getSelection) return;
      let n = window.getSelection();
      if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return
    }
    let i = p.A.getChannel(c),
      a = f.A.getMessage(c, d),
      u = m.A.isEditing(c, d);
    null == i || null == a || u || (h.default.track(O.HAw.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
      message_id: d,
      channel: c,
      location: "right_click"
    }), l({
      contextMenu: true
    }), (0, s.L3)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("24202"), n.e("6502"), n.e("1636"), n.e("27687"), n.e("3219")]).then(n.bind(n, 547983));
      return n => {
        var l, s;
        return (0, r.jsx)(e, (l = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({}, n), s = s = {
          message: a,
          channel: i,
          mediaItem: t,
          shouldHideMediaOptions: o
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(s)).forEach(function(e) {
          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e))
        }), l))
      }
    }, {
      onClose: () => l({
        contextMenu: false
      }),
      context: A
    }))
  }, [_, c, d, l, A, o])
}

function L(e, t) {
  return i.useCallback(n => {
    let r = g.default.getUser(e),
      i = p.A.getChannel(t);
    null != r && null != i && (n.stopPropagation(), (0, y.wQ)(n, r, i))
  }, [e, t])
}

function M(e, t, n) {
  return i.useCallback(r => {
    let i = g.default.getUser(e),
      l = p.A.getChannel(t);
    null != i && null != l && (r.stopPropagation(), (0, y.B8)(r, {
      user: i,
      channel: l,
      moderationAlertId: n
    }))
  }, [e, t, n])
}

function k(e, t) {
  return i.useCallback(n => {
    let r = g.default.getUser(e),
      i = p.A.getChannel(t);
    null != r && null != i && (n.stopPropagation(), (0, y.pB)(n, r, i.guild_id))
  }, [e, t])
}

function U(e, t) {
  let {
    id: n
  } = e, {
    id: r
  } = t;
  return i.useCallback(e => {
    e.altKey && (e.preventDefault(), (0, v.A)(r, n))
  }, [r, n])
}

function G(e) {
  let {
    groupId: t,
    message: n,
    defaultValue: r
  } = e, l = n.author.id, a = "".concat(t, ":").concat(l), s = i.useRef(r), [o, c] = i.useState(r);
  s.current = o || s.current;
  let u = i.useCallback(() => {
      (0, d.cE)(), o || (_._.dispatchKeyed(O.zOV.ANIMATE_CHAT_AVATAR, a, true), c(true))
    }, [o, a]),
    p = i.useCallback(() => {
      _._.dispatchKeyed(O.zOV.ANIMATE_CHAT_AVATAR, a, false), c(false)
    }, [a]);
  return {
    hasHovered: s.current,
    isHovered: o,
    handleMouseEnter: u,
    handleMouseLeave: p
  }
}

function B(e, t) {
  let [n, r] = i.useState(false), [a, s] = i.useState(false);
  return {
    handleFocus: i.useCallback(t => {
      var n, i;
      let a = null != (n = null == (i = (0, l.BF)(t)) ? true : i.activeElement) ? n : null;
      (t.target === t.currentTarget || t.currentTarget.contains(a)) && (s(true), r(true)), null != e && e(t)
    }, [e]),
    handleBlur: i.useCallback(e => {
      var n, i;
      let a = null != (n = null == (i = (0, l.BF)(e)) ? true : i.activeElement) ? n : null;
      e.target !== e.currentTarget && e.currentTarget.contains(a) || r(false), null != t && t(e)
    }, [t]),
    isFocused: n,
    hasFocused: a
  }
}

function F(e, t) {
  return i.useCallback(() => {
    let {
      messageReference: n
    } = e, r = () => {
      o.A.jumpToMessage({
        channelId: n.channel_id,
        messageId: n.message_id,
        flash: true,
        returnMessageId: e.id
      })
    };
    (null == t || (0, x.A)(t, r)) && r()
  }, [t, e])
}

function H(e, t) {
  let n = E("interactionData", e, t);
  return i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), n()
  }, [n])
}