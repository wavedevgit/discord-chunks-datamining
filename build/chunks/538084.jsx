/** Chunk was on web.js **/
/** chunk id: 538084, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => _,
  k: () => f
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk481060 = require("./481060.js"),
  Chunk45251 = require("./45251.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk427676 = require("./427676.js");
let d = 365,
  f = "SCHEDULED_MESSAGE_CREATE_MODAL_KEY";

function _(e) {
  let {
    channel: t,
    transitionState: n,
    onClose: o,
    prefilledTime: _
  } = e, p = a()(), h = a()().add(d, "days"), [m, g] = i.useState(null != _ ? a()(_.substring(0, 200)) : p), E = e => {
    g(e)
  }, b = e => {
    e.isValid() && g(e)
  }, y = () => {
    (0, l._e)({
      channelId: t.id,
      scheduledTimestamp: m.toISOString()
    }), (0, s.Mr3)(f)
  };
  return <s.Y0X transitionState={n} size={s.CgR.SMALL} aria-label={c.intl.string(c.t.WbFpq6)} parentComponent={"ScheduledMessageCreateModal"}>{<s.olH onClick={o} className={u.closeButton} />}{<s.xBx separator={false} className={u.header}><s.X6q variant={"heading-xl/medium"}>{c.intl.string(c.t["3+ii4O"])}</s.X6q></s.xBx>}{<s.hzk><div className={u.doubleInput}>{<div className={u.column}><s.xJW title={c.intl.string(c.t.pSZKvL)} required={true}><s.Wrb value={m} onSelect={E} minDate={p} maxDate={h} disabled={false} /></s.xJW></div>}{<div className={u.column}><s.xJW title={c.intl.string(c.t.GOmEb2)} required={true}><s.MGJ value={m} onChange={b} hideValue={false} disabled={false} /></s.xJW></div>}</div></s.hzk>}{<s.mzw className={u.footer}>{<div data-button-hoisted-classname-wrapper={true} className={u.cancelButton}><s.zxk variant={"secondary"} text={c.intl.string(c.t["ETE/oK"])} onClick={o} /></div>}{<s.zxk variant={"primary"} text={c.intl.string(c.t.iQ1Swc)} onClick={y} disabled={false} />}</s.mzw>}</s.Y0X>
}