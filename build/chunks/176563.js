/** Chunk was on web.js **/
/** chunk id: 176563, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk310784 = require("./310784.js"),
  a = require.n(Chunk310784);
require("./440745.js");
var Chunk311907 = require("./311907.js"),
  Chunk317097 = require("./317097.js"),
  Chunk775602 = require("./775602.js"),
  Chunk654107 = require("./654107.js"),
  Chunk544028 = require("./544028.js"),
  Chunk128411 = require("./128411.js");
let f = 8,
  p = .725,
  _ = e => {
    let t = (0, s.bG)([l.A], () => l.A.saturation),
      n = (0, s.bG)([u.A], () => u.A.theme),
      i = (0, d.W)(n, t),
      [_, h] = (0, c.rh)(e, i);
    return r.useMemo(() => {
      let e = (0, o.LX)(_),
        t = (0, o.LX)(h);
      for (let t = 1; t < f && !((0, o.OK)(e) >= p); t++) e = a()(e).darken(.5).num();
      for (let e = 1; e < f && !((0, o.OK)(t) >= p); e++) t = a()(t).darken(.5).num();
      return {
        primaryColor: (0, o.Hl)(e),
        secondaryColor: (0, o.Hl)(t)
      }
    }, [_, h])
  }