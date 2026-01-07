/** Chunk was on web.js **/
/** chunk id: 220250, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  TK: () => _,
  dG: () => m,
  nv: () => p,
  qw: () => g
}), require("./35282.js");
var Chunk473749 = require("./473749.js"),
  Chunk950104 = require("./950104.js"),
  Chunk481060 = require("./481060.js"),
  Chunk990169 = require("./990169.js"),
  Chunk410030 = require("./410030.js"),
  Chunk220082 = require("./220082.js"),
  Chunk768581 = require("./768581.js"),
  Chunk921948 = require("./921948.js"),
  Chunk981631 = require("./981631.js");
let f = 512;

function p() {
  let e = (0, s.ZP)(),
    t = (0, a.dQu)(a.TVs.colors.BACKGROUND_BASE_LOWEST),
    n = (0, a.dQu)(a.TVs.colors.BACKGROUND_ACCENT);
  return (0, a.wjy)(e) ? t : n
}

function _(e) {
  var t;
  let n = e.customBanner;
  if (null != n && (null == (t = e.features) ? true : t.includes(d.GuildFeatures.DISCOVERABLE))) {
    if (c.ff.test(n)) return "url(".concat(n, ") center / cover");
    let t = c.ZP.getGuildDiscoverySplashURL({
      id: e.id,
      splash: n,
      size: f * (0, u.Z)()
    });
    if (null != t) return "url(".concat(t, ") center / cover")
  }
  return null
}

function m(e) {
  let t = (0, i.DT)(e, 1.75);
  return "radial-gradient(105.43% 127.05% at 50.1% 127.05%, ".concat(t, " 20.65%, ").concat(e, " 85.16%)")
}

function h(e) {
  return null == e.icon ? null : c.ff.test(e.icon) ? e.icon : c.ZP.getGuildIconURL({
    id: e.id,
    icon: e.icon,
    size: 64
  })
}

function g(e) {
  let {
    profile: t,
    defaultColor: n,
    forceDefaultColor: i
  } = e, a = i ? null : h(t), s = r.useRef(n), c = (0, o.Z)(s), u = (0, l.ZP)(a, c);
  return (r.useEffect(() => {
    s.current = u
  }, [u]), null == t.icon) ? n : u
}