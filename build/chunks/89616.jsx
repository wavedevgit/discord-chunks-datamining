/** Chunk was on 804 **/
/** chunk id: 89616, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => o
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk365007 = require("./365007.js"),
  Chunk388032 = require("./388032.js"),
  Chunk17379 = require("./17379.js");

function o(e) {
  let {
    transitionState: t,
    onClose: n,
    credential: o
  } = e, [d, u] = s.useState(false), [h, x] = s.useState(""), [m, p] = s.useState(true), g = s.useRef(null);
  async function j(e) {
    e.preventDefault(), u(true);
    try {
      await (0, l.WQ)(o.id, h), n()
    } catch (e) {
      p(e.message)
    } finally {
      u(false)
    }
  }
  return s.useEffect(() => {
    if (t === i.Dvm.ENTERED) {
      var e;
      null == (e = g.current) || e.focus()
    }
  }, [t]), <i.Y0X transitionState={t} parentComponent={"EditCredentialModal"}>{<i.xBx separator={false} className={c.header}>{<i.Text color={"header-secondary"} variant={"text-lg/bold"} className={c.subtitle}>{r.intl.string(r.t.YjuMsb)}</i.Text>}{<i.olH onClick={n} className={c.modalCloseButton} />}</i.xBx>}{<form onSubmit={j}>{<i.hzk className={c.content}><i.xJW title={r.intl.string(r.t["7yEgJS"])} error={m} required={true}><div><i.oil inputRef={g} aria-label={r.intl.string(r.t["7yEgJS"])} placeholder={o.name} value={h} minLength={1} maxLength={32} onChange={x} autoFocus={true} required={true} /></div></i.xJW></i.hzk>}{<i.mzw>{<i.zxk variant={"primary"} text={r.intl.string(r.t.i4jeWV)} type={"submit"} loading={d} disabled={0 === h.length || h.length > 32} />}{<div data-button-hoisted-classname-wrapper={true} className={c.cancel}><i.zxk variant={"secondary"} text={r.intl.string(r.t["ETE/oK"])} onClick={n} /></div>}</i.mzw>}</form>}</i.Y0X>
}