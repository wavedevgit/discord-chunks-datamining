/** Chunk was on 16674 **/
/** chunk id: 632441, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => C
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk734057 = require("./734057.js"),
  Chunk287809 = require("./287809.js"),
  Chunk562153 = require("./562153.js"),
  Chunk798286 = require("./798286.js"),
  Chunk814278 = require("./814278.js"),
  Chunk636153 = require("./636153.js"),
  Chunk204459 = require("./204459.js"),
  Chunk665691 = require("./665691.js"),
  Chunk998759 = require("./998759.js"),
  Chunk50299 = require("./50299.js"),
  Chunk82821 = require("./82821.js"),
  Chunk75811 = require("./75811.jsx"),
  Chunk930840 = require("./930840.jsx");
require("./603266.js");
var Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk42768 = require("./42768.js");

function T(e) {
  let {
    badgeText: t,
    badgeColor: r
  } = e, u = l.useRef(t), i = l.useRef(r);
  return (0, n.jsx)(s.LpS, {
    text: u.current,
    color: i.current
  })
}

function C(e) {
  var t, r;
  let {
    transitionState: C,
    userId: v,
    channelId: h,
    onClose: j
  } = e, N = (0, i.bG)([c.default], () => c.default.getUser(v)), I = (0, i.bG)([a.A], () => {
    var e;
    return null == (e = a.A.getChannel(h)) ? true : e.getGuildId()
  }), w = o.Ay.useName(I, null, N), {
    fingerprint: x,
    userKey: U
  } = (0, p.R)({
    userId: v
  }), F = (0, A.z)({
    fingerprintBase64: x,
    chunkSize: 5,
    desiredLength: 45
  }), P = l.useCallback(() => {
    (0, f.Hb)({
      userId: v,
      channelId: h
    })
  }, [h, v]), k = (0, b.UF)({
    userId: v,
    channelId: h
  });
  (0, y.w)({
    channelId: h,
    userId: v,
    nickname: w,
    onAlertOpen: j
  });
  let {
    isCurrentUserKeyPersistent: D,
    isOtherUserKeyPersistent: K,
    loading: M
  } = (0, E.q)({
    userId: v
  }), V = l.useCallback(() => {
    null != U && ((0, d.bk)(v, U, K, h, S.ThZ.E2EE_USER_VERIFY_MODAL), j())
  }, [U, v, K, h, j]), L = l.useCallback(() => {
    null != U && ((0, d.Dh)(v, U, K), j())
  }, [U, v, K, j]), [G, Y] = l.useMemo(() => k ? [m.intl.string(m.t.UNUuem), s.LU0.colors.BACKGROUND_BRAND.css] : [m.intl.string(m.t.y2b7CA), s.LU0.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css], [k]), z = l.useMemo(() => (0, d.Z1)({
    isCurrentUserKeyPersistent: D,
    isOtherUserKeyPersistent: K,
    otherUserNickname: w
  }), [D, K, w]), B = (0, g.H)({
    userId: v,
    keyToOmit: U
  });
  l.useEffect(() => {
    (0, f.HJ)({
      userId: v,
      channelId: h
    })
  }, [h, v]);
  let H = {
      transitionState: C,
      title: m.intl.string(m.t["/WPGnF"]),
      subtitle: m.intl.format(m.t.oc2kce, {
        username: w
      })
    },
    q = (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsxs)("div", {
        className: R.Ot,
        children: [B > 0 && (0, n.jsx)(s.po8, {
          messageType: s.YCn.INFO,
          className: R.Ht,
          children: m.intl.format(m.t.uZDkz0, {
            count: B
          })
        }), (0, n.jsxs)("div", {
          className: R.wx,
          children: [(0, n.jsx)(s.Heading, {
            variant: "text-sm/bold",
            color: "text-strong",
            children: m.intl.string(m.t["/WPGnF"])
          }), null != F && (0, n.jsx)(_.c, {
            className: R.nJ,
            chunks: F,
            color: s.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
            onCopy: P
          }), (0, n.jsx)("div", {
            className: R.ub,
            children: null == F ? (0, n.jsx)(s.y$y, {
              className: R.u1,
              type: s.tVU.SPINNING_CIRCLE
            }) : (0, n.jsx)(T, {
              badgeText: G,
              badgeColor: Y
            })
          })]
        }), (0, n.jsx)(O.j, {
          className: R.aY,
          chunks: F,
          columns: 3
        })]
      }), (0, n.jsx)(s.Text, {
        className: R.qr,
        variant: "text-sm/normal",
        color: "text-muted",
        children: z
      })]
    }),
    Z = {
      text: k ? m.intl.string(m.t["Osb+/n"]) : m.intl.string(m.t["0tvNAn"]),
      disabled: null == F || M,
      onClick: k ? L : V
    },
    J = {
      text: m.intl.string(m.t["ETE/oC"]),
      onClick: j,
      variant: "secondary"
    };
  return (0, n.jsx)(u.Modal, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = r[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      })
    }
    return e
  }({
    onClose: j
  }, H), r = r = {
    actions: [J, Z],
    children: q
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
  }), t))
}