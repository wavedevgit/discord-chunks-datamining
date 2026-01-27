/** Chunk was on web.js **/
/** chunk id: 28967, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  n: () => s
}), require("./457529.js");
var Chunk973117 = require("./973117.js");
try {
  r = window.sessionStorage
} catch (e) {}
try {
  delete window.sessionStorage
} catch (e) {}

function a() {
  let e = "test";
  try {
    return r.setItem(e, e), r.removeItem(e), true
  } catch (e) {
    returnfalse
  }
}
class o {
  get(e, t) {
    let n = r.getItem(e);
    if (null != n) try {
      n = JSON.parse(n)
    } catch (e) {
      n = t
    } else n = t;
    return n
  }
  set(e, t) {
    r.setItem(e, JSON.stringify(t))
  }
  remove(e) {
    r.removeItem(e)
  }
  clear() {
    r.clear()
  }
}
let s = a() ? new o : new Chunk973117.J