/** Chunk was on web.js **/
/** chunk id: 312784, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk908289 = require("./908289.js"),
  Chunk960076 = require("./960076.js"),
  Chunk939496 = require("./939496.jsx"),
  Chunk993401 = require("./993401.jsx"),
  Chunk996988 = require("./996988.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let {
    activity: t,
    onAction: n
  } = e, {
    themeType: u
  } = (0, s.E)(), d = u === l.d.MODAL_V2, f = (0, i.A)(t);
  if (!(0, a.A)(t) || null == f) return null;
  let p = e => (e.stopPropagation(), null == n || n({
    action: "PRESS_WATCH_BUTTON"
  }), window.open(f));
  return (0, r.jsx)(o.FD, {
    text: c.intl.string(c.t.I6JG46),
    fullWidth: !d,
    onClick: p
  })
}