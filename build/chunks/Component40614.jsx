/** Chunk was on 82124 **/
/** chunk id: 40614, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk695346 = require("./695346.js"),
  Chunk885110 = require("./885110.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk654642 = require("./654642.js");

function u(e) {
  let {
    onClick: t
  } = e;
  return (0, r.jsx)(l.P3F, {
    className: c.container,
    onClick: t,
    children: (0, r.jsx)(l.Text, {
      className: c.textContent,
      variant: "text-xs/medium",
      color: "text-subtle",
      children: s.intl.string(s.t.jfrLLb)
    })
  })
}

function d(e) {
  let {
    onClick: t
  } = e, n = a.G6.useSetting(), s = (0, i.e7)([o.Z], () => o.Z.getStatus());
  return __OVERLAY__ || n && s !== l.Skl.INVISIBLE ? null : (0, r.jsx)(u, {
    onClick: t
  })
}