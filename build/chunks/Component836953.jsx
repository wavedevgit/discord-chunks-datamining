/** Chunk was on 21738 **/
/** chunk id: 836953, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
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

function g(e) {
  let t, {
      guild: n
    } = e,
    g = (0, u.$s)(n),
    f = () => (0, c.Hc)(n.id),
    m = i.useMemo(() => new Set(g.map(e => e.applicationId)), [g]),
    A = (0, l.yK)([a.A], () => {
      let e = [];
      for (let t of m) {
        let n = a.A.getApplication(t);
        null != n && e.push(n)
      }
      return e
    }, [m]);
  return 0 === A.length ? null : (t = 1 === A.length ? p.intl.formatToPlainString(p.t["Egq+G/"], {
    a: A[0].name
  }) : 2 === A.length ? p.intl.formatToPlainString(p.t.LxU9R3, {
    a: A[0].name,
    b: A[1].name
  }) : 3 === A.length ? p.intl.formatToPlainString(p.t.crKXMC, {
    a: A[0].name,
    b: A[1].name,
    c: A[2].name
  }) : p.intl.string(p.t.MvfowF), (0, r.jsx)(s.A, {
    guild: n,
    onDismissed: f,
    message: t,
    type: d.n5X.APPLICATION_SUBSCRIPTION_EXPIRATION,
    image: h,
    onClick: () => {
      f(), o.A.open(n.id, d.BEX.INTEGRATIONS)
    },
    imageMarginTop: 6,
    imageMarginX: 46,
    cta: p.intl.string(p.t.Rr3MAe)
  }))
}