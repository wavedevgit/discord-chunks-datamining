/** Chunk was on web.js **/
/** chunk id: 946050, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk670044 = require("./670044.js"),
  Chunk28391 = require("./28391.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk58102 = require("./58102.js");

function u(e) {
  let {
    channel: t,
    clearUnreadsNotice: n
  } = e;
  return (0, r.jsxs)("div", {
    className: c.notice,
    children: [(0, r.jsx)(o.Z, {
      id: t.id
    }), (0, r.jsx)("div", {
      className: c.info,
      children: (0, r.jsx)(i.Text, {
        variant: "text-sm/medium",
        children: l.intl.format(l.t.P6Y2Nz, {})
      })
    }), (0, r.jsx)(i.zxk, {
      variant: "secondary",
      text: l.intl.string(l.t.KyUKhY),
      icon: i.UEU,
      size: "sm",
      onClick: () => {
        (0, a.Z)(t.guild_id, t.id, s.ic.UNREADS_ONLY_MENTIONS), n()
      }
    })]
  })
}