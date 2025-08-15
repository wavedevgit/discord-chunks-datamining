/** Chunk was on 87626 **/
/** chunk id: 66037, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./415506.js"), require("./35282.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk539528 = require("./539528.js"),
  Chunk302213 = require("./302213.js"),
  Chunk960231 = require("./960231.js");
class o extends Chunk647438.Component {
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
    if (null == module) throw Error("Missing 'to' route prop in TrackLink component");
    let c = "string" == typeof module ? module : module.pathname,
      d = "string" == typeof module ? "" : module.hash,
      u = "string" == typeof module ? "" : module.search;
    return require ? (0, Chunk951288.jsx)(Chunk302213.OL, {
      className: o,
      tabIndex: Chunk539528,
      onClick: this.handleOnClick,
      to: {
        pathname: c,
        hash: d,
        search: u,
        state: {
          previousLinkLocation: exports
        }
      },
      role: Chunk960231,
      children: Chunk647438
    }) : (0, Chunk951288.jsx)(Chunk302213.rU, {
      className: o,
      tabIndex: Chunk539528,
      onClick: this.handleOnClick,
      to: {
        pathname: c,
        hash: d,
        search: u,
        state: {
          previousLinkLocation: exports
        }
      },
      role: Chunk960231,
      children: Chunk647438
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
let c = (0, Chunk960231.EN)(o)