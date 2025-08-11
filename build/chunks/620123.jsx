/** Chunk was on 45094 **/
/** chunk id: 620123, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk16084 = require("./16084.js"),
  Chunk55563 = require("./55563.js"),
  Chunk388032 = require("./388032.jsx");
class c extends Chunk73800.Component {
  componentDidMount() {
    let {
      applicationId: e,
      skus: t,
      selectedSkuId: n,
      onChange: i
    } = this.props;
    null == exports || 0 === exports.length ? (0, Chunk16084.uE)(module, false) : 1 === exports.length && null == require && Chunk255367(exports[0].id)
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
      className: n
    } = this.props, s = null != module && 0 === module.length;
    return <Chunk481060.q4e options={null != module ? module.map(e => ({
        label: e.name,
        value: e.id
      })) : []} placeholder={Chunk73800 ? Chunk388032.intl.string(Chunk388032.t.hKcgPz) : Chunk388032.intl.string(Chunk388032.t.QV60Ul)} value={exports} onChange={this.handleChange} className={require} isDisabled={Chunk73800} />
  }
  constructor(...e) {
    var t, n;
    super(...e), t = "handleChange", n = e => {
      this.props.onChange(e)
    }, t in this ? Object.defineProperty(this, t, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    }) : this[t] = n
  }
}
let h = Chunk442837.ZP.connectStores([Chunk55563.Z], e => {
  let {
    applicationId: t
  } = e;
  return {
    skus: o.Z.getForApplication(t)
  }
})(c)