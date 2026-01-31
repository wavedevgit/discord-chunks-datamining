/** Chunk was on 64935 **/
/** chunk id: 242907, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
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

function h(e) {
  let t, n, h, {
      author: b,
      banned: y,
      channelId: A
    } = e,
    v = (0, l.bG)([c.default], () => c.default.getId()),
    O = m.Ay.useName(b),
    x = v === b.id,
    E = (0, l.bG)([u.A, d.A], () => {
      let e = u.A.getChannel(A);
      if (null == e) returnfalse;
      if (e.isPrivate()) returntrue;
      if (e.isThread()) {
        let t = (0, o.UJ)(e),
          n = d.A.can(f.xBc.SEND_MESSAGES_IN_THREADS, e);
        return !t && n
      }
      return d.A.can(f.xBc.SEND_MESSAGES, e)
    });
  return x ? (t = g.intl.string(g.t["F/OLvL"]), h = g.intl.string(g.t.C89OLE)) : (h = g.intl.string(g.t.YVub5y), y ? t = g.intl.string(g.t["57nBty"]) : null != O && E ? (t = g.intl.formatToPlainString(g.t["9Akp1s"], {
    username: O
  }), n = (0, r.jsx)(i.$nd, {
    onClick: function() {
      let {
        id: e
      } = b, t = "@".concat(m.Ay.getUserTag(b, {
        decoration: "never"
      }));
      p._.dispatchToLastSubscribed(f.jej.INSERT_TEXT, {
        plainText: t,
        rawText: "<@".concat(e, ">")
      }), null != A && a.A.startTyping(A)
    },
    text: g.intl.string(g.t.P8tvKG)
  })) : t = g.intl.string(g.t["SMJr+a"])), (0, r.jsxs)(s.A, {
    children: [(0, r.jsx)(s.A.Header, {
      text: h
    }), (0, r.jsxs)(s.A.Body, {
      children: [(0, r.jsxs)("div", {
        className: _.iH,
        children: [(0, r.jsx)(s.A.Icon, {
          expired: true
        }), (0, r.jsx)(s.A.Info, {
          expired: true,
          title: g.intl.string(g.t["Jhx/ud"]),
          children: t
        })]
      }), n]
    })]
  })
}