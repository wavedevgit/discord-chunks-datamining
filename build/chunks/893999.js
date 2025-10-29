/** Chunk was on 93886 **/
/** chunk id: 893999, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk647438 = require("./647438.js");
let a = new Map,
  i = new Map,
  o = new Map;

function l(e) {
  return a.has(e) || a.set(e, false), a.get(e)
}

function s(e) {
  return i.has(e) || (i.set(e, new Set), o.set(e, function(e) {
    let t = t => {
        c(t.shiftKey, e)
      },
      n = t => {
        c(t.shiftKey, e)
      },
      r = t => {
        c(t.shiftKey, e)
      },
      a = () => {
        c(false, e)
      };
    return e.addEventListener("keydown", t), e.addEventListener("keyup", n), e.addEventListener("mousemove", r), e.addEventListener("blur", a), () => {
      e.removeEventListener("keydown", t), e.removeEventListener("keyup", n), e.removeEventListener("mousemove", r), e.removeEventListener("blur", a)
    }
  }(e))), i.get(e)
}

function c(e, t) {
  e !== l(t) && (a.set(t, e), s(t).forEach(t => t(e)))
}

function d() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : window,
    [t, n] = Chunk647438.useState(l(module));
  return Chunk647438.useEffect(() => {
    let t = e => {
      n(e)
    };
    return s(module).add(exports), () => {
      var n;
      s(module).delete(exports), 0 === s(module).size && (null == (n = o.get(module)) || require(), o.delete(module), i.delete(module), a.delete(module))
    }
  }, [module]), exports
}