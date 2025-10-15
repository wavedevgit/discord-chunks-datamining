/** Chunk was on 93886 **/
/** chunk id: 346486, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk55935 = require("./55935.js"),
  Chunk388032 = require("./388032.jsx");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class d extends(r = Chunk647438.PureComponent) {
  componentDidMount() {
    let {
      intervalDuration: e,
      onInterval: t
    } = this.props;
    this._interval = setInterval(() => {
      this.forceUpdate(), null == exports || exports()
    }, module)
  }
  componentWillUnmount() {
    null != this._interval && clearInterval(this._interval)
  }
  defaultRender(e) {
    let {
      showDays: t,
      showUnits: n,
      className: r
    } = this.props, l = [e.days, e.hours, e.minutes, e.seconds], a = [u.intl.string(u.t["6m/6nM"]), u.intl.string(u.t.n7dksO), u.intl.string(u.t["1LyF1h"]), u.intl.string(u.t.QJyuxY)];
    if (0 === e.days) l.shift();
    else if (!t) {
      let e = l.shift();
      l[0] += 24 * e
    }
    let s = o()(l).map(e => e < 10 ? "0".concat(e) : e).map((e, t) => [t > 0 && !n ? ":" : " ", (0, i.jsxs)("span", {
      children: [e, n ? a[l.length - t - 1] : null]
    }, t)]).flatten().value();
    return (0, i.jsx)("span", {
      className: r,
      children: s
    })
  }
  render() {
    let {
      deadline: e,
      children: t,
      className: n,
      stopAtOneSec: r
    } = this.props;
    if (module === 1 / 0) return (0, Chunk951288.jsx)("span", {
      className: require,
      "aria-label": Chunk388032.intl.string(Chunk388032.t.PqEzn8),
      children: "∞"
    });
    let l = (0, Chunk55935.TD)(Date.now(), module, r);
    return null != exports ? exports(Chunk647438, this.defaultRender.bind(this, Chunk647438)) : this.defaultRender(Chunk647438)
  }
  constructor(...e) {
    super(...e), c(this, "_interval", true)
  }
}
c(d, "defaultProps", {
  showDays: true,
  showUnits: false,
  stopAtOneSec: false,
  intervalDuration: 1e3
});
let p = d