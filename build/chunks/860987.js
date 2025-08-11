/** Chunk was on web.js **/
/** chunk id: 860987, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  return null != e ? {
    wallpaperId: e.wallpaper_id,
    setterId: e.setter_id
  } : true
}

function i(e) {
  return {
    id: e.id,
    label: e.label,
    default: e.default,
    variants: e.variants,
    isBlurred: e.is_blurred,
    designGroupId: e.design_group_id
  }
}
require.d(exports, {
  L: () => r,
  w: () => i
})