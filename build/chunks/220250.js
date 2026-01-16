/** Chunk was on web.js **/
/** chunk id: 220250, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  TK: () => p,
  dG: () => _,
  nv: () => f,
  qw: () => m
}), require("./35282.js");
var Chunk473749 = require("./473749.js"),
  Chunk950104 = require("./950104.js"),
  Chunk481060 = require("./481060.js"),
  Chunk990169 = require("./990169.js"),
  Chunk220082 = require("./220082.js"),
  Chunk768581 = require("./768581.js"),
  Chunk921948 = require("./921948.js"),
  Chunk981631 = require("./981631.js");
let d = 512;

function f() {
  return (0, a.dQu)(a.TVs.colors.GUILD_PROFILE_BANNER_BACKGROUND_DEFAULT)
}

function p(e) {
  var t;
  let n = e.customBanner;
  if (null != n && (null == (t = e.features) ? true : t.includes(u.GuildFeatures.DISCOVERABLE))) {
    if (l.ff.test(n)) return "url(".concat(n, ") center / cover");
    let t = l.ZP.getGuildDiscoverySplashURL({
      id: e.id,
      splash: n,
      size: d * (0, c.Z)()
    });
    if (null != t) return "url(".concat(t, ") center / cover")
  }
  return null
}

function _(e) {
  let t = (0, i.DT)(e, 1.75);
  return "radial-gradient(105.43% 127.05% at 50.1% 127.05%, ".concat(t, " 20.65%, ").concat(e, " 85.16%)")
}

function h(e) {
  return null == e.icon ? null : l.ff.test(e.icon) ? e.icon : l.ZP.getGuildIconURL({
    id: e.id,
    icon: e.icon,
    size: 64
  })
}

function m(e) {
  let {
    profile: t,
    defaultColor: n,
    forceDefaultColor: i
  } = e, a = i ? null : h(t), l = r.useRef(n), c = (0, o.Z)(l), u = (0, s.ZP)(a, c);
  return (r.useEffect(() => {
    l.current = u
  }, [u]), null == t.icon) ? n : u
}