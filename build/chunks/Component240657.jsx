/** Chunk was on 91173 **/
/** chunk id: 240657, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  } = e, m = (0, a.xSt)(), f = i.useMemo(() => null == d ? null : (0, s.Z)(d, true, {
    allowHeading: null == p,
    allowList: null == p,
    initialHeaderLevel: m
  }), [d, p, m]);
  return (0, r.jsx)(a.Text, {
    className: o()(n, u.markup, {
      [c.lineClamp2Plus]: null != p && p > 1,
      [c.lineClamp1]: 1 === p
    }),
    color: t,
    variant: l,
    lineClamp: p,
    children: f
  })
}