/** Chunk was on 24753 **/
/** chunk id: 581355, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => A
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk668339 = require("./668339.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk933557 = require("./933557.js"),
  Chunk884746 = require("./884746.js"),
  Chunk854698 = require("./854698.js"),
  Chunk13664 = require("./13664.jsx"),
  Chunk440371 = require("./440371.jsx"),
  Chunk810788 = require("./810788.js"),
  Chunk430824 = require("./430824.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk570188 = require("./570188.js"),
  Chunk427679 = require("./427679.js"),
  Chunk930180 = require("./930180.js"),
  Chunk320596 = require("./320596.jsx"),
  Chunk289584 = require("./289584.js"),
  Chunk157925 = require("./157925.js"),
  Chunk981631 = require("./981631.js"),
  Chunk765305 = require("./765305.js"),
  Chunk190378 = require("./190378.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk785550 = require("./785550.js"),
  Chunk768982 = require("./768982.js");

function T(e) {
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

function F(e, t) {
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

function A(e) {
  let {
    channel: t,
    onClose: n,
    transitionState: i
  } = e, a = (0, c.e7)([h.Z], () => h.Z.getGuild(t.guild_id));
  return (r.useEffect(() => {
    null == a && n()
  }, [a, n]), null == a) ? null : (0, l.jsx)(G, {
    transitionState: i,
    guild: a,
    channel: t,
    onClose: n
  })
}

function B(e) {
  let {
    stageChannelsInGuild: t,
    channel: n,
    onSelectChannel: r
  } = e;
  return null == r ? null : (0, l.jsx)("div", {
    className: k.channelSelectionFormItem,
    children: (0, l.jsx)(o.d, {
      required: true,
      label: I.intl.string(I.t.S7GjDz),
      value: n.id,
      options: t.map(e => ({
        value: e.id,
        label: (0, g.F6)(e, v.default, p.Z, true)
      })),
      onChange: e => {
        let n = t.find(t => t.id === e);
        null != n && r(n)
      },
      renderOptionPrefix: () => (0, l.jsx)(u.ewx, {
        size: "custom",
        color: "currentColor",
        height: 24
      })
    })
  })
}

function G(e) {
  var t, n;
  let {
    channel: i,
    guild: o,
    onClose: h,
    onSelectChannel: p,
    transitionState: v,
    isEvent: A = false
  } = e, {
    loading: G,
    error: R,
    onSave: z
  } = (0, N.Z)(i, h), M = r.useMemo(() => _.Z.getStageInstanceByChannel(i.id), [i.id]), [q, L] = r.useState(null != (t = null == M ? true : M.topic) ? t : ""), [U, V] = r.useState(""), [J] = r.useState(A), [K, W] = r.useState({
    startDate: (0, x.ib)()
  }), [Y, H] = r.useState(false), Q = (0, y.J)(i), X = (0, y.U)(i), $ = null == M && Q && !J, [ee, et] = r.useState($ && X), en = (0, c.e7)([j.Z], () => j.Z.hasHotspot(D.v.LIVE_STAGE_NOTIFICATION_BADGE)), el = Z.j8.GUILD_ONLY, [er] = r.useState(null != (n = null == M ? true : M.privacy_level) ? n : el), [ei, ea] = r.useState(null), es = (0, S._d)(i.id), ec = (0, S.K3)(i.id), [eo, eu] = r.useState(false), ed = (0, g.ZP)(i), eg = (0, m.q)(o), em = null != p, ex = eg.length > 1;
  (0, d.ZP)(() => {
    O.default.track(C.rMx.START_STAGE_OPENED, {
      stage_instance_id: null == M ? true : M.id,
      can_start_public_stage: false,
      guild_id: i.guild_id
    })
  });
  let eb = e => {
      if (e.preventDefault(), er === Z.j8.PUBLIC && q.length < 20 && !eo) return void eu(true);
      J || null == z || z({
        topic: q,
        privacyLevel: er,
        sendStartNotification: ee
      })
    },
    ef = r.useRef(null);
  r.useEffect(() => {
    var e;
    null == (e = ef.current) || e.focus()
  }, []);
  let ej = Y && null != K.startDate && K.startDate >= a()(),
    eh = (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("div", {
        className: k.blockedUsersContainer,
        children: null == M && (es > 0 || ec > 0) && (0, l.jsx)(P.mv, {
          channelId: i.id
        })
      }), (0, l.jsxs)("form", {
        onSubmit: eb,
        className: k.form,
        children: [(0, l.jsx)(u.oil, {
          required: true,
          error: null != R ? R.getAnyErrorMessage() : true,
          label: A ? I.intl.string(I.t["0HbEQ6"]) : I.intl.string(I.t["5FPBOB"]),
          onChange: e => L(e),
          helperText: eo ? I.intl.string(I.t.AqTyaR) : true,
          placeholder: I.intl.string(I.t.ZwWruY),
          maxLength: w.xA,
          value: q,
          autoComplete: "off",
          inputRef: ef
        }), em && ex ? (0, l.jsx)(B, {
          stageChannelsInGuild: eg,
          channel: i,
          onSelectChannel: p
        }) : null, J && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(f.Z, {
            className: k.formItem,
            onScheduleChange: W,
            onRecurrenceChange: e => {
              let t = K.startDate;
              null != t && ea((0, x.mF)(e, t))
            },
            schedule: K,
            recurrenceRule: ei,
            timeSelected: Y,
            onTimeChange: H
          }), null != K.startDate && K.startDate < a()() ? (0, l.jsx)(u.Text, {
            color: "text-feedback-critical",
            variant: "text-xs/normal",
            className: k.warning,
            children: I.intl.string(I.t.AXR5Ss)
          }) : null]
        }), A && (0, l.jsx)("div", {
          className: k.formItem,
          children: (0, l.jsx)(u.Kx8, {
            label: I.intl.string(I.t["+gRCC7"]),
            placeholder: I.intl.string(I.t["kWO/E8"]),
            value: U,
            onChange: e => V(e),
            maxLength: Z.wm
          })
        }), $ ? (0, l.jsx)(b.Z, {
          sendStartNotification: ee,
          setSendStartNotification: et,
          showNotificationNewBadge: en
        }) : null, em && !ex ? (0, l.jsx)(u.Text, {
          color: "text-default",
          variant: "text-xs/normal",
          className: k.channelSelection,
          children: I.intl.format(I.t["S+9O7g"], {
            stageName: ed,
            stageHook: (e, t) => (0, l.jsx)("span", {
              className: k.channelName,
              children: i.name
            }, t)
          })
        }) : null]
      })]
    }),
    ep = {
      title: null == M ? I.intl.string(I.t.DDF0cJ) : I.intl.string(I.t.YPdQOp),
      subtitle: null == M ? I.intl.string(I.t.bqQIwa) : I.intl.string(I.t["I+9bLx"]),
      transitionState: v,
      actions: [{
        variant: "secondary",
        text: I.intl.string(I.t["ETE/oC"]),
        onClick: () => h()
      }, {
        variant: "primary",
        text: J ? I.intl.string(I.t["60lJ0C"]) : null == M ? I.intl.string(I.t.s8mM8A) : I.intl.string(I.t.K344S7),
        onClick: eb,
        disabled: "" === q || null == er || A && !ej,
        loading: G
      }],
      onClose: h
    };
  return null == M ? (0, l.jsx)(s.ExpressiveModal, F(T({
    graphic: {
      type: "image",
      src: E.Z
    }
  }, ep), {
    children: eh
  })) : (0, l.jsx)(s.Modal, F(T({}, ep), {
    children: eh
  }))
}