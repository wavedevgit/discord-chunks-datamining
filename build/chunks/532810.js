/** Chunk was on 30634 **/
/** chunk id: 532810, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A$: () => T,
  OF: () => p
}), require("./388685.js"), require("./539854.js");
var r, a, Chunk473749 = require("./473749.js"),
  Chunk622131 = require("./622131.js"),
  Chunk247123 = require("./247123.js"),
  Chunk350934 = require("./350934.js"),
  Chunk646785 = require("./646785.js"),
  Chunk585647 = require("./585647.js"),
  Chunk883349 = require("./883349.js"),
  Chunk993173 = require("./993173.js"),
  Chunk650021 = require("./650021.js"),
  Chunk807608 = require("./807608.js");
let m = [Chunk350934.Z, Chunk646785.Z, Chunk585647.Z, Chunk993173.Z, Chunk883349.Z, Chunk807608.Z, Chunk650021.Z],
  p = "data-accessibility-violation",
  g = "function" == typeof(null == (a = navigator) || null == (r = a.scheduling) ? true : r.isInputPending),
  v = null,
  w = null,
  A = 0,
  y = 0,
  x = null,
  k = {
    hash: 0,
    violations: new Map
  },
  I = () => {},
  E = document.body;

function N() {
  A = 0, y = 0, x = null, k = {
    hash: 0,
    violations: new Map
  }
}

function M() {
  w = requestIdleCallback(_)
}

function Z() {
  x = null, y = 0, A < m.length - 1 ? (A += 1, M()) : (I(k), N())
}

function _() {
  let e = m[A];
  if (null == x && (x = null != module.selector ? Array.from(E.querySelectorAll(module.selector)) : module.select(E)), 0 === x.length) return Z();
  let t = performance.now() + 16,
    n = {
      includeContinuous: true
    };
  for (; y < x.length && !(navigator.scheduling.isInputPending(require) || performance.now() >= exports);) {
    let t = x[y++],
      n = module.check(exports);
    if (require !== Chunk247123.w) {
      var r, a;
      let l = (0, Chunk622131.P)(exports),
        o = L("".concat(require, "_").concat(module.id, "_").concat(null == Chunk473749 ? function(e) {
          let t = "",
            n = e;
          for (; null != n;) t += n.className, n = n.parentElement;
          return L(t)
        }(exports) : Chunk473749.join("\n")));
      k.hash = L("".concat(k.hash).concat(Chunk247123));
      let u = Chunk247123.toString(),
        c = "".concat(module.id, "_").concat(Chunk247123),
        s = null != (r = k.violations.get(module.id)) ? r : {
          rule: module,
          instances: new Map
        },
        d = null != (a = Chunk585647.instances.get(Chunk646785)) ? a : [],
        f = {
          element: exports,
          message: require,
          trace: null != Chunk473749 ? Chunk473749 : [],
          hash: Chunk350934
        };
      Chunk883349.push(Chunk993173), Chunk585647.instances.set(Chunk646785, Chunk883349), k.violations.set(module.id, Chunk585647)
    }
  }
  if (y < x.length - 1) return M();
  Z()
}
let S = e => {
  0 !== e.filter(e => "attributes" !== e.type || e.attributeName !== p).length && (N(), null != v && (clearTimeout(v), v = null), null != w && (clearTimeout(w), w = null), v = setTimeout(M, 250))
};

function T(e, t) {
  let n = (0, l.useRef)(t);
  (0, l.useLayoutEffect)(() => {
    n.current = t
  }), (0, l.useLayoutEffect)(() => {
    if (g && null != e) {
      I = n.current, E = e;
      let t = function(e) {
        let t = new MutationObserver(S);
        return t.observe(e, {
          attributes: true,
          childList: true,
          subtree: true
        }), t
      }(e);
      return () => {
        I = () => {}, t.disconnect()
      }
    }
  }, [e])
}

function L(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 0,
    n = 0xdeadbeef ^ t,
    r = 0x41c6ce57 ^ t;
  for (let t = 0, a; t < e.length; t++) n = Math.imul(n ^ (a = e.charCodeAt(t)), 0x9e3779b1), r = Math.imul(r ^ a, 0x5f356495);
  return n = Math.imul(n ^ n >>> 16, 0x85ebca6b) ^ Math.imul(r ^ r >>> 13, 0xc2b2ae35), 0x100000000 * (2097151 & (r = Math.imul(r ^ r >>> 16, 0x85ebca6b) ^ Math.imul(n ^ n >>> 13, 0xc2b2ae35))) + (n >>> 0)
}