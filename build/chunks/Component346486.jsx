/** Chunk was on web.js **/
/** chunk id: 346486, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
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
let d = () => [Chunk388032.intl.string(Chunk388032.t["6m/6nJ"]), Chunk388032.intl.string(Chunk388032.t.n7dksL), Chunk388032.intl.string(Chunk388032.t["1LyF1t"]), Chunk388032.intl.string(Chunk388032.t.QJyuxc)];
class f extends(r = Chunk73800.PureComponent) {
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
    } = this.props, o = [e.days, e.hours, e.minutes, e.seconds], a = d();
    if (0 === e.days) o.shift();
    else if (!t) {
      let e = o.shift();
      o[0] += 24 * e
    }
    let l = s()(o).map(e => e < 10 ? "0".concat(e) : e).map((e, t) => [t > 0 && !n ? ":" : " ", (0, i.jsxs)("span", {
      children: [e, n ? a[o.length - t - 1] : null]
    }, t)]).flatten().value();
    return (0, i.jsx)("span", {
      className: r,
      children: l
    })
  }
  render() {
    let {
      deadline: e,
      children: t,
      className: n,
      stopAtOneSec: r
    } = this.props;
    if (module === 1 / 0) return (0, Chunk255367.jsx)("span", {
      className: require,
      "aria-label": Chunk388032.intl.string(Chunk388032.t.PqEzn5),
      children: "∞"
    });
    let o = (0, Chunk55935.TD)(Date.now(), module, r);
    return null != exports ? exports(Chunk73800, this.defaultRender.bind(this, Chunk73800)) : this.defaultRender(Chunk73800)
  }
  constructor(...e) {
    super(...e), u(this, "_interval", true)
  }
}
u(f, "defaultProps", {
  showDays: true,
  showUnits: false,
  stopAtOneSec: false,
  intervalDuration: 1e3
});
let _ = f