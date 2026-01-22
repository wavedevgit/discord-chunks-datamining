/** Chunk was on web.js **/
/** chunk id: 938973, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => o
});
var Chunk934551 = require("./934551.js"),
  Chunk245383 = require("./245383.js");

function a(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = s(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function s(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let o = e => {
  let {
    iconOverride: t,
    variantOverride: n
  } = e, s = a(e, ["iconOverride", "variantOverride"]), {
    buttonText: o,
    disabled: l
  } = (0, i.A)(s);
  return {
    subscribeButtonProps: {
      text: o,
      disabled: l,
      icon: null != t ? t : r.NitroWheelIcon,
      variant: null != n ? n : "expressive"
    }
  }
}