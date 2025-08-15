/** Chunk was on 53937 **/
/** chunk id: 468846, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  ZP: () => b,
  pn: () => g
});
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk591759 = require("./591759.js"),
  Chunk781452 = require("./781452.js");

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

function d(e, l) {
  if (null == e) return {};
  var t, r, n = function(e, l) {
    if (null == e) return {};
    var t, r, n = {},
      i = Object.keys(e);
    for (r = 0; r < i.length; r++) t = i[r], l.indexOf(t) >= 0 || (n[t] = e[t]);
    return n
  }(e, l);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) t = i[r], !(l.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t])
  }
  return n
}
let u = "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts";

function h(e, l) {
  let t = s.Z.toURLSafe(null != e ? e : "");
  if (null === t) return "";
  if (null == l) return t.toString();
  for (let e in l) {
    let r = l[e];
    null != r && t.searchParams.set(e, r)
  }
  return t.toString()
}

function c(e) {
  var {
    src: l,
    autoMute: t
  } = e, r = d(e, ["src", "autoMute"]);
  let s = i.useRef(null),
    a = i.useCallback(e => {
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
  let u = h(l, {
    utm_source: "discord.gg"
  });
  return (0, n.jsx)(p, o({
    src: u,
    ref: s
  }, r))
}

function m(e) {
  var {
    src: l,
    autoMute: t
  } = e, r = d(e, ["src", "autoMute"]);
  let i = h(l, {
    autoplay: "1",
    auto_play: "1",
    mute: t ? "1" : true
  });
  return (0, n.jsx)(p, o({
    src: i
  }, r))
}
let p = Chunk73800.forwardRef(function(e, l) {
  var {
    allowFullScreen: t
  } = e, r = d(e, ["allowFullScreen"]);
  return (0, n.jsx)("iframe", o({
    ref: l,
    className: a.embedIframe,
    allow: t ? "autoplay; fullscreen" : "autoplay",
    frameBorder: 0,
    scrolling: "no",
    sandbox: t ? "".concat(u, " allow-fullscreen") : u,
    allowFullScreen: t
  }, r))
});
var g = ((r = {}).YOUTUBE = "YouTube", r.TIKTOK = "TikTok", r);

function b(e) {
  switch (e.provider) {
    case "YouTube":
      return (0, n.jsx)(m, o({}, e));
    case "TikTok":
      return (0, n.jsx)(c, o({}, e));
    default:
      return (0, n.jsx)(p, o({}, e))
  }
}