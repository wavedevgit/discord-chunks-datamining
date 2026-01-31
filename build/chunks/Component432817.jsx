/** Chunk was on 17534 **/
/** chunk id: 432817, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => p
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
let p = e => {
  let {
    channel: t,
    user: n,
    application: p,
    oauth2Token: g
  } = e, f = (0, l.bG)([o.Ay], () => o.Ay.getSelfEmbeddedActivities());
  if (!n.bot || null == p) return null;

  function m() {
    a.A.delete(g.id);
    let e = f.get(p.id);
    null != e && c.A.leaveActivity({
      location: e.location,
      applicationId: p.id
    })
  }
  return (0, r.jsx)(s.Button, {
    variant: "secondary",
    size: "sm",
    text: h.intl.string(h.t["5S3sQF"]),
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
        title: h.intl.string(h.t["DT39A+"]),
        subtitle: h.intl.formatToPlainString(h.t.QWGvxA, {
          applicationName: p.name
        }),
        actions: [{
          text: h.intl.string(h.t["ETE/oC"]),
          variant: "secondary",
          onClick: e.onClose
        }, {
          text: h.intl.string(h.t.xUqheM),
          variant: "critical-primary",
          onClick: () => {
            m(), e.onClose()
          }
        }]
      }, e))), u.default.track(d.HAw.APP_MANAGE_CTA_CLICKED, {
        application_id: p.id,
        channel_id: t.id,
        channel_type: t.type
      })
    }
  })
}