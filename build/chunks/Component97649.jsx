/** Chunk was on 52986 **/
/** chunk id: 97649, original params: e,t,n (module,exports,require) **/
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
  } = e, n = (0, a.W6)();
  return l.useEffect(() => {
    let {
      code: e,
      state: r
    } = c.parse(window.location.search), l = "".concat(u.BVt.CONNECTIONS_ERROR(t)).concat(window.location.search);
    null == e || null == r ? n.replace(l) : i.A.linkDispatchAuthCallback(t, {
      code: e,
      state: r
    }).then(e => {
      let {
        status: r
      } = e;
      204 === r ? n.replace(u.BVt.CONNECTIONS_SUCCESS(t)) : n.replace(l)
    }, () => {
      n.replace(l)
    })
  }, [n, t]), (0, r.jsx)(s.VerifyAccountLoading, {
    platformType: t
  })
}
let f = function(e) {
  let {
    match: t
  } = e, n = t.params.type, {
    two_way_link_type: l
  } = c.parse(window.location.search);
  return [u.fg2.XBOX, u.fg2.PLAYSTATION_STAGING, u.fg2.PLAYSTATION, u.fg2.CRUNCHYROLL].includes(n) && l === o.I.DESKTOP ? (0, r.jsx)(d, {
    platformType: n
  }) : null
}