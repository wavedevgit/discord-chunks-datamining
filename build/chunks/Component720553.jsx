/** Chunk was on 21558 **/
/** chunk id: 720553, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./704826.js"), require("./35282.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk990547 = require("./990547.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk213609 = require("./213609.js"),
  Chunk626135 = require("./626135.js"),
  Chunk988158 = require("./988158.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk421108 = require("./421108.js");

function h(t) {
  let {
    url: e,
    trustUrl: n,
    isProtocol: h,
    onConfirm: p,
    onCancel: C,
    onClose: _,
    transitionState: f
  } = t, {
    protocol: k,
    authorityPrefix: M,
    hostname: g,
    theRestOfTheUrl: b,
    shouldTrustUrl: v,
    setShouldTrustUrl: D,
    handleConfirm: L,
    handleCancel: A
  } = (0, d.X)({
    url: e,
    trustUrl: n,
    onConfirm: p,
    onCancel: C,
    onClose: _
  });
  return (0, o.Z)({
    type: l.ImpressionTypes.MODAL,
    name: l.ImpressionNames.MASKED_LINK_MODAL
  }), (0, a.jsxs)(r.Modal, {
    size: "md",
    transitionState: f,
    onClose: _,
    title: m.intl.string(m.t["3w1QGh"]),
    subtitle: h ? m.intl.format(m.t.aCYv19, {}) : m.intl.string(m.t.soRxRU),
    actions: [{
      text: m.intl.string(m.t["/g10LC"]),
      onClick: () => {
        A(), c.default.track(u.rMx.MASKED_LINK_MODAL_CLICKED, {
          is_trust_url_selected: v,
          action_type: "cancel"
        })
      },
      variant: "secondary"
    }, {
      text: h ? m.intl.string(m.t.COq6kp) : m.intl.string(m.t.NcJfJC),
      onClick: () => {
        L(), c.default.track(u.rMx.MASKED_LINK_MODAL_CLICKED, {
          is_trust_url_selected: v,
          action_type: "confirm"
        })
      },
      variant: "primary"
    }],
    children: [(0, a.jsxs)(s.Ttm, {
      className: x.linkCalloutContainer,
      children: [(0, a.jsxs)(s.Text, {
        tag: "span",
        variant: h ? "text-md/semibold" : "text-md/normal",
        color: h ? "text-default" : "text-muted",
        children: [k, M]
      }), (0, a.jsx)(s.Text, {
        tag: "span",
        variant: h ? "text-md/normal" : "text-md/semibold",
        color: h ? "text-muted" : "text-default",
        children: g
      }), (0, a.jsx)(s.Text, {
        tag: "span",
        variant: "text-md/normal",
        color: "text-muted",
        children: b
      })]
    }), (0, a.jsx)(i.$q, {
      className: x.checkboxMana,
      type: i.M0.INVERTED,
      value: v,
      onChange: (t, e) => D(e),
      children: (0, a.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: h ? m.intl.format(m.t["haA+X1"], {
          protocol: k.replace(":", "")
        }) : m.intl.format(m.t.ZgXDsL, {
          domain: g
        })
      })
    })]
  })
}