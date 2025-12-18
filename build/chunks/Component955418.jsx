/** Chunk was on web.js **/
/** chunk id: 955418, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
}), require("./388685.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk114101 = require("./114101.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk541716 = require("./541716.js"),
  Chunk752305 = require("./752305.js"),
  Chunk893718 = require("./893718.jsx"),
  Chunk795448 = require("./795448.js"),
  Chunk131704 = require("./131704.js"),
  Chunk5192 = require("./5192.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk698305 = require("./698305.js"),
  Chunk302624 = require("./302624.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk15 = require("./15.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function C(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let N = (0, Chunk131704.createChannelRecord)({
  id: "1",
  type: Chunk981631.d4z.DM
});

function P(e) {
  let {
    user: t,
    guildId: a,
    channelId: m,
    onClose: y,
    disableAutoFocus: I = false,
    upsell: C = false
  } = e, {
    newestAnalyticsLocation: P,
    analyticsLocations: R
  } = (0, u.ZP)(), {
    trackUserProfileAction: w
  } = (0, g.KZ)(), [D, x] = i.useState(""), [L, j] = i.useState((0, f.JM)(D)), M = i.useRef(false), {
    Component: k
  } = (0, s.V)(), U = i.useMemo(() => A(T({}, d.Ie.USER_PROFILE), {
    disableAutoFocus: I
  }), [I]), G = i.useCallback(async () => {
    (0, _.PV)(t.id), await c.Z.openPrivateChannel({
      recipientIds: [t.id]
    }), (0, l.ZDy)(async () => {
      let {
        default: e
      } = await n.e("5890").then(n.bind(n, 171793));
      return t => (0, r.jsx)(e, A(T({}, t), {
        giftIntentType: O.hX.FRIEND_ANNIVERSARY,
        analyticsLocationHistory: R
      }))
    })
  }, [t.id, R]), Z = i.useCallback(() => (0, r.jsxs)("div", {
    className: S.buttons,
    children: [(0, r.jsx)(l.hU, {
      size: "sm",
      variant: "icon-only",
      icon: k,
      "aria-label": v.intl.string(v.t.I61IsE),
      onClick: G
    }), (0, r.jsx)(b.Z, {
      user: t,
      analyticsLocations: R
    })]
  }), [k, G, t, R]);
  return (0, r.jsx)(p.ZP, {
    className: o()(S.container, {
      [S.upsell]: C
    }),
    editorClassName: S.editor,
    type: U,
    placeholder: v.intl.formatToPlainString(v.t["0ZQw/X"], {
      name: h.ZP.getName(a, m, t)
    }),
    channel: N,
    textValue: D,
    richValue: L,
    onChange: (e, t, n) => {
      t !== D && (x(t), j(n))
    },
    focused: M.current,
    onFocus: () => {
      M.current = true
    },
    onBlur: () => {
      M.current = false
    },
    onSubmit: async e => {
      let {
        value: n
      } = e;
      try {
        return w({
          action: "SEND_DIRECT_MESSAGE"
        }), await (0, E.Z)({
          userId: t.id,
          content: n.trim(),
          openChannel: true,
          whenReady: true,
          location: P
        }), null == y || y(), {
          shouldClear: true,
          shouldRefocus: false
        }
      } catch (e) {
        return {
          shouldClear: false,
          shouldRefocus: false
        }
      }
    },
    renderButtons: C ? Z : true
  })
}