/** Chunk was on web.js **/
/** chunk id: 681102, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk97028 = require("./97028.js"),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk214288 = require("./214288.js"),
  Chunk344580 = require("./344580.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let E = 10,
  b = 2;

function y(e) {
  let {
    game: t,
    activityLevel: n,
    hideTooltip: i
  } = e, o = t.getIconURL(24), a = (0, f.B)(), p = (0, d.Z)({
    location: "GuildProfile",
    source: u.m1.GuildProfile,
    trackEntryPointImpression: true,
    applicationId: t.id
  });
  if (null == o) return null;
  let m = !i,
    y = (null == n ? true : n.level) === s.m.HIGH,
    O = <l.Text variant={"text-sm/medium"} color={"interactive-active"}>{t.name}</l.Text>,
    v = <l.ua7 text={O} position={"bottom"} aria-label={t.name} shouldShow={m}>{e => (0, r.jsxs)("div", g(h({}, e), {
        className: _.gameIcon,
        children: [(0, r.jsx)("img", {
          className: _.gameIconImage,
          src: o,
          alt: t.name
        }), y && (0, r.jsx)(c.ZP, {
          mask: c.QS.GAMEPLAY_HIGH_ACTIVITY_ICON,
          width: E + 2 * b,
          height: E + 2 * b,
          className: _.gameActivityLevel,
          children: (0, r.jsx)("div", {
            className: _.gameActivityLevelInner,
            children: (0, r.jsx)(l.YqE, {
              color: l.TVs.unsafe_rawColors.ORANGE_330.css,
              width: E,
              height: E,
              size: "custom"
            })
          })
        })]
      }))}</l.ua7>;
  return a ? <l.P3F onClick={p} className={_.gameIconWrapper}>{v}</l.P3F> : v
}

function O(e) {
  let {
    games: t,
    activity: n
  } = e;
  return <div className={_.extraGamesContainer}>{t.map(e => (0, r.jsxs)("div", {
      className: _.extraGameRow,
      children: [(0, r.jsx)(y, {
        game: e,
        activityLevel: n[e.id]
      }), (0, r.jsx)(l.Text, {
        variant: "text-xs/medium",
        color: "interactive-active",
        children: e.name
      })]
    }, e.id))}</div>
}

function v(e) {
  let {
    game: t,
    activityLevel: n
  } = e;
  return <div className={_.favoriteGameContainer}>{<y game={t} activityLevel={n} hideTooltip={true} />}{<l.Text variant={"text-sm/medium"} color={"text-default"}>{t.name}</l.Text>}</div>
}

function I(e) {
  let {
    gamesToDisplay: t,
    lastGameToDisplay: n,
    remainingGames: o,
    activity: s
  } = e, c = i.useMemo(() => {
    if (null == n) return null;
    let e = n.getIconURL(24);
    if (null == e) return null;
    if (0 === o.length) return <y game={n} activityLevel={s[n.id]} />;
    let t = o;
    return <l.ua7 aria-label={""} position={"bottom"} text={(0, r.jsx)(O, {
        games: t,
        activity: s
      })}>{i => (0, r.jsxs)("div", g(h({}, i), {
        className: a()(_.gameIcon, _.extraGameItem),
        children: [(0, r.jsx)("img", {
          className: a()(_.gameIconImage, _.extraGameIconImage),
          src: e,
          alt: n.name
        }), (0, r.jsx)("div", {
          className: _.extraGameOverlay
        }), (0, r.jsx)("div", {
          className: _.extraGameText,
          children: (0, r.jsx)(l.Text, {
            variant: "text-xs/normal",
            color: "always-white",
            children: "+".concat(t.length)
          })
        })]
      }))}</l.ua7>
  }, [n, o, s]);
  return null == t || 0 === t.length ? null : 1 === t.length ? <div className={_.container}><v game={t[0]} activityLevel={s[t[0].id]} /></div> : <div className={_.container}>{t.map(e => <y game={e} activityLevel={s[e.id]} />)}{c}</div>
}