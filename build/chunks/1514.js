/** Chunk was on 92777 **/
/** chunk id: 1514, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk25701 = require("./25701.js"),
  Chunk64700 = require("./64700.js"),
  Chunk223108 = require("./223108.js"),
  o = require.n(Chunk223108),
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
    } : l)(c), c].concat((0, a.A)(o)))))
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