/** Chunk was on web.js **/
/** chunk id: 280942, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk267642 = require("./267642.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk573567 = require("./573567.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
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
    onClose: _,
    hasCancelableGuildBoostSlot: h,
    premiumSubscription: g,
    onSelect: E,
    fractionalState: b
  } = e;

  function y() {
    (0, a.ZDy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 760558));
      return n => (0, r.jsx)(e, m(p({}, n), {
        guildBoostSlots: [t],
        locationSection: c.jXE.SETTINGS_PREMIUM
      }))
    })
  }

  function O() {
    (0, a.ZDy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 401786));
      return n => (0, r.jsx)(e, m(p({}, n), {
        guildBoostSlot: t
      }))
    })
  }

  function v() {
    (0, a.ZDy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 450468));
      return n => (0, r.jsx)(e, m(p({}, n), {
        guildBoostSlotId: t.id
      }))
    })
  }
  let I = {
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
    case c.O0b.PAST_DUE:
      I.cancel.disabled = true, I.cancel.subtext = d.intl.string(d.t.WnL6DV), I.uncancel.disabled = true;
      break;
    case c.O0b.PAUSE_PENDING:
    case c.O0b.PAUSED:
      b === u.a$.NONE && (I.transfer.disabled = true, I.transfer.subtext = d.intl.string(d.t.LiLRRT), I.cancel.subtext = d.intl.string(d.t["1ywaWL"]), I.cancel.disabled = true, I.uncancel.disabled = true)
  }
  let T = i.useMemo(() => g.isPausedOrPausePending && b === u.a$.NONE ? (0, r.jsx)(a.sNh, {
    id: "manage-subscription",
    label: d.intl.string(d.t.obRG6Y),
    action: () => (0, s.openUserSettings)(o.n.SUBSCRIPTIONS_PANEL, {
      section: c.oAB.SUBSCRIPTIONS
    }),
    iconLeft: a.WGR,
    className: f.manageSubscription
  }) : null, [b, g]);
  return (0, r.jsxs)(a.v2r, {
    onSelect: E,
    navId: "subscription-context",
    variant: "fixed",
    "aria-label": d.intl.string(d.t.ogxXGq),
    onClose: _,
    children: [(0, r.jsx)(a.sNh, {
      id: "apply",
      label: I.transfer.label,
      subtext: I.transfer.subtext,
      action: y,
      disabled: I.transfer.disabled
    }), (0, l.tl)(t) ? (0, r.jsx)(a.sNh, {
      id: "uncancel",
      label: I.uncancel.label,
      subtext: I.uncancel.subtext,
      action: v,
      disabled: I.uncancel.disabled
    }) : (0, r.jsx)(a.sNh, {
      id: "cancel",
      label: I.cancel.label,
      subtext: I.cancel.subtext,
      action: O,
      disabled: I.cancel.disabled,
      color: "danger"
    }), T]
  })
}