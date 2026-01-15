/** Chunk was on web.js **/
/** chunk id: 102172, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JL: () => _,
  P9: () => h,
  gR: () => m,
  p9: () => g,
  wq: () => E
}), require("./539854.js"), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk622822 = require("./622822.js"),
  Chunk387343 = require("./387343.js"),
  Chunk258609 = require("./258609.js"),
  Chunk131704 = require("./131704.js");
require("./984933.js");
var Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk979651 = require("./979651.js"),
  Chunk934415 = require("./934415.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function _(e, t, n) {
  var r;
  let i = !(arguments.length > 3) || true === arguments[3] || arguments[3];
  if (e.isPrivate()) returntrue;
  let o = t.getGuild(e.getGuildId()),
    s = null != (r = null == o ? true : o.maxStageVideoChannelUsers) ? r : 0;
  return (!e.isGuildStageVoice() || !(s <= 0)) && (!i || !!(0, a.Z)(e, n)) && !!n.can(f.Plq.STREAM, e) && null != o && o.afkChannelId !== e.id
}

function h(e) {
  switch (e) {
    case 0:
      return p.intl.string(p.t["1i3tSY"]);
    case 1:
      return p.intl.string(p.t.elyVbv);
    case 2:
      return p.intl.string(p.t.pgUTZC);
    case 3:
      return p.intl.string(p.t.b5FqhF);
    default:
      return p.intl.string(p.t["7Xq/nV"])
  }
}

function m(e) {
  switch (e) {
    case 0:
      return "".concat(p.intl.string(p.t["7Xq/nV"]), ": ").concat(p.intl.string(p.t["1i3tSY"]));
    case 1:
      return "".concat(p.intl.string(p.t["7Xq/nV"]), ": ").concat(p.intl.string(p.t.elyVbv));
    case 2:
      return "".concat(p.intl.string(p.t["7Xq/nV"]), ": ").concat(p.intl.string(p.t.pgUTZC));
    case 3:
      return "".concat(p.intl.string(p.t["7Xq/nV"]), ": ").concat(p.intl.string(p.t.b5FqhF));
    default:
      return "".concat(p.intl.string(p.t["7Xq/nV"]), ": ").concat(p.intl.string(p.t["9C444m"]))
  }
}

function g(e, t, n, r, o) {
  let l;
  if (null == e) return [false, 2];
  let c = t.isInChannel(e.id),
    u = e instanceof s.Sf && (0, d.rY)(e, t, n),
    f = (0, a.Z)(e, r),
    p = null != o.getAwaitingRemoteSessionInfo() || null != o.getRemoteSessionId(),
    _ = (0, i.dl)() && (0, i.zd)(e.id);
  p ? l = 0 : _ ? l = 3 : f || c ? u && !c && (l = 1) : l = 2;
  let h = f && !u;
  return [!__OVERLAY__ && !p && !_ && (c || h), l]
}

function E(e) {
  return (0, r.Wu)([u.Z, l.Z, c.Z, o.default], () => g(e, u.Z, l.Z, c.Z, o.default))
}