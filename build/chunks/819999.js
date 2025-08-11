/** Chunk was on 67244 **/
/** chunk id: 819999, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk619825 = require("./619825.js"),
  Chunk73800 = require("./73800.js"),
  Chunk639519 = require("./639519.js"),
  o = require.n(Chunk639519),
  i = function(e) {
    var t = e.nodeType,
      r = e.styling,
      s = e.labelRenderer,
      o = e.keyPath,
      i = e.valueRenderer,
      c = e.value,
      l = e.valueGetter;
    return n.createElement("li", r("value", t, o), n.createElement("label", r(["label", "valueLabel"], t, o), s(o, t, false, false)), n.createElement("span", r("valueText", t, o), i.apply(true, [(true === l ? function(e) {
      return e
    } : l)(c), c].concat((0, a.Z)(o)))))
  };
i.propTypes = {
  nodeType: o().string.isRequired,
  styling: o().func.isRequired,
  labelRenderer: o().func.isRequired,
  keyPath: o().arrayOf(o().oneOfType([o().string, o().number]).isRequired).isRequired,
  valueRenderer: o().func.isRequired,
  value: o().any,
  valueGetter: o().func
};
let c = i