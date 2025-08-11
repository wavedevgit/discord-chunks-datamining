/** Chunk was on 5749 **/
/** chunk id: 684471, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk442837 = require("./442837.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk473092 = require("./473092.js"),
  Chunk955708 = require("./955708.js"),
  Chunk850165 = require("./850165.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk948582 = require("./948582.js"),
  Chunk282668 = require("./282668.js");

function h(t) {
  let {
    senderId: e,
    trackAnalyticsEvent: n,
    onNavigate: h
  } = t, g = (0, s.e7)([a.default], () => {
    let t = a.default.getUser(e);
    return o.ZP.getName(t)
  });
  return <d.Z header={u.intl.string(u.t.sSMgCw)} description={u.intl.formatToPlainString(u.t.q2QrTU, {
      username: g
    })} heroImageSrc={p} heroImageAlt={u.intl.string(u.t["3QhxXF"])}><div className={x.buttonContainer}>{<r.zxk text={u.intl.string(u.t["+o4Q7e"])} variant={"primary"} fullWidth={true} onClick={() => {
          h(l.x.TAKE_ACTION), n(c.NM.USER_TAKEOVER_MODAL_TAKE_ACTION)
        }} />}{<r.zxk text={u.intl.string(u.t.xLkGzM)} variant={"secondary"} fullWidth={true} onClick={() => {
          h(l.x.SAFETY_TIPS), n(c.NM.USER_TAKEOVER_MODAL_SAFETY_TIPS)
        }} />}</div></d.Z>
}