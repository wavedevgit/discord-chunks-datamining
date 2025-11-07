/** Chunk was on 13140 **/
/** chunk id: 86863, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk384275 = require("./384275.js"),
  Chunk317381 = require("./317381.js"),
  Chunk513202 = require("./513202.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let f = e => {
  let {
    channel: t,
    user: n,
    application: f,
    oauth2Token: h
  } = e, m = (0, i.e7)([s.ZP], () => s.ZP.getSelfEmbeddedActivities());
  if (!n.bot || null == f) return null;

  function g() {
    o.Z.delete(h.id);
    let e = m.get(f.id);
    null != e && c.Z.leaveActivity({
      location: e.location,
      applicationId: f.id
    })
  }
  return (0, r.jsx)(a.Button, {
    variant: "secondary",
    size: "sm",
    text: p.intl.string(p.t["5S3sQF"]),
    onClick: () => {
      (0, a.h7j)(e => (0, r.jsx)(l.u_l, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({
        title: p.intl.string(p.t["DT39A+"]),
        subtitle: p.intl.formatToPlainString(p.t.QWGvxA, {
          applicationName: f.name
        }),
        actions: [{
          text: p.intl.string(p.t["ETE/oC"]),
          variant: "secondary",
          onClick: e.onClose
        }, {
          text: p.intl.string(p.t.xUqheM),
          variant: "critical-primary",
          onClick: () => {
            g(), e.onClose()
          }
        }]
      }, e))), u.default.track(d.rMx.APP_MANAGE_CTA_CLICKED, {
        application_id: f.id,
        channel_id: t.id,
        channel_type: t.type
      })
    }
  })
}