/** Chunk was on 66866 **/
/** chunk id: 240657, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk741914 = require("./741914.js"),
  Chunk104559 = require("./104559.js"),
  Chunk430864 = require("./430864.js");

function d(e) {
  let {
    color: t,
    className: n,
    variant: l,
    text: d,
    lineClamp: p
  } = e, m = (0, o.xSt)(), f = i.useMemo(() => null == d ? null : (0, s.Z)(d, true, {
    allowHeading: null == p,
    allowList: null == p,
    initialHeaderLevel: m
  }), [d, p, m]);
  return (0, r.jsx)(o.Text, {
    className: a()(n, u.markup, {
      [c.lineClamp2Plus]: null != p && p > 1,
      [c.lineClamp1]: 1 === p
    }),
    color: t,
    variant: l,
    lineClamp: p,
    children: f
  })
}