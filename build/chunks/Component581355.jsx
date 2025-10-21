/** Chunk was on 24753 **/
/** chunk id: 581355, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => F
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk933557 = require("./933557.js"),
  Chunk884746 = require("./884746.js"),
  Chunk954313 = require("./954313.js"),
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
  Chunk605838 = require("./605838.js"),
  Chunk768982 = require("./768982.js");

function E(e) {
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
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function F(e) {
  let {
    channel: t,
    onClose: n,
    transitionState: i
  } = e, a = (0, c.e7)([h.Z], () => h.Z.getGuild(t.guild_id));
  return (l.useEffect(() => {
    null == a && n()
  }, [a, n]), null == a) ? null : (0, r.jsx)(G, {
    transitionState: i,
    guild: a,
    channel: t,
    onClose: n
  })
}

function A(e) {
  let {
    stageChannelsInGuild: t,
    channel: n,
    onSelectChannel: l
  } = e;
  return null == l ? null : (0, r.jsx)("div", {
    className: k.channelSelectionFormItem,
    children: (0, r.jsx)(o.VcW, {
      required: true,
      label: D.intl.string(D.t.S7GjDw),
      value: n.id,
      options: t.map(e => ({
        value: e.id,
        label: (0, d.F6)(e, p.default, j.Z, true)
      })),
      onChange: e => {
        let n = t.find(t => t.id === e);
        null != n && l(n)
      },
      renderOptionPrefix: () => (0, r.jsx)(o.ewx, {
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
    guild: h,
    onClose: j,
    onSelectChannel: p,
    transitionState: F,
    isEvent: G = false
  } = e, {
    loading: M,
    error: R,
    onSave: B
  } = (0, P.Z)(i, j), q = l.useMemo(() => y.Z.getStageInstanceByChannel(i.id), [i.id]), [z, L] = l.useState(null != (t = null == q ? true : q.topic) ? t : ""), [U, V] = l.useState(""), [K] = l.useState(G), [W, J] = l.useState({
    startDate: (0, m.ib)()
  }), [H, Q] = l.useState(false), Y = (0, O.J)(i), X = (0, O.U)(i), $ = null == q && Y && !K, [ee, et] = l.useState($ && X), en = (0, c.e7)([f.Z], () => f.Z.hasHotspot(C.v.LIVE_STAGE_NOTIFICATION_BADGE)), er = Z.j8.GUILD_ONLY, [el] = l.useState(null != (n = null == q ? true : q.privacy_level) ? n : er), [ei, ea] = l.useState(null), es = (0, _._d)(i.id), ec = (0, _.K3)(i.id), [eo, eu] = l.useState(false), ed = (0, d.ZP)(i), eg = (0, g.q)(h), em = null != p, ex = eg.length > 1;
  (0, u.ZP)(() => {
    v.default.track(w.rMx.START_STAGE_OPENED, {
      stage_instance_id: null == q ? true : q.id,
      can_start_public_stage: false,
      guild_id: i.guild_id
    })
  });
  let eb = e => {
      if (e.preventDefault(), el === Z.j8.PUBLIC && z.length < 20 && !eo) return void eu(true);
      K || null == B || B({
        topic: z,
        privacyLevel: el,
        sendStartNotification: ee
      })
    },
    ef = l.useRef(null);
  l.useEffect(() => {
    var e;
    null == (e = ef.current) || e.focus()
  }, []);
  let eh = H && null != W.startDate && W.startDate >= a()(),
    ej = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: k.blockedUsersContainer,
        children: null == q && (es > 0 || ec > 0) && (0, r.jsx)(S.mv, {
          channelId: i.id
        })
      }), (0, r.jsxs)("form", {
        onSubmit: eb,
        className: k.form,
        children: [(0, r.jsx)(o.oil, {
          required: true,
          error: null != R ? R.getAnyErrorMessage() : true,
          label: G ? D.intl.string(D.t["0HbEQ0"]) : D.intl.string(D.t["5FPBOD"]),
          onChange: e => L(e),
          helperText: eo ? D.intl.string(D.t.AqTyaW) : true,
          placeholder: D.intl.string(D.t.ZwWrub),
          maxLength: N.xA,
          value: z,
          autoComplete: "off",
          inputRef: ef
        }), em && ex ? (0, r.jsx)(A, {
          stageChannelsInGuild: eg,
          channel: i,
          onSelectChannel: p
        }) : null, K && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(b.Z, {
            className: k.formItem,
            onScheduleChange: J,
            onRecurrenceChange: e => {
              let t = W.startDate;
              null != t && ea((0, m.mF)(e, t))
            },
            schedule: W,
            recurrenceRule: ei,
            timeSelected: H,
            onTimeChange: Q
          }), null != W.startDate && W.startDate < a()() ? (0, r.jsx)(o.Text, {
            color: "text-danger",
            variant: "text-xs/normal",
            className: k.warning,
            children: D.intl.string(D.t.AXR5Sk)
          }) : null]
        }), G && (0, r.jsx)("div", {
          className: k.formItem,
          children: (0, r.jsx)(o.Kx8, {
            label: D.intl.string(D.t["+gRCCw"]),
            placeholder: D.intl.string(D.t["kWO/Ex"]),
            value: U,
            onChange: e => V(e),
            maxLength: Z.wm
          })
        }), $ ? (0, r.jsx)(x.Z, {
          sendStartNotification: ee,
          setSendStartNotification: et,
          showNotificationNewBadge: en
        }) : null, em && !ex ? (0, r.jsx)(o.Text, {
          color: "header-secondary",
          variant: "text-xs/normal",
          className: k.channelSelection,
          children: D.intl.format(D.t["S+9O7u"], {
            stageName: ed,
            stageHook: (e, t) => (0, r.jsx)("span", {
              className: k.channelName,
              children: i.name
            }, t)
          })
        }) : null]
      })]
    }),
    ep = {
      title: null == q ? D.intl.string(D.t.DDF0cH) : D.intl.string(D.t.YPdQOj),
      subtitle: null == q ? D.intl.string(D.t.bqQIwc) : D.intl.string(D.t["I+9bLy"]),
      transitionState: F,
      actions: [{
        variant: "secondary",
        text: D.intl.string(D.t["ETE/oK"]),
        onClick: () => j()
      }, {
        variant: "primary",
        text: K ? D.intl.string(D.t["60lJ0N"]) : null == q ? D.intl.string(D.t.s8mM8P) : D.intl.string(D.t.K344S0),
        onClick: eb,
        disabled: "" === z || null == el || G && !eh,
        loading: M
      }],
      onClose: j
    };
  return null == q ? (0, r.jsx)(s.ExpressiveModal, T(E({
    graphic: {
      type: "image",
      src: I.Z
    }
  }, ep), {
    children: ej
  })) : (0, r.jsx)(s.Modal, T(E({}, ep), {
    children: ej
  }))
}