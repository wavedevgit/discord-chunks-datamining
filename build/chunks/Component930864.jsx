/** Chunk was on 19157 **/
/** chunk id: 930864, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ForwardModal: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk348245 = require("./348245.js"),
  Chunk359110 = require("./359110.js"),
  Chunk987509 = require("./987509.js"),
  Chunk72214 = require("./72214.js"),
  Chunk592125 = require("./592125.js"),
  Chunk375954 = require("./375954.js"),
  Chunk823379 = require("./823379.js"),
  Chunk859155 = require("./859155.js"),
  Chunk822869 = require("./822869.js"),
  Chunk895442 = require("./895442.js"),
  Chunk757853 = require("./757853.jsx"),
  Chunk388275 = require("./388275.jsx"),
  Chunk912332 = require("./912332.jsx"),
  Chunk819727 = require("./819727.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk773921 = require("./773921.js"),
  Chunk621054 = require("./621054.js");

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function x(e) {
  var {
    message: t,
    initialSelectedDestinations: x,
    forwardOptions: P,
    onClose: N,
    onRequestSent: T
  } = e, L = function(e, t) {
    if (null == e) return {};
    var n, l, r = function(e, t) {
      if (null == e) return {};
      var n, l, r = {},
        i = Object.keys(e);
      for (l = 0; l < i.length; l++) n = i[l], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(e, ["message", "initialSelectedDestinations", "forwardOptions", "onClose", "onRequestSent"]);
  let {
    channel_id: j,
    id: Z
  } = t, w = r.useMemo(() => (0, u.dL)(j), [j]), [D, R] = r.useState(false), F = (0, a.e7)([h.Z], () => {
    var e;
    return null != (e = h.Z.getMessage(t.channel_id, t.id)) ? e : t
  }, [t]), k = (0, a.e7)([f.Z], () => f.Z.getChannel(j), [j]), G = (0, m.ZF)(), M = (0, m.mh)(), U = r.useRef(0), H = r.useRef(0), [W, Q] = r.useState(x), V = W.length, z = V >= I.G, [B, q] = r.useState(""), {
    results: K,
    updateSearchText: X
  } = (0, d.s)({
    selectedDestinations: W,
    originDestination: w,
    includeMissingDMs: true
  }), Y = r.useCallback(e => {
    q(e), X(e)
  }, [X]), J = r.useCallback(e => {
    Y(e), H.current += 1, "" !== e && M(j, Z)
  }, [j, Z, M, Y]), $ = r.useCallback(() => {
    Y("")
  }, [Y]), ee = r.useCallback(() => {
    (0, m.sF)({
      channelId: j,
      messageId: Z,
      numDestinationChanges: U.current,
      numQueryChanges: H.current
    }), N()
  }, [j, Z, N]), et = r.useRef(null);
  r.useEffect(() => {
    if ("" === B) {
      var e;
      null == (e = et.current) || e.focus()
    }
  }, [B]);
  let en = r.useMemo(() => (0, i.throttle)(() => {
      (0, s.showToast)((0, s.createToast)(S.intl.string(S.t.kwmYkp), s.ToastType.FORWARD))
    }, 3e3, {
      leading: true,
      trailing: false
    }), []),
    el = r.useCallback(e => {
      G(j, Z, "" !== B), Q(t => {
        let n = t.findIndex(t => {
          let {
            type: n,
            id: l
          } = t;
          return n === e.type && l === e.id
        });
        if (false === n) return z ? t : (Y(""), U.current += 1, [e, ...t]);
        let l = [...t];
        return l.splice(n, 1), U.current += 1, l
      })
    }, [j, z, Z, B, Y, G]),
    er = r.useCallback(async function(e) {
      var r;
      let {
        withMessage: i,
        transitionToDestination: a,
        closeAfterSend: d
      } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, E = null != (r = h.Z.getMessage(j, Z)) ? r : t;
      if (null == E) return void(0, s.showToast)((0, s.createToast)(S.intl.string(S.t.R0RpRU), s.ToastType.FAILURE));
      R(true);
      let b = (await Promise.all(e.map(u.qx))).filter(_.lm);
      if ((0, p.Z)(E, b) && !await new Promise(e => {
          (0, s.ZDy)(async () => {
            let {
              default: t
            } = await n.e("88643").then(n.bind(n, 466080));
            return n => (0, l.jsx)(t, C(v({}, n), {
              onConfirm: () => e(true),
              onBack: () => e(false)
            }))
          })
        })) return void R(false);
      d && (0, y.mc)(), null == T || T(), a && (await o.Z.fetchMessages({
        channelId: b[0]
      }), (0, c.Kh)(b[0], {
        openTextInVoiceIfVoiceChannel: true
      }));
      let I = await g.Z.sendForwards(E, b, C(v({}, P), {
          withMessage: i
        })),
        A = b.some(e => {
          let t = f.Z.getChannel(e);
          return null != t && t.rateLimitPerUser > 0
        });
      if (I.every(e => {
          let {
            status: t
          } = e;
          return "fulfilled" === t
        })) {
        (0, m.gP)({
          channelId: j,
          messageId: Z,
          hasError: false,
          hasContextMessage: null != i && "" !== i,
          numDestinations: b.length,
          numDestinationChanges: U.current,
          numQueryChanges: H.current,
          anyDestinationHasSlowmode: A
        }), en();
        return
      }(0, m.gP)({
        channelId: j,
        messageId: Z,
        hasError: true,
        hasContextMessage: null != i && "" !== i,
        numDestinations: b.length,
        numDestinationChanges: U.current,
        numQueryChanges: H.current,
        anyDestinationHasSlowmode: A
      });
      let O = e.filter((e, t) => "rejected" === I[t].status);
      (0, y.Np)({
        message: E,
        failedDestinations: O,
        forwardOptions: P
      })
    }, [j, P, Z, t, T, en]),
    ei = r.useCallback(e => {
      er(W, {
        withMessage: e,
        transitionToDestination: 1 === W.length,
        closeAfterSend: true
      })
    }, [er, W]);
  if (null == F || null == k) return null;
  let ea = K.length > 0 ? (0, l.jsx)(E.F, {
      paddingBottom: 16,
      paddingTop: 16,
      rowData: K,
      rowMode: E.G.TOGGLE,
      message: F,
      originChannel: k,
      handleToggleDestination: el,
      selectedDestinations: W,
      disableSelection: z
    }) : (0, l.jsxs)(s.hzk, {
      className: A.noResults,
      children: [(0, l.jsx)("img", {
        className: A.noResultsImg,
        src: O,
        alt: ""
      }), (0, l.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: S.intl.string(S.t.V6nAfH)
      })]
    }),
    es = V <= 1 ? S.intl.string(S.t.TXNS7e) : S.intl.formatToPlainString(S.t.jWtYUl, {
      count: V
    });
  return (0, l.jsxs)(s.Y0X, C(v({
    className: A.modal,
    "aria-label": S.intl.string(S.t["+SkRRk"])
  }, L), {
    parentComponent: "ForwardModal",
    children: [(0, l.jsxs)(s.xBx, {
      className: A.header,
      children: [(0, l.jsxs)("div", {
        className: A.titleLine,
        children: [(0, l.jsx)("div", {
          className: A.title,
          children: (0, l.jsx)(s.y5t, {
            component: (0, l.jsx)(s.X6q, {
              variant: "heading-lg/semibold",
              children: S.intl.string(S.t["+SkRRk"])
            }),
            children: z ? (0, l.jsx)(s.Text, {
              variant: "text-sm/normal",
              color: "text-feedback-warning",
              children: S.intl.format(S.t["3Fbkio"], {
                count: I.G
              })
            }) : (0, l.jsx)(s.X6q, {
              variant: "heading-sm/normal",
              color: "header-muted",
              children: S.intl.string(S.t["VA+btL"])
            })
          })
        }), (0, l.jsx)(s.olH, {
          className: A.closeButton,
          onClick: ee
        })]
      }), (0, l.jsx)(s.E1j, {
        ref: et,
        query: B,
        onChange: J,
        onClear: $,
        placeholder: S.intl.string(S.t["5h0QOD"]),
        "aria-label": S.intl.string(S.t["5h0QOD"]),
        autoFocus: true
      })]
    }), ea, (0, l.jsx)(b.n, {
      message: F,
      forwardOptions: P,
      sendLabel: es,
      canSend: V > 0,
      selectedDestinations: W,
      isSending: D,
      onSend: ei
    })]
  }))
}