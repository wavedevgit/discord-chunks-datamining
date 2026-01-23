/** Chunk was on web.js **/
/** chunk id: 784886, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => w
}), require("./896048.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk3203 = require("./3203.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk308528 = require("./308528.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk355622 = require("./355622.js"),
  Chunk408018 = require("./408018.js"),
  Chunk133343 = require("./133343.jsx"),
  Chunk195880 = require("./195880.js"),
  Chunk45787 = require("./45787.js"),
  Chunk95701 = require("./95701.js"),
  Chunk562153 = require("./562153.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk448613 = require("./448613.js"),
  Chunk633572 = require("./633572.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk787288 = require("./787288.js");

function S(e, t, n) {
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
      S(e, t, n[t])
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

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let R = (0, Chunk95701.createChannelRecord)({
  id: "1",
  type: Chunk652215.rbe.DM
});

function w(e) {
  let {
    user: t,
    guildId: a,
    channelId: m,
    onClose: O,
    disableAutoFocus: S = false,
    upsell: C = false
  } = e, {
    newestAnalyticsLocation: w,
    analyticsLocations: P
  } = (0, u.Ay)(), {
    trackUserProfileAction: D
  } = (0, E.NJ)(), [x, L] = i.useState(""), [j, M] = i.useState((0, f.x7)(x)), k = i.useRef(false), U = i.useRef(null), G = i.useRef(null), {
    Component: V
  } = (0, o.V)(), F = i.useMemo(() => N(T({}, d.oU.USER_PROFILE), {
    disableAutoFocus: S
  }), [S]), B = i.useCallback(async () => {
    (0, h.xs)(t.id), await c.A.openPrivateChannel({
      recipientIds: [t.id]
    }), (0, l.mMO)(async () => {
      let {
        default: e
      } = await n.e("95501").then(n.bind(n, 367516));
      return t => (0, r.jsx)(e, N(T({}, t), {
        giftIntentType: v.np.FRIEND_ANNIVERSARY,
        analyticsLocationHistory: P
      }))
    })
  }, [t.id, P]), H = i.useCallback(() => (0, r.jsxs)("div", {
    className: I.Uo,
    children: [(0, r.jsx)(l.K0, {
      size: "sm",
      variant: "icon-only",
      icon: V,
      "aria-label": A.intl.string(A.t.I61IsE),
      onClick: B
    }), (0, r.jsx)(b.A, {
      user: t,
      analyticsLocations: P
    })]
  }), [V, B, t, P]);
  return (0, r.jsx)(p.Ay, {
    className: s()(I.kL, {
      [I.UX]: C
    }),
    editorClassName: I.EN,
    type: F,
    placeholder: A.intl.formatToPlainString(A.t["0ZQw/X"], {
      name: g.Ay.getName(a, m, t)
    }),
    channel: R,
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
      (U.current !== r || null == G.current) && (U.current = r, G.current = (0, _.m)());
      try {
        var i;
        return D({
          action: "SEND_DIRECT_MESSAGE"
        }), await (0, y.p)({
          userId: t.id,
          content: r,
          openChannel: true,
          whenReady: true,
          location: w,
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
    renderButtons: C ? H : true
  })
}