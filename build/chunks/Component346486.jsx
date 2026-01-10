/** Chunk was on 96795 **/
/** chunk id: 346486, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var e, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk55935 = require("./55935.js"),
  Chunk388032 = require("./388032.jsx");

function a(t, i, n) {
  return i in t ? Object.defineProperty(t, i, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[i] = n, t
}
class A extends(e = Chunk473749.PureComponent) {
  componentDidMount() {
    let {
      intervalDuration: t,
      onInterval: i
    } = this.props;
    this._interval = setInterval(() => {
      this.forceUpdate(), null == i || i()
    }, t)
  }
  componentWillUnmount() {
    null != this._interval && clearInterval(this._interval)
  }
  defaultRender(t) {
    let {
      showDays: i,
      showUnits: n,
      className: e
    } = this.props, r = [t.days, t.hours, t.minutes, t.seconds], E = [S.intl.string(S.t["6m/6nM"]), S.intl.string(S.t.n7dksO), S.intl.string(S.t["1LyF1h"]), S.intl.string(S.t.QJyuxY)];
    if (0 === t.days) r.shift();
    else if (!i) {
      let t = r.shift();
      r[0] += 24 * t
    }
    let o = s()(r).map(t => t < 10 ? "0".concat(t) : t).map((t, i) => [i > 0 && !n ? ":" : " ", (0, l.jsxs)("span", {
      children: [t, n ? E[r.length - i - 1] : null]
    }, i)]).flatten().value();
    return (0, l.jsx)("span", {
      className: e,
      children: o
    })
  }
  render() {
    let {
      deadline: t,
      children: i,
      className: n,
      stopAtOneSec: e
    } = this.props;
    if (t === 1 / 0) return (0, l.jsx)("span", {
      className: n,
      "aria-label": S.intl.string(S.t.PqEzn8),
      children: "∞"
    });
    let r = (0, o.TD)(Date.now(), t, e);
    return null != i ? i(r, this.defaultRender.bind(this, r)) : this.defaultRender(r)
  }
  constructor(...t) {
    super(...t), a(this, "_interval", true)
  }
}
a(A, "defaultProps", {
  showDays: true,
  showUnits: false,
  stopAtOneSec: false,
  intervalDuration: 1e3
});
let P = A