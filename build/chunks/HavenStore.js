/** Chunk was on 40184 **/
/** chunk id: 805422, original params: e,t,n (module,exports,require) **/
let i;
require.d(exports, {
  Z: () => p
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk594174 = require("./594174.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}
let u = {};
class d extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk594174.default)
  }
  get state() {
    return u
  }
  getRoom(e) {
    return u[e]
  }
  isUserConnected(e) {
    return null != u[e]
  }
  get assets() {
    return i
  }
}
s(d, "displayName", "HavenStore");
let p = new d(Chunk570140.Z, {
  HAVEN_CONNECT: e => {
    console.log("HAVEN_CONNECT", e), u[e.room.roomId] = e.room
  },
  HAVEN_DISCONNECT: e => {
    if (console.log("HAVEN_DISCONNECT", e), null == u[e.roomId]) returnfalse;
    let t = o.default.getCurrentUser();
    if (e.userId === (null == t ? true : t.id)) return void delete u[e.roomId];
    let n = c({}, u[e.roomId]);
    n.participants = n.participants.filter(t => t.userId !== e.userId), n.seats = n.seats.map(t => {
      var n, i;
      return t.claimedBy === e.userId ? (n = c({}, t), i = i = {
        claimedBy: null
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
      }), n) : t
    }), u[e.roomId] = n
  },
  HAVEN_UPDATE: e => {
    console.log("HAVEN_UPDATE", e), u[e.room.roomId] = e.room
  },
  HAVEN_GOT_ASSETS: e => {
    i = e.assets
  }
})