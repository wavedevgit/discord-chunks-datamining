/** Chunk was on web.js **/
/** chunk id: 647162, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  KV: () => _,
  PY: () => p,
  Wo: () => h,
  iy: () => E,
  yp: () => m
}), require("./415506.js"), require("./358797.js"), require("./388685.js");
var Chunk763472 = require("./763472.js"),
  Chunk726542 = require("./726542.js"),
  Chunk594190 = require("./594190.js"),
  Chunk70956 = require("./70956.js"),
  Chunk781518 = require("./781518.js"),
  Chunk18323 = require("./18323.js"),
  Chunk768419 = require("./768419.js"),
  Chunk616922 = require("./616922.js"),
  Chunk981631 = require("./981631.js");
let f = 30 * Chunk70956.Z.Millis.SECOND;

function p(e) {
  return null != e.getActiveSocketAndDevice() || l.Z.isProtocolRegistered()
}

function _() {
  let e = c.Z.getActiveSocketAndDevice();
  if (null != e) return Promise.resolve(e);
  if (!l.Z.isProtocolRegistered()) return Promise.reject(Error("protocol is not registered"));
  let t = c.Z.getPlayableComputerDevices();
  if (a.ZP.isObservedAppRunning(i.Z.get(d.ABu.SPOTIFY).name) && t.length > 0) {
    let {
      socket: e,
      device: n
    } = t[0];
    return (0, s.Tu)(e.accountId, n.id), Promise.resolve({
      socket: e,
      device: n
    })
  }
  return new Promise((e, n) => {
    let r = setTimeout(() => {
        c.Z.removeChangeListener(i), n(Error("timeout launching spotify"))
      }, f),
      i = () => {
        for (let {
            socket: n,
            device: a
          }
          of c.Z.getPlayableComputerDevices()) null == t.find(e => e.device.id === a.id) && (clearTimeout(r), c.Z.removeChangeListener(i), setImmediate(() => {
          (0, s.Tu)(n.accountId, a.id), e({
            socket: n,
            device: a
          })
        }))
      };
    c.Z.addChangeListener(i), window.open("".concat(u.M5, ":"))
  })
}

function h() {
  let e = c.Z.getActiveSocketAndDevice();
  if (null == e) return null;
  let {
    socket: t
  } = e;
  return t.isPremium
}

function m() {
  let e = c.Z.getActiveSocketAndDevice();
  if (null == e) return Promise.reject(Error("no active profile"));
  let {
    socket: t
  } = e;
  return t.isPremium ? Promise.resolve() : (0, s.Ai)(t.accountId, t.accessToken).then(() => {
    if (!t.isPremium) return Promise.reject(Error("spotify account is not premium"))
  })
}

function g(e) {
  if ("string" == typeof e) return e;
  throw Error("value is not a string")
}
async function E(e, t) {
  var n;
  let i = await (0, r.sd)(e, t),
    a = (0, u.c8)(g(null != (n = i.type) ? n : u.Hw.TRACK));
  if (null === a) throw Error("invalid type ".concat(i.type));
  return {
    context_uri: "string" == typeof i.context_uri ? i.context_uri : true,
    album_id: g(i.album_id),
    artist_ids: Array.isArray(i.artist_ids) ? i.artist_ids.map(g) : [],
    type: a,
    button_urls: Array.isArray(i.button_urls) ? i.button_urls.map(g) : []
  }
}