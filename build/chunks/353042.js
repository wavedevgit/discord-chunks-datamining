/** Chunk was on 53494 **/
n.d(t, {
  Z: () => s
}), n(653041), n(978209), n(47120);
var r, i = n(192379),
  o = n(846519);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class a extends(r = i.Component) {
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
    } = this.props, i = Date.now(), o = 0, l = 0, a = [], s = null != e[0] ? e[0].bytes : 0;
    for (; o < t + r; o++) {
      let t;
      let r = i - (o + 1) * n;
      for (; l < e.length;)
        if ((t = e[l]).timestamp > r) l++;
        else break;
      if (l === e.length) break;
      null != t && (a.push(s - t.bytes), s = t.bytes)
    }
    for (; o < t + r; o++) a.push(0);
    return a.reverse(), a
  }
  smoothDeltaBytes(e) {
    let {
      pointsToSmooth: t
    } = this.props, n = [];
    for (let r = 0; r < e.length - t; r++) {
      let i = 0;
      for (let n = 0; n < t; n++) i += e[r + n];
      n.push(i / t)
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
    super(e), l(this, "_interval", new o.Xp), l(this, "update", () => {
      let {
        onUpdate: e,
        numUpdatesToShow: t,
        pointsToSmooth: n,
        updateInterval: r
      } = this.props, i = this.props.getHistoricalTotalBytes(), o = null != i[0] ? i[0].bytes : 0, l = [...this.state.deltaBytes.slice(1, t + n), o - this.state.lastTotalBytes];
      this.setState({
        deltaBytes: l,
        smoothedDeltaBytes: this.smoothDeltaBytes(l),
        lastTotalBytes: o
      }, () => null != e && e(r))
    });
    let t = this.props.getHistoricalTotalBytes(),
      n = this.calculateInitialDeltaBytes(t);
    this.state = {
      deltaBytes: n,
      smoothedDeltaBytes: this.smoothDeltaBytes(n),
      lastTotalBytes: null != t[0] ? t[0].bytes : 0
    }
  }
}
l(a, "defaultProps", {
  numUpdatesToShow: 30,
  updateInterval: 500,
  pointsToSmooth: 10
});
let s = a