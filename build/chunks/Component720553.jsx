/** Chunk was on 85668 **/
/** chunk id: 720553, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => C
}), require("./704826.js"), require("./35282.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk734610 = require("./734610.js"),
  Chunk990547 = require("./990547.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk213609 = require("./213609.js"),
  Chunk528477 = require("./528477.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk988158 = require("./988158.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk140080 = require("./140080.js");

function C(t) {
  let {
    url: e,
    trustUrl: n,
    isProtocol: C,
    onConfirm: f,
    onCancel: I,
    onClose: h,
    transitionState: p
  } = t, {
    protocol: g,
    authorityPrefix: N,
    hostname: E,
    theRestOfTheUrl: T,
    shouldTrustUrl: b,
    setShouldTrustUrl: v,
    handleConfirm: k,
    handleCancel: L
  } = (0, u.X)({
    url: e,
    trustUrl: n,
    onConfirm: f,
    onCancel: I,
    onClose: h
  });
  return (0, c.Z)({
    type: i.ImpressionTypes.MODAL,
    name: i.ImpressionNames.MASKED_LINK_MODAL
  }), (0, a.jsxs)(s.Modal, {
    size: "md",
    transitionState: p,
    onClose: h,
    title: x.intl.string(x.t["3w1QGl"]),
    subtitle: C ? x.intl.format(x.t.aCYv1z, {}) : x.intl.string(x.t.soRxRe),
    actions: [{
      text: x.intl.string(x.t["/g10LC"]),
      onClick: () => {
        L(), d.default.track(_.rMx.MASKED_LINK_MODAL_CLICKED, {
          is_trust_url_selected: b,
          action_type: "cancel"
        })
      },
      variant: "secondary"
    }, {
      text: C ? x.intl.string(x.t.COq6kk) : x.intl.string(x.t.NcJfJG),
      onClick: () => {
        k(), d.default.track(_.rMx.MASKED_LINK_MODAL_CLICKED, {
          is_trust_url_selected: b,
          action_type: "confirm"
        })
      },
      variant: "primary"
    }],
    children: [(0, a.jsxs)(l.Ttm, {
      className: m.linkCalloutContainer,
      children: [(0, a.jsxs)(l.Text, {
        tag: "span",
        variant: C ? "text-md/semibold" : "text-md/normal",
        color: C ? "text-default" : "text-muted",
        children: [g, N]
      }), (0, a.jsx)(l.Text, {
        tag: "span",
        variant: C ? "text-md/normal" : "text-md/semibold",
        color: C ? "text-muted" : "text-default",
        children: E
      }), (0, a.jsx)(l.Text, {
        tag: "span",
        variant: "text-md/normal",
        color: "text-muted",
        children: T
      })]
    }), (0, a.jsx)("div", {
      className: m.checkboxMana,
      children: (0, a.jsx)(l.Checkbox, {
        checked: b,
        onChange: t => v(t),
        label: C ? x.intl.format(x.t["haA+Xw"], {
          protocol: g.replace(":", "")
        }) : x.intl.format(x.t.ZgXDsI, {
          domain: E
        }),
        labelType: "secondary"
      })
    }), (0, a.jsx)(r.SV, {
      fallback: null,
      children: (0, a.jsx)(o.n, {
        onClose: h
      })
    })]
  })
}