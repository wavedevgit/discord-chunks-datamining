/** Chunk was on 53937 **/
l.d(t, {
  ZP: () => g,
  pn: () => p
});
var n, r = l(200651),
  i = l(192379),
  s = l(591759),
  a = l(552249);

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var l = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(l);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
      return Object.getOwnPropertyDescriptor(l, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = l[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n
    })
  }
  return e
}

function d(e, t) {
  if (null == e) return {};
  var l, n, r = function(e, t) {
    if (null == e) return {};
    var l, n, r = {},
      i = Object.keys(e);
    for (n = 0; n < i.length; n++) l = i[n], t.indexOf(l) >= 0 || (r[l] = e[l]);
    return r
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) l = i[n], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l])
  }
  return r
}

function u(e, t) {
  let l = s.Z.toURLSafe(null != e ? e : "");
  if (null === l) return "";
  if (null == t) return l.toString();
  for (let e in t) {
    let n = t[e];
    null != n && l.searchParams.set(e, n)
  }
  return l.toString()
}

function c(e) {
  var {
    src: t,
    autoMute: l
  } = e, n = d(e, ["src", "autoMute"]);
  let s = i.useRef(null),
    a = i.useCallback(e => {
      if (e.data["x-tiktok-player"] && "https://www.tiktok.com" === e.origin && "onPlayerReady" === e.data.type) {
        var t, n, r, i;
        l && (null === (i = s.current) || void 0 === i || null === (r = i.contentWindow) || void 0 === r || r.postMessage({
          type: "mute",
          "x-tiktok-player": !0
        }, e.origin)), null === (n = s.current) || void 0 === n || null === (t = n.contentWindow) || void 0 === t || t.postMessage({
          type: "play",
          "x-tiktok-player": !0
        }, e.origin)
      }
    }, [l]);
  i.useEffect(() => (window.addEventListener("message", a), () => window.removeEventListener("message", a)), [a]);
  let c = u(t, {
    utm_source: "discord.gg"
  });
  return (0, r.jsx)(m, o({
    src: c,
    ref: s
  }, n))
}

function h(e) {
  var {
    src: t,
    autoMute: l
  } = e, n = d(e, ["src", "autoMute"]);
  let i = u(t, {
    autoplay: "1",
    auto_play: "1",
    mute: l ? "1" : void 0
  });
  return (0, r.jsx)(m, o({
    src: i
  }, n))
}
let m = i.forwardRef(function(e, t) {
  return (0, r.jsx)("iframe", o({
    ref: t,
    className: a.embedIframe,
    allow: "autoplay",
    frameBorder: 0,
    scrolling: "no",
    sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
  }, e))
});
var p = ((n = {}).YOUTUBE = "YouTube", n.TIKTOK = "TikTok", n);

function g(e) {
  switch (e.provider) {
    case "YouTube":
      return (0, r.jsx)(h, o({}, e));
    case "TikTok":
      return (0, r.jsx)(c, o({}, e));
    default:
      return (0, r.jsx)(m, o({}, e))
  }
}