/** Chunk was on web.js **/
/** chunk id: 281052, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => j
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
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

function j(e) {
  var t, n, i, j;
  let {
    guild: M
  } = e, k = (0, s.bG)([I.default], () => {
    let e = I.default.getCurrentUser();
    return a()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
  }), U = (0, u.L)(D.PremiumTypes.TIER_2), {
    pendingAvatar: G,
    pendingNickname: V,
    pendingBanner: F,
    pendingBio: B,
    pendingPronouns: H,
    pendingThemeColors: Y,
    errors: W,
    guild: K
  } = (0, s.cf)([N.A], () => {
    let {
      pendingAvatar: e,
      pendingNickname: t,
      pendingBio: n,
      pendingPronouns: r,
      pendingBanner: i,
      pendingThemeColors: a
    } = N.A.getAllPending();
    return {
      pendingAvatar: e,
      pendingNickname: t,
      pendingBanner: i,
      pendingBio: n,
      pendingPronouns: r,
      pendingThemeColors: a,
      errors: N.A.getErrors(),
      guild: N.A.getGuild()
    }
  }), z = (0, O.V7)({
    userId: k.id,
    image: G
  }), q = null != M ? M : K;
  a()(null != q, "guild should not be null");
  let X = (0, c.EC)(q.id),
    Z = (0, s.bG)([A.Ay], () => null == q.id ? null : A.Ay.getMember(q.id, k.id)),
    Q = (0, s.bG)([v.A], () => v.A.getGuildMemberProfile(k.id, q.id)),
    $ = S.Ay.canUsePremiumProfileCustomization(k),
    J = (0, d.z5)(G, null == Z ? true : Z.avatar),
    ee = (0, d.Ac)(F, null == Q ? true : Q.banner),
    et = (0, R.lS)(Y, null == Q ? true : Q.themeColors),
    en = null != (t = null == Q ? true : Q.bio) ? t : "",
    er = null != (n = null == Q ? true : Q.pronouns) ? n : "",
    ei = (e, t, n) => {
      let r = null != t ? null : true;
      n(null != e ? e : r)
    },
    ea = e => ei(e, null == Q ? true : Q.banner, C.Iz),
    es = e => ei(e, null == Z ? true : Z.avatar, C.zq);
  return (0, r.jsxs)("div", {
    className: L.Q,
    children: [(0, r.jsx)(w.A, {
      errors: null != (i = null == W ? true : W.nick) ? i : null == X ? true : X.nick,
      username: T.Ay.getName(k),
      pendingNick: V,
      currentNick: null == Z ? true : Z.nick,
      user: k,
      guild: q
    }, "nick"), (0, r.jsx)(b.A, {
      sectionTitle: x.intl.string(x.t["+T3RI/"]),
      errors: null == W ? true : W.pronouns,
      onPronounsChange: e => {
        (0, R.d7)(e, er)
      },
      pendingPronouns: H,
      currentPronouns: er
    }, "pronouns"), (0, r.jsxs)(P.A, {
      user: k,
      showOverlay: !$,
      children: [(0, r.jsx)(_.A, {
        sectionTitle: (0, r.jsxs)(r.Fragment, {
          children: [x.intl.string(x.t.lqaIxI), (0, r.jsx)(o.m, {
            text: x.intl.string(x.t["5AFxuK"]),
            children: (0, r.jsx)(l.tvc, {
              size: "md",
              color: "currentColor",
              className: L.a
            })
          })]
        }),
        showRemoveAvatarButton: J,
        onAvatarChange: es,
        errors: null == W ? true : W.avatar,
        guildId: q.id,
        disabled: !$
      }, "avatar"), (0, r.jsx)(p.A, {
        sectionTitle: (0, r.jsxs)(r.Fragment, {
          children: [x.intl.string(x.t["7v0T9P"]), (0, r.jsx)(o.m, {
            text: x.intl.string(x.t["5AFxuK"]),
            children: (0, r.jsx)(l.tvc, {
              size: "md",
              color: "currentColor",
              className: L.a
            })
          })]
        }),
        user: k,
        guild: q
      }, "decoration"), !U && (0, r.jsx)(h.A, {
        user: k,
        guildId: q.id
      }), (0, r.jsx)(m.A, {
        user: k,
        guild: q,
        titleIcon: (0, r.jsx)(o.m, {
          text: x.intl.string(x.t["5AFxuK"]),
          children: (0, r.jsx)(l.tvc, {
            size: "md",
            color: "currentColor",
            className: L.a
          })
        })
      }, "nameplate"), (0, r.jsx)(E.A, {
        sectionTitle: (0, r.jsxs)(r.Fragment, {
          children: [x.intl.string(x.t.wR5wOo), (0, r.jsx)(o.m, {
            text: x.intl.string(x.t["5AFxuK"]),
            children: (0, r.jsx)(l.tvc, {
              size: "md",
              color: "currentColor",
              className: L.a
            })
          })]
        }),
        user: k,
        guild: q
      }, "effect"), (0, r.jsx)(g.A, {
        showRemoveBannerButton: ee,
        errors: null == W ? true : W.banner,
        onBannerChange: ea,
        guildId: null == q ? true : q.id,
        disabled: !$
      }, "banner"), (0, r.jsx)(y.A, {
        user: k,
        pendingAvatarSrc: z,
        pendingColors: Y,
        onThemeColorsChange: e => {
          (0, R.wx)(e, null == Q ? true : Q.themeColors)
        },
        guildId: null == q ? true : q.id,
        showResetThemeButton: et
      }), (0, r.jsx)(f.A, {
        placeholder: x.intl.string(x.t["/7NKgv"]),
        sectionTitle: (0, r.jsxs)(r.Fragment, {
          children: [x.intl.string(x.t.jGoPJT), (0, r.jsx)(o.m, {
            text: x.intl.string(x.t["5AFxuK"]),
            children: (0, r.jsx)(l.tvc, {
              size: "md",
              color: "currentColor",
              className: L.a
            })
          })]
        }),
        onBioChange: e => (0, R.Rn)(e, en),
        errors: null != (j = null == W ? true : W.bio) ? j : null == X ? true : X.bio,
        pendingBio: B,
        currentBio: en,
        disabled: !$
      }, "about")]
    })]
  })
}