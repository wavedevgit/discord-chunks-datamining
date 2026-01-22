/** Chunk was on web.js **/
/** chunk id: 416887, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => d
}), require("./896048.js"), require("./65821.js");
var r, Chunk64700 = require("./64700.js"),
  Chunk835245 = require("./835245.js"),
  Chunk313271 = require("./313271.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = (0, Chunk835245.A)(),
  c = new Map,
  u = new Map;
class d extends(r = Chunk64700.Component) {
  componentDidMount() {
    if (this.props.active) {
      let e = this.getVisibilityObserver();
      e.observe(this, this.props.innerRef), this.isVisible = e.isVisible(this), this.props.onChange(this.isVisible)
    }
  }
  componentDidUpdate(e) {
    let t = this.getVisibilityObserver(),
      n = t.isVisible(this);
    this.props.active && n !== this.isVisible && this.props.onChange(n), !e.active && this.props.active ? t.observe(this, this.props.innerRef) : e.active && !this.props.active && t.unobserve(this), this.isVisible = n
  }
  componentWillUnmount() {
    this.getVisibilityObserver().unobserve(this)
  }
  getVisibilityObserverId() {
    let {
      rootMargin: e,
      threshold: t
    } = this.props;
    return "".concat(this.elementId, " ").concat(e, " ").concat(t)
  }
  getVisibilityObserver() {
    let e = this.getVisibilityObserverId(),
      t = u.get(e);
    if (!t) throw Error("Visibility sensor with id ".concat(e, " not found."));
    return t
  }
  render() {
    return i.Children.only(this.props.children)
  }
  constructor(e) {
    super(e), o(this, "elementId", true), o(this, "isVisible", false);
    const {
      root: t,
      rootMargin: n,
      threshold: r
    } = e;
    t ? c.has(t) ? this.elementId = c.get(t) || "" : c.set(t, (0, a.A)()) : this.elementId = l;
    const i = this.getVisibilityObserverId();
    u.has(i) || u.set(i, new s.j({
      root: t,
      rootMargin: n,
      threshold: r
    }))
  }
}
o(d, "defaultProps", {
  active: true,
  children: Chunk64700.createElement("span"),
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: [0, 5e-324]
})