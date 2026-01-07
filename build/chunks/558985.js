/** Chunk was on web.js **/
/** chunk id: 558985, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => d
}), require("./388685.js"), require("./415506.js");
var r, Chunk473749 = require("./473749.js"),
  Chunk772848 = require("./772848.js"),
  Chunk324404 = require("./324404.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = (0, Chunk772848.Z)(),
  c = new Map,
  u = new Map;
class d extends(r = Chunk473749.Component) {
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
    super(e), s(this, "elementId", true), s(this, "isVisible", false);
    let {
      root: t,
      rootMargin: n,
      threshold: r
    } = e;
    t ? c.has(t) ? this.elementId = c.get(t) || "" : c.set(t, (0, a.Z)()) : this.elementId = l;
    let i = this.getVisibilityObserverId();
    u.has(i) || u.set(i, new o.Z({
      root: t,
      rootMargin: n,
      threshold: r
    }))
  }
}
s(d, "defaultProps", {
  active: true,
  children: Chunk473749.createElement("span"),
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: [0, 5e-324]
})