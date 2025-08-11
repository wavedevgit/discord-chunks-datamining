/** Chunk was on 75708 **/
/** chunk id: 249881, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  t: () => m
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.js"),
  Chunk460356 = require("./460356.js");
let u = e => {
    let {
      markAsDismissed: t
    } = e;
    return r.useEffect(() => t(o.L.UNKNOWN), [t]), <a.IGR className={d.newBadge} text={c.intl.string(c.t.y2b7CA)} />
  },
  m = e => {
    let {
      title: t,
      body: n,
      img: r,
      newIndicatorDismissibleContent: o,
      onClick: m
    } = e;
    return <div className={d.container}>{r}{<div className={d.textContainer}>{<div className={d.headerText}>{<l.ZP contentTypes={[o]}>{e => {
              let {
                visibleContent: t,
                markAsDismissed: n
              } = e;
              return t === o ? (0, i.jsx)(u, {
                markAsDismissed: n
              }) : null
            }}</l.ZP>}{<a.Text variant={"text-md/semibold"}>{t}</a.Text>}</div>}{<a.Text variant={"text-xs/normal"}>{n}</a.Text>}</div>}{<s.zx size={s.Ph.MEDIUM} onClick={m} className={d.reconnectButton}>{c.intl.string(c.t.vD60Pj)}</s.zx>}</div>
  }