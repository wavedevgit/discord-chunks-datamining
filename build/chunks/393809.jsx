/** Chunk was on 31835 **/
/** chunk id: 393809, original params: t,r,n (module,exports,require) **/
require.d(exports, {
  default: () => T
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk53365 = require("./53365.js"),
  Chunk377176 = require("./377176.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk339500 = require("./339500.js");

function T(t) {
  let {
    guildId: r,
    transitionState: n,
    onClose: T
  } = t, [_, A] = i.useState(false), [N, d] = i.useState(false), u = async () => {
    A(true);
    try {
      await (0, c.zo)(r), T()
    } finally {
      A(false)
    }
  }, I = l.intl.string(l.t["22itmp"]);
  return <o.Y0X className={E.__invalid_container} size={o.CgR.DYNAMIC} transitionState={n} aria-label={I} parentComponent={"TermsNotAcceptedErrorModal"}>{<o.hzk className={E.content}>{<div className={E.header}>{<o.Mgn size={"custom"} color={"currentColor"} width={20} height={20} className={E.warningIcon} />}{<o.LZC size={8} horizontal={true} />}{<o.X6q variant={"heading-xl/semibold"} color={"header-primary"}>{I}</o.X6q>}</div>}{<o.LZC size={12} />}{<o.Text variant={"text-md/normal"} color={"text-muted"} className={E.__invalid_body}>{l.intl.string(l.t.kdbm9P)}</o.Text>}{<o.LZC size={28} />}{<o.XZJ onChange={() => {
          d(t => !t)
        }} size={20} type={o.XZJ.Types.INVERTED} value={N}><o.Text variant={"text-md/normal"} color={"header-secondary"}>{(0, s.f)()}</o.Text></o.XZJ>}</o.hzk>}{<o.mzw>{<o.zxk variant={"primary"} text={l.intl.string(l.t["cY+Ooa"])} disabled={!N} onClick={u} loading={_} />}{<o.LZC size={12} horizontal={true} />}{<a.zx color={a.zx.Colors.PRIMARY} look={a.zx.Looks.OUTLINED} onClick={T}>{l.intl.string(l.t["ETE/oK"])}</a.zx>}</o.mzw>}</o.Y0X>
}