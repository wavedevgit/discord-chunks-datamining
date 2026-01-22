/** Chunk was on 52986 **/
/** chunk id: 97649, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => f
}), require("./747238.js"), require("./812715.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk492462 = require("./492462.js"),
  Chunk960488 = require("./960488.js"),
  Chunk13202 = require("./13202.js"),
  Chunk77468 = require("./77468.js"),
  Chunk556074 = require("./556074.jsx"),
  Chunk652215 = require("./652215.js");

function d(e) {
  let {
    platformType: t
  } = e, r = (0, a.W6)();
  return c.useEffect(() => {
    let {
      code: e,
      state: n
    } = l.parse(window.location.search), c = "".concat(s.BVt.CONNECTIONS_ERROR(t)).concat(window.location.search);
    null == e || null == n ? r.replace(c) : i.A.linkDispatchAuthCallback(t, {
      code: e,
      state: n
    }).then(e => {
      let {
        status: n
      } = e;
      204 === n ? r.replace(s.BVt.CONNECTIONS_SUCCESS(t)) : r.replace(c)
    }, () => {
      r.replace(c)
    })
  }, [r, t]), (0, n.jsx)(u.VerifyAccountLoading, {
    platformType: t
  })
}
let f = function(e) {
  let {
    match: t
  } = e, r = t.params.type, {
    two_way_link_type: c
  } = l.parse(window.location.search);
  return [s.fg2.XBOX, s.fg2.PLAYSTATION_STAGING, s.fg2.PLAYSTATION, s.fg2.CRUNCHYROLL].includes(r) && c === o.I.DESKTOP ? (0, n.jsx)(d, {
    platformType: r
  }) : null
}