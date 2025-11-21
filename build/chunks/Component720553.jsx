/** Chunk was on 91394 **/
/** chunk id: 720553, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => x
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

function x(e) {
  let {
    url: t,
    trustUrl: n,
    isProtocol: x,
    onConfirm: g,
    onCancel: f,
    onClose: b,
    transitionState: v
  } = e, {
    protocol: j,
    authorityPrefix: _,
    hostname: y,
    theRestOfTheUrl: C,
    shouldTrustUrl: S,
    setShouldTrustUrl: E,
    handleConfirm: N,
    handleCancel: T
  } = (0, u.X)({
    url: t,
    trustUrl: n,
    onConfirm: g,
    onCancel: f,
    onClose: b
  });
  return (0, o.Z)({
    type: r.ImpressionTypes.MODAL,
    name: r.ImpressionNames.MASKED_LINK_MODAL
  }), (0, a.jsxs)(i.Modal, {
    size: "md",
    transitionState: v,
    onClose: b,
    title: p.intl.string(p.t["3w1QGl"]),
    subtitle: x ? p.intl.format(p.t.aCYv1z, {}) : p.intl.string(p.t.soRxRe),
    actions: [{
      text: p.intl.string(p.t["/g10LC"]),
      onClick: () => {
        T(), d.default.track(m.rMx.MASKED_LINK_MODAL_CLICKED, {
          is_trust_url_selected: S,
          action_type: "cancel"
        })
      },
      variant: "secondary"
    }, {
      text: x ? p.intl.string(p.t.COq6kk) : p.intl.string(p.t.NcJfJG),
      onClick: () => {
        N(), d.default.track(m.rMx.MASKED_LINK_MODAL_CLICKED, {
          is_trust_url_selected: S,
          action_type: "confirm"
        })
      },
      variant: "primary"
    }],
    children: [(0, a.jsxs)(s.Ttm, {
      className: h.linkCalloutContainer,
      children: [(0, a.jsxs)(s.Text, {
        tag: "span",
        variant: x ? "text-md/semibold" : "text-md/normal",
        color: x ? "text-default" : "text-muted",
        children: [j, _]
      }), (0, a.jsx)(s.Text, {
        tag: "span",
        variant: x ? "text-md/normal" : "text-md/semibold",
        color: x ? "text-muted" : "text-default",
        children: y
      }), (0, a.jsx)(s.Text, {
        tag: "span",
        variant: "text-md/normal",
        color: "text-muted",
        children: C
      })]
    }), (0, a.jsx)("div", {
      className: h.checkboxMana,
      children: (0, a.jsx)(s.Checkbox, {
        checked: S,
        onChange: e => E(e),
        label: x ? p.intl.format(p.t["haA+Xw"], {
          protocol: j.replace(":", "")
        }) : p.intl.format(p.t.ZgXDsI, {
          domain: y
        }),
        labelType: "secondary"
      })
    }), (0, a.jsx)(l.SV, {
      fallback: null,
      children: (0, a.jsx)(c.n, {
        onClose: b
      })
    })]
  })
}