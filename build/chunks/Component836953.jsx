/** Chunk was on 21738 **/
/** chunk id: 836953, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk587895 = require("./587895.js"),
  Chunk64983 = require("./64983.jsx"),
  Chunk997509 = require("./997509.js"),
  Chunk143582 = require("./143582.js"),
  Chunk915043 = require("./915043.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk298525 = require("./298525.js");

function h(e) {
  let t, {
      guild: n
    } = e,
    h = (0, u.$s)(n),
    A = () => (0, c.Hc)(n.id),
    g = i.useMemo(() => new Set(h.map(e => e.applicationId)), [h]),
    m = (0, l.yK)([a.A], () => {
      let e = [];
      for (let t of g) {
        let n = a.A.getApplication(t);
        null != n && e.push(n)
      }
      return e
    }, [g]);
  return 0 === m.length ? null : (t = 1 === m.length ? p.intl.formatToPlainString(p.t["Egq+G/"], {
    a: m[0].name
  }) : 2 === m.length ? p.intl.formatToPlainString(p.t.LxU9R3, {
    a: m[0].name,
    b: m[1].name
  }) : 3 === m.length ? p.intl.formatToPlainString(p.t.crKXMC, {
    a: m[0].name,
    b: m[1].name,
    c: m[2].name
  }) : p.intl.string(p.t.MvfowF), (0, r.jsx)(s.A, {
    guild: n,
    onDismissed: A,
    message: t,
    type: d.n5X.APPLICATION_SUBSCRIPTION_EXPIRATION,
    image: f,
    onClick: () => {
      A(), o.A.open(n.id, d.BEX.INTEGRATIONS)
    },
    imageMarginTop: 6,
    imageMarginX: 46,
    cta: p.intl.string(p.t.Rr3MAe)
  }))
}