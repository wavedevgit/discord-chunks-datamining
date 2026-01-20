/** Chunk was on web.js **/
/** chunk id: 532495, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => k
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk809206 = require("./809206.js"),
  Chunk295474 = require("./295474.js"),
  Chunk74469 = require("./74469.jsx"),
  Chunk396402 = require("./396402.js"),
  Chunk150039 = require("./150039.js"),
  Chunk126631 = require("./126631.jsx"),
  Chunk433411 = require("./433411.jsx"),
  Chunk532432 = require("./532432.jsx"),
  Chunk349177 = require("./349177.jsx"),
  Chunk872736 = require("./872736.jsx"),
  Chunk818420 = require("./818420.jsx"),
  Chunk134795 = require("./134795.jsx"),
  Chunk610966 = require("./610966.jsx"),
  Chunk513901 = require("./513901.jsx"),
  Chunk451392 = require("./451392.jsx"),
  Chunk9617 = require("./9617.jsx"),
  Chunk906364 = require("./906364.jsx"),
  Chunk643879 = require("./643879.js"),
  Chunk350327 = require("./350327.js"),
  Chunk621853 = require("./621853.js"),
  Chunk687158 = require("./687158.js"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk485344 = require("./485344.js");

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
  let G = (0, o.e7)([P.default], () => {
      let e = P.default.getCurrentUser();
      return a()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e
    }),
    Z = (0, o.e7)([C.Z], () => C.Z.getUserProfile(G.id)),
    {
      pendingAvatar: F,
      pendingGlobalName: B,
      pendingBanner: V,
      pendingBio: H,
      pendingPronouns: Y,
      pendingAccentColor: W,
      pendingThemeColors: K,
      pendingLegacyUsernameDisabled: z,
      pendingPrimaryGuildId: q,
      errors: Q
    } = (0, o.cj)([N.Z], () => {
      let e = N.Z.getAllPending(),
        t = N.Z.getErrors();
      return M(L({}, e), {
        errors: t
      })
    }),
    X = (0, I.SD)({
      userId: G.id,
      image: F
    }),
    J = (0, l.gS)(),
    $ = w.ZP.canUsePremiumProfileCustomization(G),
    ee = (0, d.gd)(F, G.avatar),
    et = (0, d.f$)(V, null == Z ? true : Z.banner),
    en = (0, A.ZP)(G.id),
    er = null == en ? true : en.getLegacyUsername(),
    ei = (null != (n = null == (e = Q.global_name) ? true : e.length) ? n : 0) > 0 ? Q.global_name : null != (i = null == J ? true : J.nick) ? i : [],
    ea = (null != (x = null == (t = Q.bio) ? true : t.length) ? x : 0) > 0 ? Q.bio : null != (j = null == J ? true : J.bio) ? j : [],
    eo = (0, u.w)(),
    es = () => $ ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(E.Z, {
        showRemoveBannerButton: et,
        errors: Q.banner,
        onBannerChange: T.g_,
        forcedDivider: true
      }, "banner"), (0, r.jsx)(O.Z, {
        user: G,
        pendingAvatarSrc: X,
        pendingColors: K,
        onThemeColorsChange: T.z5,
        forcedDivider: true
      })]
    }) : (0, r.jsx)(b.Z, {
      user: G,
      savedUserColor: null == Z ? true : Z.accentColor,
      pendingColor: W,
      setPendingAccentColor: T.CM
    }, "color");
  return (0, r.jsxs)("div", {
    className: D.sectionsContainer,
    children: [(0, r.jsx)(h.Z, {
      placeholder: G.username,
      errors: ei,
      currentGlobalName: G.globalName,
      pendingGlobalName: B,
      onGlobalNameChange: s.W0,
      user: G
    }), (0, r.jsx)(S.Z, {
      sectionTitle: R.intl.string(R.t["+T3RI/"]),
      errors: Q.pronouns,
      onPronounsChange: T.ID,
      pendingPronouns: Y,
      currentPronouns: null != (k = null == Z ? true : Z.pronouns) ? k : ""
    }, "pronouns"), (0, r.jsx)(v.Z, {}), (0, r.jsx)(_.Z, {
      onAvatarChange: s.I5,
      showRemoveAvatarButton: ee,
      errors: Q.avatar,
      sectionTitle: R.intl.string(R.t.lqaIxI),
      forcedDivider: true
    }, "avatar"), (0, r.jsx)(p.Z, {
      user: G,
      sectionTitle: R.intl.string(R.t["7v0T9P"])
    }, "decoration"), (0, r.jsx)(g.Z, {
      user: G
    }), (0, r.jsx)(y.Z, {
      user: G,
      sectionTitle: R.intl.string(R.t.wR5wOo)
    }, "effect"), es(), (0, r.jsx)(f.Z, {
      sectionTitle: R.intl.string(R.t.NepzEw),
      errors: ea,
      onBioChange: e => (0, d.xQ)(e, null == Z ? true : Z.bio),
      pendingBio: H,
      currentBio: null != (U = null == Z ? true : Z.bio) ? U : ""
    }, "bio"), eo.length > 0 && (0, r.jsx)(c.Z, {
      availablePrimaryGuilds: eo,
      pendingPrimaryGuildId: q,
      onChange: e => (0, s.s4)(e)
    }), null != er && (0, r.jsx)(m.Z, {
      legacyUsername: er,
      pendingLegacyUsernameDisabled: z
    }, "legacy_username")]
  })
}