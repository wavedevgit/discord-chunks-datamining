/** Chunk was on 71853 **/
/** chunk id: 513297, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var n, Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk573729 = require("./573729.js"),
  c = ((n = c || {})[n.ACCEPT = 0] = "ACCEPT", n[n.DENY = 1] = "DENY", n[n.DEFAULT = 2] = "DEFAULT", n);

function h(e) {
  let {
    icon: t,
    tooltip: i,
    onClick: n,
    actionType: r = 2,
    shouldHighlight: c
  } = e;
  return (0, s.jsx)(o.m, {
    text: i,
    children: (0, s.jsx)(l.DUT, {
      tag: "div",
      "aria-label": i,
      onClick: n,
      className: a()(u.hP, {
        [u.Jj]: 0 === r,
        [u.Bs]: 1 === r,
        [u.Zt]: c
      }),
      children: (0, s.jsx)(t, {
        className: u.Kk,
        color: "currentColor"
      })
    })
  })
}
h.ActionTypes = c;
let p = h