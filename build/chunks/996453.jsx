/** Chunk was on 79764 **/
/** chunk id: 996453, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => g,
  Z: () => f
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk820160 = require("./820160.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk594174 = require("./594174.js"),
  Chunk892880 = require("./892880.js"),
  Chunk458879 = require("./458879.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk685554 = require("./685554.js");

function g(e) {
  var t;
  let {
    guildTemplate: n,
    onClose: g,
    onBack: f,
    onHubGuildInfoSet: j,
    onGuildCreated: _,
    isSlideReady: b,
    hasFooter: L = true,
    isCommunity: N = false
  } = e, [I, y] = s.useState(m.Z.getGuildNameSuggestion()), [v, Z] = s.useState(null), [S, E] = s.useState(false), [T, O] = s.useState(null), B = !!(null == (t = u.default.getCurrentUser()) ? true : t.isStaff()), [M, k] = s.useState(B), H = (0, d.Dt)(), D = s.useRef(null);
  s.useEffect(() => {
    var e;
    b && (null == (e = D.current) || e.focus())
  }, [b]);
  let G = s.useCallback(async e => {
      if (e.preventDefault(), null != n) {
        E(true), O(null);
        try {
          if (null != j) j(I, v);
          else {
            let e = await x.Z.createGuildFromTemplate(I, v, n, N, M);
            r.Z.transitionToGuildSync(e.id), null == _ || _(e.id)
          }
        } catch (e) {
          O(e)
        }
        E(false)
      }
    }, [n, j, I, v, N, M, _]),
    w = <i.Fragment>{<a.zxk variant={"primary"} text={null != j ? h.intl.string(h.t.PDTjLC) : h.intl.string(h.t.CumH4u)} onClick={G} disabled={0 === I.length} loading={S} />}{<l.zx className={p.backButton} look={l.zx.Looks.BLANK} size={l.zx.Sizes.MIN} onClick={f}>{h.intl.string(h.t["13/7kZ"])}</l.zx>}</i.Fragment>;
  return {
    content: <i.Fragment>{<a.xBx direction={c.Z.Direction.VERTICAL} className={p.header} separator={false}>{<a.X6q className={p.title} variant={"heading-xl/semibold"}>{h.intl.string(h.t["2H6Nio"])}</a.X6q>}{<a.Text className={p.subtitle} color={"header-secondary"} variant={"text-md/normal"}>{h.intl.string(h.t.AAfVqa)}</a.Text>}{null != g && <a.olH className={p.closeButton} onClick={g} />}</a.xBx>}{<a.hzk className={p.createGuild}>{<div className={p.uploadIcon}><o.Z icon={v} onChange={Z} /></div>}{<form onSubmit={G}>{<a.xJW className={p.nameInput} error={null == T ? true : T.getFirstFieldErrorMessage("name")}>{<a.vwX tag={"label"} htmlFor={H}>{h.intl.string(h.t.dBih7e)}</a.vwX>}{<a.oil type={"text"} value={I} maxLength={100} onChange={y} inputRef={D} id={H} />}</a.xJW>}{B && <a.j7V hideBorder={true} value={M} onChange={e => k(e)} note={h.intl.string(h.t.edQ5vb)} className={p.formItemSpaced}><a.vwX tag={"label"}>{"Staff Only"}</a.vwX></a.j7V>}{<a.Text variant={"text-xs/normal"} color={"text-muted"} className={p.guidelines}>{h.intl.format(h.t["2bprX1"], {
              guidelinesURL: C.EYA.GUIDELINES
            })}</a.Text>}</form>}{null == T || T.hasFieldErrors() ? null : <a.Text variant={"text-xs/normal"} color={"text-danger"}>{T.message}</a.Text>}</a.hzk>}{L && <a.mzw justify={c.Z.Justify.BETWEEN}>{w}</a.mzw>}</i.Fragment>,
    footer: w
  }
}

function f(e) {
  let {
    content: t
  } = g(e);
  return t
}