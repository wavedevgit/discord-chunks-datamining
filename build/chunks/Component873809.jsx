/** Chunk was on 67753 **/
/** chunk id: 873809, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => l
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk724723 = require("./724723.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk375644 = require("./375644.js");

function l(e) {
  let {
    transitionState: t,
    header: l,
    body: d,
    confirmText: x,
    onClose: h,
    onConfirm: p
  } = e, m = r.Z.useExperiment({
    location: "VideoDevicesWarningModal"
  }, {
    autoTrackExposure: true
  }).enabled, u = () => {
    h(), null == p || p()
  };
  return m ? (0, n.jsx)(i.Modal, {
    title: l,
    subtitle: d,
    transitionState: t,
    onClose: h,
    actions: [{
      text: x,
      onClick: u,
      variant: "primary"
    }]
  }) : (0, n.jsxs)(s.Y0X, {
    "data-migration-pending": true,
    transitionState: t,
    "aria-label": l,
    parentComponent: "VideoDevicesWarningModal",
    children: [(0, n.jsxs)(s.hzk, {
      className: c.content,
      children: [(0, n.jsx)("img", {
        src: a(568533),
        alt: l
      }), (0, n.jsx)(s.X6q, {
        variant: "heading-xl/semibold",
        className: c.header,
        children: l
      }), (0, n.jsx)(s.Text, {
        variant: "text-md/normal",
        children: d
      })]
    }), (0, n.jsx)(s.mzw, {
      className: c.footer,
      children: (0, n.jsxs)(s.hE2, {
        direction: "horizontal-reverse",
        children: [(0, n.jsx)(s.zxk, {
          variant: "primary",
          size: "sm",
          text: x,
          onClick: u
        }), (0, n.jsx)(s.zxk, {
          variant: "secondary",
          size: "sm",
          text: o.intl.string(o.t.cpT0Cg),
          onClick: h
        })]
      })
    })]
  })
}