/** Chunk was on web.js **/
/** chunk id: 279250, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CQ: () => m,
  CT: () => h,
  eo: () => g,
  vz: () => _,
  zP: () => E
}), require("./321073.js"), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk323073 = require("./323073.js"),
  Chunk890615 = require("./890615.js"),
  Chunk643501 = require("./643501.js"),
  Chunk95701 = require("./95701.js");
require("./808728.js");
var Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk977997 = require("./977997.js"),
  Chunk147036 = require("./147036.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function _(e, t, n) {
  var r;
  let i = !(arguments.length > 3) || true === arguments[3] || arguments[3];
  if (e.isPrivate()) returntrue;
  let s = t.getGuild(e.getGuildId()),
    o = null != (r = null == s ? true : s.maxStageVideoChannelUsers) ? r : 0;
  return (!e.isGuildStageVoice() || !(o <= 0)) && (!i || !!(0, a.A)(e, n)) && !!n.can(f.xBc.STREAM, e) && null != s && s.afkChannelId !== e.id
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

function g(e, t, n, r, s) {
  let l;
  if (null == e) return [false, 2];
  let c = t.isInChannel(e.id),
    u = e instanceof o.YB && (0, d.Pd)(e, t, n),
    f = (0, a.A)(e, r),
    p = null != s.getAwaitingRemoteSessionInfo() || null != s.getRemoteSessionId(),
    _ = (0, i.r9)() && (0, i.UK)(e.id);
  p ? l = 0 : _ ? l = 3 : f || c ? u && !c && (l = 1) : l = 2;
  let h = f && !u;
  return [!__OVERLAY__ && !p && !_ && (c || h), l]
}

function E(e) {
  return (0, r.yK)([u.A, l.A, c.A, s.default], () => g(e, u.A, l.A, c.A, s.default))
}