/** Chunk was on web.js **/
/** chunk id: 886253, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk812206 = require("./812206.js"),
  Chunk370210 = require("./370210.js"),
  Chunk757746 = require("./757746.js"),
  Chunk572004 = require("./572004.js"),
  Chunk601911 = require("./601911.js"),
  Chunk504211 = require("./504211.js"),
  Chunk533159 = require("./533159.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk969878 = require("./969878.js"),
  Chunk409369 = require("./409369.js");

function E(e) {
  let {
    appId: t,
    skuId: n,
    transitionState: E,
    onClose: b,
    onHeaderTitleClick: y,
    children: O,
    footer: v
  } = e, I = (0, i.e7)([s.Z, l.Z], () => {
    var e;
    return null != (e = s.Z.getApplication(t)) ? e : l.Z.getApplicationRecord(t)
  }, [t]), {
    data: T
  } = (0, c.Z)(n);
  if (null == I) return null;
  let S = (0, d.y)(I, 25),
    {
      termsOfServiceUrl: A,
      privacyPolicyUrl: N
    } = I;
  return (null == T ? true : T.applicationId) !== t ? <a.Y0X transitionState={E} size={a.CgR.SMALL} parentComponent={"CardDetailsModal"}>{<a.hzk className={g.content}>{<a.olH onClick={b} className={m.modalCloseBtn} />}{<a.Text variant={"text-lg/semibold"} color={"header-primary"} className={g.unavailableTitle}>{h.intl.string(h.t["0Bf80N"])}</a.Text>}{<a.Text variant={"text-md/normal"} color={"header-secondary"} className={g.unavailableBody}>{h.intl.string(h.t.omH3bm)}</a.Text>}</a.hzk>}{<a.mzw><o.zx className={g.button} color={o.zx.Colors.BRAND} onClick={b} size={o.zx.Sizes.LARGE}>{h.intl.string(h.t.BddRzc)}</o.zx></a.mzw>}</a.Y0X> : <a.Y0X transitionState={E} size={a.CgR.DYNAMIC} className={g.modal} parentComponent={"CardDetailsModal"}>{<a.xBx className={m.modalHeader}>{<a.P3F className={m.modalTitle} onClick={y}>{null != S && <img src={S.href} alt={""} className={g.appIcon} />}{<a.X6q variant={"heading-md/semibold"}>{I.name}</a.X6q>}</a.P3F>}{<a.olH onClick={b} className={m.modalCloseBtn} />}</a.xBx>}{O}{<a.mzw className={g.footer}>{null != A || null != N ? <a.Text color={"header-primary"} variant={"text-sm/normal"}><_.Z termsOfServiceUrl={A} privacyPolicyUrl={N} /></a.Text> : <a.Text color={"header-primary"} variant={"text-xs/normal"}>{h.intl.string(h.t["3ZY+0N"])}</a.Text>}{<div className={g.footerButtons}>{u.wS && <o.zx look={o.zx.Looks.FILLED} size={o.zx.Sizes.ICON} color={o.zx.Colors.PRIMARY} aria-label={h.intl.string(h.t.WqhZsr)} className={g.linkButton} innerClassName={g.innerLinkButton} onClick={() => {
            let e = "".concat(location.protocol, "//").concat(location.host).concat(p.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t, n));
            (0, u.JG)(e, () => (0, a.showToast)((0, a.createToast)(h.intl.string(h.t["L/PwZW"]), a.ToastType.SUCCESS))), (0, f.X)(t, f.B.DETAILS_MODAL, n)
          }}><a.xPt size={"xs"} color={"currentColor"} /></o.zx>}{v}</div>}</a.mzw>}</a.Y0X>
}