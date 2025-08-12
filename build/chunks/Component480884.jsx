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
  Chunk819557 = require("./819557.jsx"),
  Chunk138201 = require("./138201.jsx"),
  Chunk359119 = require("./359119.js"),
  Chunk473092 = require("./473092.js"),
  Chunk636749 = require("./636749.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk327190 = require("./327190.js");

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
  }, [h, N, f, B]), (0, a.jsx)(l.Y0X, {
    transitionState: n,
    parentComponent: "MoreTipsModal",
    children: (0, a.jsxs)(l.Ttm, {
      style: {
        overflow: "hidden auto"
      },
      children: [(0, a.jsxs)(l.xBx, {
        className: v.modalHeader,
        children: [(0, a.jsxs)("div", {
          className: v.modalHeaderText,
          children: [(0, a.jsx)(l.Text, {
            variant: "eyebrow",
            color: "status-positive-text",
            children: g.intl.string(g.t.lyt43N)
          }), (0, a.jsx)(l.X6q, {
            variant: "heading-xl/bold",
            color: "status-positive-text",
            children: k
          })]
        }), (0, a.jsx)(i.zx, {
          "aria-label": g.intl.string(g.t.cpT0Cg),
          look: i.zx.Looks.BLANK,
          size: i.zx.Sizes.NONE,
          onClick: t,
          innerClassName: v.closeButtonInner,
          className: v.closeButton,
          children: (0, a.jsx)(l.Dio, {
            size: "sm",
            color: "currentColor",
            className: v.closeIcon
          })
        })]
      }), (0, a.jsxs)(l.hzk, {
        className: v.modalContent,
        children: [(0, a.jsxs)("div", {
          className: v.mainSection,
          children: [(0, a.jsx)(d.z, {
            children: T
          }), null != j ? j : null]
        }), (0, a.jsxs)("div", {
          children: [(0, a.jsx)(l.Text, {
            className: v.moreHeading,
            variant: "eyebrow",
            color: "header-secondary",
            children: g.intl.string(g.t.K5FKtb)
          }), (0, a.jsx)(u.rT, {
            children: p
          })]
        }), (0, a.jsx)(m.Z, {
          channelId: h,
          warningId: N,
          senderId: f,
          safetyWarning: B
        })]
      })]
    })
  })
}