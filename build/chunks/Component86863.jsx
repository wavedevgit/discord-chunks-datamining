/** Chunk was on 57336 **/
/** chunk id: 86863, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => h
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
let h = e => {
  let {
    channel: t,
    user: n,
    application: h,
    oauth2Token: f
  } = e, m = (0, r.e7)([s.ZP], () => s.ZP.getSelfEmbeddedActivities());
  if (!n.bot || null == h) return null;

  function g() {
    o.Z.delete(f.id);
    let e = m.get(h.id);
    null != e && c.Z.leaveActivity({
      location: e.location,
      applicationId: h.id
    })
  }
  return (0, i.jsx)(a.Button, {
    variant: "secondary",
    size: "sm",
    text: p.intl.string(p.t["5S3sQF"]),
    onClick: () => {
      (0, a.h7j)(e => (0, i.jsx)(l.u_l, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({
        title: p.intl.string(p.t["DT39A+"]),
        subtitle: p.intl.formatToPlainString(p.t.QWGvxA, {
          applicationName: h.name
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
        application_id: h.id,
        channel_id: t.id,
        channel_type: t.type
      })
    }
  })
}