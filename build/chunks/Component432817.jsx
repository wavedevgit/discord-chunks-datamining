/** Chunk was on 78528 **/
/** chunk id: 432817, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk824552 = require("./824552.js"),
  Chunk933958 = require("./933958.js"),
  Chunk869003 = require("./869003.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let h = e => {
  let {
    channel: t,
    user: n,
    application: h,
    oauth2Token: f
  } = e, g = (0, l.bG)([o.Ay], () => o.Ay.getSelfEmbeddedActivities());
  if (!n.bot || null == h) return null;

  function m() {
    a.A.delete(f.id);
    let e = g.get(h.id);
    null != e && c.A.leaveActivity({
      location: e.location,
      applicationId: h.id
    })
  }
  return (0, r.jsx)(s.Button, {
    variant: "secondary",
    size: "sm",
    text: p.intl.string(p.t["5S3sQF"]),
    onClick: () => {
      (0, s.qfG)(e => (0, r.jsx)(i.aFV, function(e) {
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
            m(), e.onClose()
          }
        }]
      }, e))), u.default.track(d.HAw.APP_MANAGE_CTA_CLICKED, {
        application_id: h.id,
        channel_id: t.id,
        channel_type: t.type
      })
    }
  })
}