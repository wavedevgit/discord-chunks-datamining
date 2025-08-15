/** Chunk was on 59385 **/
/** chunk id: 480884, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk286379 = require("./286379.js"),
  Chunk399606 = require("./399606.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk797614 = require("./797614.js"),
  Chunk819557 = require("./819557.jsx"),
  Chunk138201 = require("./138201.jsx"),
  Chunk359119 = require("./359119.js"),
  Chunk473092 = require("./473092.js"),
  Chunk636749 = require("./636749.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk549306 = require("./549306.js");

function h(e) {
  let {
    transitionState: n,
    onClose: t,
    channelId: h,
    warningId: N,
    senderId: k,
    description: T,
    safetyTipRows: f,
    actionRows: j,
    learnMore: p
  } = e, B = (0, i.e7)([_.ZP], () => _.ZP.getChannelSafetyWarning(h, N));
  return o.useEffect(() => {
    (0, m.MC)(b.rMx.SAFETY_WARNING_MODAL_VIEWED, {
      channelId: h,
      warningId: N,
      senderId: k,
      warningType: null == B ? true : B.type
    }), r.Z.increment({
      name: s.V.SAFETY_WARNING_MODAL_VIEW
    })
  }, [h, N, k, B]), (0, a.jsx)(l.Y0X, {
    transitionState: n,
    parentComponent: "MoreTipsModal",
    children: (0, a.jsxs)(l.Ttm, {
      style: {
        overflow: "hidden auto"
      },
      children: [(0, a.jsxs)(l.xBx, {
        className: g.modalHeader,
        children: [(0, a.jsxs)("div", {
          className: g.modalHeaderText,
          children: [(0, a.jsx)(l.Text, {
            variant: "eyebrow",
            color: "status-positive-text",
            children: v.intl.string(v.t.lyt43N)
          }), (0, a.jsx)(l.X6q, {
            variant: "heading-xl/bold",
            color: "status-positive-text",
            children: T
          })]
        }), (0, a.jsx)(c.zx, {
          "aria-label": v.intl.string(v.t.cpT0Cg),
          look: c.zx.Looks.BLANK,
          size: c.zx.Sizes.NONE,
          onClick: t,
          innerClassName: g.closeButtonInner,
          className: g.closeButton,
          children: (0, a.jsx)(l.Dio, {
            size: "sm",
            color: "currentColor",
            className: g.closeIcon
          })
        })]
      }), (0, a.jsxs)(l.hzk, {
        className: g.modalContent,
        children: [(0, a.jsxs)("div", {
          className: g.mainSection,
          children: [(0, a.jsx)(d.z, {
            children: f
          }), null != p ? p : null]
        }), (0, a.jsxs)("div", {
          children: [(0, a.jsx)(l.Text, {
            className: g.moreHeading,
            variant: "eyebrow",
            color: "header-secondary",
            children: v.intl.string(v.t.K5FKtb)
          }), (0, a.jsx)(u.rT, {
            children: j
          })]
        }), (0, a.jsx)(x.Z, {
          channelId: h,
          warningId: N,
          senderId: k,
          safetyWarning: B
        })]
      })]
    })
  })
}