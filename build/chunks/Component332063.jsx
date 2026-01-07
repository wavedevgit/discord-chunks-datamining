/** Chunk was on 29497 **/
/** chunk id: 332063, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var i, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk199849 = require("./199849.jsx"),
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
    (0, o.Z)(e), null == n || n(t.length > 0)
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
    if (0 === e.length || l) return null;
    let u = i ? e : e.filter(e => e.id !== n);
    return (0, r.jsx)(a.y6, {
      label: o,
      options: u.map(e => ({
        label: e.getName(n),
        value: e.id
      })),
      placeholder: c.intl.string(c.t.Sw7pHF),
      value: t,
      onChange: this.handleChange,
      className: s
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
    branches: u.Z.getBranches(t)
  }
})(h)