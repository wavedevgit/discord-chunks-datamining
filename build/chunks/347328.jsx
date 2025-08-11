/** Chunk was on web.js **/
/** chunk id: 347328, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk726542 = require("./726542.js"),
  Chunk394821 = require("./394821.js"),
  Chunk740605 = require("./740605.js"),
  Chunk180335 = require("./180335.js"),
  Chunk553795 = require("./553795.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js");

function p(e) {
  let {
    activity: t,
    entry: n,
    display: p,
    onAction: h,
    onClose: m
  } = e, g = (0, i.e7)([d.Z], () => null != d.Z.getAccount(null, f.ABu.CRUNCHYROLL));
  if (!(0, l.Z)(t) && !(0, u.gr)(n)) return null;
  if (!g) return <o.sNh id={"connect-crunchyroll"} label={_.intl.formatToPlainString(_.t.XWSHTU, {
      platform: s.Z.get(f.ABu.CRUNCHYROLL).name
    })} action={() => {
      null == h || h({
        action: "PRESS_CONNECT_CRUNCHYROLL_MENU_ITEM"
      }), a.Z.open(f.oAB.CONNECTIONS), null == m || m()
    }} />;
  if ("recent" !== p || !(0, u.gr)(n)) return null;
  let E = n.extra.url;
  return null == E || "" === E ? null : <o.sNh id={"watch-on-crunchyroll"} label={_.intl.string(_.t.OpxQVF)} action={() => {
      null == h || h({
        action: "PRESS_WATCH_ON_CRUNCHYROLL_MENU_ITEM"
      }), (0, c.Y)(E)
    }} />
}