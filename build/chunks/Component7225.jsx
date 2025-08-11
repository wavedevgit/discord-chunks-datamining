/** Chunk was on 83372 **/
/** chunk id: 7225, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => v
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  return (0, s.jsxs)(c.Y0X, {
    transitionState: r,
    "aria-label": P,
    size: c.CgR.DYNAMIC,
    className: C.modal,
    parentComponent: "AppStorefrontModal",
    children: [(0, s.jsxs)(c.xBx, {
      className: C.modalHeader,
      children: [(0, s.jsxs)("div", {
        className: C.modalTitle,
        children: [(0, s.jsx)(u.Z, {}), (0, s.jsx)(c.X6q, {
          variant: "heading-md/semibold",
          children: P
        })]
      }), (0, s.jsxs)("div", {
        className: C.modalHeaderLinks,
        children: [_.wS && (0, s.jsx)(o.zx, {
          look: o.iL.BLANK,
          size: o.Ph.ICON,
          color: o.Tt.TRANSPARENT,
          "aria-label": j.intl.string(j.t.WqhZsr),
          onClick: () => {
            let t = "".concat(location.protocol, "//").concat(location.host).concat(S.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(v, g.GlobalDiscoveryAppsSections.STORE));
            (0, _.JG)(t, () => (0, c.showToast)((0, c.createToast)(j.intl.string(j.t["L/PwZW"]), c.ToastType.SUCCESS))), (0, f.X)(v, f.B.STORE_MODAL)
          },
          children: (0, s.jsx)(c.xPt, {
            size: "sm"
          })
        }), (0, s.jsx)(c.olH, {
          onClick: e,
          className: C.modalCloseBtn
        })]
      })]
    }), (0, s.jsx)("div", {
      className: C.scrollerWrapper,
      children: (0, s.jsx)(i.Z, {
        className: C.scroller,
        children: (0, s.jsx)(x.AF, {
          app: b,
          guildId: N,
          subscriptions: Z,
          otps: w
        })
      })
    }), (0, s.jsx)(c.mzw, {
      justify: d.Z.Justify.END,
      children: (0, s.jsx)(c.Text, {
        variant: "text-md/normal",
        children: null != b.termsOfServiceUrl || null != b.privacyPolicyUrl ? (0, s.jsx)(h.Z, {
          termsOfServiceUrl: b.termsOfServiceUrl,
          privacyPolicyUrl: b.privacyPolicyUrl
        }) : j.intl.string(j.t["3ZY+0N"])
      })
    })]
  })
}