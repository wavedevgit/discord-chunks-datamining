/** Chunk was on 25761 **/
/** chunk id: 379760, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
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

function p(e) {
  let {
    title: t,
    subtitle: n,
    error: p,
    onSubmit: h,
    onCancel: f
  } = e;
  return (0, r.jsxs)(a.Z, {
    direction: a.Z.Direction.VERTICAL,
    children: [(0, r.jsx)(o.Dx, {
      className: d.marginBottom8,
      children: t
    }), (0, r.jsx)(o.DK, {
      className: u.subTitle,
      children: n
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(l.Z, {
        inputClassName: u.codeInput,
        onSubmit: h
      }), null != p ? (0, r.jsx)(i.Text, {
        className: u.error,
        variant: "text-sm/normal",
        children: p
      }) : null]
    }), null != f && (0, r.jsx)(s.zx, {
      className: u.button,
      onClick: f,
      color: s.zx.Colors.PRIMARY,
      children: c.intl.string(c.t["ETE/oK"])
    })]
  })
}