/** Chunk was on 75708 **/
/** chunk id: 33656, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk921801 = require("./921801.js"),
  Chunk663389 = require("./663389.js"),
  Chunk960412 = require("./960412.js"),
  Chunk151662 = require("./151662.js"),
  Chunk930441 = require("./930441.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk495288 = require("./495288.js"),
  Chunk20493 = require("./20493.js");

function _(e) {
  let {
    label: t,
    onChange: n,
    enabled: r,
    subLabel: s
  } = e;
  return (0, i.jsx)(c.j7V, {
    value: !!r,
    onChange: n,
    note: s,
    children: t
  })
}

function j() {
  let e = (0, Chunk442837.e7)([Chunk663389.Z], () => Chunk663389.Z.getSubsection()),
    t = Chunk73800.useRef(null),
    {
      categories: n,
      initialized: s
    } = (0, Chunk442837.cj)([Chunk151662.Z], () => Chunk151662.Z.getEmailSettings());
  Chunk73800.useEffect(() => {
    if (null == Chunk120356)(0, Chunk960412.Y7)();
    else if (module === Chunk930441.vG.toUpperCase()) {
      var n;
      null == exports || null == (n = exports.current) || require.scrollIntoView(true)
    }
  }, [Chunk120356, exports, module]);
  let j = Chunk930441.M0.reduce((e, t) => e || !!n[t], false),
    E = {
      [Chunk930441.$Z.COMMUNICATION]: Chunk726985.s6.NOTIFICATIONS_EMAILS_COMMUNICATION,
      [Chunk930441.$Z.SOCIAL]: Chunk726985.s6.NOTIFICATIONS_EMAILS_SOCIAL,
      [Chunk930441.$Z.UPDATES_AND_ANNOUNCEMENTS]: Chunk726985.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES,
      [Chunk930441.$Z.TIPS]: Chunk726985.s6.NOTIFICATIONS_EMAILS_TIPS,
      [Chunk930441.$Z.RECOMMENDATIONS_AND_EVENTS]: Chunk726985.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS
    };
  return Chunk120356 ? (0, Chunk255367.jsxs)(Chunk921801.F, {
    setting: Chunk726985.s6.NOTIFICATIONS_EMAILS,
    children: [(0, Chunk255367.jsx)("div", {
      ref: exports
    }), (0, Chunk255367.jsxs)(Chunk481060.hjN, {
      className: Chunk20493.marginTop40,
      tag: Chunk481060.RB0.H1,
      title: Chunk388032.intl.string(Chunk388032.t.TPchzM),
      children: [Chunk930441.Od.map(e => {
        let {
          category: t,
          label: r,
          subLabel: s
        } = e, a = E[t], l = (0, i.jsx)(_, {
          label: r(),
          subLabel: s(),
          enabled: n[t],
          onChange: e => {
            (0, m.pR)(t, e)
          }
        }, r());
        return null != a ? (0, i.jsx)(d.F, {
          setting: a,
          children: l
        }, r()) : l
      }), (0, Chunk255367.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS,
        children: [(0, Chunk255367.jsx)(Chunk755721.zx, {
          className: Chunk495288.marketingUnsubscribeButton,
          disabled: !j,
          look: Chunk755721.iL.LINK,
          color: Chunk755721.Tt.LINK,
          onClick: Chunk960412.oc,
          children: Chunk388032.intl.string(Chunk388032.t.Ra9Pws)
        }), (0, Chunk255367.jsx)(Chunk481060.R94, {
          type: Chunk481060.geA.DESCRIPTION,
          children: Chunk388032.intl.string(Chunk388032.t.iYjQ8f)
        }), (0, Chunk255367.jsx)(Chunk481060.$i$, {
          className: a()(Chunk20493.marginTop40, Chunk20493.marginBottom40)
        })]
      })]
    })]
  }) : null
}