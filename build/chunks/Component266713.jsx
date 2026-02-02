/** Chunk was on 51693 **/
/** chunk id: 266713, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk725386 = require("./725386.js"),
  Chunk624160 = require("./624160.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk190401 = require("./190401.js");

function d() {
  let {
    trackUserProfileAction: e,
    trackUserProfileEditAction: t
  } = (0, a.NJ)(), n = l.useRef(false), d = (0, o.A)({
    location: "UserProfileModalV2WidgetsEmptyState"
  });
  return l.useEffect(() => {
    n.current || (e({
      action: "VIEW_WIDGETS_EMPTY_STATE"
    }), n.current = true)
  }, [e]), (0, r.jsxs)("div", {
    className: u.Ie,
    children: [(0, r.jsxs)("div", {
      className: u.FS,
      children: [(0, r.jsx)(i.Heading, {
        variant: "heading-md/medium",
        color: "text-strong",
        children: c.intl.string(c.t["oqalC+"])
      }), (0, r.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: c.intl.string(c.t.O9SQ1c)
      })]
    }), (0, r.jsx)("ul", {
      className: u.ZW,
      "aria-label": c.intl.string(c.t["+EIBSA"]),
      children: d.map(e => (0, r.jsx)("li", {
        children: (0, r.jsx)(s.A, {
          widget: e,
          size: "small",
          trackUserProfileEditAction: t
        })
      }, e.getUniqueKey()))
    })]
  })
}