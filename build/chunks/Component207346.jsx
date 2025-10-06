/** Chunk was on 57478 **/
/** chunk id: 207346, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk547972 = require("./547972.js"),
  Chunk703288 = require("./703288.jsx"),
  Chunk332325 = require("./332325.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk385529 = require("./385529.js");

function d(e) {
  let {
    filterQuery: t,
    setFilterQuery: n,
    onClose: d,
    sortOrder: p,
    setSortOrder: m
  } = e;
  return (0, l.jsxs)(r.xBx, {
    className: u.root,
    separator: false,
    children: [(0, l.jsx)(r.AlX, {
      size: "xs",
      color: "currentColor",
      className: u.icon
    }), (0, l.jsx)(r.X6q, {
      className: u.title,
      variant: "heading-xxl/bold",
      children: c.intl.string(c.t.z2jK6e)
    }), (0, l.jsx)("div", {
      className: u.betaTag,
      children: (0, l.jsx)(o.Z, {})
    }), (0, l.jsx)(r.E1j, {
      autoFocus: true,
      placeholder: c.intl.string(c.t["5h0QOD"]),
      query: t,
      onChange: n,
      onClear: () => n("")
    }), (0, l.jsx)(r.PhF, {
      placeholder: c.intl.string(c.t["0XtAW1"]),
      className: u.sortInput,
      options: [{
        value: "descending",
        label: c.intl.string(c.t.SCsC5u)
      }, {
        value: "ascending",
        label: c.intl.string(c.t.fdx7aG)
      }],
      isSelected: e => e === p,
      select: m,
      serialize: e => e
    }), (0, l.jsx)(a.zx, {
      color: a.Tt.TRANSPARENT,
      size: a.zx.Sizes.NONE,
      className: u.settingsButton,
      look: a.zx.Looks.FILLED,
      onClick: () => {
        (0, i.Z)(s.Z.CLIPS), d()
      },
      children: (0, l.jsx)(r.ewm, {
        size: "md",
        color: "currentColor"
      })
    }), (0, l.jsx)(r.olH, {
      className: u.button,
      onClick: d
    })]
  })
}