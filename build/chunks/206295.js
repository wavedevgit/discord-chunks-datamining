/** Chunk was on web.js **/
/** chunk id: 206295, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk688619 = require("./688619.js"),
  a = require.n(Chunk688619);
require("./979590.js");
var Chunk442837 = require("./442837.js"),
  Chunk866442 = require("./866442.js"),
  Chunk607070 = require("./607070.js"),
  Chunk220082 = require("./220082.js"),
  Chunk210887 = require("./210887.js"),
  Chunk373397 = require("./373397.js");
let f = 8,
  p = .725,
  _ = e => {
    let t = (0, o.e7)([l.Z], () => l.Z.saturation),
      n = (0, o.e7)([u.Z], () => u.Z.theme),
      i = (0, d.L)(n, t),
      [_, h] = (0, c.Cf)(e, i);
    return r.useMemo(() => {
      let e = (0, s._i)(_),
        t = (0, s._i)(h);
      for (let t = 1; t < f && !((0, s.Bd)(e) >= p); t++) e = a()(e).darken(.5).num();
      for (let e = 1; e < f && !((0, s.Bd)(t) >= p); e++) t = a()(t).darken(.5).num();
      return {
        primaryColor: (0, s.Rf)(e),
        secondaryColor: (0, s.Rf)(t)
      }
    }, [_, h])
  }