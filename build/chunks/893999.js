/** Chunk was on web.js **/
/** chunk id: 893999, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk647438 = require("./647438.js");
let i = new Map,
  o = new Map,
  a = new Map;

function s(e) {
  return i.has(e) || i.set(e, false), i.get(e)
}

function l(e) {
  return !o.has(e)
}

function c(e) {
  return l(e) && (o.set(e, new Set), a.set(e, u(e))), o.get(e)
}

function u(e) {
  let t = t => {
      _(t.shiftKey, e)
    },
    n = t => {
      _(t.shiftKey, e)
    },
    r = t => {
      _(t.shiftKey, e)
    },
    i = () => {
      _(false, e)
    };
  return e.addEventListener("keydown", t), e.addEventListener("keyup", n), e.addEventListener("mousemove", r), e.addEventListener("blur", i), () => {
    e.removeEventListener("keydown", t), e.removeEventListener("keyup", n), e.removeEventListener("mousemove", r), e.removeEventListener("blur", i)
  }
}

function d(e, t) {
  c(e).add(t)
}

function f(e, t) {
  if (c(e).delete(t), 0 === c(e).size) {
    var n;
    null == (n = a.get(e)) || n(), a.delete(e), o.delete(e), i.delete(e)
  }
}

function _(e, t) {
  e !== s(t) && (i.set(t, e), c(t).forEach(t => t(e)))
}

function p() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : window,
    [t, n] = Chunk647438.useState(s(module));
  return Chunk647438.useEffect(() => {
    let t = e => {
      n(e)
    };
    return d(module, exports), () => {
      f(module, exports)
    }
  }, [module]), exports
}