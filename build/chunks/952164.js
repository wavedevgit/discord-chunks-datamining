/** Chunk was on web.js **/
/** chunk id: 952164, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  KK: () => l,
  Z5: () => u,
  aG: () => c,
  d$: () => d
}), require("./415506.js");
var Chunk358085 = require("./358085.js"),
  Chunk18323 = require("./18323.js"),
  Chunk647162 = require("./647162.js"),
  Chunk616922 = require("./616922.js");

function s(e, t, n) {
  let s;
  (0, r.isDesktop)() || (s = window.open("", "_blank")), (0, o.iy)(e, t).then(e => n(e)).then(e => {
    let {
      resourceType: t,
      resourceId: n
    } = e, r = i.Z.isProtocolRegistered() ? a.C7.PLAYER_OPEN(t, n) : a.C7.WEB_OPEN(t, n);
    null != s ? s.location.href = r : window.open(r)
  }).catch(() => {
    null != s && s.close()
  })
}

function l() {
  window.open(Chunk616922.C7.PREMIUM_SITE)
}

function c(e) {
  var t;
  let {
    sync_id: n,
    metadata: r
  } = e;
  if (null == n) return;
  let o = (0, a.c8)(null != (t = null == r ? true : r.type) ? t : a.Hw.TRACK);
  if (null == o) return;
  let s = i.Z.isProtocolRegistered() ? a.C7.PLAYER_OPEN(o, n) : a.C7.WEB_OPEN(o, n);
  window.open(s)
}

function u(e, t) {
  s(e, t, t => {
    var n;
    let {
      album_id: r
    } = t;
    return {
      resourceType: (0, a.c8)(null == (n = e.metadata) ? true : n.type) === a.Hw.EPISODE ? a.Hw.SHOW : a.Hw.ALBUM,
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
      resourceType: a.Hw.ARTIST,
      resourceId: r
    }
  })
}