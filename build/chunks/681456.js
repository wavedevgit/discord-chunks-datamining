/** Chunk was on web.js **/
/** chunk id: 681456, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  SO: () => i,
  Yd: () => r,
  iS: () => u,
  n_: () => a,
  pM: () => s,
  sn: () => c,
  v4: () => o,
  z9: () => l
});
var r = "dnd-core/ADD_SOURCE",
  i = "dnd-core/ADD_TARGET",
  a = "dnd-core/REMOVE_SOURCE",
  o = "dnd-core/REMOVE_TARGET";

function s(e) {
  return {
    type: r,
    payload: {
      sourceId: e
    }
  }
}

function l(e) {
  return {
    type: i,
    payload: {
      targetId: e
    }
  }
}

function c(e) {
  return {
    type: a,
    payload: {
      sourceId: e
    }
  }
}

function u(e) {
  return {
    type: o,
    payload: {
      targetId: e
    }
  }
}