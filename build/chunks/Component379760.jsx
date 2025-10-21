/** Chunk was on 41619 **/
/** chunk id: 379760, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk7557 = require("./7557.jsx"),
  Chunk388905 = require("./388905.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk158017 = require("./158017.js"),
  Chunk197571 = require("./197571.js");

function h(e) {
  let {
    title: t,
    subtitle: r,
    error: h,
    onSubmit: p,
    onCancel: f
  } = e;
  return (0, n.jsxs)(o.Z, {
    direction: o.Z.Direction.VERTICAL,
    children: [(0, n.jsx)(l.Dx, {
      className: d.marginBottom8,
      children: t
    }), (0, n.jsx)(l.DK, {
      className: u.subTitle,
      children: r
    }), (0, n.jsxs)("div", {
      children: [(0, n.jsx)(a.Z, {
        inputClassName: u.codeInput,
        onSubmit: p
      }), null != h ? (0, n.jsx)(i.Text, {
        className: u.error,
        variant: "text-sm/normal",
        children: h
      }) : null]
    }), null != f && (0, n.jsx)(s.zx, {
      className: u.button,
      onClick: f,
      color: s.zx.Colors.PRIMARY,
      children: c.intl.string(c.t["ETE/oC"])
    })]
  })
}