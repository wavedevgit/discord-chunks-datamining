/** Chunk was on 2668 **/
/** chunk id: 207346, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk547972 = require("./547972.js"),
  Chunk703288 = require("./703288.jsx"),
  Chunk332325 = require("./332325.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk864813 = require("./864813.js");

function d(e) {
  let {
    filterQuery: t,
    setFilterQuery: n,
    onClose: d,
    sortOrder: p,
    setSortOrder: m
  } = e;
  return (0, r.jsxs)(a.xBx, {
    className: u.root,
    separator: false,
    children: [(0, r.jsx)(a.AlX, {
      size: "xs",
      color: "currentColor",
      className: u.icon
    }), (0, r.jsx)(a.X6q, {
      className: u.title,
      variant: "heading-xxl/bold",
      children: c.intl.string(c.t.z2jK6e)
    }), (0, r.jsx)("div", {
      className: u.betaTag,
      children: (0, r.jsx)(o.Z, {})
    }), (0, r.jsx)(a.E1j, {
      autoFocus: true,
      placeholder: c.intl.string(c.t["5h0QOD"]),
      className: u.queryInput,
      query: t,
      onChange: n,
      onClear: () => n("")
    }), (0, r.jsx)(a.PhF, {
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
    }), (0, r.jsx)(l.zx, {
      color: l.Tt.TRANSPARENT,
      size: l.zx.Sizes.NONE,
      className: u.settingsButton,
      look: l.zx.Looks.FILLED,
      onClick: () => {
        (0, i.Z)(s.Z.CLIPS), d()
      },
      children: (0, r.jsx)(a.ewm, {
        size: "md",
        color: "currentColor"
      })
    }), (0, r.jsx)(a.olH, {
      className: u.button,
      onClick: d
    })]
  })
}