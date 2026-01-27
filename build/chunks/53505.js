/** Chunk was on web.js **/
/** chunk id: 53505, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  SU: () => O,
  Vf: () => b,
  b$: () => v,
  oW: () => E
});
var Chunk481613 = require("./481613.js"),
  i = require.n(Chunk481613),
  Chunk49485 = require("./49485.js"),
  Chunk961350 = require("./961350.js"),
  Chunk652215 = require("./652215.js");
let l = "Ubuntu",
  c = "Debian",
  u = "Fedora",
  d = "Red Hat",
  f = "SuSE",
  p = "Linux",
  _ = "OS X",
  h = "win",
  m = "osx",
  g = "linux";

function E(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = arguments.length > 2 ? arguments[2] : true,
    r = t ? "/ptb" : "",
    i = null != n ? "&format=".concat(n) : "";
  return "".concat(s.AMi.DESKTOP).concat(r, "?platform=").concat(e).concat(i)
}

function y() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : (() => {
    var e;
    return null == (e = i().os) ? true : e.family
  })();
  return null == e ? h : false !== e.indexOf(l) || false !== e.indexOf(c) || false !== e.indexOf(u) || false !== e.indexOf(d) || false !== e.indexOf(f) || false !== e.indexOf(p) ? g : false !== e.indexOf(_) ? m : h
}

function b(e) {
  return ({
    [h]: "Windows",
    [m]: "Mac",
    [g]: "Linux"
  })[y(e)]
}

function O() {
  let e = y(),
    t = e === g ? "tar.gz" : null;
  return E(e, false, t)
}

function v(e, t, n) {
  let r = null != n ? n.toString() : null;
  switch (t) {
    case "iOS":
      return (0, a.Ay)(null != r ? r : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
        utmSource: e,
        fingerprint: o.default.getFingerprint(),
        attemptId: (0, a.I_)()
      });
    case "Android":
      return (0, a.Ay)(null != r ? r : "https://play.google.com/store/apps/details", {
        utmSource: e,
        id: "com.discord",
        fingerprint: o.default.getFingerprint(),
        attemptId: (0, a.I_)()
      });
    default:
      return null != r ? r : "https://www.discord.com"
  }
}