/** Chunk was on web.js **/
/** chunk id: 622562, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E9: () => y,
  fu: () => E
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk110924 = require("./110924.js"),
  Chunk819640 = require("./819640.js"),
  Chunk28151 = require("./28151.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = h(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let m = (e, t) => true !== t && t > e ? t : e,
  g = e => null === e ? null : {
    top: e.top,
    bottom: e.bottom,
    left: e.left,
    right: e.right
  };

function E(e) {
  let {
    onGetElementDimensionsAndBoundingRect: t,
    targetElementRef: n,
    shouldPollPositionOnMount: r,
    positionControlRef: a,
    debounceTime: o
  } = e, {
    hasLayers: d
  } = (0, l.cj)([u.Z], () => ({
    hasLayers: u.Z.hasLayers()
  })), f = i.useRef(null), _ = i.useCallback(() => {
    let e = n.current;
    if (null === e) return {
      height: 0,
      width: 0,
      elementBoundingRect: null,
      hasElementPositionChanged: false
    };
    let t = e.getBoundingClientRect(),
      r = !(0, s.isEqual)(g(t), g(f.current));
    return f.current = t, {
      height: e.offsetHeight,
      width: e.offsetWidth,
      elementBoundingRect: t,
      hasElementPositionChanged: r
    }
  }, [n]), p = i.useCallback(() => t(_()), [t, _]), h = i.useMemo(() => (0, s.debounce)(() => {
    p()
  }, o), [p, o]);
  i.useEffect(() => (window.addEventListener("resize", h), () => {
    window.removeEventListener("resize", h)
  }), [h]);
  let m = (0, c.Z)(d),
    E = i.useRef(null),
    b = i.useRef(0),
    y = i.useCallback(() => {
      (null === E.current || b.current >= 5) && (null != E.current && clearInterval(E.current), E.current = setInterval(() => {
        if (b.current >= 10) {
          clearInterval(E.current), E.current = null, b.current = 0;
          return
        }
        b.current++, p()
      }, 200))
    }, [p]);
  return i.useEffect(() => {
    r ? y() : p()
  }, [r, y, p]), i.useEffect(() => {
    m && !d && y()
  }, [y, d, m]), i.useEffect(() => {
    true !== a && (a.current = {
      getElementDimensionsAndBoundingRect: _,
      updateElementPosition: p,
      updateElementPositionWithPolling: y
    })
  }, [p, y, _, a]), {
    getElementDimensionsAndBoundingRect: _
  }
}

function b(e) {
  let {
    backgroundElementRef: t,
    getOffsetsRelativeToElement: n,
    fallbackAbsoluteOffsets: r,
    minimumOffsets: a,
    positionControlRef: o,
    onGetBoundingRect: l = () => {},
    debounceTime: c = 60
  } = e, [u, d] = i.useState(null);
  return E({
    onGetElementDimensionsAndBoundingRect: i.useCallback(e => {
      let {
        height: t,
        width: i,
        elementBoundingRect: o
      } = e;
      if (null == o) return r;
      let c = _({}, n({
        height: t,
        width: i
      }));
      return true !== c.top && (c.top = m(o.top + c.top, null == a ? true : a.top)), true !== c.left && (c.left = m(o.left + c.left, null == a ? true : a.left)), true !== c.right && (c.right = m(window.innerWidth - o.right + c.right, null == a ? true : a.right)), true !== c.bottom && (c.bottom = m(window.innerHeight - o.bottom + c.bottom, null == a ? true : a.bottom)), l(o), (0, s.isEqual)(c, u) || d(c), c
    }, [u, n, r, a, l]),
    targetElementRef: t,
    positionControlRef: o,
    debounceTime: c
  }), {
    offsets: u
  }
}

function y(e) {
  var {
    children: t,
    style: n,
    className: i,
    key: a
  } = e;
  let {
    offsets: s
  } = b(_({}, p(e, ["children", "style", "className", "key"]))), l = _({}, s, n);
  return null === s ? null : (0, r.jsx)("div", {
    style: l,
    className: o()(d.wrapper, i),
    children: t
  }, a)
}
y.displayName = "ElementFixedOffsetContentWrapper"