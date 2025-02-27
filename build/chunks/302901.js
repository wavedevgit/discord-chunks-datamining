/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Xv: () => y,
  mh: () => b,
  wL: () => E
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(512722),
  l = n.n(s),
  c = n(995295),
  u = n(251625),
  d = n(872801),
  f = n(761069);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}
let h = f.layerContainer;
class g extends i.Component {
  componentWillUnmount() {
    this.state.layerContainerElement = null
  }
  render() {
    let {
      layerContext: e,
      children: t
    } = this.props, {
      layerContainerElement: n
    } = this.state;
    return (0, r.jsx)(e.Provider, {
      value: this.getContextValue(n),
      children: t
    })
  }
  constructor(...e) {
    super(...e), _(this, "state", {
      layerContainerElement: null
    }), _(this, "setLayerContainerElement", e => {
      this.setState({
        layerContainerElement: e
      })
    }), _(this, "getContextValue", (0, u.oH)(e => [e, this.setLayerContainerElement]))
  }
}
let m = e => {
  let {
    layerContext: t,
    className: n
  } = e, [, o] = i.useContext(t);
  return (0, r.jsx)("div", {
    className: a()(h, n),
    ref: o
  })
};

function E(e) {
  let t = (0, d.Z)(e, f.layerContainer);
  return l()(null != t, "Unexpected missing parent container"), t
}

function v(e, t) {
  let [n] = e;
  return null == n ? null : c.createPortal(i.Children.only(t), n)
}
let b = e => {
  let {
    layerContext: t,
    children: n
  } = e;
  return (0, r.jsx)(t.Consumer, {
    children: e => v(e, n)
  })
};

function y(e) {
  let t = i.createContext([null, () => {}]),
    n = {
      LayerProvider: e => (0, r.jsx)(g, p({
        layerContext: t
      }, e)),
      LayerContainer: e => (0, r.jsx)(m, p({
        layerContext: t
      }, e)),
      Layer: e => (0, r.jsx)(b, p({
        layerContext: t
      }, e)),
      layerContext: t
    };
  return n.LayerProvider.displayName = "".concat(e, "LayerProvider"), n.LayerContainer.displayName = "".concat(e, "LayerContainer"), n.Layer.displayName = "".concat(e, "Layer"), n
}