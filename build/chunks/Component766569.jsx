/** Chunk was on web.js **/
/** chunk id: 766569, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => V
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
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = U(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function U(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function G(e) {
  (0, l.mMO)(async () => {
    let {
      default: t
    } = await n.e("65281").then(n.bind(n, 547352));
    return n => (0, r.jsx)(t, L({
      source: M(L({}, e), {
        page: w.liQ.GUILD_MEMBER_PROFILE_SETTINGS
      })
    }, n))
  })
}

function V(e) {
  var t, n;
  let {
    selectedGuild: a
  } = e, {
    analyticsLocations: x
  } = (0, p.Ay)(d.A.USER_SETTINGS_GUILD_PROFILE), j = (0, o.bG)([v.default], () => {
    let e = v.default.getCurrentUser();
    return s()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
  }), U = (0, o.bG)([b.Ay], () => null != a ? b.Ay.getMember(a.id, j.id) : null), V = (0, o.bG)([y.A], () => !y.A.isFetchingProfile(j.id, null == a ? true : a.id)), F = (0, o.bG)([O.A], () => O.A.hidePersonalInformation), B = (0, o.cf)([T.A], () => M(L({}, T.A.getAllPending()), {
    source: T.A.getSource()
  })), {
    source: H,
    pendingAvatar: Y,
    pendingNameplate: W
  } = B, K = k(B, ["source", "pendingAvatar", "pendingNameplate"]), z = (0, E.V7)({
    userId: j.id,
    image: Y
  }), q = (0, h.lw)({
    pendingValue: W,
    userValue: null == j || null == (t = j.collectibles) ? true : t.nameplate,
    guildValue: null == U || null == (n = U.collectibles) ? true : n.nameplate,
    guildId: null == a ? true : a.id
  }), {
    pendingDisplayNameStyles: X
  } = (0, h.B0)(j, null == a ? true : a.id);
  return (i.useEffect(() => () => c.h.wait(S.IM), []), i.useEffect(() => {
    null != H && f.Ay.trackWithMetadata(w.HAw.SETTINGS_PANE_VIEWED, {
      settings_type: "guild",
      destination_pane: w.JJy.SETTINGS_CUSTOMIZE_PROFILE,
      source: H
    })
  }, [H]), F) ? (0, r.jsx)(u.A, {}) : V ? (0, r.jsxs)(p.f5, {
    value: x,
    children: [(0, r.jsx)(l.Text, {
      variant: "text-sm/normal",
      children: P.intl.format(P.t["/PTB2E"], {
        helpCenterLink: A.A.getArticleURL(w.MVz.GUILD_PROFILES)
      })
    }), null != a ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(R.A, {
        guildId: a.id,
        onChange: e => {
          null != e && (0, S.JJ)(e)
        }
      }), (0, r.jsx)(m.A, {
        profilePreviewTitle: (0, r.jsx)(l.Heading, {
          variant: "heading-md/medium",
          className: D.Y,
          children: P.intl.formatToPlainString(P.t.Tc0slG, {
            guildName: null == a ? true : a.name
          })
        }),
        profilePreview: (0, r.jsx)(g.A, M(L({}, K), {
          pendingAvatar: z,
          pendingDisplayNameStyles: X,
          user: j,
          guild: a,
          canUsePremiumCustomization: I.Ay.canUsePremiumProfileCustomization(j),
          onUpsellClick: G
        })),
        nameplatePreview: (0, r.jsx)(_.A, M(L({}, K), {
          pendingDisplayNameStyles: X,
          user: j,
          guildId: null == a ? true : a.id,
          nameplate: q,
          className: null == q ? D.t : true,
          isHighlighted: true
        })),
        children: (0, r.jsx)(N.A, {})
      })]
    }) : (0, r.jsx)(C.A, {})]
  }) : (0, r.jsx)(l.y$y, {})
}