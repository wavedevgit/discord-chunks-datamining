/** Chunk was on 75708 **/
/** chunk id: 594496, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk295474 = require("./295474.js"),
  Chunk150039 = require("./150039.js"),
  Chunk126631 = require("./126631.jsx"),
  Chunk433411 = require("./433411.jsx"),
  Chunk532432 = require("./532432.jsx"),
  Chunk818420 = require("./818420.js"),
  Chunk134795 = require("./134795.jsx"),
  Chunk513901 = require("./513901.jsx"),
  Chunk451392 = require("./451392.jsx"),
  Chunk906364 = require("./906364.js"),
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
  Chunk565872 = require("./565872.js");

function P(e) {
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

function R(e, t) {
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

function D(e) {
  var t, n, r, D;
  let {
    guild: Z,
    nameplateEnabled: w
  } = e, k = (0, a.e7)([E.default], () => {
    let e = E.default.getCurrentUser();
    return s()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e
  }), {
    pendingAvatar: L,
    pendingNickname: M,
    pendingBanner: B,
    pendingBio: U,
    pendingPronouns: V,
    pendingThemeColors: G,
    errors: F,
    guild: H
  } = (0, a.cj)([S.Z], () => {
    let {
      pendingAvatar: e,
      pendingNickname: t,
      pendingBio: n,
      pendingPronouns: i,
      pendingBanner: r,
      pendingThemeColors: s
    } = S.Z.getAllPending();
    return {
      pendingAvatar: e,
      pendingNickname: t,
      pendingBanner: r,
      pendingBio: n,
      pendingPronouns: i,
      pendingThemeColors: s,
      errors: S.Z.getErrors(),
      guild: S.Z.getGuild()
    }
  }), z = (0, x.SD)({
    userId: k.id,
    image: L
  }), W = null != Z ? Z : H;
  s()(null != W, "guild should not be null");
  let Y = (0, o.gS)(W.id),
    K = (0, a.e7)([j.ZP], () => null == W.id ? null : j.ZP.getMember(W.id, k.id)),
    q = (0, a.e7)([_.Z], () => _.Z.getGuildMemberProfile(k.id, W.id)),
    X = C.ZP.canUsePremiumProfileCustomization(k),
    J = (0, c.gd)(L, null == K ? true : K.avatar),
    Q = (0, c.f$)(B, null == q ? true : q.banner),
    $ = (0, T.p)(G, null == q ? true : q.themeColors),
    ee = null != (t = null == q ? true : q.bio) ? t : "",
    et = null != (n = null == q ? true : q.pronouns) ? n : "",
    en = (e, t, n) => {
      n(null != e ? e : null != t ? null : true)
    };
  return <div className={A.sectionsContainer}>{<I.Z errors={null != (r = null == F ? true : F.nick) ? r : null == Y ? true : Y.nick} username={O.ZP.getName(k)} pendingNick={M} currentNick={null == K ? true : K.nick} guild={W} />}{<b.Z sectionTitle={y.intl.string(y.t["+T3RIy"])} errors={null == F ? true : F.pronouns} onPronounsChange={e => {
        (0, T.xs)(e, et)
      }} pendingPronouns={V} currentPronouns={et} />}{<N.Z user={k} showOverlay={!X}>{<m.Z sectionTitle={(0, i.jsxs)(i.Fragment, {
          children: [y.intl.string(y.t.lqaIxM), (0, i.jsx)(l.ua7, {
            text: y.intl.string(y.t["5AFxuL"]),
            children: e => (0, i.jsx)(l.SrA, R(P({
              size: "md",
              color: "currentColor"
            }, e), {
              className: A.nitroWheel
            }))
          })]
        })} showRemoveAvatarButton={J} onAvatarChange={e => en(e, null == K ? true : K.avatar, v.I5)} errors={null == F ? true : F.avatar} guildId={W.id} disabled={!X} />}{<u.Z sectionTitle={(0, i.jsxs)(i.Fragment, {
          children: [y.intl.string(y.t["7v0T9P"]), (0, i.jsx)(l.ua7, {
            text: y.intl.string(y.t["5AFxuL"]),
            children: e => (0, i.jsx)(l.SrA, R(P({
              size: "md",
              color: "currentColor"
            }, e), {
              className: A.nitroWheel
            }))
          })]
        })} user={k} guild={W} />}{w && <p.Z user={k} guild={W} titleIcon={(0, i.jsx)(l.ua7, {
          text: y.intl.string(y.t["5AFxuL"]),
          children: e => (0, i.jsx)(l.SrA, R(P({
            size: "md",
            color: "currentColor"
          }, e), {
            className: A.nitroWheel
          }))
        })} />}{<h.Z sectionTitle={(0, i.jsxs)(i.Fragment, {
          children: [y.intl.string(y.t.wR5wOj), (0, i.jsx)(l.ua7, {
            text: y.intl.string(y.t["5AFxuL"]),
            children: e => (0, i.jsx)(l.SrA, R(P({
              size: "md",
              color: "currentColor"
            }, e), {
              className: A.nitroWheel
            }))
          })]
        })} user={k} guild={W} />}{<g.Z showRemoveBannerButton={Q} errors={null == F ? true : F.banner} onBannerChange={e => en(e, null == q ? true : q.banner, v.g_)} guildId={null == W ? true : W.id} disabled={!X} />}{<f.Z user={k} pendingAvatarSrc={z} pendingColors={G} onThemeColorsChange={e => {
          (0, T.ce)(e, null == q ? true : q.themeColors)
        }} guildId={null == W ? true : W.id} showResetThemeButton={$} />}{<d.Z placeholder={y.intl.string(y.t["/7NKgo"])} sectionTitle={(0, i.jsxs)(i.Fragment, {
          children: [y.intl.string(y.t.jGoPJS), (0, i.jsx)(l.ua7, {
            text: y.intl.string(y.t["5AFxuL"]),
            children: e => (0, i.jsx)(l.SrA, R(P({
              size: "md",
              color: "currentColor"
            }, e), {
              className: A.nitroWheel
            }))
          })]
        })} onBioChange={e => (0, T.qN)(e, ee)} errors={null != (D = null == F ? true : F.bio) ? D : null == Y ? true : Y.bio} pendingBio={U} currentBio={ee} disabled={!X} />}</N.Z>}</div>
}