/** Chunk was on 93886 **/
/** chunk id: 346486, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk55935 = require("./55935.js"),
  Chunk388032 = require("./388032.jsx");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class u extends(r = Chunk473749.PureComponent) {
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
    } = this.props, l = [e.days, e.hours, e.minutes, e.seconds], o = [c.intl.string(c.t["6m/6nM"]), c.intl.string(c.t.n7dksO), c.intl.string(c.t["1LyF1h"]), c.intl.string(c.t.QJyuxY)];
    if (0 === e.days) l.shift();
    else if (!t) {
      let e = l.shift();
      l[0] += 24 * e
    }
    let s = a()(l).map(e => e < 10 ? "0".concat(e) : e).map((e, t) => [t > 0 && !n ? ":" : " ", (0, i.jsxs)("span", {
      children: [e, n ? o[l.length - t - 1] : null]
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
    if (module === 1 / 0) return (0, Chunk54381.jsx)("span", {
      className: require,
      "aria-label": Chunk388032.intl.string(Chunk388032.t.PqEzn8),
      children: "∞"
    });
    let l = (0, Chunk55935.TD)(Date.now(), module, r);
    return null != exports ? exports(Chunk473749, this.defaultRender.bind(this, Chunk473749)) : this.defaultRender(Chunk473749)
  }
  constructor(...e) {
    super(...e), d(this, "_interval", true)
  }
}
d(u, "defaultProps", {
  showDays: true,
  showUnits: false,
  stopAtOneSec: false,
  intervalDuration: 1e3
});
let p = u