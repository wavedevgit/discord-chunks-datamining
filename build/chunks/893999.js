/** Chunk was on 48091 **/
/** chunk id: 893999, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk647438 = require("./647438.js");
let i = new Map,
  l = new Map,
  a = new Map;

function s(e) {
  return i.has(e) || i.set(e, false), i.get(e)
}

function o(e) {
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
  e !== s(t) && (i.set(t, e), o(t).forEach(t => t(e)))
}

function d() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : window,
    [t, n] = Chunk647438.useState(s(module));
  return Chunk647438.useEffect(() => {
    let t = e => {
      n(e)
    };
    return o(module).add(exports), () => {
      var n;
      o(module).delete(exports), 0 === o(module).size && (null == (n = a.get(module)) || require(), a.delete(module), l.delete(module), i.delete(module))
    }
  }, [module]), exports
}