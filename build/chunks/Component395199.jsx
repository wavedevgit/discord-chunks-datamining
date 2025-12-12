/** Chunk was on web.js **/
/** chunk id: 395199, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk215569 = require("./215569.js"),
  Chunk481060 = require("./481060.js"),
  Chunk777789 = require("./777789.jsx"),
  Chunk78839 = require("./78839.js"),
  Chunk709054 = require("./709054.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk542886 = require("./542886.js");

function h(e) {
  let {
    imageClass: t,
    children: n,
    error: i
  } = e;
  return (0, r.jsxs)("div", {
    className: m.content,
    children: [(0, r.jsx)("div", {
      className: a()(m.image, t)
    }), n, (0, r.jsx)(c.W, {
      children: null != i ? (0, r.jsx)(u.oXn, {
        className: m.error,
        children: (0, r.jsx)(s.M14, {
          type: "critical",
          children: i.message
        })
      }) : null
    })]
  })
}
let g = e => {
  let {
    canceledCount: t
  } = e, n = (0, l.e7)([f.Z], () => f.Z.getPremiumTypeSubscription());
  return null == n ? null : (0, r.jsxs)("div", {
    className: m.pendingCancellation,
    children: [(0, r.jsx)(u.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: m.pendingCancellationIcon
    }), (0, r.jsx)(u.Text, {
      variant: "text-md/normal",
      className: m.pendingCancellationMessage,
      children: _.intl.format(_.t.SFpsCH, {
        date: n.currentPeriodEnd,
        canceledCount: t
      })
    })]
  })
};

function E(e) {
  let {
    imageClass: t,
    blurb: n,
    guild: i,
    warning: o,
    error: a,
    slotCount: s = 1,
    canceledCount: l = 0
  } = e;
  return (0, r.jsxs)(h, {
    imageClass: t,
    error: a,
    children: [(0, r.jsx)(u.Text, {
      variant: "text-md/normal",
      children: n
    }), (0, r.jsx)(d.Z, {
      className: m.guildCard,
      guild: i,
      subscriptionChange: s
    }), (0, r.jsx)(u.Text, {
      variant: "text-md/normal",
      children: o
    }), l > 0 ? (0, r.jsx)(g, {
      canceledCount: l
    }) : null]
  })
}

function b(e) {
  var t, n;
  let {
    imageClass: o,
    blurb: a,
    fromGuilds: s,
    toGuild: l,
    error: c,
    slotCount: f = 1,
    canceledCount: E = 0
  } = e, b = i.useRef(s), y = null == (t = b.current) ? true : t.length, O = null == (n = b.current) ? true : n.reduce((e, t) => (e.hasOwnProperty(t.id) || (e[t.id] = []), e[t.id].push(t), e), {});
  return (0, r.jsxs)(h, {
    imageClass: o,
    error: c,
    children: [(0, r.jsx)(u.Text, {
      variant: "text-md/normal",
      children: a
    }), (0, r.jsx)(u.Text, {
      variant: "text-xs/bold",
      className: m.transferGuildCardHeader,
      children: _.intl.format(_.t["5zQYEz"], {
        guildCount: null != y ? y : 0
      })
    }), null != O ? p.default.keys(O).map(e => (0, r.jsx)(d.Z, {
      className: m.transferFromGuildCard,
      guild: O[e][0],
      subscriptionChange: false * O[e].length
    }, e)) : null, (0, r.jsx)(u.Text, {
      variant: "text-xs/normal",
      className: m.transferGuildCardHeader,
      children: _.intl.format(_.t.ct6oxD, {
        slotCount: f
      })
    }), (0, r.jsx)("div", {
      className: m.activeTransferGuildCardBorder,
      children: (0, r.jsx)(d.Z, {
        className: m.transferToGuildCard,
        guild: l,
        subscriptionChange: null != s ? s.length : 1
      })
    }), E > 0 ? (0, r.jsx)(g, {
      canceledCount: E
    }) : null]
  })
}

function y(e) {
  let {
    confirmation: t,
    confirmationLabel: n,
    isModifyingSubscription: i,
    onConfirm: o,
    onCancel: a
  } = e;
  return (0, r.jsx)("div", {
    className: m.footer,
    children: (0, r.jsxs)(u.ButtonGroup, {
      direction: "horizontal-reverse",
      children: [(0, r.jsx)(u.Button, {
        variant: "primary",
        text: t,
        onClick: o,
        loading: i,
        "aria-label": n
      }), (0, r.jsx)(u.Button, {
        variant: "secondary",
        text: _.intl.string(_.t["ETE/oC"]),
        onClick: a,
        disabled: i
      })]
    })
  })
}

function O(e, t, n, r, i) {
  return [{
    variant: "secondary",
    text: _.intl.string(_.t["ETE/oC"]),
    onClick: i,
    disabled: n
  }, {
    variant: "primary",
    text: e,
    onClick: r,
    loading: n,
    "aria-label": t
  }]
}
let v = e => {
  let {
    transitionState: t,
    onClose: n,
    title: i,
    subtitle: o,
    imageClass: a,
    guild: l,
    warning: c,
    slotCount: u = 1,
    canceledCount: d = 0,
    isTransfer: f = false,
    fromGuilds: p,
    toGuild: _,
    confirmation: m,
    confirmationLabel: h,
    isModifyingSubscription: g,
    onConfirm: y,
    onCancel: v,
    error: S
  } = e, I = O(m, h, g, y, v), T = () => f && null != _ ? (0, r.jsx)(b, {
    imageClass: null != a ? a : "",
    blurb: o,
    fromGuilds: p,
    toGuild: _,
    error: S,
    slotCount: u,
    canceledCount: d
  }) : null != l ? (0, r.jsx)(E, {
    imageClass: null != a ? a : "",
    blurb: o,
    guild: l,
    warning: c,
    error: S,
    slotCount: u,
    canceledCount: d
  }) : null;
  return (0, r.jsxs)(s.IX, {
    transitionState: t,
    onClose: n,
    size: "sm",
    children: [(0, r.jsx)(s.xBx, {
      title: i
    }), (0, r.jsx)(s.fef, {
      children: T()
    }), (0, r.jsx)(s.Go$, {
      actions: I,
      actionsFullWidth: false
    })]
  })
};
v.ApplyBody = E, v.TransferBody = b, v.Footer = y;
let S = v