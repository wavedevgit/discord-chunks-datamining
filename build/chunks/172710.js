/** Chunk was on web.js **/
/** chunk id: 172710, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Mp: () => c,
  Pt: () => l,
  QX: () => u,
  mN: () => d
}), require("./65821.js");
var Chunk723702 = require("./723702.js"),
  Chunk210528 = require("./210528.js"),
  Chunk981616 = require("./981616.js"),
  Chunk272984 = require("./272984.js");

function s(e, t, n) {
  let s;
  (0, r.isDesktop)() || (s = window.open("", "_blank")), (0, a.LI)(e, t).then(e => n(e)).then(e => {
    let {
      resourceType: t,
      resourceId: n
    } = e, r = i.A.isProtocolRegistered() ? o.RQ.PLAYER_OPEN(t, n) : o.RQ.WEB_OPEN(t, n);
    null != s ? s.location.href = r : window.open(r)
  }).catch(() => {
    null != s && s.close()
  })
}

function l() {
  window.open(o.RQ.PREMIUM_SITE)
}

function c(e) {
  var t;
  let {
    sync_id: n,
    metadata: r
  } = e;
  if (null == n) return;
  let a = (0, o.NJ)(null != (t = null == r ? true : r.type) ? t : o.M0.TRACK);
  if (null == a) return;
  let s = i.A.isProtocolRegistered() ? o.RQ.PLAYER_OPEN(a, n) : o.RQ.WEB_OPEN(a, n);
  window.open(s)
}

function u(e, t) {
  s(e, t, t => {
    var n;
    let {
      album_id: r
    } = t;
    return {
      resourceType: (0, o.NJ)(null == (n = e.metadata) ? true : n.type) === o.M0.EPISODE ? o.M0.SHOW : o.M0.ALBUM,
      resourceId: r
    }
  })
}

function d(e, t, n) {
  s(e, t, e => {
    let {
      artist_ids: t
    } = e;
    if (null == t) throw Error("no artist ids in metadata");
    let r = t[n];
    if (null == r) throw Error("invalid artist index");
    return {
      resourceType: o.M0.ARTIST,
      resourceId: r
    }
  })
}