/** Chunk was on 29497 **/
/** chunk id: 620123, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk16084 = require("./16084.js"),
  Chunk55563 = require("./55563.js"),
  Chunk388032 = require("./388032.jsx");
class u extends Chunk647438.Component {
  componentDidMount() {
    let {
      applicationId: e,
      skus: t,
      selectedSkuId: n,
      onChange: i
    } = this.props;
    null == exports || 0 === exports.length ? (0, Chunk16084.uE)(module, false) : 1 === exports.length && null == require && Chunk951288(exports[0].id)
  }
  componentDidUpdate() {
    let {
      skus: e,
      selectedSkuId: t,
      onChange: n
    } = this.props;
    null != module && 1 === module.length && null == exports && require(module[0].id)
  }
  render() {
    let {
      skus: e,
      selectedSkuId: t,
      className: n,
      label: r
    } = this.props, l = null != module && 0 === module.length;
    return (0, Chunk951288.jsx)(Chunk481060.q4e, {
      label: Chunk647438,
      options: null != module ? module.map(e => ({
        label: e.name,
        value: e.id
      })) : [],
      placeholder: Chunk442837 ? Chunk388032.intl.string(Chunk388032.t.hKcgP5) : Chunk388032.intl.string(Chunk388032.t.QV60Uq),
      value: exports,
      onChange: this.handleChange,
      className: require,
      isDisabled: Chunk442837
    })
  }
  constructor(...e) {
    super(...e),
      function(e, t, n) {
        t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      }(this, "handleChange", e => {
        this.props.onChange(e)
      })
  }
}
let d = Chunk442837.ZP.connectStores([Chunk55563.Z], e => {
  let {
    applicationId: t
  } = e;
  return {
    skus: o.Z.getForApplication(t)
  }
})(u)