/** Chunk was on 26434 **/
/** chunk id: 348238, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $3: () => V,
  Go: () => B,
  JC: () => w,
  NU: () => L,
  Nk: () => A,
  R9: () => R,
  RN: () => U,
  Wl: () => N,
  XO: () => P,
  Xn: () => z,
  bb: () => H,
  qo: () => M,
  rY: () => D,
  sR: () => F,
  tn: () => G,
  wq: () => k
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

function S(e, t, n) {
  return i.useCallback(() => {
    n({
      [e]: !t
    })
  }, [e, n, t])
}

function T(e, t, n) {
  return i.useCallback(r => {
    let i = h.default.getUser(e);
    if (null == i) return;
    if (r.preventDefault(), r.stopPropagation(), !r.shiftKey) return void n();
    let l = "@".concat(O.ZP.getUserTag(i, {
        decoration: "never"
      })),
      o = "<@".concat(e, ">");
    b.S.dispatchToLastSubscribed(I.CkL.INSERT_TEXT, {
      plainText: l,
      rawText: o
    }), a.Z.startTyping(t)
  }, [e, t, n])
}

function P(e, t, n, r) {
  let i = S("usernameProfile", n, r);
  return T(e.author.id, t.id, i)
}

function N(e, t, n, r) {
  let i = S("referencedUsernameProfile", n, r);
  return T(null == e ? true : e.author.id, t.id, i)
}

function A(e, t, n, r) {
  let i = S("interactionUsernameProfile", n, r);
  return T(null == e ? true : e.user.id, t.id, i)
}

function w(e, t, n, r) {
  let i = S("referencedUsernameProfile", n, r);
  return T(e, t.id, i)
}

function Z(e) {
  return i.useCallback(t => {
    t.preventDefault(), t.stopPropagation(), e()
  }, [e])
}

function R(e, t) {
  return Z(S("avatarProfile", e, t))
}

function D(e, t) {
  return Z(S("referencedAvatarProfile", e, t))
}

function L(e, t) {
  return Z(S("interactionAvatarProfile", e, t))
}

function M(e, t, o, a) {
  let {
    id: c
  } = t, {
    id: u,
    flags: d
  } = e, p = (0, C.yE)(d, I.iLy.EPHEMERAL), m = (0, s.bp)();
  return i.useCallback((e, t) => {
    if (p) return;
    if (!v.isPlatformEmbedded) {
      let t = e.target;
      if ("A" === t.tagName && "" !== t.textContent || null == window.getSelection) return;
      let n = window.getSelection();
      if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return
    }
    let i = f.Z.getChannel(c),
      s = _.Z.getMessage(c, u),
      d = g.Z.isEditing(c, u);
    null == i || null == s || d || (o({
      contextMenu: true
    }), (0, l.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79381"), n.e("38342"), n.e("37220"), n.e("93077"), n.e("45356")]).then(n.bind(n, 225138));
      return n => {
        var l, o;
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
        }({}, n), o = o = {
          message: s,
          channel: i,
          mediaItem: t,
          shouldHideMediaOptions: a
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(o)).forEach(function(e) {
          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e))
        }), l))
      }
    }, {
      onClose: () => o({
        contextMenu: false
      }),
      context: m
    }))
  }, [p, c, u, o, m, a])
}

function k(e, t) {
  return i.useCallback(n => {
    let r = h.default.getUser(e),
      i = f.Z.getChannel(t);
    null != r && null != i && (n.stopPropagation(), (0, y.Pv)(n, r, i))
  }, [e, t])
}

function U(e, t, n) {
  return i.useCallback(r => {
    let i = h.default.getUser(e),
      l = f.Z.getChannel(t);
    null != i && null != l && (r.stopPropagation(), (0, y._j)(r, {
      user: i,
      channel: l,
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
    e.altKey && (e.preventDefault(), (0, x.Z)(r, n))
  }, [r, n])
}

function G(e) {
  var t, n;
  let {
    groupId: r,
    message: l,
    defaultValue: o,
    popouts: a
  } = e, {
    canShowReactionsOnMessageHover: s
  } = c.ZP.useExperiment({
    location: "useHoveredMessage"
  }, {
    autoTrackExposure: false
  }), f = l.author.id, g = "".concat(r, ":").concat(f), _ = i.useRef(o), h = (t = l, n = a, i.useCallback(e => {
    if (null == e || !(e.nativeEvent instanceof MouseEvent) || Object.values(n).some(e => e)) return;
    let r = e.target;
    if ((0, p.Uw)(t)) {
      let {
        x: e,
        y: n,
        width: i,
        height: l
      } = r.getBoundingClientRect();
      (0, d.Z)(t, {
        x: e,
        y: n,
        w: i,
        h: l
      }, false, u.LL.UserTriggered)
    }
  }, [t, n])), [E, C] = i.useState(o);
  _.current = E || _.current;
  let v = i.useCallback(e => {
      s && (0, m.T6)(), E || (b.S.dispatchKeyed(I.LPv.ANIMATE_CHAT_AVATAR, g, true), h(e), C(true))
    }, [E, g, s, h]),
    O = i.useCallback(() => {
      b.S.dispatchKeyed(I.LPv.ANIMATE_CHAT_AVATAR, g, false), C(false)
    }, [g]);
  return {
    hasHovered: _.current,
    isHovered: E,
    handleMouseEnter: v,
    handleMouseLeave: O
  }
}

function H(e, t) {
  let [n, r] = i.useState(false), [l, o] = i.useState(false);
  return {
    handleFocus: i.useCallback(t => {
      var n, i;
      let l = null != (i = null == (n = (0, E.uB)(t)) ? true : n.activeElement) ? i : null;
      (t.target === t.currentTarget || t.currentTarget.contains(l)) && (o(true), r(true)), null != e && e(t)
    }, [e]),
    handleBlur: i.useCallback(e => {
      var n, i;
      let l = null != (i = null == (n = (0, E.uB)(e)) ? true : n.activeElement) ? i : null;
      e.target !== e.currentTarget && e.currentTarget.contains(l) || r(false), null != t && t(e)
    }, [t]),
    isFocused: n,
    hasFocused: l
  }
}

function V(e, t) {
  return i.useCallback(() => {
    let {
      messageReference: n
    } = e;
    (null == t || (0, j.Z)(t)) && o.Z.jumpToMessage({
      channelId: n.channel_id,
      messageId: n.message_id,
      flash: true,
      returnMessageId: e.id
    })
  }, [t, e])
}

function z(e, t) {
  let n = S("interactionData", e, t);
  return i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), n()
  }, [n])
}