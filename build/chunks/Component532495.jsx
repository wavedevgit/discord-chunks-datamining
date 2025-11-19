/** Chunk was on web.js **/
/** chunk id: 532495, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => G
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
  Chunk836197 = require("./836197.js"),
  Chunk621853 = require("./621853.js"),
  Chunk687158 = require("./687158.js"),
  Chunk477448 = require("./477448.js"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk436360 = require("./436360.js");

function M(e, t, n) {
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
      M(e, t, n[t])
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

function U(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : k(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function G() {
  var e, t, n, i, M, k, G, B, Z;
  let F = (0, Chunk442837.e7)([Chunk594174.default], () => {
      let e = Chunk594174.default.getCurrentUser();
      return a()(null != module, "DefaultCustomizationSections: user cannot be undefined"), module
    }),
    V = (0, Chunk442837.e7)([Chunk621853.Z], () => Chunk621853.Z.getUserProfile(F.id)),
    {
      pendingAvatar: H,
      pendingGlobalName: Y,
      pendingBanner: W,
      pendingBio: K,
      pendingPronouns: z,
      pendingAccentColor: q,
      pendingThemeColors: X,
      pendingLegacyUsernameDisabled: Q,
      pendingPrimaryGuildId: J,
      errors: $
    } = (0, Chunk442837.cj)([Chunk25990.Z], () => {
      let e = Chunk25990.Z.getAllPending(),
        t = Chunk25990.Z.getErrors();
      return U(j({}, module), {
        errors: exports
      })
    }),
    ee = (0, Chunk643879.SD)({
      userId: F.id,
      image: H
    }),
    et = (0, Chunk295474.gS)(),
    en = Chunk74538.ZP.canUsePremiumProfileCustomization(F),
    er = (0, Chunk150039.gd)(H, F.avatar),
    ei = (0, Chunk150039.f$)(W, null == V ? true : V.banner),
    ea = (0, Chunk687158.ZP)(F.id),
    eo = null == ea ? true : ea.getLegacyUsername(),
    es = (null != (i = null == (e = $.global_name) ? true : module.length) ? Chunk512722 : 0) > 0 ? $.global_name : null != (M = null == et ? true : et.nick) ? M : [],
    el = (null != (k = null == (t = $.bio) ? true : exports.length) ? k : 0) > 0 ? $.bio : null != (G = null == et ? true : et.bio) ? G : [],
    ec = (0, Chunk396402.w)(),
    eu = (0, Chunk477448.Z)({
      location: "DefaultCustomizationSections"
    }),
    ed = (null == V || null == (n = V.widgets) ? true : require.some(e => A.Ki.includes(e.type))) === true,
    ef = eu || ed,
    e_ = () => en ? (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [(0, Chunk54381.jsx)(Chunk134795.Z, {
        showRemoveBannerButton: ei,
        errors: $.banner,
        onBannerChange: Chunk350327.g_,
        forcedDivider: true
      }, "banner"), (0, Chunk54381.jsx)(Chunk451392.Z, {
        user: F,
        pendingAvatarSrc: ee,
        pendingColors: X,
        onThemeColorsChange: Chunk350327.z5,
        forcedDivider: true
      })]
    }) : (0, Chunk54381.jsx)(Chunk610966.Z, {
      user: F,
      savedUserColor: null == V ? true : V.accentColor,
      pendingColor: q,
      setPendingAccentColor: Chunk350327.CM
    }, "color");
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk436360.sectionsContainer,
    children: [(0, Chunk54381.jsx)(Chunk349177.Z, {
      placeholder: F.username,
      errors: es,
      currentGlobalName: F.globalName,
      pendingGlobalName: Y,
      onGlobalNameChange: Chunk809206.W0,
      user: F
    }), (0, Chunk54381.jsx)(Chunk906364.Z, {
      sectionTitle: Chunk388032.intl.string(Chunk388032.t["+T3RI/"]),
      errors: $.pronouns,
      onPronounsChange: Chunk350327.ID,
      pendingPronouns: z,
      currentPronouns: null != (B = null == V ? true : V.pronouns) ? B : ""
    }, "pronouns"), ef && (0, Chunk54381.jsx)(Chunk9617.Z, {}), (0, Chunk54381.jsx)(Chunk532432.Z, {
      onAvatarChange: Chunk809206.I5,
      showRemoveAvatarButton: er,
      errors: $.avatar,
      sectionTitle: Chunk388032.intl.string(Chunk388032.t.lqaIxI),
      forcedDivider: true
    }, "avatar"), (0, Chunk54381.jsx)(Chunk433411.Z, {
      user: F,
      sectionTitle: Chunk388032.intl.string(Chunk388032.t["7v0T9P"])
    }, "decoration"), (0, Chunk54381.jsx)(Chunk818420.Z, {
      user: F
    }), (0, Chunk54381.jsx)(Chunk513901.Z, {
      user: F,
      sectionTitle: Chunk388032.intl.string(Chunk388032.t.wR5wOo)
    }, "effect"), e_(), (0, Chunk54381.jsx)(Chunk126631.Z, {
      sectionTitle: Chunk388032.intl.string(Chunk388032.t.NepzEw),
      errors: el,
      onBioChange: e => (0, d.xQ)(e, null == V ? true : V.bio),
      pendingBio: K,
      currentBio: null != (Z = null == V ? true : V.bio) ? Z : ""
    }, "bio"), ec.length > 0 && (0, Chunk54381.jsx)(Chunk74469.Z, {
      availablePrimaryGuilds: ec,
      pendingPrimaryGuildId: J,
      onChange: e => (0, s.s4)(e)
    }), null != eo && (0, Chunk54381.jsx)(Chunk872736.Z, {
      legacyUsername: eo,
      pendingLegacyUsernameDisabled: Q
    }, "legacy_username")]
  })
}