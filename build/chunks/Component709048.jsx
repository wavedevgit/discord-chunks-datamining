/** Chunk was on web.js **/
/** chunk id: 709048, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk70007 = require("./70007.jsx"),
  Chunk795452 = require("./795452.jsx"),
  Chunk623294 = require("./623294.js");

function u(e) {
  var t, n;
  let {
    theme: a,
    gradient: u,
    disableAdaptiveTheme: d,
    reduceAdaptiveTheme: f,
    customBackgroundClassName: p,
    children: _
  } = e, {
    theme: h
  } = i.useContext(s.Ni);
  return (0, r.jsx)(l.z, {
    theme: a,
    gradient: u,
    disableAdaptiveTheme: d,
    reduceAdaptiveTheme: f,
    children: _(o()((0, c.Q)(null != (n = null != (t = null == u ? true : u.theme) ? t : a) ? n : h), {
      [null != p ? p : ""]: null != u && null != p,
      "disable-adaptive-theme": d,
      "reduce-adaptive-theme": f
    }))
  })
}