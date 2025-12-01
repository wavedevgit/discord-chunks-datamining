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
    transitionState: g
  } = t, {
    protocol: p,
    authorityPrefix: E,
    hostname: N,
    theRestOfTheUrl: k,
    shouldTrustUrl: T,
    setShouldTrustUrl: L,
    handleConfirm: v,
    handleCancel: b
  } = (0, u.X)({
    url: e,
    trustUrl: n,
    onConfirm: f,
    onCancel: I,
    onClose: h
  });
  return (0, c.Z)({
    type: s.ImpressionTypes.MODAL,
    name: s.ImpressionNames.MASKED_LINK_MODAL
  }), (0, a.jsxs)(i.Modal, {
    size: "md",
    transitionState: g,
    onClose: h,
    title: x.intl.string(x.t["3w1QGl"]),
    subtitle: C ? x.intl.format(x.t.aCYv1z, {}) : x.intl.string(x.t.soRxRe),
    actions: [{
      text: x.intl.string(x.t["/g10LC"]),
      onClick: () => {
        b(), d.default.track(_.rMx.MASKED_LINK_MODAL_CLICKED, {
          is_trust_url_selected: T,
          action_type: "cancel"
        })
      },
      variant: "secondary"
    }, {
      text: C ? x.intl.string(x.t.COq6kk) : x.intl.string(x.t.NcJfJG),
      onClick: () => {
        v(), d.default.track(_.rMx.MASKED_LINK_MODAL_CLICKED, {
          is_trust_url_selected: T,
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
        children: [p, E]
      }), (0, a.jsx)(l.Text, {
        tag: "span",
        variant: C ? "text-md/normal" : "text-md/semibold",
        color: C ? "text-muted" : "text-default",
        children: N
      }), (0, a.jsx)(l.Text, {
        tag: "span",
        variant: "text-md/normal",
        color: "text-muted",
        children: k
      })]
    }), (0, a.jsx)("div", {
      className: m.checkboxMana,
      children: (0, a.jsx)(l.Checkbox, {
        checked: T,
        onChange: t => L(t),
        label: C ? x.intl.format(x.t["haA+Xw"], {
          protocol: p.replace(":", "")
        }) : x.intl.format(x.t.ZgXDsI, {
          domain: N
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