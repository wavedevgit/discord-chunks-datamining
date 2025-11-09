/** Chunk was on web.js **/
/** chunk id: 421399, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => B,
  a: () => U
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk385499 = require("./385499.jsx"),
  Chunk821795 = require("./821795.js"),
  Chunk892567 = require("./892567.jsx"),
  Chunk7284 = require("./7284.js"),
  Chunk372900 = require("./372900.js"),
  Chunk172751 = require("./172751.jsx"),
  Chunk606318 = require("./606318.js"),
  Chunk402235 = require("./402235.js"),
  Chunk477734 = require("./477734.js"),
  Chunk456077 = require("./456077.jsx"),
  Chunk485386 = require("./485386.js"),
  Chunk768581 = require("./768581.js"),
  Chunk463396 = require("./463396.js"),
  Chunk935910 = require("./935910.js"),
  Chunk392819 = require("./392819.js"),
  Chunk131085 = require("./131085.js"),
  Chunk136907 = require("./136907.js");

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      D(e, t, n[t])
    })
  }
  return e
}

function L(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function M(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : L(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function j(e, t) {
  if (null == e) return {};
  var n, r, i = k(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function k(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
var U = function(e) {
  return e[e.SYSTEM_TAG = 0] = "SYSTEM_TAG", e[e.BADGES = 1] = "BADGES", e
}({});

function G(e) {
  let {
    compact: t
  } = e;
  return (0, r.jsx)(h.Z, {
    className: t ? w.botTagCompact : w.botTagCozy,
    type: h.Z.Types.REMIX,
    useRemSizes: true
  })
}

function B(e) {
  var t;
  let {
    author: n,
    message: a,
    channel: h,
    userOverride: D,
    compact: L = false,
    withMentionPrefix: k = false,
    showPopout: U = false,
    hideGuildTag: B = false,
    hideSystemTag: Z = false,
    className: F,
    onClick: V,
    onContextMenu: H,
    onPopoutRequestClose: Y,
    renderPopout: W,
    renderRemixTag: K = false,
    decorations: z,
    previewGuildId: q,
    subscribeToGroupId: X
  } = e, Q = i.useRef(null), J = i.useContext(b.Z), $ = null != (t = null == h ? true : h.guild_id) ? t : J, {
    analyticsLocations: ee
  } = (0, p.ZP)(_.Z.USERNAME), et = k ? "@" : "", {
    nick: en,
    colorString: er,
    colorStrings: ei,
    colorRoleName: ea,
    displayNameStyles: eo
  } = n, es = (0, l.e7)([f.Z], () => f.Z.roleStyle), el = "username" === es, ec = "dot" === es, eu = (0, I.X$)(), ed = (0, E.j)({
    displayNameStyles: eo
  }), ef = (0, l.e7)([T.Z], () => null == n.guildId || null == n.colorRoleId ? null : T.Z.getRole(n.guildId, n.colorRoleId)), e_ = (0, v.yH)(null != q ? q : $, ef), ep = (0, N.Z)(a), eh = i.useContext(c.d), em = (null == eh ? true : eh.animate) || U, eg = e_ && (0, O.S2)(n), eE = el && eg, eb = (null == h ? true : h.isPrivate()) && null != eo;
  (0, R.Z)({
    shouldSubscribe: eb || eE,
    subscribeToGroupId: X,
    authorId: a.author.id
  });
  let {
    gradientStyle: ey,
    gradientClassname: eO
  } = (0, d.Icv)({
    colorStrings: ei,
    roleStyle: "username",
    includeConvenienceGlow: true,
    animateGradient: em
  }), ev = () => {
    if (el) {
      if (eE && null != ei) {
        var e;
        return M(x({}, ey), {
          textDecorationColor: null != (e = null == ei ? true : ei.primaryColor) ? e : true
        })
      }
      return null != er ? {
        color: er
      } : true
    }
  }, eI = (0, u.EJ)(et + en), eS = {
    className: o()(w.username, ed, {
      [eO]: eE,
      [w.usernameColorOnName]: "username" === es && null != er
    }),
    style: ev(),
    onClick: V,
    onContextMenu: H,
    children: eb ? (0, r.jsx)(g.Z, {
      userName: eI,
      displayNameStyles: eo,
      effectDisplayType: em ? m.F.ANIMATED : m.F.PLAIN,
      loop: true,
      shouldUnderlineOnHover: null != V
    }) : eI,
    "data-text": et + en
  }, eT = i.useMemo(() => L && !B ? (0, r.jsx)(y.ZP, {
    primaryGuild: n.primaryGuild,
    userId: a.author.id,
    contextGuildId: $,
    className: w.clanTagChiplet,
    badgeSize: P.Gg.SIZE_12
  }) : null, [L, n.primaryGuild, $, a.author.id, B]), eA = null != D ? D : a.author, eC = null != W && null != U ? (0, r.jsx)(S.Z, {
    targetElementRef: Q,
    user: eA,
    renderPopout: W,
    shouldShow: U,
    shouldPreload: ep,
    position: s.tq ? "window_center" : "right",
    avatarUrl: null != n.guildMemberAvatar && null != $ ? (0, A.JM)({
      guildId: $,
      userId: eA.id,
      avatar: n.guildMemberAvatar,
      size: 80
    }) : true,
    onRequestClose: Y,
    clickTrap: U,
    children: e => {
      var {
        onClick: t
      } = e, n = j(e, ["onClick"]);
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(d.P3F, M(x({
          tag: "span",
          innerRef: Q
        }, n, eS), {
          className: o()(eS.className, w.clickable, F)
        })), eT]
      })
    }
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.P3F, M(x({}, eS), {
      className: o()(eS.className, F)
    })), eT]
  }), eN = null != z ? z[0] : null, eR = null != z ? z[1] : null;
  return (0, r.jsxs)(p.Gt, {
    value: ee,
    children: [null != eN && !Z && L ? (0, r.jsxs)(r.Fragment, {
      children: [" ", eN, " "]
    }) : null, ec ? (0, r.jsx)(d.FhE, {
      color: er,
      colors: eg ? ei : null,
      name: ea,
      className: w.roleDot,
      hoverOverride: em
    }) : null, eC, !L && !B && (0, r.jsx)(y.ZP, {
      primaryGuild: n.primaryGuild,
      userId: a.author.id,
      contextGuildId: $,
      className: w.clanTagChiplet
    }), null != eR ? eR : null, null == eN || Z || L ? null : eN, null != a && (0, C.f)(a) && eu && K ? (0, r.jsx)(G, {}) : null]
  })
}