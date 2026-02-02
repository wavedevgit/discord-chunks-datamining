/** Chunk was on 71853 **/
/** chunk id: 513297, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var s, Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk573729 = require("./573729.js"),
  c = ((s = c || {})[s.ACCEPT = 0] = "ACCEPT", s[s.DENY = 1] = "DENY", s[s.DEFAULT = 2] = "DEFAULT", s);

function h(e) {
  let {
    icon: t,
    tooltip: i,
    onClick: s,
    actionType: r = 2,
    shouldHighlight: c
  } = e;
  return (0, n.jsx)(a.m, {
    text: i,
    children: (0, n.jsx)(l.DUT, {
      tag: "div",
      "aria-label": i,
      onClick: s,
      className: o()(u.hP, {
        [u.Jj]: 0 === r,
        [u.Bs]: 1 === r,
        [u.Zt]: c
      }),
      children: (0, n.jsx)(t, {
        className: u.Kk,
        color: "currentColor"
      })
    })
  })
}
h.ActionTypes = c;
let p = h