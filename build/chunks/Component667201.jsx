/** Chunk was on web.js **/
/** chunk id: 667201, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk573648 = require("./573648.js"),
  Chunk541806 = require("./541806.js"),
  Chunk261020 = require("./261020.js"),
  Chunk83971 = require("./83971.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk962173 = require("./962173.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function h(e) {
  let {
    activity: t,
    entry: n,
    display: h,
    onAction: m,
    onClose: g
  } = e, E = (0, i.bG)([f.A], () => null != f.A.getAccount(null, p.fg2.CRUNCHYROLL));
  if (!(0, o.A)(t) && !(0, c.CU)(n)) return null;
  if (!E) return (0, r.jsx)(a.Drp, {
    id: "connect-crunchyroll",
    label: _.intl.formatToPlainString(_.t.XWSHTb, {
      platform: s.A.get(p.fg2.CRUNCHYROLL).name
    }),
    action: () => {
      null == m || m({
        action: "PRESS_CONNECT_CRUNCHYROLL_MENU_ITEM"
      }), (0, d.openUserSettings)(u.X.CONNECTIONS_PANEL, {
        section: p.nc_.CONNECTIONS
      }), null == g || g()
    }
  });
  if ("recent" !== h || !(0, c.CU)(n)) return null;
  let y = n.extra.url;
  return null == y || "" === y ? null : (0, r.jsx)(a.Drp, {
    id: "watch-on-crunchyroll",
    label: _.intl.string(_.t.OpxQVH),
    action: () => {
      null == m || m({
        action: "PRESS_WATCH_ON_CRUNCHYROLL_MENU_ITEM"
      }), (0, l.C)(y)
    }
  })
}