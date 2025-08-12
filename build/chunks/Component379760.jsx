/** Chunk was on 74941 **/
/** chunk id: 379760, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk7557 = require("./7557.jsx"),
  Chunk388905 = require("./388905.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk170533 = require("./170533.js"),
  Chunk881488 = require("./881488.js");

function d(e) {
  let {
    title: t,
    subtitle: r,
    error: d,
    onSubmit: p,
    onCancel: m
  } = e;
  return (0, n.jsxs)(l.Z, {
    direction: l.Z.Direction.VERTICAL,
    children: [(0, n.jsx)(a.Dx, {
      className: h.marginBottom8,
      children: t
    }), (0, n.jsx)(a.DK, {
      className: u.subTitle,
      children: r
    }), (0, n.jsxs)("div", {
      children: [(0, n.jsx)(o.Z, {
        inputClassName: u.codeInput,
        onSubmit: p
      }), null != d ? (0, n.jsx)(i.Text, {
        className: u.error,
        variant: "text-sm/normal",
        children: d
      }) : null]
    }), null != m && (0, n.jsx)(s.zx, {
      className: u.button,
      onClick: m,
      color: s.zx.Colors.PRIMARY,
      children: c.intl.string(c.t["ETE/oK"])
    })]
  })
}