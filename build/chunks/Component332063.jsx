/** Chunk was on 29497 **/
/** chunk id: 332063, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var i, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk274616 = require("./274616.js"),
  Chunk560587 = require("./560587.js"),
  Chunk388032 = require("./388032.jsx");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class h extends(i = Chunk473749.Component) {
  componentDidMount() {
    let {
      applicationId: e,
      branches: t,
      onHasBranchesChange: n
    } = this.props;
    (0, Chunk274616.Z)(module), null == require || require(exports.length > 0)
  }
  componentDidUpdate(e) {
    let {
      onHasBranchesChange: t,
      branches: n
    } = this.props, i = n.length > 0;
    null != t && i !== e.branches.length > 0 && t(i)
  }
  render() {
    let {
      branches: e,
      selectedBranchId: t,
      applicationId: n,
      includeMaster: i,
      hide: l,
      className: s,
      label: o
    } = this.props;
    if (0 === module.length || Chunk473749) return null;
    let c = i ? module : module.filter(e => e.id !== n);
    return (0, Chunk54381.jsx)(Chunk481060.q4e, {
      label: Chunk274616,
      options: Chunk560587.map(e => ({
        label: e.getName(n),
        value: e.id
      })),
      placeholder: Chunk388032.intl.string(Chunk388032.t.Sw7pHF),
      value: exports,
      onChange: this.handleChange,
      className: Chunk442837
    })
  }
  constructor(...e) {
    super(...e), d(this, "handleChange", e => {
      this.props.onChange(e)
    })
  }
}
d(h, "defaultProps", {
  includeMaster: false
});
let p = Chunk442837.ZP.connectStores([Chunk560587.Z], e => {
  let {
    applicationId: t
  } = e;
  return {
    branches: c.Z.getBranches(t)
  }
})(h)