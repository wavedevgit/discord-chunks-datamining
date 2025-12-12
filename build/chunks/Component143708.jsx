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
  Chunk105341 = require("./105341.js");

function g(e) {
  let t, n, g, {
      author: E,
      banned: b,
      channelId: y
    } = e,
    O = (0, o.e7)([c.default], () => c.default.getId()),
    v = p.ZP.useName(E),
    S = O === E.id,
    I = (0, o.e7)([u.Z, d.Z], () => {
      let e = u.Z.getChannel(y);
      if (null == e) returnfalse;
      if (e.isPrivate()) returntrue;
      if (e.isThread()) {
        let t = (0, l.xl)(e),
          n = d.Z.can(_.Plq.SEND_MESSAGES_IN_THREADS, e);
        return !t && n
      }
      return d.Z.can(_.Plq.SEND_MESSAGES, e)
    });

  function T() {
    let {
      id: e
    } = E, t = "@".concat(p.ZP.getUserTag(E, {
      decoration: "never"
    })), n = "<@".concat(e, ">");
    f.S.dispatchToLastSubscribed(_.CkL.INSERT_TEXT, {
      plainText: t,
      rawText: n
    }), null != y && a.Z.startTyping(y)
  }
  return S ? (t = m.intl.string(m.t["F/OLvL"]), g = m.intl.string(m.t.C89OLE)) : (g = m.intl.string(m.t.YVub5y), b ? t = m.intl.string(m.t["57nBty"]) : null != v && I ? (t = m.intl.formatToPlainString(m.t["9Akp1s"], {
    username: v
  }), n = (0, r.jsx)(i.zxk, {
    onClick: T,
    text: m.intl.string(m.t.P8tvKG)
  })) : t = m.intl.string(m.t["SMJr+a"])), (0, r.jsxs)(s.Z, {
    children: [(0, r.jsx)(s.Z.Header, {
      text: g
    }), (0, r.jsxs)(s.Z.Body, {
      children: [(0, r.jsxs)("div", {
        className: h.headerLine,
        children: [(0, r.jsx)(s.Z.Icon, {
          expired: true
        }), (0, r.jsx)(s.Z.Info, {
          expired: true,
          title: m.intl.string(m.t["Jhx/ud"]),
          children: t
        })]
      }), n]
    })]
  })
}