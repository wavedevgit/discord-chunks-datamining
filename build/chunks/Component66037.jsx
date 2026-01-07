/** Chunk was on 87626 **/
/** chunk id: 66037, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./415506.js"), require("./35282.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk539528 = require("./539528.js"),
  Chunk50628 = require("./50628.js"),
  Chunk54111 = require("./54111.js");
class o extends Chunk473749.Component {
  render() {
    let {
      to: e,
      from: t,
      isNavLink: a,
      children: r,
      tabIndex: s = 0,
      role: i,
      className: o
    } = this.props;
    if (null == e) throw Error("Missing 'to' route prop in TrackLink component");
    let c = "string" == typeof e ? e : e.pathname,
      d = "string" == typeof e ? "" : e.hash,
      u = "string" == typeof e ? "" : e.search;
    return a ? (0, n.jsx)(l.OL, {
      className: o,
      tabIndex: s,
      onClick: this.handleOnClick,
      to: {
        pathname: c,
        hash: d,
        search: u,
        state: {
          previousLinkLocation: t
        }
      },
      role: i,
      children: r
    }) : (0, n.jsx)(l.rU, {
      className: o,
      tabIndex: s,
      onClick: this.handleOnClick,
      to: {
        pathname: c,
        hash: d,
        search: u,
        state: {
          previousLinkLocation: t
        }
      },
      role: i,
      children: r
    })
  }
  constructor(...e) {
    super(...e),
      function(e, t, a) {
        t in e ? Object.defineProperty(e, t, {
          value: a,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = a
      }(this, "handleOnClick", () => {
        let {
          to: e,
          avoidRouter: t,
          onClick: a,
          history: n
        } = this.props;
        if (null != a) a();
        else if (t) {
          let t = "string" == typeof e ? (0, s.ob)(e, null, true, n.location) : e,
            a = n.createHref(t);
          window.location = a
        }
      })
  }
}
let c = (0, Chunk54111.EN)(o)