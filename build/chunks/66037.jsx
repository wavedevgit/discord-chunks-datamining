/** Chunk was on 87626 **/
/** chunk id: 66037, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./415506.js"), require("./35282.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk539528 = require("./539528.js"),
  Chunk947031 = require("./947031.js"),
  Chunk764110 = require("./764110.js");
class o extends Chunk73800.Component {
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
    return require ? <Chunk947031.OL className={o} tabIndex={Chunk539528} onClick={this.handleOnClick} to={{
        pathname: c,
        hash: d,
        search: u,
        state: {
          previousLinkLocation: exports
        }
      }} role={Chunk764110}>{Chunk73800}</Chunk947031.OL> : <Chunk947031.rU className={o} tabIndex={Chunk539528} onClick={this.handleOnClick} to={{
        pathname: c,
        hash: d,
        search: u,
        state: {
          previousLinkLocation: exports
        }
      }} role={Chunk764110}>{Chunk73800}</Chunk947031.rU>
  }
  constructor(...e) {
    var t, a;
    super(...e), t = "handleOnClick", a = () => {
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
    }, t in this ? Object.defineProperty(this, t, {
      value: a,
      enumerable: true,
      configurable: true,
      writable: true
    }) : this[t] = a
  }
}
let c = (0, Chunk764110.EN)(o)