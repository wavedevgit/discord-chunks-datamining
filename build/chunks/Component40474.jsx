/** Chunk was on web.js **/
/** chunk id: 40474, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk147925 = require("./147925.jsx"),
  Chunk317128 = require("./317128.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class f extends Chunk64700.PureComponent {
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
    } = this.props, n = e.map(this.renderBreadcrumb);
    return (0, r.jsx)(l.A, {
      justify: l.A.Justify.START,
      className: o()(u.jD, t),
      children: n
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
      } = this.props, f = e.id === n, p = () => this.handleClick(e), _ = t === a.length - 1, h = null != l ? l(e, f) : (0, r.jsx)("span", {
        className: o()(u.QF, {
          [u.aj]: f,
          [u._j]: null != i
        }),
        children: e.label
      });
      return (0, r.jsxs)("div", {
        className: o()(u.hj, {
          [u.jQ]: _
        }),
        children: [null != i ? (0, r.jsx)(s.DUT, {
          tag: "span",
          onClick: p,
          className: u.$O,
          children: h
        }) : h, _ ? null : (0, r.jsx)(c.A, {
          className: o()(u.LJ, d),
          direction: c.A.Directions.RIGHT
        })]
      }, e.id)
    })
  }
}
let p = f