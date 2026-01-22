/** Chunk was on web.js **/
/** chunk id: 311364, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => a
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk688810 = require("./688810.jsx");

function a(e) {
  let {
    analyticsLocations: t
  } = (0, i.Ay)(...e.newLocations);
  return (0, r.jsx)(i.di.Provider, {
    value: t,
    children: e.children
  })
}