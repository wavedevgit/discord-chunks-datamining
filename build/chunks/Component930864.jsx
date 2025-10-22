/** Chunk was on 8818 **/
/** chunk id: 930864, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ForwardModal: () => F
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
  Chunk132358 = require("./132358.js");

function k(e) {
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

function T() {
  return (0, Chunk951288.jsx)("div", {
    className: Chunk132358.noResults,
    children: (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: Chunk388032.intl.string(Chunk388032.t.V6nAfF)
    })
  })
}

function F(e) {
  var {
    message: t,
    initialSelectedDestinations: F,
    forwardOptions: D,
    onClose: E,
    onRequestSent: N
  } = e, A = function(e, t) {
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
    id: V
  } = t, W = l.useMemo(() => (0, g.dL)(L), [L]), [G, U] = l.useState(false), B = (0, s.e7)([b.Z], () => {
    var e;
    return null != (e = b.Z.getMessage(t.channel_id, t.id)) ? e : t
  }, [t]), K = (0, s.e7)([w.Z], () => w.Z.getChannel(L), [L]), H = (0, y.ZF)(), Y = (0, y.mh)(), Q = l.useRef(0), X = l.useRef(0), [q, z] = l.useState(F), J = q.length, $ = J >= Z.G, ee = (0, x.nm)(q), et = (0, s.e7)([p.Z], () => p.Z.getDraft(B.channel_id, p.d.ForwardContextMessage)), [en, ea] = l.useState(() => (0, u.eK)(et)), el = (0, x.y)(q), er = (0, h.Z)(), [ei, es] = l.useState(""), {
    results: eo,
    updateSearchText: ec
  } = (0, f.s)({
    selectedDestinations: q,
    originDestination: W,
    includeMissingDMs: true
  }), eu = l.useCallback(e => {
    es(e), ec(e)
  }, [ec]), ed = l.useCallback(e => {
    eu(e), X.current += 1, "" !== e && Y(L, V)
  }, [L, V, Y, eu]), eh = l.useCallback(() => {
    eu("")
  }, [eu]), em = l.useCallback(async () => {
    (0, y.sF)({
      channelId: L,
      messageId: V,
      numDestinationChanges: Q.current,
      numQueryChanges: X.current
    }), await E()
  }, [L, V, E]), eg = l.useRef(null);
  l.useEffect(() => {
    if ("" === ei) {
      var e;
      null == (e = eg.current) || e.focus()
    }
  }, [ei]);
  let ef = l.useMemo(() => (0, r.throttle)(() => {
      (0, o.showToast)((0, o.createToast)(I.intl.string(I.t.kwmYkt), o.ToastType.FORWARD))
    }, 3e3, {
      leading: true,
      trailing: false
    }), []),
    ew = l.useCallback(e => {
      H(L, V, "" !== ei), z(t => {
        let n = t.findIndex(t => {
          let {
            type: n,
            id: a
          } = t;
          return n === e.type && a === e.id
        });
        if (false === n) return $ ? t : (eu(""), Q.current += 1, [e, ...t]);
        let a = [...t];
        return a.splice(n, 1), Q.current += 1, a
      })
    }, [L, $, V, ei, eu, H]),
    ep = l.useCallback(async function(e) {
      var l;
      let {
        withMessage: r,
        transitionToDestination: i,
        closeAfterSend: s
      } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, c = null != (l = b.Z.getMessage(L, V)) ? l : t;
      if (null == c) return void(0, o.showToast)((0, o.createToast)(I.intl.string(I.t.R0RpRX), o.ToastType.FAILURE));
      U(true);
      let u = (await Promise.all(e.map(g.qx))).filter(_.lm);
      if ((0, P.Z)(c, u) && !await new Promise(e => {
          (0, o.ZDy)(async () => {
            let {
              default: t
            } = await n.e("88643").then(n.bind(n, 466080));
            return n => (0, a.jsx)(t, M(k({}, n), {
              onConfirm: () => e(true),
              onBack: () => e(false)
            }))
          })
        })) return void U(false);
      s && (0, j.mc)(), null == N || N(), i && (await d.Z.fetchMessages({
        channelId: u[0]
      }), (0, m.Kh)(u[0], {
        openTextInVoiceIfVoiceChannel: true
      }));
      let h = await v.Z.sendForwards(c, u, M(k({}, D), {
          withMessage: r
        })),
        f = u.some(e => {
          let t = w.Z.getChannel(e);
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
          messageId: V,
          hasError: false,
          hasContextMessage: null != r && "" !== r,
          numDestinations: u.length,
          numDestinationChanges: Q.current,
          numQueryChanges: X.current,
          anyDestinationHasSlowmode: f
        }), ef();
        return
      }(0, y.gP)({
        channelId: L,
        messageId: V,
        hasError: true,
        hasContextMessage: null != r && "" !== r,
        numDestinations: u.length,
        numDestinationChanges: Q.current,
        numQueryChanges: X.current,
        anyDestinationHasSlowmode: f
      });
      let p = e.filter((e, t) => "rejected" === h[t].status);
      (0, j.Np)({
        message: c,
        failedDestinations: p,
        forwardOptions: D
      })
    }, [L, D, V, t, N, ef]),
    eb = l.useCallback(e => {
      ep(q, {
        withMessage: e,
        transitionToDestination: 1 === q.length,
        closeAfterSend: true
      })
    }, [ep, q]),
    e_ = l.useCallback(() => {
      c.Z.clearDraft(B.channel_id, p.d.ForwardContextMessage), eb(en.textValue)
    }, [B.channel_id, en.textValue, eb]),
    ev = (0, S.Y)({
      rowData: eo,
      message: B,
      originChannel: K,
      selectedDestinations: q,
      handleToggleDestination: ew,
      disableSelection: $
    }),
    ex = l.useMemo(() => eo.length > 0 ? ev : {
      sections: [1],
      sectionHeight: 0,
      renderRow: () => (0, a.jsx)(T, {}),
      rowHeight: 72
    }, [eo, ev]);
  if (null == B || null == K) return null;
  let ey = J <= 1 ? I.intl.string(I.t.TXNS7S) : I.intl.formatToPlainString(I.t.jWtYUm, {
    count: J
  });
  return (0, a.jsx)(i.Modal, M(k({}, A), {
    onClose: em,
    title: I.intl.string(I.t["+SkRRj"]),
    subtitle: $ ? I.intl.formatToPlainString(I.t["3Fbkir"], {
      count: Z.G
    }) : I.intl.string(I.t["VA+btJ"]),
    input: (0, a.jsx)(o.E1j, {
      ref: eg,
      query: ei,
      onChange: ed,
      onClear: eh,
      placeholder: I.intl.string(I.t["5h0QOP"]),
      "aria-label": I.intl.string(I.t["5h0QOP"]),
      autoFocus: true
    }),
    preview: (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(O.O, {
        message: B,
        forwardOptions: D,
        channel: ee
      }), el.length > 0 && en.textValue.length > 0 && (0, a.jsx)(o.Text, {
        className: R.slowmodeWarning,
        variant: "text-sm/normal",
        color: "text-feedback-warning",
        children: I.intl.format(I.t.xJFpij, {
          count: el.length,
          channelNames: el.join(", ")
        })
      })]
    }),
    actionBarInput: (0, a.jsx)(C._, {
      message: B,
      canSend: J > 0,
      selectedDestinations: q,
      isSending: G,
      onSend: eb,
      inputValue: en,
      setInputValue: ea
    }),
    actions: [{
      variant: "primary",
      text: ey,
      onClick: e_,
      disabled: J <= 0 || en.textValue.length > er,
      loading: G,
      icon: o.Uuj,
      iconPosition: "end"
    }],
    listProps: ex
  }))
}