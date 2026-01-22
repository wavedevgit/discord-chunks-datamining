/** Chunk was on web.js **/
/** chunk id: 31728, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  EB: () => c,
  I_: () => u,
  VN: () => a,
  WU: () => o,
  ho: () => i,
  jD: () => s,
  mf: () => d,
  tw: () => l
});
var Chunk73153 = require("./73153.js");

function i(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
  r.h.dispatch({
    type: "PICTURE_IN_PICTURE_OPEN",
    id: e,
    component: t,
    props: n
  })
}

function a(e) {
  r.h.dispatch({
    type: "PICTURE_IN_PICTURE_CLOSE",
    id: e
  })
}

function s(e) {
  r.h.dispatch({
    type: "PICTURE_IN_PICTURE_HIDE",
    id: e
  })
}

function o(e) {
  r.h.dispatch({
    type: "PICTURE_IN_PICTURE_SHOW",
    id: e
  })
}

function l(e, t) {
  r.h.dispatch({
    type: "PICTURE_IN_PICTURE_MOVE",
    id: e,
    position: t
  })
}

function c(e, t) {
  r.h.dispatch({
    type: "PICTURE_IN_PICTURE_RESIZE",
    width: e,
    pipType: t
  })
}

function u(e, t) {
  r.h.dispatch({
    type: "PICTURE_IN_PICTURE_UPDATE_RECT",
    id: e,
    rect: t
  })
}

function d(e) {
  r.h.dispatch({
    type: "PICTURE_IN_PICTURE_UPDATE_SELECTED_WINDOW",
    id: e
  })
}