/** Chunk was on web.js **/
/** chunk id: 15373, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk493405 = require("./493405.js"),
  Chunk812745 = require("./812745.jsx"),
  Chunk70142 = require("./70142.js"),
  Chunk825755 = require("./825755.js"),
  Chunk985018 = require("./985018.jsx");
class f extends Chunk64700.PureComponent {
  componentDidMount() {
    null != this.props.paypalClient && o.Rz()
  }
  componentWillUnmount() {
    o.gm().then(() => o.LR())
  }
  render() {
    let {
      braintreeEmail: e,
      paypalClient: t
    } = this.props;
    return (0, r.jsx)(s.ksK, {
      label: d.intl.string(d.t.QQBAos),
      leading: {
        type: "image",
        src: (0, l.Nj)(l.Ay.Types.PAYPAL)
      },
      value: e,
      readOnly: true,
      placeholder: null == t ? d.intl.string(d.t.dte2M9) : d.intl.string(d.t.hopw7X)
    })
  }
}
let p = Chunk311907.Ay.connectStores([Chunk70142.A, Chunk825755.A], () => ({
  braintreeEmail: u.A.braintreeEmail,
  paypalClient: c.A.getPayPalClient()
}))(f)