/** Chunk was on 92777 **/
/** chunk id: 708906, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk1139 = require("./1139.js"),
  Chunk64700 = require("./64700.js"),
  Chunk223108 = require("./223108.js"),
  o = require.n(Chunk223108),
  i = function(e) {
    var t = e.styling,
      r = e.arrowStyle,
      s = e.expanded,
      o = e.nodeType,
      i = e.onClick;
    return n.createElement("div", (0, a.A)({}, t("arrowContainer", r), {
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