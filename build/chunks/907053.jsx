/** Chunk was on 64941 **/
/** chunk id: 907053, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => u
}), require("./388685.js"), require("./457542.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk544891 = require("./544891.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk572004 = require("./572004.js"),
  Chunk472305 = require("./472305.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk149388 = require("./149388.js");

function m(t) {
  let {
    name: n,
    value: e
  } = t, [a, r] = i.useState(l.uA3.DEFAULT);
  return <div className={h.infoRow}>{<l.vwX>{n}</l.vwX>}{<l.kO8 value={e} mode={a} supportsCopy={o.wS} onCopy={() => {
        (0, o.JG)(e, () => r(l.uA3.SUCCESS), () => r(l.uA3.ERROR))
      }} />}</div>
}

function u(t) {
  let {
    onClose: n,
    transitionState: e
  } = t, [o, u] = i.useState(""), [j, p] = i.useState(""), [v, _] = i.useState(null), [N, g] = i.useState(false), [C, f] = i.useState("DOMAIN"), k = () => {
    g(true), _(null), a.tn.post({
      url: d.ANM.CONNECTION(d.ABu.DOMAIN, o),
      body: {},
      rejectWithError: false
    }).then(() => {
      n()
    }).catch(t => {
      var n, e, s, i, a, l, r;
      (null == (n = t.body) ? true : n.proof) && "DOMAIN" === C ? (p(t.body.proof), f("PROOF_DNS")) : _((null == (l = t.body) || null == (a = l.errors) || null == (i = a.domain) || null == (s = i._errors) || null == (e = s[0]) ? true : e.message) || (null == (r = t.body) ? true : r.message) || t.message)
    }).finally(() => {
      g(false)
    })
  };
  return <l.Y0X transitionState={e} className={h.__invalid_modal} parentComponent={"DomainVerifyModal"}>{<l.xBx direction={r.Z.Direction.VERTICAL} className={h.header} separator={false}>{<l.X6q variant={"heading-xl/semibold"}>{x.intl.string(x.t["7lo8+f"])}</l.X6q>}{<l.olH className={h.closeButton} onClick={n} />}</l.xBx>}{<l.MyZ activeSlide={C} width={440}>{<l.Mi4 id={"DOMAIN"}><form onSubmit={t => {
            t.preventDefault(), k()
          }}>{<l.hzk className={h.content}>{<l.Text variant={"text-md/normal"} color={"header-secondary"} className={h.description}>{x.intl.string(x.t.NxPUqa)}</l.Text>}{<l.xJW title={x.intl.string(x.t["4jIAa2"])} error={v}><l.oil onChange={u} placeholder={c.pL} maxLength={253} value={o} disabled={N} autoFocus={true} /></l.xJW>}</l.hzk>}{<l.mzw className={h.footer}><l.hE2 direction={"horizontal-reverse"}>{<l.zxk variant={"primary"} text={x.intl.string(x.t.PDTjLC)} type={"submit"} loading={N} disabled={"" === o} />}{<l.zxk variant={"secondary"} text={x.intl.string(x.t["ETE/oK"])} onClick={n} />}</l.hE2></l.mzw>}</form></l.Mi4>}{<l.Mi4 id={"PROOF_DNS"}>{<l.hzk className={h.content}>{<ol className={h.list}>{<li><l.Text tag={"span"} variant={"text-md/normal"}>{x.intl.string(x.t.yOxxAw)}</l.Text></li>}{<li>{<l.Text tag={"span"} variant={"text-md/normal"}>{x.intl.string(x.t.cSURbm)}</l.Text>}{<div className={h.dnsRecordContainer}>{<m name={x.intl.string(x.t.GL3q7u)} value={(0, c.Qv)(o)} />}{<m name={x.intl.string(x.t.Ccmixs)} value={"TXT"} />}{<m name={x.intl.string(x.t.PVLriY)} value={j} />}</div>}</li>}</ol>}{<l.Wn messageType={l.QYI.INFO} className={h.text}>{x.intl.string(x.t.CUBxDA)}</l.Wn>}{null != v && <l.Text variant={"text-sm/normal"} color={"text-danger"} className={h.text}>{v}</l.Text>}</l.hzk>}{<l.mzw className={h.footer} direction={r.Z.Direction.HORIZONTAL}>{<l.zxk variant={"secondary"} text={x.intl.string(x.t["13/7kZ"])} onClick={() => {
              f("DOMAIN"), _(null)
            }} />}{<div className={h.footerInner}>{<div data-button-hoisted-classname-wrapper={true} className={h.__invalid_switchButton}><l.zxk variant={"secondary"} text={x.intl.string(x.t.CkfdNz)} onClick={() => {
                  f("PROOF_HTTP"), _(null)
                }} /></div>}{<l.zxk variant={"primary"} text={x.intl.string(x.t["13ofGh"])} loading={N} onClick={k} />}</div>}</l.mzw>}</l.Mi4>}{<l.Mi4 id={"PROOF_HTTP"}>{<l.hzk className={h.content}>{<l.Text tag={"span"} variant={"text-md/normal"}>{x.intl.string(x.t["p4ql7+"])}</l.Text>}{<div className={h.httpFileContainer}>{<m name={x.intl.string(x.t.GL3q7u)} value={(0, c.F9)(o)} />}{<m name={x.intl.string(x.t.PVLriY)} value={j} />}</div>}{null != v && <l.Text variant={"text-sm/normal"} color={"text-danger"} className={h.text}>{v}</l.Text>}</l.hzk>}{<l.mzw className={h.footer} direction={r.Z.Direction.HORIZONTAL}>{<l.zxk variant={"secondary"} text={x.intl.string(x.t["13/7kZ"])} onClick={() => {
              f("DOMAIN"), _(null)
            }} />}{<div className={h.footerInner}>{<div data-button-hoisted-classname-wrapper={true} className={h.__invalid_switchButton}><l.zxk variant={"secondary"} text={x.intl.string(x.t.RhJMVV)} onClick={() => {
                  f("PROOF_DNS"), _(null)
                }} /></div>}{<l.zxk variant={"primary"} text={x.intl.string(x.t["13ofGh"])} loading={N} onClick={k} />}</div>}</l.mzw>}</l.Mi4>}</l.MyZ>}</l.Y0X>
}