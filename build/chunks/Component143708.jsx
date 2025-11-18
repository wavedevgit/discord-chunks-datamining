/** Chunk was on web.js **/
/** chunk id: 143708, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
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
  Chunk739236 = require("./739236.js");

function g(e) {
  let t, n, g, {
      author: E,
      banned: b,
      channelId: y
    } = e,
    O = (0, a.e7)([c.default], () => c.default.getId()),
    v = _.ZP.useName(E),
    I = O === E.id,
    T = (0, a.e7)([u.Z, d.Z], () => {
      let e = u.Z.getChannel(y);
      if (null == e) returnfalse;
      if (e.isPrivate()) returntrue;
      if (e.isThread()) {
        let t = (0, l.xl)(e),
          n = d.Z.can(p.Plq.SEND_MESSAGES_IN_THREADS, e);
        return !t && n
      }
      return d.Z.can(p.Plq.SEND_MESSAGES, e)
    });

  function S() {
    let {
      id: e
    } = E, t = "@".concat(_.ZP.getUserTag(E, {
      decoration: "never"
    })), n = "<@".concat(e, ">");
    f.S.dispatchToLastSubscribed(p.CkL.INSERT_TEXT, {
      plainText: t,
      rawText: n
    }), null != y && o.Z.startTyping(y)
  }
  return I ? (t = h.intl.string(h.t["F/OLvL"]), g = h.intl.string(h.t.C89OLE)) : (g = h.intl.string(h.t.YVub5y), b ? t = h.intl.string(h.t["57nBty"]) : null != v && T ? (t = h.intl.formatToPlainString(h.t["9Akp1s"], {
    username: v
  }), n = (0, r.jsx)(i.zxk, {
    onClick: S,
    text: h.intl.string(h.t.P8tvKG)
  })) : t = h.intl.string(h.t["SMJr+a"])), (0, r.jsxs)(s.Z, {
    children: [(0, r.jsx)(s.Z.Header, {
      text: g
    }), (0, r.jsxs)(s.Z.Body, {
      children: [(0, r.jsxs)("div", {
        className: m.headerLine,
        children: [(0, r.jsx)(s.Z.Icon, {
          expired: true
        }), (0, r.jsx)(s.Z.Info, {
          expired: true,
          title: h.intl.string(h.t["Jhx/ud"]),
          children: t
        })]
      }), n]
    })]
  })
}