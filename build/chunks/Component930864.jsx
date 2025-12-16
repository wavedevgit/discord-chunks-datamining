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
    source: B
  } = e, W = function(e, t) {
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
  }(e, ["message", "initialSelectedDestinations", "forwardOptions", "onClose", "onRequestSent", "customTitle", "customSubtitle", "customPreview", "customSendHandler", "customValidateDestination", "source"]);
  let H = null == t ? true : t.channel_id,
    K = null == t ? true : t.id,
    Q = a.useMemo(() => null != H ? (0, g.dL)(H) : true, [H]),
    [X, Y] = a.useState(false),
    q = (0, s.e7)([x.Z], () => {
      var e;
      return "checkpoint" === B ? t : null != t ? null != (e = x.Z.getMessage(t.channel_id, t.id)) ? e : t : true
    }, [t, B]),
    z = (0, s.e7)([p.Z], () => null != H ? p.Z.getChannel(H) : true, [H]),
    J = (0, C.ZF)(),
    $ = (0, C.mh)(),
    ee = a.useRef(0),
    et = a.useRef(0),
    [en, el] = a.useState(M),
    ea = en.length,
    er = ea >= k.G,
    ei = (0, j.nm)(en),
    es = (0, s.e7)([v.Z], () => null != q ? v.Z.getDraft(q.channel_id, v.d.ForwardContextMessage) : ""),
    [eo, eu] = a.useState(() => (0, c.eK)(es)),
    ec = (0, j.y)(en),
    ed = (0, h.Z)(),
    [eh, em] = a.useState(""),
    {
      results: eg,
      updateSearchText: ef
    } = (0, f.s)({
      selectedDestinations: en,
      originDestination: Q,
      includeMissingDMs: true
    }),
    ep = a.useCallback(e => {
      em(e), ef(e)
    }, [ef]),
    ev = a.useCallback(e => {
      ep(e), et.current += 1, "" !== e && null != H && null != K && $(H, K)
    }, [H, K, $, ep]),
    ex = a.useCallback(() => {
      ep("")
    }, [ep]),
    eb = a.useCallback(async () => {
      null != H && null != K && (0, C.sF)({
        channelId: H,
        messageId: K,
        numDestinationChanges: ee.current,
        numQueryChanges: et.current
      }), await I()
    }, [H, K, I]),
    ew = a.useRef(null);
  a.useEffect(() => {
    if ("" === eh) {
      var e;
      null == (e = ew.current) || e.focus()
    }
  }, [eh]);
  let ej = a.useMemo(() => (0, r.throttle)(() => {
      (0, o.showToast)((0, o.createToast)(Z.intl.string(Z.t.kwmYkt), o.ToastType.FORWARD))
    }, 3e3, {
      leading: true,
      trailing: false
    }), []),
    eC = a.useCallback(e => {
      null != H && null != K && J(H, K, "" !== eh), el(t => {
        let n = t.findIndex(t => {
          let {
            type: n,
            id: l
          } = t;
          return n === e.type && l === e.id
        });
        if (false === n) return er ? t : (ep(""), ee.current += 1, [e, ...t]);
        let l = [...t];
        return l.splice(n, 1), ee.current += 1, l
      })
    }, [H, er, K, eh, ep, J]),
    ey = a.useCallback(async function(e) {
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
      }, Y);
      if (null == H || null == K) return void(0, o.showToast)((0, o.createToast)(Z.intl.string(Z.t.R0RpRX), o.ToastType.FAILURE));
      let u = null != (a = x.Z.getMessage(H, K)) ? a : t;
      if (null == u) return void(0, o.showToast)((0, o.createToast)(Z.intl.string(Z.t.R0RpRX), o.ToastType.FAILURE));
      Y(true);
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
        })) return void Y(false);
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
          channelId: H,
          messageId: K,
          hasError: false,
          hasContextMessage: null != r && "" !== r,
          numDestinations: c.length,
          numDestinationChanges: ee.current,
          numQueryChanges: et.current,
          anyDestinationHasSlowmode: f
        }), ej();
        return
      }(0, C.gP)({
        channelId: H,
        messageId: K,
        hasError: true,
        hasContextMessage: null != r && "" !== r,
        numDestinations: c.length,
        numDestinationChanges: ee.current,
        numQueryChanges: et.current,
        anyDestinationHasSlowmode: f
      });
      let v = e.filter((e, t) => "rejected" === h[t].status);
      (0, O.Np)({
        message: u,
        failedDestinations: v,
        forwardOptions: N
      })
    }, [H, N, K, t, F, ej, U]),
    eP = a.useCallback(e => {
      ey(en, {
        withMessage: e,
        transitionToDestination: 1 === en.length,
        closeAfterSend: true
      })
    }, [ey, en]),
    eO = a.useCallback(() => {
      null != q && u.Z.clearDraft(q.channel_id, v.d.ForwardContextMessage), eP(eo.textValue)
    }, [q, eo.textValue, eP]),
    eS = (0, T.Y)({
      rowData: eg,
      message: q,
      originChannel: z,
      selectedDestinations: en,
      handleToggleDestination: eC,
      disableSelection: er,
      validateDestination: G
    }),
    eT = a.useMemo(() => eg.length > 0 ? eS : {
      sections: [1],
      sectionHeight: 0,
      renderRow: () => (0, l.jsx)(_, {}),
      rowHeight: 72
    }, [eg, eS]),
    ek = ea <= 1 ? Z.intl.string(Z.t.TXNS7S) : Z.intl.formatToPlainString(Z.t.jWtYUm, {
      count: ea
    });
  return (0, l.jsx)(i.Modal, E(R({}, W), {
    onClose: eb,
    title: null != A ? A : Z.intl.string(Z.t["+SkRRj"]),
    subtitle: null != V ? V : er ? Z.intl.formatToPlainString(Z.t["3Fbkir"], {
      count: k.G
    }) : Z.intl.string(Z.t["VA+btJ"]),
    input: (0, l.jsx)(o.E1j, {
      ref: ew,
      query: eh,
      onChange: ev,
      onClear: ex,
      placeholder: Z.intl.string(Z.t["5h0QOP"]),
      "aria-label": Z.intl.string(Z.t["5h0QOP"]),
      autoFocus: true
    }),
    preview: null != L ? L : null != q && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(S.O, {
        message: q,
        forwardOptions: N,
        channel: ei
      }), ec.length > 0 && eo.textValue.length > 0 && (0, l.jsx)(o.Text, {
        className: D.slowmodeWarning,
        variant: "text-sm/normal",
        color: "text-feedback-warning",
        children: Z.intl.format(Z.t.xJFpij, {
          count: ec.length,
          channelNames: ec.join(", ")
        })
      })]
    }),
    actionBarInput: (0, l.jsx)(P._, {
      message: q,
      canSend: ea > 0,
      selectedDestinations: en,
      isSending: X,
      onSend: eP,
      inputValue: eo,
      setInputValue: eu
    }),
    actions: [{
      variant: "primary",
      text: ek,
      onClick: eO,
      disabled: ea <= 0 || eo.textValue.length > ed,
      loading: X,
      icon: o.Uuj,
      iconPosition: "end"
    }],
    actionBarInputLayout: "chat-input",
    listProps: eT
  }))
}