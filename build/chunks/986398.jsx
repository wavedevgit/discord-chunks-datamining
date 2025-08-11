/** Chunk was on web.js **/
/** chunk id: 986398, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk255367 = require("./255367.js"),
  Chunk81063 = require("./81063.js"),
  Chunk388032 = require("./388032.jsx");

function a(e) {
  let {
    leaderboard: t,
    className: n,
    ref: a
  } = e, s = (0, i.xF)(t.settings.application_id, t.settings.winner_asset_id);
  return null == s ? null : <img className={n} src={s} alt={o.intl.string(o.t.QyRmzc)} ref={a} />
}