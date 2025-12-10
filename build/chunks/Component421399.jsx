/** Chunk was on web.js **/
/** chunk id: 421399, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => M,
  a: () => j
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk573385 = require("./573385.js"),
  Chunk865672 = require("./865672.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk821795 = require("./821795.js"),
  Chunk892567 = require("./892567.jsx"),
  Chunk7284 = require("./7284.js"),
  Chunk372900 = require("./372900.js"),
  Chunk172751 = require("./172751.jsx"),
  Chunk606318 = require("./606318.js"),
  Chunk402235 = require("./402235.js"),
  Chunk670188 = require("./670188.jsx"),
  Chunk485386 = require("./485386.js"),
  Chunk768581 = require("./768581.js"),
  Chunk935910 = require("./935910.js"),
  Chunk392819 = require("./392819.js"),
  Chunk131085 = require("./131085.js"),
  Chunk724913 = require("./724913.js");

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      P(e, t, n[t])
    })
  }
  return e
}

function w(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function x(e, t) {
  if (null == e) return {};
  var n, r, i = L(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function L(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
var j = function(e) {
  return e[e.SYSTEM_TAG = 0] = "SYSTEM_TAG", e[e.BADGES = 1] = "BADGES", e
}({});

function M(e) {
  var t;
  let {
    author: n,
    message: a,
    channel: P,
    userOverride: w,
    compact: L = false,
    withMentionPrefix: j = false,
    showPopout: M = false,
    hideGuildTag: k = false,
    hideSystemTag: U = false,
    className: G,
    onClick: Z,
    onContextMenu: B,
    onPopoutRequestClose: F,
    renderPopout: V,
    decorations: H,
    previewGuildId: Y,
    subscribeToGroupId: W
  } = e, K = i.useRef(null), z = i.useContext(E.Z), q = null != (t = null == P ? true : P.guild_id) ? t : z, {
    analyticsLocations: Q
  } = (0, _.ZP)(p.Z.USERNAME), X = j ? "@" : "", {
    nick: J,
    colorString: $,
    colorStrings: ee,
    colorRoleName: et,
    displayNameStyles: en
  } = n, er = (0, l.e7)([f.Z], () => f.Z.roleStyle), ei = "username" === er, ea = "dot" === er, eo = (0, g.j)({
    displayNameStyles: en
  }), es = (0, l.e7)([S.Z], () => null == n.guildId || null == n.colorRoleId ? null : S.Z.getRole(n.guildId, n.colorRoleId)), el = (0, O.yH)(null != Y ? Y : q, es), ec = (0, T.Z)(a), eu = i.useContext(c.d), ed = (null == eu ? true : eu.animate) || M, ef = el && (0, y.S2)(n), ep = ei && ef, e_ = (null == P ? true : P.isPrivate()) && null != en;
  (0, C.Z)({
    shouldSubscribe: e_ || ep,
    subscribeToGroupId: W,
    authorId: a.author.id
  });
  let {
    gradientStyle: em,
    gradientClassname: eh
  } = (0, d.Icv)({
    colorStrings: ee,
    roleStyle: "username",
    includeConvenienceGlow: true,
    animateGradient: ed
  }), eg = () => {
    if (ei) {
      if (ep && null != ee) {
        var e;
        return D(R({}, em), {
          textDecorationColor: null != (e = null == ee ? true : ee.primaryColor) ? e : true
        })
      }
      return null != $ ? {
        color: $
      } : true
    }
  }, eE = (0, u.EJ)(X + J), eb = {
    className: o()(N.username, eo, {
      [eh]: ep,
      [N.usernameColorOnName]: "username" === er && null != $
    }),
    style: eg(),
    onClick: Z,
    onContextMenu: B,
    children: e_ ? (0, r.jsx)(h.Z, {
      userName: eE,
      displayNameStyles: en,
      effectDisplayType: ed ? m.F.ANIMATED : m.F.PLAIN,
      loop: true,
      shouldUnderlineOnHover: null != Z
    }) : eE,
    "data-text": X + J
  }, ey = i.useMemo(() => L && !k ? (0, r.jsx)(b.ZP, {
    primaryGuild: n.primaryGuild,
    userId: a.author.id,
    contextGuildId: q,
    className: N.clanTagChiplet,
    badgeSize: A.Gg.SIZE_12
  }) : null, [L, n.primaryGuild, q, a.author.id, k]), eO = null != w ? w : a.author, ev = null != V && null != M ? (0, r.jsx)(v.Z, {
    targetElementRef: K,
    user: eO,
    renderPopout: V,
    shouldShow: M,
    shouldPreload: ec,
    position: s.tq ? "window_center" : "right",
    avatarUrl: null != n.guildMemberAvatar && null != q ? (0, I.JM)({
      guildId: q,
      userId: eO.id,
      avatar: n.guildMemberAvatar,
      size: 80
    }) : true,
    onRequestClose: F,
    clickTrap: M,
    children: e => {
      var {
        onClick: t
      } = e, n = x(e, ["onClick"]);
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(d.P3F, D(R({
          tag: "span",
          innerRef: K
        }, n, eb), {
          className: o()(eb.className, N.clickable, G)
        })), ey]
      })
    }
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.P3F, D(R({}, eb), {
      className: o()(eb.className, G)
    })), ey]
  }), eS = null != H ? H[0] : null, eI = null != H ? H[1] : null;
  return (0, r.jsxs)(_.Gt, {
    value: Q,
    children: [null != eS && !U && L ? (0, r.jsxs)(r.Fragment, {
      children: [" ", eS, " "]
    }) : null, ea ? (0, r.jsx)(d.FhE, {
      color: $,
      colors: ef ? ee : null,
      name: et,
      className: N.roleDot,
      hoverOverride: ed
    }) : null, ev, !L && !k && (0, r.jsx)(b.ZP, {
      primaryGuild: n.primaryGuild,
      userId: a.author.id,
      contextGuildId: q,
      className: N.clanTagChiplet
    }), null != eI ? eI : null, null == eS || U || L ? null : eS]
  })
}