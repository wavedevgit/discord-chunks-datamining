/** Chunk was on 9797 **/
/** chunk id: 930864, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ForwardModal: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk103866 = require("./103866.jsx"),
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
  Chunk757853 = require("./757853.jsx"),
  Chunk388275 = require("./388275.jsx"),
  Chunk912332 = require("./912332.jsx"),
  Chunk646746 = require("./646746.jsx"),
  Chunk819727 = require("./819727.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk773921 = require("./773921.js"),
  Chunk621054 = require("./621054.js");

function D(e) {
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

function M(e, t) {
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

function E(e) {
  var {
    message: t,
    initialSelectedDestinations: E,
    forwardOptions: F,
    onClose: N,
    onRequestSent: A
  } = e, L = function(e, t) {
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
    channel_id: V,
    id: W
  } = t, G = l.useMemo(() => (0, f.dL)(V), [V]), [U, B] = l.useState(false), K = (0, i.e7)([w.Z], () => {
    var e;
    return null != (e = w.Z.getMessage(t.channel_id, t.id)) ? e : t
  }, [t]), H = (0, i.e7)([p.Z], () => p.Z.getChannel(V), [V]), Q = (0, P.ZF)(), Y = (0, P.mh)(), q = l.useRef(0), X = l.useRef(0), [z, J] = l.useState(E), $ = z.length, ee = $ >= Z.G, et = (0, y.nm)(z), en = (0, i.e7)([b.Z], () => b.Z.getDraft(K.channel_id, b.d.ForwardContextMessage)), [ea, el] = l.useState(() => (0, d.eK)(en)), er = (0, y.y)(z), ei = (0, m.Z)(), [es, eo] = l.useState(""), {
    results: ec,
    updateSearchText: eu
  } = (0, _.s)({
    selectedDestinations: z,
    originDestination: G,
    includeMissingDMs: true
  }), ed = l.useCallback(e => {
    eo(e), eu(e)
  }, [eu]), eh = l.useCallback(e => {
    ed(e), X.current += 1, "" !== e && Y(V, W)
  }, [V, W, Y, ed]), em = l.useCallback(() => {
    ed("")
  }, [ed]), eg = l.useCallback(async () => {
    (0, P.sF)({
      channelId: V,
      messageId: W,
      numDestinationChanges: q.current,
      numQueryChanges: X.current
    }), await N()
  }, [V, W, N]), ef = l.useRef(null);
  l.useEffect(() => {
    if ("" === es) {
      var e;
      null == (e = ef.current) || e.focus()
    }
  }, [es]);
  let e_ = l.useMemo(() => (0, r.throttle)(() => {
      (0, c.showToast)((0, c.createToast)(R.intl.string(R.t.kwmYkp), c.ToastType.FORWARD))
    }, 3e3, {
      leading: true,
      trailing: false
    }), []),
    ep = l.useCallback(e => {
      Q(V, W, "" !== es), J(t => {
        let n = t.findIndex(t => {
          let {
            type: n,
            id: a
          } = t;
          return n === e.type && a === e.id
        });
        if (false === n) return ee ? t : (ed(""), q.current += 1, [e, ...t]);
        let a = [...t];
        return a.splice(n, 1), q.current += 1, a
      })
    }, [V, ee, W, es, ed, Q]),
    eb = l.useCallback(async function(e) {
      var l;
      let {
        withMessage: r,
        transitionToDestination: i,
        closeAfterSend: s
      } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, o = null != (l = w.Z.getMessage(V, W)) ? l : t;
      if (null == o) return void(0, c.showToast)((0, c.createToast)(R.intl.string(R.t.R0RpRU), c.ToastType.FAILURE));
      B(true);
      let u = (await Promise.all(e.map(f.qx))).filter(v.lm);
      if ((0, C.Z)(o, u) && !await new Promise(e => {
          (0, c.ZDy)(async () => {
            let {
              default: t
            } = await n.e("88643").then(n.bind(n, 466080));
            return n => (0, a.jsx)(t, M(D({}, n), {
              onConfirm: () => e(true),
              onBack: () => e(false)
            }))
          })
        })) return void B(false);
      s && (0, I.mc)(), null == A || A(), i && (await h.Z.fetchMessages({
        channelId: u[0]
      }), (0, g.Kh)(u[0], {
        openTextInVoiceIfVoiceChannel: true
      }));
      let d = await x.Z.sendForwards(o, u, M(D({}, F), {
          withMessage: r
        })),
        m = u.some(e => {
          let t = p.Z.getChannel(e);
          return null != t && t.rateLimitPerUser > 0
        });
      if (d.every(e => {
          let {
            status: t
          } = e;
          return "fulfilled" === t
        })) {
        (0, P.gP)({
          channelId: V,
          messageId: W,
          hasError: false,
          hasContextMessage: null != r && "" !== r,
          numDestinations: u.length,
          numDestinationChanges: q.current,
          numQueryChanges: X.current,
          anyDestinationHasSlowmode: m
        }), e_();
        return
      }(0, P.gP)({
        channelId: V,
        messageId: W,
        hasError: true,
        hasContextMessage: null != r && "" !== r,
        numDestinations: u.length,
        numDestinationChanges: q.current,
        numQueryChanges: X.current,
        anyDestinationHasSlowmode: m
      });
      let _ = e.filter((e, t) => "rejected" === d[t].status);
      (0, I.Np)({
        message: o,
        failedDestinations: _,
        forwardOptions: F
      })
    }, [V, F, W, t, A, e_]),
    ew = l.useCallback(e => {
      eb(z, {
        withMessage: e,
        transitionToDestination: 1 === z.length,
        closeAfterSend: true
      })
    }, [eb, z]),
    ev = l.useCallback(() => {
      u.Z.clearDraft(K.channel_id, b.d.ForwardContextMessage), ew(ea.textValue)
    }, [K.channel_id, ea.textValue, ew]);
  if (null == K || null == H) return null;
  let ex = ec.length > 0 ? (0, a.jsx)(j.F, {
      paddingBottom: 16,
      paddingTop: 16,
      rowData: ec,
      rowMode: j.G.TOGGLE,
      message: K,
      originChannel: H,
      handleToggleDestination: ep,
      selectedDestinations: z,
      disableSelection: ee
    }) : (0, a.jsx)(o.f, {
      children: (0, a.jsxs)("div", {
        className: T.noResults,
        children: [(0, a.jsx)("img", {
          className: T.noResultsImg,
          src: k,
          alt: ""
        }), (0, a.jsx)(c.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: R.intl.string(R.t.V6nAfH)
        })]
      })
    }),
    ey = $ <= 1 ? R.intl.string(R.t.TXNS7e) : R.intl.formatToPlainString(R.t.jWtYUl, {
      count: $
    });
  return (0, a.jsx)(s.Modal, M(D({}, L), {
    onClose: eg,
    title: R.intl.string(R.t["+SkRRk"]),
    subtitle: ee ? R.intl.formatToPlainString(R.t["3Fbkio"], {
      count: Z.G
    }) : R.intl.string(R.t["VA+btL"]),
    input: (0, a.jsx)(c.E1j, {
      ref: ef,
      query: es,
      onChange: eh,
      onClear: em,
      placeholder: R.intl.string(R.t["5h0QOD"]),
      "aria-label": R.intl.string(R.t["5h0QOD"]),
      autoFocus: true
    }),
    preview: (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(S.O, {
        message: K,
        forwardOptions: F,
        channel: et
      }), er.length > 0 && ea.textValue.length > 0 && (0, a.jsx)(c.Text, {
        className: T.slowmodeWarning,
        variant: "text-sm/normal",
        color: "text-feedback-warning",
        children: R.intl.format(R.t.xJFpio, {
          count: er.length,
          channelNames: er.join(", ")
        })
      })]
    }),
    actionBarInput: (0, a.jsx)(O._, {
      message: K,
      canSend: $ > 0,
      selectedDestinations: z,
      isSending: U,
      onSend: ew,
      inputValue: ea,
      setInputValue: el
    }),
    actions: [{
      variant: "primary",
      text: ey,
      onClick: ev,
      disabled: $ <= 0 || ea.textValue.length > ei,
      loading: U,
      icon: c.Uuj,
      iconPosition: "end"
    }],
    children: ex
  }))
}