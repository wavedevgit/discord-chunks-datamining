/** Chunk was on web.js **/
/** chunk id: 691337, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk259580 = require("./259580.jsx"),
  Chunk843491 = require("./843491.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class f extends Chunk647438.PureComponent {
  handleClick(e) {
    let {
      onBreadcrumbClick: t
    } = this.props;
    null != t && t(e)
  }
  render() {
    let {
      breadcrumbs: e,
      className: t
    } = this.props, n = module.map(this.renderBreadcrumb);
    return (0, Chunk951288.jsx)(Chunk600164.Z, {
      justify: Chunk600164.Z.Justify.START,
      className: o()(Chunk843491.breadcrumbs, exports),
      children: require
    })
  }
  constructor(...e) {
    super(...e), d(this, "renderBreadcrumb", (e, t) => {
      let {
        activeId: n,
        onBreadcrumbClick: i,
        breadcrumbs: a,
        renderCustomBreadcrumb: l,
        separatorClassName: d
      } = this.props, f = e.id === n, _ = () => this.handleClick(e), p = t === a.length - 1, h = null != l ? l(e, f) : (0, r.jsx)("span", {
        className: o()(u.breadcrumb, {
          [u.activeBreadcrumb]: f,
          [u.interactiveBreadcrumb]: null != i
        }),
        children: e.label
      });
      return (0, r.jsxs)("div", {
        className: o()(u.breadcrumbWrapper, {
          [u.breadcrumbFinalWrapper]: p
        }),
        children: [null != i ? (0, r.jsx)(s.P3F, {
          tag: "span",
          onClick: _,
          className: u.breadcrumbClickWrapper,
          children: h
        }) : h, p ? null : (0, r.jsx)(c.Z, {
          className: o()(u.breadcrumbArrow, d),
          direction: c.Z.Directions.RIGHT
        })]
      }, e.id)
    })
  }
}
let _ = f