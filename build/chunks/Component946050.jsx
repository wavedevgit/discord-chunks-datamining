/** Chunk was on 13873 **/
/** chunk id: 946050, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk670044 = require("./670044.js"),
  Chunk28391 = require("./28391.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk637177 = require("./637177.js");

function u(e) {
  let {
    channel: t,
    clearUnreadsNotice: n
  } = e;
  return (0, r.jsxs)("div", {
    className: c.notice,
    children: [(0, r.jsx)(l.Z, {
      id: t.id
    }), (0, r.jsx)("div", {
      className: c.info,
      children: (0, r.jsx)(i.Text, {
        variant: "text-sm/medium",
        children: s.intl.format(s.t.P6Y2N1, {})
      })
    }), (0, r.jsx)(i.Button, {
      variant: "secondary",
      text: s.intl.string(s.t.KyUKhT),
      icon: i.UEU,
      size: "sm",
      onClick: () => {
        (0, a.Z)(t.guild_id, t.id, o.ic.UNREADS_ONLY_MENTIONS), n()
      }
    })]
  })
}