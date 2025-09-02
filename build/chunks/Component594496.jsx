/** Chunk was on web.js **/
/** chunk id: 594496, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => j
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk295474 = require("./295474.js"),
  Chunk150039 = require("./150039.js"),
  Chunk126631 = require("./126631.jsx"),
  Chunk433411 = require("./433411.jsx"),
  Chunk532432 = require("./532432.jsx"),
  Chunk818420 = require("./818420.jsx"),
  Chunk134795 = require("./134795.jsx"),
  Chunk513901 = require("./513901.jsx"),
  Chunk451392 = require("./451392.jsx"),
  Chunk906364 = require("./906364.jsx"),
  Chunk643879 = require("./643879.js"),
  Chunk621853 = require("./621853.js"),
  Chunk271383 = require("./271383.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk51144 = require("./51144.js"),
  Chunk18438 = require("./18438.js"),
  Chunk778825 = require("./778825.js"),
  Chunk52597 = require("./52597.js"),
  Chunk430131 = require("./430131.jsx"),
  Chunk291334 = require("./291334.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk737788 = require("./737788.js");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function D(e) {
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

function x(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function L(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : x(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function j(e) {
  var t, n, i, w;
  let {
    guild: x,
    nameplateEnabled: j
  } = e, M = (0, o.e7)([O.default], () => {
    let e = O.default.getCurrentUser();
    return a()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
  }), {
    pendingAvatar: k,
    pendingNickname: U,
    pendingBanner: G,
    pendingBio: B,
    pendingPronouns: Z,
    pendingThemeColors: F,
    errors: V,
    guild: H
  } = (0, o.cj)([T.Z], () => {
    let {
      pendingAvatar: e,
      pendingNickname: t,
      pendingBio: n,
      pendingPronouns: r,
      pendingBanner: i,
      pendingThemeColors: a
    } = T.Z.getAllPending();
    return {
      pendingAvatar: e,
      pendingNickname: t,
      pendingBanner: i,
      pendingBio: n,
      pendingPronouns: r,
      pendingThemeColors: a,
      errors: T.Z.getErrors(),
      guild: T.Z.getGuild()
    }
  }), Y = (0, E.SD)({
    userId: M.id,
    image: k
  }), W = null != x ? x : H;
  a()(null != W, "guild should not be null");
  let K = (0, l.gS)(W.id),
    z = (0, o.e7)([y.ZP], () => null == W.id ? null : y.ZP.getMember(W.id, M.id)),
    q = (0, o.e7)([b.Z], () => b.Z.getGuildMemberProfile(M.id, W.id)),
    X = v.ZP.canUsePremiumProfileCustomization(M),
    Q = (0, c.gd)(k, null == z ? true : z.avatar),
    J = (0, c.f$)(G, null == q ? true : q.banner),
    $ = (0, A.p)(F, null == q ? true : q.themeColors),
    ee = null != (t = null == q ? true : q.bio) ? t : "",
    et = null != (n = null == q ? true : q.pronouns) ? n : "",
    en = (e, t, n) => {
      let r = null != t ? null : true;
      n(null != e ? e : r)
    },
    er = e => en(e, null == q ? true : q.banner, S.g_),
    ei = e => en(e, null == z ? true : z.avatar, S.I5);
  return (0, r.jsxs)("div", {
    className: P.sectionsContainer,
    children: [(0, r.jsx)(C.Z, {
      errors: null != (i = null == V ? true : V.nick) ? i : null == K ? true : K.nick,
      username: I.ZP.getName(M),
      pendingNick: U,
      currentNick: null == z ? true : z.nick,
      guild: W
    }, "nick"), (0, r.jsx)(g.Z, {
      sectionTitle: R.intl.string(R.t["+T3RIy"]),
      errors: null == V ? true : V.pronouns,
      onPronounsChange: e => {
        (0, A.xs)(e, et)
      },
      pendingPronouns: Z,
      currentPronouns: et
    }, "pronouns"), (0, r.jsxs)(N.Z, {
      user: M,
      showOverlay: !X,
      children: [(0, r.jsx)(f.Z, {
        sectionTitle: (0, r.jsxs)(r.Fragment, {
          children: [R.intl.string(R.t.lqaIxM), (0, r.jsx)(s.ua7, {
            text: R.intl.string(R.t["5AFxuL"]),
            children: e => (0, r.jsx)(s.SrA, L(D({
              size: "md",
              color: "currentColor"
            }, e), {
              className: P.nitroWheel
            }))
          })]
        }),
        showRemoveAvatarButton: Q,
        onAvatarChange: ei,
        errors: null == V ? true : V.avatar,
        guildId: W.id,
        disabled: !X
      }, "avatar"), (0, r.jsx)(d.Z, {
        sectionTitle: (0, r.jsxs)(r.Fragment, {
          children: [R.intl.string(R.t["7v0T9P"]), (0, r.jsx)(s.ua7, {
            text: R.intl.string(R.t["5AFxuL"]),
            children: e => (0, r.jsx)(s.SrA, L(D({
              size: "md",
              color: "currentColor"
            }, e), {
              className: P.nitroWheel
            }))
          })]
        }),
        user: M,
        guild: W
      }, "decoration"), j && (0, r.jsx)(_.Z, {
        user: M,
        guild: W,
        titleIcon: (0, r.jsx)(s.ua7, {
          text: R.intl.string(R.t["5AFxuL"]),
          children: e => (0, r.jsx)(s.SrA, L(D({
            size: "md",
            color: "currentColor"
          }, e), {
            className: P.nitroWheel
          }))
        })
      }, "nameplate"), (0, r.jsx)(h.Z, {
        sectionTitle: (0, r.jsxs)(r.Fragment, {
          children: [R.intl.string(R.t.wR5wOj), (0, r.jsx)(s.ua7, {
            text: R.intl.string(R.t["5AFxuL"]),
            children: e => (0, r.jsx)(s.SrA, L(D({
              size: "md",
              color: "currentColor"
            }, e), {
              className: P.nitroWheel
            }))
          })]
        }),
        user: M,
        guild: W
      }, "effect"), (0, r.jsx)(p.Z, {
        showRemoveBannerButton: J,
        errors: null == V ? true : V.banner,
        onBannerChange: er,
        guildId: null == W ? true : W.id,
        disabled: !X
      }, "banner"), (0, r.jsx)(m.Z, {
        user: M,
        pendingAvatarSrc: Y,
        pendingColors: F,
        onThemeColorsChange: e => {
          (0, A.ce)(e, null == q ? true : q.themeColors)
        },
        guildId: null == W ? true : W.id,
        showResetThemeButton: $
      }), (0, r.jsx)(u.Z, {
        placeholder: R.intl.string(R.t["/7NKgo"]),
        sectionTitle: (0, r.jsxs)(r.Fragment, {
          children: [R.intl.string(R.t.jGoPJS), (0, r.jsx)(s.ua7, {
            text: R.intl.string(R.t["5AFxuL"]),
            children: e => (0, r.jsx)(s.SrA, L(D({
              size: "md",
              color: "currentColor"
            }, e), {
              className: P.nitroWheel
            }))
          })]
        }),
        onBioChange: e => (0, A.qN)(e, ee),
        errors: null != (w = null == V ? true : V.bio) ? w : null == K ? true : K.bio,
        pendingBio: B,
        currentBio: ee,
        disabled: !X
      }, "about")]
    })]
  })
}