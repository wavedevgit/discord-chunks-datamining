/** Chunk was on 9145 **/
/** chunk id: 86863, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk384275 = require("./384275.js"),
  Chunk468026 = require("./468026.jsx"),
  Chunk317381 = require("./317381.js"),
  Chunk513202 = require("./513202.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let f = e => {
  let {
    className: t,
    channel: n,
    user: f,
    application: m,
    oauth2Token: g
  } = e, b = (0, r.e7)([c.ZP], () => c.ZP.getSelfEmbeddedActivities());
  if (!f.bot || null == m) return null;

  function C() {
    o.Z.delete(g.id);
    let e = b.get(m.id);
    null != e && u.Z.leaveActivity({
      location: e.location,
      applicationId: m.id
    })
  }
  return (0, i.jsx)(l.zx, {
    className: t,
    size: l.Ph.SMALL,
    color: l.zx.Colors.PRIMARY,
    onClick: () => (function(e, t, n) {
      let r = h.intl.formatToPlainString(h.t.QWGvxM, {
        applicationName: e.name
      });
      (0, a.h7j)(e => (0, i.jsx)(s.default, function(e) {
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
        title: h.intl.string(h.t.DT39Aw),
        body: r,
        confirmText: h.intl.string(h.t.xUqheH),
        confirmColor: l.Tt.RED,
        cancelText: h.intl.string(h.t["ETE/oK"]),
        onConfirm: t
      }, e))), d.default.track(p.rMx.APP_MANAGE_CTA_CLICKED, {
        application_id: e.id,
        channel_id: n.id,
        channel_type: n.type
      })
    })(m, C, n),
    children: h.intl.string(h.t["5S3sQE"])
  })
}