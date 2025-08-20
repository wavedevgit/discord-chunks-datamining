/** Chunk was on 73736 **/
/** chunk id: 609776, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk933557 = require("./933557.js"),
  Chunk884746 = require("./884746.js"),
  Chunk954313 = require("./954313.js"),
  Chunk13664 = require("./13664.jsx"),
  Chunk440371 = require("./440371.jsx"),
  Chunk810788 = require("./810788.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk570188 = require("./570188.js"),
  Chunk427679 = require("./427679.js"),
  Chunk930180 = require("./930180.js"),
  Chunk320596 = require("./320596.jsx"),
  Chunk157925 = require("./157925.js"),
  Chunk981631 = require("./981631.js"),
  Chunk765305 = require("./765305.js"),
  Chunk190378 = require("./190378.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk577713 = require("./577713.js");

function T(e) {
  let {
    stageChannelsInGuild: t,
    channel: n,
    onSelectChannel: i
  } = e;
  return null == i ? null : (0, r.jsx)(c.xJW, {
    title: E.intl.string(E.t.S7GjDw) + " asdf",
    className: w.channelSelectionFormItem,
    required: true,
    children: (0, r.jsx)(c.VcW, {
      value: n.id,
      options: t.map(e => ({
        value: e.id,
        label: (0, u.F6)(e, p.default, f.Z, true)
      })),
      onChange: e => {
        let n = t.find(t => t.id === e);
        null != n && i(n)
      },
      renderOptionPrefix: () => (0, r.jsx)(c.ewx, {
        size: "custom",
        color: "currentColor",
        height: 24
      })
    })
  })
}

function k(e) {
  var t, n, l, f, p, k;
  let {
    channel: P,
    guild: D,
    header: Z,
    error: L,
    loading: R,
    onSave: A,
    onEventSave: B,
    onClose: G,
    onSelectChannel: U,
    isEvent: z = false,
    defaultOptions: F,
    isSlideReady: M = true
  } = e, J = i.useMemo(() => j.Z.getStageInstanceByChannel(P.id), [P.id]), [V, H] = i.useState(null != (n = null != (t = null == F ? true : F.topic) ? t : null == J ? true : J.topic) ? n : ""), [W, q] = i.useState(null != (l = null == F ? true : F.description) ? l : ""), [K] = i.useState(z), [X, Y] = i.useState(null != (f = null == F ? true : F.schedule) ? f : {
    startDate: (0, h.ib)()
  }), [Q, $] = i.useState(K && (null == F ? true : F.schedule) != null), ee = (0, _.J)(P), et = (0, _.U)(P), en = null == J && ee && !K, [er, ei] = i.useState(en && et), el = (0, o.e7)([b.Z], () => b.Z.hasHotspot(S.v.LIVE_STAGE_NOTIFICATION_BADGE)), ea = I.j8.GUILD_ONLY, [eo] = i.useState(null != (k = null != (p = null == F ? true : F.privacyLevel) ? p : null == J ? true : J.privacy_level) ? k : ea), [es, ec] = i.useState(null == F ? true : F.recurrenceRule), ed = (0, N._d)(P.id), eu = (0, N.K3)(P.id), [ex, eh] = i.useState(false), eg = (0, u.ZP)(P), em = (0, x.q)(D), eb = null != U, ef = em.length > 1;
  (0, d.ZP)(() => {
    v.default.track(O.rMx.START_STAGE_OPENED, {
      stage_instance_id: null == J ? true : J.id,
      can_start_public_stage: false,
      guild_id: P.guild_id
    })
  });
  let ep = e => {
      if (e.preventDefault(), eo === I.j8.PUBLIC && V.length < 20 && !ex) return void eh(true);
      let t = {
        topic: V,
        privacyLevel: eo,
        sendStartNotification: er
      };
      if (K) {
        var n, r;
        if (!Q) return;
        null == B || B((n = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({}, t), r = r = {
          schedule: X,
          description: W,
          entityType: I.WX.STAGE_INSTANCE
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(r)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
        }), n));
        return
      }
      null == A || A(t)
    },
    {
      color: ev,
      text: e_
    } = K ? {
      color: s.zx.Colors.BRAND,
      text: E.intl.string(E.t["60lJ0N"])
    } : eo === I.j8.PUBLIC && (null == J ? true : J.privacy_level) !== I.j8.PUBLIC ? {
      color: s.zx.Colors.BRAND,
      text: E.intl.string(E.t["3PatS0"])
    } : null == J ? {
      color: s.zx.Colors.BRAND,
      text: E.intl.string(E.t.s8mM8P)
    } : {
      color: s.zx.Colors.BRAND,
      text: E.intl.string(E.t.K344S0)
    },
    ej = i.useRef(null);
  i.useEffect(() => {
    var e;
    M && (null == (e = ej.current) || e.focus())
  }, [M]);
  let eN = Q && null != X.startDate && X.startDate >= a()();
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(c.hzk, {
      className: w.modalContent,
      children: [Z, (0, r.jsx)("div", {
        className: w.blockedUsersContainer,
        children: null == J && (ed > 0 || eu > 0) && (0, r.jsx)(C.mv, {
          channelId: P.id
        })
      }), (0, r.jsxs)("form", {
        onSubmit: ep,
        className: w.form,
        children: [(0, r.jsxs)(c.xJW, {
          title: z ? E.intl.string(E.t["0HbEQ0"]) : E.intl.string(E.t["5FPBOD"]),
          required: true,
          children: [(0, r.jsx)(c.oil, {
            onChange: e => H(e),
            placeholder: E.intl.string(E.t.ZwWrub),
            maxLength: y.xA,
            value: V,
            autoComplete: "off",
            inputRef: ej
          }), ex && (0, r.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "text-feedback-warning",
            className: w.warning,
            children: E.intl.string(E.t.AqTyaW)
          }), null != L ? (0, r.jsx)(c.Text, {
            color: "text-danger",
            variant: "text-xs/normal",
            className: w.warning,
            children: L.getAnyErrorMessage()
          }) : null]
        }), eb && ef ? (0, r.jsx)(T, {
          stageChannelsInGuild: em,
          channel: P,
          onSelectChannel: U
        }) : null, K && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(m.Z, {
            className: w.formItem,
            onScheduleChange: Y,
            onRecurrenceChange: e => {
              let t = X.startDate;
              null != t && ec((0, h.mF)(e, t))
            },
            schedule: X,
            recurrenceRule: es,
            timeSelected: Q,
            onTimeChange: $
          }), null != X.startDate && X.startDate < a()() ? (0, r.jsx)(c.Text, {
            color: "text-danger",
            variant: "text-xs/normal",
            className: w.warning,
            children: E.intl.string(E.t.AXR5Sk)
          }) : null]
        }), z && (0, r.jsx)(c.xJW, {
          title: E.intl.string(E.t["+gRCCw"]),
          className: w.formItem,
          children: (0, r.jsx)(c.Kx8, {
            placeholder: E.intl.string(E.t["kWO/Ex"]),
            value: W,
            onChange: e => q(e),
            maxLength: I.wm
          })
        }), en ? (0, r.jsx)(g.Z, {
          sendStartNotification: er,
          setSendStartNotification: ei,
          showNotificationNewBadge: el
        }) : null, eb && !ef ? (0, r.jsx)(c.Text, {
          color: "header-secondary",
          variant: "text-xs/normal",
          className: w.channelSelection,
          children: E.intl.format(E.t["S+9O7u"], {
            stageName: eg,
            stageHook: (e, t) => (0, r.jsx)("span", {
              className: w.channelName,
              children: P.name
            }, t)
          })
        }) : null]
      })]
    }), (0, r.jsxs)(c.mzw, {
      children: [(0, r.jsx)(s.zx, {
        color: ev,
        onClick: ep,
        disabled: "" === V || null == eo || z && !eN,
        submitting: R,
        children: e_
      }), (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: w.cancelButton,
        children: (0, r.jsx)(c.zxk, {
          variant: "secondary",
          text: E.intl.string(E.t["ETE/oK"]),
          onClick: G
        })
      })]
    })]
  })
}