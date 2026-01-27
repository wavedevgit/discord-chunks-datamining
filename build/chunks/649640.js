/** Chunk was on web.js **/
/** chunk id: 649640, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _3: () => p,
  aG: () => m,
  b2: () => f,
  n6: () => _
}), require("./747238.js");
var Chunk64700 = require("./64700.js"),
  Chunk458217 = require("./458217.js"),
  Chunk397927 = require("./397927.js"),
  Chunk724442 = require("./724442.js"),
  Chunk654107 = require("./654107.js"),
  Chunk486020 = require("./486020.js"),
  Chunk835517 = require("./835517.js"),
  Chunk652215 = require("./652215.js");
let d = 512;

function f() {
  return (0, a.rdh)(a.LU0.colors.GUILD_PROFILE_BANNER_BACKGROUND_DEFAULT)
}

function p(e) {
  var t;
  let n = e.customBanner;
  if (null != n && (null == (t = e.features) ? true : t.includes(u.GuildFeatures.DISCOVERABLE))) {
    if (l.aq.test(n)) return "url(".concat(n, ") center / cover");
    let t = l.Ay.getGuildDiscoverySplashURL({
      id: e.id,
      splash: n,
      size: d * (0, c.A)()
    });
    if (null != t) return "url(".concat(t, ") center / cover")
  }
  return null
}

function _(e) {
  let t = (0, i.Pf)(e, 1.75);
  return "radial-gradient(105.43% 127.05% at 50.1% 127.05%, ".concat(t, " 20.65%, ").concat(e, " 85.16%)")
}

function h(e) {
  return null == e.icon ? null : l.aq.test(e.icon) ? e.icon : l.Ay.getGuildIconURL({
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
  } = e, a = i ? null : h(t), l = r.useRef(n), c = (0, o.A)(l), u = (0, s.Ay)(a, c);
  return (r.useEffect(() => {
    l.current = u
  }, [u]), null == t.icon) ? n : u
}