/** Chunk was on web.js **/
/** chunk id: 689011, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Oc: () => m,
  t: () => h,
  xe: () => g
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk131388 = require("./131388.js"),
  Chunk409813 = require("./409813.js"),
  Chunk586585 = require("./586585.jsx"),
  Chunk27034 = require("./27034.jsx"),
  Chunk225715 = require("./225715.jsx"),
  Chunk750143 = require("./750143.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk708820 = require("./708820.js"),
  Chunk365627 = require("./365627.js"),
  Chunk753260 = require("./753260.js");
let h = e => {
    let {
      step: t,
      onClose: n
    } = e, s = (0, o.Z)(u.X);
    return t === a.h8.CONFIRM || t === a.h8.BENEFITS ? <div /> : <div className={f.headerContainer}>{!s && <div className={f.headerImageContainer} aria-hidden={"true"}><img src={p} alt={""} className={f.headerImage} /></div>}{<i.P3F className={f.closeContainer} onClick={() => n()} aria-label={d.intl.string(d.t.cpT0Cg)}><i.Dio size={"md"} color={"currentColor"} className={f.closeIcon} /></i.P3F>}</div>
  },
  m = e => {
    let {
      icon: t,
      storeListingBenefits: n,
      skuBenefits: i,
      application: o,
      title: a,
      subtitle: s,
      description: l
    } = e;
    return null == o ? null : <div className={f.confirmationContainer}><c.q$>{<c.CW application={o} asset={t} />}{<c.r0>{a}</c.r0>}{<c.s$ />}{<c.K9 title={s} description={l} />}{<c.G9 applicationId={o.id} storeListingBenefits={n} skuBenefits={i} />}</c.q$></div>
  };

function g(e) {
  let {
    tierName: t,
    onConfirm: n,
    subscription: o
  } = e;
  return <div className={f.purchaseConfirmation}>{<img src={_} alt={""} width={300} height={126} />}{<i.X6q className={f.confirmationTitle} variant={"heading-xl/extrabold"} color={"header-primary"}>{d.intl.format(d.t["wLFT6+"], {
        tier: t
      })}</i.X6q>}{<i.Text className={f.confirmationSubtitle} variant={"text-md/medium"} color={"header-secondary"}>{d.intl.format(d.t.OsAK9v, {
        timestamp: null == o ? true : o.currentPeriodEnd
      })}</i.Text>}{<l.O3><s.Z onPrimary={n} primaryCTA={s.g.CONTINUE} primaryText={d.intl.string(d.t["JtWl+f"])} /></l.O3>}</div>
}