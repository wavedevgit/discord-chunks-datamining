/** Chunk was on 9753 **/
/** chunk id: 308234, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk415350 = require("./415350.js"),
  Chunk366468 = require("./366468.js"),
  Chunk206314 = require("./206314.js");

function d(e) {
  let {
    color: t,
    className: n,
    variant: l,
    text: d,
    lineClamp: p
  } = e, m = (0, s.$Il)(), f = i.useMemo(() => null == d ? null : (0, o.A)(d, true, {
    allowHeading: null == p,
    allowList: null == p,
    initialHeaderLevel: m
  }), [d, p, m]);
  return (0, r.jsx)(s.Text, {
    className: a()(n, u.PT, {
      [c.E]: null != p && p > 1,
      [c.D]: 1 === p
    }),
    color: t,
    variant: l,
    lineClamp: p,
    children: f
  })
}