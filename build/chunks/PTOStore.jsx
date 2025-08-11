/** Chunk was on web.js **/
/** chunk id: 931981, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => O,
  e: () => b
}), require("./388685.js");
var r, Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk962293 = require("./962293.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk951535 = require("./951535.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let m = new Set;
class g extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (m = new Set(e))
  }
  hasId(e) {
    return m.has(e)
  }
  getState() {
    return [...m]
  }
}
h(g, "displayName", "PTOStore"), h(g, "persistKey", "PTOStore");
let E = new g(Chunk570140.Z, {}),
  b = e => (0, o.e7)([u.ZP, f.default, E], () => {
    let t = f.default.getCurrentUser();
    if (null == t || !t.isStaff() || !e.isDM()) returnfalse;
    let n = f.default.getUser(e.getRecipientId());
    if (!(null == n ? true : n.isStaff())) returnfalse;
    let r = u.ZP.getNicknames(n.id).some(e => e.endsWith("[PTO]") || e.endsWith("[OOO]"));
    return r ? !E.hasId(n.id) && r : (m.delete(n.id) && E.emitChange(), false)
  }),
  y = () => {
    let e = Chunk944486.Z.getChannelId();
    if (null == module) return;
    let t = Chunk592125.Z.getChannel(module);
    null != exports && exports.isPrivate() && (m.has(exports.getRecipientId()) || (m.add(exports.getRecipientId()), E.emitChange()))
  },
  O = () => <div className={Chunk951535.bar}>{<Chunk481060.Text variant={"text-sm/medium"}>{Chunk388032.intl.string(Chunk388032.t["2UvR1N"])}</Chunk481060.Text>}{<Chunk962293.B onClick={y} />}</div>