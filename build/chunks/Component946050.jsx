/** Chunk was on web.js **/
/** chunk id: 946050, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk670044 = require("./670044.js"),
  Chunk28391 = require("./28391.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk169358 = require("./169358.js");

function d(e) {
  let {
    channel: t,
    clearUnreadsNotice: n
  } = e;
  return (0, r.jsxs)("div", {
    className: u.notice,
    children: [(0, r.jsx)(a.Z, {
      id: t.id
    }), (0, r.jsx)("div", {
      className: u.info,
      children: (0, r.jsx)(o.Text, {
        variant: "text-sm/medium",
        children: c.intl.format(c.t.P6Y2Nz, {})
      })
    }), (0, r.jsx)("div", {
      className: u.buttons,
      children: (0, r.jsxs)(i.zx, {
        size: i.zx.Sizes.TINY,
        look: i.zx.Looks.FILLED,
        color: i.zx.Colors.PRIMARY,
        className: u.button,
        innerClassName: u.buttonInner,
        onClick: () => {
          (0, s.Z)(t.guild_id, t.id, l.ic.UNREADS_ONLY_MENTIONS), n()
        },
        children: [c.intl.string(c.t.KyUKhY), (0, r.jsx)(o.UEU, {
          size: "xs",
          color: "currentColor",
          style: {
            marginLeft: 4
          }
        })]
      })
    })]
  })
}