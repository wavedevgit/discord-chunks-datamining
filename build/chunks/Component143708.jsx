/** Chunk was on 91173 **/
/** chunk id: 143708, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
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

function g(e) {
  let t, n, g, {
      author: h,
      banned: b,
      channelId: E
    } = e,
    C = (0, i.e7)([s.default], () => s.default.getId()),
    v = p.ZP.useName(h),
    O = C === h.id,
    y = (0, i.e7)([c.Z, u.Z], () => {
      let e = c.Z.getChannel(E);
      if (null == e) returnfalse;
      if (e.isPrivate()) returntrue;
      if (e.isThread()) {
        let t = (0, o.xl)(e),
          n = u.Z.can(m.Plq.SEND_MESSAGES_IN_THREADS, e);
        return !t && n
      }
      return u.Z.can(m.Plq.SEND_MESSAGES, e)
    });
  return O ? (t = f.intl.string(f.t["F/OLvL"]), g = f.intl.string(f.t.C89OLC)) : (g = f.intl.string(f.t["YVub5+"]), b ? t = f.intl.string(f.t["57nBt7"]) : null != v && y ? (t = f.intl.formatToPlainString(f.t["9Akp1t"], {
    username: v
  }), n = (0, r.jsx)(a.Z.Button, {
    onClick: function() {
      let {
        id: e
      } = h, t = "@".concat(p.ZP.getUserTag(h, {
        decoration: "never"
      }));
      d.S.dispatchToLastSubscribed(m.CkL.INSERT_TEXT, {
        plainText: t,
        rawText: "<@".concat(e, ">")
      }), null != E && l.Z.startTyping(E)
    },
    children: f.intl.string(f.t.P8tvKC)
  })) : t = f.intl.string(f.t["SMJr+f"])), (0, r.jsxs)(a.Z, {
    children: [(0, r.jsx)(a.Z.Header, {
      text: g
    }), (0, r.jsxs)(a.Z.Body, {
      children: [(0, r.jsxs)("div", {
        className: _.headerLine,
        children: [(0, r.jsx)(a.Z.Icon, {
          expired: true
        }), (0, r.jsx)(a.Z.Info, {
          expired: true,
          title: f.intl.string(f.t["Jhx/ub"]),
          children: t
        })]
      }), n]
    })]
  })
}