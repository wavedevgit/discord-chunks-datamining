/** Chunk was on 60667 **/
/** chunk id: 152302, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
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

function _() {
  let {
    analyticsLocations: e
  } = (0, a.Ay)(), {
    inputVolume: t,
    outputVolume: n
  } = (0, i.cf)([o.A], () => ({
    inputVolume: o.A.getInputVolume(),
    outputVolume: o.A.getOutputVolume()
  }));
  return (0, r.jsxs)("div", {
    className: u.o,
    children: [(0, r.jsx)("div", {
      className: u.f,
      children: (0, r.jsx)(l.Apm, {
        label: d.intl.string(d.t.OX2Bnr),
        initialValue: (0, c.M)(t),
        asValueChanges: t => s.A.setInputVolume((0, c.w)(t), {
          analyticsLocations: e
        })
      })
    }), (0, r.jsx)("div", {
      className: u.f,
      children: (0, r.jsx)(l.Apm, {
        label: d.intl.string(d.t.eATD2B),
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