/** Chunk was on 23706 **/
/** chunk id: 423353, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk619825 = require("./619825.js"),
  Chunk473749 = require("./473749.js"),
  Chunk639519 = require("./639519.js"),
  s = require.n(Chunk639519),
  i = function(e) {
    var t = e.nodeType,
      r = e.styling,
      o = e.labelRenderer,
      s = e.keyPath,
      i = e.valueRenderer,
      c = e.value,
      u = e.valueGetter;
    return a.createElement("li", r("value", t, s), a.createElement("label", r(["label", "valueLabel"], t, s), o(s, t, false, false)), a.createElement("span", r("valueText", t, s), i.apply(true, [(true === u ? function(e) {
      return e
    } : u)(c), c].concat((0, n.Z)(s)))))
  };
i.propTypes = {
  nodeType: s().string.isRequired,
  styling: s().func.isRequired,
  labelRenderer: s().func.isRequired,
  keyPath: s().arrayOf(s().oneOfType([s().string, s().number]).isRequired).isRequired,
  valueRenderer: s().func.isRequired,
  value: s().any,
  valueGetter: s().func
};
let c = i