/** Chunk was on 44799 **/
/** chunk id: 767218, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p,
  b: () => d
});
var r, Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk657707 = require("./657707.js"),
  Chunk793030 = require("./793030.js"),
  Chunk692547 = require("./692547.js"),
  Chunk93841 = require("./93841.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk65418 = require("./65418.js"),
  d = ((r = {})[r.AVAILABLE = 0] = "AVAILABLE", r[r.SPENT = 1] = "SPENT", r[r.TOTAL = 2] = "TOTAL", r);

function p(e) {
  let {
    count: t,
    type: n
  } = e;
  return (0, o.jsxs)("div", {
    className: c.container,
    children: [(0, o.jsxs)("div", {
      className: c.headerContainer,
      children: [(0, o.jsx)(i.$Eu, {
        size: "sm",
        color: 0 !== n ? s.Z.colors.HEADER_MUTED : s.Z.unsafe_rawColors.GUILD_BOOSTING_PINK
      }), (0, o.jsx)(l.X6, {
        color: 0 !== n ? "header-muted" : "header-primary",
        variant: "heading-lg/semibold",
        children: t
      })]
    }), (0, o.jsx)(l.xv, {
      color: "header-muted",
      variant: "text-sm/medium",
      children: (() => {
        switch (n) {
          case 0:
            return u.intl.formatToPlainString(a.default.BdRXZG, {
              boostCount: t
            });
          case 1:
            return u.intl.formatToPlainString(a.default.xvgIVF, {
              boostCount: t
            });
          case 2:
            return u.intl.string(a.default["/F7Z29"])
        }
      })()
    })]
  })
}