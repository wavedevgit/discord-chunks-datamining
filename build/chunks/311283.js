/** Chunk was on 17869 **/
/** chunk id: 311283, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk64700 = require("./64700.js");
let r = new Map,
  i = new Map,
  a = new Map;

function s(e) {
  return r.has(e) || r.set(e, false), r.get(e)
}

function o(e) {
  var t;
  let n, l, r, s;
  return i.has(e) || (i.set(e, new Set), a.set(e, (t = e, n = e => {
    c(e.shiftKey, t)
  }, l = e => {
    c(e.shiftKey, t)
  }, r = e => {
    c(e.shiftKey, t)
  }, s = () => {
    c(false, t)
  }, t.addEventListener("keydown", n), t.addEventListener("keyup", l), t.addEventListener("mousemove", r), t.addEventListener("blur", s), () => {
    t.removeEventListener("keydown", n), t.removeEventListener("keyup", l), t.removeEventListener("mousemove", r), t.removeEventListener("blur", s)
  }))), i.get(e)
}

function c(e, t) {
  e !== s(t) && (r.set(t, e), o(t).forEach(t => t(e)))
}

function u() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : window,
    [t, n] = l.useState(s(e));
  return l.useEffect(() => {
    let t = e => {
      n(e)
    };
    return o(e).add(t), () => {
      var n;
      o(e).delete(t), 0 === o(e).size && (null == (n = a.get(e)) || n(), a.delete(e), i.delete(e), r.delete(e))
    }
  }, [e]), t
}