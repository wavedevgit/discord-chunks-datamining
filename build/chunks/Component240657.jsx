/** Chunk was on web.js **/
/** chunk id: 240657, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk741914 = require("./741914.js"),
  Chunk223283 = require("./223283.js"),
  Chunk602009 = require("./602009.js");

function d(e) {
  let {
    color: t,
    className: n,
    variant: a,
    text: d,
    lineClamp: f
  } = e, _ = (0, s.xSt)(), p = i.useMemo(() => null == d ? null : (0, l.Z)(d, true, {
    allowHeading: null == f,
    allowList: null == f,
    initialHeaderLevel: _
  }), [d, f, _]);
  return (0, r.jsx)(s.Text, {
    className: o()(n, u.markup, {
      [c.lineClamp2Plus]: null != f && f > 1,
      [c.lineClamp1]: 1 === f
    }),
    color: t,
    variant: a,
    lineClamp: f,
    children: p
  })
}