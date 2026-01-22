/** Chunk was on 59541 **/
/** chunk id: 576470, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js");
var e, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk405269 = require("./405269.js"),
  Chunk985018 = require("./985018.jsx");

function a(t, i, n) {
  return i in t ? Object.defineProperty(t, i, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[i] = n, t
}
class A extends(e = Chunk64700.PureComponent) {
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
    } = this.props, E = [t.days, t.hours, t.minutes, t.seconds], s = [o.intl.string(o.t["6m/6nM"]), o.intl.string(o.t.n7dksO), o.intl.string(o.t["1LyF1h"]), o.intl.string(o.t.QJyuxY)];
    if (0 === t.days) E.shift();
    else if (!i) {
      let t = E.shift();
      E[0] += 24 * t
    }
    let S = l()(E).map(t => t < 10 ? "0".concat(t) : t).map((t, i) => [i > 0 && !n ? ":" : " ", (0, r.jsxs)("span", {
      children: [t, n ? s[E.length - i - 1] : null]
    }, i)]).flatten().value();
    return (0, r.jsx)("span", {
      className: e,
      children: S
    })
  }
  render() {
    let {
      deadline: t,
      children: i,
      className: n,
      stopAtOneSec: e
    } = this.props;
    if (t === 1 / 0) return (0, r.jsx)("span", {
      className: n,
      "aria-label": o.intl.string(o.t.PqEzn8),
      children: "∞"
    });
    let E = (0, S.Tf)(Date.now(), t, e);
    return null != i ? i(E, this.defaultRender.bind(this, E)) : this.defaultRender(E)
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
let g = A