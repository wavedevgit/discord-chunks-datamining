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

function o(e, t, n) {
  let o;
  (0, r.isDesktop)() || (o = window.open("", "_blank")), (0, a.LI)(e, t).then(e => n(e)).then(e => {
    let {
      resourceType: t,
      resourceId: n
    } = e, r = i.A.isProtocolRegistered() ? s.RQ.PLAYER_OPEN(t, n) : s.RQ.WEB_OPEN(t, n);
    null != o ? o.location.href = r : window.open(r)
  }).catch(() => {
    null != o && o.close()
  })
}

function l() {
  window.open(s.RQ.PREMIUM_SITE)
}

function c(e) {
  var t;
  let {
    sync_id: n,
    metadata: r
  } = e;
  if (null == n) return;
  let a = (0, s.NJ)(null != (t = null == r ? true : r.type) ? t : s.M0.TRACK);
  if (null == a) return;
  let o = i.A.isProtocolRegistered() ? s.RQ.PLAYER_OPEN(a, n) : s.RQ.WEB_OPEN(a, n);
  window.open(o)
}

function u(e, t) {
  o(e, t, t => {
    var n;
    let {
      album_id: r
    } = t;
    return {
      resourceType: (0, s.NJ)(null == (n = e.metadata) ? true : n.type) === s.M0.EPISODE ? s.M0.SHOW : s.M0.ALBUM,
      resourceId: r
    }
  })
}

function d(e, t, n) {
  o(e, t, e => {
    let {
      artist_ids: t
    } = e;
    if (null == t) throw Error("no artist ids in metadata");
    let r = t[n];
    if (null == r) throw Error("invalid artist index");
    return {
      resourceType: s.M0.ARTIST,
      resourceId: r
    }
  })
}