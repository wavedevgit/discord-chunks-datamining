/** Chunk was on web.js **/
/** chunk id: 635071, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => j,
  w: () => M
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk607399 = require("./607399.js"),
  Chunk311907 = require("./311907.js"),
  Chunk473193 = require("./473193.js"),
  Chunk36075 = require("./36075.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk922301 = require("./922301.js"),
  Chunk750112 = require("./750112.jsx"),
  Chunk73392 = require("./73392.js"),
  Chunk386467 = require("./386467.js"),
  Chunk534400 = require("./534400.jsx"),
  Chunk176201 = require("./176201.js"),
  Chunk676608 = require("./676608.js"),
  Chunk342296 = require("./342296.jsx"),
  Chunk317525 = require("./317525.js"),
  Chunk486020 = require("./486020.js"),
  Chunk109054 = require("./109054.js"),
  Chunk560936 = require("./560936.js"),
  Chunk743981 = require("./743981.js"),
  Chunk679740 = require("./679740.js");

function w(e, t, n) {
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
      w(e, t, n[t])
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

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function L(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = x(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function x(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
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
    channel: w,
    userOverride: P,
    compact: x = false,
    withMentionPrefix: M = false,
    showPopout: j = false,
    hideGuildTag: k = false,
    hideSystemTag: U = false,
    className: G,
    onClick: F,
    onContextMenu: V,
    onPopoutRequestClose: B,
    renderPopout: H,
    decorations: Y,
    previewGuildId: W,
    subscribeToGroupId: K
  } = e, z = i.useRef(null), q = i.useContext(E.A), Z = null != (t = null == w ? true : w.guild_id) ? t : q, {
    analyticsLocations: Q
  } = (0, _.Ay)(p.A.USERNAME), X = M ? "@" : "", {
    nick: J,
    colorString: $,
    colorStrings: ee,
    colorRoleName: et,
    displayNameStyles: en
  } = n, er = (0, l.bG)([f.A], () => f.A.roleStyle), ei = "username" === er, ea = "dot" === er, eo = (0, g.a)({
    displayNameStyles: en
  }), es = (0, l.bG)([A.A], () => null == n.guildId || null == n.colorRoleId ? null : A.A.getRole(n.guildId, n.colorRoleId)), el = (0, O.jV)(null != W ? W : Z, es), ec = (0, S.A)(a), eu = i.useContext(c.C), ed = (null == eu ? true : eu.animate) || j, ef = el && (0, b.kz)(n), ep = ei && ef, e_ = (null == w ? true : w.isPrivate()) && null != en;
  (0, T.A)({
    shouldSubscribe: e_ || ep,
    subscribeToGroupId: K,
    authorId: a.author.id
  });
  let {
    gradientStyle: eh,
    gradientClassname: em
  } = (0, d.v5K)({
    colorStrings: ee,
    roleStyle: "username",
    includeConvenienceGlow: true,
    animateGradient: ed
  }), eg = () => {
    if (ei) {
      if (ep && null != ee) {
        var e;
        return D(R({}, eh), {
          textDecorationColor: null != (e = null == ee ? true : ee.primaryColor) ? e : true
        })
      }
      return null != $ ? {
        color: $
      } : true
    }
  }, eE = (0, u.CR)(X + J), ey = {
    className: o()(N.oF, eo, {
      [em]: ep,
      [N.IW]: "username" === er && null != $
    }),
    style: eg(),
    onClick: F,
    onContextMenu: V,
    children: e_ ? (0, r.jsx)(m.A, {
      userName: eE,
      displayNameStyles: en,
      effectDisplayType: ed ? h.G.ANIMATED : h.G.PLAIN,
      loop: true,
      shouldUnderlineOnHover: null != F
    }) : eE,
    "data-text": X + J,
    "data-username-has-gradient": !!ef || true
  }, eb = i.useMemo(() => x && !k ? (0, r.jsx)(y.Ay, {
    primaryGuild: n.primaryGuild,
    userId: a.author.id,
    contextGuildId: Z,
    className: N.s4,
    badgeSize: C.Sl.SIZE_12
  }) : null, [x, n.primaryGuild, Z, a.author.id, k]), eO = null != P ? P : a.author, ev = null != H && null != j ? (0, r.jsx)(v.A, {
    targetElementRef: z,
    user: eO,
    renderPopout: H,
    shouldShow: j,
    shouldPreload: ec,
    position: s.Fr ? "window_center" : "right",
    avatarUrl: null != n.guildMemberAvatar && null != Z ? (0, I.s7)({
      guildId: Z,
      userId: eO.id,
      avatar: n.guildMemberAvatar,
      size: 80
    }) : true,
    onRequestClose: B,
    clickTrap: j,
    children: e => {
      let {
        onClick: t
      } = e, n = L(e, ["onClick"]);
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(d.DUT, D(R({
          tag: "span",
          innerRef: z
        }, n, ey), {
          className: o()(ey.className, N.vk, G)
        })), eb]
      })
    }
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.DUT, D(R({}, ey), {
      className: o()(ey.className, G)
    })), eb]
  }), eA = null != Y ? Y[0] : null, eI = null != Y ? Y[1] : null;
  return (0, r.jsxs)(_.f5, {
    value: Q,
    children: [null != eA && !U && x ? (0, r.jsxs)(r.Fragment, {
      children: [" ", eA, " "]
    }) : null, ea ? (0, r.jsx)(d.WYI, {
      color: $,
      colors: ef ? ee : null,
      name: et,
      className: N.m4,
      hoverOverride: ed
    }) : null, ev, !x && !k && (0, r.jsx)(y.Ay, {
      primaryGuild: n.primaryGuild,
      userId: a.author.id,
      contextGuildId: Z,
      className: N.s4
    }), null != eI ? eI : null, null == eA || U || x ? null : eA]
  })
}