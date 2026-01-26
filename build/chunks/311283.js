/** Chunk was on 67564 **/
/** chunk id: 311283, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk64700 = require("./64700.js");
let l = new Map,
  i = new Map,
  s = new Map;

function a(e) {
  return l.has(e) || l.set(e, false), l.get(e)
}

function o(e) {
  var t;
  let n, r, l, a;
  return i.has(e) || (i.set(e, new Set), s.set(e, (t = e, n = e => {
    c(e.shiftKey, t)
  }, r = e => {
    c(e.shiftKey, t)
  }, l = e => {
    c(e.shiftKey, t)
  }, a = () => {
    c(false, t)
  }, t.addEventListener("keydown", n), t.addEventListener("keyup", r), t.addEventListener("mousemove", l), t.addEventListener("blur", a), () => {
    t.removeEventListener("keydown", n), t.removeEventListener("keyup", r), t.removeEventListener("mousemove", l), t.removeEventListener("blur", a)
  }))), i.get(e)
}

function c(e, t) {
  e !== a(t) && (l.set(t, e), o(t).forEach(t => t(e)))
}

function u() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : window,
    [t, n] = r.useState(a(e));
  return r.useEffect(() => {
    let t = e => {
      n(e)
    };
    return o(e).add(t), () => {
      var n;
      o(e).delete(t), 0 === o(e).size && (null == (n = s.get(e)) || n(), s.delete(e), i.delete(e), l.delete(e))
    }
  }, [e]), t
}