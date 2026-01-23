/** Chunk was on 34070 **/
/** chunk id: 200629, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => o
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk366098 = require("./366098.js"),
  Chunk918192 = require("./918192.jsx"),
  Chunk985018 = require("./985018.jsx");

function o(t) {
  let {
    channel: e,
    onAccept: r,
    transitionState: o,
    onClose: c
  } = t, d = (0, s.mT)(e.id), u = (0, s.Iv)(e.id);
  return (0, n.jsx)(i.Modal, {
    onClose: c,
    transitionState: o,
    actions: [{
      text: a.intl.string(a.t.CZGqeT),
      variant: "secondary",
      onClick: c
    }, {
      text: a.intl.string(a.t.mbD50D),
      variant: "primary",
      onClick: () => {
        r(e), c()
      }
    }],
    title: function(t) {
      let {
        blockedUsersCount: e,
        ignoredUsersCount: r
      } = t;
      return e > 0 && r > 0 ? a.intl.formatToPlainString(a.t.Uzdyho, {
        number: e + r
      }) : r > 0 ? a.intl.formatToPlainString(a.t.wvygk8, {
        number: r
      }) : a.intl.formatToPlainString(a.t.HviVA9, {
        number: e
      })
    }({
      blockedUsersCount: d.length,
      ignoredUsersCount: u.length
    }),
    subtitle: function(t) {
      let {
        blockedUsersCount: e,
        ignoredUsersCount: r
      } = t;
      return e > 0 && r > 0 ? a.intl.string(a.t["P/KFXz"]) : r > 0 ? a.intl.format(a.t.Ri3o33, {
        number: r
      }) : a.intl.format(a.t["28qZMU"], {
        number: e
      })
    }({
      blockedUsersCount: d.length,
      ignoredUsersCount: u.length
    }),
    children: [...d, ...u].map(t => {
      let {
        user: r,
        id: i,
        speaker: s
      } = t;
      return (0, n.jsx)(l.ld, {
        user: r,
        speaker: s,
        showStatus: true,
        channelId: e.id
      }, i)
    })
  })
}