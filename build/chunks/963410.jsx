/** Chunk was on 33397 **/
/** chunk id: 963410, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => C
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk268999 = require("./268999.js");

function w(e) {
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

function P(e, t) {
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

function T(e) {
  let {
    badgeText: t,
    badgeColor: r
  } = e, o = l.useRef(t), c = l.useRef(r);
  return <i.IGR text={o.current} color={c.current} />
}

function C(e) {
  let {
    transitionState: t,
    userId: r,
    channelId: C,
    onClose: I
  } = e, R = a.Z.useExperiment({
    location: "SecureFramesUserVerificationModal"
  }, {
    autoTrackExposure: true
  }).enabled, A = (0, o.e7)([d.default], () => d.default.getUser(r)), Z = (0, o.e7)([u.Z], () => {
    var e;
    return null == (e = u.Z.getChannel(C)) ? true : e.getGuildId()
  }), M = f.ZP.useName(Z, null, A), {
    fingerprint: D,
    userKey: F
  } = (0, g.q)({
    userId: r
  }), U = (0, j.W)({
    fingerprintBase64: D,
    chunkSize: S.iQ,
    desiredLength: S.KN
  }), V = l.useCallback(() => {
    (0, p.s$)({
      userId: r,
      channelId: C
    })
  }, [C, r]), B = (0, h.wV)({
    userId: r,
    channelId: C
  });
  (0, y.i)({
    channelId: C,
    userId: r,
    nickname: M,
    onAlertOpen: I
  });
  let {
    isCurrentUserKeyPersistent: G,
    isOtherUserKeyPersistent: z,
    loading: L
  } = (0, m.y)({
    userId: r
  }), W = l.useCallback(() => {
    null != F && ((0, b.TQ)(r, F, z, C, _.Sbl.E2EE_USER_VERIFY_MODAL), I())
  }, [F, r, z, C, I]), X = l.useCallback(() => {
    null != F && ((0, b.LO)(r, F, z), I())
  }, [F, r, z, I]), [K, q] = l.useMemo(() => B ? [E.intl.string(E.t.UNUuen), s.Z.BG_BRAND] : [E.intl.string(E.t.y2b7CA), s.Z.STATUS_DANGER], [B]), J = l.useMemo(() => (0, b.kK)({
    isCurrentUserKeyPersistent: G,
    isOtherUserKeyPersistent: z,
    otherUserNickname: M
  }), [G, z, M]), Q = (0, O.P)({
    userId: r,
    keyToOmit: F
  });
  l.useEffect(() => {
    (0, p.Rq)({
      userId: r,
      channelId: C
    })
  }, [C, r]);
  let Y = {
      transitionState: t,
      title: E.intl.string(E.t["/WPGnJ"]),
      subtitle: E.intl.format(E.t.oc2kcX, {
        username: M
      })
    },
    H = <n.Fragment>{<div className={k.verification}>{Q > 0 && <i.Wn messageType={i.QYI.INFO} className={k.helpMessage}>{E.intl.format(E.t.uZDkz8, {
            count: Q
          })}</i.Wn>}{<div className={k.header}>{<i.X6q variant={"text-sm/bold"} color={"header-primary"}>{E.intl.string(E.t["/WPGnJ"])}</i.X6q>}{null != U && <v.H className={k.copyIcon} chunks={U} color={i.TVs.colors.INTERACTIVE_NORMAL} onCopy={V} />}{<div className={k.codeStatus}>{null == U ? (0, n.jsx)(i.$jN, {
              className: k.spinner,
              type: i.RAz.SPINNING_CIRCLE
            }) : (0, n.jsx)(T, {
              badgeText: K,
              badgeColor: q
            })}</div>}</div>}{<x.b className={k.code} chunks={U} columns={S.ak} />}</div>}{<i.Text className={k.footer} variant={"text-sm/normal"} color={"text-muted"}>{J}</i.Text>}</n.Fragment>,
    $ = {
      text: B ? E.intl.string(E.t["Osb+/v"]) : E.intl.string(E.t["0tvNAg"]),
      disabled: null == U || L,
      onClick: B ? X : W
    },
    ee = {
      text: E.intl.string(E.t["ETE/oK"]),
      onClick: I,
      variant: "secondary"
    };
  return R ? <c.Modal{...P(w({
    onClose: I
  }, Y), {
    actions: [ee, $],
    children: H
  })} /> : <N.Z{...P(w({}, Y), {
    children: [H, (0, n.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: k.verifiedButton,
      children: (0, n.jsx)(i.zxk, P(w({}, $), {
        fullWidth: true
      }))
    }), (0, n.jsx)(i.zxk, P(w({}, ee), {
      fullWidth: true
    }))]
  })} />
}