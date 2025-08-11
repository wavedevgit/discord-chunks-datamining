/** Chunk was on 75708 **/
/** chunk id: 399970, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js"), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk401430 = require("./401430.js"),
  Chunk155268 = require("./155268.js"),
  Chunk600164 = require("./600164.js"),
  Chunk313201 = require("./313201.js"),
  Chunk695103 = require("./695103.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk458240 = require("./458240.js"),
  Chunk20493 = require("./20493.js");
let b = /^\d+$|^$/;

function x(e) {
  let {
    onClose: t,
    transitionState: n
  } = e, {
    authorizedApplicationId: x,
    authorizationError: _,
    authorizing: j
  } = (0, s.cj)([p.Z], () => ({
    authorizedApplicationId: p.Z.testModeApplicationId,
    authorizationError: p.Z.error,
    authorizing: p.Z.isFetchingAuthorization
  })), [E, C] = r.useState(null != x ? x : ""), [O, v] = r.useState("8080"), [S, T] = r.useState("localhost"), I = (0, m.Dt)(), N = b.test(E);
  async function y() {
    c.q$();
    let e = function(e, t, n) {
      if (null == e) return null;
      switch (e) {
        case "localhost":
          return "https://localhost:".concat(t);
        case "proxy":
          return (0, d.ZP)(n)
      }
    }(S, O, E);
    null != await c.Wt(E, e) && t()
  }
  r.useEffect(() => () => o.Z.wait(() => c.q$()), []);
  let A = null != x && x === E,
    P = A ? function() {
      c.mc(), C(""), T(null)
    } : y;
  return <l.Y0X aria-labelledby={I} transitionState={n} parentComponent={"TestModeModal"}>{<l.xBx justify={u.Z.Justify.BETWEEN} separator={false}>{<l.vwX id={I} tag={"h1"} className={f.marginReset}>{g.intl.string(g.t.f8fzk5)}</l.vwX>}{<l.olH onClick={t} />}</l.xBx>}{<l.hzk className={h.modalContent}>{<l.R94 className={f.marginBottom20} type={l.R94.Types.DESCRIPTION}>{g.intl.string(g.t.a6Vilp)}</l.R94>}{null == _ ? null : <l.kzN className={f.marginBottom20}>{_}</l.kzN>}{<form onSubmit={e => {
          e.preventDefault(), P()
        }}><u.Z direction={u.Z.Direction.VERTICAL} align={u.Z.Align.START}>{<l.xJW className={h.inputWrapper} title={g.intl.string(g.t.P6TzgI)} required={true}><l.oil value={E} maxLength={19} error={N ? null : g.intl.string(g.t.gPNgKC)} onChange={function(e) {
                C(e)
              }} disabled={j} /></l.xJW>}{<l.xJW className={h.inputWrapper} title={g.intl.string(g.t["/GTqXF"])}><l.q4e isDisabled={!N || "" === E} value={S} options={[{
                value: "localhost",
                label: g.intl.string(g.t["+Y9Y6u"]),
                key: "localhost"
              }, {
                value: "proxy",
                label: g.intl.string(g.t.uaksyc),
                key: "proxy"
              }]} onChange={function(e) {
                T(e)
              }} placeholder={"URL Origin Type"} /></l.xJW>}{"localhost" !== S ? null : <l.xJW className={h.inputWrapper} title={g.intl.string(g.t.fF4zxs)} required={true}><l.oil value={O} maxLength={5} onChange={e => v(e)} disabled={j} /></l.xJW>}{<a.zx submitting={j} type={"submit"} disabled={!N || 0 === E.length || "localhost" === S && 0 === O.length} color={A ? a.zx.Colors.RED : a.zx.Colors.GREEN}>{A ? g.intl.string(g.t.d6TR3N) : g.intl.string(g.t.qwuK5O)}</a.zx>}</u.Z></form>}</l.hzk>}</l.Y0X>
}