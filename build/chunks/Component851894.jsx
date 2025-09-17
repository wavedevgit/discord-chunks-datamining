/** Chunk was on web.js **/
/** chunk id: 851894, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => B
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk497321 = require("./497321.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk367907 = require("./367907.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk22267 = require("./22267.jsx"),
  Chunk346811 = require("./346811.js"),
  Chunk850020 = require("./850020.js"),
  Chunk296810 = require("./296810.jsx"),
  Chunk678135 = require("./678135.jsx"),
  Chunk643879 = require("./643879.js"),
  Chunk621853 = require("./621853.js"),
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
  Chunk813709 = require("./813709.js");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      x(e, t, n[t])
    })
  }
  return e
}

function j(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function M(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : j(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function k(e, t) {
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
    return n => (0, r.jsx)(t, L({
      source: M(L({}, e), {
        page: P.ZY5.GUILD_MEMBER_PROFILE_SETTINGS
      })
    }, n))
  })
}

function B(e) {
  let {
    selectedGuild: t
  } = e, {
    analyticsLocations: n
  } = (0, _.ZP)(d.Z.USER_SETTINGS_GUILD_PROFILE), a = (0, s.e7)([v.default], () => {
    let e = v.default.getCurrentUser();
    return o()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
  }), x = (0, s.e7)([y.Z], () => !y.Z.isFetchingProfile(a.id, null == t ? true : t.id)), j = (0, s.e7)([O.Z], () => O.Z.hidePersonalInformation), U = (0, s.cj)([A.Z], () => M(L({}, A.Z.getAllPending()), {
    source: A.Z.getSource()
  })), {
    source: B,
    pendingAvatar: Z,
    pendingNameplate: F
  } = U, V = k(U, ["source", "pendingAvatar", "pendingNameplate"]), H = (0, b.SD)({
    userId: a.id,
    image: Z
  }), Y = (0, m.K)({
    user: a,
    guildId: null == t ? true : t.id
  });
  i.useEffect(() => () => c.Z.wait(S.W3), []), i.useEffect(() => {
    null != B && f.ZP.trackWithMetadata(P.rMx.SETTINGS_PANE_VIEWED, {
      settings_type: "guild",
      destination_pane: P.jXE.SETTINGS_CUSTOMIZE_PROFILE,
      source: B
    })
  }, [B]);
  let {
    enabled: W
  } = h.Z.useConfig({
    location: "GuildIdentitySettingsPage"
  });
  return j ? (0, r.jsx)(u.Z, {}) : x ? (0, r.jsxs)(_.Gt, {
    value: n,
    children: [(0, r.jsx)(l.Text, {
      variant: "text-sm/normal",
      children: w.intl.format(w.t["/PTB2N"], {
        helpCenterLink: I.Z.getArticleURL(P.BhN.GUILD_PROFILES)
      })
    }), null != t ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(R.Z, {
        guildId: t.id,
        onChange: e => {
          null != e && (0, S.HP)(e)
        }
      }), (0, r.jsx)(g.Z, {
        profilePreviewTitle: (0, r.jsx)(l.X6q, {
          variant: "heading-md/medium",
          className: D.profilePreviewTitle,
          children: w.intl.formatToPlainString(w.t.Tc0slJ, {
            guildName: null == t ? true : t.name
          })
        }),
        profilePreview: (0, r.jsx)(E.Z, M(L({}, V), {
          pendingAvatar: H,
          user: a,
          guild: t,
          canUsePremiumCustomization: T.ZP.canUsePremiumProfileCustomization(a),
          onUpsellClick: G
        })),
        nameplatePreview: W ? (0, r.jsx)(p.Z, {
          user: a,
          guildId: null == t ? true : t.id,
          nameplate: F,
          nameplateData: null == F ? Y : true,
          isHighlighted: true
        }) : null,
        children: (0, r.jsx)(N.Z, {
          nameplateEnabled: W
        })
      })]
    }) : (0, r.jsx)(C.Z, {})]
  }) : (0, r.jsx)(l.$jN, {})
}