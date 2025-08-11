/** Chunk was on web.js **/
/** chunk id: 421399, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => B,
  a: () => U
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
  Chunk848697 = require("./848697.js");

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function L(e) {
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

function x(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : x(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function k(e, t) {
  if (null == e) return {};
  var n, r, i = j(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function j(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
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
    message: o,
    channel: h,
    userOverride: D,
    compact: x = false,
    withMentionPrefix: j = false,
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
  } = (0, p.ZP)(_.Z.USERNAME), et = j ? "@" : "", {
    nick: en,
    colorString: er,
    colorStrings: ei,
    colorRoleName: eo,
    displayNameStyles: ea
  } = n, es = (0, l.e7)([f.Z], () => f.Z.roleStyle), el = "username" === es, ec = "dot" === es, eu = (0, I.X$)(), ed = (0, E.j)({
    displayNameStyles: ea
  }), ef = (0, l.e7)([S.Z], () => null == n.guildId || null == n.colorRoleId ? null : S.Z.getRole(n.guildId, n.colorRoleId)), e_ = (0, v.yH)(null != q ? q : $, ef), ep = (0, R.Z)(o), eh = i.useContext(c.d), em = e_ && (0, O.S2)(n), eg = el && em;
  i.useEffect(() => {
    if (null == X || !eg || null == eh) return;
    let {
      setAnimate: e
    } = eh;
    return N.S.subscribeKeyed(P.LPv.ANIMATE_CHAT_AVATAR, "".concat(X, ":").concat(o.author.id), e), () => void N.S.unsubscribeKeyed(P.LPv.ANIMATE_CHAT_AVATAR, "".concat(X, ":").concat(o.author.id), e)
  }, [o.author.id, X, eg, eh]);
  let {
    gradientStyle: eE,
    gradientClassname: eb
  } = (0, d.Icv)({
    colorStrings: ei,
    roleStyle: "username",
    includeConvenienceGlow: true,
    animateGradient: null == eh ? true : eh.animate
  }), ey = () => {
    if (el) {
      if (eg && null != ei) {
        var e;
        return M(L({}, eE), {
          textDecorationColor: null != (e = null == ei ? true : ei.primaryColor) ? e : true
        })
      }
      return null != er ? {
        color: er
      } : true
    }
  }, eO = (0, u.EJ)(et + en), ev = (null == h ? true : h.isPrivate()) && null != ea, eI = {
    className: a()([w.username, eg && eb, ed]),
    style: ey(),
    onClick: V,
    onContextMenu: H,
    children: ev ? (0, r.jsx)(g.Z, {
      userName: eO,
      displayNameStyles: ea,
      effectDisplayType: m.F.PLAIN,
      loop: true
    }) : eO,
    "data-text": et + en
  }, eT = i.useMemo(() => x && !B ? (0, r.jsx)(y.ZP, {
    primaryGuild: n.primaryGuild,
    userId: o.author.id,
    contextGuildId: $,
    className: w.clanTagChiplet
  }) : null, [x, n.primaryGuild, $, o.author.id, B]), eS = null != D ? D : o.author, eA = null != W && null != U ? (0, r.jsx)(T.Z, {
    targetElementRef: Q,
    user: eS,
    renderPopout: W,
    shouldShow: U,
    shouldPreload: ep,
    position: s.tq ? "window_center" : "right",
    avatarUrl: null != n.guildMemberAvatar && null != $ ? (0, A.JM)({
      guildId: $,
      userId: eS.id,
      avatar: n.guildMemberAvatar,
      size: 80
    }) : true,
    onRequestClose: Y,
    clickTrap: U,
    children: e => {
      var {
        onClick: t
      } = e, n = k(e, ["onClick"]);
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(d.P3F, M(L({
          tag: "span",
          innerRef: Q
        }, n, eI), {
          className: a()(eI.className, w.clickable, F)
        })), eT]
      })
    }
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.P3F, M(L({}, eI), {
      className: a()(eI.className, F)
    })), eT]
  }), eN = null != z ? z[0] : null, eC = null != z ? z[1] : null;
  return (0, r.jsxs)(p.Gt, {
    value: ee,
    children: [null != eN && !Z && x ? (0, r.jsxs)(r.Fragment, {
      children: [" ", eN, " "]
    }) : null, ec ? (0, r.jsx)(d.FhE, {
      color: er,
      colors: em ? ei : null,
      name: eo,
      className: w.roleDot,
      hoverOverride: null == eh ? true : eh.animate
    }) : null, eA, !x && !B && (0, r.jsx)(y.ZP, {
      primaryGuild: n.primaryGuild,
      userId: o.author.id,
      contextGuildId: $,
      className: w.clanTagChiplet
    }), null != eC ? eC : null, null == eN || Z || x ? null : eN, null != o && (0, C.f)(o) && eu && K ? (0, r.jsx)(G, {}) : null]
  })
}