/** Chunk was on 30419 **/
/** chunk id: 395199, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk215569 = require("./215569.js"),
  Chunk257465 = require("./257465.jsx"),
  Chunk369585 = require("./369585.jsx"),
  Chunk103866 = require("./103866.jsx"),
  Chunk37148 = require("./37148.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk777789 = require("./777789.jsx"),
  Chunk78839 = require("./78839.js"),
  Chunk709054 = require("./709054.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk542886 = require("./542886.js");

function p(e) {
  let {
    imageClass: t,
    children: l,
    error: r,
    onDismissError: i
  } = e;
  return (0, n.jsxs)("div", {
    className: j.content,
    children: [(0, n.jsx)("div", {
      className: s()(j.image, t)
    }), l, (0, n.jsx)(o.W, {
      children: null != r ? (0, n.jsx)(x.oXn, {
        className: j.error,
        children: (0, n.jsx)(x.kzN, {
          onDismiss: i,
          children: r.message
        })
      }) : null
    })]
  })
}
let v = e => {
  let {
    canceledCount: t
  } = e, l = (0, a.e7)([h.Z], () => h.Z.getPremiumTypeSubscription());
  return null == l ? null : (0, n.jsxs)("div", {
    className: j.pendingCancellation,
    children: [(0, n.jsx)(x.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: j.pendingCancellationIcon
    }), (0, n.jsx)(x.Text, {
      variant: "text-md/normal",
      className: j.pendingCancellationMessage,
      children: C.intl.format(C.t.SFpsCA, {
        date: l.currentPeriodEnd,
        canceledCount: t
      })
    })]
  })
};

function S(e) {
  let {
    imageClass: t,
    blurb: l,
    guild: r,
    warning: i,
    error: s,
    onDismissError: a,
    slotCount: o = 1,
    canceledCount: c = 0
  } = e;
  return (0, n.jsxs)(p, {
    imageClass: t,
    error: s,
    onDismissError: a,
    children: [(0, n.jsx)(x.Text, {
      variant: "text-md/normal",
      children: l
    }), (0, n.jsx)(g.Z, {
      className: j.guildCard,
      guild: r,
      subscriptionChange: o
    }), (0, n.jsx)(x.Text, {
      variant: "text-md/normal",
      children: i
    }), c > 0 ? (0, n.jsx)(v, {
      canceledCount: c
    }) : null]
  })
}

function y(e) {
  var t, l;
  let {
    imageClass: i,
    blurb: s,
    fromGuilds: a,
    toGuild: o,
    error: c,
    onDismissError: d,
    slotCount: u = 1,
    canceledCount: m = 0
  } = e, h = r.useRef(a), S = null == (t = h.current) ? true : t.length, y = null == (l = h.current) ? true : l.reduce((e, t) => (e.hasOwnProperty(t.id) || (e[t.id] = []), e[t.id].push(t), e), {});
  return (0, n.jsxs)(p, {
    imageClass: i,
    error: c,
    onDismissError: d,
    children: [(0, n.jsx)(x.Text, {
      variant: "text-md/normal",
      children: s
    }), (0, n.jsx)(x.Text, {
      variant: "text-xs/bold",
      className: j.transferGuildCardHeader,
      children: C.intl.format(C.t["5zQYEx"], {
        guildCount: S
      })
    }), null != y ? f.default.keys(y).map(e => (0, n.jsx)(g.Z, {
      className: j.transferFromGuildCard,
      guild: y[e][0],
      subscriptionChange: false * y[e].length
    }, e)) : null, (0, n.jsx)(x.Text, {
      variant: "text-xs/normal",
      className: j.transferGuildCardHeader,
      children: C.intl.format(C.t.ct6oxM, {
        slotCount: u
      })
    }), (0, n.jsx)("div", {
      className: j.activeTransferGuildCardBorder,
      children: (0, n.jsx)(g.Z, {
        className: j.transferToGuildCard,
        guild: o,
        subscriptionChange: null != a ? a.length : 1
      })
    }), m > 0 ? (0, n.jsx)(v, {
      canceledCount: m
    }) : null]
  })
}
let b = e => {
  let {
    transitionState: t,
    onClose: l,
    title: r,
    subtitle: i,
    imageClass: s,
    guild: a,
    warning: o,
    slotCount: x = 1,
    canceledCount: g = 0,
    isTransfer: h = false,
    fromGuilds: f,
    toGuild: j,
    confirmation: p,
    confirmationLabel: v,
    isModifyingSubscription: b,
    onConfirm: E,
    onCancel: O,
    error: N,
    onDismissError: P
  } = e, T = [{
    variant: "secondary",
    text: C.intl.string(C.t["ETE/oK"]),
    onClick: O,
    disabled: b
  }, {
    variant: "primary",
    text: p,
    onClick: E,
    loading: b,
    "aria-label": v
  }];
  return (0, n.jsxs)(c.I, {
    transitionState: t,
    onClose: l,
    size: "sm",
    children: [(0, n.jsx)(m.x, {
      title: r
    }), (0, n.jsx)(u.f, {
      children: h && null != j ? (0, n.jsx)(y, {
        imageClass: null != s ? s : "",
        blurb: i,
        fromGuilds: f,
        toGuild: j,
        error: N,
        onDismissError: P,
        slotCount: x,
        canceledCount: g
      }) : null != a ? (0, n.jsx)(S, {
        imageClass: null != s ? s : "",
        blurb: i,
        guild: a,
        warning: o,
        error: N,
        onDismissError: P,
        slotCount: x,
        canceledCount: g
      }) : null
    }), (0, n.jsx)(d.G, {
      actions: T,
      actionsFullWidth: false
    })]
  })
};
b.ApplyBody = S, b.TransferBody = y, b.Footer = function(e) {
  let {
    confirmation: t,
    confirmationLabel: l,
    isModifyingSubscription: r,
    onConfirm: i,
    onCancel: s
  } = e;
  return (0, n.jsx)("div", {
    className: j.footer,
    children: (0, n.jsxs)(x.hE2, {
      direction: "horizontal-reverse",
      children: [(0, n.jsx)(x.zxk, {
        variant: "primary",
        text: t,
        onClick: i,
        loading: r,
        "aria-label": l
      }), (0, n.jsx)(x.zxk, {
        variant: "secondary",
        text: C.intl.string(C.t["ETE/oK"]),
        onClick: s,
        disabled: r
      })]
    })
  })
};
let E = b