/** Chunk was on 33648 **/
/** chunk id: 930864, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ForwardModal: () => I
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function R(e, t) {
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

function A() {
  return (0, Chunk54381.jsx)("div", {
    className: Chunk773921.noResults,
    children: (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: Chunk388032.intl.string(Chunk388032.t.V6nAfF)
    })
  })
}

function I(e) {
  var {
    message: t,
    initialSelectedDestinations: I = [],
    forwardOptions: Z,
    onClose: N,
    onRequestSent: F,
    customTitle: k,
    customSubtitle: U,
    customPreview: L,
    customSendHandler: G,
    customValidateDestination: V
  } = e, B = function(e, t) {
    if (null == e) return {};
    var n, l, a = function(e, t) {
      if (null == e) return {};
      var n, l, a = {},
        r = Object.keys(e);
      for (l = 0; l < r.length; l++) n = r[l], t.indexOf(n) >= 0 || (a[n] = e[n]);
      return a
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      for (l = 0; l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
    }
    return a
  }(e, ["message", "initialSelectedDestinations", "forwardOptions", "onClose", "onRequestSent", "customTitle", "customSubtitle", "customPreview", "customSendHandler", "customValidateDestination"]);
  let K = null == t ? true : t.channel_id,
    W = null == t ? true : t.id,
    Y = a.useMemo(() => null != K ? (0, g.dL)(K) : true, [K]),
    [H, X] = a.useState(false),
    z = (0, s.e7)([w.Z], () => {
      var e;
      return null != t ? null != (e = w.Z.getMessage(t.channel_id, t.id)) ? e : t : true
    }, [t]),
    Q = (0, s.e7)([p.Z], () => null != K ? p.Z.getChannel(K) : true, [K]),
    q = (0, C.ZF)(),
    J = (0, C.mh)(),
    $ = a.useRef(0),
    ee = a.useRef(0),
    [et, en] = a.useState(I),
    el = et.length,
    ea = el >= E.G,
    er = (0, y.nm)(et),
    ei = (0, s.e7)([v.Z], () => null != z ? v.Z.getDraft(z.channel_id, v.d.ForwardContextMessage) : ""),
    [es, eo] = a.useState(() => (0, c.eK)(ei)),
    eu = (0, y.y)(et),
    ec = (0, h.Z)(),
    [ed, eh] = a.useState(""),
    {
      results: em,
      updateSearchText: eg
    } = (0, f.s)({
      selectedDestinations: et,
      originDestination: Y,
      includeMissingDMs: true
    }),
    ef = a.useCallback(e => {
      eh(e), eg(e)
    }, [eg]),
    ep = a.useCallback(e => {
      ef(e), ee.current += 1, "" !== e && null != K && null != W && J(K, W)
    }, [K, W, J, ef]),
    ev = a.useCallback(() => {
      ef("")
    }, [ef]),
    ew = a.useCallback(async () => {
      null != K && null != W && (0, C.sF)({
        channelId: K,
        messageId: W,
        numDestinationChanges: $.current,
        numQueryChanges: ee.current
      }), await N()
    }, [K, W, N]),
    eb = a.useRef(null);
  a.useEffect(() => {
    if ("" === ed) {
      var e;
      null == (e = eb.current) || e.focus()
    }
  }, [ed]);
  let ex = a.useMemo(() => (0, r.throttle)(() => {
      (0, o.showToast)((0, o.createToast)(P.intl.string(P.t.kwmYkt), o.ToastType.FORWARD))
    }, 3e3, {
      leading: true,
      trailing: false
    }), []),
    ey = a.useCallback(e => {
      null != K && null != W && q(K, W, "" !== ed), en(t => {
        let n = t.findIndex(t => {
          let {
            type: n,
            id: l
          } = t;
          return n === e.type && l === e.id
        });
        if (false === n) return ea ? t : (ef(""), $.current += 1, [e, ...t]);
        let l = [...t];
        return l.splice(n, 1), $.current += 1, l
      })
    }, [K, ea, W, ed, ef, q]),
    eC = a.useCallback(async function(e) {
      var a;
      let {
        withMessage: r,
        transitionToDestination: i,
        closeAfterSend: s
      } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
      if (null != G) return void await G(e, {
        withMessage: r,
        transitionToDestination: i,
        closeAfterSend: s
      }, X);
      if (null == K || null == W) return void(0, o.showToast)((0, o.createToast)(P.intl.string(P.t.R0RpRX), o.ToastType.FAILURE));
      let u = null != (a = w.Z.getMessage(K, W)) ? a : t;
      if (null == u) return void(0, o.showToast)((0, o.createToast)(P.intl.string(P.t.R0RpRX), o.ToastType.FAILURE));
      X(true);
      let c = (await Promise.all(e.map(g.qx))).filter(b.lm);
      if ((0, O.Z)(u, c) && !await new Promise(e => {
          (0, o.ZDy)(async () => {
            let {
              default: t
            } = await n.e("88643").then(n.bind(n, 466080));
            return n => (0, l.jsx)(t, R(M({}, n), {
              onConfirm: () => e(true),
              onBack: () => e(false)
            }))
          })
        })) return void X(false);
      s && (0, _.mc)(), null == F || F(), i && (await d.Z.fetchMessages({
        channelId: c[0]
      }), (0, m.Kh)(c[0], {
        openTextInVoiceIfVoiceChannel: true
      }));
      let h = await x.Z.sendForwards(u, c, R(M({}, Z), {
          withMessage: r
        })),
        f = c.some(e => {
          let t = p.Z.getChannel(e);
          return null != t && t.rateLimitPerUser > 0
        });
      if (h.every(e => {
          let {
            status: t
          } = e;
          return "fulfilled" === t
        })) {
        (0, C.gP)({
          channelId: K,
          messageId: W,
          hasError: false,
          hasContextMessage: null != r && "" !== r,
          numDestinations: c.length,
          numDestinationChanges: $.current,
          numQueryChanges: ee.current,
          anyDestinationHasSlowmode: f
        }), ex();
        return
      }(0, C.gP)({
        channelId: K,
        messageId: W,
        hasError: true,
        hasContextMessage: null != r && "" !== r,
        numDestinations: c.length,
        numDestinationChanges: $.current,
        numQueryChanges: ee.current,
        anyDestinationHasSlowmode: f
      });
      let v = e.filter((e, t) => "rejected" === h[t].status);
      (0, _.Np)({
        message: u,
        failedDestinations: v,
        forwardOptions: Z
      })
    }, [K, Z, W, t, F, ex, G]),
    eO = a.useCallback(e => {
      eC(et, {
        withMessage: e,
        transitionToDestination: 1 === et.length,
        closeAfterSend: true
      })
    }, [eC, et]),
    ej = a.useCallback(() => {
      null != z && u.Z.clearDraft(z.channel_id, v.d.ForwardContextMessage), eO(es.textValue)
    }, [z, es.textValue, eO]),
    e_ = (0, T.Y)({
      rowData: em,
      message: z,
      originChannel: Q,
      selectedDestinations: et,
      handleToggleDestination: ey,
      disableSelection: ea,
      validateDestination: V
    }),
    eS = a.useMemo(() => em.length > 0 ? e_ : {
      sections: [1],
      sectionHeight: 0,
      renderRow: () => (0, l.jsx)(A, {}),
      rowHeight: 72
    }, [em, e_]),
    eT = el <= 1 ? P.intl.string(P.t.TXNS7S) : P.intl.formatToPlainString(P.t.jWtYUm, {
      count: el
    });
  return (0, l.jsx)(i.Modal, R(M({}, B), {
    onClose: ew,
    title: null != k ? k : P.intl.string(P.t["+SkRRj"]),
    subtitle: null != U ? U : ea ? P.intl.formatToPlainString(P.t["3Fbkir"], {
      count: E.G
    }) : P.intl.string(P.t["VA+btJ"]),
    input: (0, l.jsx)(o.E1j, {
      ref: eb,
      query: ed,
      onChange: ep,
      onClear: ev,
      placeholder: P.intl.string(P.t["5h0QOP"]),
      "aria-label": P.intl.string(P.t["5h0QOP"]),
      autoFocus: true
    }),
    preview: null != L ? L : null != z && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(S.O, {
        message: z,
        forwardOptions: Z,
        channel: er
      }), eu.length > 0 && es.textValue.length > 0 && (0, l.jsx)(o.Text, {
        className: D.slowmodeWarning,
        variant: "text-sm/normal",
        color: "text-feedback-warning",
        children: P.intl.format(P.t.xJFpij, {
          count: eu.length,
          channelNames: eu.join(", ")
        })
      })]
    }),
    actionBarInput: (0, l.jsx)(j._, {
      message: z,
      canSend: el > 0,
      selectedDestinations: et,
      isSending: H,
      onSend: eO,
      inputValue: es,
      setInputValue: eo
    }),
    actions: [{
      variant: "primary",
      text: eT,
      onClick: ej,
      disabled: el <= 0 || es.textValue.length > ec,
      loading: H,
      icon: o.Uuj,
      iconPosition: "end"
    }],
    actionBarInputLayout: "chat-input",
    listProps: eS
  }))
}