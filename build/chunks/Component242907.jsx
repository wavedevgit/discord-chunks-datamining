/** Chunk was on web.js **/
/** chunk id: 242907, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk414798 = require("./414798.js"),
  Chunk529200 = require("./529200.jsx"),
  Chunk406704 = require("./406704.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk203982 = require("./203982.js"),
  Chunk427262 = require("./427262.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk563111 = require("./563111.js");

function g(e) {
  let t, n, g, {
      author: E,
      banned: b,
      channelId: y
    } = e,
    O = (0, a.bG)([c.default], () => c.default.getId()),
    A = p.Ay.useName(E),
    v = O === E.id,
    S = (0, a.bG)([u.A, d.A], () => {
      let e = u.A.getChannel(y);
      if (null == e) returnfalse;
      if (e.isPrivate()) returntrue;
      if (e.isThread()) {
        let t = (0, l.UJ)(e),
          n = d.A.can(_.xBc.SEND_MESSAGES_IN_THREADS, e);
        return !t && n
      }
      return d.A.can(_.xBc.SEND_MESSAGES, e)
    });

  function I() {
    let {
      id: e
    } = E, t = "@".concat(p.Ay.getUserTag(E, {
      decoration: "never"
    })), n = "<@".concat(e, ">");
    f._.dispatchToLastSubscribed(_.jej.INSERT_TEXT, {
      plainText: t,
      rawText: n
    }), null != y && s.A.startTyping(y)
  }
  return v ? (t = h.intl.string(h.t["F/OLvL"]), g = h.intl.string(h.t.C89OLE)) : (g = h.intl.string(h.t.YVub5y), b ? t = h.intl.string(h.t["57nBty"]) : null != A && S ? (t = h.intl.formatToPlainString(h.t["9Akp1s"], {
    username: A
  }), n = (0, r.jsx)(i.$nd, {
    onClick: I,
    text: h.intl.string(h.t.P8tvKG)
  })) : t = h.intl.string(h.t["SMJr+a"])), (0, r.jsxs)(o.A, {
    children: [(0, r.jsx)(o.A.Header, {
      text: g
    }), (0, r.jsxs)(o.A.Body, {
      children: [(0, r.jsxs)("div", {
        className: m.iH,
        children: [(0, r.jsx)(o.A.Icon, {
          expired: true
        }), (0, r.jsx)(o.A.Info, {
          expired: true,
          title: h.intl.string(h.t["Jhx/ud"]),
          children: t
        })]
      }), n]
    })]
  })
}