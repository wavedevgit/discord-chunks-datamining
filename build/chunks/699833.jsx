/** Chunk was on web.js **/
/** chunk id: 699833, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => f
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk800530 = require("./800530.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk524438 = require("./524438.js");
let d = e => o()().diff(o().unix(e), "days");

function f(e) {
  var t, i, o, f, _;
  if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
  let p = e.message.embeds[0],
    h = null != (o = null == (t = p.fields) ? true : t.find(e => e.rawName === l.Cg.CLASSIFICATION_ID)) ? o : true,
    m = null != (f = null == h ? true : h.rawValue) ? f : true,
    g = null != (_ = null == (i = p.fields) ? true : i.find(e => e.rawName === l.Cg.INCIDENT_TIMESTAMP)) ? _ : true,
    E = null == g || null == g.rawValue ? true : parseFloat(g.rawValue);
  if (null == m || null == E) return null;
  let b = () => {
    (0, s.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("25183"), n.e("3940"), n.e("18831"), n.e("68464")]).then(n.bind(n, 41164));
      return t => <e classificationId={m} source={l.s.SystemDM} transitionState={t.transitionState} onClose={t.onClose} />
    })
  };
  return <s.P3F onClick={b} className={u.safetyPolicyNoticeContainer}>{<div className={u.noticeContent}>{<div className={u.headerRow}>{<s.aNP className={u.warningIcon} color={a.Z.colors.STATUS_DANGER} />}{<s.Text variant={"text-md/semibold"}>{c.intl.string(c.t["4CxGXl"])}</s.Text>}</div>}{<div className={u.incidentTiming}><s.Text variant={"text-xs/medium"}>{c.intl.format(c.t.eevFb2, {
            daysAgo: d(E)
          })}</s.Text></div>}{<div className={u.noticeBody}><s.Text variant={"text-md/normal"} color={"text-muted"}>{c.intl.string(c.t["5CLb0N"])}</s.Text></div>}</div>}{<div className={u.footerContainer}><s.Avr text={c.intl.string(c.t.zKnzws)} variant={"secondary"} /></div>}</s.P3F>
}