/** Chunk was on web.js **/
/** chunk id: 229403, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk493405 = require("./493405.js"),
  Chunk812745 = require("./812745.jsx"),
  Chunk70142 = require("./70142.js"),
  Chunk825755 = require("./825755.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk666491 = require("./666491.js");
class p extends Chunk64700.PureComponent {
  componentDidMount() {
    null != this.props.venmoClient && s.fB()
  }
  componentDidUpdate(e) {
    null == e.venmoClient && null != this.props.venmoClient && s.fB()
  }
  componentWillUnmount() {
    s._b().then(() => {
      null != c.A.getClient() && s.DD()
    })
  }
  render() {
    let {
      venmoUsername: e,
      className: t,
      venmoClient: n
    } = this.props, i = null != e && "" !== e;
    return (0, r.jsxs)("div", {
      className: t,
      children: [(0, r.jsx)(l.Ay, {
        type: l.Ay.Types.VENMO,
        size: l.y3.MEDIUM,
        className: f.Z
      }), i ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(o.Heading, {
          variant: e.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
          className: f.y,
          children: d.intl.format(d.t.DowIre, {
            venmoUsername: e
          })
        }), (0, r.jsx)(o.Text, {
          variant: "text-md/medium",
          className: f.y,
          children: d.intl.string(d.t.kmEvnR)
        })]
      }) : (0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        className: f.y,
        children: null == n ? d.intl.string(d.t["2ouZDU"]) : d.intl.string(d.t.mIL6Jb)
      })]
    })
  }
}
let _ = Chunk311907.Ay.connectStores([Chunk70142.A, Chunk825755.A], () => ({
  venmoUsername: u.A.venmoUsername,
  venmoClient: c.A.getVenmoClient()
}))(p)