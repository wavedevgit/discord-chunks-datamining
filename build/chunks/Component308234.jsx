/** Chunk was on web.js **/
/** chunk id: 308234, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk415350 = require("./415350.js"),
  Chunk366468 = require("./366468.js"),
  Chunk206314 = require("./206314.js");

function d(e) {
  let {
    color: t,
    className: n,
    variant: a,
    text: d,
    lineClamp: f
  } = e, p = (0, o.$Il)(), _ = i.useMemo(() => null == d ? null : (0, l.A)(d, true, {
    allowHeading: null == f,
    allowList: null == f,
    initialHeaderLevel: p
  }), [d, f, p]);
  return (0, r.jsx)(o.Text, {
    className: s()(n, u.PT, {
      [c.E]: null != f && f > 1,
      [c.D]: 1 === f
    }),
    color: t,
    variant: a,
    lineClamp: f,
    children: _
  })
}