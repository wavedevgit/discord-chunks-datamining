/** Chunk was on web.js **/
/** chunk id: 240657, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk741914 = require("./741914.js"),
  Chunk925634 = require("./925634.js"),
  Chunk692228 = require("./692228.js");

function d(e) {
  let {
    color: t,
    className: n,
    variant: o,
    text: d,
    lineClamp: f
  } = e, _ = (0, s.xSt)(), p = i.useMemo(() => null == d ? null : (0, l.Z)(d, true, {
    allowHeading: null == f,
    allowList: null == f,
    initialHeaderLevel: _
  }), [d, f, _]);
  return (0, r.jsx)(s.Text, {
    className: a()(n, u.markup, {
      [c.lineClamp2Plus]: null != f && f > 1,
      [c.lineClamp1]: 1 === f
    }),
    color: t,
    variant: o,
    lineClamp: f,
    children: p
  })
}