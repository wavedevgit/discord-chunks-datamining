/** Chunk was on web.js **/
/** chunk id: 620799, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk951288 = require("./951288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk907862 = require("./907862.js"),
  Chunk100527 = require("./100527.js"),
  Chunk314897 = require("./314897.js"),
  Chunk892001 = require("./892001.js"),
  Chunk228168 = require("./228168.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx");
let f = "https://cdn.discordapp.com/assets/content/1b55390a202dcca3843b6c9205af0379cfa072f34d8b9217bce04aba4d373e5b.png";

function _(e) {
  let {
    targetElementRef: t,
    markAsDismissed: n,
    children: _
  } = e, p = (0, i.e7)([s.default], () => s.default.getId());
  return (0, r.jsxs)(r.Fragment, {
    children: [_, (0, r.jsx)(a.J2, {
      targetElementRef: t,
      title: d.intl.string(d.t.gxcsSk),
      body: d.intl.string(d.t["8L7E5u"]),
      caretConfig: {
        position: "bottom",
        align: "start"
      },
      graphic: {
        type: "image",
        src: f
      },
      position: "top",
      align: "left",
      gradientColor: "blue",
      size: "md",
      onRequestClose: () => {
        n(u.L.USER_DISMISS)
      },
      actions: [{
        text: d.intl.string(d.t.RzWDqa),
        variant: "primary",
        onClick: () => {
          n(u.L.TAKE_ACTION), (0, l.openUserProfileModal)({
            userId: p,
            sourceAnalyticsLocations: [o.Z.ACCOUNT],
            hideRestrictedProfile: true,
            section: c.oh.WIDGETS
          })
        }
      }]
    })]
  })
}