/** Chunk was on 60667 **/
/** chunk id: 39672, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk473145 = require("./473145.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk245006 = require("./245006.js");

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e) {
  let {
    guildBoostSlot: t,
    onClose: g,
    hasCancelableGuildBoostSlot: A,
    premiumSubscription: f,
    onSelect: h,
    fractionalState: b
  } = e, E = {
    transfer: {
      label: null != t.premiumGuildSubscription ? u.intl.string(u.t["PR0n//"]) : u.intl.string(u.t["+fmEYG"]),
      subtext: t.isOnCooldown() ? u.intl.string(u.t.XnB8M0) : null,
      disabled: t.isOnCooldown()
    },
    cancel: {
      label: u.intl.string(u.t.twFU3R),
      subtext: A ? null : u.intl.string(u.t.oQ9lOh),
      disabled: !A
    },
    uncancel: {
      label: u.intl.string(u.t["2glQNp"]),
      subtext: null,
      disabled: false
    }
  };
  switch (f.status) {
    case c.Dmq.PAST_DUE:
      E.cancel.disabled = true, E.cancel.subtext = u.intl.string(u.t.WnL6DV), E.uncancel.disabled = true;
      break;
    case c.Dmq.PAUSE_PENDING:
    case c.Dmq.PAUSED:
      b === d.xc.NONE && (E.transfer.disabled = true, E.transfer.subtext = u.intl.string(u.t.LiLRRT), E.cancel.subtext = u.intl.string(u.t["1ywaWL"]), E.cancel.disabled = true, E.uncancel.disabled = true)
  }
  let x = i.useMemo(() => f.isPausedOrPausePending && b === d.xc.NONE ? (0, r.jsx)(l.Drp, {
    id: "manage-subscription",
    label: u.intl.string(u.t.obRG6Y),
    action: () => (0, a.openUserSettings)(s.X.SUBSCRIPTIONS_PANEL, {
      section: c.nc_.SUBSCRIPTIONS
    }),
    iconLeft: l.xmO,
    className: _.v
  }) : null, [b, f]);
  return (0, r.jsxs)(l.W1t, {
    "data-menu-mixed": true,
    onSelect: h,
    navId: "subscription-context",
    variant: "fixed",
    "aria-label": u.intl.string(u.t.ogxXGq),
    onClose: g,
    children: [(0, r.jsx)(l.Drp, {
      id: "apply",
      label: E.transfer.label,
      subtext: E.transfer.subtext,
      action: function() {
        (0, l.mMO)(async () => {
          let {
            default: e
          } = await Promise.resolve().then(n.bind(n, 657516));
          return n => (0, r.jsx)(e, m(p({}, n), {
            guildBoostSlots: [t],
            locationSection: c.JJy.SETTINGS_PREMIUM
          }))
        })
      },
      disabled: E.transfer.disabled
    }), (0, o.I5)(t) ? (0, r.jsx)(l.Drp, {
      id: "uncancel",
      label: E.uncancel.label,
      subtext: E.uncancel.subtext,
      action: function() {
        (0, l.mMO)(async () => {
          let {
            default: e
          } = await Promise.resolve().then(n.bind(n, 342744));
          return n => (0, r.jsx)(e, m(p({}, n), {
            guildBoostSlotId: t.id
          }))
        })
      },
      disabled: E.uncancel.disabled
    }) : (0, r.jsx)(l.Drp, {
      id: "cancel",
      label: E.cancel.label,
      subtext: E.cancel.subtext,
      action: function() {
        (0, l.mMO)(async () => {
          let {
            default: e
          } = await Promise.resolve().then(n.bind(n, 983511));
          return n => (0, r.jsx)(e, m(p({}, n), {
            guildBoostSlot: t
          }))
        })
      },
      disabled: E.cancel.disabled,
      color: "danger"
    }), x]
  })
}