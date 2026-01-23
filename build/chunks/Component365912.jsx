/** Chunk was on web.js **/
/** chunk id: 365912, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => b,
  J$: () => g,
  Wd: () => y
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk340287 = require("./340287.js"),
  Chunk621466 = require("./621466.js"),
  Chunk51906 = require("./51906.js"),
  Chunk508382 = require("./508382.jsx"),
  Chunk992910 = require("./992910.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
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
let _ = Chunk992910.n7;
class h extends Chunk64700.Component {
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
    super(...e), f(this, "state", {
      layerContainerElement: null
    }), f(this, "setLayerContainerElement", e => {
      this.setState({
        layerContainerElement: e
      })
    }), f(this, "getContextValue", (0, c.L_)(e => [e, this.setLayerContainerElement]))
  }
}
let m = e => {
  let {
    layerContext: t,
    className: n
  } = e, [, a] = i.useContext(t), o = i.useCallback(e => {
    a(e)
  }, [a]);
  return (0, r.jsx)("div", {
    className: s()(_, n),
    ref: o
  })
};

function g(e) {
  let t = (0, l.p3)(e, d.n7);
  if (null == t && (t = (0, l.wB)(e, u.IP)), null == t) throw Error("Unexpected missing parent container");
  return t
}

function E(e, t) {
  let [n] = e;
  return null == n ? null : o.createPortal(i.Children.only(t), n)
}
let y = e => {
  let {
    layerContext: t,
    children: n
  } = e;
  return (0, r.jsx)(t.Consumer, {
    children: e => E(e, n)
  })
};

function b(e) {
  let t = i.createContext([null, () => {}]),
    n = {
      LayerProvider: e => (0, r.jsx)(h, p({
        layerContext: t
      }, e)),
      LayerContainer: e => (0, r.jsx)(m, p({
        layerContext: t
      }, e)),
      Layer: e => (0, r.jsx)(y, p({
        layerContext: t
      }, e)),
      layerContext: t
    };
  return n.LayerProvider.displayName = "".concat(e, "LayerProvider"), n.LayerContainer.displayName = "".concat(e, "LayerContainer"), n.Layer.displayName = "".concat(e, "Layer"), n
}