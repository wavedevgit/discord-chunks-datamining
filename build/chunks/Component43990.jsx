/** Chunk was on web.js **/
/** chunk id: 43990, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk38021 = require("./38021.jsx"),
  Chunk86182 = require("./86182.jsx"),
  Chunk112834 = require("./112834.js");

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
  } = i.useContext(o.Dx);
  return (0, r.jsx)(l.w, {
    theme: a,
    gradient: u,
    disableAdaptiveTheme: d,
    reduceAdaptiveTheme: f,
    children: _(s()((0, c.m)(null != (t = null != (n = null == u ? true : u.theme) ? n : a) ? t : h), {
      [null != p ? p : ""]: null != u && null != p,
      "disable-adaptive-theme": d,
      "reduce-adaptive-theme": f
    }))
  })
}