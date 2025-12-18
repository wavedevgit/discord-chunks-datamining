/** Chunk was on web.js **/
/** chunk id: 33656, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk921801 = require("./921801.jsx"),
  Chunk663389 = require("./663389.js"),
  Chunk960412 = require("./960412.js"),
  Chunk151662 = require("./151662.js"),
  Chunk930441 = require("./930441.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");

function _(e) {
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

function m() {
  let e = (0, Chunk442837.e7)([Chunk663389.Z], () => Chunk663389.Z.getSubsection()),
    t = Chunk473749.useRef(null),
    {
      categories: n,
      initialized: m
    } = (0, Chunk442837.cj)([Chunk151662.Z], () => Chunk151662.Z.getEmailSettings());
  Chunk473749.useEffect(() => {
    if (null == m)(0, Chunk960412.Y7)();
    else if (module === Chunk930441.vG.toUpperCase()) {
      var n;
      null == exports || null == (n = exports.current) || require.scrollIntoView(true)
    }
  }, [m, exports, module]);
  let h = Chunk930441.M0.reduce((e, t) => e || !!n[t], false);

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
  return m ? (0, Chunk54381.jsxs)(Chunk921801.F, {
    setting: Chunk726985.s6.NOTIFICATIONS_EMAILS,
    children: [(0, Chunk54381.jsx)("div", {
      ref: exports
    }), (0, Chunk54381.jsxs)(Chunk481060.C3N, {
      label: Chunk388032.intl.string(Chunk388032.t.TPchzM),
      children: [Chunk930441.Od.map(e => {
        let {
          category: t,
          label: i,
          subLabel: a
        } = e, o = E[t], l = (0, r.jsx)(_, {
          label: i(),
          subLabel: a(),
          enabled: n[t],
          onChange: e => g(t, e)
        }, i());
        return null != o ? (0, r.jsx)(s.F, {
          setting: o,
          children: l
        }, i()) : l
      }), (0, Chunk54381.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS,
        children: [(0, Chunk54381.jsx)(Chunk481060.Avr, {
          disabled: !h,
          text: Chunk388032.intl.string(Chunk388032.t.Ra9Pwk),
          onClick: Chunk960412.oc
        }), (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-sm/normal",
          children: Chunk388032.intl.string(Chunk388032.t.iYjQ8X)
        })]
      })]
    })]
  }) : null
}