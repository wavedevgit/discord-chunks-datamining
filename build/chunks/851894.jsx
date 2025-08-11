/** Chunk was on 75708 **/
/** chunk id: 851894, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
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
  Chunk906732 = require("./906732.js"),
  Chunk22267 = require("./22267.jsx"),
  Chunk346811 = require("./346811.js"),
  Chunk4242 = require("./4242.js"),
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
  Chunk856607 = require("./856607.js"),
  Chunk594496 = require("./594496.jsx"),
  Chunk856768 = require("./856768.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function D(e) {
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

function Z(e, t) {
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

function w(e) {
  (0, o.ZDy)(async () => {
    let {
      default: t
    } = await n.e("84509").then(n.bind(n, 933696));
    return n => <t{...D({
      source: Z(D({}, e), {
        page: P.ZY5.GUILD_MEMBER_PROFILE_SETTINGS
      })
    }, n)} />
  })
}

function k(e) {
  var t;
  let {
    selectedGuild: n
  } = e, {
    analyticsLocations: s
  } = (0, p.ZP)(u.Z.USER_SETTINGS_GUILD_PROFILE), k = (0, l.e7)([O.default], () => {
    let e = O.default.getCurrentUser();
    return a()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
  }), L = (0, l.e7)([j.Z], () => !j.Z.isFetchingProfile(k.id, null == n ? true : n.id)), M = (0, l.e7)([C.Z], () => C.Z.hidePersonalInformation), B = (0, l.cj)([I.Z], () => Z(D({}, I.Z.getAllPending()), {
    source: I.Z.getSource()
  })), {
    source: U,
    pendingAvatar: V,
    pendingNameplate: G
  } = B, F = function(e, t) {
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
  }(B, ["source", "pendingAvatar", "pendingNameplate"]), H = (0, _.SD)({
    userId: k.id,
    image: V
  }), z = (0, l.e7)([E.ZP], () => null != n ? E.ZP.getMember(n.id, k.id) : null);
  r.useEffect(() => () => c.Z.wait(T.W3), []), r.useEffect(() => {
    null != U && m.ZP.trackWithMetadata(P.rMx.SETTINGS_PANE_VIEWED, {
      settings_type: "guild",
      destination_pane: P.jXE.SETTINGS_CUSTOMIZE_PROFILE,
      source: U
    })
  }, [U]);
  let {
    enabled: W
  } = h.Z.useConfig({
    location: "GuildIdentitySettingsPage"
  });
  return M ? <d.Z /> : L ? <p.Gt value={s}>{<o.Text variant={"text-sm/normal"}>{R.intl.format(R.t["/PTB2N"], {
        helpCenterLink: v.Z.getArticleURL(P.BhN.GUILD_PROFILES)
      })}</o.Text>}{null != n ? <i.Fragment>{<A.Z guildId={n.id} onChange={e => {
          null != e && (0, T.HP)(e)
        }} />}{<b.Z profilePreviewTitle={R.intl.formatToPlainString(R.t.Tc0slJ, {
          guildName: null == n ? true : n.name
        })} profilePreview={(0, i.jsx)(x.Z, Z(D({}, F), {
          pendingAvatar: H,
          user: k,
          guild: n,
          canUsePremiumCustomization: S.ZP.canUsePremiumProfileCustomization(k),
          onUpsellClick: w
        }))} nameplatePreview={W ? (0, i.jsx)(g.Z, {
          user: k,
          guildId: null == n ? true : n.id,
          nameplate: G,
          nameplateData: true === G ? (0, f.Pb)(null == z || null == (t = z.collectibles) ? true : t.nameplate) : true,
          isHighlighted: true
        }) : null}><y.Z nameplateEnabled={W} /></b.Z>}</i.Fragment> : <N.Z />}</p.Gt> : <o.$jN />
}