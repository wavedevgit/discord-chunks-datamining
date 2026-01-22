/** Chunk was on 71138 **/
/** chunk id: 522278, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk603349 = require("./603349.jsx"),
  Chunk518959 = require("./518959.js");
let m = ["firCount", "nackCount"];
class p extends Chunk64700.PureComponent {
  renderValueIcon() {
    let {
      label: e
    } = this.props;
    return m.includes(e) ? (0, r.jsx)(c.A, {
      color: s.A.unsafe_rawColors.YELLOW_300.css,
      className: u.nm
    }) : null
  }
  render() {
    let {
      children: e,
      className: t,
      valueRendered: n,
      section: a,
      label: i,
      renderGraph: s
    } = this.props;
    return (0, r.jsxs)(d.A, {
      className: l()(u.AS, t),
      direction: d.A.Direction.VERTICAL,
      basis: "50%",
      children: [(0, r.jsxs)(d.A, {
        className: u.l5,
        align: d.A.Align.START,
        children: [(0, r.jsx)(d.A.Child, {
          children: (0, r.jsx)(o.H, {
            className: u.DD,
            children: e
          })
        }), Array.isArray(n) ? (0, r.jsx)(d.A.Child, {
          grow: 1,
          children: n
        }) : (0, r.jsxs)(d.A.Child, {
          grow: 0,
          shrink: 0,
          children: [this.renderValueIcon(), (0, r.jsx)("span", {
            className: u.R$,
            title: n,
            children: n
          })]
        })]
      }), null !== s && (0, r.jsx)(d.A.Child, {
        className: u.JB,
        children: s
      }, null != a ? "".concat(a, "-").concat(i) : i), (0, r.jsx)(o.cGx, {
        className: u.yF
      })]
    })
  }
}