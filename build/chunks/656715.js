/** Chunk was on 38597 (284c18b018f79f5f.js) **/
"use strict";
r.d(t, {
  Z: () => c
});
var a = r(910974),
  n = r(192379),
  s = r(639519),
  o = r.n(s),
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