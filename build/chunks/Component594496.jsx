/** Chunk was on web.js **/
/** chunk id: 594496, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => j
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
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
  Chunk822462 = require("./822462.js");

function j(e) {
  var t, n, i, j;
  let {
    guild: M
  } = e, k = (0, o.e7)([I.default], () => {
    let e = I.default.getCurrentUser();
    return a()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
  }), U = (0, u.m)(D.PremiumTypes.TIER_2), {
    pendingAvatar: G,
    pendingNickname: Z,
    pendingBanner: F,
    pendingBio: B,
    pendingPronouns: V,
    pendingThemeColors: H,
    errors: Y,
    guild: W
  } = (0, o.cj)([N.Z], () => {
    let {
      pendingAvatar: e,
      pendingNickname: t,
      pendingBio: n,
      pendingPronouns: r,
      pendingBanner: i,
      pendingThemeColors: a
    } = N.Z.getAllPending();
    return {
      pendingAvatar: e,
      pendingNickname: t,
      pendingBanner: i,
      pendingBio: n,
      pendingPronouns: r,
      pendingThemeColors: a,
      errors: N.Z.getErrors(),
      guild: N.Z.getGuild()
    }
  }), K = (0, O.SD)({
    userId: k.id,
    image: G
  }), z = null != M ? M : W;
  a()(null != z, "guild should not be null");
  let q = (0, c.gS)(z.id),
    Q = (0, o.e7)([S.ZP], () => null == z.id ? null : S.ZP.getMember(z.id, k.id)),
    X = (0, o.e7)([v.Z], () => v.Z.getGuildMemberProfile(k.id, z.id)),
    J = T.ZP.canUsePremiumProfileCustomization(k),
    $ = (0, d.gd)(G, null == Q ? true : Q.avatar),
    ee = (0, d.f$)(F, null == X ? true : X.banner),
    et = (0, P.p)(H, null == X ? true : X.themeColors),
    en = null != (t = null == X ? true : X.bio) ? t : "",
    er = null != (n = null == X ? true : X.pronouns) ? n : "",
    ei = (e, t, n) => {
      let r = null != t ? null : true;
      n(null != e ? e : r)
    },
    ea = e => ei(e, null == X ? true : X.banner, A.g_),
    eo = e => ei(e, null == Q ? true : Q.avatar, A.I5);
  return (0, r.jsxs)("div", {
    className: L.sectionsContainer,
    children: [(0, r.jsx)(R.Z, {
      errors: null != (i = null == Y ? true : Y.nick) ? i : null == q ? true : q.nick,
      username: C.ZP.getName(k),
      pendingNick: Z,
      currentNick: null == Q ? true : Q.nick,
      user: k,
      guild: z
    }, "nick"), (0, r.jsx)(y.Z, {
      sectionTitle: x.intl.string(x.t["+T3RI/"]),
      errors: null == Y ? true : Y.pronouns,
      onPronounsChange: e => {
        (0, P.xs)(e, er)
      },
      pendingPronouns: V,
      currentPronouns: er
    }, "pronouns"), (0, r.jsxs)(w.Z, {
      user: k,
      showOverlay: !J,
      children: [(0, r.jsx)(_.Z, {
        sectionTitle: (0, r.jsxs)(r.Fragment, {
          children: [x.intl.string(x.t.lqaIxI), (0, r.jsx)(s.u, {
            text: x.intl.string(x.t["5AFxuK"]),
            children: (0, r.jsx)(l.SrA, {
              size: "md",
              color: "currentColor",
              className: L.nitroWheel
            })
          })]
        }),
        showRemoveAvatarButton: $,
        onAvatarChange: eo,
        errors: null == Y ? true : Y.avatar,
        guildId: z.id,
        disabled: !J
      }, "avatar"), (0, r.jsx)(p.Z, {
        sectionTitle: (0, r.jsxs)(r.Fragment, {
          children: [x.intl.string(x.t["7v0T9P"]), (0, r.jsx)(s.u, {
            text: x.intl.string(x.t["5AFxuK"]),
            children: (0, r.jsx)(l.SrA, {
              size: "md",
              color: "currentColor",
              className: L.nitroWheel
            })
          })]
        }),
        user: k,
        guild: z
      }, "decoration"), !U && (0, r.jsx)(m.Z, {
        user: k,
        guildId: z.id
      }), (0, r.jsx)(h.Z, {
        user: k,
        guild: z,
        titleIcon: (0, r.jsx)(s.u, {
          text: x.intl.string(x.t["5AFxuK"]),
          children: (0, r.jsx)(l.SrA, {
            size: "md",
            color: "currentColor",
            className: L.nitroWheel
          })
        })
      }, "nameplate"), (0, r.jsx)(E.Z, {
        sectionTitle: (0, r.jsxs)(r.Fragment, {
          children: [x.intl.string(x.t.wR5wOo), (0, r.jsx)(s.u, {
            text: x.intl.string(x.t["5AFxuK"]),
            children: (0, r.jsx)(l.SrA, {
              size: "md",
              color: "currentColor",
              className: L.nitroWheel
            })
          })]
        }),
        user: k,
        guild: z
      }, "effect"), (0, r.jsx)(g.Z, {
        showRemoveBannerButton: ee,
        errors: null == Y ? true : Y.banner,
        onBannerChange: ea,
        guildId: null == z ? true : z.id,
        disabled: !J
      }, "banner"), (0, r.jsx)(b.Z, {
        user: k,
        pendingAvatarSrc: K,
        pendingColors: H,
        onThemeColorsChange: e => {
          (0, P.ce)(e, null == X ? true : X.themeColors)
        },
        guildId: null == z ? true : z.id,
        showResetThemeButton: et
      }), (0, r.jsx)(f.Z, {
        placeholder: x.intl.string(x.t["/7NKgv"]),
        sectionTitle: (0, r.jsxs)(r.Fragment, {
          children: [x.intl.string(x.t.jGoPJT), (0, r.jsx)(s.u, {
            text: x.intl.string(x.t["5AFxuK"]),
            children: (0, r.jsx)(l.SrA, {
              size: "md",
              color: "currentColor",
              className: L.nitroWheel
            })
          })]
        }),
        onBioChange: e => (0, P.qN)(e, en),
        errors: null != (j = null == Y ? true : Y.bio) ? j : null == q ? true : q.bio,
        pendingBio: B,
        currentBio: en,
        disabled: !J
      }, "about")]
    })]
  })
}