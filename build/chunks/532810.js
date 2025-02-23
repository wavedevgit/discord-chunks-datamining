/** Chunk was on 30634 (a0bc143339bf718f.js) **/
n.d(t, {
  A$: () => L,
  OF: () => m
}), n(47120), n(653041);
var r, a, l = n(192379),
  i = n(622131),
  o = n(247123),
  u = n(350934),
  c = n(646785),
  s = n(585647),
  d = n(883349),
  f = n(993173),
  h = n(650021),
  b = n(807608);
let v = [u.Z, c.Z, s.Z, f.Z, d.Z, b.Z, h.Z],
  m = "data-accessibility-violation",
  p = "function" == typeof(null === (a = navigator) || void 0 === a ? void 0 : null === (r = a.scheduling) || void 0 === r ? void 0 : r.isInputPending),
  g = null,
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
  x = null, y = 0, A < v.length - 1 ? (A += 1, M()) : (I(k), N())
}

function _() {
  let e = v[A];
  if (null == x && (x = null != e.selector ? Array.from(E.querySelectorAll(e.selector)) : e.select(E)), 0 === x.length) return Z();
  let t = performance.now() + 16,
    n = {
      includeContinuous: !0
    };
  for (; y < x.length && !(navigator.scheduling.isInputPending(n) || performance.now() >= t);) {
    let t = x[y++],
      n = e.check(t);
    if (n !== o.w) {
      var r, a;
      let l = (0, i.P)(t),
        o = S("".concat(n, "_").concat(e.id, "_").concat(null == l ? function(e) {
          let t = "",
            n = e;
          for (; null != n;) t += n.className, n = n.parentElement;
          return S(t)
        }(t) : l.join("\n")));
      k.hash = S("".concat(k.hash).concat(o));
      let u = "".concat(e.id, "_").concat(o),
        c = null !== (r = k.violations.get(e.id)) && void 0 !== r ? r : {
          rule: e,
          instances: new Map
        },
        s = null !== (a = c.instances.get(u)) && void 0 !== a ? a : [];
      s.push({
        element: t,
        message: n,
        trace: null != l ? l : [],
        hash: o
      }), c.instances.set(u, s), k.violations.set(e.id, c)
    }
  }
  if (y < x.length - 1) return M();
  Z()
}
let T = e => {
  0 !== e.filter(e => "attributes" !== e.type || e.attributeName !== m).length && (N(), null != g && (clearTimeout(g), g = null), null != w && (clearTimeout(w), w = null), g = setTimeout(M, 250))
};

function L(e, t) {
  let n = (0, l.useRef)(t);
  (0, l.useLayoutEffect)(() => {
    n.current = t
  }), (0, l.useLayoutEffect)(() => {
    if (p && null != e) {
      I = n.current, E = e;
      let t = function(e) {
        let t = new MutationObserver(T);
        return t.observe(e, {
          attributes: !0,
          childList: !0,
          subtree: !0
        }), t
      }(e);
      return () => {
        I = () => {}, t.disconnect()
      }
    }
  }, [e])
}

function S(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = 0xdeadbeef ^ t,
    r = 0x41c6ce57 ^ t;
  for (let t = 0, a; t < e.length; t++) n = Math.imul(n ^ (a = e.charCodeAt(t)), 0x9e3779b1), r = Math.imul(r ^ a, 0x5f356495);
  return n = Math.imul(n ^ n >>> 16, 0x85ebca6b) ^ Math.imul(r ^ r >>> 13, 0xc2b2ae35), 0x100000000 * (2097151 & (r = Math.imul(r ^ r >>> 16, 0x85ebca6b) ^ Math.imul(n ^ n >>> 13, 0xc2b2ae35))) + (n >>> 0)
}