/** Chunk was on 21738 **/
/** chunk id: 957358, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk998304 = require("./998304.js"),
  Chunk542692 = require("./542692.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class d extends(r = Chunk64700.PureComponent) {
  onDataUpdate(e, t) {
    let {
      maxValue: n,
      data: r,
      animate: i
    } = this.props, l = null == e || e.data !== t.data && !s().isEqual(e.data, t.data);
    if (l && (this.dataChangedAt = performance.now(), this.maxValue = null != n ? n : Math.max(...r)), l || null == e || !e.animate && i || e.color !== this.props.color) {
      let e = o.E2(this.props.color);
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
    return (0, i.jsx)("div", {
      className: e,
      children: (0, i.jsx)("canvas", {
        ref: this.canvas,
        className: c.J,
        width: t,
        height: n
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
        h = r.getContext("2d"),
        f = this.maxValue;
      h.strokeStyle = a, h.lineWidth = c;
      let g = r.height - h.lineWidth,
        m = h.createLinearGradient(0, 0, 0, g);
      if (null != d) m.addColorStop(0, d);
      else {
        let {
          r: e,
          g: t,
          b: n
        } = o.E2(a);
        m.addColorStop(0, "rgba(".concat(e, ", ").concat(t, ", ").concat(n, ", 0)"))
      }
      m.addColorStop(1, this.fillColor), h.fillStyle = m;
      let A = i.length >= s ? s : i.length;
      h.setTransform(1, 0, 0, false, 0, r.height), h.clearRect(0, 0, r.width, r.height), h.translate(0, .5 * h.lineWidth);
      let _ = Math.floor(r.width / (A - 3)),
        b = .5 * _;
      h.translate(_ - _ * p, 0), h.beginPath();
      let E = -_;
      i.forEach((e, r) => {
        t = {
          x: E,
          y: g * e / f
        }, 0 === r ? h.moveTo(t.x, t.y) : h.bezierCurveTo(n.x + b, n.y, t.x - b, t.y, t.x, t.y), n = t, E += _
      }), h.stroke(), h.lineTo(E - _, 0), h.lineTo(0, 0), h.fill(), u && p < 1 && (this.animationFrameRequestId = window.requestAnimationFrame(this.updateAnimation))
    })
  }
}
u(d, "defaultProps", {
  animate: true
});
let p = d