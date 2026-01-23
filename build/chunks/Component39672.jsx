/** Chunk was on web.js **/
/** chunk id: 39672, original params: e,t,n (module,exports,re quire) **/
"use strict";
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

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e) {
  let {
    guildBoostSlot: t,
    onClose: p,
    hasCancelableGuildBoostSlot: h,
    premiumSubscription: g,
    onSelect: E,
    fractionalState: y
  } = e;

  function b() {
    (0, a.mMO)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 657516));
      return n => (0, r.jsx)(e, m(_({}, n), {
        guildBoostSlots: [t],
        locationSection: c.JJy.SETTINGS_PREMIUM
      }))
    })
  }

  function O() {
    (0, a.mMO)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 983511));
      return n => (0, r.jsx)(e, m(_({}, n), {
        guildBoostSlot: t
      }))
    })
  }

  function v() {
    (0, a.mMO)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 342744));
      return n => (0, r.jsx)(e, m(_({}, n), {
        guildBoostSlotId: t.id
      }))
    })
  }
  let A = {
    transfer: {
      label: null != t.premiumGuildSubscription ? d.intl.string(d.t["PR0n//"]) : d.intl.string(d.t["+fmEYG"]),
      subtext: t.isOnCooldown() ? d.intl.string(d.t.XnB8M0) : null,
      disabled: t.isOnCooldown()
    },
    cancel: {
      label: d.intl.string(d.t.twFU3R),
      subtext: h ? null : d.intl.string(d.t.oQ9lOh),
      disabled: !h
    },
    uncancel: {
      label: d.intl.string(d.t["2glQNp"]),
      subtext: null,
      disabled: false
    }
  };
  switch (g.status) {
    case c.Dmq.PAST_DUE:
      A.cancel.disabled = true, A.cancel.subtext = d.intl.string(d.t.WnL6DV), A.uncancel.disabled = true;
      break;
    case c.Dmq.PAUSE_PENDING:
    case c.Dmq.PAUSED:
      y === u.xc.NONE && (A.transfer.disabled = true, A.transfer.subtext = d.intl.string(d.t.LiLRRT), A.cancel.subtext = d.intl.string(d.t["1ywaWL"]), A.cancel.disabled = true, A.uncancel.disabled = true)
  }
  let I = i.useMemo(() => g.isPausedOrPausePending && y === u.xc.NONE ? (0, r.jsx)(a.Drp, {
    id: "manage-subscription",
    label: d.intl.string(d.t.obRG6Y),
    action: () => (0, o.openUserSettings)(s.X.SUBSCRIPTIONS_PANEL, {
      section: c.nc_.SUBSCRIPTIONS
    }),
    iconLeft: a.xmO,
    className: f.v
  }) : null, [y, g]);
  return (0, r.jsxs)(a.W1t, {
    onSelect: E,
    navId: "subscription-context",
    variant: "fixed",
    "aria-label": d.intl.string(d.t.ogxXGq),
    onClose: p,
    children: [(0, r.jsx)(a.Drp, {
      id: "apply",
      label: A.transfer.label,
      subtext: A.transfer.subtext,
      action: b,
      disabled: A.transfer.disabled
    }), (0, l.I5)(t) ? (0, r.jsx)(a.Drp, {
      id: "uncancel",
      label: A.uncancel.label,
      subtext: A.uncancel.subtext,
      action: v,
      disabled: A.uncancel.disabled
    }) : (0, r.jsx)(a.Drp, {
      id: "cancel",
      label: A.cancel.label,
      subtext: A.cancel.subtext,
      action: O,
      disabled: A.cancel.disabled,
      color: "danger"
    }), I]
  })
}