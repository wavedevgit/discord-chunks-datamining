/** Chunk was on 40396 **/
/** chunk id: 259407, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  Ay: () => f,
  mt: () => g
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk998218 = require("./998218.js"),
  Chunk802571 = require("./802571.js");

function o(e) {
  for (var l = 1; l < arguments.length; l++) {
    var t = null != arguments[l] ? arguments[l] : {},
      r = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), r.forEach(function(l) {
      var r;
      r = t[l], l in e ? Object.defineProperty(e, l, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[l] = r
    })
  }
  return e
}

function u(e, l) {
  if (null == e) return {};
  var t, r, n, i = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (n = 0, t = Reflect.ownKeys(e); n < t.length; n++) r = t[n], !(l.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
  }
  if (i = function(e, l) {
      if (null == e) return {};
      var t, r, n = {},
        i = Object.getOwnPropertyNames(e);
      for (r = 0; r < i.length; r++) t = i[r], !(l.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t]);
      return n
    }(e, l), Object.getOwnPropertySymbols)
    for (n = 0, t = Object.getOwnPropertySymbols(e); n < t.length; n++) r = t[n], !(l.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  return i
}
let d = "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts";

function c(e, l) {
  let t = s.A.toURLSafe(null != e ? e : "");
  if (null === t) return "";
  if (null == l) return t.toString();
  for (let e in l) {
    let r = l[e];
    null != r && t.searchParams.set(e, r)
  }
  return t.toString()
}

function h(e) {
  let {
    src: l,
    autoMute: t
  } = e, r = u(e, ["src", "autoMute"]), s = i.useRef(null), a = i.useCallback(e => {
    if (e.data["x-tiktok-player"] && "https://www.tiktok.com" === e.origin && "onPlayerReady" === e.data.type) {
      var l, r, n, i;
      t && (null == (i = s.current) || null == (n = i.contentWindow) || n.postMessage({
        type: "mute",
        "x-tiktok-player": true
      }, e.origin)), null == (r = s.current) || null == (l = r.contentWindow) || l.postMessage({
        type: "play",
        "x-tiktok-player": true
      }, e.origin)
    }
  }, [t]);
  i.useEffect(() => (window.addEventListener("message", a), () => window.removeEventListener("message", a)), [a]);
  let d = c(l, {
    utm_source: "discord.gg"
  });
  return (0, n.jsx)(m, o({
    src: d,
    ref: s
  }, r))
}

function p(e) {
  let {
    src: l,
    autoMute: t
  } = e, r = u(e, ["src", "autoMute"]), i = c(l, {
    autoplay: "1",
    auto_play: "1",
    mute: t ? "1" : true
  });
  return (0, n.jsx)(m, o({
    src: i
  }, r))
}
let m = Chunk64700.forwardRef(function(e, l) {
  let [t, ...r] = [e, l], {
    allowFullScreen: i
  } = t, s = u(t, ["allowFullScreen"]), [c] = r;
  return (0, n.jsx)("iframe", o({
    ref: c,
    className: a.Qu,
    allow: i ? "autoplay; fullscreen" : "autoplay",
    frameBorder: 0,
    scrolling: "no",
    sandbox: i ? "".concat(d, " allow-fullscreen") : d,
    allowFullScreen: i
  }, s))
});
var g = ((r = {}).YOUTUBE = "YouTube", r.TIKTOK = "TikTok", r);

function f(e) {
  switch (e.provider) {
    case "YouTube":
      return (0, n.jsx)(p, o({}, e));
    case "TikTok":
      return (0, n.jsx)(h, o({}, e));
    default:
      return (0, n.jsx)(m, o({}, e))
  }
}