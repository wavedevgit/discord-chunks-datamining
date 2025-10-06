/** Chunk was on 85668 **/
/** chunk id: 720553, original params: t,e,a (module,exports,require) **/
require.d(exports, {
  default: () => x
}), require("./704826.js"), require("./35282.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk990547 = require("./990547.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk213609 = require("./213609.js"),
  Chunk626135 = require("./626135.js"),
  Chunk988158 = require("./988158.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk140080 = require("./140080.js");

function x(t) {
  let {
    url: e,
    trustUrl: a,
    isProtocol: x,
    onConfirm: p,
    onCancel: h,
    onClose: C,
    transitionState: _
  } = t, {
    protocol: k,
    authorityPrefix: f,
    hostname: M,
    theRestOfTheUrl: b,
    shouldTrustUrl: L,
    setShouldTrustUrl: g,
    handleConfirm: D,
    handleCancel: v
  } = (0, i.X)({
    url: e,
    trustUrl: a,
    onConfirm: p,
    onCancel: h,
    onClose: C
  });
  return (0, s.Z)({
    type: l.ImpressionTypes.MODAL,
    name: l.ImpressionNames.MASKED_LINK_MODAL
  }), (0, n.jsxs)(r.Modal, {
    size: "md",
    transitionState: _,
    onClose: C,
    title: u.intl.string(u.t["3w1QGh"]),
    subtitle: x ? u.intl.format(u.t.aCYv19, {}) : u.intl.string(u.t.soRxRU),
    actions: [{
      text: u.intl.string(u.t["/g10LC"]),
      onClick: () => {
        v(), c.default.track(d.rMx.MASKED_LINK_MODAL_CLICKED, {
          is_trust_url_selected: L,
          action_type: "cancel"
        })
      },
      variant: "secondary"
    }, {
      text: x ? u.intl.string(u.t.COq6kp) : u.intl.string(u.t.NcJfJC),
      onClick: () => {
        D(), c.default.track(d.rMx.MASKED_LINK_MODAL_CLICKED, {
          is_trust_url_selected: L,
          action_type: "confirm"
        })
      },
      variant: "primary"
    }],
    children: [(0, n.jsxs)(o.Ttm, {
      className: m.linkCalloutContainer,
      children: [(0, n.jsxs)(o.Text, {
        tag: "span",
        variant: x ? "text-md/semibold" : "text-md/normal",
        color: x ? "text-default" : "text-muted",
        children: [k, f]
      }), (0, n.jsx)(o.Text, {
        tag: "span",
        variant: x ? "text-md/normal" : "text-md/semibold",
        color: x ? "text-muted" : "text-default",
        children: M
      }), (0, n.jsx)(o.Text, {
        tag: "span",
        variant: "text-md/normal",
        color: "text-muted",
        children: b
      })]
    }), (0, n.jsx)(o.VLL, {
      className: m.checkboxMana,
      checked: L,
      onChange: t => g(t),
      label: x ? u.intl.format(u.t["haA+X1"], {
        protocol: k.replace(":", "")
      }) : u.intl.format(u.t.ZgXDsL, {
        domain: M
      }),
      labelType: "secondary"
    })]
  })
}