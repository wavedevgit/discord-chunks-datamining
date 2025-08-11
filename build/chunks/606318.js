/** Chunk was on web.js **/
/** chunk id: 606318, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DX: () => o,
  Gr: () => s,
  S2: () => a
});
var Chunk866442 = require("./866442.js"),
  Chunk981631 = require("./981631.js");

function o(e) {
  return {
    primaryColor: 0 === e.primary_color ? i.Pbq : (0, r.Rf)(e.primary_color),
    secondaryColor: null == e.secondary_color ? null : (0, r.Rf)(e.secondary_color),
    tertiaryColor: null == e.tertiary_color ? null : (0, r.Rf)(e.tertiary_color)
  }
}

function a(e) {
  return null != e && null != e.colorStrings && null != e.colorStrings.primaryColor && null != e.colorStrings.secondaryColor
}

function s(e) {
  let t = 0 === e.color,
    n = null != e.colors && 0 === e.colors.primary_color && null == e.colors.secondary_color && null == e.colors.tertiary_color;
  return t || n
}