/** Chunk was on 1906 **/
/** chunk id: 854510, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => c
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk930180 = require("./930180.js"),
  Chunk320596 = require("./320596.jsx"),
  Chunk388032 = require("./388032.jsx");

function c(t) {
  let {
    channel: e,
    onAccept: n,
    transitionState: c,
    onClose: a
  } = t, u = (0, s.z)(e.id), d = (0, s.bA)(e.id);
  return (0, r.jsx)(i.Modal, {
    onClose: a,
    transitionState: c,
    actions: [{
      text: o.intl.string(o.t.CZGqeT),
      variant: "secondary",
      onClick: a
    }, {
      text: o.intl.string(o.t.mbD50D),
      variant: "primary",
      onClick: () => {
        n(e), a()
      }
    }],
    title: function(t) {
      let {
        blockedUsersCount: e,
        ignoredUsersCount: n
      } = t;
      return e > 0 && n > 0 ? o.intl.formatToPlainString(o.t.Uzdyho, {
        number: e + n
      }) : n > 0 ? o.intl.formatToPlainString(o.t.wvygk8, {
        number: n
      }) : o.intl.formatToPlainString(o.t.HviVA9, {
        number: e
      })
    }({
      blockedUsersCount: u.length,
      ignoredUsersCount: d.length
    }),
    subtitle: function(t) {
      let {
        blockedUsersCount: e,
        ignoredUsersCount: n
      } = t;
      return e > 0 && n > 0 ? o.intl.string(o.t["P/KFXz"]) : n > 0 ? o.intl.format(o.t.Ri3o33, {
        number: n
      }) : o.intl.format(o.t["28qZMU"], {
        number: e
      })
    }({
      blockedUsersCount: u.length,
      ignoredUsersCount: d.length
    }),
    children: [...u, ...d].map(t => {
      let {
        user: n,
        id: i,
        speaker: s
      } = t;
      return (0, r.jsx)(l.Ie, {
        user: n,
        speaker: s,
        showStatus: true,
        channelId: e.id
      }, i)
    })
  })
}