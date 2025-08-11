/** Chunk was on web.js **/
/** chunk id: 86863, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => g
});
var Chunk255367 = require("./255367.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk384275 = require("./384275.js"),
  Chunk468026 = require("./468026.js"),
  Chunk317381 = require("./317381.js"),
  Chunk513202 = require("./513202.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t, n) {
  let i = _.intl.formatToPlainString(_.t.QWGvxM, {
    applicationName: e.name
  });
  (0, a.h7j)(e => <l.default{...h({
    title: _.intl.string(_.t.DT39Aw),
    body: i,
    confirmText: _.intl.string(_.t.xUqheH),
    confirmColor: o.Tt.RED,
    cancelText: _.intl.string(_.t["ETE/oK"]),
    onConfirm: t
  }, e)} />), d.default.track(f.rMx.APP_MANAGE_CTA_CLICKED, {
    application_id: e.id,
    channel_id: n.id,
    channel_type: n.type
  })
}
let g = e => {
  let {
    className: t,
    channel: n,
    user: a,
    application: l,
    oauth2Token: d
  } = e, f = (0, i.e7)([c.ZP], () => c.ZP.getSelfEmbeddedActivities());
  if (!a.bot || null == l) return null;

  function p() {
    s.Z.delete(d.id);
    let e = f.get(l.id);
    null != e && u.Z.leaveActivity({
      location: e.location,
      applicationId: l.id
    })
  }
  return <o.zx className={t} size={o.Ph.SMALL} color={o.zx.Colors.PRIMARY} onClick={() => m(l, p, n)}>{_.intl.string(_.t["5S3sQE"])}</o.zx>
}