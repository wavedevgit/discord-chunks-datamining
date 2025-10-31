/** Chunk was on 41619 **/
/** chunk id: 379760, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk7557 = require("./7557.jsx"),
  Chunk388905 = require("./388905.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk158017 = require("./158017.js"),
  Chunk197571 = require("./197571.js");

function d(e) {
  let {
    title: t,
    subtitle: r,
    error: d,
    onSubmit: h,
    onCancel: p
  } = e;
  return (0, n.jsxs)(i.Z, {
    direction: i.Z.Direction.VERTICAL,
    children: [(0, n.jsx)(o.Dx, {
      className: u.marginBottom8,
      children: t
    }), (0, n.jsx)(o.DK, {
      className: c.subTitle,
      children: r
    }), (0, n.jsxs)("div", {
      children: [(0, n.jsx)(a.Z, {
        inputClassName: c.codeInput,
        onSubmit: h
      }), null != d ? (0, n.jsx)(s.Text, {
        className: c.error,
        variant: "text-sm/normal",
        children: d
      }) : null]
    }), null != p && (0, n.jsx)("div", {
      className: c.button,
      children: (0, n.jsx)(s.Button, {
        text: l.intl.string(l.t["ETE/oC"]),
        variant: "secondary",
        fullWidth: true,
        onClick: p
      })
    })]
  })
}