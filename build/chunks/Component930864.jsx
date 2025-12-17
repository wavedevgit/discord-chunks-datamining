/** Chunk was on 33648 **/
/** chunk id: 930864, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ForwardModal: () => M
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
  Chunk614934 = require("./614934.js");

function R(e) {
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

function E(e, t) {
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

function _() {
  return (0, Chunk54381.jsx)("div", {
    className: Chunk614934.noResults,
    children: (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: Chunk388032.intl.string(Chunk388032.t.V6nAfF)
    })
  })
}

function M(e) {
  var {
    message: t,
    initialSelectedDestinations: M = [],
    forwardOptions: N,
    onClose: I,
    onRequestSent: F,
    customTitle: A,
    customSubtitle: V,
    customPreview: L,
    customSendHandler: U,
    customValidateDestination: G,
    additionalActions: B,
    source: W
  } = e, H = function(e, t) {
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
  }(e, ["message", "initialSelectedDestinations", "forwardOptions", "onClose", "onRequestSent", "customTitle", "customSubtitle", "customPreview", "customSendHandler", "customValidateDestination", "additionalActions", "source"]);
  let K = null == t ? true : t.channel_id,
    Q = null == t ? true : t.id,
    X = a.useMemo(() => null != K ? (0, g.dL)(K) : true, [K]),
    [Y, q] = a.useState(false),
    z = (0, s.e7)([x.Z], () => {
      var e;
      return "checkpoint" === W ? t : null != t ? null != (e = x.Z.getMessage(t.channel_id, t.id)) ? e : t : true
    }, [t, W]),
    J = (0, s.e7)([p.Z], () => null != K ? p.Z.getChannel(K) : true, [K]),
    $ = (0, C.ZF)(),
    ee = (0, C.mh)(),
    et = a.useRef(0),
    en = a.useRef(0),
    [el, ea] = a.useState(M),
    er = el.length,
    ei = er >= k.G,
    es = (0, j.nm)(el),
    eo = (0, s.e7)([v.Z], () => null != z ? v.Z.getDraft(z.channel_id, v.d.ForwardContextMessage) : ""),
    [eu, ec] = a.useState(() => (0, c.eK)(eo)),
    ed = (0, j.y)(el),
    eh = (0, h.Z)(),
    [em, eg] = a.useState(""),
    {
      results: ef,
      updateSearchText: ep
    } = (0, f.s)({
      selectedDestinations: el,
      originDestination: X,
      includeMissingDMs: true
    }),
    ev = a.useCallback(e => {
      eg(e), ep(e)
    }, [ep]),
    ex = a.useCallback(e => {
      ev(e), en.current += 1, "" !== e && null != K && null != Q && ee(K, Q)
    }, [K, Q, ee, ev]),
    eb = a.useCallback(() => {
      ev("")
    }, [ev]),
    ew = a.useCallback(async () => {
      null != K && null != Q && (0, C.sF)({
        channelId: K,
        messageId: Q,
        numDestinationChanges: et.current,
        numQueryChanges: en.current
      }), await I()
    }, [K, Q, I]),
    ej = a.useRef(null);
  a.useEffect(() => {
    if ("" === em) {
      var e;
      null == (e = ej.current) || e.focus()
    }
  }, [em]);
  let eC = a.useMemo(() => (0, r.throttle)(() => {
      (0, o.showToast)((0, o.createToast)(Z.intl.string(Z.t.kwmYkt), o.ToastType.FORWARD))
    }, 3e3, {
      leading: true,
      trailing: false
    }), []),
    ey = a.useCallback(e => {
      null != K && null != Q && $(K, Q, "" !== em), ea(t => {
        let n = t.findIndex(t => {
          let {
            type: n,
            id: l
          } = t;
          return n === e.type && l === e.id
        });
        if (false === n) return ei ? t : (ev(""), et.current += 1, [e, ...t]);
        let l = [...t];
        return l.splice(n, 1), et.current += 1, l
      })
    }, [K, ei, Q, em, ev, $]),
    eP = a.useCallback(async function(e) {
      var a;
      let {
        withMessage: r,
        transitionToDestination: i,
        closeAfterSend: s
      } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
      if (null != U) return void await U(e, {
        withMessage: r,
        transitionToDestination: i,
        closeAfterSend: s
      }, q);
      if (null == K || null == Q) return void(0, o.showToast)((0, o.createToast)(Z.intl.string(Z.t.R0RpRX), o.ToastType.FAILURE));
      let u = null != (a = x.Z.getMessage(K, Q)) ? a : t;
      if (null == u) return void(0, o.showToast)((0, o.createToast)(Z.intl.string(Z.t.R0RpRX), o.ToastType.FAILURE));
      q(true);
      let c = (await Promise.all(e.map(g.qx))).filter(b.lm);
      if ((0, y.Z)(u, c) && !await new Promise(e => {
          (0, o.ZDy)(async () => {
            let {
              default: t
            } = await n.e("88643").then(n.bind(n, 466080));
            return n => (0, l.jsx)(t, E(R({}, n), {
              onConfirm: () => e(true),
              onBack: () => e(false)
            }))
          })
        })) return void q(false);
      s && (0, O.mc)(), null == F || F(), i && (await d.Z.fetchMessages({
        channelId: c[0]
      }), (0, m.Kh)(c[0], {
        openTextInVoiceIfVoiceChannel: true
      }));
      let h = await w.Z.sendForwards(u, c, E(R({}, N), {
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
          messageId: Q,
          hasError: false,
          hasContextMessage: null != r && "" !== r,
          numDestinations: c.length,
          numDestinationChanges: et.current,
          numQueryChanges: en.current,
          anyDestinationHasSlowmode: f
        }), eC();
        return
      }(0, C.gP)({
        channelId: K,
        messageId: Q,
        hasError: true,
        hasContextMessage: null != r && "" !== r,
        numDestinations: c.length,
        numDestinationChanges: et.current,
        numQueryChanges: en.current,
        anyDestinationHasSlowmode: f
      });
      let v = e.filter((e, t) => "rejected" === h[t].status);
      (0, O.Np)({
        message: u,
        failedDestinations: v,
        forwardOptions: N
      })
    }, [K, N, Q, t, F, eC, U]),
    eO = a.useCallback(e => {
      eP(el, {
        withMessage: e,
        transitionToDestination: 1 === el.length,
        closeAfterSend: true
      })
    }, [eP, el]),
    eS = a.useCallback(() => {
      null != z && u.Z.clearDraft(z.channel_id, v.d.ForwardContextMessage), eO(eu.textValue)
    }, [z, eu.textValue, eO]),
    eT = (0, T.Y)({
      rowData: ef,
      message: z,
      originChannel: J,
      selectedDestinations: el,
      handleToggleDestination: ey,
      disableSelection: ei,
      validateDestination: G
    }),
    ek = a.useMemo(() => ef.length > 0 ? eT : {
      sections: [1],
      sectionHeight: 0,
      renderRow: () => (0, l.jsx)(_, {}),
      rowHeight: 72
    }, [ef, eT]),
    eZ = er <= 1 ? Z.intl.string(Z.t.TXNS7S) : Z.intl.formatToPlainString(Z.t.jWtYUm, {
      count: er
    });
  return (0, l.jsx)(i.Modal, E(R({}, H), {
    onClose: ew,
    title: null != A ? A : Z.intl.string(Z.t["+SkRRj"]),
    subtitle: null != V ? V : ei ? Z.intl.formatToPlainString(Z.t["3Fbkir"], {
      count: k.G
    }) : Z.intl.string(Z.t["VA+btJ"]),
    input: (0, l.jsx)(o.E1j, {
      ref: ej,
      query: em,
      onChange: ex,
      onClear: eb,
      placeholder: Z.intl.string(Z.t["5h0QOP"]),
      "aria-label": Z.intl.string(Z.t["5h0QOP"]),
      autoFocus: true
    }),
    preview: null != L ? L : null != z && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(S.O, {
        message: z,
        forwardOptions: N,
        channel: es
      }), ed.length > 0 && eu.textValue.length > 0 && (0, l.jsx)(o.Text, {
        className: D.slowmodeWarning,
        variant: "text-sm/normal",
        color: "text-feedback-warning",
        children: Z.intl.format(Z.t.xJFpij, {
          count: ed.length,
          channelNames: ed.join(", ")
        })
      })]
    }),
    actionBarInput: (0, l.jsx)(P._, {
      message: z,
      canSend: er > 0,
      selectedDestinations: el,
      isSending: Y,
      onSend: eO,
      inputValue: eu,
      setInputValue: ec
    }),
    actions: [...null != B ? B : [], {
      variant: "primary",
      text: eZ,
      onClick: eS,
      disabled: er <= 0 || eu.textValue.length > eh,
      loading: Y,
      icon: o.Uuj,
      iconPosition: "end"
    }],
    actionBarInputLayout: "chat-input",
    listProps: ek
  }))
}