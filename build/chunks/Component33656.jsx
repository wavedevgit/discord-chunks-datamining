/** Chunk was on web.js **/
/** chunk id: 33656, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk921801 = require("./921801.js"),
  Chunk663389 = require("./663389.js"),
  Chunk960412 = require("./960412.js"),
  Chunk151662 = require("./151662.js"),
  Chunk930441 = require("./930441.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");

function p(e) {
  let {
    label: t,
    onChange: n,
    enabled: i,
    subLabel: a
  } = e;
  return (0, r.jsx)(o.rsf, {
    label: t,
    checked: !!i,
    onChange: n,
    description: a
  })
}

function h() {
  let e = (0, Chunk442837.e7)([Chunk663389.Z], () => Chunk663389.Z.getSubsection()),
    t = Chunk647438.useRef(null),
    {
      categories: n,
      initialized: h
    } = (0, Chunk442837.cj)([Chunk151662.Z], () => Chunk151662.Z.getEmailSettings());
  Chunk647438.useEffect(() => {
    if (null == h)(0, Chunk960412.Y7)();
    else if (module === Chunk930441.vG.toUpperCase()) {
      var n;
      null == exports || null == (n = exports.current) || require.scrollIntoView(true)
    }
  }, [h, exports, module]);
  let m = Chunk930441.M0.reduce((e, t) => e || !!n[t], false);

  function g(e, t) {
    (0, c.pR)(e, t)
  }
  let E = {
    [Chunk930441.$Z.COMMUNICATION]: Chunk726985.s6.NOTIFICATIONS_EMAILS_COMMUNICATION,
    [Chunk930441.$Z.SOCIAL]: Chunk726985.s6.NOTIFICATIONS_EMAILS_SOCIAL,
    [Chunk930441.$Z.UPDATES_AND_ANNOUNCEMENTS]: Chunk726985.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES,
    [Chunk930441.$Z.TIPS]: Chunk726985.s6.NOTIFICATIONS_EMAILS_TIPS,
    [Chunk930441.$Z.RECOMMENDATIONS_AND_EVENTS]: Chunk726985.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS
  };
  return h ? (0, Chunk951288.jsxs)(Chunk921801.F, {
    setting: Chunk726985.s6.NOTIFICATIONS_EMAILS,
    children: [(0, Chunk951288.jsx)("div", {
      ref: exports
    }), (0, Chunk951288.jsxs)(Chunk481060.C3N, {
      label: Chunk388032.intl.string(Chunk388032.t.TPchzM),
      children: [Chunk930441.Od.map(e => {
        let {
          category: t,
          label: i,
          subLabel: a
        } = e, o = E[t], l = (0, r.jsx)(p, {
          label: i(),
          subLabel: a(),
          enabled: n[t],
          onChange: e => g(t, e)
        }, i());
        return null != o ? (0, r.jsx)(s.F, {
          setting: o,
          children: l
        }, i()) : l
      }), (0, Chunk951288.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS,
        children: [(0, Chunk951288.jsx)(Chunk481060.Avr, {
          disabled: !m,
          text: Chunk388032.intl.string(Chunk388032.t.Ra9Pwk),
          onClick: Chunk960412.oc
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/normal",
          children: Chunk388032.intl.string(Chunk388032.t.iYjQ8X)
        })]
      })]
    })]
  }) : null
}