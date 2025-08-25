/** Chunk was on web.js **/
/** chunk id: 102172, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JL: () => h,
  P9: () => m,
  gR: () => g,
  h_: () => y,
  p9: () => E,
  wq: () => b
}), require("./539854.js"), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk622822 = require("./622822.js"),
  Chunk387343 = require("./387343.js"),
  Chunk258609 = require("./258609.js"),
  Chunk131704 = require("./131704.js"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk979651 = require("./979651.js"),
  Chunk934415 = require("./934415.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function h(e, t, n) {
  var r;
  let i = !(arguments.length > 3) || true === arguments[3] || arguments[3];
  if (e.isPrivate()) returntrue;
  let a = t.getGuild(e.getGuildId()),
    s = null != (r = null == a ? true : a.maxStageVideoChannelUsers) ? r : 0;
  return (!e.isGuildStageVoice() || !(s <= 0)) && (!i || !!(0, o.Z)(e, n)) && !!n.can(_.Plq.STREAM, e) && null != a && a.afkChannelId !== e.id
}

function m(e) {
  switch (e) {
    case 0:
      return p.intl.string(p.t["1i3tSU"]);
    case 1:
      return p.intl.string(p.t.elyVbm);
    case 2:
      return p.intl.string(p.t.pgUTZG);
    case 3:
      return p.intl.string(p.t.b5FqhI);
    default:
      return p.intl.string(p.t["7Xq/nZ"])
  }
}

function g(e) {
  switch (e) {
    case 0:
      return "".concat(p.intl.string(p.t["7Xq/nZ"]), ": ").concat(p.intl.string(p.t["1i3tSU"]));
    case 1:
      return "".concat(p.intl.string(p.t["7Xq/nZ"]), ": ").concat(p.intl.string(p.t.elyVbm));
    case 2:
      return "".concat(p.intl.string(p.t["7Xq/nZ"]), ": ").concat(p.intl.string(p.t.pgUTZG));
    case 3:
      return "".concat(p.intl.string(p.t["7Xq/nZ"]), ": ").concat(p.intl.string(p.t.b5FqhI));
    default:
      return "".concat(p.intl.string(p.t["7Xq/nZ"]), ": ").concat(p.intl.string(p.t["9C444u"]))
  }
}

function E(e, t, n, r, a) {
  let l;
  if (null == e) return [false, 2];
  let c = t.isInChannel(e.id),
    u = e instanceof s.Sf && (0, f.rY)(e, t, n),
    d = (0, o.Z)(e, r),
    _ = null != a.getAwaitingRemoteSessionInfo() || null != a.getRemoteSessionId(),
    p = (0, i.dl)() && (0, i.zd)(e.id);
  _ ? l = 0 : p ? l = 3 : d || c ? u && !c && (l = 1) : l = 2;
  let h = d && !u;
  return [!__OVERLAY__ && !_ && !p && (c || h), l]
}

function b(e) {
  return (0, r.Wu)([d.Z, c.Z, u.Z, a.Z], () => E(e, d.Z, c.Z, u.Z, a.Z))
}

function y(e, t, n) {
  let r = [];
  for (let {
      channel: i
    }
    of e[l.Zb]) h(i, t, n) && r.push(i);
  return r
}