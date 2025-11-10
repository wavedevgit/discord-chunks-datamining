/** Chunk was on web.js **/
/** chunk id: 168718, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Xv: () => y,
  mh: () => b,
  wL: () => g
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk603113 = require("./603113.js"),
  Chunk374470 = require("./374470.js"),
  Chunk451134 = require("./451134.js"),
  Chunk762328 = require("./762328.jsx"),
  Chunk793906 = require("./793906.js");

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
let p = Chunk793906.layerContainer;
class h extends Chunk647438.Component {
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
    return (0, Chunk951288.jsx)(module.Provider, {
      value: this.getContextValue(require),
      children: exports
    })
  }
  constructor(...e) {
    super(...e), f(this, "state", {
      layerContainerElement: null
    }), f(this, "setLayerContainerElement", e => {
      this.setState({
        layerContainerElement: e
      })
    }), f(this, "getContextValue", (0, c.oH)(e => [e, this.setLayerContainerElement]))
  }
}
let m = e => {
  let {
    layerContext: t,
    className: n
  } = e, [, a] = i.useContext(t), s = i.useCallback(e => {
    a(e)
  }, [a]);
  return (0, r.jsx)("div", {
    className: o()(p, n),
    ref: s
  })
};

function g(e) {
  let t = (0, l.sK)(e, d.layerContainer);
  if (null == t && (t = (0, l.MD)(e, u.TA)), null == t) throw Error("Unexpected missing parent container");
  return t
}

function E(e, t) {
  let [n] = e;
  return null == n ? null : s.createPortal(i.Children.only(t), n)
}
let b = e => {
  let {
    layerContext: t,
    children: n
  } = e;
  return (0, r.jsx)(t.Consumer, {
    children: e => E(e, n)
  })
};

function y(e) {
  let t = i.createContext([null, () => {}]),
    n = {
      LayerProvider: e => (0, r.jsx)(h, _({
        layerContext: t
      }, e)),
      LayerContainer: e => (0, r.jsx)(m, _({
        layerContext: t
      }, e)),
      Layer: e => (0, r.jsx)(b, _({
        layerContext: t
      }, e)),
      layerContext: t
    };
  return n.LayerProvider.displayName = "".concat(e, "LayerProvider"), n.LayerContainer.displayName = "".concat(e, "LayerContainer"), n.Layer.displayName = "".concat(e, "Layer"), n
}