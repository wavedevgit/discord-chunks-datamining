/** Chunk was on 522 **/
/** chunk id: 200623, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => C
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk198993 = require("./198993.jsx"),
  Chunk639351 = require("./639351.js"),
  Chunk63063 = require("./63063.js"),
  Chunk258609 = require("./258609.js"),
  Chunk259408 = require("./259408.js"),
  Chunk893387 = require("./893387.js"),
  Chunk927923 = require("./927923.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk403883 = require("./403883.js");

function h(e) {
  let {
    step: t,
    instructions: r
  } = e;
  return <div className={g.cardRow}>{<div className={g.stepNumberContainer}><c.Text variant={"text-sm/semibold"} className={g.stepNumber}>{t}</c.Text></div>}{<c.Text variant={"text-sm/normal"} color={"header-primary"} className={g.instructions}>{r}</c.Text>}</div>
}

function C(e) {
  let {
    channel: t,
    transitionState: r,
    onClose: C
  } = e, _ = (0, i.e7)([u.Z], () => null != u.Z.getRemoteSessionId()), j = (0, f.Z)(t, {
    forQRCode: true
  });
  return s.useEffect(() => {
    _ && C()
  }, [_, C]), s.useEffect(() => {
    (0, m.Z)(t.id, p.YE.XBOX)
  }, [t.id]), <a.Modal title={b.intl.string(b.t["f+Aijo"])} subtitle={b.intl.string(b.t.mYFmDQ)} actions={[]} onClose={C} transitionState={r}><div className={g.card}>{<div className={g.cardText}>{<c.Text variant={"text-lg/semibold"} color={"header-primary"} className={g.cardRow}>{<l.Z className={g.cardHeaderIcon} />}{b.intl.string(b.t.ZNlYbG)}</c.Text>}{<h step={1} instructions={b.intl.string(b.t.dDtkl5)} />}{<h step={2} instructions={b.intl.string(b.t.IWuXjI)} />}{<c.Text variant={"text-sm/medium"}><c.eee className={g.learnMore} href={d.Z.getArticleURL(x.BhN.XBOX_CONNECTION)}>{b.intl.string(b.t.hvVgAQ)}</c.eee></c.Text>}</div>}{<o.ZP className={g.qrCode} size={120} text={j} />}</div></a.Modal>
}