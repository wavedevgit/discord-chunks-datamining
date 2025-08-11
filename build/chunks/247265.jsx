/** Chunk was on 69015 **/
/** chunk id: 247265, original params: e,r,t (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk985002 = require("./985002.js"),
  Chunk880257 = require("./880257.js"),
  Chunk957656 = require("./957656.js"),
  Chunk916723 = require("./916723.js"),
  Chunk388032 = require("./388032.js"),
  Chunk570580 = require("./570580.js");
let p = e => {
  let {
    currentUser: r,
    otherUser: t,
    transitionState: i,
    onClose: p
  } = e, [h, j] = o.useState(false), m = o.useCallback(() => {
    j(true)
  }, []), y = o.useCallback(() => {
    j(false)
  }, []), x = o.useCallback(() => {
    p()
  }, [p]), g = (0, l.Z)(), {
    cancelLinkRequest: O,
    isCancelLoading: v
  } = (0, a.G)({
    onError: m,
    onSuccess: x
  });
  return s()(g, "FamilyCenterDeclineLinkModal should only be rendered for parents."), <d.Z transitionState={i}><form onSubmit={e => {
        e.preventDefault(), O(t)
      }}>{<d.Z.Error error={h ? b.intl.string(u.default["6gyAQU"]) : true} onDismiss={y} />}{<c.hzk data-migration-pending={true}><d.Z.Header currentUser={r} otherUser={t} header={b.intl.string(u.default.HynllZ)} icon={(0, n.jsx)(c.Dio, {
            size: "md",
            color: "currentColor",
            className: f.closeIcon
          })} /></c.hzk>}{<c.mzw data-migration-pending={true}><d.Z.ButtonFooter><c.hE2 direction={"horizontal-reverse"}>{<c.zxk variant={"secondary"} size={"sm"} text={b.intl.string(u.default.czincX)} type={"button"} disabled={v} onClick={p} />}{<c.zxk variant={"critical-primary"} size={"sm"} text={b.intl.string(u.default.mK40bm)} type={"submit"} disabled={v || h} loading={v} />}</c.hE2></d.Z.ButtonFooter></c.mzw>}</form></d.Z>
}