/** Chunk was on web.js **/
/** chunk id: 350723, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GP: () => _,
  R: () => l,
  Ts: () => p,
  XC: () => s,
  _c: () => d,
  t2: () => f,
  tV: () => u
});
var Chunk735438 = require("./735438.js"),
  Chunk73153 = require("./73153.js"),
  Chunk475815 = require("./475815.js"),
  Chunk365971 = require("./365971.js");

function s(e, t) {
  i.h.dispatch({
    type: "WINDOW_FOCUS",
    windowId: (0, o.Q2)(e),
    focused: t
  })
}

function l(e) {
  i.h.dispatch({
    type: "WINDOW_HIDDEN",
    windowId: (0, o.Q2)(e)
  })
}
let c = (0, Chunk735438.memoize)(e => (0, r.debounce)((t, n) => {
  i.h.dispatch({
    type: "WINDOW_RESIZED",
    windowId: e,
    width: t,
    height: n
  })
}, 100));

function u(e) {
  c((0, o.Q2)(e))(e.innerWidth, e.innerHeight)
}

function d(e) {
  let t = (0, o.Q2)(e);
  i.h.dispatch({
    type: "WINDOW_FULLSCREEN_CHANGE",
    windowId: t,
    isElementFullscreen: (0, a._U)(null, e.document)
  })
}

function f(e) {
  let t = (0, o.Q2)(e);
  i.h.dispatch({
    type: "WINDOW_VISIBILITY_CHANGE",
    windowId: t,
    visible: "visible" === e.document.visibilityState
  })
}

function p(e) {
  let t = (0, o.Q2)(e),
    n = e.document;
  i.h.dispatch({
    type: "WINDOW_INIT",
    windowId: t,
    isElementFullscreen: (0, a._U)(null, n),
    focused: n.hasFocus(),
    width: e.innerWidth,
    height: e.innerHeight,
    visible: "visible" === n.visibilityState
  })
}

function _(e) {
  i.h.dispatch({
    type: "WINDOW_UNLOAD",
    windowId: (0, o.Q2)(e)
  })
}