/** Chunk was on 33397 **/
/** chunk id: 963410, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
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
  Chunk979519 = require("./979519.js");

function _(e) {
  let {
    badgeText: t,
    badgeColor: r
  } = e, u = l.useRef(t), i = l.useRef(r);
  return (0, n.jsx)(c.IGR, {
    text: u.current,
    color: i.current
  })
}

function h(e) {
  var t, r;
  let {
    transitionState: h,
    userId: v,
    channelId: I,
    onClose: R
  } = e, Z = (0, i.e7)([s.default], () => s.default.getUser(v)), A = (0, i.e7)([o.Z], () => {
    var e;
    return null == (e = o.Z.getChannel(I)) ? true : e.getGuildId()
  }), w = a.ZP.useName(A, null, Z), {
    fingerprint: x,
    userKey: P
  } = (0, b.q)({
    userId: v
  }), F = (0, p.W)({
    fingerprintBase64: x,
    chunkSize: T.iQ,
    desiredLength: T.KN
  }), U = l.useCallback(() => {
    (0, f.s$)({
      userId: v,
      channelId: I
    })
  }, [I, v]), k = (0, y.wV)({
    userId: v,
    channelId: I
  });
  (0, g.i)({
    channelId: I,
    userId: v,
    nickname: w,
    onAlertOpen: R
  });
  let {
    isCurrentUserKeyPersistent: M,
    isOtherUserKeyPersistent: D,
    loading: V
  } = (0, E.y)({
    userId: v
  }), K = l.useCallback(() => {
    null != P && ((0, d.TQ)(v, P, D, I, N.Sbl.E2EE_USER_VERIFY_MODAL), R())
  }, [P, v, D, I, R]), L = l.useCallback(() => {
    null != P && ((0, d.LO)(v, P, D), R())
  }, [P, v, D, R]), [B, G] = l.useMemo(() => k ? [j.intl.string(j.t.UNUuem), c.TVs.colors.BACKGROUND_BRAND.css] : [j.intl.string(j.t.y2b7CA), c.TVs.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css], [k]), Y = l.useMemo(() => (0, d.kK)({
    isCurrentUserKeyPersistent: M,
    isOtherUserKeyPersistent: D,
    otherUserNickname: w
  }), [M, D, w]), z = (0, m.P)({
    userId: v,
    keyToOmit: P
  });
  l.useEffect(() => {
    (0, f.Rq)({
      userId: v,
      channelId: I
    })
  }, [I, v]);
  let J = {
      transitionState: h,
      title: j.intl.string(j.t["/WPGnF"]),
      subtitle: j.intl.format(j.t.oc2kce, {
        username: w
      })
    },
    W = (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsxs)("div", {
        className: C.verification,
        children: [z > 0 && (0, n.jsx)(c.Wn, {
          messageType: c.QYI.INFO,
          className: C.helpMessage,
          children: j.intl.format(j.t.uZDkz0, {
            count: z
          })
        }), (0, n.jsxs)("div", {
          className: C.header,
          children: [(0, n.jsx)(c.Heading, {
            variant: "text-sm/bold",
            color: "text-strong",
            children: j.intl.string(j.t["/WPGnF"])
          }), null != F && (0, n.jsx)(S.H, {
            className: C.copyIcon,
            chunks: F,
            color: c.TVs.colors.INTERACTIVE_TEXT_DEFAULT,
            onCopy: U
          }), (0, n.jsx)("div", {
            className: C.codeStatus,
            children: null == F ? (0, n.jsx)(c.$jN, {
              className: C.spinner,
              type: c.RAz.SPINNING_CIRCLE
            }) : (0, n.jsx)(_, {
              badgeText: B,
              badgeColor: G
            })
          })]
        }), (0, n.jsx)(O.b, {
          className: C.code,
          chunks: F,
          columns: T.ak
        })]
      }), (0, n.jsx)(c.Text, {
        className: C.footer,
        variant: "text-sm/normal",
        color: "text-muted",
        children: Y
      })]
    }),
    X = {
      text: k ? j.intl.string(j.t["Osb+/n"]) : j.intl.string(j.t["0tvNAn"]),
      disabled: null == F || V,
      onClick: k ? L : K
    },
    q = {
      text: j.intl.string(j.t["ETE/oC"]),
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
  }, J), r = r = {
    actions: [q, X],
    children: W
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