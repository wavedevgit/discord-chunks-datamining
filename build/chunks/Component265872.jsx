/** Chunk was on web.js **/
/** chunk id: 265872, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => O,
  Y: () => b
}), require("./65821.js"), require("./896048.js"), require("./457529.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk964486 = require("./964486.js"),
  Chunk453903 = require("./453903.jsx"),
  Chunk44808 = require("./44808.jsx"),
  Chunk836474 = require("./836474.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = m(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
var g = function(e) {
  return e.NONE = "1", e.TRANSLATE = "2", e.SCALE = "3", e.FADE = "4", e
}(g || {});
let E = Object.freeze({
  2: Chunk44808.m.Types.TRANSLATE,
  3: Chunk44808.m.Types.SCALE,
  4: Chunk44808.m.Types.FADE
});

function y(e) {
  switch (e) {
    case "top":
    case "bottom":
      return "left";
    case "left":
    case "right":
      return "top";
    case "center":
    case "window_center":
      return "center"
  }
  throw Error("Unexpected position: ".concat(e))
}
class b extends(r = Chunk64700.Component) {
  render() {
    let {
      children: e,
      shouldShow: t,
      onRequestOpen: n,
      onRequestClose: r,
      align: a,
      fixed: o,
      useRawTargetDimensions: s,
      onShiftClick: c,
      positionKey: u,
      popoutKey: d,
      preload: f,
      disablePointerEvents: p,
      ignoreModalClicks: _,
      scrollBehavior: h,
      useMouseEnter: m,
      renderPopout: g,
      layerContext: E,
      position: b = "right",
      autoInvert: O = true,
      nudgeAlignIntoViewport: v = true,
      spacing: A = 8,
      clickTrap: I = false
    } = this.props;
    return (0, i.jsx)(l.$, {
      ref: this.ref,
      targetElementRef: this.props.targetElementRef,
      preload: f,
      position: b,
      align: null != a ? a : y(b),
      autoInvert: O,
      fixed: o,
      nudgeAlignIntoViewport: v,
      useRawTargetDimensions: s,
      renderPopout: this.renderPopout,
      spacing: A,
      shouldShow: null != g && t,
      onRequestOpen: n,
      onRequestClose: r,
      onShiftClick: c,
      positionKey: u,
      popoutKey: d,
      disablePointerEvents: p,
      ignoreModalClicks: _,
      scrollBehavior: h,
      useMouseEnter: m,
      layerContext: E,
      clickTrap: I,
      children: e
    })
  }
  constructor(...e) {
    super(...e), d(this, "ref", a.createRef()), d(this, "renderPopout", e => {
      let {
        renderPopout: t,
        animation: n = "2",
        animationPosition: r
      } = this.props;
      switch (null != r && null != e.position && (e.position = r), n) {
        case "2":
        case "3":
        case "4":
          return (0, i.jsx)(c.m, {
            position: e.position,
            type: E[n],
            children: t(e)
          });
        case "1":
          return t(e)
      }
      throw Error("Unsupported animation config: ".concat(JSON.stringify(n)))
    })
  }
}

function O(e) {
  let {
    renderPopout: t
  } = e, n = h(e, ["renderPopout"]), r = a.useRef(null), [l, c] = a.useState(0);

  function d() {
    return m(), (0, i.jsx)(i.Fragment, {})
  }
  a.useLayoutEffect(() => {
    if (l > 0) {
      var e, t, n, i, a;
      null == (a = r.current) || null == (i = a.ref) || null == (n = i.current) || null == (t = n.layerRef) || null == (e = t.current) || e.updatePosition()
    }
  }, [l]), (0, s.Ay)(() => {
    let e = setTimeout(t, 20 + 20 * Math.random());
    return () => clearTimeout(e)
  });
  let p = a.useRef(false);
  async function m() {
    if (!p.current) {
      p.current = true;
      let e = setTimeout(() => {
          y(() => g), c(e => e + 1)
        }, 300),
        n = await t();
      y(() => n), c(e => e + 1), clearTimeout(e)
    }
  }

  function g() {
    var e, t, n, a;
    let s = null == (a = r.current) || null == (n = a.ref) || null == (t = n.current) || null == (e = t.domElementRef) ? true : e.current,
      l = Math.max(100, null == s ? 100 : s.offsetWidth - 20);
    return (0, i.jsx)("div", {
      className: u.w,
      style: {
        width: l
      },
      children: (0, i.jsx)(o.y$y, {})
    })
  }
  let [E, y] = a.useState(() => d), O = a.useRef(d);
  return a.useEffect(() => {
    O.current = d
  }), a.useEffect(() => {
    p.current ? t().then(e => {
      y(() => e), c(e => e + 1)
    }) : y(() => O.current)
  }, [t]), (0, i.jsx)(b, _(f({
    ref: r
  }, n), {
    renderPopout: E
  }))
}
d(b, "Animation", g), O.Animation = g