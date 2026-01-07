/** Chunk was on 41619 **/
/** chunk id: 317175, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./361932.js"), require("./187205.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk686348 = require("./686348.js"),
  Chunk533348 = require("./533348.js");

function O(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
class C extends Chunk473749.PureComponent {
  renderItems() {
    let {
      query: e
    } = this.state, t = d.Z.flatMap((e, t) => {
      let {
        alpha2: r,
        phoneCountryCodes: s,
        name: i
      } = e, a = (0, f.q9)(r);
      return s.map(e => ({
        key: "".concat(t, "-").concat(e),
        name: i,
        translatedName: a,
        countryData: {
          name: i,
          alpha2: r,
          code: e
        },
        children: (0, n.jsxs)(p.Z, {
          className: g.countryItem,
          justify: p.Z.Justify.CENTER,
          align: p.Z.Align.CENTER,
          children: [(0, n.jsx)(p.Z.Child, {
            className: g.countryName,
            children: a
          }), (0, n.jsx)(p.Z.Child, {
            className: g.countryCode,
            grow: 0,
            shrink: 0,
            children: e
          })]
        })
      }))
    }), r = u()(t).filter(t => 0 === e.length || l()(e.toLowerCase(), t.name.toLowerCase()) || l()(e.toLowerCase(), t.translatedName.toLowerCase())).map(e => {
      var t, r;
      return (0, s.createElement)(h.mzC.Item, (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            O(e, t, r[t])
          })
        }
        return e
      }({}, e), r = r = {
        key: e.key,
        onClick: () => this.onClick(e.countryData)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
      }), t))
    }).value();
    return 0 === r.length ? (0, n.jsx)(h.mzC.Empty, {
      children: m.intl.string(m.t.PoWNfe)
    }) : (0, n.jsx)(h.w0Z, {
      className: g.phoneFieldScroller,
      children: r
    })
  }
  render() {
    let {
      className: e
    } = this.props;
    return (0, n.jsxs)(h.mzC, {
      className: a()(g.phoneFieldPopout, y.elevationBorderLow, e),
      children: [(0, n.jsx)(h.mzC.SearchBar, {
        query: this.state.query,
        placeholder: m.intl.string(m.t.hGOODh),
        onChange: this.onChangeQuery,
        onClear: this.onClearQuery,
        autoComplete: "off"
      }), (0, n.jsx)(h.mzC.Divider, {}), this.renderItems()]
    })
  }
  constructor(e) {
    super(e), O(this, "onChangeQuery", e => {
      this.setState({
        query: e
      })
    }), O(this, "onClearQuery", () => {
      this.setState({
        query: ""
      })
    }), O(this, "onClick", e => {
      var t, r;
      null == (t = (r = this.props).onClick) || t.call(r, e)
    }), this.state = {
      query: ""
    }
  }
}