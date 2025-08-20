/** Chunk was on web.js **/
/** chunk id: 532495, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => M
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
  Chunk906364 = require("./906364.jsx"),
  Chunk643879 = require("./643879.js"),
  Chunk350327 = require("./350327.js"),
  Chunk621853 = require("./621853.js"),
  Chunk687158 = require("./687158.js"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk436360 = require("./436360.js");

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

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : L(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function M() {
  var e, t, n, i, D, L, M, k;
  let U = (0, Chunk442837.e7)([Chunk594174.default], () => {
      let e = Chunk594174.default.getCurrentUser();
      return a()(null != module, "DefaultCustomizationSections: user cannot be undefined"), module
    }),
    G = (0, Chunk442837.e7)([Chunk621853.Z], () => Chunk621853.Z.getUserProfile(U.id)),
    {
      pendingAvatar: B,
      pendingGlobalName: Z,
      pendingBanner: V,
      pendingBio: F,
      pendingPronouns: H,
      pendingAccentColor: Y,
      pendingThemeColors: W,
      pendingLegacyUsernameDisabled: K,
      pendingPrimaryGuildId: z,
      errors: q
    } = (0, Chunk442837.cj)([Chunk25990.Z], () => {
      let e = Chunk25990.Z.getAllPending(),
        t = Chunk25990.Z.getErrors();
      return j(x({}, module), {
        errors: exports
      })
    }),
    X = (0, Chunk643879.SD)({
      userId: U.id,
      image: B
    }),
    Q = (0, Chunk295474.gS)(),
    J = Chunk74538.ZP.canUsePremiumProfileCustomization(U),
    $ = (0, Chunk150039.gd)(B, U.avatar),
    ee = (0, Chunk150039.f$)(V, null == G ? true : G.banner),
    et = (0, Chunk687158.ZP)(U.id),
    en = null == et ? true : et.getLegacyUsername(),
    er = (null != (n = null == (e = q.global_name) ? true : module.length) ? require : 0) > 0 ? q.global_name : null != (i = null == Q ? true : Q.nick) ? Chunk512722 : [],
    ei = (null != (D = null == (t = q.bio) ? true : exports.length) ? D : 0) > 0 ? q.bio : null != (L = null == Q ? true : Q.bio) ? L : [],
    ea = (0, Chunk396402.w)(),
    eo = () => J ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk134795.Z, {
        showRemoveBannerButton: ee,
        errors: q.banner,
        onBannerChange: Chunk350327.g_,
        forcedDivider: true
      }, "banner"), (0, Chunk951288.jsx)(Chunk451392.Z, {
        user: U,
        pendingAvatarSrc: X,
        pendingColors: W,
        onThemeColorsChange: Chunk350327.z5,
        forcedDivider: true
      })]
    }) : (0, Chunk951288.jsx)(Chunk610966.Z, {
      user: U,
      savedUserColor: null == G ? true : G.accentColor,
      pendingColor: Y,
      setPendingAccentColor: Chunk350327.CM
    }, "color");
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk436360.sectionsContainer,
    children: [(0, Chunk951288.jsx)(Chunk349177.Z, {
      placeholder: U.username,
      errors: er,
      currentGlobalName: U.globalName,
      pendingGlobalName: Z,
      onGlobalNameChange: Chunk809206.W0,
      user: U
    }), (0, Chunk951288.jsx)(Chunk906364.Z, {
      sectionTitle: Chunk388032.intl.string(Chunk388032.t["+T3RIy"]),
      errors: q.pronouns,
      onPronounsChange: Chunk350327.ID,
      pendingPronouns: H,
      currentPronouns: null != (M = null == G ? true : G.pronouns) ? M : ""
    }, "pronouns"), (0, Chunk951288.jsx)(Chunk532432.Z, {
      onAvatarChange: Chunk809206.I5,
      showRemoveAvatarButton: $,
      errors: q.avatar,
      sectionTitle: Chunk388032.intl.string(Chunk388032.t.lqaIxM),
      forcedDivider: true
    }, "avatar"), (0, Chunk951288.jsx)(Chunk433411.Z, {
      user: U,
      sectionTitle: Chunk388032.intl.string(Chunk388032.t["7v0T9P"])
    }, "decoration"), (0, Chunk951288.jsx)(Chunk818420.Z, {
      user: U
    }), (0, Chunk951288.jsx)(Chunk513901.Z, {
      user: U,
      sectionTitle: Chunk388032.intl.string(Chunk388032.t.wR5wOj)
    }, "effect"), eo(), (0, Chunk951288.jsx)(Chunk126631.Z, {
      sectionTitle: Chunk388032.intl.string(Chunk388032.t.NepzEx),
      errors: ei,
      onBioChange: e => (0, d.xQ)(e, null == G ? true : G.bio),
      pendingBio: F,
      currentBio: null != (k = null == G ? true : G.bio) ? k : ""
    }, "bio"), ea.length > 0 && (0, Chunk951288.jsx)(Chunk74469.Z, {
      availablePrimaryGuilds: ea,
      pendingPrimaryGuildId: z,
      onChange: e => (0, s.s4)(e)
    }), null != en && (0, Chunk951288.jsx)(Chunk872736.Z, {
      legacyUsername: en,
      pendingLegacyUsernameDisabled: K
    }, "legacy_username")]
  })
}