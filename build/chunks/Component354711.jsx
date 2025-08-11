/** Chunk was on web.js **/
/** chunk id: 354711, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk710260 = require("./710260.jsx"),
  Chunk463085 = require("./463085.jsx"),
  Chunk472558 = require("./472558.js"),
  Chunk168551 = require("./168551.js");

function d(e) {
  var t, n;
  let {
    theme: o,
    gradient: d,
    disableAdaptiveTheme: f,
    reduceAdaptiveTheme: _,
    children: p
  } = e, {
    theme: h
  } = i.useContext(s.Ni);
  return (0, r.jsx)(l.z, {
    theme: o,
    gradient: d,
    disableAdaptiveTheme: f,
    reduceAdaptiveTheme: _,
    children: p(a()((0, c.Q)(null != (n = null != (t = null == d ? true : d.theme) ? t : o) ? n : h), {
      [u.e3]: null != d,
      "disable-adaptive-theme": f,
      "reduce-adaptive-theme": _
    }))
  })
}