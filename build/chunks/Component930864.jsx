/** Chunk was on 9797 **/
/** chunk id: 930864, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ForwardModal: () => A
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk430742 = require("./430742.js"),
  Chunk752305 = require("./752305.js"),
  Chunk348245 = require("./348245.js"),
  Chunk849522 = require("./849522.js"),
  Chunk359110 = require("./359110.js"),
  Chunk987509 = require("./987509.js"),
  Chunk72214 = require("./72214.js"),
  Chunk592125 = require("./592125.js"),
  Chunk703558 = require("./703558.js"),
  Chunk375954 = require("./375954.js"),
  Chunk823379 = require("./823379.js"),
  Chunk859155 = require("./859155.js"),
  Chunk784384 = require("./784384.js"),
  Chunk822869 = require("./822869.js"),
  Chunk895442 = require("./895442.js"),
  Chunk388275 = require("./388275.jsx"),
  Chunk912332 = require("./912332.jsx"),
  Chunk646746 = require("./646746.jsx"),
  Chunk217031 = require("./217031.jsx"),
  Chunk819727 = require("./819727.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk773921 = require("./773921.js");

function M(e) {
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

function D(e, t) {
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

function R() {
  return (0, Chunk951288.jsx)("div", {
    className: Chunk773921.noResults,
    children: (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: Chunk388032.intl.string(Chunk388032.t.V6nAfF)
    })
  })
}

function A(e) {
  var {
    message: t,
    initialSelectedDestinations: A,
    forwardOptions: Z,
    onClose: N,
    onRequestSent: k
  } = e, F = function(e, t) {
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
    channel_id: L,
    id: U
  } = t, G = l.useMemo(() => (0, g.dL)(L), [L]), [V, W] = l.useState(false), K = (0, s.e7)([p.Z], () => {
    var e;
    return null != (e = p.Z.getMessage(t.channel_id, t.id)) ? e : t
  }, [t]), B = (0, s.e7)([_.Z], () => _.Z.getChannel(L), [L]), Y = (0, y.ZF)(), H = (0, y.mh)(), z = l.useRef(0), Q = l.useRef(0), [X, q] = l.useState(A), J = X.length, $ = J >= E.G, ee = (0, x.nm)(X), et = (0, s.e7)([w.Z], () => w.Z.getDraft(K.channel_id, w.d.ForwardContextMessage)), [en, ea] = l.useState(() => (0, u.eK)(et)), el = (0, x.y)(X), er = (0, h.Z)(), [ei, es] = l.useState(""), {
    results: eo,
    updateSearchText: ec
  } = (0, f.s)({
    selectedDestinations: X,
    originDestination: G,
    includeMissingDMs: true
  }), eu = l.useCallback(e => {
    es(e), ec(e)
  }, [ec]), ed = l.useCallback(e => {
    eu(e), Q.current += 1, "" !== e && H(L, U)
  }, [L, U, H, eu]), eh = l.useCallback(() => {
    eu("")
  }, [eu]), em = l.useCallback(async () => {
    (0, y.sF)({
      channelId: L,
      messageId: U,
      numDestinationChanges: z.current,
      numQueryChanges: Q.current
    }), await N()
  }, [L, U, N]), eg = l.useRef(null);
  l.useEffect(() => {
    if ("" === ei) {
      var e;
      null == (e = eg.current) || e.focus()
    }
  }, [ei]);
  let ef = l.useMemo(() => (0, r.throttle)(() => {
      (0, o.showToast)((0, o.createToast)(T.intl.string(T.t.kwmYkt), o.ToastType.FORWARD))
    }, 3e3, {
      leading: true,
      trailing: false
    }), []),
    e_ = l.useCallback(e => {
      Y(L, U, "" !== ei), q(t => {
        let n = t.findIndex(t => {
          let {
            type: n,
            id: a
          } = t;
          return n === e.type && a === e.id
        });
        if (false === n) return $ ? t : (eu(""), z.current += 1, [e, ...t]);
        let a = [...t];
        return a.splice(n, 1), z.current += 1, a
      })
    }, [L, $, U, ei, eu, Y]),
    ew = l.useCallback(async function(e) {
      var l;
      let {
        withMessage: r,
        transitionToDestination: i,
        closeAfterSend: s
      } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, c = null != (l = p.Z.getMessage(L, U)) ? l : t;
      if (null == c) return void(0, o.showToast)((0, o.createToast)(T.intl.string(T.t.R0RpRX), o.ToastType.FAILURE));
      W(true);
      let u = (await Promise.all(e.map(g.qx))).filter(b.lm);
      if ((0, C.Z)(c, u) && !await new Promise(e => {
          (0, o.ZDy)(async () => {
            let {
              default: t
            } = await n.e("88643").then(n.bind(n, 466080));
            return n => (0, a.jsx)(t, D(M({}, n), {
              onConfirm: () => e(true),
              onBack: () => e(false)
            }))
          })
        })) return void W(false);
      s && (0, P.mc)(), null == k || k(), i && (await d.Z.fetchMessages({
        channelId: u[0]
      }), (0, m.Kh)(u[0], {
        openTextInVoiceIfVoiceChannel: true
      }));
      let h = await v.Z.sendForwards(c, u, D(M({}, Z), {
          withMessage: r
        })),
        f = u.some(e => {
          let t = _.Z.getChannel(e);
          return null != t && t.rateLimitPerUser > 0
        });
      if (h.every(e => {
          let {
            status: t
          } = e;
          return "fulfilled" === t
        })) {
        (0, y.gP)({
          channelId: L,
          messageId: U,
          hasError: false,
          hasContextMessage: null != r && "" !== r,
          numDestinations: u.length,
          numDestinationChanges: z.current,
          numQueryChanges: Q.current,
          anyDestinationHasSlowmode: f
        }), ef();
        return
      }(0, y.gP)({
        channelId: L,
        messageId: U,
        hasError: true,
        hasContextMessage: null != r && "" !== r,
        numDestinations: u.length,
        numDestinationChanges: z.current,
        numQueryChanges: Q.current,
        anyDestinationHasSlowmode: f
      });
      let w = e.filter((e, t) => "rejected" === h[t].status);
      (0, P.Np)({
        message: c,
        failedDestinations: w,
        forwardOptions: Z
      })
    }, [L, Z, U, t, k, ef]),
    ep = l.useCallback(e => {
      ew(X, {
        withMessage: e,
        transitionToDestination: 1 === X.length,
        closeAfterSend: true
      })
    }, [ew, X]),
    eb = l.useCallback(() => {
      c.Z.clearDraft(K.channel_id, w.d.ForwardContextMessage), ep(en.textValue)
    }, [K.channel_id, en.textValue, ep]),
    ev = (0, j.Y)({
      rowData: eo,
      message: K,
      originChannel: B,
      selectedDestinations: X,
      handleToggleDestination: e_,
      disableSelection: $
    }),
    ex = l.useMemo(() => eo.length > 0 ? ev : {
      sections: [1],
      sectionHeight: 0,
      renderRow: () => (0, a.jsx)(R, {}),
      rowHeight: 72
    }, [eo, ev]);
  if (null == K || null == B) return null;
  let ey = J <= 1 ? T.intl.string(T.t.TXNS7S) : T.intl.formatToPlainString(T.t.jWtYUm, {
    count: J
  });
  return (0, a.jsx)(i.Modal, D(M({}, F), {
    onClose: em,
    title: T.intl.string(T.t["+SkRRj"]),
    subtitle: $ ? T.intl.formatToPlainString(T.t["3Fbkir"], {
      count: E.G
    }) : T.intl.string(T.t["VA+btJ"]),
    input: (0, a.jsx)(o.E1j, {
      ref: eg,
      query: ei,
      onChange: ed,
      onClear: eh,
      placeholder: T.intl.string(T.t["5h0QOP"]),
      "aria-label": T.intl.string(T.t["5h0QOP"]),
      autoFocus: true
    }),
    preview: (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(S.O, {
        message: K,
        forwardOptions: Z,
        channel: ee
      }), el.length > 0 && en.textValue.length > 0 && (0, a.jsx)(o.Text, {
        className: I.slowmodeWarning,
        variant: "text-sm/normal",
        color: "text-feedback-warning",
        children: T.intl.format(T.t.xJFpij, {
          count: el.length,
          channelNames: el.join(", ")
        })
      })]
    }),
    actionBarInput: (0, a.jsx)(O._, {
      message: K,
      canSend: J > 0,
      selectedDestinations: X,
      isSending: V,
      onSend: ep,
      inputValue: en,
      setInputValue: ea
    }),
    actions: [{
      variant: "primary",
      text: ey,
      onClick: eb,
      disabled: J <= 0 || en.textValue.length > er,
      loading: V,
      icon: o.Uuj,
      iconPosition: "end"
    }],
    listProps: ex
  }))
}