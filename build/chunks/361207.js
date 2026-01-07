/** Chunk was on web.js **/
/** chunk id: 361207, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DW: () => y,
  Gn: () => v,
  t3: () => O,
  w4: () => E
});
var Chunk525654 = require("./525654.js"),
  i = require.n(Chunk525654),
  Chunk271579 = require("./271579.js"),
  Chunk314897 = require("./314897.js"),
  Chunk981631 = require("./981631.js");
let l = "Ubuntu",
  c = "Debian",
  u = "Fedora",
  d = "Red Hat",
  f = "SuSE",
  p = "Linux",
  _ = "OS X",
  m = "win",
  h = "osx",
  g = "linux";

function E(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = arguments.length > 2 ? arguments[2] : true,
    r = t ? "/ptb" : "",
    i = null != n ? "&format=".concat(n) : "";
  return "".concat(s.fzT.DESKTOP).concat(r, "?platform=").concat(e).concat(i)
}

function b() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : (() => {
    var e;
    return null == (e = i().os) ? true : e.family
  })();
  return null == e ? m : false !== e.indexOf(l) || false !== e.indexOf(c) || false !== e.indexOf(u) || false !== e.indexOf(d) || false !== e.indexOf(f) || false !== e.indexOf(p) ? g : false !== e.indexOf(_) ? h : m
}

function y(e) {
  return ({
    [m]: "Windows",
    [h]: "Mac",
    [g]: "Linux"
  })[b(e)]
}

function O() {
  let e = b(),
    t = e === g ? "tar.gz" : null;
  return E(e, false, t)
}

function v(e, t, n) {
  let r = null != n ? n.toString() : null;
  switch (t) {
    case "iOS":
      return (0, a.ZP)(null != r ? r : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
        utmSource: e,
        fingerprint: o.default.getFingerprint(),
        attemptId: (0, a.WS)()
      });
    case "Android":
      return (0, a.ZP)(null != r ? r : "https://play.google.com/store/apps/details", {
        utmSource: e,
        id: "com.discord",
        fingerprint: o.default.getFingerprint(),
        attemptId: (0, a.WS)()
      });
    default:
      return null != r ? r : "https://www.discord.com"
  }
}