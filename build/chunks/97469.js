/** Chunk was on web.js **/
/** chunk id: 97469, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $i: () => f,
  NC: () => _,
  qo: () => p
});
var Chunk311907 = require("./311907.js"),
  Chunk582754 = require("./582754.js"),
  Chunk467135 = require("./467135.js"),
  Chunk47671 = require("./47671.js"),
  Chunk544028 = require("./544028.js"),
  Chunk964404 = require("./964404.js"),
  Chunk253932 = require("./253932.js"),
  Chunk652215 = require("./652215.js");

function d() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : s.A,
    {
      darkSidebar: t
    } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : l.Ay,
    {
      gradientPreset: n
    } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : o.A,
    r = arguments.length > 3 ? arguments[3] : true,
    a = arguments.length > 4 ? arguments[4] : true,
    c = null != r.customUserThemeSettings || a;
  return (0, i.qB)(e.theme) && t && null == n && !c
}

function f() {
  let e = c.eh.getSetting(),
    t = a.ko.getState().isEditorActive();
  return d(s.A, l.Ay, o.A, e, t)
}

function p() {
  let e = c.eh.useSetting(),
    t = (0, a.ko)(e => e.isEditorActive());
  return (0, r.bG)([s.A, l.Ay, o.A], () => d(s.A, l.Ay, o.A, e, t))
}

function _() {
  return p() ? u.NJ8.DARK : true
}