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
  Chunk485344 = require("./485344.js");

function j(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      j(e, t, n[t])
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
  var e, t, n, i, j, k, G, Z, F;
  let B = (0, o.e7)([w.default], () => {
      let e = w.default.getCurrentUser();
      return a()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e
    }),
    V = (0, o.e7)([A.Z], () => A.Z.getUserProfile(B.id)),
    {
      pendingAvatar: H,
      pendingGlobalName: Y,
      pendingBanner: W,
      pendingBio: K,
      pendingPronouns: z,
      pendingAccentColor: q,
      pendingThemeColors: Q,
      pendingLegacyUsernameDisabled: X,
      pendingPrimaryGuildId: J,
      errors: $
    } = (0, o.cj)([R.Z], () => {
      let e = R.Z.getAllPending(),
        t = R.Z.getErrors();
      return U(M({}, e), {
        errors: t
      })
    }),
    ee = (0, I.SD)({
      userId: B.id,
      image: H
    }),
    et = (0, l.gS)(),
    en = D.ZP.canUsePremiumProfileCustomization(B),
    er = (0, d.gd)(H, B.avatar),
    ei = (0, d.f$)(W, null == V ? true : V.banner),
    ea = (0, N.ZP)(B.id),
    eo = null == ea ? true : ea.getLegacyUsername(),
    es = (null != (i = null == (e = $.global_name) ? true : e.length) ? i : 0) > 0 ? $.global_name : null != (j = null == et ? true : et.nick) ? j : [],
    el = (null != (k = null == (t = $.bio) ? true : t.length) ? k : 0) > 0 ? $.bio : null != (G = null == et ? true : et.bio) ? G : [],
    ec = (0, u.w)(),
    eu = (0, P.Z)({
      location: "DefaultCustomizationSections"
    }),
    ed = (null == V || null == (n = V.widgets) ? true : n.some(C.Wc)) === true,
    ef = eu || ed,
    ep = () => en ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(E.Z, {
        showRemoveBannerButton: ei,
        errors: $.banner,
        onBannerChange: T.g_,
        forcedDivider: true
      }, "banner"), (0, r.jsx)(O.Z, {
        user: B,
        pendingAvatarSrc: ee,
        pendingColors: Q,
        onThemeColorsChange: T.z5,
        forcedDivider: true
      })]
    }) : (0, r.jsx)(b.Z, {
      user: B,
      savedUserColor: null == V ? true : V.accentColor,
      pendingColor: q,
      setPendingAccentColor: T.CM
    }, "color");
  return (0, r.jsxs)("div", {
    className: L.sectionsContainer,
    children: [(0, r.jsx)(m.Z, {
      placeholder: B.username,
      errors: es,
      currentGlobalName: B.globalName,
      pendingGlobalName: Y,
      onGlobalNameChange: s.W0,
      user: B
    }), (0, r.jsx)(S.Z, {
      sectionTitle: x.intl.string(x.t["+T3RI/"]),
      errors: $.pronouns,
      onPronounsChange: T.ID,
      pendingPronouns: z,
      currentPronouns: null != (Z = null == V ? true : V.pronouns) ? Z : ""
    }, "pronouns"), ef && (0, r.jsx)(v.Z, {}), (0, r.jsx)(_.Z, {
      onAvatarChange: s.I5,
      showRemoveAvatarButton: er,
      errors: $.avatar,
      sectionTitle: x.intl.string(x.t.lqaIxI),
      forcedDivider: true
    }, "avatar"), (0, r.jsx)(p.Z, {
      user: B,
      sectionTitle: x.intl.string(x.t["7v0T9P"])
    }, "decoration"), (0, r.jsx)(g.Z, {
      user: B
    }), (0, r.jsx)(y.Z, {
      user: B,
      sectionTitle: x.intl.string(x.t.wR5wOo)
    }, "effect"), ep(), (0, r.jsx)(f.Z, {
      sectionTitle: x.intl.string(x.t.NepzEw),
      errors: el,
      onBioChange: e => (0, d.xQ)(e, null == V ? true : V.bio),
      pendingBio: K,
      currentBio: null != (F = null == V ? true : V.bio) ? F : ""
    }, "bio"), ec.length > 0 && (0, r.jsx)(c.Z, {
      availablePrimaryGuilds: ec,
      pendingPrimaryGuildId: J,
      onChange: e => (0, s.s4)(e)
    }), null != eo && (0, r.jsx)(h.Z, {
      legacyUsername: eo,
      pendingLegacyUsernameDisabled: X
    }, "legacy_username")]
  })
}