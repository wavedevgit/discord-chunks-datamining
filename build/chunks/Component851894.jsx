/** Chunk was on web.js **/
/** chunk id: 851894, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => B
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk497321 = require("./497321.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk367907 = require("./367907.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk566697 = require("./566697.jsx"),
  Chunk150039 = require("./150039.js"),
  Chunk296810 = require("./296810.jsx"),
  Chunk678135 = require("./678135.jsx"),
  Chunk643879 = require("./643879.js"),
  Chunk621853 = require("./621853.js"),
  Chunk271383 = require("./271383.js"),
  Chunk246946 = require("./246946.js"),
  Chunk594174 = require("./594174.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk18438 = require("./18438.js"),
  Chunk778825 = require("./778825.js"),
  Chunk856607 = require("./856607.jsx"),
  Chunk594496 = require("./594496.jsx"),
  Chunk856768 = require("./856768.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk192201 = require("./192201.js");

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      L(e, t, n[t])
    })
  }
  return e
}

function M(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function k(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : M(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function j(e, t) {
  if (null == e) return {};
  var n, r, i = U(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function U(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function G(e) {
  (0, l.ZDy)(async () => {
    let {
      default: t
    } = await n.e("84509").then(n.bind(n, 933696));
    return n => (0, r.jsx)(t, x({
      source: k(x({}, e), {
        page: P.ZY5.GUILD_MEMBER_PROFILE_SETTINGS
      })
    }, n))
  })
}

function B(e) {
  var t, n;
  let {
    selectedGuild: a
  } = e, {
    analyticsLocations: L
  } = (0, _.ZP)(d.Z.USER_SETTINGS_GUILD_PROFILE), M = (0, s.e7)([v.default], () => {
    let e = v.default.getCurrentUser();
    return o()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
  }), U = (0, s.e7)([y.ZP], () => null != a ? y.ZP.getMember(a.id, M.id) : null), B = (0, s.e7)([b.Z], () => !b.Z.isFetchingProfile(M.id, null == a ? true : a.id)), Z = (0, s.e7)([O.Z], () => O.Z.hidePersonalInformation), F = (0, s.cj)([A.Z], () => k(x({}, A.Z.getAllPending()), {
    source: A.Z.getSource()
  })), {
    source: V,
    pendingAvatar: H,
    pendingNameplate: Y
  } = F, W = j(F, ["source", "pendingAvatar", "pendingNameplate"]), K = (0, E.SD)({
    userId: M.id,
    image: H
  }), z = (0, h.Ys)({
    pendingValue: Y,
    userValue: null == M || null == (t = M.collectibles) ? true : t.nameplate,
    guildValue: null == U || null == (n = U.collectibles) ? true : n.nameplate,
    guildId: null == a ? true : a.id
  }), {
    pendingDisplayNameStyles: q
  } = (0, h.mD)(M, null == a ? true : a.id);
  return (i.useEffect(() => () => c.Z.wait(S.W3), []), i.useEffect(() => {
    null != V && f.ZP.trackWithMetadata(P.rMx.SETTINGS_PANE_VIEWED, {
      settings_type: "guild",
      destination_pane: P.jXE.SETTINGS_CUSTOMIZE_PROFILE,
      source: V
    })
  }, [V]), Z) ? (0, r.jsx)(u.Z, {}) : B ? (0, r.jsxs)(_.Gt, {
    value: L,
    children: [(0, r.jsx)(l.Text, {
      variant: "text-sm/normal",
      children: D.intl.format(D.t["/PTB2E"], {
        helpCenterLink: I.Z.getArticleURL(P.BhN.GUILD_PROFILES)
      })
    }), null != a ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(R.Z, {
        guildId: a.id,
        onChange: e => {
          null != e && (0, S.HP)(e)
        }
      }), (0, r.jsx)(m.Z, {
        profilePreviewTitle: (0, r.jsx)(l.Heading, {
          variant: "heading-md/medium",
          className: w.profilePreviewTitle,
          children: D.intl.formatToPlainString(D.t.Tc0slG, {
            guildName: null == a ? true : a.name
          })
        }),
        profilePreview: (0, r.jsx)(g.Z, k(x({}, W), {
          pendingAvatar: K,
          pendingDisplayNameStyles: q,
          user: M,
          guild: a,
          canUsePremiumCustomization: T.ZP.canUsePremiumProfileCustomization(M),
          onUpsellClick: G
        })),
        nameplatePreview: (0, r.jsx)(p.Z, k(x({}, W), {
          pendingDisplayNameStyles: q,
          user: M,
          guildId: null == a ? true : a.id,
          nameplate: z,
          className: null == z ? w.nameplatePreviewPlaceholder : true,
          isHighlighted: true
        })),
        children: (0, r.jsx)(N.Z, {})
      })]
    }) : (0, r.jsx)(C.Z, {})]
  }) : (0, r.jsx)(l.$jN, {})
}