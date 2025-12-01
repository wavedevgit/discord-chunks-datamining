/** Chunk was on 85668 **/
/** chunk id: 720553, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => f
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

function f(t) {
  let {
    url: e,
    trustUrl: n,
    isProtocol: f,
    onConfirm: h,
    onCancel: C,
    onClose: g,
    transitionState: p
  } = t, {
    protocol: k,
    authorityPrefix: N,
    hostname: v,
    theRestOfTheUrl: I,
    shouldTrustUrl: b,
    setShouldTrustUrl: T,
    handleConfirm: j,
    handleCancel: A
  } = (0, u.X)({
    url: e,
    trustUrl: n,
    onConfirm: h,
    onCancel: C,
    onClose: g
  });
  return (0, c.Z)({
    type: s.ImpressionTypes.MODAL,
    name: s.ImpressionNames.MASKED_LINK_MODAL
  }), (0, a.jsxs)(l.Modal, {
    size: "md",
    transitionState: p,
    onClose: g,
    title: x.intl.string(x.t["3w1QGl"]),
    subtitle: f ? x.intl.format(x.t.aCYv1z, {}) : x.intl.string(x.t.soRxRe),
    actions: [{
      text: x.intl.string(x.t["/g10LC"]),
      onClick: () => {
        A(), d.default.track(m.rMx.MASKED_LINK_MODAL_CLICKED, {
          is_trust_url_selected: b,
          action_type: "cancel"
        })
      },
      variant: "secondary"
    }, {
      text: f ? x.intl.string(x.t.COq6kk) : x.intl.string(x.t.NcJfJG),
      onClick: () => {
        j(), d.default.track(m.rMx.MASKED_LINK_MODAL_CLICKED, {
          is_trust_url_selected: b,
          action_type: "confirm"
        })
      },
      variant: "primary"
    }],
    children: [(0, a.jsxs)(i.Ttm, {
      className: _.linkCalloutContainer,
      children: [(0, a.jsxs)(i.Text, {
        tag: "span",
        variant: f ? "text-md/semibold" : "text-md/normal",
        color: f ? "text-default" : "text-muted",
        children: [k, N]
      }), (0, a.jsx)(i.Text, {
        tag: "span",
        variant: f ? "text-md/normal" : "text-md/semibold",
        color: f ? "text-muted" : "text-default",
        children: v
      }), (0, a.jsx)(i.Text, {
        tag: "span",
        variant: "text-md/normal",
        color: "text-muted",
        children: I
      })]
    }), (0, a.jsx)("div", {
      className: _.checkboxMana,
      children: (0, a.jsx)(i.Checkbox, {
        checked: b,
        onChange: t => T(t),
        label: f ? x.intl.format(x.t["haA+Xw"], {
          protocol: k.replace(":", "")
        }) : x.intl.format(x.t.ZgXDsI, {
          domain: v
        }),
        labelType: "secondary"
      })
    }), (0, a.jsx)(r.SV, {
      fallback: null,
      children: (0, a.jsx)(o.n, {
        onClose: g
      })
    })]
  })
}