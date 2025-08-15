/** Chunk was on 33397 **/
/** chunk id: 963410, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => Z
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk377171 = require("./377171.js"),
  Chunk724723 = require("./724723.js"),
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
  Chunk245581 = require("./245581.jsx"),
  Chunk760373 = require("./760373.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk547990 = require("./547990.js");

function C(e) {
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
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function x(e) {
  let {
    badgeText: t,
    badgeColor: r
  } = e, i = l.useRef(t), u = l.useRef(r);
  return (0, n.jsx)(a.IGR, {
    text: i.current,
    color: u.current
  })
}

function Z(e) {
  let {
    transitionState: t,
    userId: r,
    channelId: Z,
    onClose: A
  } = e, w = o.Z.useExperiment({
    location: "SecureFramesUserVerificationModal"
  }, {
    autoTrackExposure: true
  }).enabled, P = (0, i.e7)([d.default], () => d.default.getUser(r)), k = (0, i.e7)([c.Z], () => {
    var e;
    return null == (e = c.Z.getChannel(Z)) ? true : e.getGuildId()
  }), U = f.ZP.useName(k, null, P), {
    fingerprint: M,
    userKey: F
  } = (0, S.q)({
    userId: r
  }), V = (0, b.W)({
    fingerprintBase64: M,
    chunkSize: j.iQ,
    desiredLength: j.KN
  }), D = l.useCallback(() => {
    (0, E.s$)({
      userId: r,
      channelId: Z
    })
  }, [Z, r]), K = (0, m.wV)({
    userId: r,
    channelId: Z
  });
  (0, p.i)({
    channelId: Z,
    userId: r,
    nickname: U,
    onAlertOpen: A
  });
  let {
    isCurrentUserKeyPersistent: L,
    isOtherUserKeyPersistent: Y,
    loading: z
  } = (0, g.y)({
    userId: r
  }), B = l.useCallback(() => {
    null != F && ((0, y.TQ)(r, F, Y, Z, N.Sbl.E2EE_USER_VERIFY_MODAL), A())
  }, [F, r, Y, Z, A]), G = l.useCallback(() => {
    null != F && ((0, y.LO)(r, F, Y), A())
  }, [F, r, Y, A]), [J, W] = l.useMemo(() => K ? [R.intl.string(R.t.UNUuen), s.Z.BG_BRAND] : [R.intl.string(R.t.y2b7CA), s.Z.STATUS_DANGER], [K]), X = l.useMemo(() => (0, y.kK)({
    isCurrentUserKeyPersistent: L,
    isOtherUserKeyPersistent: Y,
    otherUserNickname: U
  }), [L, Y, U]), q = (0, _.P)({
    userId: r,
    keyToOmit: F
  });
  l.useEffect(() => {
    (0, E.Rq)({
      userId: r,
      channelId: Z
    })
  }, [Z, r]);
  let H = {
      transitionState: t,
      title: R.intl.string(R.t["/WPGnJ"]),
      subtitle: R.intl.format(R.t.oc2kcX, {
        username: U
      })
    },
    Q = (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsxs)("div", {
        className: T.verification,
        children: [q > 0 && (0, n.jsx)(a.Wn, {
          messageType: a.QYI.INFO,
          className: T.helpMessage,
          children: R.intl.format(R.t.uZDkz8, {
            count: q
          })
        }), (0, n.jsxs)("div", {
          className: T.header,
          children: [(0, n.jsx)(a.X6q, {
            variant: "text-sm/bold",
            color: "header-primary",
            children: R.intl.string(R.t["/WPGnJ"])
          }), null != V && (0, n.jsx)(O.H, {
            className: T.copyIcon,
            chunks: V,
            color: a.TVs.colors.INTERACTIVE_NORMAL,
            onCopy: D
          }), (0, n.jsx)("div", {
            className: T.codeStatus,
            children: null == V ? (0, n.jsx)(a.$jN, {
              className: T.spinner,
              type: a.RAz.SPINNING_CIRCLE
            }) : (0, n.jsx)(x, {
              badgeText: J,
              badgeColor: W
            })
          })]
        }), (0, n.jsx)(h.b, {
          className: T.code,
          chunks: V,
          columns: j.ak
        })]
      }), (0, n.jsx)(a.Text, {
        className: T.footer,
        variant: "text-sm/normal",
        color: "text-muted",
        children: X
      })]
    }),
    $ = {
      text: K ? R.intl.string(R.t["Osb+/v"]) : R.intl.string(R.t["0tvNAg"]),
      disabled: null == V || z,
      onClick: K ? G : B
    },
    ee = {
      text: R.intl.string(R.t["ETE/oK"]),
      onClick: A,
      variant: "secondary"
    };
  return w ? (0, n.jsx)(u.Modal, I(C({
    onClose: A
  }, H), {
    actions: [ee, $],
    children: Q
  })) : (0, n.jsxs)(v.Z, I(C({}, H), {
    children: [Q, (0, n.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: T.verifiedButton,
      children: (0, n.jsx)(a.zxk, I(C({}, $), {
        fullWidth: true
      }))
    }), (0, n.jsx)(a.zxk, I(C({}, ee), {
      fullWidth: true
    }))]
  }))
}