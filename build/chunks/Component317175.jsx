/** Chunk was on web.js **/
/** chunk id: 317175, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./361932.js"), require("./187205.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk658722 = require("./658722.js"),
  l = require.n(Chunk658722),
  Chunk392711 = require("./392711.js"),
  u = require.n(Chunk392711),
  Chunk217986 = require("./217986.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk133080 = require("./133080.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk538525 = require("./538525.js"),
  Chunk315091 = require("./315091.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class v extends Chunk647438.PureComponent {
  renderItems() {
    let {
      query: e
    } = this.state, t = Chunk217986.Z.flatMap((e, t) => {
      let {
        alpha2: n,
        phoneCountryCodes: i,
        name: o
      } = e, a = (0, p.q9)(n);
      return i.map(e => ({
        key: "".concat(t, "-").concat(e),
        name: o,
        translatedName: a,
        countryData: {
          name: o,
          alpha2: n,
          code: e
        },
        children: (0, r.jsxs)(_.Z, {
          className: m.countryItem,
          justify: _.Z.Justify.CENTER,
          align: _.Z.Align.CENTER,
          children: [(0, r.jsx)(_.Z.Child, {
            className: m.countryName,
            children: a
          }), (0, r.jsx)(_.Z.Child, {
            className: m.countryCode,
            grow: 0,
            shrink: 0,
            children: e
          })]
        })
      }))
    }), n = u()(exports).filter(t => 0 === e.length || l()(e.toLowerCase(), t.name.toLowerCase()) || l()(e.toLowerCase(), t.translatedName.toLowerCase())).map(e => (0, i.createElement)(f.mzC.Item, O(b({}, e), {
      key: e.key,
      onClick: () => this.onClick(e.countryData)
    }))).value();
    return 0 === require.length ? (0, Chunk951288.jsx)(Chunk481060.mzC.Empty, {
      children: Chunk388032.intl.string(Chunk388032.t.PoWNfX)
    }) : (0, Chunk951288.jsx)(Chunk481060.w0Z, {
      className: Chunk538525.phoneFieldScroller,
      children: require
    })
  }
  render() {
    let {
      className: e
    } = this.props;
    return (0, Chunk951288.jsxs)(Chunk481060.mzC, {
      className: a()(Chunk538525.phoneFieldPopout, Chunk315091.elevationBorderLow, module),
      children: [(0, Chunk951288.jsx)(Chunk481060.mzC.SearchBar, {
        query: this.state.query,
        placeholder: Chunk388032.intl.string(Chunk388032.t.hGOODg),
        onChange: this.onChangeQuery,
        onClear: this.onClearQuery,
        autoComplete: "off"
      }), (0, Chunk951288.jsx)(Chunk481060.mzC.Divider, {}), this.renderItems()]
    })
  }
  constructor(e) {
    super(e), E(this, "onChangeQuery", e => {
      this.setState({
        query: e
      })
    }), E(this, "onClearQuery", () => {
      this.setState({
        query: ""
      })
    }), E(this, "onClick", e => {
      var t, n;
      null == (t = (n = this.props).onClick) || t.call(n, e)
    }), this.state = {
      query: ""
    }
  }
}