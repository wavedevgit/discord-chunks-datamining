/** Chunk was on web.js **/
/** chunk id: 699833, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk800530 = require("./800530.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk244209 = require("./244209.js");
let d = e => a()().diff(a().unix(e), "days");

function f(e) {
  var t, i, a, f, _;
  if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
  let p = e.message.embeds[0],
    h = null != (a = null == (t = p.fields) ? true : t.find(e => e.rawName === l.Cg.CLASSIFICATION_ID)) ? a : true,
    m = null != (f = null == h ? true : h.rawValue) ? f : true,
    g = null != (_ = null == (i = p.fields) ? true : i.find(e => e.rawName === l.Cg.INCIDENT_TIMESTAMP)) ? _ : true,
    E = null == g || null == g.rawValue ? true : parseFloat(g.rawValue);
  if (null == m || null == E) return null;
  let b = () => {
    (0, s.ZDy)(async () => {
      let {
        default: e
      } = await n.e("18831").then(n.bind(n, 41164));
      return t => (0, r.jsx)(e, {
        classificationId: m,
        source: l.s.SystemDM,
        transitionState: t.transitionState,
        onClose: t.onClose
      })
    })
  };
  return (0, r.jsxs)(s.P3F, {
    onClick: b,
    className: u.safetyPolicyNoticeContainer,
    children: [(0, r.jsxs)("div", {
      className: u.noticeContent,
      children: [(0, r.jsxs)("div", {
        className: u.headerRow,
        children: [(0, r.jsx)(s.aNP, {
          className: u.warningIcon,
          color: o.Z.colors.STATUS_DANGER
        }), (0, r.jsx)(s.Text, {
          variant: "text-md/semibold",
          children: c.intl.string(c.t["4CxGXi"])
        })]
      }), (0, r.jsx)("div", {
        className: u.incidentTiming,
        children: (0, r.jsx)(s.Text, {
          variant: "text-xs/medium",
          children: c.intl.format(c.t.eevFb6, {
            daysAgo: d(E)
          })
        })
      }), (0, r.jsx)("div", {
        className: u.noticeBody,
        children: (0, r.jsx)(s.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: c.intl.string(c.t["5CLb0A"])
        })
      })]
    }), (0, r.jsx)("div", {
      className: u.footerContainer,
      children: (0, r.jsx)(s.Avr, {
        text: c.intl.string(c.t.zKnzwm),
        variant: "secondary"
      })
    })]
  })
}