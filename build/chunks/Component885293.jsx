/** Chunk was on 22477 **/
/** chunk id: 885293, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => f
}), require("./747238.js"), require("./812715.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk484030 = require("./484030.js"),
  Chunk110259 = require("./110259.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk139286 = require("./139286.js"),
  Chunk422230 = require("./422230.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk60888 = require("./60888.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk589049 = require("./589049.js");

function f(e) {
  let {
    url: t,
    trustUrl: n,
    isProtocol: f,
    onConfirm: x,
    onCancel: b,
    onClose: g,
    transitionState: v
  } = e, {
    protocol: j,
    authorityPrefix: y,
    hostname: _,
    theRestOfTheUrl: A,
    shouldTrustUrl: C,
    setShouldTrustUrl: S,
    handleConfirm: O,
    handleCancel: E
  } = (0, u.u)({
    url: t,
    trustUrl: n,
    onConfirm: x,
    onCancel: b,
    onClose: g
  });
  return (0, o.A)({
    type: i.ImpressionTypes.MODAL,
    name: i.ImpressionNames.MASKED_LINK_MODAL
  }), (0, a.jsxs)(r.Modal, {
    size: "md",
    transitionState: v,
    onClose: g,
    title: p.intl.string(p.t["3w1QGl"]),
    subtitle: f ? p.intl.format(p.t.aCYv1z, {}) : p.intl.string(p.t.soRxRe),
    actions: [{
      text: p.intl.string(p.t["/g10LC"]),
      onClick: () => {
        E(), d.default.track(m.HAw.MASKED_LINK_MODAL_CLICKED, {
          is_trust_url_selected: C,
          action_type: "cancel"
        })
      },
      variant: "secondary"
    }, {
      text: f ? p.intl.string(p.t.COq6kk) : p.intl.string(p.t.NcJfJG),
      onClick: () => {
        O(), d.default.track(m.HAw.MASKED_LINK_MODAL_CLICKED, {
          is_trust_url_selected: C,
          action_type: "confirm"
        })
      },
      variant: "primary"
    }],
    children: [(0, a.jsxs)(s.HOs, {
      className: h.ul,
      children: [(0, a.jsxs)(s.Text, {
        tag: "span",
        variant: f ? "text-md/semibold" : "text-md/normal",
        color: f ? "text-default" : "text-muted",
        children: [j, y]
      }), (0, a.jsx)(s.Text, {
        tag: "span",
        variant: f ? "text-md/normal" : "text-md/semibold",
        color: f ? "text-muted" : "text-default",
        children: _
      }), (0, a.jsx)(s.Text, {
        tag: "span",
        variant: "text-md/normal",
        color: "text-muted",
        children: A
      })]
    }), (0, a.jsx)("div", {
      className: h.F5,
      children: (0, a.jsx)(s.Checkbox, {
        checked: C,
        onChange: e => S(e),
        label: f ? p.intl.format(p.t["haA+Xw"], {
          protocol: j.replace(":", "")
        }) : p.intl.format(p.t.ZgXDsI, {
          domain: _
        }),
        labelType: "secondary"
      })
    }), (0, a.jsx)(l.tH, {
      fallback: null,
      children: (0, a.jsx)(c.l, {
        onClose: g
      })
    })]
  })
}