/** Chunk was on 11776 **/
/** chunk id: 817053, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk467514 = require("./467514.js");

function f(e) {
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

function m(e) {
  let {
    imageSrc: t,
    gameName: n
  } = e, [i, o] = l.useState(false), c = null != n ? n : d.intl.string(d.t.GIWFlJ);
  return i || null == t ? <div role={"img"} aria-label={c} className={u.fallback}><a.Text variant={"text-xxs/medium"} lineClamp={3} aria-hidden={true}>{c}</a.Text></div> : <img src={t} alt={c} className={u.gameCoverImage} onError={() => o(true)} onLoad={() => o(false)} />
}

function p(e) {
  let {
    imageSrc: t,
    gameName: n,
    applicationId: l,
    userId: i,
    className: f
  } = e, p = (0, s.Z)({
    location: "GameCover",
    applicationId: l,
    source: c.m1.UserProfile,
    sourceUserId: i,
    trackEntryPointImpression: true
  });
  if (null == p) return <div className={f}><m imageSrc={t} gameName={n} /></div>;
  let g = d.intl.formatToPlainString(d.t["8QLQBw"], {
    gameName: null != n ? n : d.intl.string(d.t.GIWFlJ)
  });
  return <a.P3F onClick={p} aria-label={g} className={o()(u.clickable, f)}><m imageSrc={t} gameName={n} /></a.P3F>
}

function g(e) {
  var {
    applicationId: t,
    userId: n,
    className: l,
    disableInteraction: i = false
  } = e, a = function(e, t) {
    if (null == e) return {};
    var n, r, l = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
    }
    return l
  }(e, ["applicationId", "userId", "className", "disableInteraction"]);
  let c = o()(u.coverContainer, l);
  return i ? <div className={c}><m{...f({}, a)} /></div> : <p{...f({
    className: c,
    applicationId: t,
    userId: n
  }, a)} />
}