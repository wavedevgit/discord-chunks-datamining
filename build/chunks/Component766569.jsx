/** Chunk was on 5606 **/
/** chunk id: 766569, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => M
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk974544 = require("./974544.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk58149 = require("./58149.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk550111 = require("./550111.jsx"),
  Chunk919395 = require("./919395.js"),
  Chunk884546 = require("./884546.jsx"),
  Chunk287070 = require("./287070.jsx"),
  Chunk101058 = require("./101058.js"),
  Chunk622543 = require("./622543.js"),
  Chunk696451 = require("./696451.js"),
  Chunk351906 = require("./351906.js"),
  Chunk287809 = require("./287809.js"),
  Chunk975571 = require("./975571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk159001 = require("./159001.js"),
  Chunk833336 = require("./833336.js"),
  Chunk65767 = require("./65767.jsx"),
  Chunk281052 = require("./281052.jsx"),
  Chunk687021 = require("./687021.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk764121 = require("./764121.js");

function D(e) {
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
}

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function L(e) {
  (0, o.mMO)(async () => {
    let {
      default: t
    } = await n.e("65281").then(n.bind(n, 547352));
    return n => (0, r.jsx)(t, D({
      source: w(D({}, e), {
        page: N.liQ.GUILD_MEMBER_PROFILE_SETTINGS
      })
    }, n))
  })
}

function M(e) {
  var t, n;
  let {
    selectedGuild: l
  } = e, {
    analyticsLocations: M
  } = (0, _.Ay)(u.A.USER_SETTINGS_GUILD_PROFILE), G = (0, a.bG)([O.default], () => {
    let e = O.default.getCurrentUser();
    return s()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
  }), U = (0, a.bG)([E.Ay], () => null != l ? E.Ay.getMember(l.id, G.id) : null), k = (0, a.bG)([A.A], () => !A.A.isFetchingProfile(G.id, null == l ? true : l.id)), H = (0, a.bG)([x.A], () => x.A.hidePersonalInformation), B = (0, a.cf)([T.A], () => w(D({}, T.A.getAllPending()), {
    source: T.A.getSource()
  })), {
    source: V,
    pendingAvatar: F,
    pendingNameplate: Y
  } = B, W = function(e, t) {
    if (null == e) return {};
    var n, r, i, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.getOwnPropertyNames(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i
      }(e, t), Object.getOwnPropertySymbols)
      for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l
  }(B, ["source", "pendingAvatar", "pendingNameplate"]), z = (0, h.V7)({
    userId: G.id,
    image: F
  }), K = (0, g.lw)({
    pendingValue: Y,
    userValue: null == G || null == (t = G.collectibles) ? true : t.nameplate,
    guildValue: null == U || null == (n = U.collectibles) ? true : n.nameplate,
    guildId: null == l ? true : l.id
  }), {
    pendingDisplayNameStyles: Z
  } = (0, g.B0)(G, null == l ? true : l.id);
  return (i.useEffect(() => () => c.h.wait(j.IM), []), i.useEffect(() => {
    null != V && p.Ay.trackWithMetadata(N.HAw.SETTINGS_PANE_VIEWED, {
      settings_type: "guild",
      destination_pane: N.JJy.SETTINGS_CUSTOMIZE_PROFILE,
      source: V
    })
  }, [V]), H) ? (0, r.jsx)(d.A, {}) : k ? (0, r.jsxs)(_.f5, {
    value: M,
    children: [(0, r.jsx)(o.Text, {
      variant: "text-sm/normal",
      children: P.intl.format(P.t["/PTB2E"], {
        helpCenterLink: C.A.getArticleURL(N.MVz.GUILD_PROFILES)
      })
    }), null != l ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(I.A, {
        guildId: l.id,
        onChange: e => {
          null != e && (0, j.JJ)(e)
        }
      }), (0, r.jsx)(f.A, {
        profilePreviewTitle: (0, r.jsx)(o.Heading, {
          variant: "heading-md/medium",
          className: R.Y,
          children: P.intl.formatToPlainString(P.t.Tc0slG, {
            guildName: null == l ? true : l.name
          })
        }),
        profilePreview: (0, r.jsx)(b.A, w(D({}, W), {
          pendingAvatar: z,
          pendingDisplayNameStyles: Z,
          user: G,
          guild: l,
          canUsePremiumCustomization: y.Ay.canUsePremiumProfileCustomization(G),
          onUpsellClick: L
        })),
        nameplatePreview: (0, r.jsx)(m.A, w(D({}, W), {
          pendingDisplayNameStyles: Z,
          user: G,
          guildId: null == l ? true : l.id,
          nameplate: K,
          className: null == K ? R.t : true,
          isHighlighted: true
        })),
        children: (0, r.jsx)(S.A, {})
      })]
    }) : (0, r.jsx)(v.A, {})]
  }) : (0, r.jsx)(o.y$y, {})
}