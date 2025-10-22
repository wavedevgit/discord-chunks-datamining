/** Chunk was on 85668 **/
/** chunk id: 720553, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => m
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

function m(t) {
  let {
    url: e,
    trustUrl: n,
    isProtocol: m,
    onConfirm: h,
    onCancel: p,
    onClose: C,
    transitionState: k
  } = t, {
    protocol: _,
    authorityPrefix: f,
    hostname: b,
    theRestOfTheUrl: M,
    shouldTrustUrl: g,
    setShouldTrustUrl: v,
    handleConfirm: D,
    handleCancel: L
  } = (0, s.X)({
    url: e,
    trustUrl: n,
    onConfirm: h,
    onCancel: p,
    onClose: C
  });
  return (0, i.Z)({
    type: l.ImpressionTypes.MODAL,
    name: l.ImpressionNames.MASKED_LINK_MODAL
  }), (0, a.jsxs)(r.Modal, {
    size: "md",
    transitionState: k,
    onClose: C,
    title: u.intl.string(u.t["3w1QGl"]),
    subtitle: m ? u.intl.format(u.t.aCYv1z, {}) : u.intl.string(u.t.soRxRe),
    actions: [{
      text: u.intl.string(u.t["/g10LC"]),
      onClick: () => {
        L(), o.default.track(d.rMx.MASKED_LINK_MODAL_CLICKED, {
          is_trust_url_selected: g,
          action_type: "cancel"
        })
      },
      variant: "secondary"
    }, {
      text: m ? u.intl.string(u.t.COq6kk) : u.intl.string(u.t.NcJfJG),
      onClick: () => {
        D(), o.default.track(d.rMx.MASKED_LINK_MODAL_CLICKED, {
          is_trust_url_selected: g,
          action_type: "confirm"
        })
      },
      variant: "primary"
    }],
    children: [(0, a.jsxs)(c.Ttm, {
      className: x.linkCalloutContainer,
      children: [(0, a.jsxs)(c.Text, {
        tag: "span",
        variant: m ? "text-md/semibold" : "text-md/normal",
        color: m ? "text-default" : "text-muted",
        children: [_, f]
      }), (0, a.jsx)(c.Text, {
        tag: "span",
        variant: m ? "text-md/normal" : "text-md/semibold",
        color: m ? "text-muted" : "text-default",
        children: b
      }), (0, a.jsx)(c.Text, {
        tag: "span",
        variant: "text-md/normal",
        color: "text-muted",
        children: M
      })]
    }), (0, a.jsx)("div", {
      className: x.checkboxMana,
      children: (0, a.jsx)(c.Checkbox, {
        checked: g,
        onChange: t => v(t),
        label: m ? u.intl.format(u.t["haA+Xw"], {
          protocol: _.replace(":", "")
        }) : u.intl.format(u.t.ZgXDsI, {
          domain: b
        }),
        labelType: "secondary"
      })
    })]
  })
}