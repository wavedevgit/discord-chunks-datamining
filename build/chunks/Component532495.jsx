/** Chunk was on web.js **/
/** chunk id: 532495, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => U
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
  Chunk9617 = require("./9617.jsx"),
  Chunk906364 = require("./906364.jsx"),
  Chunk643879 = require("./643879.js"),
  Chunk350327 = require("./350327.js"),
  Chunk621853 = require("./621853.js"),
  Chunk447448 = require("./447448.js"),
  Chunk687158 = require("./687158.js"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk341217 = require("./341217.js");

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function j(e) {
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

function k(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : k(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function U() {
  var e, t, n, i, L, k, U, G;
  let B = (0, Chunk442837.e7)([Chunk594174.default], () => {
      let e = Chunk594174.default.getCurrentUser();
      return a()(null != module, "DefaultCustomizationSections: user cannot be undefined"), module
    }),
    Z = (0, Chunk442837.e7)([Chunk621853.Z], () => Chunk621853.Z.getUserProfile(B.id)),
    {
      pendingAvatar: F,
      pendingGlobalName: V,
      pendingBanner: H,
      pendingBio: Y,
      pendingPronouns: W,
      pendingAccentColor: K,
      pendingThemeColors: z,
      pendingLegacyUsernameDisabled: q,
      pendingPrimaryGuildId: X,
      errors: Q
    } = (0, Chunk442837.cj)([Chunk25990.Z], () => {
      let e = Chunk25990.Z.getAllPending(),
        t = Chunk25990.Z.getErrors();
      return M(j({}, module), {
        errors: exports
      })
    }),
    J = (0, Chunk643879.SD)({
      userId: B.id,
      image: F
    }),
    $ = (0, Chunk295474.gS)(),
    ee = Chunk74538.ZP.canUsePremiumProfileCustomization(B),
    et = (0, Chunk150039.gd)(F, B.avatar),
    en = (0, Chunk150039.f$)(H, null == Z ? true : Z.banner),
    er = (0, Chunk687158.ZP)(B.id),
    ei = null == er ? true : er.getLegacyUsername(),
    ea = (null != (n = null == (e = Q.global_name) ? true : module.length) ? require : 0) > 0 ? Q.global_name : null != (i = null == $ ? true : $.nick) ? Chunk512722 : [],
    eo = (null != (L = null == (t = Q.bio) ? true : exports.length) ? L : 0) > 0 ? Q.bio : null != (k = null == $ ? true : $.bio) ? k : [],
    es = (0, Chunk396402.w)(),
    el = (0, Chunk447448.k)({
      location: "DefaultCustomizationSections"
    }),
    ec = () => ee ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk134795.Z, {
        showRemoveBannerButton: en,
        errors: Q.banner,
        onBannerChange: Chunk350327.g_,
        forcedDivider: true
      }, "banner"), (0, Chunk951288.jsx)(Chunk451392.Z, {
        user: B,
        pendingAvatarSrc: J,
        pendingColors: z,
        onThemeColorsChange: Chunk350327.z5,
        forcedDivider: true
      })]
    }) : (0, Chunk951288.jsx)(Chunk610966.Z, {
      user: B,
      savedUserColor: null == Z ? true : Z.accentColor,
      pendingColor: K,
      setPendingAccentColor: Chunk350327.CM
    }, "color");
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk341217.sectionsContainer,
    children: [(0, Chunk951288.jsx)(Chunk349177.Z, {
      placeholder: B.username,
      errors: ea,
      currentGlobalName: B.globalName,
      pendingGlobalName: V,
      onGlobalNameChange: Chunk809206.W0,
      user: B
    }), (0, Chunk951288.jsx)(Chunk906364.Z, {
      sectionTitle: Chunk388032.intl.string(Chunk388032.t["+T3RIy"]),
      errors: Q.pronouns,
      onPronounsChange: Chunk350327.ID,
      pendingPronouns: W,
      currentPronouns: null != (U = null == Z ? true : Z.pronouns) ? U : ""
    }, "pronouns"), (0, Chunk951288.jsx)(Chunk532432.Z, {
      onAvatarChange: Chunk809206.I5,
      showRemoveAvatarButton: et,
      errors: Q.avatar,
      sectionTitle: Chunk388032.intl.string(Chunk388032.t.lqaIxM),
      forcedDivider: true
    }, "avatar"), (0, Chunk951288.jsx)(Chunk433411.Z, {
      user: B,
      sectionTitle: Chunk388032.intl.string(Chunk388032.t["7v0T9P"])
    }, "decoration"), (0, Chunk951288.jsx)(Chunk818420.Z, {
      user: B
    }), (0, Chunk951288.jsx)(Chunk513901.Z, {
      user: B,
      sectionTitle: Chunk388032.intl.string(Chunk388032.t.wR5wOj)
    }, "effect"), ec(), el && (0, Chunk951288.jsx)(Chunk9617.Z, {}), (0, Chunk951288.jsx)(Chunk126631.Z, {
      sectionTitle: Chunk388032.intl.string(Chunk388032.t.NepzEx),
      errors: eo,
      onBioChange: e => (0, d.xQ)(e, null == Z ? true : Z.bio),
      pendingBio: Y,
      currentBio: null != (G = null == Z ? true : Z.bio) ? G : ""
    }, "bio"), es.length > 0 && (0, Chunk951288.jsx)(Chunk74469.Z, {
      availablePrimaryGuilds: es,
      pendingPrimaryGuildId: X,
      onChange: e => (0, s.s4)(e)
    }), null != ei && (0, Chunk951288.jsx)(Chunk872736.Z, {
      legacyUsername: ei,
      pendingLegacyUsernameDisabled: q
    }, "legacy_username")]
  })
}