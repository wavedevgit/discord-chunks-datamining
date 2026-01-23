/** Chunk was on 41031 **/
/** chunk id: 137540, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./65821.js"), require("./747238.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk830845 = require("./830845.js"),
  Chunk393285 = require("./393285.js"),
  Chunk134402 = require("./134402.js");
class o extends Chunk64700.Component {
  render() {
    let {
      to: e,
      from: t,
      isNavLink: a,
      children: s,
      tabIndex: l = 0,
      role: i,
      className: o
    } = this.props;
    if (null == e) throw Error("Missing 'to' route prop in TrackLink component");
    let c = "string" == typeof e ? e : e.pathname,
      d = "string" == typeof e ? "" : e.hash,
      u = "string" == typeof e ? "" : e.search;
    return a ? (0, r.jsx)(n.k2, {
      className: o,
      tabIndex: l,
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
      children: s
    }) : (0, r.jsx)(n.N_, {
      className: o,
      tabIndex: l,
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
      children: s
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
          history: r
        } = this.props;
        if (null != a) a();
        else if (t) {
          let t = "string" == typeof e ? (0, l.yJ)(e, null, true, r.location) : e,
            a = r.createHref(t);
          window.location = a
        }
      })
  }
}
let c = (0, Chunk134402.y)(o)