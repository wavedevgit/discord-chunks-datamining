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

function j(e) {
  var t, n, i, j;
  let {
    guild: k
  } = e, U = (0, o.e7)([S.default], () => {
    let e = S.default.getCurrentUser();
    return a()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
  }), G = (0, d.m)(x.PremiumTypes.TIER_2), {
    pendingAvatar: B,
    pendingNickname: Z,
    pendingBanner: F,
    pendingBio: V,
    pendingPronouns: H,
    pendingThemeColors: Y,
    errors: W,
    guild: K
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
  }), z = (0, v.SD)({
    userId: U.id,
    image: B
  }), q = null != k ? k : K;
  a()(null != q, "guild should not be null");
  let X = (0, u.gS)(q.id),
    Q = (0, o.e7)([T.ZP], () => null == q.id ? null : T.ZP.getMember(q.id, U.id)),
    J = (0, o.e7)([I.Z], () => I.Z.getGuildMemberProfile(U.id, q.id)),
    $ = (0, c.cL)({
      location: "GuildIdentityCustomizationSections"
    }),
    ee = A.ZP.canUsePremiumProfileCustomization(U),
    et = (0, f.gd)(B, null == Q ? true : Q.avatar),
    en = (0, f.f$)(F, null == J ? true : J.banner),
    er = (0, P.p)(Y, null == J ? true : J.themeColors),
    ei = null != (t = null == J ? true : J.bio) ? t : "",
    ea = null != (n = null == J ? true : J.pronouns) ? n : "",
    eo = (e, t, n) => {
      let r = null != t ? null : true;
      n(null != e ? e : r)
    },
    es = e => eo(e, null == J ? true : J.banner, N.g_),
    el = e => eo(e, null == Q ? true : Q.avatar, N.I5);
  return (0, r.jsxs)("div", {
    className: M.sectionsContainer,
    children: [(0, r.jsx)(w.Z, {
      errors: null != (i = null == W ? true : W.nick) ? i : null == X ? true : X.nick,
      username: C.ZP.getName(U),
      pendingNick: Z,
      currentNick: null == Q ? true : Q.nick,
      user: U,
      guild: q
    }, "nick"), (0, r.jsx)(O.Z, {
      sectionTitle: L.intl.string(L.t["+T3RI/"]),
      errors: null == W ? true : W.pronouns,
      onPronounsChange: e => {
        (0, P.xs)(e, ea)
      },
      pendingPronouns: H,
      currentPronouns: ea
    }, "pronouns"), (0, r.jsxs)(D.Z, {
      user: U,
      showOverlay: !ee,
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
        showRemoveAvatarButton: et,
        onAvatarChange: el,
        errors: null == W ? true : W.avatar,
        guildId: q.id,
        disabled: !ee
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
        user: U,
        guild: q
      }, "decoration"), $ && !G && (0, r.jsx)(m.Z, {
        user: U,
        guildId: q.id
      }), (0, r.jsx)(g.Z, {
        user: U,
        guild: q,
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
        user: U,
        guild: q
      }, "effect"), (0, r.jsx)(E.Z, {
        showRemoveBannerButton: en,
        errors: null == W ? true : W.banner,
        onBannerChange: es,
        guildId: null == q ? true : q.id,
        disabled: !ee
      }, "banner"), (0, r.jsx)(y.Z, {
        user: U,
        pendingAvatarSrc: z,
        pendingColors: Y,
        onThemeColorsChange: e => {
          (0, P.ce)(e, null == J ? true : J.themeColors)
        },
        guildId: null == q ? true : q.id,
        showResetThemeButton: er
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
        onBioChange: e => (0, P.qN)(e, ei),
        errors: null != (j = null == W ? true : W.bio) ? j : null == X ? true : X.bio,
        pendingBio: V,
        currentBio: ei,
        disabled: !ee
      }, "about")]
    })]
  })
}