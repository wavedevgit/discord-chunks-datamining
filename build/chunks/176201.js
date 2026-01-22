/** Chunk was on web.js **/
/** chunk id: 176201, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K3: () => a,
  Qv: () => o,
  kz: () => s
});
var Chunk317097 = require("./317097.js"),
  Chunk652215 = require("./652215.js");

function a(e) {
  return {
    primaryColor: 0 === e.primary_color ? i.TpD : (0, r.Hl)(e.primary_color),
    secondaryColor: null == e.secondary_color ? null : (0, r.Hl)(e.secondary_color),
    tertiaryColor: null == e.tertiary_color ? null : (0, r.Hl)(e.tertiary_color)
  }
}

function s(e) {
  return null != e && null != e.colorStrings && null != e.colorStrings.primaryColor && null != e.colorStrings.secondaryColor
}

function o(e) {
  let t = 0 === e.color,
    n = null != e.colors && 0 === e.colors.primary_color && null == e.colors.secondary_color && null == e.colors.tertiary_color;
  return t || n
}