/** Chunk was on web.js **/
/** chunk id: 346446, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h,
  r: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk50268 = require("./50268.jsx"),
  Chunk700210 = require("./700210.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk967198 = require("./967198.js"),
  Chunk211401 = require("./211401.js"),
  Chunk500049 = require("./500049.js"),
  Chunk60809 = require("./60809.js"),
  Chunk985018 = require("./985018.jsx");

function _(e) {
  var t;
  let {
    application: n
  } = e, r = null != (t = c.A.getGuildId()) ? t : true, a = () => {
    (0, i.OoC)(f.gS), (0, u.k)(d.Se.DISMISSED)
  };
  return (0, s.A)({
    application: n,
    guildId: r,
    onItemClick: a
  })
}

function h(e) {
  let {
    application: t,
    onSelect: n
  } = e, s = l.Q_.useSetting(), c = (0, o.A)({
    id: t.id,
    label: p.intl.string(p.t["+NP/b2"])
  }), u = _({
    application: t
  });
  return (0, r.jsxs)(i.W1t, {
    "data-menu-mixed": true,
    navId: "activity-shelf-item-context",
    onClose: a.Z_,
    "aria-label": p.intl.string(p.t.WkcHT9),
    onSelect: n,
    children: [null != u && (0, r.jsx)(i.rXV, {
      children: u
    }, "manage-app-actions"), s && (0, r.jsx)(i.rXV, {
      children: c
    }, "developer-actions")]
  })
}