/** Chunk was on 31748 **/
/** chunk id: 167155, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk29160 = require("./29160.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk384687 = require("./384687.js");
let u = function(e) {
  let {
    className: t,
    hasVideo: n,
    text: r,
    hasConnectedChannel: u,
    textVariant: d = "text-md/medium"
  } = e, f = n ? o.intl.string(o.t.IlHdW8) : o.intl.string(o.t.WsOisp);
  return (0, l.jsx)(s.A, {
    className: i()(t, c.H),
    hoverText: u ? (0, l.jsx)(a.Text, {
      variant: d,
      color: "currentColor",
      children: f
    }) : null,
    children: (0, l.jsx)(a.Text, {
      variant: d,
      color: "currentColor",
      children: r
    })
  })
}