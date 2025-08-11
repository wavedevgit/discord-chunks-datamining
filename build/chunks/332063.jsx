/** Chunk was on 45094 **/
/** chunk id: 332063, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var i, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk274616 = require("./274616.js"),
  Chunk560587 = require("./560587.js"),
  Chunk388032 = require("./388032.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class u extends(i = Chunk73800.Component) {
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
      hide: r,
      className: l
    } = this.props;
    if (0 === module.length || Chunk73800) return null;
    let o = i ? module : module.filter(e => e.id !== n);
    return <Chunk481060.q4e options={Chunk274616.map(e => ({
        label: e.getName(n),
        value: e.id
      }))} placeholder={Chunk388032.intl.string(Chunk388032.t.Sw7pHB)} value={exports} onChange={this.handleChange} className={Chunk442837} />
  }
  constructor(...e) {
    super(...e), h(this, "handleChange", e => {
      this.props.onChange(e)
    })
  }
}
h(u, "defaultProps", {
  includeMaster: false
});
let p = Chunk442837.ZP.connectStores([Chunk560587.Z], e => {
  let {
    applicationId: t
  } = e;
  return {
    branches: d.Z.getBranches(t)
  }
})(u)