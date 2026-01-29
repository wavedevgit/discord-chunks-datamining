/** Chunk was on 92917 **/
/** chunk id: 899894, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk989349 = require("./989349.js"),
  l = require.n(Chunk989349),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk239093 = require("./239093.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk153400 = require("./153400.js");

function d(e) {
  var t, i, d, p, m;
  if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
  let f = e.message.embeds[0],
    g = null != (t = null == (p = f.fields) ? true : p.find(e => e.rawName === o.AT.CLASSIFICATION_ID)) ? t : true,
    h = null != (i = null == g ? true : g.rawValue) ? i : true,
    _ = null != (d = null == (m = f.fields) ? true : m.find(e => e.rawName === o.AT.INCIDENT_TIMESTAMP)) ? d : true,
    b = null == _ || null == _.rawValue ? true : parseFloat(_.rawValue);
  return null == h || null == b ? null : (0, r.jsxs)(s.DUT, {
    onClick: () => {
      (0, s.mMO)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("83518"), n.e("9407"), n.e("1708")]).then(n.bind(n, 956450));
        return t => (0, r.jsx)(e, {
          classificationId: h,
          source: o.XN.SystemDM,
          transitionState: t.transitionState,
          onClose: t.onClose
        })
      })
    },
    className: u.o3,
    children: [(0, r.jsxs)("div", {
      className: u.qZ,
      children: [(0, r.jsxs)("div", {
        className: u.U1,
        children: [(0, r.jsx)(s.id, {
          className: u.QW,
          color: a.A.colors.ICON_FEEDBACK_CRITICAL
        }), (0, r.jsx)(s.Text, {
          variant: "text-md/semibold",
          children: c.intl.string(c.t["4CxGXi"])
        })]
      }), (0, r.jsx)("div", {
        className: u.VU,
        children: (0, r.jsx)(s.Text, {
          variant: "text-xs/medium",
          children: c.intl.format(c.t.eevFb6, {
            daysAgo: l()().diff(l().unix(b), "days")
          })
        })
      }), (0, r.jsx)("div", {
        className: u.vv,
        children: (0, r.jsx)(s.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: c.intl.string(c.t["5CLb0A"])
        })
      })]
    }), (0, r.jsx)("div", {
      className: u.xQ,
      children: (0, r.jsx)(s.QWc, {
        text: c.intl.string(c.t.zKnzwm),
        variant: "secondary"
      })
    })]
  })
}