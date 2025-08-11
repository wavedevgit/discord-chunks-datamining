/** Chunk was on 69773 **/
/** chunk id: 581690, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => m
}), require("./35282.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk198993 = require("./198993.jsx"),
  Chunk885006 = require("./885006.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk679895 = require("./679895.js");
let Chunk412998 = require("./412998.js"),
  Chunk515695 = require("./515695.js"),
  p = "".concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT.split("//")[1]).concat(Chunk981631.Z5c.ACTIVATE),
  h = "".concat(location.protocol, "//").concat(p);

function x(e) {
  let {
    text: t = ""
  } = e, [n, l] = r.useState(false);
  return r.useEffect(() => {
    let e = new Image;
    e.src = f, e.onload = () => l(true), e.onerror = () => l(true)
  }, [f]), "" !== t && n ? <a.Fragment>{<i.ZP size={288} text={t} />}{<div className={d.qrcodeOverlay}><img src={f} alt={""} /></div>}</a.Fragment> : <div className={d.qrcodeSpinner}><o.$jN type={o.$jN.Type.WANDERING_CUBES} /></div>
}
let m = e => {
  var t;
  let {
    code: n
  } = e, {
    width: r,
    height: i
  } = (0, l.Z)();
  return null == n || 0 === n.length ? null : <div className={d.panel} style={{
      zoom: Math.min(r / 1460, i / 1080, 1)
    }}>{<div className={d.panelHeader}><div className={d.logo} /></div>}{<div className={d.panelContent}>{<div className={d.qrcodeContent}>{<div className={d.qrcodeCard}><x text={"".concat(h, "?user_code=").concat(encodeURIComponent(n))} /></div>}{<div className={d.qrcodeText}>{<o.X6q variant={"heading-xxl/semibold"} color={"header-primary"} className={d.qrcodeTextHeading}>{c.intl.string(c.t.llDCiY)}</o.X6q>}{<o.X6q variant={"heading-xxl/normal"} color={"header-secondary"}>{c.intl.string(c.t.JfHzXF)}</o.X6q>}</div>}</div>}{<div className={d.dividerContent}>{<div className={d.divider} />}{<o.X6q variant={"heading-lg/semibold"} color={"header-primary"} className={d.dividerText}>{c.intl.string(c.t.arEHn5)}</o.X6q>}{<div className={d.divider} />}</div>}{<div className={d.fallbackContent}>{<div className={d.fallbackContentTextGroup}>{<o.X6q variant={"heading-xxl/semibold"} color={"header-primary"} className={d.fallbackContentHeading}>{c.intl.string(c.t.Eu8rJy)}</o.X6q>}{<o.X6q variant={"heading-xxl/normal"} color={"header-secondary"}>{c.intl.string(c.t.BkEMJy)}</o.X6q>}</div>}{<div className={d.fallbackContentAction}>{<o.X6q variant={"heading-xxl/semibold"} color={"header-primary"} className={d.fallbackContentHeading}>{p}</o.X6q>}{<div className={d.fallbackContentTextGroup}>{<o.X6q variant={"heading-xxl/normal"} color={"header-secondary"}>{c.intl.string(c.t.RyDxBQ)}</o.X6q>}{<o.X6q variant={"heading-xxl/bold"} color={"header-primary"} className={d.fallbackContentCode}>{null == (t = n.match(/.{1,4}/g)) ? true : t.join(" ")}</o.X6q>}</div>}</div>}</div>}{<img className={d.wumpus} src={u} alt={""} />}</div>}</div>
}