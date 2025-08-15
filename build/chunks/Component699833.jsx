/** Chunk was on 66866 **/
/** chunk id: 699833, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk800530 = require("./800530.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk832467 = require("./832467.js");

function d(e) {
  var t, i, d, p, m;
  if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
  let f = e.message.embeds[0],
    _ = null != (d = null == (t = f.fields) ? true : t.find(e => e.rawName === s.Cg.CLASSIFICATION_ID)) ? d : true,
    g = null != (p = null == _ ? true : _.rawValue) ? p : true,
    h = null != (m = null == (i = f.fields) ? true : i.find(e => e.rawName === s.Cg.INCIDENT_TIMESTAMP)) ? m : true,
    b = null == h || null == h.rawValue ? true : parseFloat(h.rawValue);
  return null == g || null == b ? null : (0, r.jsxs)(o.P3F, {
    onClick: () => {
      (0, o.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("25183"), n.e("3940"), n.e("18831"), n.e("33587")]).then(n.bind(n, 41164));
        return t => (0, r.jsx)(e, {
          classificationId: g,
          source: s.s.SystemDM,
          transitionState: t.transitionState,
          onClose: t.onClose
        })
      })
    },
    className: u.safetyPolicyNoticeContainer,
    children: [(0, r.jsxs)("div", {
      className: u.noticeContent,
      children: [(0, r.jsxs)("div", {
        className: u.headerRow,
        children: [(0, r.jsx)(o.aNP, {
          className: u.warningIcon,
          color: a.Z.colors.STATUS_DANGER
        }), (0, r.jsx)(o.Text, {
          variant: "text-md/semibold",
          children: c.intl.string(c.t["4CxGXl"])
        })]
      }), (0, r.jsx)("div", {
        className: u.incidentTiming,
        children: (0, r.jsx)(o.Text, {
          variant: "text-xs/medium",
          children: c.intl.format(c.t.eevFb2, {
            daysAgo: l()().diff(l().unix(b), "days")
          })
        })
      }), (0, r.jsx)("div", {
        className: u.noticeBody,
        children: (0, r.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: c.intl.string(c.t["5CLb0N"])
        })
      })]
    }), (0, r.jsx)("div", {
      className: u.footerContainer,
      children: (0, r.jsx)(o.Avr, {
        text: c.intl.string(c.t.zKnzws),
        variant: "secondary"
      })
    })]
  })
}