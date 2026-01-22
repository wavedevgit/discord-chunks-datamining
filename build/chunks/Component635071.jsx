/** Chunk was on web.js **/
/** chunk id: 635071, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => M,
  w: () => j
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function w(e) {
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

function x(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = L(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function L(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
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
    channel: R,
    userOverride: P,
    compact: L = false,
    withMentionPrefix: j = false,
    showPopout: M = false,
    hideGuildTag: k = false,
    hideSystemTag: U = false,
    className: G,
    onClick: V,
    onContextMenu: F,
    onPopoutRequestClose: B,
    renderPopout: H,
    decorations: Y,
    previewGuildId: W,
    subscribeToGroupId: K
  } = e, z = i.useRef(null), q = i.useContext(E.A), X = null != (t = null == R ? true : R.guild_id) ? t : q, {
    analyticsLocations: Z
  } = (0, _.Ay)(p.A.USERNAME), Q = j ? "@" : "", {
    nick: $,
    colorString: J,
    colorStrings: ee,
    colorRoleName: et,
    displayNameStyles: en
  } = n, er = (0, l.bG)([f.A], () => f.A.roleStyle), ei = "username" === er, ea = "dot" === er, es = (0, g.a)({
    displayNameStyles: en
  }), eo = (0, l.bG)([v.A], () => null == n.guildId || null == n.colorRoleId ? null : v.A.getRole(n.guildId, n.colorRoleId)), el = (0, O.jV)(null != W ? W : X, eo), ec = (0, I.A)(a), eu = i.useContext(c.C), ed = (null == eu ? true : eu.animate) || M, ef = el && (0, y.kz)(n), ep = ei && ef, e_ = (null == R ? true : R.isPrivate()) && null != en;
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
        return D(w({}, eh), {
          textDecorationColor: null != (e = null == ee ? true : ee.primaryColor) ? e : true
        })
      }
      return null != J ? {
        color: J
      } : true
    }
  }, eE = (0, u.CR)(Q + $), eb = {
    className: s()(N.oF, es, {
      [em]: ep,
      [N.IW]: "username" === er && null != J
    }),
    style: eg(),
    onClick: V,
    onContextMenu: F,
    children: e_ ? (0, r.jsx)(m.A, {
      userName: eE,
      displayNameStyles: en,
      effectDisplayType: ed ? h.G.ANIMATED : h.G.PLAIN,
      loop: true,
      shouldUnderlineOnHover: null != V
    }) : eE,
    "data-text": Q + $
  }, ey = i.useMemo(() => L && !k ? (0, r.jsx)(b.Ay, {
    primaryGuild: n.primaryGuild,
    userId: a.author.id,
    contextGuildId: X,
    className: N.s4,
    badgeSize: C.Sl.SIZE_12
  }) : null, [L, n.primaryGuild, X, a.author.id, k]), eO = null != P ? P : a.author, eA = null != H && null != M ? (0, r.jsx)(A.A, {
    targetElementRef: z,
    user: eO,
    renderPopout: H,
    shouldShow: M,
    shouldPreload: ec,
    position: o.Fr ? "window_center" : "right",
    avatarUrl: null != n.guildMemberAvatar && null != X ? (0, S.s7)({
      guildId: X,
      userId: eO.id,
      avatar: n.guildMemberAvatar,
      size: 80
    }) : true,
    onRequestClose: B,
    clickTrap: M,
    children: e => {
      let {
        onClick: t
      } = e, n = x(e, ["onClick"]);
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(d.DUT, D(w({
          tag: "span",
          innerRef: z
        }, n, eb), {
          className: s()(eb.className, N.vk, G)
        })), ey]
      })
    }
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.DUT, D(w({}, eb), {
      className: s()(eb.className, G)
    })), ey]
  }), ev = null != Y ? Y[0] : null, eS = null != Y ? Y[1] : null;
  return (0, r.jsxs)(_.f5, {
    value: Z,
    children: [null != ev && !U && L ? (0, r.jsxs)(r.Fragment, {
      children: [" ", ev, " "]
    }) : null, ea ? (0, r.jsx)(d.WYI, {
      color: J,
      colors: ef ? ee : null,
      name: et,
      className: N.m4,
      hoverOverride: ed
    }) : null, eA, !L && !k && (0, r.jsx)(b.Ay, {
      primaryGuild: n.primaryGuild,
      userId: a.author.id,
      contextGuildId: X,
      className: N.s4
    }), null != eS ? eS : null, null == ev || U || L ? null : ev]
  })
}