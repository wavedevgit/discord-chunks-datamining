/** Chunk was on 34078 **/
/** chunk id: 219716, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./114821.js"), require("./339614.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk91871 = require("./91871.js"),
  o = require.n(Chunk91871),
  Chunk735438 = require("./735438.js"),
  u = require.n(Chunk735438),
  Chunk96337 = require("./96337.js"),
  Chunk397927 = require("./397927.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk518977 = require("./518977.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk492933 = require("./492933.js"),
  Chunk976092 = require("./976092.js");

function O(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
class b extends Chunk64700.PureComponent {
  renderItems() {
    let {
      query: e
    } = this.state, t = d.A.flatMap((e, t) => {
      let {
        alpha2: r,
        phoneCountryCodes: s,
        name: i
      } = e, a = (0, f.Gw)(r);
      return s.map(e => ({
        key: "".concat(t, "-").concat(e),
        name: i,
        translatedName: a,
        countryData: {
          name: i,
          alpha2: r,
          code: e
        },
        children: (0, n.jsxs)(p.A, {
          className: m.kw,
          justify: p.A.Justify.CENTER,
          align: p.A.Align.CENTER,
          children: [(0, n.jsx)(p.A.Child, {
            className: m.GL,
            children: a
          }), (0, n.jsx)(p.A.Child, {
            className: m.kf,
            grow: 0,
            shrink: 0,
            children: e
          })]
        })
      }))
    }), r = u()(t).filter(t => 0 === e.length || o()(e.toLowerCase(), t.name.toLowerCase()) || o()(e.toLowerCase(), t.translatedName.toLowerCase())).map(e => {
      var t, r;
      return (0, s.createElement)(h.i6n.Item, (t = function(e) {
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
    return 0 === r.length ? (0, n.jsx)(h.i6n.Empty, {
      children: y.intl.string(y.t.PoWNfe)
    }) : (0, n.jsx)(h.ArX, {
      className: m.Dm,
      children: r
    })
  }
  render() {
    let {
      className: e
    } = this.props;
    return (0, n.jsxs)(h.i6n, {
      className: a()(m.eQ, g.Cw, e),
      children: [(0, n.jsx)(h.i6n.SearchBar, {
        query: this.state.query,
        placeholder: y.intl.string(y.t.hGOODh),
        onChange: this.onChangeQuery,
        onClear: this.onClearQuery,
        autoComplete: "off"
      }), (0, n.jsx)(h.i6n.Divider, {}), this.renderItems()]
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