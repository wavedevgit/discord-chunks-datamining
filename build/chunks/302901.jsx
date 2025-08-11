/** Chunk was on web.js **/
/** chunk id: 302901, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Xv: () => O,
  mh: () => y,
  wL: () => E
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk867309 = require("./867309.js"),
  Chunk251625 = require("./251625.js"),
  Chunk872801 = require("./872801.js"),
  Chunk36344 = require("./36344.js");

function _(e, t, n) {
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
      _(e, t, n[t])
    })
  }
  return e
}
let h = Chunk36344.layerContainer;
class m extends Chunk73800.Component {
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
    return <module.Provider value={this.getContextValue(require)}>{exports}</module.Provider>
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
let g = e => {
  let {
    layerContext: t,
    className: n
  } = e, [, o] = i.useContext(t), s = i.useCallback(e => {
    o(e)
  }, [o]);
  return <div className={a()(h, n)} ref={s} />
};

function E(e) {
  let t = (0, d.Z)(e, f.layerContainer);
  return l()(null != t, "Unexpected missing parent container"), t
}

function b(e, t) {
  let [n] = e;
  return null == n ? null : c.createPortal(i.Children.only(t), n)
}
let y = e => {
  let {
    layerContext: t,
    children: n
  } = e;
  return <t.Consumer>{e => b(e, n)}</t.Consumer>
};

function O(e) {
  let t = i.createContext([null, () => {}]),
    n = {
      LayerProvider: e => <m{...p({
        layerContext: t
      }, e)} />,
      LayerContainer: e => <g{...p({
        layerContext: t
      }, e)} />,
      Layer: e => <y{...p({
        layerContext: t
      }, e)} />,
      layerContext: t
    };
  return n.LayerProvider.displayName = "".concat(e, "LayerProvider"), n.LayerContainer.displayName = "".concat(e, "LayerContainer"), n.Layer.displayName = "".concat(e, "Layer"), n
}