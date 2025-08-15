/** Chunk was on 40694 **/
/** chunk id: 421399, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => D,
  a: () => G
});
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  u = require.n(Chunk120356),
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

function w(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      r = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), r.forEach(function(n) {
      var r;
      r = t[n], n in e ? Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = r
    })
  }
  return e
}

function C(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t.push.apply(t, r)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}
var G = ((r = {})[r.SYSTEM_TAG = 0] = "SYSTEM_TAG", r[r.BADGES = 1] = "BADGES", r);

function M(e) {
  let {
    compact: n
  } = e;
  return (0, l.jsx)(b.Z, {
    className: n ? k.botTagCompact : k.botTagCozy,
    type: b.Z.Types.REMIX,
    useRemSizes: true
  })
}

function D(e) {
  var n;
  let {
    author: t,
    message: r,
    channel: o,
    userOverride: b,
    compact: G = false,
    withMentionPrefix: D = false,
    showPopout: F = false,
    hideGuildTag: B = false,
    hideSystemTag: L = false,
    className: U,
    onClick: z,
    onContextMenu: H,
    onPopoutRequestClose: V,
    renderPopout: X,
    renderRemixTag: J = false,
    decorations: Y,
    previewGuildId: q,
    subscribeToGroupId: K
  } = e, W = i.useRef(null), $ = i.useContext(x.Z), Q = null != (n = null == o ? true : o.guild_id) ? n : $, {
    analyticsLocations: ee
  } = (0, y.ZP)(p.Z.USERNAME), en = D ? "@" : "", {
    nick: et,
    colorString: er,
    colorStrings: el,
    colorRoleName: ei,
    displayNameStyles: eo
  } = t, eu = (0, c.e7)([m.Z], () => m.Z.roleStyle), ea = "username" === eu, ec = (0, j.X$)(), es = (0, O.j)({
    displayNameStyles: eo
  }), ed = (0, c.e7)([T.Z], () => null == t.guildId || null == t.colorRoleId ? null : T.Z.getRole(t.guildId, t.colorRoleId)), ef = (0, R.yH)(null != q ? q : Q, ed), em = (0, I.Z)(r), ep = i.useContext(s.d), ey = ef && (0, h.S2)(t), eb = ea && ey;
  i.useEffect(() => {
    if (null == K || !eb || null == ep) return;
    let {
      setAnimate: e
    } = ep;
    return A.S.subscribeKeyed(Z.LPv.ANIMATE_CHAT_AVATAR, "".concat(K, ":").concat(r.author.id), e), () => void A.S.unsubscribeKeyed(Z.LPv.ANIMATE_CHAT_AVATAR, "".concat(K, ":").concat(r.author.id), e)
  }, [r.author.id, K, eb, ep]);
  let {
    gradientStyle: eg,
    gradientClassname: ev
  } = (0, f.Icv)({
    colorStrings: el,
    roleStyle: "username",
    includeConvenienceGlow: true,
    animateGradient: null == ep ? true : ep.animate
  }), eO = (0, d.EJ)(en + et), ex = (null == o ? true : o.isPrivate()) && null != eo, eS = {
    className: u()([k.username, eb && ev, es]),
    style: (() => {
      if (ea) {
        if (eb && null != el) {
          var e;
          return C(w({}, eg), {
            textDecorationColor: null != (e = null == el ? true : el.primaryColor) ? e : true
          })
        }
        return null != er ? {
          color: er
        } : true
      }
    })(),
    onClick: z,
    onContextMenu: H,
    children: ex ? (0, l.jsx)(v.Z, {
      userName: eO,
      displayNameStyles: eo,
      effectDisplayType: g.F.PLAIN,
      loop: true
    }) : eO,
    "data-text": en + et
  }, eh = i.useMemo(() => G && !B ? (0, l.jsx)(S.ZP, {
    primaryGuild: t.primaryGuild,
    userId: r.author.id,
    contextGuildId: Q,
    className: k.clanTagChiplet,
    badgeSize: _.Gg.SIZE_12
  }) : null, [G, t.primaryGuild, Q, r.author.id, B]), eR = null != b ? b : r.author, ej = null != X && null != F ? (0, l.jsx)(P.Z, {
    targetElementRef: W,
    user: eR,
    renderPopout: X,
    shouldShow: F,
    shouldPreload: em,
    position: a.tq ? "window_center" : "right",
    avatarUrl: null != t.guildMemberAvatar && null != Q ? (0, E.JM)({
      guildId: Q,
      userId: eR.id,
      avatar: t.guildMemberAvatar,
      size: 80
    }) : true,
    onRequestClose: V,
    clickTrap: F,
    children: e => {
      var {
        onClick: n
      } = e, t = function(e, n) {
        if (null == e) return {};
        var t, r, l = function(e, n) {
          if (null == e) return {};
          var t, r, l = {},
            i = Object.keys(e);
          for (r = 0; r < i.length; r++) t = i[r], n.indexOf(t) >= 0 || (l[t] = e[t]);
          return l
        }(e, n);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++) t = i[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (l[t] = e[t])
        }
        return l
      }(e, ["onClick"]);
      return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(f.P3F, C(w({
          tag: "span",
          innerRef: W
        }, t, eS), {
          className: u()(eS.className, k.clickable, U)
        })), eh]
      })
    }
  }) : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(f.P3F, C(w({}, eS), {
      className: u()(eS.className, U)
    })), eh]
  }), eP = null != Y ? Y[0] : null, eT = null != Y ? Y[1] : null;
  return (0, l.jsxs)(y.Gt, {
    value: ee,
    children: [null != eP && !L && G ? (0, l.jsxs)(l.Fragment, {
      children: [" ", eP, " "]
    }) : null, "dot" === eu ? (0, l.jsx)(f.FhE, {
      color: er,
      colors: ey ? el : null,
      name: ei,
      className: k.roleDot,
      hoverOverride: null == ep ? true : ep.animate
    }) : null, ej, !G && !B && (0, l.jsx)(S.ZP, {
      primaryGuild: t.primaryGuild,
      userId: r.author.id,
      contextGuildId: Q,
      className: k.clanTagChiplet
    }), null != eT ? eT : null, null == eP || L || G ? null : eP, null != r && (0, N.f)(r) && ec && J ? (0, l.jsx)(M, {}) : null]
  })
}