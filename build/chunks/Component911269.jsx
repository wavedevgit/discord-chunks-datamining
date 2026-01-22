/** Chunk was on 43622 **/
/** chunk id: 911269, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ForwardModal: () => M
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk465532 = require("./465532.js"),
  Chunk408018 = require("./408018.js"),
  Chunk547 = require("./547.js"),
  Chunk135621 = require("./135621.js"),
  Chunk378570 = require("./378570.js"),
  Chunk223863 = require("./223863.js"),
  Chunk151054 = require("./151054.js"),
  Chunk734057 = require("./734057.js"),
  Chunk31717 = require("./31717.js"),
  Chunk320501 = require("./320501.js"),
  Chunk403362 = require("./403362.js"),
  Chunk885918 = require("./885918.js"),
  Chunk513480 = require("./513480.js"),
  Chunk530912 = require("./530912.js"),
  Chunk938557 = require("./938557.js"),
  Chunk190338 = require("./190338.jsx"),
  Chunk294454 = require("./294454.jsx"),
  Chunk980490 = require("./980490.jsx"),
  Chunk61916 = require("./61916.jsx");
require("./577616.js");
var Chunk985018 = require("./985018.jsx"),
  Chunk967789 = require("./967789.js");

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

function D(e, t) {
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

function E() {
  return (0, l.jsx)("div", {
    className: k.wV,
    children: (0, l.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: P.intl.string(P.t.V6nAfF)
    })
  })
}

function M(e) {
  let {
    message: t,
    initialSelectedDestinations: M = [],
    forwardOptions: N,
    onClose: I,
    onRequestSent: _,
    customTitle: F,
    customSubtitle: V,
    customPreview: L,
    customSendHandler: U,
    customValidateDestination: G,
    additionalActions: B,
    source: H
  } = e, W = function(e, t) {
    if (null == e) return {};
    var n, l, r, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (a[l] = e[l]);
      return a
    }
    if (a = function(e, t) {
        if (null == e) return {};
        var n, l, r = {},
          a = Object.getOwnPropertyNames(e);
        for (l = 0; l < a.length; l++) n = a[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
        return r
      }(e, t), Object.getOwnPropertySymbols)
      for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (a[l] = e[l]);
    return a
  }(e, ["message", "initialSelectedDestinations", "forwardOptions", "onClose", "onRequestSent", "customTitle", "customSubtitle", "customPreview", "customSendHandler", "customValidateDestination", "additionalActions", "source"]), q = null == t ? true : t.channel_id, K = null == t ? true : t.id, Q = r.useMemo(() => null != q ? (0, f._5)(q) : true, [q]), [X, Y] = r.useState(false), J = (0, s.bG)([x.A], () => {
    var e;
    return "checkpoint" === H ? t : null != t ? null != (e = x.A.getMessage(t.channel_id, t.id)) ? e : t : true
  }, [t, H]), Z = (0, s.bG)([p.A], () => null != q ? p.A.getChannel(q) : true, [q]), z = (0, j.Jf)(), $ = (0, j.nL)(), ee = r.useRef(0), et = r.useRef(0), [en, el] = r.useState(M), er = en.length, ea = er >= 5, ei = (0, C.QK)(en), es = (0, s.bG)([b.A], () => null != J ? b.A.getDraft(J.channel_id, b.C.ForwardContextMessage) : ""), [eo, eu] = r.useState(() => (0, c.ur)(es)), ec = (0, C.M6)(en), ed = (0, h.A)(), [eh, em] = r.useState(""), {
    results: ef,
    updateSearchText: eg
  } = (0, g.R)({
    selectedDestinations: en,
    originDestination: Q,
    includeMissingDMs: true
  }), ep = r.useCallback(e => {
    em(e), eg(e)
  }, [eg]), eb = r.useCallback(e => {
    ep(e), et.current += 1, "" !== e && null != q && null != K && $(q, K)
  }, [q, K, $, ep]), ex = r.useCallback(() => {
    ep("")
  }, [ep]), ey = r.useCallback(async () => {
    null != q && null != K && (0, j.hH)({
      channelId: q,
      messageId: K,
      numDestinationChanges: ee.current,
      numQueryChanges: et.current
    }), await I()
  }, [q, K, I]), ev = r.useRef(null);
  r.useEffect(() => {
    if ("" === eh) {
      var e;
      null == (e = ev.current) || e.focus()
    }
  }, [eh]);
  let eC = r.useMemo(() => (0, a.throttle)(() => {
      (0, o.showToast)((0, o.createToast)(P.intl.string(P.t.kwmYkt), o.ToastType.FORWARD))
    }, 3e3, {
      leading: true,
      trailing: false
    }), []),
    ej = r.useCallback(e => {
      null != q && null != K && z(q, K, "" !== eh), el(t => {
        let n = t.findIndex(t => {
          let {
            type: n,
            id: l
          } = t;
          return n === e.type && l === e.id
        });
        if (false === n) return ea ? t : (ep(""), ee.current += 1, [e, ...t]);
        let l = [...t];
        return l.splice(n, 1), ee.current += 1, l
      })
    }, [q, ea, K, eh, ep, z]),
    ew = r.useCallback(async function(e) {
      var r;
      let {
        withMessage: a,
        transitionToDestination: i,
        closeAfterSend: s
      } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
      if (null != U) return void await U(e, {
        withMessage: a,
        transitionToDestination: i,
        closeAfterSend: s
      }, Y);
      if (null == q || null == K) return void(0, o.showToast)((0, o.createToast)(P.intl.string(P.t.R0RpRX), o.ToastType.FAILURE));
      let u = null != (r = x.A.getMessage(q, K)) ? r : t;
      if (null == u) return void(0, o.showToast)((0, o.createToast)(P.intl.string(P.t.R0RpRX), o.ToastType.FAILURE));
      Y(true);
      let c = (await Promise.all(e.map(f.pk))).filter(y.Vq);
      if ((0, w.A)(u, c) && !await new Promise(e => {
          (0, o.mMO)(async () => {
            let {
              default: t
            } = await n.e("51954").then(n.bind(n, 156073));
            return n => (0, l.jsx)(t, D(R({}, n), {
              onConfirm: () => e(true),
              onBack: () => e(false)
            }))
          })
        })) return void Y(false);
      s && (0, A.Be)(), null == _ || _(), i && (await d.A.fetchMessages({
        channelId: c[0]
      }), (0, m.iN)(c[0], {
        openTextInVoiceIfVoiceChannel: true
      }));
      let h = await v.A.sendForwards(u, c, D(R({}, N), {
          withMessage: a
        })),
        g = c.some(e => {
          let t = p.A.getChannel(e);
          return null != t && t.rateLimitPerUser > 0
        });
      if (h.every(e => {
          let {
            status: t
          } = e;
          return "fulfilled" === t
        })) {
        (0, j.TA)({
          channelId: q,
          messageId: K,
          hasError: false,
          hasContextMessage: null != a && "" !== a,
          numDestinations: c.length,
          numDestinationChanges: ee.current,
          numQueryChanges: et.current,
          anyDestinationHasSlowmode: g
        }), eC();
        return
      }(0, j.TA)({
        channelId: q,
        messageId: K,
        hasError: true,
        hasContextMessage: null != a && "" !== a,
        numDestinations: c.length,
        numDestinationChanges: ee.current,
        numQueryChanges: et.current,
        anyDestinationHasSlowmode: g
      });
      let b = e.filter((e, t) => "rejected" === h[t].status);
      (0, A.vK)({
        message: u,
        failedDestinations: b,
        forwardOptions: N
      })
    }, [q, N, K, t, _, eC, U]),
    eO = r.useCallback(e => {
      ew(en, {
        withMessage: e,
        transitionToDestination: 1 === en.length,
        closeAfterSend: true
      })
    }, [ew, en]),
    eA = r.useCallback(() => {
      null != J && u.A.clearDraft(J.channel_id, b.C.ForwardContextMessage), eO(eo.textValue)
    }, [J, eo.textValue, eO]),
    eS = (0, T.s)({
      rowData: ef,
      message: J,
      originChannel: Z,
      selectedDestinations: en,
      handleToggleDestination: ej,
      disableSelection: ea,
      validateDestination: G
    }),
    eT = r.useMemo(() => ef.length > 0 ? eS : {
      sections: [1],
      sectionHeight: 0,
      renderRow: () => (0, l.jsx)(E, {}),
      rowHeight: 72
    }, [ef, eS]),
    eP = er <= 1 ? P.intl.string(P.t.TXNS7S) : P.intl.formatToPlainString(P.t.jWtYUm, {
      count: er
    });
  return (0, l.jsx)(i.Modal, D(R({}, W), {
    onClose: ey,
    title: null != F ? F : P.intl.string(P.t["+SkRRj"]),
    subtitle: null != V ? V : ea ? P.intl.formatToPlainString(P.t["3Fbkir"], {
      count: 5
    }) : P.intl.string(P.t["VA+btJ"]),
    input: (0, l.jsx)(o.IWV, {
      ref: ev,
      query: eh,
      onChange: eb,
      onClear: ex,
      placeholder: P.intl.string(P.t["5h0QOP"]),
      "aria-label": P.intl.string(P.t["5h0QOP"]),
      autoFocus: true
    }),
    preview: null != L ? L : null != J && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(S.q, {
        message: J,
        forwardOptions: N,
        channel: ei
      }), ec.length > 0 && eo.textValue.length > 0 && (0, l.jsx)(o.Text, {
        className: k.Lt,
        variant: "text-sm/normal",
        color: "text-feedback-warning",
        children: P.intl.format(P.t.xJFpij, {
          count: ec.length,
          channelNames: ec.join(", ")
        })
      })]
    }),
    actionBarInput: (0, l.jsx)(O.m, {
      message: J,
      canSend: er > 0,
      selectedDestinations: en,
      isSending: X,
      onSend: eO,
      inputValue: eo,
      setInputValue: eu
    }),
    actions: [...null != B ? B : [], {
      variant: "primary",
      text: eP,
      onClick: eA,
      disabled: er <= 0 || eo.textValue.length > ed,
      loading: X,
      icon: o.lX7,
      iconPosition: "end"
    }],
    actionBarInputLayout: "chat-input",
    listProps: eT
  }))
}