/** Chunk was on 9797 **/
/** chunk id: 930864, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ForwardModal: () => R
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

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function R(e) {
  var {
    message: t,
    initialSelectedDestinations: R,
    forwardOptions: S,
    onClose: k,
    onRequestSent: I
  } = e, Z = function(e, t) {
    if (null == e) return {};
    var n, a, l = function(e, t) {
      if (null == e) return {};
      var n, a, l = {},
        r = Object.keys(e);
      for (a = 0; a < r.length; a++) n = r[a], t.indexOf(n) >= 0 || (l[n] = e[n]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      for (a = 0; a < r.length; a++) n = r[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
    }
    return l
  }(e, ["message", "initialSelectedDestinations", "forwardOptions", "onClose", "onRequestSent"]);
  let {
    channel_id: M,
    id: N
  } = t, T = l.useMemo(() => (0, u.dL)(M), [M]), [D, W] = l.useState(false), E = (0, s.e7)([m.Z], () => {
    var e;
    return null != (e = m.Z.getMessage(t.channel_id, t.id)) ? e : t
  }, [t]), F = (0, s.e7)([h.Z], () => h.Z.getChannel(M), [M]), L = (0, _.ZF)(), A = (0, _.mh)(), G = l.useRef(0), B = l.useRef(0), [U, V] = l.useState(R), q = U.length, K = q >= x.G, [X, z] = l.useState(""), {
    results: H,
    updateSearchText: Y
  } = (0, d.s)({
    selectedDestinations: U,
    originDestination: T,
    includeMissingDMs: true
  }), Q = l.useCallback(e => {
    z(e), Y(e)
  }, [Y]), J = l.useCallback(e => {
    Q(e), B.current += 1, "" !== e && A(M, N)
  }, [M, N, A, Q]), $ = l.useCallback(() => {
    Q("")
  }, [Q]), ee = l.useCallback(() => {
    (0, _.sF)({
      channelId: M,
      messageId: N,
      numDestinationChanges: G.current,
      numQueryChanges: B.current
    }), k()
  }, [M, N, k]), et = l.useRef(null);
  l.useEffect(() => {
    if ("" === X) {
      var e;
      null == (e = et.current) || e.focus()
    }
  }, [X]);
  let en = l.useMemo(() => (0, r.throttle)(() => {
      (0, i.showToast)((0, i.createToast)(j.intl.string(j.t.kwmYkp), i.ToastType.FORWARD))
    }, 3e3, {
      leading: true,
      trailing: false
    }), []),
    ea = l.useCallback(e => {
      L(M, N, "" !== X), V(t => {
        let n = t.findIndex(t => {
          let {
            type: n,
            id: a
          } = t;
          return n === e.type && a === e.id
        });
        if (false === n) return K ? t : (Q(""), G.current += 1, [e, ...t]);
        let a = [...t];
        return a.splice(n, 1), G.current += 1, a
      })
    }, [M, K, N, X, Q, L]),
    el = l.useCallback(async function(e) {
      var l;
      let {
        withMessage: r,
        transitionToDestination: s,
        closeAfterSend: d
      } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, w = null != (l = m.Z.getMessage(M, N)) ? l : t;
      if (null == w) return void(0, i.showToast)((0, i.createToast)(j.intl.string(j.t.R0RpRU), i.ToastType.FAILURE));
      W(true);
      let b = (await Promise.all(e.map(u.qx))).filter(g.lm);
      if ((0, p.Z)(w, b) && !await new Promise(e => {
          (0, i.ZDy)(async () => {
            let {
              default: t
            } = await n.e("88643").then(n.bind(n, 466080));
            return n => (0, a.jsx)(t, O(C({}, n), {
              onConfirm: () => e(true),
              onBack: () => e(false)
            }))
          })
        })) return void W(false);
      d && (0, v.mc)(), null == I || I(), s && (await o.Z.fetchMessages({
        channelId: b[0]
      }), (0, c.Kh)(b[0], {
        openTextInVoiceIfVoiceChannel: true
      }));
      let x = await f.Z.sendForwards(w, b, O(C({}, S), {
          withMessage: r
        })),
        y = b.some(e => {
          let t = h.Z.getChannel(e);
          return null != t && t.rateLimitPerUser > 0
        });
      if (x.every(e => {
          let {
            status: t
          } = e;
          return "fulfilled" === t
        })) {
        (0, _.gP)({
          channelId: M,
          messageId: N,
          hasError: false,
          hasContextMessage: null != r && "" !== r,
          numDestinations: b.length,
          numDestinationChanges: G.current,
          numQueryChanges: B.current,
          anyDestinationHasSlowmode: y
        }), en();
        return
      }(0, _.gP)({
        channelId: M,
        messageId: N,
        hasError: true,
        hasContextMessage: null != r && "" !== r,
        numDestinations: b.length,
        numDestinationChanges: G.current,
        numQueryChanges: B.current,
        anyDestinationHasSlowmode: y
      });
      let P = e.filter((e, t) => "rejected" === x[t].status);
      (0, v.Np)({
        message: w,
        failedDestinations: P,
        forwardOptions: S
      })
    }, [M, S, N, t, I, en]),
    er = l.useCallback(e => {
      el(U, {
        withMessage: e,
        transitionToDestination: 1 === U.length,
        closeAfterSend: true
      })
    }, [el, U]);
  if (null == E || null == F) return null;
  let es = H.length > 0 ? (0, a.jsx)(w.F, {
      paddingBottom: 16,
      paddingTop: 16,
      rowData: H,
      rowMode: w.G.TOGGLE,
      message: E,
      originChannel: F,
      handleToggleDestination: ea,
      selectedDestinations: U,
      disableSelection: K
    }) : (0, a.jsxs)(i.hzk, {
      className: y.noResults,
      children: [(0, a.jsx)("img", {
        className: y.noResultsImg,
        src: P,
        alt: ""
      }), (0, a.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: j.intl.string(j.t.V6nAfH)
      })]
    }),
    ei = q <= 1 ? j.intl.string(j.t.TXNS7e) : j.intl.formatToPlainString(j.t.jWtYUl, {
      count: q
    });
  return (0, a.jsxs)(i.Y0X, O(C({
    className: y.modal,
    "aria-label": j.intl.string(j.t["+SkRRk"])
  }, Z), {
    parentComponent: "ForwardModal",
    children: [(0, a.jsxs)(i.xBx, {
      className: y.header,
      children: [(0, a.jsxs)("div", {
        className: y.titleLine,
        children: [(0, a.jsx)("div", {
          className: y.title,
          children: (0, a.jsx)(i.y5t, {
            component: (0, a.jsx)(i.X6q, {
              variant: "heading-lg/semibold",
              children: j.intl.string(j.t["+SkRRk"])
            }),
            children: K ? (0, a.jsx)(i.Text, {
              variant: "text-sm/normal",
              color: "text-feedback-warning",
              children: j.intl.format(j.t["3Fbkio"], {
                count: x.G
              })
            }) : (0, a.jsx)(i.X6q, {
              variant: "heading-sm/normal",
              color: "header-muted",
              children: j.intl.string(j.t["VA+btL"])
            })
          })
        }), (0, a.jsx)(i.olH, {
          className: y.closeButton,
          onClick: ee
        })]
      }), (0, a.jsx)(i.E1j, {
        ref: et,
        query: X,
        onChange: J,
        onClear: $,
        placeholder: j.intl.string(j.t["5h0QOD"]),
        "aria-label": j.intl.string(j.t["5h0QOD"]),
        autoFocus: true
      })]
    }), es, (0, a.jsx)(b.n, {
      message: E,
      forwardOptions: S,
      sendLabel: ei,
      canSend: q > 0,
      selectedDestinations: U,
      isSending: D,
      onSend: er
    })]
  }))
}