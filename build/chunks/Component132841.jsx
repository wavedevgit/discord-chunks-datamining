/** Chunk was on 64233 **/
/** chunk id: 132841, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk830382 = require("./830382.js"),
  Chunk67480 = require("./67480.js"),
  Chunk985018 = require("./985018.jsx");
class c extends Chunk64700.Component {
  componentDidMount() {
    let {
      applicationId: e,
      skus: t,
      selectedSkuId: n,
      onChange: i
    } = this.props;
    null == t || 0 === t.length ? (0, a.O1)(e, false) : 1 === t.length && null == n && i(t[0].id)
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
    } = this.props, r = null != e && 0 === e.length;
    return (0, i.jsx)(s.l6P, {
      selectionMode: "single",
      label: n,
      options: null != e ? e.map(e => ({
        id: e.id,
        label: e.name,
        value: e.id
      })) : [],
      placeholder: r ? u.intl.string(u.t.hKcgP5) : u.intl.string(u.t.QV60Uq),
      value: t,
      onSelectionChange: this.handleChange,
      disabled: r
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
let h = Chunk311907.Ay.connectStores([Chunk67480.A], e => {
  let {
    applicationId: t
  } = e;
  return {
    skus: o.A.getForApplication(t)
  }
})(c)