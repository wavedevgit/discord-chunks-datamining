/** Chunk was on 93886 (1d5eb829541a42b4.js) **/
n.d(t, {
  E: () => x
}), n(47120);
var r = n(200651),
  a = n(192379),
  i = n(120356),
  l = n.n(i),
  o = n(392711),
  s = n(442837),
  c = n(110924),
  d = n(819640),
  u = n(316234);

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}
let h = (e, t) => void 0 !== t && t > e ? t : e;

function x(e) {
  var {
    children: t,
    style: n,
    className: i,
    key: x,
    offsetControlRef: f
  } = e;
  let {
    offsets: p,
    updateElementOffsets: b,
    updateElementOffsetsWithPolling: _
  } = function(e) {
    let {
      backgroundElementRef: t,
      getOffsetsRelativeToElement: n,
      fallbackAbsoluteOffsets: r,
      onGetBoundingRect: i = () => {},
      debounceTime: l = 60,
      minimumOffsets: u
    } = e, [x, f] = a.useState(null), {
      hasLayers: p
    } = (0, s.cj)([d.Z], () => ({
      hasLayers: d.Z.hasLayers()
    })), b = a.useCallback(() => {
      let e = t.current;
      return null === e ? {
        height: 0,
        width: 0
      } : {
        height: e.offsetHeight,
        width: e.offsetWidth
      }
    }, [t]), _ = a.useCallback(() => {
      let e = t.current;
      if (null === e) return r;
      let a = m({}, n(b())),
        l = e.getBoundingClientRect();
      return void 0 !== a.top && (a.top = h(l.top + a.top, null == u ? void 0 : u.top)), void 0 !== a.left && (a.left = h(l.left + a.left, null == u ? void 0 : u.left)), void 0 !== a.right && (a.right = h(window.innerWidth - l.right + a.right, null == u ? void 0 : u.right)), void 0 !== a.bottom && (a.bottom = h(window.innerHeight - l.bottom + a.bottom, null == u ? void 0 : u.bottom)), i(l), a
    }, [n, r, b, u, t, i]), g = a.useCallback(() => {
      let e = _();
      return (0, o.isEqual)(e, x) || f(e), e
    }, [_, x]);
    a.useEffect(() => {
      g()
    }, [g]);
    let v = (0, c.Z)(p),
      j = a.useRef(null),
      C = a.useRef(0),
      y = a.useCallback(() => {
        (null === j.current || C.current >= 3) && (j.current = setInterval(() => {
          if (C.current >= 5) {
            clearInterval(j.current), j.current = null, C.current = 0;
            return
          }
          g(), C.current++
        }, 200))
      }, [g]);
    a.useEffect(() => {
      v && !p && y()
    }, [g, y, p, v]);
    let O = a.useMemo(() => (0, o.debounce)(() => {
      g()
    }, l), [g, l]);
    return a.useEffect(() => (window.addEventListener("resize", O), () => {
      window.removeEventListener("resize", O)
    }), [O]), {
      offsets: x,
      getElementDimensions: b,
      getElementOffsets: _,
      updateElementOffsets: g,
      updateElementOffsetsWithPolling: y
    }
  }(m({}, function(e, t) {
    if (null == e) return {};
    var n, r, a = function(e, t) {
      if (null == e) return {};
      var n, r, a = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
      return a
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
    }
    return a
  }(e, ["children", "style", "className", "key", "offsetControlRef"]))), g = m({}, p, n);
  return (a.useEffect(() => {
    void 0 !== f && (f.current = {
      updateElementOffsets: b,
      updateElementOffsetsWithPolling: _
    })
  }, [b, _, f]), null === p) ? null : (0, r.jsx)("div", {
    style: g,
    className: l()(u.wrapper, i),
    children: t
  }, x)
}
x.displayName = "ElementFixedOffsetContentWrapper"