/** Chunk was on 67127 **/
/** chunk id: 832462, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => f
}), require("./35282.js"), require("./704826.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk593473 = require("./593473.js"),
  Chunk114858 = require("./114858.js"),
  Chunk478677 = require("./478677.js"),
  Chunk457330 = require("./457330.js"),
  Chunk675207 = require("./675207.jsx"),
  Chunk981631 = require("./981631.js");

function d(e) {
  let {
    platformType: t
  } = e, n = (0, l.k6)();
  return c.useEffect(() => {
    let {
      code: e,
      state: r
    } = o.parse(window.location.search), c = "".concat(u.Z5c.CONNECTIONS_ERROR(t)).concat(window.location.search);
    if (null == e || null == r) return void n.replace(c);
    i.Z.linkDispatchAuthCallback(t, {
      code: e,
      state: r
    }).then(e => {
      let {
        status: r
      } = e;
      204 === r ? n.replace(u.Z5c.CONNECTIONS_SUCCESS(t)) : n.replace(c)
    }, () => {
      n.replace(c)
    })
  }, [n, t]), (0, r.jsx)(s.VerifyAccountLoading, {
    platformType: t
  })
}
let f = function(e) {
  let {
    match: t
  } = e, n = t.params.type, {
    two_way_link_type: c
  } = o.parse(window.location.search);
  return [u.ABu.XBOX, u.ABu.PLAYSTATION_STAGING, u.ABu.PLAYSTATION, u.ABu.CRUNCHYROLL].includes(n) && c === a.g.DESKTOP ? (0, r.jsx)(d, {
    platformType: n
  }) : null
}