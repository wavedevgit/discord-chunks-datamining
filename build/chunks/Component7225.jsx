/** Chunk was on 19517 **/
/** chunk id: 7225, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => j
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

function j(e) {
  let {
    onClose: t,
    transitionState: r,
    appId: j,
    guildId: S
  } = e, v = (0, l.e7)([d.Z], () => d.Z.getApplication(j), [j]), [O, w] = n.useState(() => d.Z.isFetchingApplication(j) ? {
    status: 1
  } : {
    status: 0
  });
  n.useEffect(() => {
    0 === O.status && (w({
      status: 1
    }), a.ZP.fetchApplication(j).then(() => {
      w({
        status: 2
      })
    }).catch(e => {
      w({
        status: 3,
        error: e.message
      })
    }))
  }, [j, O.status]);
  let {
    subscriptions: y,
    otps: P
  } = (0, _.q)(j);
  if (null == v) return null;
  let Z = L.intl.formatToPlainString(L.t.XDRjs7, {
    appName: v.name
  });
  return (0, i.jsxs)(c.Y0X, {
    transitionState: r,
    "aria-label": Z,
    size: c.CgR.DYNAMIC,
    className: x.modal,
    parentComponent: "AppStorefrontModal",
    children: [(0, i.jsxs)(c.xBx, {
      className: x.modalHeader,
      children: [(0, i.jsxs)("div", {
        className: x.modalTitle,
        children: [(0, i.jsx)(p.Z, {}), (0, i.jsx)(c.X6q, {
          variant: "heading-md/semibold",
          children: Z
        })]
      }), (0, i.jsxs)("div", {
        className: x.modalHeaderLinks,
        children: [u.wS && (0, i.jsx)(s.zx, {
          look: s.iL.BLANK,
          size: s.Ph.ICON,
          color: s.Tt.TRANSPARENT,
          "aria-label": L.intl.string(L.t.WqhZsr),
          onClick: () => {
            let e = "".concat(location.protocol, "//").concat(location.host).concat(b.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(j, g.GlobalDiscoveryAppsSections.STORE));
            (0, u.JG)(e, () => (0, c.showToast)((0, c.createToast)(L.intl.string(L.t["L/PwZW"]), c.ToastType.SUCCESS))), (0, f.X)(j, f.B.STORE_MODAL)
          },
          children: (0, i.jsx)(c.xPt, {
            size: "sm"
          })
        }), (0, i.jsx)(c.olH, {
          onClick: t,
          className: x.modalCloseBtn
        })]
      })]
    }), (0, i.jsx)("div", {
      className: x.scrollerWrapper,
      children: (0, i.jsx)(o.Z, {
        className: x.scroller,
        children: (0, i.jsx)(h.AF, {
          app: v,
          guildId: S,
          subscriptions: y,
          otps: P
        })
      })
    }), (0, i.jsx)(c.mzw, {
      justify: C.Z.Justify.END,
      children: (0, i.jsx)(c.Text, {
        variant: "text-md/normal",
        children: null != v.termsOfServiceUrl || null != v.privacyPolicyUrl ? (0, i.jsx)(m.Z, {
          termsOfServiceUrl: v.termsOfServiceUrl,
          privacyPolicyUrl: v.privacyPolicyUrl
        }) : L.intl.string(L.t["3ZY+0N"])
      })
    })]
  })
}