/** Chunk was on 1113 **/
/** chunk id: 505806, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./321073.js"), require("./264879.js"), require("./896048.js");
var r, Chunk64700 = require("./64700.js"),
  Chunk451988 = require("./451988.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class a extends(r = Chunk64700.Component) {
  componentDidMount() {
    this.update(), this._interval.start(this.props.updateInterval, this.update)
  }
  componentWillUnmount() {
    this._interval.stop()
  }
  calculateInitialDeltaBytes(e) {
    let {
      numUpdatesToShow: t,
      updateInterval: n,
      pointsToSmooth: r
    } = this.props, l = Date.now(), i = 0, s = 0, a = [], o = null != e[0] ? e[0].bytes : 0;
    for (; i < t + r; i++) {
      let t, r = l - (i + 1) * n;
      for (; s < e.length;)
        if ((t = e[s]).timestamp > r) s++;
        else break;
      if (s === e.length) break;
      null != t && (a.push(o - t.bytes), o = t.bytes)
    }
    for (; i < t + r; i++) a.push(0);
    return a.reverse(), a
  }
  smoothDeltaBytes(e) {
    let {
      pointsToSmooth: t
    } = this.props, n = [];
    for (let r = 0; r < e.length - t; r++) {
      let l = 0;
      for (let n = 0; n < t; n++) l += e[r + n];
      n.push(l / t)
    }
    return n
  }
  render() {
    let {
      numUpdatesToShow: e,
      updateInterval: t,
      children: n
    } = this.props;
    return n(this.state.smoothedDeltaBytes, t, e)
  }
  constructor(e) {
    super(e), s(this, "_interval", new i.IX), s(this, "update", () => {
      let {
        onUpdate: e,
        numUpdatesToShow: t,
        pointsToSmooth: n,
        updateInterval: r
      } = this.props, l = this.props.getHistoricalTotalBytes(), i = null != l[0] ? l[0].bytes : 0, s = [...this.state.deltaBytes.slice(1, t + n), i - this.state.lastTotalBytes];
      this.setState({
        deltaBytes: s,
        smoothedDeltaBytes: this.smoothDeltaBytes(s),
        lastTotalBytes: i
      }, () => null != e && e(r))
    });
    const t = this.props.getHistoricalTotalBytes(),
      n = this.calculateInitialDeltaBytes(t);
    this.state = {
      deltaBytes: n,
      smoothedDeltaBytes: this.smoothDeltaBytes(n),
      lastTotalBytes: null != t[0] ? t[0].bytes : 0
    }
  }
}
s(a, "defaultProps", {
  numUpdatesToShow: 30,
  updateInterval: 500,
  pointsToSmooth: 10
});
let o = a