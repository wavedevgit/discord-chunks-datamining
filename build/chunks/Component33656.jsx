/** Chunk was on web.js **/
/** chunk id: 33656, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
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

function h() {
  let e = (0, a.e7)([l.Z], () => l.Z.getSubsection()),
    t = i.useRef(null),
    {
      categories: n,
      initialized: h
    } = (0, a.cj)([u.Z], () => u.Z.getEmailSettings());
  i.useEffect(() => {
    if (null == h)(0, c.Y7)();
    else if (e === d.vG.toUpperCase()) {
      var n;
      null == t || null == (n = t.current) || n.scrollIntoView(true)
    }
  }, [h, t, e]);
  let m = d.M0.reduce((e, t) => e || !!n[t], false);

  function g(e, t) {
    (0, c.pR)(e, t)
  }
  let E = {
    [d.$Z.COMMUNICATION]: f.s6.NOTIFICATIONS_EMAILS_COMMUNICATION,
    [d.$Z.SOCIAL]: f.s6.NOTIFICATIONS_EMAILS_SOCIAL,
    [d.$Z.UPDATES_AND_ANNOUNCEMENTS]: f.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES,
    [d.$Z.TIPS]: f.s6.NOTIFICATIONS_EMAILS_TIPS,
    [d.$Z.RECOMMENDATIONS_AND_EVENTS]: f.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS
  };
  return h ? (0, r.jsxs)(s.F, {
    setting: f.s6.NOTIFICATIONS_EMAILS,
    children: [(0, r.jsx)("div", {
      ref: t
    }), (0, r.jsxs)(o.C3N, {
      label: p.intl.string(p.t.TPchzM),
      children: [d.Od.map(e => {
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
      }), (0, r.jsxs)(s.F, {
        setting: f.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS,
        children: [(0, r.jsx)(o.Avr, {
          disabled: !m,
          text: p.intl.string(p.t.Ra9Pwk),
          onClick: c.oc
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          children: p.intl.string(p.t.iYjQ8X)
        })]
      })]
    })]
  }) : null
}