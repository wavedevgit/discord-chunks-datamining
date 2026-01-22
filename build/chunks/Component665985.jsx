/** Chunk was on 64233 **/
/** chunk id: 665985, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./896048.js");
var i, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk781763 = require("./781763.js"),
  Chunk65204 = require("./65204.js"),
  Chunk985018 = require("./985018.jsx");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class d extends(i = Chunk64700.Component) {
  componentDidMount() {
    let {
      applicationId: e,
      branches: t,
      onHasBranchesChange: n
    } = this.props;
    (0, o.w)(e), null == n || n(t.length > 0)
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
      label: s
    } = this.props;
    if (0 === e.length || l) return null;
    let o = i ? e : e.filter(e => e.id !== n);
    return (0, r.jsx)(a.l6P, {
      label: s,
      options: o.map(e => ({
        id: e.id,
        label: e.getName(n),
        value: e.id
      })),
      placeholder: c.intl.string(c.t.Sw7pHF),
      value: t,
      onSelectionChange: this.handleChange,
      selectionMode: "single",
      fullWidth: true
    })
  }
  constructor(...e) {
    super(...e), h(this, "handleChange", e => {
      this.props.onChange(e)
    })
  }
}
h(d, "defaultProps", {
  includeMaster: false
});
let p = Chunk311907.Ay.connectStores([Chunk65204.A], e => {
  let {
    applicationId: t
  } = e;
  return {
    branches: u.A.getBranches(t)
  }
})(d)