/** Chunk was on 76540 **/
/** chunk id: 317175, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
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
  Chunk600164 = require("./600164.js"),
  Chunk133080 = require("./133080.js"),
  Chunk388032 = require("./388032.js"),
  Chunk939175 = require("./939175.js"),
  Chunk20795 = require("./20795.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class C extends Chunk73800.PureComponent {
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
        children: <E.Z className={m.countryItem} justify={E.Z.Justify.CENTER} align={E.Z.Align.CENTER}>{<E.Z.Child className={m.countryName}>{l}</E.Z.Child>}{<E.Z.Child className={m.countryCode} grow={0} shrink={0}>{e}</E.Z.Child>}</E.Z>
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
            f(e, t, n[t])
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
    return 0 === require.length ? <Chunk481060.mzC.Empty>{Chunk388032.intl.string(Chunk388032.t.PoWNfX)}</Chunk481060.mzC.Empty> : <Chunk481060.w0Z className={Chunk939175.phoneFieldScroller}>{require}</Chunk481060.w0Z>
  }
  render() {
    let {
      className: e
    } = this.props;
    return <Chunk481060.mzC className={l()(Chunk939175.phoneFieldPopout, Chunk20795.elevationBorderLow, module)}>{<Chunk481060.mzC.SearchBar query={this.state.query} placeholder={Chunk388032.intl.string(Chunk388032.t.hGOODg)} onChange={this.onChangeQuery} onClear={this.onClearQuery} autoComplete={"off"} />}{<Chunk481060.mzC.Divider />}{this.renderItems()}</Chunk481060.mzC>
  }
  constructor(e) {
    super(e), f(this, "onChangeQuery", e => {
      this.setState({
        query: e
      })
    }), f(this, "onClearQuery", () => {
      this.setState({
        query: ""
      })
    }), f(this, "onClick", e => {
      var t, n;
      null == (t = (n = this.props).onClick) || t.call(n, e)
    }), this.state = {
      query: ""
    }
  }
}