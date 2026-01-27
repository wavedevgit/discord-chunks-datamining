/** Chunk was on web.js **/
/** chunk id: 913934, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => l
}), require("./896048.js");
var Chunk350723 = require("./350723.js"),
  Chunk860579 = require("./860579.js"),
  Chunk475815 = require("./475815.js"),
  Chunk365971 = require("./365971.js"),
  Chunk158368 = require("./158368.js");

function l(e) {
  let t = e.document,
    n = (0, o.rw)(e);

  function l() {
    (0, r.tV)(e)
  }
  let c = (0, i.NQ)(n, e.document.body, l);

  function u() {
    (0, r.XC)(e, true)
  }

  function d() {
    e.document.hasFocus() || (0, r.XC)(e, false)
  }

  function f() {
    (0, r._c)(e)
  }

  function p() {
    (0, r.GP)(e), (0, i.$v)(c, e.document.body), (0, i.JE)(n, e.document.body)
  }

  function _() {
    (0, s.I_)(n)
  }

  function h() {
    setTimeout(() => {
      (0, s.xz)(n)
    }, 0)
  }

  function m() {
    (0, r.t2)(e)
  }
  for (let n of ((0, i.wB)(c, e.document.body), e.addEventListener("focus", u), e.addEventListener("blur", d), e.addEventListener("unload", p), e.addEventListener("visibilitychange", m), s.NC)) t.addEventListener(n, _, true), t.addEventListener(n, h, false);
  (0, a.a3)(t, f), (0, r.Ts)(e)
}