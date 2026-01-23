/** Chunk was on web.js **/
/** chunk id: 161290, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => k
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk631670 = require("./631670.js"),
  Chunk81400 = require("./81400.js"),
  Chunk185955 = require("./185955.jsx"),
  Chunk318785 = require("./318785.js"),
  Chunk919395 = require("./919395.js"),
  Chunk124064 = require("./124064.jsx"),
  Chunk200790 = require("./200790.jsx"),
  Chunk230084 = require("./230084.jsx"),
  Chunk339442 = require("./339442.jsx"),
  Chunk900254 = require("./900254.jsx"),
  Chunk431982 = require("./431982.jsx"),
  Chunk730588 = require("./730588.jsx"),
  Chunk593629 = require("./593629.jsx"),
  Chunk164599 = require("./164599.jsx"),
  Chunk63675 = require("./63675.jsx"),
  Chunk617514 = require("./617514.jsx"),
  Chunk546849 = require("./546849.jsx"),
  Chunk101058 = require("./101058.js"),
  Chunk207803 = require("./207803.js"),
  Chunk622543 = require("./622543.js"),
  Chunk950191 = require("./950191.js"),
  Chunk752319 = require("./752319.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk264671 = require("./264671.js");

function x(e, t, n) {
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
      x(e, t, n[t])
    })
  }
  return e
}

function j(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : j(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function k() {
  var e, t, n, i, x, j, k, U;
  let G = (0, s.bG)([R.default], () => {
      let e = R.default.getCurrentUser();
      return a()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e
    }),
    V = (0, s.bG)([T.A], () => T.A.getUserProfile(G.id)),
    {
      pendingAvatar: F,
      pendingGlobalName: B,
      pendingBanner: H,
      pendingBio: Y,
      pendingPronouns: W,
      pendingAccentColor: K,
      pendingThemeColors: z,
      pendingLegacyUsernameDisabled: q,
      pendingPrimaryGuildId: X,
      errors: Z
    } = (0, s.cf)([N.A], () => {
      let e = N.A.getAllPending(),
        t = N.A.getErrors();
      return M(L({}, e), {
        errors: t
      })
    }),
    Q = (0, I.V7)({
      userId: G.id,
      image: F
    }),
    $ = (0, l.EC)(),
    J = w.Ay.canUsePremiumProfileCustomization(G),
    ee = (0, d.z5)(F, G.avatar),
    et = (0, d.Ac)(H, null == V ? true : V.banner),
    en = (0, C.Ay)(G.id),
    er = null == en ? true : en.getLegacyUsername(),
    ei = (null != (e = null == (k = Z.global_name) ? true : k.length) ? e : 0) > 0 ? Z.global_name : null != (t = null == $ ? true : $.nick) ? t : [],
    ea = (null != (n = null == (U = Z.bio) ? true : U.length) ? n : 0) > 0 ? Z.bio : null != (i = null == $ ? true : $.bio) ? i : [],
    es = (0, u.b)(),
    eo = () => J ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(E.A, {
        showRemoveBannerButton: et,
        errors: Z.banner,
        onBannerChange: S.Iz,
        forcedDivider: true
      }, "banner"), (0, r.jsx)(O.A, {
        user: G,
        pendingAvatarSrc: Q,
        pendingColors: z,
        onThemeColorsChange: S.Zz,
        forcedDivider: true
      })]
    }) : (0, r.jsx)(y.A, {
      user: G,
      savedUserColor: null == V ? true : V.accentColor,
      pendingColor: K,
      setPendingAccentColor: S.XW
    }, "color");
  return (0, r.jsxs)("div", {
    className: D.Q,
    children: [(0, r.jsx)(h.A, {
      placeholder: G.username,
      errors: ei,
      currentGlobalName: G.globalName,
      pendingGlobalName: B,
      onGlobalNameChange: o.U6,
      user: G
    }), (0, r.jsx)(A.A, {
      sectionTitle: P.intl.string(P.t["+T3RI/"]),
      errors: Z.pronouns,
      onPronounsChange: S.Oz,
      pendingPronouns: W,
      currentPronouns: null != (x = null == V ? true : V.pronouns) ? x : ""
    }, "pronouns"), (0, r.jsx)(v.A, {}), (0, r.jsx)(_.A, {
      onAvatarChange: o.zq,
      showRemoveAvatarButton: ee,
      errors: Z.avatar,
      sectionTitle: P.intl.string(P.t.lqaIxI),
      forcedDivider: true
    }, "avatar"), (0, r.jsx)(p.A, {
      user: G,
      sectionTitle: P.intl.string(P.t["7v0T9P"])
    }, "decoration"), (0, r.jsx)(g.A, {
      user: G
    }), (0, r.jsx)(b.A, {
      user: G,
      sectionTitle: P.intl.string(P.t.wR5wOo)
    }, "effect"), eo(), (0, r.jsx)(f.A, {
      sectionTitle: P.intl.string(P.t.NepzEw),
      errors: ea,
      onBioChange: e => (0, d.Ru)(e, null == V ? true : V.bio),
      pendingBio: Y,
      currentBio: null != (j = null == V ? true : V.bio) ? j : ""
    }, "bio"), es.length > 0 && (0, r.jsx)(c.A, {
      availablePrimaryGuilds: es,
      pendingPrimaryGuildId: X,
      onChange: e => (0, o.Ch)(e)
    }), null != er && (0, r.jsx)(m.A, {
      legacyUsername: er,
      pendingLegacyUsernameDisabled: q
    }, "legacy_username")]
  })
}