/** Chunk was on 5606 **/
/** chunk id: 281052, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => L
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk81400 = require("./81400.js"),
  Chunk757036 = require("./757036.js"),
  Chunk919395 = require("./919395.js"),
  Chunk124064 = require("./124064.jsx"),
  Chunk200790 = require("./200790.jsx"),
  Chunk230084 = require("./230084.jsx"),
  Chunk180020 = require("./180020.jsx"),
  Chunk431982 = require("./431982.jsx"),
  Chunk730588 = require("./730588.jsx"),
  Chunk164599 = require("./164599.jsx"),
  Chunk63675 = require("./63675.jsx"),
  Chunk546849 = require("./546849.jsx"),
  Chunk101058 = require("./101058.js"),
  Chunk622543 = require("./622543.js"),
  Chunk696451 = require("./696451.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js"),
  Chunk427262 = require("./427262.js"),
  Chunk159001 = require("./159001.js"),
  Chunk833336 = require("./833336.js"),
  Chunk684732 = require("./684732.js"),
  Chunk168917 = require("./168917.jsx"),
  Chunk746706 = require("./746706.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk453814 = require("./453814.js");

function L(e) {
  var t, n, i, L;
  let {
    guild: M
  } = e, G = (0, s.bG)([y.default], () => {
    let e = y.default.getCurrentUser();
    return l()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
  }), U = (0, d.L)(R.PremiumTypes.TIER_2), {
    pendingAvatar: k,
    pendingNickname: H,
    pendingBanner: B,
    pendingBio: V,
    pendingPronouns: F,
    pendingThemeColors: Y,
    errors: W,
    guild: z
  } = (0, s.cf)([S.A], () => {
    let {
      pendingAvatar: e,
      pendingNickname: t,
      pendingBio: n,
      pendingPronouns: r,
      pendingBanner: i,
      pendingThemeColors: l
    } = S.A.getAllPending();
    return {
      pendingAvatar: e,
      pendingNickname: t,
      pendingBanner: i,
      pendingBio: n,
      pendingPronouns: r,
      pendingThemeColors: l,
      errors: S.A.getErrors(),
      guild: S.A.getGuild()
    }
  }), K = (0, x.V7)({
    userId: G.id,
    image: k
  }), Z = null != M ? M : z;
  l()(null != Z, "guild should not be null");
  let q = (0, c.EC)(Z.id),
    X = (0, s.bG)([C.Ay], () => null == Z.id ? null : C.Ay.getMember(Z.id, G.id)),
    J = (0, s.bG)([O.A], () => O.A.getGuildMemberProfile(G.id, Z.id)),
    Q = j.Ay.canUsePremiumProfileCustomization(G),
    $ = (0, u.z5)(k, null == X ? true : X.avatar),
    ee = (0, u.Ac)(B, null == J ? true : J.banner),
    et = (0, I.lS)(Y, null == J ? true : J.themeColors),
    en = null != (t = null == J ? true : J.bio) ? t : "",
    er = null != (n = null == J ? true : J.pronouns) ? n : "",
    ei = (e, t, n) => {
      n(null != e ? e : null != t ? null : true)
    };
  return (0, r.jsxs)("div", {
    className: w.Q,
    children: [(0, r.jsx)(N.A, {
      errors: null != (i = null == W ? true : W.nick) ? i : null == q ? true : q.nick,
      username: T.Ay.getName(G),
      pendingNick: H,
      currentNick: null == X ? true : X.nick,
      user: G,
      guild: Z
    }, "nick"), (0, r.jsx)(E.A, {
      sectionTitle: D.intl.string(D.t["+T3RI/"]),
      errors: null == W ? true : W.pronouns,
      onPronounsChange: e => {
        (0, I.d7)(e, er)
      },
      pendingPronouns: F,
      currentPronouns: er
    }, "pronouns"), (0, r.jsxs)(P.A, {
      user: G,
      showOverlay: !Q,
      children: [(0, r.jsx)(m.A, {
        sectionTitle: (0, r.jsxs)(r.Fragment, {
          children: [D.intl.string(D.t.lqaIxI), (0, r.jsx)(a.m, {
            text: D.intl.string(D.t["5AFxuK"]),
            children: (0, r.jsx)(o.tvc, {
              size: "md",
              color: "currentColor",
              className: w.a
            })
          })]
        }),
        showRemoveAvatarButton: $,
        onAvatarChange: e => ei(e, null == X ? true : X.avatar, v.zq),
        errors: null == W ? true : W.avatar,
        guildId: Z.id,
        disabled: !Q
      }, "avatar"), (0, r.jsx)(_.A, {
        sectionTitle: (0, r.jsxs)(r.Fragment, {
          children: [D.intl.string(D.t["7v0T9P"]), (0, r.jsx)(a.m, {
            text: D.intl.string(D.t["5AFxuK"]),
            children: (0, r.jsx)(o.tvc, {
              size: "md",
              color: "currentColor",
              className: w.a
            })
          })]
        }),
        user: G,
        guild: Z
      }, "decoration"), !U && (0, r.jsx)(g.A, {
        user: G,
        guildId: Z.id
      }), (0, r.jsx)(f.A, {
        user: G,
        guild: Z,
        titleIcon: (0, r.jsx)(a.m, {
          text: D.intl.string(D.t["5AFxuK"]),
          children: (0, r.jsx)(o.tvc, {
            size: "md",
            color: "currentColor",
            className: w.a
          })
        })
      }, "nameplate"), (0, r.jsx)(h.A, {
        sectionTitle: (0, r.jsxs)(r.Fragment, {
          children: [D.intl.string(D.t.wR5wOo), (0, r.jsx)(a.m, {
            text: D.intl.string(D.t["5AFxuK"]),
            children: (0, r.jsx)(o.tvc, {
              size: "md",
              color: "currentColor",
              className: w.a
            })
          })]
        }),
        user: G,
        guild: Z
      }, "effect"), (0, r.jsx)(b.A, {
        showRemoveBannerButton: ee,
        errors: null == W ? true : W.banner,
        onBannerChange: e => ei(e, null == J ? true : J.banner, v.Iz),
        guildId: null == Z ? true : Z.id,
        disabled: !Q
      }, "banner"), (0, r.jsx)(A.A, {
        user: G,
        pendingAvatarSrc: K,
        pendingColors: Y,
        onThemeColorsChange: e => {
          (0, I.wx)(e, null == J ? true : J.themeColors)
        },
        guildId: null == Z ? true : Z.id,
        showResetThemeButton: et
      }), (0, r.jsx)(p.A, {
        placeholder: D.intl.string(D.t["/7NKgv"]),
        sectionTitle: (0, r.jsxs)(r.Fragment, {
          children: [D.intl.string(D.t.jGoPJT), (0, r.jsx)(a.m, {
            text: D.intl.string(D.t["5AFxuK"]),
            children: (0, r.jsx)(o.tvc, {
              size: "md",
              color: "currentColor",
              className: w.a
            })
          })]
        }),
        onBioChange: e => (0, I.Rn)(e, en),
        errors: null != (L = null == W ? true : W.bio) ? L : null == q ? true : q.bio,
        pendingBio: V,
        currentBio: en,
        disabled: !Q
      }, "about")]
    })]
  })
}