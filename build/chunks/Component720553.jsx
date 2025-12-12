/** Chunk was on 85668 **/
/** chunk id: 720553, original params: t,e,a (module,exports,require) **/
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
  Chunk444301 = require("./444301.js");

function C(t) {
  let {
    url: e,
    trustUrl: a,
    isProtocol: C,
    onConfirm: f,
    onCancel: I,
    onClose: p,
    transitionState: h
  } = t, {
    protocol: g,
    authorityPrefix: E,
    hostname: N,
    theRestOfTheUrl: T,
    shouldTrustUrl: b,
    setShouldTrustUrl: L,
    handleConfirm: v,
    handleCancel: k
  } = (0, u.X)({
    url: e,
    trustUrl: a,
    onConfirm: f,
    onCancel: I,
    onClose: p
  });
  return (0, c.Z)({
    type: i.ImpressionTypes.MODAL,
    name: i.ImpressionNames.MASKED_LINK_MODAL
  }), (0, n.jsxs)(l.Modal, {
    size: "md",
    transitionState: h,
    onClose: p,
    title: m.intl.string(m.t["3w1QGl"]),
    subtitle: C ? m.intl.format(m.t.aCYv1z, {}) : m.intl.string(m.t.soRxRe),
    actions: [{
      text: m.intl.string(m.t["/g10LC"]),
      onClick: () => {
        k(), d.default.track(_.rMx.MASKED_LINK_MODAL_CLICKED, {
          is_trust_url_selected: b,
          action_type: "cancel"
        })
      },
      variant: "secondary"
    }, {
      text: C ? m.intl.string(m.t.COq6kk) : m.intl.string(m.t.NcJfJG),
      onClick: () => {
        v(), d.default.track(_.rMx.MASKED_LINK_MODAL_CLICKED, {
          is_trust_url_selected: b,
          action_type: "confirm"
        })
      },
      variant: "primary"
    }],
    children: [(0, n.jsxs)(s.Ttm, {
      className: x.linkCalloutContainer,
      children: [(0, n.jsxs)(s.Text, {
        tag: "span",
        variant: C ? "text-md/semibold" : "text-md/normal",
        color: C ? "text-default" : "text-muted",
        children: [g, E]
      }), (0, n.jsx)(s.Text, {
        tag: "span",
        variant: C ? "text-md/normal" : "text-md/semibold",
        color: C ? "text-muted" : "text-default",
        children: N
      }), (0, n.jsx)(s.Text, {
        tag: "span",
        variant: "text-md/normal",
        color: "text-muted",
        children: T
      })]
    }), (0, n.jsx)("div", {
      className: x.checkboxMana,
      children: (0, n.jsx)(s.Checkbox, {
        checked: b,
        onChange: t => L(t),
        label: C ? m.intl.format(m.t["haA+Xw"], {
          protocol: g.replace(":", "")
        }) : m.intl.format(m.t.ZgXDsI, {
          domain: N
        }),
        labelType: "secondary"
      })
    }), (0, n.jsx)(r.SV, {
      fallback: null,
      children: (0, n.jsx)(o.n, {
        onClose: p
      })
    })]
  })
}