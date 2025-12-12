/** Chunk was on web.js **/
/** chunk id: 861529, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk454585 = require("./454585.js"),
  Chunk937889 = require("./937889.js"),
  Chunk970184 = require("./970184.jsx"),
  Chunk979372 = require("./979372.jsx"),
  Chunk870456 = require("./870456.js"),
  Chunk709136 = require("./709136.js"),
  Chunk430864 = require("./430864.js");

function _(e) {
  let t = (0, c.CJ)();
  return (0, i.useMemo)(() => {
    let n;
    return null === t ? null : (n = null != t.message ? (0, l.rs)(t.message, d.u) : (0, l.p6)({
      channelId: t.channelId,
      renderOptions: d.u
    }), s.Z.parse(e, true, n))
  }, [e, t])
}

function m(e) {
  let {
    content: t,
    className: n
  } = e, i = _(t), o = (0, u._)();
  return (0, r.jsx)("div", {
    className: a()(n, p.markup, f.markdownContainer, o.className),
    children: i
  })
}