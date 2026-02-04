/** Chunk was on 9207 **/
/** chunk id: 161290, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => D
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk631670 = require("./631670.js"),
  Chunk81400 = require("./81400.js"),
  Chunk185955 = require("./185955.jsx"),
  Chunk318785 = require("./318785.js"),
  Chunk919395 = require("./919395.js"),
  Chunk124064 = require("./124064.jsx"),
  Chunk200790 = require("./200790.jsx"),
  Chunk230084 = require("./230084.jsx"),
  Chunk339442 = require("./339442.jsx"),
  Chunk900254 = require("./900254.jsx"),
  Chunk431982 = require("./431982.jsx"),
  Chunk730588 = require("./730588.jsx"),
  Chunk593629 = require("./593629.jsx"),
  Chunk164599 = require("./164599.jsx"),
  Chunk63675 = require("./63675.jsx"),
  Chunk617514 = require("./617514.jsx"),
  Chunk546849 = require("./546849.jsx"),
  Chunk101058 = require("./101058.js"),
  Chunk207803 = require("./207803.js"),
  Chunk836602 = require("./836602.js"),
  Chunk622543 = require("./622543.js"),
  Chunk950191 = require("./950191.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk264671 = require("./264671.js");

function D() {
  var e, t, n, i, D, L, w, M;
  let G = (0, s.bG)([j.default], () => {
      let e = j.default.getCurrentUser();
      return l()(null != e, "DefaultCustomizationSections: user cannot be undefined"), e
    }),
    U = (0, s.bG)([N.A], () => N.A.getUserProfile(G.id)),
    {
      pendingAvatar: k,
      pendingGlobalName: B,
      pendingBanner: H,
      pendingBio: V,
      pendingPronouns: F,
      pendingAccentColor: Y,
      pendingThemeColors: W,
      pendingLegacyUsernameDisabled: K,
      pendingPrimaryGuildId: z,
      errors: Z
    } = (0, s.cf)([I.A], () => {
      var e, t;
      let n = I.A.getPendingChanges(),
        r = I.A.getErrors();
      return e = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({}, n), t = t = {
        errors: r
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
      }), e
    }),
    X = (0, S.V7)({
      userId: G.id,
      image: k
    }),
    q = (0, o.EC)(),
    J = v.Ay.canUsePremiumProfileCustomization(G),
    Q = (0, u.z5)(k, G.avatar),
    $ = (0, u.Ac)(H, null == U ? true : U.banner),
    ee = (0, y.Ay)(G.id),
    et = null == ee ? true : ee.getLegacyUsername(),
    en = (null != (e = null == (w = Z.global_name) ? true : w.length) ? e : 0) > 0 ? Z.global_name : null != (t = null == q ? true : q.nick) ? t : [],
    er = (null != (n = null == (M = Z.bio) ? true : M.length) ? n : 0) > 0 ? Z.bio : null != (i = null == q ? true : q.bio) ? i : [],
    ei = (0, d.b)();
  return (0, r.jsxs)("div", {
    className: R.Q,
    children: [(0, r.jsx)(g.A, {
      placeholder: G.username,
      errors: en,
      currentGlobalName: G.globalName,
      pendingGlobalName: B,
      onGlobalNameChange: a.U6,
      user: G
    }), (0, r.jsx)(C.A, {
      sectionTitle: P.intl.string(P.t["+T3RI/"]),
      errors: Z.pronouns,
      onPronounsChange: T.Oz,
      pendingPronouns: F,
      currentPronouns: null != (D = null == U ? true : U.pronouns) ? D : ""
    }, "pronouns"), (0, r.jsx)(x.A, {}), (0, r.jsx)(m.A, {
      onAvatarChange: a.zq,
      showRemoveAvatarButton: Q,
      errors: Z.avatar,
      sectionTitle: P.intl.string(P.t.lqaIxI),
      forcedDivider: true
    }, "avatar"), (0, r.jsx)(p.A, {
      user: G,
      sectionTitle: P.intl.string(P.t["7v0T9P"])
    }, "decoration"), (0, r.jsx)(f.A, {
      user: G
    }), (0, r.jsx)(E.A, {
      user: G,
      sectionTitle: P.intl.string(P.t.wR5wOo)
    }, "effect"), J ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(b.A, {
        showRemoveBannerButton: $,
        errors: Z.banner,
        onBannerChange: T.Iz,
        forcedDivider: true
      }, "banner"), (0, r.jsx)(O.A, {
        user: G,
        pendingAvatarSrc: X,
        pendingColors: W,
        onThemeColorsChange: T.Zz,
        forcedDivider: true
      })]
    }) : (0, r.jsx)(h.A, {
      user: G,
      savedUserColor: null == U ? true : U.accentColor,
      pendingColor: Y,
      setPendingAccentColor: T.XW
    }, "color"), (0, r.jsx)(_.A, {
      sectionTitle: P.intl.string(P.t.NepzEw),
      errors: er,
      onBioChange: e => (0, u.Ru)(e, null == U ? true : U.bio),
      pendingBio: V,
      currentBio: null != (L = null == U ? true : U.bio) ? L : ""
    }, "bio"), ei.length > 0 && (0, r.jsx)(c.A, {
      availablePrimaryGuilds: ei,
      pendingPrimaryGuildId: z,
      onChange: e => (0, a.Ch)(e)
    }), null != et && (0, r.jsx)(A.A, {
      legacyUsername: et,
      pendingLegacyUsernameDisabled: K
    }, "legacy_username")]
  })
}