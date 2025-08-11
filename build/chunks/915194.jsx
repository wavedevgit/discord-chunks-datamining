/** Chunk was on 20212 **/
/** chunk id: 915194, original params: l,n,i (module,exports,require) **/
require.d(exports, {
  default: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk812206 = require("./812206.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk922156 = require("./922156.js"),
  Chunk63063 = require("./63063.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk841177 = require("./841177.js");
let h = l => {
  let {
    onClose: n,
    transitionState: i
  } = l, {
    error: h,
    applicationName: x
  } = (0, t.cj)([c.Z, a.Z], () => {
    let l = c.Z.getLastError(),
      n = null;
    if (null != l && null != l.applicationId) {
      let i = a.Z.getApplication(l.applicationId);
      null != i && (n = i.name)
    }
    return {
      error: l,
      applicationName: n
    }
  });
  return <e.Y0X transitionState={i} size={e.CgR.SMALL} aria-label={u.intl.string(u.t["6kHRYG"])} parentComponent={"DispatchErrorModal"}>{<e.xBx justify={s.Z.Justify.BETWEEN} separator={false}>{<s.Z.Child grow={1}><e.X6q variant={"heading-lg/semibold"}>{u.intl.string(u.t["6kHRYG"])}</e.X6q></s.Z.Child>}{<s.Z.Child grow={0}><e.olH onClick={n} /></s.Z.Child>}</e.xBx>}{<e.hzk><div className={p.body}>{<div>{u.intl.format(u.t["NnE/6O"], {
            link: "https://dis.gd/dispatch-error"
          })}</div>}{<div className={p.supportCallToAction}>{u.intl.string(u.t["o+efY2"])}</div>}{<div className={p.errorLabel}>{u.intl.string(u.t.BiSnZ2)}</div>}{<div className={p.errorDetails}><div>{null != x ? "Game: ".concat(x, "\n") : null}{(null == h ? true : h.applicationId) != null ? "Game ID: ".concat(h.applicationId, "\n") : null}{(null == h ? true : h.branchId) != null && (null == h ? true : h.applicationId) !== (null == h ? true : h.branchId) ? "Branch ID: ".concat(null == h ? true : h.branchId, "\n") : null}{(null == h ? true : h.code) != null ? "Error Code: ".concat(null == h ? true : h.code, "\n") : null}{(null == h ? true : h.uuid) != null ? "Unique Case ID: ".concat(null == h ? true : h.uuid) : null}</div></div>}</div></e.hzk>}{<e.mzw>{<e.zxk variant={"primary"} text={u.intl.string(u.t.VdyWmJ)} onClick={() => {
          window.open(d.Z.getSubmitRequestURL())
        }} />}{<o.zx look={o.zx.Looks.LINK} onClick={n} color={p.closeLink}>{u.intl.string(u.t.cpT0Cg)}</o.zx>}</e.mzw>}</e.Y0X>
}