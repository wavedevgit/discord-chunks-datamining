/** Chunk was on web.js **/
/** chunk id: 235874, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => O,
  y: () => y
}), require("./415506.js"), require("./388685.js"), require("./49124.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk922770 = require("./922770.jsx"),
  Chunk493773 = require("./493773.js"),
  Chunk930295 = require("./930295.jsx"),
  Chunk126306 = require("./126306.jsx"),
  Chunk697375 = require("./697375.js");

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

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = m(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
var g = function(e) {
  return e.NONE = "1", e.TRANSLATE = "2", e.SCALE = "3", e.FADE = "4", e
}(g || {});
let E = Object.freeze({
  2: Chunk126306.l.Types.TRANSLATE,
  3: Chunk126306.l.Types.SCALE,
  4: Chunk126306.l.Types.FADE
});

function b(e) {
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
class y extends(r = Chunk73800.Component) {
  render() {
    let {
      children: e,
      shouldShow: t,
      onRequestOpen: n,
      onRequestClose: r,
      align: o,
      fixed: a,
      useRawTargetDimensions: s,
      onShiftClick: c,
      positionKey: u,
      popoutKey: d,
      preload: f,
      disablePointerEvents: _,
      ignoreModalClicks: p,
      closeOnScroll: h,
      useMouseEnter: m,
      renderPopout: g,
      layerContext: E,
      position: y = "right",
      autoInvert: O = true,
      nudgeAlignIntoViewport: v = true,
      spacing: I = 8,
      clickTrap: T = false
    } = this.props;
    return (0, Chunk255367.jsx)(Chunk930295.H, {
      ref: this.ref,
      targetElementRef: this.props.targetElementRef,
      preload: f,
      position: y,
      align: null != Chunk73800 ? Chunk73800 : b(y),
      autoInvert: O,
      fixed: Chunk922770,
      nudgeAlignIntoViewport: v,
      useRawTargetDimensions: Chunk493773,
      renderPopout: this.renderPopout,
      spacing: I,
      shouldShow: null != g && exports,
      onRequestOpen: require,
      onRequestClose: r,
      onShiftClick: Chunk126306,
      positionKey: Chunk697375,
      popoutKey: d,
      disablePointerEvents: _,
      ignoreModalClicks: p,
      closeOnScroll: h,
      useMouseEnter: m,
      layerContext: E,
      clickTrap: T,
      children: module
    })
  }
  constructor(...e) {
    super(...e), d(this, "ref", o.createRef()), d(this, "renderPopout", e => {
      let {
        renderPopout: t,
        animation: n = "2",
        animationPosition: r
      } = this.props;
      switch (null != r && null != e.position && (e.position = r), n) {
        case "2":
        case "3":
        case "4":
          return (0, i.jsx)(c.l, {
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
  var {
    renderPopout: t
  } = e, n = h(e, ["renderPopout"]);
  let r = o.useRef(null),
    [l, c] = o.useState(0);

  function d() {
    return m(), (0, i.jsx)(i.Fragment, {})
  }
  o.useLayoutEffect(() => {
    if (l > 0) {
      var e, t, n, i, o;
      null == (o = r.current) || null == (i = o.ref) || null == (n = i.current) || null == (t = n.layerRef) || null == (e = t.current) || e.updatePosition()
    }
  }, [l]), (0, s.ZP)(() => {
    let e = setTimeout(t, 20 + 20 * Math.random());
    return () => clearTimeout(e)
  });
  let _ = o.useRef(false);
  async function m() {
    if (!_.current) {
      _.current = true;
      let e = setTimeout(() => {
          b(() => g), c(e => e + 1)
        }, 300),
        n = await t();
      b(() => n), c(e => e + 1), clearTimeout(e)
    }
  }

  function g() {
    var e, t, n, o;
    let s = null == (o = r.current) || null == (n = o.ref) || null == (t = n.current) || null == (e = t.domElementRef) ? true : e.current,
      l = Math.max(100, null == s ? 100 : s.offsetWidth - 20);
    return (0, i.jsx)("div", {
      className: u.loader,
      style: {
        width: l
      },
      children: (0, i.jsx)(a.$, {})
    })
  }
  let [E, b] = o.useState(() => d), O = o.useRef(d);
  return o.useEffect(() => {
    O.current = d
  }), o.useEffect(() => {
    _.current ? t().then(e => {
      b(() => e), c(e => e + 1)
    }) : b(() => O.current)
  }, [t]), (0, i.jsx)(y, p(f({
    ref: r
  }, n), {
    renderPopout: E
  }))
}
d(y, "Animation", g), O.Animation = g