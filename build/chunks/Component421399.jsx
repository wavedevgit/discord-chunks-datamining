/** Chunk was on web.js **/
/** chunk id: 421399, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => j,
  a: () => M
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
  Chunk456077 = require("./456077.jsx"),
  Chunk485386 = require("./485386.js"),
  Chunk768581 = require("./768581.js"),
  Chunk935910 = require("./935910.js"),
  Chunk392819 = require("./392819.js"),
  Chunk131085 = require("./131085.js"),
  Chunk724913 = require("./724913.js");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      R(e, t, n[t])
    })
  }
  return e
}

function D(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : D(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function L(e, t) {
  if (null == e) return {};
  var n, r, i = x(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function x(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
var M = function(e) {
  return e[e.SYSTEM_TAG = 0] = "SYSTEM_TAG", e[e.BADGES = 1] = "BADGES", e
}({});

function j(e) {
  var t;
  let {
    author: n,
    message: a,
    channel: R,
    userOverride: D,
    compact: x = false,
    withMentionPrefix: M = false,
    showPopout: j = false,
    hideGuildTag: k = false,
    hideSystemTag: U = false,
    className: G,
    onClick: B,
    onContextMenu: Z,
    onPopoutRequestClose: F,
    renderPopout: V,
    decorations: H,
    previewGuildId: Y,
    subscribeToGroupId: W
  } = e, K = i.useRef(null), z = i.useContext(E.Z), q = null != (t = null == R ? true : R.guild_id) ? t : z, {
    analyticsLocations: X
  } = (0, p.ZP)(_.Z.USERNAME), Q = M ? "@" : "", {
    nick: J,
    colorString: $,
    colorStrings: ee,
    colorRoleName: et,
    displayNameStyles: en
  } = n, er = (0, l.e7)([f.Z], () => f.Z.roleStyle), ei = "username" === er, ea = "dot" === er, eo = (0, g.j)({
    displayNameStyles: en
  }), es = (0, l.e7)([I.Z], () => null == n.guildId || null == n.colorRoleId ? null : I.Z.getRole(n.guildId, n.colorRoleId)), el = (0, O.yH)(null != Y ? Y : q, es), ec = (0, S.Z)(a), eu = i.useContext(c.d), ed = (null == eu ? true : eu.animate) || j, ef = el && (0, y.S2)(n), e_ = ei && ef, ep = (null == R ? true : R.isPrivate()) && null != en;
  (0, A.Z)({
    shouldSubscribe: ep || e_,
    subscribeToGroupId: W,
    authorId: a.author.id
  });
  let {
    gradientStyle: eh,
    gradientClassname: em
  } = (0, d.Icv)({
    colorStrings: ee,
    roleStyle: "username",
    includeConvenienceGlow: true,
    animateGradient: ed
  }), eg = () => {
    if (ei) {
      if (e_ && null != ee) {
        var e;
        return w(P({}, eh), {
          textDecorationColor: null != (e = null == ee ? true : ee.primaryColor) ? e : true
        })
      }
      return null != $ ? {
        color: $
      } : true
    }
  }, eE = (0, u.EJ)(Q + J), eb = {
    className: o()(N.username, eo, {
      [em]: e_,
      [N.usernameColorOnName]: "username" === er && null != $
    }),
    style: eg(),
    onClick: B,
    onContextMenu: Z,
    children: ep ? (0, r.jsx)(m.Z, {
      userName: eE,
      displayNameStyles: en,
      effectDisplayType: ed ? h.F.ANIMATED : h.F.PLAIN,
      loop: true,
      shouldUnderlineOnHover: null != B
    }) : eE,
    "data-text": Q + J
  }, ey = i.useMemo(() => x && !k ? (0, r.jsx)(b.ZP, {
    primaryGuild: n.primaryGuild,
    userId: a.author.id,
    contextGuildId: q,
    className: N.clanTagChiplet,
    badgeSize: C.Gg.SIZE_12
  }) : null, [x, n.primaryGuild, q, a.author.id, k]), eO = null != D ? D : a.author, ev = null != V && null != j ? (0, r.jsx)(v.Z, {
    targetElementRef: K,
    user: eO,
    renderPopout: V,
    shouldShow: j,
    shouldPreload: ec,
    position: s.tq ? "window_center" : "right",
    avatarUrl: null != n.guildMemberAvatar && null != q ? (0, T.JM)({
      guildId: q,
      userId: eO.id,
      avatar: n.guildMemberAvatar,
      size: 80
    }) : true,
    onRequestClose: F,
    clickTrap: j,
    children: e => {
      var {
        onClick: t
      } = e, n = L(e, ["onClick"]);
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(d.P3F, w(P({
          tag: "span",
          innerRef: K
        }, n, eb), {
          className: o()(eb.className, N.clickable, G)
        })), ey]
      })
    }
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.P3F, w(P({}, eb), {
      className: o()(eb.className, G)
    })), ey]
  }), eI = null != H ? H[0] : null, eT = null != H ? H[1] : null;
  return (0, r.jsxs)(p.Gt, {
    value: X,
    children: [null != eI && !U && x ? (0, r.jsxs)(r.Fragment, {
      children: [" ", eI, " "]
    }) : null, ea ? (0, r.jsx)(d.FhE, {
      color: $,
      colors: ef ? ee : null,
      name: et,
      className: N.roleDot,
      hoverOverride: ed
    }) : null, ev, !x && !k && (0, r.jsx)(b.ZP, {
      primaryGuild: n.primaryGuild,
      userId: a.author.id,
      contextGuildId: q,
      className: N.clanTagChiplet
    }), null != eT ? eT : null, null == eI || U || x ? null : eI]
  })
}