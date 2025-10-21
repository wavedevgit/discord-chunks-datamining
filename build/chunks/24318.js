/** Chunk was on 29679 **/
/** chunk id: 24318, original params: e,t,n (module,exports,require) **/
"use strict";

function r(e) {
  return "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT, "/guilds/").concat(e, "/widget.json")
}

function i(e) {
  let t = "".concat(location.protocol).concat(window.GLOBAL_ENV.WIDGET_ENDPOINT, "?id=").concat(e, "&theme=dark");
  return '<iframe src="'.concat(t, '" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>')
}
require.d(exports, {
  S: () => r,
  a: () => i
})