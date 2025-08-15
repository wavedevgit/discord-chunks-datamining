/** Chunk was on 73736 **/
/** chunk id: 609776, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
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

function w(e) {
  let {
    stageChannelsInGuild: t,
    channel: n,
    onSelectChannel: i
  } = e;
  return null == i ? null : (0, r.jsx)(c.xJW, {
    title: S.intl.string(S.t.S7GjDw) + " asdf",
    className: T.channelSelectionFormItem,
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

function P(e) {
  var t, n, l, f, p, P;
  let {
    channel: k,
    guild: A,
    header: D,
    error: R,
    loading: Z,
    onSave: G,
    onEventSave: L,
    onClose: B,
    onSelectChannel: M,
    isEvent: U = false,
    defaultOptions: F,
    isSlideReady: z = true
  } = e, V = i.useMemo(() => j.Z.getStageInstanceByChannel(k.id), [k.id]), [W, H] = i.useState(null != (n = null != (t = null == F ? true : F.topic) ? t : null == V ? true : V.topic) ? n : ""), [q, J] = i.useState(null != (l = null == F ? true : F.description) ? l : ""), [K] = i.useState(U), [Y, X] = i.useState(null != (f = null == F ? true : F.schedule) ? f : {
    startDate: (0, g.ib)()
  }), [Q, $] = i.useState(K && (null == F ? true : F.schedule) != null), ee = (0, v.J)(k), et = (0, v.U)(k), en = null == V && ee && !K, [er, ei] = i.useState(en && et), el = (0, o.e7)([b.Z], () => b.Z.hasHotspot(E.v.LIVE_STAGE_NOTIFICATION_BADGE)), ea = C.j8.GUILD_ONLY, [eo] = i.useState(null != (P = null != (p = null == F ? true : F.privacyLevel) ? p : null == V ? true : V.privacy_level) ? P : ea), [es, ec] = i.useState(null == F ? true : F.recurrenceRule), ed = (0, N._d)(k.id), eu = (0, N.K3)(k.id), [eh, eg] = i.useState(false), e_ = (0, u.ZP)(k), em = (0, h.q)(A), eb = null != M, ef = em.length > 1;
  (0, d.ZP)(() => {
    x.default.track(O.rMx.START_STAGE_OPENED, {
      stage_instance_id: null == V ? true : V.id,
      can_start_public_stage: false,
      guild_id: k.guild_id
    })
  });
  let ep = e => {
      if (e.preventDefault(), eo === C.j8.PUBLIC && W.length < 20 && !eh) return void eg(true);
      let t = {
        topic: W,
        privacyLevel: eo,
        sendStartNotification: er
      };
      if (K) {
        var n, r;
        if (!Q) return;
        null == L || L((n = function(e) {
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
          schedule: Y,
          description: q,
          entityType: C.WX.STAGE_INSTANCE
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
      null == G || G(t)
    },
    {
      color: ex,
      text: ev
    } = K ? {
      color: s.zx.Colors.BRAND,
      text: S.intl.string(S.t["60lJ0N"])
    } : eo === C.j8.PUBLIC && (null == V ? true : V.privacy_level) !== C.j8.PUBLIC ? {
      color: s.zx.Colors.BRAND,
      text: S.intl.string(S.t["3PatS0"])
    } : null == V ? {
      color: s.zx.Colors.BRAND,
      text: S.intl.string(S.t.s8mM8P)
    } : {
      color: s.zx.Colors.BRAND,
      text: S.intl.string(S.t.K344S0)
    },
    ej = i.useRef(null);
  i.useEffect(() => {
    var e;
    z && (null == (e = ej.current) || e.focus())
  }, [z]);
  let eN = Q && null != Y.startDate && Y.startDate >= a()();
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(c.hzk, {
      className: T.modalContent,
      children: [D, (0, r.jsx)("div", {
        className: T.blockedUsersContainer,
        children: null == V && (ed > 0 || eu > 0) && (0, r.jsx)(y.mv, {
          channelId: k.id
        })
      }), (0, r.jsxs)("form", {
        onSubmit: ep,
        className: T.form,
        children: [(0, r.jsxs)(c.xJW, {
          title: U ? S.intl.string(S.t["0HbEQ0"]) : S.intl.string(S.t["5FPBOD"]),
          className: T.topicFormItem,
          required: true,
          children: [(0, r.jsx)(s.Is, {
            className: T.textInput,
            onChange: e => H(e),
            placeholder: S.intl.string(S.t.ZwWrub),
            maxLength: I.xA,
            value: W,
            autoComplete: "off",
            inputRef: ej
          }), eh && (0, r.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "text-feedback-warning",
            className: T.warning,
            children: S.intl.string(S.t.AqTyaW)
          }), null != R ? (0, r.jsx)(c.Text, {
            color: "text-danger",
            variant: "text-xs/normal",
            className: T.warning,
            children: R.getAnyErrorMessage()
          }) : null]
        }), eb && ef ? (0, r.jsx)(w, {
          stageChannelsInGuild: em,
          channel: k,
          onSelectChannel: M
        }) : null, K && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(m.Z, {
            className: T.formItem,
            onScheduleChange: X,
            onRecurrenceChange: e => {
              let t = Y.startDate;
              null != t && ec((0, g.mF)(e, t))
            },
            schedule: Y,
            recurrenceRule: es,
            timeSelected: Q,
            onTimeChange: $
          }), null != Y.startDate && Y.startDate < a()() ? (0, r.jsx)(c.Text, {
            color: "text-danger",
            variant: "text-xs/normal",
            className: T.warning,
            children: S.intl.string(S.t.AXR5Sk)
          }) : null]
        }), U && (0, r.jsx)(c.xJW, {
          title: S.intl.string(S.t["+gRCCw"]),
          className: T.formItem,
          children: (0, r.jsx)(c.Kx8, {
            placeholder: S.intl.string(S.t["kWO/Ex"]),
            value: q,
            onChange: e => J(e),
            maxLength: C.wm
          })
        }), en ? (0, r.jsx)(_.Z, {
          sendStartNotification: er,
          setSendStartNotification: ei,
          showNotificationNewBadge: el
        }) : null, eb && !ef ? (0, r.jsx)(c.Text, {
          color: "header-secondary",
          variant: "text-xs/normal",
          className: T.channelSelection,
          children: S.intl.format(S.t["S+9O7u"], {
            stageName: e_,
            stageHook: (e, t) => (0, r.jsx)("span", {
              className: T.channelName,
              children: k.name
            }, t)
          })
        }) : null]
      })]
    }), (0, r.jsxs)(c.mzw, {
      children: [(0, r.jsx)(s.zx, {
        color: ex,
        onClick: ep,
        disabled: "" === W || null == eo || U && !eN,
        submitting: Z,
        children: ev
      }), (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: T.cancelButton,
        children: (0, r.jsx)(c.zxk, {
          variant: "secondary",
          text: S.intl.string(S.t["ETE/oK"]),
          onClick: B
        })
      })]
    })]
  })
}