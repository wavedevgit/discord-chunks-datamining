/** Chunk was on 1272 **/
/** chunk id: 120998, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk302221 = require("./302221.js"),
  Chunk781176 = require("./781176.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class d extends(r = Chunk473749.PureComponent) {
  onDataUpdate(e, t) {
    let {
      maxValue: n,
      data: r,
      animate: i
    } = this.props, l = null == e || e.data !== t.data && !s().isEqual(e.data, t.data);
    if (l && (this.dataChangedAt = performance.now(), this.maxValue = null != n ? n : Math.max(...r)), l || null == e || !e.animate && i || e.color !== this.props.color) {
      let e = o.oo(this.props.color);
      this.fillColor = "rgba(".concat(e.r, ", ").concat(e.g, ", ").concat(e.b, ", 0.5)"), window.cancelAnimationFrame(this.animationFrameRequestId), this.animationFrameRequestId = window.requestAnimationFrame(this.updateAnimation)
    }
  }
  componentDidMount() {
    this.animationFrameRequestId = 0, this.onDataUpdate(null, this.props)
  }
  componentDidUpdate(e) {
    this.onDataUpdate(e, this.props)
  }
  componentWillUnmount() {
    window.cancelAnimationFrame(this.animationFrameRequestId), this.animationFrameRequestId = 0
  }
  render() {
    let {
      className: e,
      pixelWidth: t,
      pixelHeight: n
    } = this.props;
    return (0, Chunk54381.jsx)("div", {
      className: module,
      children: (0, Chunk54381.jsx)("canvas", {
        ref: this.canvas,
        className: Chunk781176.canvas,
        width: exports,
        height: require
      })
    })
  }
  constructor(...e) {
    super(...e), u(this, "dataChangedAt", true), u(this, "fillColor", true), u(this, "maxValue", true), u(this, "canvas", l.createRef()), u(this, "animationFrameRequestId", true), u(this, "updateAnimation", e => {
      let t, n, r = this.canvas.current;
      if (null == r) return;
      let {
        data: i,
        updateInterval: l,
        color: a,
        numUpdatesToShow: s,
        lineWidth: c,
        animate: u,
        gradientStopColor: d
      } = this.props;
      if (i.length < 2) return;
      let p = Math.max(Math.min((e - this.dataChangedAt) / l, 1), 0),
        f = r.getContext("2d"),
        g = this.maxValue;
      f.strokeStyle = a, f.lineWidth = c;
      let h = r.height - f.lineWidth,
        m = f.createLinearGradient(0, 0, 0, h);
      if (null != d) m.addColorStop(0, d);
      else {
        let {
          r: e,
          g: t,
          b: n
        } = o.oo(a);
        m.addColorStop(0, "rgba(".concat(e, ", ").concat(t, ", ").concat(n, ", 0)"))
      }
      m.addColorStop(1, this.fillColor), f.fillStyle = m;
      let _ = i.length >= s ? s : i.length;
      f.setTransform(1, 0, 0, false, 0, r.height), f.clearRect(0, 0, r.width, r.height), f.translate(0, .5 * f.lineWidth);
      let b = Math.floor(r.width / (_ - 3)),
        E = .5 * b;
      f.translate(b - b * p, 0), f.beginPath();
      let O = -b;
      i.forEach((e, r) => {
        t = {
          x: O,
          y: h * e / g
        }, 0 === r ? f.moveTo(t.x, t.y) : f.bezierCurveTo(n.x + E, n.y, t.x - E, t.y, t.x, t.y), n = t, O += b
      }), f.stroke(), f.lineTo(O - b, 0), f.lineTo(0, 0), f.fill(), u && p < 1 && (this.animationFrameRequestId = window.requestAnimationFrame(this.updateAnimation))
    })
  }
}
u(d, "defaultProps", {
  animate: true
});
let p = d