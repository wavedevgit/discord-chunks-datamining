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
  return (0, l.jsxs)(a.xBx, {
    className: u.root,
    separator: false,
    children: [(0, l.jsx)(a.AlX, {
      size: "xs",
      color: "currentColor",
      className: u.icon
    }), (0, l.jsx)(a.X6q, {
      className: u.title,
      variant: "heading-xxl/bold",
      children: s.intl.string(s.t.z2jK6e)
    }), (0, l.jsx)("div", {
      className: u.betaTag,
      children: (0, l.jsx)(o.Z, {})
    }), (0, l.jsx)(a.E1j, {
      autoFocus: true,
      placeholder: s.intl.string(s.t["5h0QOD"]),
      className: u.queryInput,
      query: t,
      onChange: n,
      onClear: () => n("")
    }), (0, l.jsx)(a.PhF, {
      placeholder: s.intl.string(s.t["0XtAW1"]),
      className: u.sortInput,
      options: [{
        value: "descending",
        label: s.intl.string(s.t.SCsC5u)
      }, {
        value: "ascending",
        label: s.intl.string(s.t.fdx7aG)
      }],
      isSelected: e => e === p,
      select: m,
      serialize: e => e
    }), (0, l.jsx)(r.zx, {
      color: r.Tt.TRANSPARENT,
      size: r.zx.Sizes.NONE,
      className: u.settingsButton,
      look: r.zx.Looks.FILLED,
      onClick: () => {
        (0, i.Z)(c.Z.CLIPS), d()
      },
      children: (0, l.jsx)(a.ewm, {
        size: "md",
        color: "currentColor"
      })
    }), (0, l.jsx)(a.olH, {
      className: u.button,
      onClick: d
    })]
  })
}