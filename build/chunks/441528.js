/** Chunk was on 67244 **/
/** chunk id: 441528, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk44837 = require("./44837.js"),
  Chunk73800 = require("./73800.js"),
  Chunk639519 = require("./639519.js"),
  o = require.n(Chunk639519),
  i = function(e) {
    var t = e.styling,
      r = e.arrowStyle,
      s = e.expanded,
      o = e.nodeType,
      i = e.onClick;
    return n.createElement("div", (0, a.Z)({}, t("arrowContainer", r), {
      onClick: i
    }), n.createElement("div", t(["arrow", "arrowSign"], o, s, r), "▶", "double" === r && n.createElement("div", t(["arrowSign", "arrowSignInner"]), "▶")))
  };
i.propTypes = {
  styling: o().func.isRequired,
  arrowStyle: o().oneOf(["single", "double"]),
  expanded: o().bool.isRequired,
  nodeType: o().string.isRequired,
  onClick: o().func.isRequired
}, i.defaultProps = {
  arrowStyle: "single"
};
let c = i