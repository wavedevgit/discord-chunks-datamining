/** Chunk was on web.js **/
/** chunk id: 864218, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => s
});
var Chunk657707 = require("./657707.js"),
  Chunk433390 = require("./433390.js");

function a(e, t) {
  if (null == e) return {};
  var n, r, i = o(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function o(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let s = e => {
  var {
    iconOverride: t,
    variantOverride: n
  } = e, o = a(e, ["iconOverride", "variantOverride"]);
  let {
    buttonText: s,
    disabled: l
  } = (0, i.Z)(o);
  return {
    subscribeButtonProps: {
      text: s,
      disabled: l,
      icon: null != t ? t : r.SrA,
      variant: null != n ? n : "expressive"
    }
  }
}