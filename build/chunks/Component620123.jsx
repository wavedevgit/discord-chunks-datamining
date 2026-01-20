/** Chunk was on 29497 **/
/** chunk id: 620123, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk16084 = require("./16084.js"),
  Chunk55563 = require("./55563.js"),
  Chunk388032 = require("./388032.jsx");
class c extends Chunk473749.Component {
  componentDidMount() {
    let {
      applicationId: e,
      skus: t,
      selectedSkuId: n,
      onChange: i
    } = this.props;
    null == t || 0 === t.length ? (0, a.uE)(e, false) : 1 === t.length && null == n && i(t[0].id)
  }
  componentDidUpdate() {
    let {
      skus: e,
      selectedSkuId: t,
      onChange: n
    } = this.props;
    null != e && 1 === e.length && null == t && n(e[0].id)
  }
  render() {
    let {
      skus: e,
      selectedSkuId: t,
      label: n
    } = this.props, l = null != e && 0 === e.length;
    return (0, i.jsx)(s.PhF, {
      selectionMode: "single",
      label: n,
      options: null != e ? e.map(e => ({
        id: e.id,
        label: e.name,
        value: e.id
      })) : [],
      placeholder: l ? u.intl.string(u.t.hKcgP5) : u.intl.string(u.t.QV60Uq),
      value: t,
      onSelectionChange: this.handleChange,
      disabled: l
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
})(c)