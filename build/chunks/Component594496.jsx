/** Chunk was on web.js **/
/** chunk id: 594496, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => k
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk594928 = require("./594928.js"),
  Chunk295474 = require("./295474.js"),
  Chunk612659 = require("./612659.js"),
  Chunk150039 = require("./150039.js"),
  Chunk126631 = require("./126631.jsx"),
  Chunk433411 = require("./433411.jsx"),
  Chunk532432 = require("./532432.jsx"),
  Chunk235433 = require("./235433.jsx"),
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
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk737788 = require("./737788.js");

function k(e) {
  var t, n, i, k;
  let {
    guild: j,
    nameplateEnabled: U
  } = e, G = (0, o.e7)([S.default], () => {
    let e = S.default.getCurrentUser();
    return a()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
  }), B = (0, d.m)(x.PremiumTypes.TIER_2), {
    pendingAvatar: Z,
    pendingNickname: F,
    pendingBanner: V,
    pendingBio: H,
    pendingPronouns: Y,
    pendingThemeColors: W,
    errors: K,
    guild: z
  } = (0, o.cj)([R.Z], () => {
    let {
      pendingAvatar: e,
      pendingNickname: t,
      pendingBio: n,
      pendingPronouns: r,
      pendingBanner: i,
      pendingThemeColors: a
    } = R.Z.getAllPending();
    return {
      pendingAvatar: e,
      pendingNickname: t,
      pendingBanner: i,
      pendingBio: n,
      pendingPronouns: r,
      pendingThemeColors: a,
      errors: R.Z.getErrors(),
      guild: R.Z.getGuild()
    }
  }), q = (0, v.SD)({
    userId: G.id,
    image: Z
  }), X = null != j ? j : z;
  a()(null != X, "guild should not be null");
  let Q = (0, u.gS)(X.id),
    J = (0, o.e7)([T.ZP], () => null == X.id ? null : T.ZP.getMember(X.id, G.id)),
    $ = (0, o.e7)([I.Z], () => I.Z.getGuildMemberProfile(G.id, X.id)),
    ee = (0, c.cL)({
      location: "GuildIdentityCustomizationSections"
    }),
    et = A.ZP.canUsePremiumProfileCustomization(G),
    en = (0, f.gd)(Z, null == J ? true : J.avatar),
    er = (0, f.f$)(V, null == $ ? true : $.banner),
    ei = (0, P.p)(W, null == $ ? true : $.themeColors),
    ea = null != (t = null == $ ? true : $.bio) ? t : "",
    eo = null != (n = null == $ ? true : $.pronouns) ? n : "",
    es = (e, t, n) => {
      let r = null != t ? null : true;
      n(null != e ? e : r)
    },
    el = e => es(e, null == $ ? true : $.banner, N.g_),
    ec = e => es(e, null == J ? true : J.avatar, N.I5);
  return (0, r.jsxs)("div", {
    className: M.sectionsContainer,
    children: [(0, r.jsx)(w.Z, {
      errors: null != (i = null == K ? true : K.nick) ? i : null == Q ? true : Q.nick,
      username: C.ZP.getName(G),
      pendingNick: F,
      currentNick: null == J ? true : J.nick,
      user: G,
      guild: X
    }, "nick"), (0, r.jsx)(O.Z, {
      sectionTitle: L.intl.string(L.t["+T3RI/"]),
      errors: null == K ? true : K.pronouns,
      onPronounsChange: e => {
        (0, P.xs)(e, eo)
      },
      pendingPronouns: Y,
      currentPronouns: eo
    }, "pronouns"), (0, r.jsxs)(D.Z, {
      user: G,
      showOverlay: !et,
      children: [(0, r.jsx)(h.Z, {
        sectionTitle: (0, r.jsxs)(r.Fragment, {
          children: [L.intl.string(L.t.lqaIxI), (0, r.jsx)(s.u, {
            text: L.intl.string(L.t["5AFxuK"]),
            children: (0, r.jsx)(l.SrA, {
              size: "md",
              color: "currentColor",
              className: M.nitroWheel
            })
          })]
        }),
        showRemoveAvatarButton: en,
        onAvatarChange: ec,
        errors: null == K ? true : K.avatar,
        guildId: X.id,
        disabled: !et
      }, "avatar"), (0, r.jsx)(p.Z, {
        sectionTitle: (0, r.jsxs)(r.Fragment, {
          children: [L.intl.string(L.t["7v0T9P"]), (0, r.jsx)(s.u, {
            text: L.intl.string(L.t["5AFxuK"]),
            children: (0, r.jsx)(l.SrA, {
              size: "md",
              color: "currentColor",
              className: M.nitroWheel
            })
          })]
        }),
        user: G,
        guild: X
      }, "decoration"), ee && !B && (0, r.jsx)(m.Z, {
        user: G,
        guildId: X.id
      }), U && (0, r.jsx)(g.Z, {
        user: G,
        guild: X,
        titleIcon: (0, r.jsx)(s.u, {
          text: L.intl.string(L.t["5AFxuK"]),
          children: (0, r.jsx)(l.SrA, {
            size: "md",
            color: "currentColor",
            className: M.nitroWheel
          })
        })
      }, "nameplate"), (0, r.jsx)(b.Z, {
        sectionTitle: (0, r.jsxs)(r.Fragment, {
          children: [L.intl.string(L.t.wR5wOo), (0, r.jsx)(s.u, {
            text: L.intl.string(L.t["5AFxuK"]),
            children: (0, r.jsx)(l.SrA, {
              size: "md",
              color: "currentColor",
              className: M.nitroWheel
            })
          })]
        }),
        user: G,
        guild: X
      }, "effect"), (0, r.jsx)(E.Z, {
        showRemoveBannerButton: er,
        errors: null == K ? true : K.banner,
        onBannerChange: el,
        guildId: null == X ? true : X.id,
        disabled: !et
      }, "banner"), (0, r.jsx)(y.Z, {
        user: G,
        pendingAvatarSrc: q,
        pendingColors: W,
        onThemeColorsChange: e => {
          (0, P.ce)(e, null == $ ? true : $.themeColors)
        },
        guildId: null == X ? true : X.id,
        showResetThemeButton: ei
      }), (0, r.jsx)(_.Z, {
        placeholder: L.intl.string(L.t["/7NKgv"]),
        sectionTitle: (0, r.jsxs)(r.Fragment, {
          children: [L.intl.string(L.t.jGoPJT), (0, r.jsx)(s.u, {
            text: L.intl.string(L.t["5AFxuK"]),
            children: (0, r.jsx)(l.SrA, {
              size: "md",
              color: "currentColor",
              className: M.nitroWheel
            })
          })]
        }),
        onBioChange: e => (0, P.qN)(e, ea),
        errors: null != (k = null == K ? true : K.bio) ? k : null == Q ? true : Q.bio,
        pendingBio: H,
        currentBio: ea,
        disabled: !et
      }, "about")]
    })]
  })
}