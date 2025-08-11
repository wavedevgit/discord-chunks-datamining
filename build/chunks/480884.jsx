/** Chunk was on 59385 **/
/** chunk id: 480884, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk286379 = require("./286379.js"),
  Chunk399606 = require("./399606.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk797614 = require("./797614.js"),
  Chunk819557 = require("./819557.js"),
  Chunk138201 = require("./138201.jsx"),
  Chunk359119 = require("./359119.js"),
  Chunk473092 = require("./473092.js"),
  Chunk636749 = require("./636749.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk661306 = require("./661306.js");

function h(e) {
  let {
    transitionState: n,
    onClose: t,
    channelId: h,
    warningId: N,
    senderId: f,
    description: k,
    safetyTipRows: T,
    actionRows: p,
    learnMore: j
  } = e, B = (0, c.e7)([_.ZP], () => _.ZP.getChannelSafetyWarning(h, N));
  return s.useEffect(() => {
    (0, x.MC)(b.rMx.SAFETY_WARNING_MODAL_VIEWED, {
      channelId: h,
      warningId: N,
      senderId: f,
      warningType: null == B ? true : B.type
    }), r.Z.increment({
      name: o.V.SAFETY_WARNING_MODAL_VIEW
    })
  }, [h, N, f, B]), <l.Y0X transitionState={n} parentComponent={"MoreTipsModal"}><l.Ttm style={{
        overflow: "hidden auto"
      }}>{<l.xBx className={v.modalHeader}>{<div className={v.modalHeaderText}>{<l.Text variant={"eyebrow"} color={"status-positive-text"}>{g.intl.string(g.t.lyt43N)}</l.Text>}{<l.X6q variant={"heading-xl/bold"} color={"status-positive-text"}>{k}</l.X6q>}</div>}{<i.zx aria-label={g.intl.string(g.t.cpT0Cg)} look={i.zx.Looks.BLANK} size={i.zx.Sizes.NONE} onClick={t} innerClassName={v.closeButtonInner} className={v.closeButton}><l.Dio size={"sm"} color={"currentColor"} className={v.closeIcon} /></i.zx>}</l.xBx>}{<l.hzk className={v.modalContent}>{<div className={v.mainSection}>{<d.z>{T}</d.z>}{null != j ? j : null}</div>}{<div>{<l.Text className={v.moreHeading} variant={"eyebrow"} color={"header-secondary"}>{g.intl.string(g.t.K5FKtb)}</l.Text>}{<u.rT>{p}</u.rT>}</div>}{<m.Z channelId={h} warningId={N} senderId={f} safetyWarning={B} />}</l.hzk>}</l.Ttm></l.Y0X>
}