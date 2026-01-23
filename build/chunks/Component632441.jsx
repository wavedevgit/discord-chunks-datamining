/** Chunk was on 16674 **/
/** chunk id: 632441, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => j
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
  return (0, n.jsx)(a.LpS, {
    text: u.current,
    color: i.current
  })
}

function j(e) {
  var t, r;
  let {
    transitionState: j,
    userId: h,
    channelId: N,
    onClose: v
  } = e, R = (0, i.bG)([c.default], () => c.default.getUser(h)), w = (0, i.bG)([s.A], () => {
    var e;
    return null == (e = s.A.getChannel(N)) ? true : e.getGuildId()
  }), I = o.Ay.useName(w, null, R), {
    fingerprint: x,
    userKey: U
  } = (0, p.R)({
    userId: h
  }), F = (0, A.z)({
    fingerprintBase64: x,
    chunkSize: 5,
    desiredLength: 45
  }), P = l.useCallback(() => {
    (0, f.Hb)({
      userId: h,
      channelId: N
    })
  }, [N, h]), k = (0, y.UF)({
    userId: h,
    channelId: N
  });
  (0, b.w)({
    channelId: N,
    userId: h,
    nickname: I,
    onAlertOpen: v
  });
  let {
    isCurrentUserKeyPersistent: D,
    isOtherUserKeyPersistent: M,
    loading: V
  } = (0, E.q)({
    userId: h
  }), G = l.useCallback(() => {
    null != U && ((0, d.bk)(h, U, M, N, _.ThZ.E2EE_USER_VERIFY_MODAL), v())
  }, [U, h, M, N, v]), L = l.useCallback(() => {
    null != U && ((0, d.Dh)(h, U, M), v())
  }, [U, h, M, v]), [K, Y] = l.useMemo(() => k ? [S.intl.string(S.t.UNUuem), a.LU0.colors.BACKGROUND_BRAND.css] : [S.intl.string(S.t.y2b7CA), a.LU0.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css], [k]), B = l.useMemo(() => (0, d.Z1)({
    isCurrentUserKeyPersistent: D,
    isOtherUserKeyPersistent: M,
    otherUserNickname: I
  }), [D, M, I]), z = (0, g.H)({
    userId: h,
    keyToOmit: U
  });
  l.useEffect(() => {
    (0, f.HJ)({
      userId: h,
      channelId: N
    })
  }, [N, h]);
  let H = {
      transitionState: j,
      title: S.intl.string(S.t["/WPGnF"]),
      subtitle: S.intl.format(S.t.oc2kce, {
        username: I
      })
    },
    q = (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsxs)("div", {
        className: C.Ot,
        children: [z > 0 && (0, n.jsx)(a.po8, {
          messageType: a.YCn.INFO,
          className: C.Ht,
          children: S.intl.format(S.t.uZDkz0, {
            count: z
          })
        }), (0, n.jsxs)("div", {
          className: C.wx,
          children: [(0, n.jsx)(a.Heading, {
            variant: "text-sm/bold",
            color: "text-strong",
            children: S.intl.string(S.t["/WPGnF"])
          }), null != F && (0, n.jsx)(m.c, {
            className: C.nJ,
            chunks: F,
            color: a.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
            onCopy: P
          }), (0, n.jsx)("div", {
            className: C.ub,
            children: null == F ? (0, n.jsx)(a.y$y, {
              className: C.u1,
              type: a.tVU.SPINNING_CIRCLE
            }) : (0, n.jsx)(T, {
              badgeText: K,
              badgeColor: Y
            })
          })]
        }), (0, n.jsx)(O.j, {
          className: C.aY,
          chunks: F,
          columns: 3
        })]
      }), (0, n.jsx)(a.Text, {
        className: C.qr,
        variant: "text-sm/normal",
        color: "text-muted",
        children: B
      })]
    }),
    Z = {
      text: k ? S.intl.string(S.t["Osb+/n"]) : S.intl.string(S.t["0tvNAn"]),
      disabled: null == F || V,
      onClick: k ? L : G
    },
    J = {
      text: S.intl.string(S.t["ETE/oC"]),
      onClick: v,
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
    onClose: v
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