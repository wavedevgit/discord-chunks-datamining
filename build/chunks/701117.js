/** Chunk was on web.js **/
/** chunk id: 701117, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  y: () => s
}), require("./49124.js");
var Chunk37082 = require("./37082.js");
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
let s = a() ? new o : new Chunk37082.R