/** Chunk was on web.js **/
/** chunk id: 666984, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk620662 = require("./620662.js"),
  Chunk503438 = require("./503438.js"),
  Chunk829820 = require("./829820.js"),
  Chunk395361 = require("./395361.jsx"),
  Chunk652853 = require("./652853.jsx"),
  Chunk475413 = require("./475413.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk227832 = require("./227832.js");

function m(e) {
  var t, n, m, g;
  let {
    user: E,
    activity: b,
    onAction: y
  } = e, {
    themeType: O
  } = (0, u.z)(), v = (0, l.Ih)(b, E), I = (0, l.Fe)(b, E);
  if (!(0, s.Z)(b) || !(0, a.Z)(b, _.xjy.PLAY) && !(0, a.Z)(b, _.xjy.SYNC)) return null;
  let T = e => {
      null == e || e.stopPropagation(), null == y || y({
        action: "PRESS_PLAY_ON_SPOTIFY_BUTTON"
      }), v.onClick()
    },
    S = e => {
      e.stopPropagation(), null == y || y({
        action: "PRESS_LISTEN_ALONG_ON_SPOTIFY_BUTTON"
      }), I.onClick()
    };
  return O === f.lY.MODAL_V2 ? <r.Fragment>{<o.DY3 text={I.tooltip}><d.tG text={null != (t = I.label) ? t : p.intl.string(p.t.eU3inJ)} disabled={I.disabled} submitting={I.loading} size={i.Ph.TINY} themeColor={"secondary"} onClick={S} /></o.DY3>}{<o.DY3 text={v.tooltip}><d.tG text={null != (n = v.label) ? n : p.intl.string(p.t.rRffNz)} disabled={v.disabled} submitting={v.loading} size={i.Ph.TINY} themeColor={"secondary"} onClick={T} /></o.DY3>}</r.Fragment> : <r.Fragment>{<o.DY3 text={v.tooltip} className={h.primaryButton}><d.tG icon={() => (0, r.jsx)(c.Z, {})} text={null != (m = v.label) ? m : p.intl.string(p.t.rRffNz)} disabled={v.disabled} submitting={v.loading} wrapperClassName={h.primaryButton} themeColor={"secondary"} fullWidth={true} onClick={T} /></o.DY3>}{<d.ef icon={o.iOO} tooltipText={null != (g = I.tooltip) ? g : p.intl.string(p.t.eU3inJ)} disabled={I.disabled} submitting={I.loading} themeColor={"secondary"} fullWidth={true} onClick={S} />}</r.Fragment>
}