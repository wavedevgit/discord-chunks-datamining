/** Chunk was on 46161 **/
/** chunk id: 238716, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk600164 = require("./600164.js"),
  Chunk313201 = require("./313201.js"),
  Chunk592125 = require("./592125.js"),
  Chunk853856 = require("./853856.js"),
  Chunk117984 = require("./117984.js"),
  Chunk388032 = require("./388032.js"),
  Chunk64460 = require("./64460.js");

function j(e) {
  let {
    channelId: n,
    onClose: t,
    transitionState: j,
    heading: k,
    formTitle: f,
    allowReset: z = false
  } = e, v = (0, d.Dt)(), N = (0, r.e7)([x.Z], () => x.Z.getChannel(n)), g = (0, o.ZP)(N), C = u.Z.getNickname(n), [y, E] = s.useState(null != C ? C : "");
  return <form onSubmit={function(e) {
      e.preventDefault(), (0, h.UT)(n, y), t()
    }}><l.Y0X transitionState={j} aria-labelledby={v} parentComponent={"FavoritesSetNicknameModal"}>{<l.xBx separator={true} justify={c.Z.Justify.BETWEEN}>{<l.X6q id={v} variant={"heading-lg/semibold"}>{k}</l.X6q>}{<l.olH onClick={t} />}</l.xBx>}{<l.hzk>{<l.xJW className={p.name} title={f}><l.oil value={y} onChange={E} placeholder={null != g ? g : true} maxLength={100} autoFocus={true} /></l.xJW>}{z && null != C ? <a.zx look={a.zx.Looks.LINK} color={a.zx.Colors.LINK} size={a.zx.Sizes.NONE} onClick={function() {
            (0, h.UT)(n, null), t()
          }} className={p.reset}>{m.intl.string(m.t.aE02R0)}</a.zx> : null}{<l.Text className={p.description} variant={"text-sm/normal"} color={"header-secondary"}>{m.intl.string(m.t["2vyz+P"])}</l.Text>}</l.hzk>}{<l.mzw><l.hE2 direction={"horizontal-reverse"}>{<l.zxk variant={"primary"} text={k} type={"submit"} />}{<l.zxk variant={"secondary"} text={m.intl.string(m.t["ETE/oK"])} onClick={t} />}</l.hE2></l.mzw>}</l.Y0X></form>
}