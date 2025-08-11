/** Chunk was on 76540 **/
/** chunk id: 317175, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./361932.js"), require("./187205.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk658722 = require("./658722.js"),
  a = require.n(Chunk658722),
  Chunk392711 = require("./392711.js"),
  h = require.n(Chunk392711),
  Chunk217986 = require("./217986.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk133080 = require("./133080.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk939175 = require("./939175.js"),
  Chunk20795 = require("./20795.js");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class f extends Chunk73800.PureComponent {
  renderItems() {
    let {
      query: e
    } = this.state, t = Chunk217986.Z.flatMap((e, t) => {
      let {
        alpha2: n,
        phoneCountryCodes: i,
        name: r
      } = e, l = (0, p.q9)(n);
      return i.map(e => ({
        key: "".concat(t, "-").concat(e),
        name: r,
        translatedName: l,
        countryData: {
          name: r,
          alpha2: n,
          code: e
        },
        children: (0, s.jsxs)(E.Z, {
          className: m.countryItem,
          justify: E.Z.Justify.CENTER,
          align: E.Z.Align.CENTER,
          children: [(0, s.jsx)(E.Z.Child, {
            className: m.countryName,
            children: l
          }), (0, s.jsx)(E.Z.Child, {
            className: m.countryCode,
            grow: 0,
            shrink: 0,
            children: e
          })]
        })
      }))
    }), n = h()(exports).filter(t => 0 === e.length || a()(e.toLowerCase(), t.name.toLowerCase()) || a()(e.toLowerCase(), t.translatedName.toLowerCase())).map(e => {
      var t, n;
      return (0, i.createElement)(d.mzC.Item, (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            s = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), s.forEach(function(t) {
            C(e, t, n[t])
          })
        }
        return e
      }({}, e), n = n = {
        key: e.key,
        onClick: () => this.onClick(e.countryData)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          n.push.apply(n, s)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t))
    }).value();
    return 0 === require.length ? (0, Chunk255367.jsx)(Chunk481060.mzC.Empty, {
      children: Chunk388032.intl.string(Chunk388032.t.PoWNfX)
    }) : (0, Chunk255367.jsx)(Chunk481060.w0Z, {
      className: Chunk939175.phoneFieldScroller,
      children: require
    })
  }
  render() {
    let {
      className: e
    } = this.props;
    return (0, Chunk255367.jsxs)(Chunk481060.mzC, {
      className: l()(Chunk939175.phoneFieldPopout, Chunk20795.elevationBorderLow, module),
      children: [(0, Chunk255367.jsx)(Chunk481060.mzC.SearchBar, {
        query: this.state.query,
        placeholder: Chunk388032.intl.string(Chunk388032.t.hGOODg),
        onChange: this.onChangeQuery,
        onClear: this.onClearQuery,
        autoComplete: "off"
      }), (0, Chunk255367.jsx)(Chunk481060.mzC.Divider, {}), this.renderItems()]
    })
  }
  constructor(e) {
    super(e), C(this, "onChangeQuery", e => {
      this.setState({
        query: e
      })
    }), C(this, "onClearQuery", () => {
      this.setState({
        query: ""
      })
    }), C(this, "onClick", e => {
      var t, n;
      null == (t = (n = this.props).onClick) || t.call(n, e)
    }), this.state = {
      query: ""
    }
  }
}