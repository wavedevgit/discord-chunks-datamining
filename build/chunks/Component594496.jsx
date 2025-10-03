/** Chunk was on web.js **/
/** chunk id: 594496, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
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

function D(e) {
  var t, n, i, D;
  let {
    guild: L,
    nameplateEnabled: x
  } = e, M = (0, o.e7)([v.default], () => {
    let e = v.default.getCurrentUser();
    return a()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
  }), {
    pendingAvatar: j,
    pendingNickname: k,
    pendingBanner: U,
    pendingBio: G,
    pendingPronouns: B,
    pendingThemeColors: Z,
    errors: F,
    guild: V
  } = (0, o.cj)([A.Z], () => {
    let {
      pendingAvatar: e,
      pendingNickname: t,
      pendingBio: n,
      pendingPronouns: r,
      pendingBanner: i,
      pendingThemeColors: a
    } = A.Z.getAllPending();
    return {
      pendingAvatar: e,
      pendingNickname: t,
      pendingBanner: i,
      pendingBio: n,
      pendingPronouns: r,
      pendingThemeColors: a,
      errors: A.Z.getErrors(),
      guild: A.Z.getGuild()
    }
  }), H = (0, b.SD)({
    userId: M.id,
    image: j
  }), Y = null != L ? L : V;
  a()(null != Y, "guild should not be null");
  let W = (0, c.gS)(Y.id),
    K = (0, o.e7)([O.ZP], () => null == Y.id ? null : O.ZP.getMember(Y.id, M.id)),
    z = (0, o.e7)([y.Z], () => y.Z.getGuildMemberProfile(M.id, Y.id)),
    q = I.ZP.canUsePremiumProfileCustomization(M),
    X = (0, u.gd)(j, null == K ? true : K.avatar),
    Q = (0, u.f$)(U, null == z ? true : z.banner),
    J = (0, C.p)(Z, null == z ? true : z.themeColors),
    $ = null != (t = null == z ? true : z.bio) ? t : "",
    ee = null != (n = null == z ? true : z.pronouns) ? n : "",
    et = (e, t, n) => {
      let r = null != t ? null : true;
      n(null != e ? e : r)
    },
    en = e => et(e, null == z ? true : z.banner, S.g_),
    er = e => et(e, null == K ? true : K.avatar, S.I5);
  return (0, r.jsxs)("div", {
    className: w.sectionsContainer,
    children: [(0, r.jsx)(N.Z, {
      errors: null != (i = null == F ? true : F.nick) ? i : null == W ? true : W.nick,
      username: T.ZP.getName(M),
      pendingNick: k,
      currentNick: null == K ? true : K.nick,
      user: M,
      guild: Y
    }, "nick"), (0, r.jsx)(E.Z, {
      sectionTitle: P.intl.string(P.t["+T3RIy"]),
      errors: null == F ? true : F.pronouns,
      onPronounsChange: e => {
        (0, C.xs)(e, ee)
      },
      pendingPronouns: B,
      currentPronouns: ee
    }, "pronouns"), (0, r.jsxs)(R.Z, {
      user: M,
      showOverlay: !q,
      children: [(0, r.jsx)(_.Z, {
        sectionTitle: (0, r.jsxs)(r.Fragment, {
          children: [P.intl.string(P.t.lqaIxM), (0, r.jsx)(s.u, {
            text: P.intl.string(P.t["5AFxuL"]),
            children: (0, r.jsx)(l.SrA, {
              size: "md",
              color: "currentColor",
              className: w.nitroWheel
            })
          })]
        }),
        showRemoveAvatarButton: X,
        onAvatarChange: er,
        errors: null == F ? true : F.avatar,
        guildId: Y.id,
        disabled: !q
      }, "avatar"), (0, r.jsx)(f.Z, {
        sectionTitle: (0, r.jsxs)(r.Fragment, {
          children: [P.intl.string(P.t["7v0T9P"]), (0, r.jsx)(s.u, {
            text: P.intl.string(P.t["5AFxuL"]),
            children: (0, r.jsx)(l.SrA, {
              size: "md",
              color: "currentColor",
              className: w.nitroWheel
            })
          })]
        }),
        user: M,
        guild: Y
      }, "decoration"), x && (0, r.jsx)(p.Z, {
        user: M,
        guild: Y,
        titleIcon: (0, r.jsx)(s.u, {
          text: P.intl.string(P.t["5AFxuL"]),
          children: (0, r.jsx)(l.SrA, {
            size: "md",
            color: "currentColor",
            className: w.nitroWheel
          })
        })
      }, "nameplate"), (0, r.jsx)(m.Z, {
        sectionTitle: (0, r.jsxs)(r.Fragment, {
          children: [P.intl.string(P.t.wR5wOj), (0, r.jsx)(s.u, {
            text: P.intl.string(P.t["5AFxuL"]),
            children: (0, r.jsx)(l.SrA, {
              size: "md",
              color: "currentColor",
              className: w.nitroWheel
            })
          })]
        }),
        user: M,
        guild: Y
      }, "effect"), (0, r.jsx)(h.Z, {
        showRemoveBannerButton: Q,
        errors: null == F ? true : F.banner,
        onBannerChange: en,
        guildId: null == Y ? true : Y.id,
        disabled: !q
      }, "banner"), (0, r.jsx)(g.Z, {
        user: M,
        pendingAvatarSrc: H,
        pendingColors: Z,
        onThemeColorsChange: e => {
          (0, C.ce)(e, null == z ? true : z.themeColors)
        },
        guildId: null == Y ? true : Y.id,
        showResetThemeButton: J
      }), (0, r.jsx)(d.Z, {
        placeholder: P.intl.string(P.t["/7NKgo"]),
        sectionTitle: (0, r.jsxs)(r.Fragment, {
          children: [P.intl.string(P.t.jGoPJS), (0, r.jsx)(s.u, {
            text: P.intl.string(P.t["5AFxuL"]),
            children: (0, r.jsx)(l.SrA, {
              size: "md",
              color: "currentColor",
              className: w.nitroWheel
            })
          })]
        }),
        onBioChange: e => (0, C.qN)(e, $),
        errors: null != (D = null == F ? true : F.bio) ? D : null == W ? true : W.bio,
        pendingBio: G,
        currentBio: $,
        disabled: !q
      }, "about")]
    })]
  })
}