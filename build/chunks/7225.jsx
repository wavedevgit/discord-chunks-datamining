/** Chunk was on 83372 **/
/** chunk id: 7225, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => v
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk541822 = require("./541822.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk728345 = require("./728345.js"),
  Chunk812206 = require("./812206.js"),
  Chunk600164 = require("./600164.js"),
  Chunk886176 = require("./886176.js"),
  Chunk572004 = require("./572004.js"),
  Chunk504211 = require("./504211.js"),
  Chunk283836 = require("./283836.js"),
  Chunk507608 = require("./507608.js"),
  Chunk533159 = require("./533159.js"),
  Chunk981631 = require("./981631.js"),
  Chunk979007 = require("./979007.js"),
  Chunk388032 = require("./388032.js"),
  Chunk969878 = require("./969878.js");

function v(t) {
  let {
    onClose: e,
    transitionState: r,
    appId: v,
    guildId: N
  } = t, b = (0, n.e7)([p.Z], () => p.Z.getApplication(v), [v]), [A, T] = a.useState(() => p.Z.isFetchingApplication(v) ? {
    status: 1
  } : {
    status: 0
  });
  a.useEffect(() => {
    0 === A.status && (T({
      status: 1
    }), l.ZP.fetchApplication(v).then(() => {
      T({
        status: 2
      })
    }).catch(t => {
      T({
        status: 3,
        error: t.message
      })
    }))
  }, [v, A.status]);
  let {
    subscriptions: Z,
    otps: w
  } = (0, m.q)(v);
  if (null == b) return null;
  let P = j.intl.formatToPlainString(j.t.XDRjs7, {
    appName: b.name
  });
  return <c.Y0X transitionState={r} aria-label={P} size={c.CgR.DYNAMIC} className={C.modal} parentComponent={"AppStorefrontModal"}>{<c.xBx className={C.modalHeader}>{<div className={C.modalTitle}>{<u.Z />}{<c.X6q variant={"heading-md/semibold"}>{P}</c.X6q>}</div>}{<div className={C.modalHeaderLinks}>{_.wS && <o.zx look={o.iL.BLANK} size={o.Ph.ICON} color={o.Tt.TRANSPARENT} aria-label={j.intl.string(j.t.WqhZsr)} onClick={() => {
            let t = "".concat(location.protocol, "//").concat(location.host).concat(S.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(v, g.GlobalDiscoveryAppsSections.STORE));
            (0, _.JG)(t, () => (0, c.showToast)((0, c.createToast)(j.intl.string(j.t["L/PwZW"]), c.ToastType.SUCCESS))), (0, f.X)(v, f.B.STORE_MODAL)
          }}><c.xPt size={"sm"} /></o.zx>}{<c.olH onClick={e} className={C.modalCloseBtn} />}</div>}</c.xBx>}{<div className={C.scrollerWrapper}><i.Z className={C.scroller}><x.AF app={b} guildId={N} subscriptions={Z} otps={w} /></i.Z></div>}{<c.mzw justify={d.Z.Justify.END}><c.Text variant={"text-md/normal"}>{null != b.termsOfServiceUrl || null != b.privacyPolicyUrl ? (0, s.jsx)(h.Z, {
          termsOfServiceUrl: b.termsOfServiceUrl,
          privacyPolicyUrl: b.privacyPolicyUrl
        }) : j.intl.string(j.t["3ZY+0N"])}</c.Text></c.mzw>}</c.Y0X>
}