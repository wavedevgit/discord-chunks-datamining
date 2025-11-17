/** Chunk was on 23032 **/
/** chunk id: 22356, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk44837 = require("./44837.js"),
  Chunk473749 = require("./473749.js"),
  Chunk639519 = require("./639519.js"),
  s = require.n(Chunk639519),
  i = function(e) {
    var t = e.styling,
      r = e.arrowStyle,
      o = e.expanded,
      s = e.nodeType,
      i = e.onClick;
    return n.createElement("div", (0, a.Z)({}, t("arrowContainer", r), {
      onClick: i
    }), n.createElement("div", t(["arrow", "arrowSign"], s, o, r), "▶", "double" === r && n.createElement("div", t(["arrowSign", "arrowSignInner"]), "▶")))
  };
i.propTypes = {
  styling: s().func.isRequired,
  arrowStyle: s().oneOf(["single", "double"]),
  expanded: s().bool.isRequired,
  nodeType: s().string.isRequired,
  onClick: s().func.isRequired
}, i.defaultProps = {
  arrowStyle: "single"
};
let c = i