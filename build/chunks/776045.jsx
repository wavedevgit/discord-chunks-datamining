/** Chunk was on 73628 **/
/** chunk id: 776045, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  A: () => d,
  default: () => c
}), require("./388685.js");
var n, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk683290 = require("./683290.js"),
  d = ((n = {}).DANGER = "danger", n.WARNING = "warning", n);

function c(e) {
  let {
    transitionState: t,
    onClose: A,
    title: n,
    body: d,
    cta: c,
    closeLabel: u,
    onConfirm: f,
    iconVariant: g = "warning"
  } = e, [p, m] = l.useState(false), h = async () => {
    m(true);
    try {
      await f(), A()
    } finally {
      m(false)
    }
  }, C = null != n ? n : i.intl.string(i.t.D94rwc);
  return <o.Y0X className={s.__invalid_container} size={o.CgR.DYNAMIC} transitionState={t} aria-label={C} parentComponent={"WarningModal"}>{<o.hzk className={s.content}>{<div className={s.header}>{<o.Mgn size={"custom"} color={"currentColor"} width={20} height={20} className={function(e) {
            switch (e) {
              case "danger":
                return s.dangerIcon;
              case "warning":
                return s.warningIcon
            }
          }(g)} />}{<o.LZC size={8} horizontal={true} />}{<o.X6q variant={"heading-xl/semibold"} color={"header-primary"}>{C}</o.X6q>}</div>}{<o.LZC size={12} />}{<o.Text variant={"text-md/normal"} color={"text-muted"} className={s.__invalid_body}>{d}</o.Text>}</o.hzk>}{<o.mzw>{<o.zxk variant={"primary"} text={c} onClick={h} loading={p} />}{<o.LZC size={12} horizontal={true} />}{null != u && <a.zx color={a.zx.Colors.PRIMARY} look={a.zx.Looks.OUTLINED} onClick={A}>{u}</a.zx>}</o.mzw>}</o.Y0X>
}