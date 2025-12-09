/** Chunk was on 1272 **/
/** chunk id: 118470, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk812206 = require("./812206.js"),
  Chunk82950 = require("./82950.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk106976 = require("./106976.js"),
  Chunk270144 = require("./270144.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk466389 = require("./466389.js");

function g(e) {
  let t, {
      guild: n
    } = e,
    g = (0, u.h6)(n),
    h = () => (0, c.sB)(n.id),
    m = i.useMemo(() => new Set(g.map(e => e.applicationId)), [g]),
    _ = (0, l.Wu)([a.Z], () => {
      let e = [];
      for (let t of m) {
        let n = a.Z.getApplication(t);
        null != n && e.push(n)
      }
      return e
    }, [m]);
  return 0 === _.length ? null : (t = 1 === _.length ? p.intl.formatToPlainString(p.t["Egq+G/"], {
    a: _[0].name
  }) : 2 === _.length ? p.intl.formatToPlainString(p.t.LxU9R3, {
    a: _[0].name,
    b: _[1].name
  }) : 3 === _.length ? p.intl.formatToPlainString(p.t.crKXMC, {
    a: _[0].name,
    b: _[1].name,
    c: _[2].name
  }) : p.intl.string(p.t.MvfowF), (0, r.jsx)(s.Z, {
    guild: n,
    onDismissed: h,
    message: t,
    type: d.vID.APPLICATION_SUBSCRIPTION_EXPIRATION,
    image: f,
    onClick: () => {
      h(), o.Z.open(n.id, d.pNK.INTEGRATIONS)
    },
    imageMarginTop: 6,
    imageMarginX: 46,
    cta: p.intl.string(p.t.Rr3MAe)
  }))
}