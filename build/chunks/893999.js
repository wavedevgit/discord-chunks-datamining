/** Chunk was on 83203 **/
/** chunk id: 893999, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk473749 = require("./473749.js");
let l = new Map,
  s = new Map,
  i = new Map;

function a(e) {
  return l.has(e) || l.set(e, false), l.get(e)
}

function o(e) {
  return s.has(e) || (s.set(e, new Set), i.set(e, function(e) {
    let t = t => {
        u(t.shiftKey, e)
      },
      n = t => {
        u(t.shiftKey, e)
      },
      r = t => {
        u(t.shiftKey, e)
      },
      l = () => {
        u(false, e)
      };
    return e.addEventListener("keydown", t), e.addEventListener("keyup", n), e.addEventListener("mousemove", r), e.addEventListener("blur", l), () => {
      e.removeEventListener("keydown", t), e.removeEventListener("keyup", n), e.removeEventListener("mousemove", r), e.removeEventListener("blur", l)
    }
  }(e))), s.get(e)
}

function u(e, t) {
  e !== a(t) && (l.set(t, e), o(t).forEach(t => t(e)))
}

function c() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : window,
    [t, n] = r.useState(a(e));
  return r.useEffect(() => {
    let t = e => {
      n(e)
    };
    return o(e).add(t), () => {
      var n;
      o(e).delete(t), 0 === o(e).size && (null == (n = i.get(e)) || n(), i.delete(e), s.delete(e), l.delete(e))
    }
  }, [e]), t
}