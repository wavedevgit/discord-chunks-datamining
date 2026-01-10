/** Chunk was on 81985 **/
/** chunk id: 893999, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk473749 = require("./473749.js");
let i = new Map,
  l = new Map,
  a = new Map;

function o(e) {
  return i.has(e) || i.set(e, false), i.get(e)
}

function s(e) {
  return l.has(e) || (l.set(e, new Set), a.set(e, function(e) {
    let t = t => {
        c(t.shiftKey, e)
      },
      n = t => {
        c(t.shiftKey, e)
      },
      r = t => {
        c(t.shiftKey, e)
      },
      i = () => {
        c(false, e)
      };
    return e.addEventListener("keydown", t), e.addEventListener("keyup", n), e.addEventListener("mousemove", r), e.addEventListener("blur", i), () => {
      e.removeEventListener("keydown", t), e.removeEventListener("keyup", n), e.removeEventListener("mousemove", r), e.removeEventListener("blur", i)
    }
  }(e))), l.get(e)
}

function c(e, t) {
  e !== o(t) && (i.set(t, e), s(t).forEach(t => t(e)))
}

function u() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : window,
    [t, n] = r.useState(o(e));
  return r.useEffect(() => {
    let t = e => {
      n(e)
    };
    return s(e).add(t), () => {
      var n;
      s(e).delete(t), 0 === s(e).size && (null == (n = a.get(e)) || n(), a.delete(e), l.delete(e), i.delete(e))
    }
  }, [e]), t
}