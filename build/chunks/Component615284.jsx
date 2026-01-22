/** Chunk was on web.js **/
/** chunk id: 615284, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => v,
  x: () => O
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk927057 = require("./927057.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk309010 = require("./309010.js"),
  Chunk287809 = require("./287809.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk785263 = require("./785263.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let E = new Set;
class b extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    this.waitFor(d.A, f.Ay, p.A, _.default), null != e && (E = new Set(e))
  }
  hasId(e) {
    return E.has(e)
  }
  getState() {
    return [...E]
  }
}
g(b, "displayName", "PTOStore"), g(b, "persistKey", "PTOStore");
let y = new b(Chunk73153.h, {}),
  O = e => (0, o.bG)([f.Ay, _.default, y], () => {
    let t = _.default.getCurrentUser();
    if (null == t || !t.isStaff() || !e.isDM()) returnfalse;
    let n = _.default.getUser(e.getRecipientId());
    if (!(null == n ? true : n.isStaff())) returnfalse;
    let r = f.Ay.getNicknames(n.id).some(e => e.endsWith("[PTO]") || e.endsWith("[OOO]"));
    return r ? !y.hasId(n.id) && r : (E.delete(n.id) && y.emitChange(), false)
  }),
  A = () => {
    let e = p.A.getChannelId();
    if (null == e) return;
    let t = d.A.getChannel(e);
    null != t && t.isPrivate() && (E.has(t.getRecipientId()) || (E.add(t.getRecipientId()), y.emitChange()))
  },
  v = () => (0, i.jsxs)("div", {
    className: m.eU,
    children: [(0, i.jsx)(l.Text, {
      variant: "text-sm/medium",
      className: s()(m.Qq, m.Fn),
      children: h.intl.string(h.t["2UvR1E"])
    }), (0, i.jsx)("div", {
      className: m.o1,
      children: (0, i.jsx)(u.x, {
        onClick: A
      })
    })]
  })