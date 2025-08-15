/** Chunk was on 30202 **/
/** chunk id: 851894, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
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
  Chunk388032 = require("./388032.jsx");

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function Z(e) {
  (0, o.ZDy)(async () => {
    let {
      default: t
    } = await n.e("84509").then(n.bind(n, 933696));
    return n => (0, i.jsx)(t, R({
      source: D(R({}, e), {
        page: A.ZY5.GUILD_MEMBER_PROFILE_SETTINGS
      })
    }, n))
  })
}

function w(e) {
  let {
    selectedGuild: t
  } = e, {
    analyticsLocations: n
  } = (0, p.ZP)(u.Z.USER_SETTINGS_GUILD_PROFILE), s = (0, l.e7)([C.default], () => {
    let e = C.default.getCurrentUser();
    return a()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
  }), w = (0, l.e7)([j.Z], () => !j.Z.isFetchingProfile(s.id, null == t ? true : t.id)), k = (0, l.e7)([E.Z], () => E.Z.hidePersonalInformation), L = (0, l.cj)([T.Z], () => D(R({}, T.Z.getAllPending()), {
    source: T.Z.getSource()
  })), {
    source: B,
    pendingAvatar: M,
    pendingNameplate: U
  } = L, V = function(e, t) {
    if (null == e) return {};
    var n, i, r = function(e, t) {
      if (null == e) return {};
      var n, i, r = {},
        s = Object.keys(e);
      for (i = 0; i < s.length; i++) n = s[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      for (i = 0; i < s.length; i++) n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(L, ["source", "pendingAvatar", "pendingNameplate"]), G = (0, _.SD)({
    userId: s.id,
    image: M
  }), F = (0, f.K)({
    user: s,
    guildId: null == t ? true : t.id
  });
  r.useEffect(() => () => c.Z.wait(S.W3), []), r.useEffect(() => {
    null != B && m.ZP.trackWithMetadata(A.rMx.SETTINGS_PANE_VIEWED, {
      settings_type: "guild",
      destination_pane: A.jXE.SETTINGS_CUSTOMIZE_PROFILE,
      source: B
    })
  }, [B]);
  let {
    enabled: H
  } = h.Z.useConfig({
    location: "GuildIdentitySettingsPage"
  });
  return k ? (0, i.jsx)(d.Z, {}) : w ? (0, i.jsxs)(p.Gt, {
    value: n,
    children: [(0, i.jsx)(o.Text, {
      variant: "text-sm/normal",
      children: P.intl.format(P.t["/PTB2N"], {
        helpCenterLink: O.Z.getArticleURL(A.BhN.GUILD_PROFILES)
      })
    }), null != t ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(y.Z, {
        guildId: t.id,
        onChange: e => {
          null != e && (0, S.HP)(e)
        }
      }), (0, i.jsx)(b.Z, {
        profilePreviewTitle: P.intl.formatToPlainString(P.t.Tc0slJ, {
          guildName: null == t ? true : t.name
        }),
        profilePreview: (0, i.jsx)(x.Z, D(R({}, V), {
          pendingAvatar: G,
          user: s,
          guild: t,
          canUsePremiumCustomization: v.ZP.canUsePremiumProfileCustomization(s),
          onUpsellClick: Z
        })),
        nameplatePreview: H ? (0, i.jsx)(g.Z, {
          user: s,
          guildId: null == t ? true : t.id,
          nameplate: U,
          nameplateData: true === U ? F : true,
          isHighlighted: true
        }) : null,
        children: (0, i.jsx)(I.Z, {
          nameplateEnabled: H
        })
      })]
    }) : (0, i.jsx)(N.Z, {})]
  }) : (0, i.jsx)(o.$jN, {})
}