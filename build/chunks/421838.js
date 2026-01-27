/** Chunk was on web.js **/
/** chunk id: 421838, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Kl: () => s,
  LF: () => l,
  sF: () => o
});
var Chunk73153 = require("./73153.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");

function o(e) {
  i.default.track(a.HAw.HOTSPOT_HIDDEN, {
    hotspot_location: e
  }), r.h.wait(() => {
    r.h.dispatch({
      type: "HOTSPOT_HIDE",
      location: e
    })
  })
}

function s(e, t) {
  r.h.dispatch({
    type: "HOTSPOT_OVERRIDE_SET",
    location: e,
    enabled: t
  })
}

function l(e) {
  r.h.dispatch({
    type: "HOTSPOT_OVERRIDE_CLEAR",
    location: e
  })
}