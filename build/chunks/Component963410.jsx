/** Chunk was on 33397 **/
/** chunk id: 963410, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => v
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
  Chunk547990 = require("./547990.js");

function h(e) {
  let {
    badgeText: t,
    badgeColor: r
  } = e, u = l.useRef(t), i = l.useRef(r);
  return (0, n.jsx)(c.IGR, {
    text: u.current,
    color: i.current
  })
}

function v(e) {
  var t, r;
  let {
    transitionState: v,
    userId: C,
    channelId: R,
    onClose: Z
  } = e, I = (0, i.e7)([s.default], () => s.default.getUser(C)), A = (0, i.e7)([o.Z], () => {
    var e;
    return null == (e = o.Z.getChannel(R)) ? true : e.getGuildId()
  }), w = a.ZP.useName(A, null, I), {
    fingerprint: x,
    userKey: P
  } = (0, b.q)({
    userId: C
  }), U = (0, p.W)({
    fingerprintBase64: x,
    chunkSize: _.iQ,
    desiredLength: _.KN
  }), k = l.useCallback(() => {
    (0, f.s$)({
      userId: C,
      channelId: R
    })
  }, [R, C]), F = (0, y.wV)({
    userId: C,
    channelId: R
  });
  (0, g.i)({
    channelId: R,
    userId: C,
    nickname: w,
    onAlertOpen: Z
  });
  let {
    isCurrentUserKeyPersistent: M,
    isOtherUserKeyPersistent: V,
    loading: D
  } = (0, E.y)({
    userId: C
  }), K = l.useCallback(() => {
    null != P && ((0, d.TQ)(C, P, V, R, T.Sbl.E2EE_USER_VERIFY_MODAL), Z())
  }, [P, C, V, R, Z]), L = l.useCallback(() => {
    null != P && ((0, d.LO)(C, P, V), Z())
  }, [P, C, V, Z]), [G, Y] = l.useMemo(() => F ? [j.intl.string(j.t.UNUuem), c.TVs.colors.BACKGROUND_BRAND.css] : [j.intl.string(j.t.y2b7CA), c.TVs.colors.STATUS_DANGER.css], [F]), B = l.useMemo(() => (0, d.kK)({
    isCurrentUserKeyPersistent: M,
    isOtherUserKeyPersistent: V,
    otherUserNickname: w
  }), [M, V, w]), z = (0, m.P)({
    userId: C,
    keyToOmit: P
  });
  l.useEffect(() => {
    (0, f.Rq)({
      userId: C,
      channelId: R
    })
  }, [R, C]);
  let J = {
      transitionState: v,
      title: j.intl.string(j.t["/WPGnF"]),
      subtitle: j.intl.format(j.t.oc2kce, {
        username: w
      })
    },
    W = (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsxs)("div", {
        className: N.verification,
        children: [z > 0 && (0, n.jsx)(c.Wn, {
          messageType: c.QYI.INFO,
          className: N.helpMessage,
          children: j.intl.format(j.t.uZDkz0, {
            count: z
          })
        }), (0, n.jsxs)("div", {
          className: N.header,
          children: [(0, n.jsx)(c.Heading, {
            variant: "text-sm/bold",
            color: "text-strong",
            children: j.intl.string(j.t["/WPGnF"])
          }), null != U && (0, n.jsx)(S.H, {
            className: N.copyIcon,
            chunks: U,
            color: c.TVs.colors.INTERACTIVE_TEXT_DEFAULT,
            onCopy: k
          }), (0, n.jsx)("div", {
            className: N.codeStatus,
            children: null == U ? (0, n.jsx)(c.$jN, {
              className: N.spinner,
              type: c.RAz.SPINNING_CIRCLE
            }) : (0, n.jsx)(h, {
              badgeText: G,
              badgeColor: Y
            })
          })]
        }), (0, n.jsx)(O.b, {
          className: N.code,
          chunks: U,
          columns: _.ak
        })]
      }), (0, n.jsx)(c.Text, {
        className: N.footer,
        variant: "text-sm/normal",
        color: "text-muted",
        children: B
      })]
    }),
    X = {
      text: F ? j.intl.string(j.t["Osb+/n"]) : j.intl.string(j.t["0tvNAn"]),
      disabled: null == U || D,
      onClick: F ? L : K
    },
    q = {
      text: j.intl.string(j.t["ETE/oC"]),
      onClick: Z,
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
    onClose: Z
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