/** Chunk was on web.js **/
/** chunk id: 931981, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => S,
  e: () => O
}), require("./388685.js");
var r, Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk962293 = require("./962293.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk204427 = require("./204427.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let E = new Set;
class b extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(d.Z, f.ZP, p.Z, _.default), null != e && (E = new Set(e))
  }
  hasId(e) {
    return E.has(e)
  }
  getState() {
    return [...E]
  }
}
g(b, "displayName", "PTOStore"), g(b, "persistKey", "PTOStore");
let y = new b(Chunk570140.Z, {}),
  O = e => (0, s.e7)([f.ZP, _.default, y], () => {
    let t = _.default.getCurrentUser();
    if (null == t || !t.isStaff() || !e.isDM()) returnfalse;
    let n = _.default.getUser(e.getRecipientId());
    if (!(null == n ? true : n.isStaff())) returnfalse;
    let r = f.ZP.getNicknames(n.id).some(e => e.endsWith("[PTO]") || e.endsWith("[OOO]"));
    return r ? !y.hasId(n.id) && r : (E.delete(n.id) && y.emitChange(), false)
  }),
  v = () => {
    let e = Chunk944486.Z.getChannelId();
    if (null == module) return;
    let t = Chunk592125.Z.getChannel(module);
    null != exports && exports.isPrivate() && (E.has(exports.getRecipientId()) || (E.add(exports.getRecipientId()), y.emitChange()))
  },
  S = () => (0, Chunk54381.jsxs)("div", {
    className: Chunk204427.replyBar,
    children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-sm/medium",
      className: o()(Chunk204427.text, Chunk204427.replyLabel),
      children: Chunk388032.intl.string(Chunk388032.t["2UvR1E"])
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk204427.actions,
      children: (0, Chunk54381.jsx)(Chunk962293.B, {
        onClick: v
      })
    })]
  })