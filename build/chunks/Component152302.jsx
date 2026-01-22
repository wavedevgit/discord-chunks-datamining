/** Chunk was on web.js **/
/** chunk id: 152302, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk430452 = require("./430452.js"),
  Chunk824744 = require("./824744.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk867737 = require("./867737.js");

function f() {
  let {
    analyticsLocations: e
  } = (0, o.Ay)(), {
    inputVolume: t,
    outputVolume: n
  } = (0, i.cf)([l.A], () => ({
    inputVolume: l.A.getInputVolume(),
    outputVolume: l.A.getOutputVolume()
  }));
  return (0, r.jsxs)("div", {
    className: d.o,
    children: [(0, r.jsx)("div", {
      className: d.f,
      children: (0, r.jsx)(a.Apm, {
        label: u.intl.string(u.t.OX2Bnr),
        initialValue: (0, c.M)(t),
        asValueChanges: t => s.A.setInputVolume((0, c.w)(t), {
          analyticsLocations: e
        })
      })
    }), (0, r.jsx)("div", {
      className: d.f,
      children: (0, r.jsx)(a.Apm, {
        label: u.intl.string(u.t.eATD2B),
        initialValue: (0, c.M)(n),
        maxValue: 200,
        onValueRender: e => "".concat(e.toFixed(0), "%"),
        asValueChanges: t => s.A.setOutputVolume((0, c.w)(t), {
          analyticsLocations: e
        })
      })
    })]
  })
}