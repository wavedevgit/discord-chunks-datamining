/** Chunk was on 66181 **/
/** chunk id: 532495, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
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

function R() {
  var e, t, n, r, R, D, Z, w;
  let k = (0, Chunk442837.e7)([Chunk594174.default], () => {
      let e = Chunk594174.default.getCurrentUser();
      return s()(null != module, "DefaultCustomizationSections: user cannot be undefined"), module
    }),
    L = (0, Chunk442837.e7)([Chunk621853.Z], () => Chunk621853.Z.getUserProfile(k.id)),
    {
      pendingAvatar: B,
      pendingGlobalName: M,
      pendingBanner: U,
      pendingBio: V,
      pendingPronouns: G,
      pendingAccentColor: F,
      pendingThemeColors: H,
      pendingLegacyUsernameDisabled: z,
      pendingPrimaryGuildId: W,
      errors: Y
    } = (0, Chunk442837.cj)([Chunk25990.Z], () => {
      var e, t;
      let n = Chunk25990.Z.getAllPending(),
        i = Chunk25990.Z.getErrors();
      return e = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({}, require), t = t = {
        errors: Chunk951288
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(module, Object.getOwnPropertyDescriptors(exports)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(exports)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
      }), module
    }),
    K = (0, Chunk643879.SD)({
      userId: k.id,
      image: B
    }),
    q = (0, Chunk295474.gS)(),
    X = Chunk74538.ZP.canUsePremiumProfileCustomization(k),
    J = (0, Chunk150039.gd)(B, k.avatar),
    Q = (0, Chunk150039.f$)(U, null == L ? true : L.banner),
    $ = (0, Chunk687158.ZP)(k.id),
    ee = null == $ ? true : $.getLegacyUsername(),
    et = (null != (n = null == (e = Y.global_name) ? true : module.length) ? require : 0) > 0 ? Y.global_name : null != (r = null == q ? true : q.nick) ? Chunk512722 : [],
    en = (null != (R = null == (t = Y.bio) ? true : exports.length) ? R : 0) > 0 ? Y.bio : null != (D = null == q ? true : q.bio) ? D : [],
    ei = (0, Chunk396402.w)();
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk436360.sectionsContainer,
    children: [(0, Chunk951288.jsx)(Chunk349177.Z, {
      placeholder: k.username,
      errors: et,
      currentGlobalName: k.globalName,
      pendingGlobalName: M,
      onGlobalNameChange: Chunk809206.W0,
      user: k
    }), (0, Chunk951288.jsx)(Chunk906364.Z, {
      sectionTitle: Chunk388032.intl.string(Chunk388032.t["+T3RIy"]),
      errors: Y.pronouns,
      onPronounsChange: Chunk350327.ID,
      pendingPronouns: G,
      currentPronouns: null != (Z = null == L ? true : L.pronouns) ? Z : ""
    }, "pronouns"), (0, Chunk951288.jsx)(Chunk532432.Z, {
      onAvatarChange: Chunk809206.I5,
      showRemoveAvatarButton: J,
      errors: Y.avatar,
      sectionTitle: Chunk388032.intl.string(Chunk388032.t.lqaIxM),
      forcedDivider: true
    }, "avatar"), (0, Chunk951288.jsx)(Chunk433411.Z, {
      user: k,
      sectionTitle: Chunk388032.intl.string(Chunk388032.t["7v0T9P"])
    }, "decoration"), (0, Chunk951288.jsx)(Chunk818420.Z, {
      user: k
    }), (0, Chunk951288.jsx)(Chunk513901.Z, {
      user: k,
      sectionTitle: Chunk388032.intl.string(Chunk388032.t.wR5wOj)
    }, "effect"), X ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk134795.Z, {
        showRemoveBannerButton: Q,
        errors: Y.banner,
        onBannerChange: Chunk350327.g_,
        forcedDivider: true
      }, "banner"), (0, Chunk951288.jsx)(Chunk451392.Z, {
        user: k,
        pendingAvatarSrc: K,
        pendingColors: H,
        onThemeColorsChange: Chunk350327.z5,
        forcedDivider: true
      })]
    }) : (0, Chunk951288.jsx)(Chunk610966.Z, {
      user: k,
      savedUserColor: null == L ? true : L.accentColor,
      pendingColor: F,
      setPendingAccentColor: Chunk350327.CM
    }, "color"), (0, Chunk951288.jsx)(Chunk126631.Z, {
      sectionTitle: Chunk388032.intl.string(Chunk388032.t.NepzEx),
      errors: en,
      onBioChange: e => (0, u.xQ)(e, null == L ? true : L.bio),
      pendingBio: V,
      currentBio: null != (w = null == L ? true : L.bio) ? w : ""
    }, "bio"), ei.length > 0 && (0, Chunk951288.jsx)(Chunk74469.Z, {
      availablePrimaryGuilds: ei,
      pendingPrimaryGuildId: W,
      onChange: e => (0, l.s4)(e)
    }), null != ee && (0, Chunk951288.jsx)(Chunk872736.Z, {
      legacyUsername: ee,
      pendingLegacyUsernameDisabled: z
    }, "legacy_username")]
  })
}