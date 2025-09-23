/** Chunk was on 93886 **/
/** chunk id: 346486, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk55935 = require("./55935.js"),
  Chunk388032 = require("./388032.jsx");

function u(e, t, n) {
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
    } = this.props, o = [e.days, e.hours, e.minutes, e.seconds], l = [c.intl.string(c.t["6m/6nJ"]), c.intl.string(c.t.n7dksL), c.intl.string(c.t["1LyF1t"]), c.intl.string(c.t.QJyuxc)];
    if (0 === e.days) o.shift();
    else if (!t) {
      let e = o.shift();
      o[0] += 24 * e
    }
    let s = a()(o).map(e => e < 10 ? "0".concat(e) : e).map((e, t) => [t > 0 && !n ? ":" : " ", (0, i.jsxs)("span", {
      children: [e, n ? l[o.length - t - 1] : null]
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
      "aria-label": Chunk388032.intl.string(Chunk388032.t.PqEzn5),
      children: "∞"
    });
    let o = (0, Chunk55935.TD)(Date.now(), module, r);
    return null != exports ? exports(Chunk647438, this.defaultRender.bind(this, Chunk647438)) : this.defaultRender(Chunk647438)
  }
  constructor(...e) {
    super(...e), u(this, "_interval", true)
  }
}
u(d, "defaultProps", {
  showDays: true,
  showUnits: false,
  stopAtOneSec: false,
  intervalDuration: 1e3
});
let p = d