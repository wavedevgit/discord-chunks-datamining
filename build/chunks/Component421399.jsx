/** Chunk was on web.js **/
/** chunk id: 421399, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Z,
  a: () => G
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk670188 = require("./670188.jsx"),
  Chunk485386 = require("./485386.js"),
  Chunk768581 = require("./768581.js"),
  Chunk585483 = require("./585483.js"),
  Chunk463396 = require("./463396.js"),
  Chunk935910 = require("./935910.js"),
  Chunk981631 = require("./981631.js"),
  Chunk131085 = require("./131085.js"),
  Chunk724913 = require("./724913.js");

function L(e, t, n) {
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
      L(e, t, n[t])
    })
  }
  return e
}

function M(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : M(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function k(e, t) {
  if (null == e) return {};
  var n, r, i = U(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function U(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
var G = function(e) {
  return e[e.SYSTEM_TAG = 0] = "SYSTEM_TAG", e[e.BADGES = 1] = "BADGES", e
}({});

function B(e) {
  let {
    compact: t
  } = e;
  return (0, r.jsx)(h.Z, {
    className: t ? D.botTagCompact : D.botTagCozy,
    type: h.Z.Types.REMIX,
    useRemSizes: true
  })
}

function Z(e) {
  var t;
  let {
    author: n,
    message: o,
    channel: h,
    userOverride: L,
    compact: M = false,
    withMentionPrefix: U = false,
    showPopout: G = false,
    hideGuildTag: Z = false,
    hideSystemTag: F = false,
    className: V,
    onClick: H,
    onContextMenu: Y,
    onPopoutRequestClose: W,
    renderPopout: K,
    renderRemixTag: z = false,
    decorations: q,
    previewGuildId: X,
    subscribeToGroupId: Q
  } = e, J = i.useRef(null), $ = i.useContext(b.Z), ee = null != (t = null == h ? true : h.guild_id) ? t : $, {
    analyticsLocations: et
  } = (0, p.ZP)(_.Z.USERNAME), en = U ? "@" : "", {
    nick: er,
    colorString: ei,
    colorStrings: eo,
    colorRoleName: ea,
    displayNameStyles: es
  } = n, el = (0, l.e7)([f.Z], () => f.Z.roleStyle), ec = "username" === el, eu = "dot" === el, ed = (0, I.X$)(), ef = (0, E.j)({
    displayNameStyles: es
  }), e_ = (0, l.e7)([S.Z], () => null == n.guildId || null == n.colorRoleId ? null : S.Z.getRole(n.guildId, n.colorRoleId)), ep = (0, v.yH)(null != X ? X : ee, e_), eh = (0, R.Z)(o), em = i.useContext(c.d), eg = ep && (0, O.S2)(n), eE = ec && eg;
  i.useEffect(() => {
    if (null == Q || !eE || null == em) return;
    let {
      setAnimate: e
    } = em;
    return N.S.subscribeKeyed(P.LPv.ANIMATE_CHAT_AVATAR, "".concat(Q, ":").concat(o.author.id), e), () => void N.S.unsubscribeKeyed(P.LPv.ANIMATE_CHAT_AVATAR, "".concat(Q, ":").concat(o.author.id), e)
  }, [o.author.id, Q, eE, em]);
  let {
    gradientStyle: eb,
    gradientClassname: ey
  } = (0, d.Icv)({
    colorStrings: eo,
    roleStyle: "username",
    includeConvenienceGlow: true,
    animateGradient: null == em ? true : em.animate
  }), eO = () => {
    if (ec) {
      if (eE && null != eo) {
        var e;
        return j(x({}, eb), {
          textDecorationColor: null != (e = null == eo ? true : eo.primaryColor) ? e : true
        })
      }
      return null != ei ? {
        color: ei
      } : true
    }
  }, ev = (0, u.EJ)(en + er), eI = (null == h ? true : h.isPrivate()) && null != es, eT = {
    className: a()([D.username, eE && ey, ef]),
    style: eO(),
    onClick: H,
    onContextMenu: Y,
    children: eI ? (0, r.jsx)(g.Z, {
      userName: ev,
      displayNameStyles: es,
      effectDisplayType: m.F.PLAIN,
      loop: true
    }) : ev,
    "data-text": en + er
  }, eS = i.useMemo(() => M && !Z ? (0, r.jsx)(y.ZP, {
    primaryGuild: n.primaryGuild,
    userId: o.author.id,
    contextGuildId: ee,
    className: D.clanTagChiplet,
    badgeSize: w.Gg.SIZE_12
  }) : null, [M, n.primaryGuild, ee, o.author.id, Z]), eA = null != L ? L : o.author, eN = null != K && null != G ? (0, r.jsx)(T.Z, {
    targetElementRef: J,
    user: eA,
    renderPopout: K,
    shouldShow: G,
    shouldPreload: eh,
    position: s.tq ? "window_center" : "right",
    avatarUrl: null != n.guildMemberAvatar && null != ee ? (0, A.JM)({
      guildId: ee,
      userId: eA.id,
      avatar: n.guildMemberAvatar,
      size: 80
    }) : true,
    onRequestClose: W,
    clickTrap: G,
    children: e => {
      var {
        onClick: t
      } = e, n = k(e, ["onClick"]);
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(d.P3F, j(x({
          tag: "span",
          innerRef: J
        }, n, eT), {
          className: a()(eT.className, D.clickable, V)
        })), eS]
      })
    }
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.P3F, j(x({}, eT), {
      className: a()(eT.className, V)
    })), eS]
  }), eC = null != q ? q[0] : null, eR = null != q ? q[1] : null;
  return (0, r.jsxs)(p.Gt, {
    value: et,
    children: [null != eC && !F && M ? (0, r.jsxs)(r.Fragment, {
      children: [" ", eC, " "]
    }) : null, eu ? (0, r.jsx)(d.FhE, {
      color: ei,
      colors: eg ? eo : null,
      name: ea,
      className: D.roleDot,
      hoverOverride: null == em ? true : em.animate
    }) : null, eN, !M && !Z && (0, r.jsx)(y.ZP, {
      primaryGuild: n.primaryGuild,
      userId: o.author.id,
      contextGuildId: ee,
      className: D.clanTagChiplet
    }), null != eR ? eR : null, null == eC || F || M ? null : eC, null != o && (0, C.f)(o) && ed && z ? (0, r.jsx)(B, {}) : null]
  })
}