/** Chunk was on web.js **/
/** chunk id: 713284, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => s,
  Z: () => h
}), require("./539854.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var s = function(e) {
  return e[e.DC_SHOWN = 0] = "DC_SHOWN", e[e.DC_SHOW_REQUEST = 1] = "DC_SHOW_REQUEST", e[e.DC_DISMISSED = 2] = "DC_DISMISSED", e
}({});
let l = true,
  c = [],
  u = () => {
    c = []
  },
  d = e => {
    let {
      eventType: t,
      dismissibleContent: n
    } = e;
    l || c.push({
      eventType: t,
      dismissibleContent: n
    })
  },
  f = e => {
    let {
      eventType: t,
      dismissibleContent: n
    } = e;
    d({
      eventType: t,
      dismissibleContent: n
    })
  },
  p = e => {
    let {
      dismissibleContent: t
    } = e;
    d({
      eventType: 2,
      dismissibleContent: t
    })
  },
  _ = e => {
    let {
      dismissibleContent: t
    } = e;
    d({
      eventType: 0,
      dismissibleContent: t
    })
  };
class m extends(r = Chunk442837.ZP.Store) {
  getDCFEvents() {
    return c
  }
}
a(m, "displayName", "DCFEventStore");
let h = new m(Chunk570140.Z, {
  LOGOUT: u,
  DCF_EVENT_LOGGED: f,
  DCF_HANDLE_DC_DISMISSED: p,
  DCF_HANDLE_DC_SHOWN: _
})