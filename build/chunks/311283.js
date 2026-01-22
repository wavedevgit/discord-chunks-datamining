/** Chunk was on 97492 **/
/** chunk id: 311283, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk64700 = require("./64700.js");
let l = new Map,
  i = new Map,
  a = new Map;

function s(e) {
  return l.has(e) || l.set(e, false), l.get(e)
}

function o(e) {
  var t;
  let n, r, l, s;
  return i.has(e) || (i.set(e, new Set), a.set(e, (t = e, n = e => {
    c(e.shiftKey, t)
  }, r = e => {
    c(e.shiftKey, t)
  }, l = e => {
    c(e.shiftKey, t)
  }, s = () => {
    c(false, t)
  }, t.addEventListener("keydown", n), t.addEventListener("keyup", r), t.addEventListener("mousemove", l), t.addEventListener("blur", s), () => {
    t.removeEventListener("keydown", n), t.removeEventListener("keyup", r), t.removeEventListener("mousemove", l), t.removeEventListener("blur", s)
  }))), i.get(e)
}

function c(e, t) {
  e !== s(t) && (l.set(t, e), o(t).forEach(t => t(e)))
}

function u() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : window,
    [t, n] = r.useState(s(e));
  return r.useEffect(() => {
    let t = e => {
      n(e)
    };
    return o(e).add(t), () => {
      var n;
      o(e).delete(t), 0 === o(e).size && (null == (n = a.get(e)) || n(), a.delete(e), i.delete(e), l.delete(e))
    }
  }, [e]), t
}