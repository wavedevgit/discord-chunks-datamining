/** Chunk was on web.js **/
/** chunk id: 899894, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk989349 = require("./989349.js"),
  a = require.n(Chunk989349),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk239093 = require("./239093.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk153400 = require("./153400.js");
let d = e => a()().diff(a().unix(e), "days");

function f(e) {
  var t, i, a, f, p;
  if (null == e.message.embeds || null == e.message.embeds[0].fields) return null;
  let _ = e.message.embeds[0],
    h = null != (t = null == (f = _.fields) ? true : f.find(e => e.rawName === l.AT.CLASSIFICATION_ID)) ? t : true,
    m = null != (i = null == h ? true : h.rawValue) ? i : true,
    g = null != (a = null == (p = _.fields) ? true : p.find(e => e.rawName === l.AT.INCIDENT_TIMESTAMP)) ? a : true,
    E = null == g || null == g.rawValue ? true : parseFloat(g.rawValue);
  if (null == m || null == E) return null;
  let y = () => {
    (0, o.mMO)(async () => {
      let {
        default: e
      } = await n.e("9407").then(n.bind(n, 956450));
      return t => (0, r.jsx)(e, {
        classificationId: m,
        source: l.XN.SystemDM,
        transitionState: t.transitionState,
        onClose: t.onClose
      })
    })
  };
  return (0, r.jsxs)(o.DUT, {
    onClick: y,
    className: u.o3,
    children: [(0, r.jsxs)("div", {
      className: u.qZ,
      children: [(0, r.jsxs)("div", {
        className: u.U1,
        children: [(0, r.jsx)(o.id, {
          className: u.QW,
          color: s.A.colors.ICON_FEEDBACK_CRITICAL
        }), (0, r.jsx)(o.Text, {
          variant: "text-md/semibold",
          children: c.intl.string(c.t["4CxGXi"])
        })]
      }), (0, r.jsx)("div", {
        className: u.VU,
        children: (0, r.jsx)(o.Text, {
          variant: "text-xs/medium",
          children: c.intl.format(c.t.eevFb6, {
            daysAgo: d(E)
          })
        })
      }), (0, r.jsx)("div", {
        className: u.vv,
        children: (0, r.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: c.intl.string(c.t["5CLb0A"])
        })
      })]
    }), (0, r.jsx)("div", {
      className: u.xQ,
      children: (0, r.jsx)(o.QWc, {
        text: c.intl.string(c.t.zKnzwm),
        variant: "secondary"
      })
    })]
  })
}