/** Chunk was on 90550 **/
/** chunk id: 893999, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk647438 = require("./647438.js");
let i = new Map,
  l = new Map,
  a = new Map;

function o(e) {
  return i.has(e) || i.set(e, false), i.get(e)
}

function s(e) {
  return l.has(e) || (l.set(e, new Set), a.set(e, function(e) {
    let n = n => {
        c(n.shiftKey, e)
      },
      t = n => {
        c(n.shiftKey, e)
      },
      r = n => {
        c(n.shiftKey, e)
      },
      i = () => {
        c(false, e)
      };
    return e.addEventListener("keydown", n), e.addEventListener("keyup", t), e.addEventListener("mousemove", r), e.addEventListener("blur", i), () => {
      e.removeEventListener("keydown", n), e.removeEventListener("keyup", t), e.removeEventListener("mousemove", r), e.removeEventListener("blur", i)
    }
  }(e))), l.get(e)
}

function c(e, n) {
  e !== o(n) && (i.set(n, e), s(n).forEach(n => n(e)))
}

function d() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : window,
    [n, t] = Chunk647438.useState(o(module));
  return Chunk647438.useEffect(() => {
    let n = e => {
      t(e)
    };
    return s(module).add(exports), () => {
      var t;
      s(module).delete(exports), 0 === s(module).size && (null == (t = a.get(module)) || require(), a.delete(module), l.delete(module), i.delete(module))
    }
  }, [module]), exports
}