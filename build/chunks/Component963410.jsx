/** Chunk was on 33397 **/
/** chunk id: 963410, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => N
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk377171 = require("./377171.js"),
  Chunk592125 = require("./592125.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk571826 = require("./571826.js"),
  Chunk630759 = require("./630759.js"),
  Chunk539067 = require("./539067.js"),
  Chunk802063 = require("./802063.js"),
  Chunk210975 = require("./210975.js"),
  Chunk301107 = require("./301107.js"),
  Chunk65692 = require("./65692.js"),
  Chunk540247 = require("./540247.js"),
  Chunk785792 = require("./785792.jsx"),
  Chunk190054 = require("./190054.jsx"),
  Chunk760373 = require("./760373.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk547990 = require("./547990.js");

function j(e) {
  let {
    badgeText: t,
    badgeColor: r
  } = e, u = l.useRef(t), i = l.useRef(r);
  return (0, n.jsx)(a.IGR, {
    text: u.current,
    color: i.current
  })
}

function N(e) {
  var t, r;
  let {
    transitionState: N,
    userId: C,
    channelId: I,
    onClose: Z
  } = e, A = (0, u.e7)([o.default], () => o.default.getUser(C)), w = (0, u.e7)([c.Z], () => {
    var e;
    return null == (e = c.Z.getChannel(I)) ? true : e.getGuildId()
  }), P = f.ZP.useName(w, null, A), {
    fingerprint: x,
    userKey: U
  } = (0, b.q)({
    userId: C
  }), k = (0, S.W)({
    fingerprintBase64: x,
    chunkSize: v.iQ,
    desiredLength: v.KN
  }), M = l.useCallback(() => {
    (0, d.s$)({
      userId: C,
      channelId: I
    })
  }, [I, C]), F = (0, p.wV)({
    userId: C,
    channelId: I
  });
  (0, g.i)({
    channelId: I,
    userId: C,
    nickname: P,
    onAlertOpen: Z
  });
  let {
    isCurrentUserKeyPersistent: V,
    isOtherUserKeyPersistent: K,
    loading: D
  } = (0, y.y)({
    userId: C
  }), L = l.useCallback(() => {
    null != U && ((0, E.TQ)(C, U, K, I, R.Sbl.E2EE_USER_VERIFY_MODAL), Z())
  }, [U, C, K, I, Z]), Y = l.useCallback(() => {
    null != U && ((0, E.LO)(C, U, K), Z())
  }, [U, C, K, Z]), [G, z] = l.useMemo(() => F ? [T.intl.string(T.t.UNUuen), s.Z.BG_BRAND] : [T.intl.string(T.t.y2b7CA), s.Z.STATUS_DANGER], [F]), B = l.useMemo(() => (0, E.kK)({
    isCurrentUserKeyPersistent: V,
    isOtherUserKeyPersistent: K,
    otherUserNickname: P
  }), [V, K, P]), J = (0, _.P)({
    userId: C,
    keyToOmit: U
  });
  l.useEffect(() => {
    (0, d.Rq)({
      userId: C,
      channelId: I
    })
  }, [I, C]);
  let W = {
      transitionState: N,
      title: T.intl.string(T.t["/WPGnJ"]),
      subtitle: T.intl.format(T.t.oc2kcX, {
        username: P
      })
    },
    X = (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsxs)("div", {
        className: h.verification,
        children: [J > 0 && (0, n.jsx)(a.Wn, {
          messageType: a.QYI.INFO,
          className: h.helpMessage,
          children: T.intl.format(T.t.uZDkz8, {
            count: J
          })
        }), (0, n.jsxs)("div", {
          className: h.header,
          children: [(0, n.jsx)(a.X6q, {
            variant: "text-sm/bold",
            color: "header-primary",
            children: T.intl.string(T.t["/WPGnJ"])
          }), null != k && (0, n.jsx)(O.H, {
            className: h.copyIcon,
            chunks: k,
            color: a.TVs.colors.INTERACTIVE_NORMAL,
            onCopy: M
          }), (0, n.jsx)("div", {
            className: h.codeStatus,
            children: null == k ? (0, n.jsx)(a.$jN, {
              className: h.spinner,
              type: a.RAz.SPINNING_CIRCLE
            }) : (0, n.jsx)(j, {
              badgeText: G,
              badgeColor: z
            })
          })]
        }), (0, n.jsx)(m.b, {
          className: h.code,
          chunks: k,
          columns: v.ak
        })]
      }), (0, n.jsx)(a.Text, {
        className: h.footer,
        variant: "text-sm/normal",
        color: "text-muted",
        children: B
      })]
    }),
    q = {
      text: F ? T.intl.string(T.t["Osb+/v"]) : T.intl.string(T.t["0tvNAg"]),
      disabled: null == k || D,
      onClick: F ? Y : L
    },
    $ = {
      text: T.intl.string(T.t["ETE/oK"]),
      onClick: Z,
      variant: "secondary"
    };
  return (0, n.jsx)(i.Modal, (t = function(e) {
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
    onClose: Z
  }, W), r = r = {
    actions: [$, q],
    children: X
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