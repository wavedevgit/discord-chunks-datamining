/** Chunk was on 4787 **/
/** chunk id: 972049, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  dL: () => T,
  nY: () => g
}), require("./896048.js"), require("./321073.js");
var r, a, Chunk64700 = require("./64700.js"),
  Chunk21574 = require("./21574.js"),
  Chunk763424 = require("./763424.js"),
  Chunk283014 = require("./283014.js"),
  Chunk992520 = require("./992520.js"),
  Chunk175678 = require("./175678.js"),
  Chunk265337 = require("./265337.js"),
  Chunk517576 = require("./517576.js"),
  Chunk249214 = require("./249214.js"),
  Chunk908665 = require("./908665.js");
let m = [Chunk283014.A, Chunk992520.A, Chunk175678.A, Chunk517576.A, Chunk265337.A, Chunk908665.A, Chunk249214.A],
  g = "data-accessibility-violation",
  p = "function" == typeof(null == (a = navigator) || null == (r = a.scheduling) ? true : r.isInputPending),
  v = null,
  A = null,
  w = 0,
  y = 0,
  x = null,
  k = {
    hash: 0,
    violations: new Map
  },
  I = () => {},
  N = document.body;

function E() {
  w = 0, y = 0, x = null, k = {
    hash: 0,
    violations: new Map
  }
}

function M() {
  A = requestIdleCallback(L)
}

function _() {
  x = null, y = 0, w < m.length - 1 ? (w += 1, M()) : (I(k), E())
}

function L() {
  let e = m[w];
  if (null == x && (x = null != e.selector ? Array.from(N.querySelectorAll(e.selector)) : e.select(N)), 0 === x.length) return _();
  let t = performance.now() + 16,
    n = {
      includeContinuous: true
    };
  for (; y < x.length && !(navigator.scheduling.isInputPending(n) || performance.now() >= t);) {
    let t = x[y++],
      n = e.check(t);
    if (n !== i.o) {
      var r, a;
      let l = (0, o.h)(t),
        i = C("".concat(n, "_").concat(e.id, "_").concat(null == l ? function(e) {
          let t = "",
            n = e;
          for (; null != n;) t += n.className, n = n.parentElement;
          return C(t)
        }(t) : l.join("\n")));
      k.hash = C("".concat(k.hash).concat(i));
      let u = i.toString(),
        c = "".concat(e.id, "_").concat(i),
        s = null != (r = k.violations.get(e.id)) ? r : {
          rule: e,
          instances: new Map
        },
        d = null != (a = s.instances.get(c)) ? a : [],
        f = {
          element: t,
          message: n,
          trace: null != l ? l : [],
          hash: u
        };
      d.push(f), s.instances.set(c, d), k.violations.set(e.id, s)
    }
  }
  if (y < x.length - 1) return M();
  _()
}
let S = e => {
  0 !== e.filter(e => "attributes" !== e.type || e.attributeName !== g).length && (E(), null != v && (clearTimeout(v), v = null), null != A && (clearTimeout(A), A = null), v = setTimeout(M, 250))
};

function T(e, t) {
  let n = (0, l.useRef)(t);
  (0, l.useLayoutEffect)(() => {
    n.current = t
  }), (0, l.useLayoutEffect)(() => {
    if (p && null != e) {
      let t;
      I = n.current, N = e;
      let r = ((t = new MutationObserver(S)).observe(e, {
        attributes: true,
        childList: true,
        subtree: true
      }), t);
      return () => {
        I = () => {}, r.disconnect()
      }
    }
  }, [e])
}

function C(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 0,
    n = 0xdeadbeef ^ t,
    r = 0x41c6ce57 ^ t;
  for (let t = 0, a; t < e.length; t++) n = Math.imul(n ^ (a = e.charCodeAt(t)), 0x9e3779b1), r = Math.imul(r ^ a, 0x5f356495);
  return n = Math.imul(n ^ n >>> 16, 0x85ebca6b) ^ Math.imul(r ^ r >>> 13, 0xc2b2ae35), 0x100000000 * (2097151 & (r = Math.imul(r ^ r >>> 16, 0x85ebca6b) ^ Math.imul(n ^ n >>> 13, 0xc2b2ae35))) + (n >>> 0)
}