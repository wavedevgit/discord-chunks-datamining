/** Chunk was on web.js **/
/** chunk id: 473159, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => l
}), require("./388685.js");
var Chunk284737 = require("./284737.js"),
  Chunk889711 = require("./889711.js"),
  Chunk228488 = require("./228488.js"),
  Chunk830917 = require("./830917.js"),
  Chunk919570 = require("./919570.js");

function l(e) {
  let t = e.document,
    n = (0, o.Ig)(e);

  function l() {
    (0, r.dx)(e)
  }
  let c = (0, i.pP)(n, e.document.body, l);

  function u() {
    (0, r.T_)(e, true)
  }

  function d() {
    e.document.hasFocus() || (0, r.T_)(e, false)
  }

  function f() {
    (0, r.gH)(e)
  }

  function p() {
    (0, r.Rz)(e), (0, i.UC)(c, e.document.body), (0, i.fO)(n, e.document.body)
  }

  function _() {
    (0, s.gK)(n)
  }

  function m() {
    setTimeout(() => {
      (0, s.HQ)(n)
    }, 0)
  }

  function h() {
    (0, r.CO)(e)
  }
  for (let n of ((0, i.YP)(c, e.document.body), e.addEventListener("focus", u), e.addEventListener("blur", d), e.addEventListener("unload", p), e.addEventListener("visibilitychange", h), s.wu)) t.addEventListener(n, _, true), t.addEventListener(n, m, false);
  (0, a.uF)(t, f), (0, r.S1)(e)
}