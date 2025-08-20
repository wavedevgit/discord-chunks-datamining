/** Chunk was on 62199 **/
/** chunk id: 7225, original params: t,e,s (module,exports,require) **/
require.d(exports, {
  default: () => N
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk541822 = require("./541822.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk728345 = require("./728345.js"),
  Chunk812206 = require("./812206.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk886176 = require("./886176.jsx"),
  Chunk572004 = require("./572004.js"),
  Chunk504211 = require("./504211.js"),
  Chunk283836 = require("./283836.js"),
  Chunk507608 = require("./507608.jsx"),
  Chunk533159 = require("./533159.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk979007 = require("./979007.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk465103 = require("./465103.js");

function N(t) {
  let {
    onClose: e,
    transitionState: s,
    appId: N,
    guildId: b
  } = t, v = (0, o.e7)([p.Z], () => p.Z.getApplication(N), [N]), [A, T] = a.useState(() => p.Z.isFetchingApplication(N) ? {
    status: 1
  } : {
    status: 0
  });
  a.useEffect(() => {
    0 === A.status && (T({
      status: 1
    }), l.ZP.fetchApplication(N).then(() => {
      T({
        status: 2
      })
    }).catch(t => {
      T({
        status: 3,
        error: t.message
      })
    }))
  }, [N, A.status]);
  let {
    subscriptions: w,
    otps: P
  } = (0, m.q)(N);
  if (null == v) return null;
  let Z = j.intl.formatToPlainString(j.t.XDRjs7, {
    appName: v.name
  });
  return (0, r.jsxs)(c.Y0X, {
    transitionState: s,
    "aria-label": Z,
    size: c.CgR.DYNAMIC,
    className: C.modal,
    parentComponent: "AppStorefrontModal",
    children: [(0, r.jsxs)(c.xBx, {
      className: C.modalHeader,
      children: [(0, r.jsxs)("div", {
        className: C.modalTitle,
        children: [(0, r.jsx)(u.Z, {}), (0, r.jsx)(c.X6q, {
          variant: "heading-md/semibold",
          children: Z
        })]
      }), (0, r.jsxs)("div", {
        className: C.modalHeaderLinks,
        children: [_.wS && (0, r.jsx)(n.zx, {
          look: n.iL.BLANK,
          size: n.Ph.ICON,
          color: n.Tt.TRANSPARENT,
          "aria-label": j.intl.string(j.t.WqhZsr),
          onClick: () => {
            let t = "".concat(location.protocol, "//").concat(location.host).concat(S.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(N, g.GlobalDiscoveryAppsSections.STORE));
            (0, _.JG)(t, () => (0, c.showToast)((0, c.createToast)(j.intl.string(j.t["L/PwZW"]), c.ToastType.SUCCESS))), (0, f.X)(N, f.B.STORE_MODAL)
          },
          children: (0, r.jsx)(c.xPt, {
            size: "sm"
          })
        }), (0, r.jsx)(c.olH, {
          onClick: e,
          className: C.modalCloseBtn
        })]
      })]
    }), (0, r.jsx)("div", {
      className: C.scrollerWrapper,
      children: (0, r.jsx)(i.Z, {
        className: C.scroller,
        children: (0, r.jsx)(x.AF, {
          app: v,
          guildId: b,
          subscriptions: w,
          otps: P
        })
      })
    }), (0, r.jsx)(c.mzw, {
      justify: d.Z.Justify.END,
      children: (0, r.jsx)(c.Text, {
        variant: "text-md/normal",
        children: null != v.termsOfServiceUrl || null != v.privacyPolicyUrl ? (0, r.jsx)(h.Z, {
          termsOfServiceUrl: v.termsOfServiceUrl,
          privacyPolicyUrl: v.privacyPolicyUrl
        }) : j.intl.string(j.t["3ZY+0N"])
      })
    })]
  })
}