/** Chunk was on web.js **/
/** chunk id: 347328, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk726542 = require("./726542.js"),
  Chunk394821 = require("./394821.js"),
  Chunk740605 = require("./740605.js"),
  Chunk180335 = require("./180335.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk553795 = require("./553795.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function h(e) {
  let {
    activity: t,
    entry: n,
    display: h,
    onAction: m,
    onClose: g
  } = e, E = (0, i.e7)([f.Z], () => null != f.Z.getAccount(null, p.ABu.CRUNCHYROLL));
  if (!(0, s.Z)(t) && !(0, c.gr)(n)) return null;
  if (!E) return (0, r.jsx)(a.sNh, {
    id: "connect-crunchyroll",
    label: _.intl.formatToPlainString(_.t.XWSHTb, {
      platform: o.Z.get(p.ABu.CRUNCHYROLL).name
    }),
    action: () => {
      null == m || m({
        action: "PRESS_CONNECT_CRUNCHYROLL_MENU_ITEM"
      }), (0, d.openUserSettings)(u.n.CONNECTIONS_PANEL, {
        section: p.oAB.CONNECTIONS
      }), null == g || g()
    }
  });
  if ("recent" !== h || !(0, c.gr)(n)) return null;
  let b = n.extra.url;
  return null == b || "" === b ? null : (0, r.jsx)(a.sNh, {
    id: "watch-on-crunchyroll",
    label: _.intl.string(_.t.OpxQVH),
    action: () => {
      null == m || m({
        action: "PRESS_WATCH_ON_CRUNCHYROLL_MENU_ITEM"
      }), (0, l.Y)(b)
    }
  })
}