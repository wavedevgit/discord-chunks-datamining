/** Chunk was on 1906 **/
/** chunk id: 854510, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => a
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk82659 = require("./82659.jsx"),
  Chunk930180 = require("./930180.js"),
  Chunk320596 = require("./320596.jsx"),
  Chunk388032 = require("./388032.jsx");

function a(t) {
  let {
    channel: e,
    onAccept: n,
    transitionState: a,
    onClose: c
  } = t, d = (0, s.z)(e.id), u = (0, s.bA)(e.id);
  return (0, r.jsx)(i.Modal, {
    onClose: c,
    transitionState: a,
    actions: [{
      text: l.intl.string(l.t.CZGqeX),
      variant: "secondary",
      onClick: c
    }, {
      text: l.intl.string(l.t.mbD50N),
      variant: "primary",
      onClick: () => {
        n(e), c()
      }
    }],
    title: function(t) {
      let {
        blockedUsersCount: e,
        ignoredUsersCount: n
      } = t;
      return e > 0 && n > 0 ? l.intl.formatToPlainString(l.t.Uzdyho, {
        number: e + n
      }) : n > 0 ? l.intl.formatToPlainString(l.t.wvygk5, {
        number: n
      }) : l.intl.formatToPlainString(l.t.HviVAw, {
        number: e
      })
    }({
      blockedUsersCount: d.length,
      ignoredUsersCount: u.length
    }),
    subtitle: function(t) {
      let {
        blockedUsersCount: e,
        ignoredUsersCount: n
      } = t;
      return e > 0 && n > 0 ? l.intl.string(l.t["P/KFX1"]) : n > 0 ? l.intl.format(l.t.Ri3o39, {
        number: n
      }) : l.intl.format(l.t["28qZMT"], {
        number: e
      })
    }({
      blockedUsersCount: d.length,
      ignoredUsersCount: u.length
    }),
    children: [...d, ...u].map(t => {
      let {
        user: n,
        id: i,
        speaker: s
      } = t;
      return (0, r.jsx)(o.Ie, {
        user: n,
        speaker: s,
        showStatus: true,
        channelId: e.id
      }, i)
    })
  })
}