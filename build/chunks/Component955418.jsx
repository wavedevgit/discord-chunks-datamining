/** Chunk was on web.js **/
/** chunk id: 955418, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
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
  Chunk48854 = require("./48854.js"),
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

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let P = (0, Chunk131704.createChannelRecord)({
  id: "1",
  type: Chunk981631.d4z.DM
});

function R(e) {
  let {
    user: t,
    guildId: a,
    channelId: h,
    onClose: O,
    disableAutoFocus: T = false,
    upsell: A = false
  } = e, {
    newestAnalyticsLocation: R,
    analyticsLocations: w
  } = (0, u.ZP)(), {
    trackUserProfileAction: D
  } = (0, E.KZ)(), [x, L] = i.useState(""), [j, M] = i.useState((0, f.JM)(x)), k = i.useRef(false), U = i.useRef(null), G = i.useRef(null), {
    Component: Z
  } = (0, s.V)(), F = i.useMemo(() => N(C({}, d.Ie.USER_PROFILE), {
    disableAutoFocus: T
  }), [T]), B = i.useCallback(async () => {
    (0, m.PV)(t.id), await c.Z.openPrivateChannel({
      recipientIds: [t.id]
    }), (0, l.ZDy)(async () => {
      let {
        default: e
      } = await n.e("5890").then(n.bind(n, 171793));
      return t => (0, r.jsx)(e, N(C({}, t), {
        giftIntentType: v.hX.FRIEND_ANNIVERSARY,
        analyticsLocationHistory: w
      }))
    })
  }, [t.id, w]), V = i.useCallback(() => (0, r.jsxs)("div", {
    className: I.buttons,
    children: [(0, r.jsx)(l.hU, {
      size: "sm",
      variant: "icon-only",
      icon: Z,
      "aria-label": S.intl.string(S.t.I61IsE),
      onClick: B
    }), (0, r.jsx)(y.Z, {
      user: t,
      analyticsLocations: w
    })]
  }), [Z, B, t, w]);
  return (0, r.jsx)(p.ZP, {
    className: o()(I.container, {
      [I.upsell]: A
    }),
    editorClassName: I.editor,
    type: F,
    placeholder: S.intl.formatToPlainString(S.t["0ZQw/X"], {
      name: g.ZP.getName(a, h, t)
    }),
    channel: P,
    textValue: x,
    richValue: j,
    onChange: (e, t, n) => {
      t !== x && (L(t), M(n))
    },
    focused: k.current,
    onFocus: () => {
      k.current = true
    },
    onBlur: () => {
      k.current = false
    },
    onSubmit: async e => {
      let {
        value: n
      } = e, r = n.trim();
      if ("" === r) return {
        shouldClear: false,
        shouldRefocus: true
      };
      (U.current !== r || null == G.current) && (U.current = r, G.current = (0, _.r)());
      try {
        var i;
        return D({
          action: "SEND_DIRECT_MESSAGE"
        }), await (0, b.Z)({
          userId: t.id,
          content: r,
          openChannel: true,
          whenReady: true,
          location: R,
          nonce: null != (i = G.current) ? i : true
        }), U.current = null, G.current = null, null == O || O(), {
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
    renderButtons: A ? V : true
  })
}