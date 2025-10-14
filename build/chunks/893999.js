/** Chunk was on 93886 **/
/** chunk id: 893999, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
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
    let t = t => {
        u(t.shiftKey, e)
      },
      n = t => {
        u(t.shiftKey, e)
      },
      r = t => {
        u(t.shiftKey, e)
      },
      i = () => {
        u(false, e)
      };
    return e.addEventListener("keydown", t), e.addEventListener("keyup", n), e.addEventListener("mousemove", r), e.addEventListener("blur", i), () => {
      e.removeEventListener("keydown", t), e.removeEventListener("keyup", n), e.removeEventListener("mousemove", r), e.removeEventListener("blur", i)
    }
  }(e))), l.get(e)
}

function u(e, t) {
  e !== o(t) && (i.set(t, e), s(t).forEach(t => t(e)))
}

function c() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : window,
    [t, n] = Chunk647438.useState(o(module));
  return Chunk647438.useEffect(() => {
    let t = e => {
      n(e)
    };
    return s(module).add(exports), () => {
      var n;
      s(module).delete(exports), 0 === s(module).size && (null == (n = a.get(module)) || require(), a.delete(module), l.delete(module), i.delete(module))
    }
  }, [module]), exports
}