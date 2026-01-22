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
  } = e, u = l.useRef(t), a = l.useRef(r);
  return (0, n.jsx)(i.LpS, {
    text: u.current,
    color: a.current
  })
}

function j(e) {
  var t, r;
  let {
    transitionState: j,
    userId: N,
    channelId: h,
    onClose: R
  } = e, v = (0, a.bG)([s.default], () => s.default.getUser(N)), w = (0, a.bG)([c.A], () => {
    var e;
    return null == (e = c.A.getChannel(h)) ? true : e.getGuildId()
  }), I = o.Ay.useName(w, null, v), {
    fingerprint: x,
    userKey: U
  } = (0, p.R)({
    userId: N
  }), F = (0, A.z)({
    fingerprintBase64: x,
    chunkSize: 5,
    desiredLength: 45
  }), P = l.useCallback(() => {
    (0, f.Hb)({
      userId: N,
      channelId: h
    })
  }, [h, N]), k = (0, y.UF)({
    userId: N,
    channelId: h
  });
  (0, E.w)({
    channelId: h,
    userId: N,
    nickname: I,
    onAlertOpen: R
  });
  let {
    isCurrentUserKeyPersistent: D,
    isOtherUserKeyPersistent: M,
    loading: V
  } = (0, b.q)({
    userId: N
  }), G = l.useCallback(() => {
    null != U && ((0, d.bk)(N, U, M, h, S.ThZ.E2EE_USER_VERIFY_MODAL), R())
  }, [U, N, M, h, R]), L = l.useCallback(() => {
    null != U && ((0, d.Dh)(N, U, M), R())
  }, [U, N, M, R]), [K, Y] = l.useMemo(() => k ? [_.intl.string(_.t.UNUuem), i.LU0.colors.BACKGROUND_BRAND.css] : [_.intl.string(_.t.y2b7CA), i.LU0.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css], [k]), B = l.useMemo(() => (0, d.Z1)({
    isCurrentUserKeyPersistent: D,
    isOtherUserKeyPersistent: M,
    otherUserNickname: I
  }), [D, M, I]), z = (0, g.H)({
    userId: N,
    keyToOmit: U
  });
  l.useEffect(() => {
    (0, f.HJ)({
      userId: N,
      channelId: h
    })
  }, [h, N]);
  let H = {
      transitionState: j,
      title: _.intl.string(_.t["/WPGnF"]),
      subtitle: _.intl.format(_.t.oc2kce, {
        username: I
      })
    },
    q = (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsxs)("div", {
        className: C.Ot,
        children: [z > 0 && (0, n.jsx)(i.po8, {
          messageType: i.YCn.INFO,
          className: C.Ht,
          children: _.intl.format(_.t.uZDkz0, {
            count: z
          })
        }), (0, n.jsxs)("div", {
          className: C.wx,
          children: [(0, n.jsx)(i.Heading, {
            variant: "text-sm/bold",
            color: "text-strong",
            children: _.intl.string(_.t["/WPGnF"])
          }), null != F && (0, n.jsx)(m.c, {
            className: C.nJ,
            chunks: F,
            color: i.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
            onCopy: P
          }), (0, n.jsx)("div", {
            className: C.ub,
            children: null == F ? (0, n.jsx)(i.y$y, {
              className: C.u1,
              type: i.tVU.SPINNING_CIRCLE
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
      }), (0, n.jsx)(i.Text, {
        className: C.qr,
        variant: "text-sm/normal",
        color: "text-muted",
        children: B
      })]
    }),
    Z = {
      text: k ? _.intl.string(_.t["Osb+/n"]) : _.intl.string(_.t["0tvNAn"]),
      disabled: null == F || V,
      onClick: k ? L : G
    },
    J = {
      text: _.intl.string(_.t["ETE/oC"]),
      onClick: R,
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
    onClose: R
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