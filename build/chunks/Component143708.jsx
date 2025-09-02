/** Chunk was on web.js **/
/** chunk id: 143708, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk144144 = require("./144144.js"),
  Chunk955415 = require("./955415.jsx"),
  Chunk665906 = require("./665906.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk585483 = require("./585483.js"),
  Chunk51144 = require("./51144.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk105341 = require("./105341.js");

function m(e) {
  let t, n, m, {
      author: g,
      banned: E,
      channelId: b
    } = e,
    y = (0, i.e7)([l.default], () => l.default.getId()),
    O = f.ZP.useName(g),
    v = y === g.id,
    I = (0, i.e7)([c.Z, u.Z], () => {
      let e = c.Z.getChannel(b);
      if (null == e) returnfalse;
      if (e.isPrivate()) returntrue;
      if (e.isThread()) {
        let t = (0, s.xl)(e),
          n = u.Z.can(_.Plq.SEND_MESSAGES_IN_THREADS, e);
        return !t && n
      }
      return u.Z.can(_.Plq.SEND_MESSAGES, e)
    });

  function S() {
    let {
      id: e
    } = g, t = "@".concat(f.ZP.getUserTag(g, {
      decoration: "never"
    })), n = "<@".concat(e, ">");
    d.S.dispatchToLastSubscribed(_.CkL.INSERT_TEXT, {
      plainText: t,
      rawText: n
    }), null != b && a.Z.startTyping(b)
  }
  return v ? (t = p.intl.string(p.t["F/OLvL"]), m = p.intl.string(p.t.C89OLC)) : (m = p.intl.string(p.t["YVub5+"]), E ? t = p.intl.string(p.t["57nBt7"]) : null != O && I ? (t = p.intl.formatToPlainString(p.t["9Akp1t"], {
    username: O
  }), n = (0, r.jsx)(o.Z.Button, {
    onClick: S,
    children: p.intl.string(p.t.P8tvKC)
  })) : t = p.intl.string(p.t["SMJr+f"])), (0, r.jsxs)(o.Z, {
    children: [(0, r.jsx)(o.Z.Header, {
      text: m
    }), (0, r.jsxs)(o.Z.Body, {
      children: [(0, r.jsxs)("div", {
        className: h.headerLine,
        children: [(0, r.jsx)(o.Z.Icon, {
          expired: true
        }), (0, r.jsx)(o.Z.Info, {
          expired: true,
          title: p.intl.string(p.t["Jhx/ub"]),
          children: t
        })]
      }), n]
    })]
  })
}