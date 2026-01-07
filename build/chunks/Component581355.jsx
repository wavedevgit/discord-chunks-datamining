/** Chunk was on 24753 **/
/** chunk id: 581355, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => T
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
  Chunk440371 = require("./440371.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk570188 = require("./570188.js"),
  Chunk427679 = require("./427679.js"),
  Chunk930180 = require("./930180.js"),
  Chunk320596 = require("./320596.jsx"),
  Chunk937096 = require("./937096.jsx"),
  Chunk289584 = require("./289584.js"),
  Chunk157925 = require("./157925.js"),
  Chunk981631 = require("./981631.js"),
  Chunk765305 = require("./765305.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk452594 = require("./452594.js"),
  Chunk787068 = require("./787068.js");

function I(e) {
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

function E(e, t) {
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

function T(e) {
  let {
    channel: t,
    onClose: n,
    transitionState: i
  } = e, a = (0, s.e7)([g.Z], () => g.Z.getGuild(t.guild_id));
  return (l.useEffect(() => {
    null == a && n()
  }, [a, n]), null == a) ? null : (0, r.jsx)(R, {
    transitionState: i,
    guild: a,
    channel: t,
    onClose: n
  })
}

function F(e) {
  let {
    stageChannelsInGuild: t,
    channel: n,
    onSelectChannel: l
  } = e;
  return null == l ? null : (0, r.jsx)("div", {
    className: D.channelSelectionFormItem,
    children: (0, r.jsx)(o.d, {
      required: true,
      label: C.intl.string(C.t.S7GjDz),
      value: n.id,
      options: t.map(e => ({
        value: e.id,
        label: (0, f.F6)(e, h.default, j.Z, true)
      })),
      onChange: e => {
        let n = t.find(t => t.id === e);
        null != n && l(n)
      },
      renderOptionPrefix: () => (0, r.jsx)(u.ewx, {
        size: "custom",
        color: "currentColor",
        height: 24
      })
    })
  })
}

function R(e) {
  var t, n;
  let {
    channel: i,
    guild: s,
    onClose: o,
    onSelectChannel: g,
    transitionState: j,
    isEvent: h = false
  } = e, {
    loading: T,
    error: R,
    onSave: A
  } = (0, N.Z)(i, o), G = l.useMemo(() => O.Z.getStageInstanceByChannel(i.id), [i.id]), [M, B] = l.useState(null != (t = null == G ? true : G.topic) ? t : ""), [z, q] = l.useState(""), [L] = l.useState(h), [U, J] = l.useState({
    startDate: (0, b.ib)()
  }), [V, K] = l.useState(false), W = (0, v.J)(i), Y = (0, v.U)(i), H = null == G && W && !L, [Q, X] = l.useState(H && Y), $ = w.j8.GUILD_ONLY, [ee] = l.useState(null != (n = null == G ? true : G.privacy_level) ? n : $), [et, en] = l.useState(null), er = (0, y._d)(i.id), el = (0, y.K3)(i.id), [ei, ea] = l.useState(false), ec = (0, f.ZP)(i), es = (0, m.q)(s), eo = null != g, eu = es.length > 1;
  (0, d.ZP)(() => {
    p.default.track(k.rMx.START_STAGE_OPENED, {
      stage_instance_id: null == G ? true : G.id,
      can_start_public_stage: false,
      guild_id: i.guild_id
    })
  });
  let ed = e => {
      if (e.preventDefault(), ee === w.j8.PUBLIC && M.length < 20 && !ei) return void ea(true);
      L || null == A || A({
        topic: M,
        privacyLevel: ee,
        sendStartNotification: Q
      })
    },
    ef = l.useRef(null);
  l.useEffect(() => {
    var e;
    null == (e = ef.current) || e.focus()
  }, []);
  let em = V && null != U.startDate && U.startDate >= a()(),
    eb = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: D.blockedUsersContainer,
        children: null == G && (er > 0 || el > 0) && (0, r.jsx)(P.mv, {
          channelId: i.id
        })
      }), (0, r.jsxs)("form", {
        onSubmit: ed,
        className: D.form,
        children: [(0, r.jsx)(u.oil, {
          required: true,
          error: null != R ? R.getAnyErrorMessage() : true,
          label: h ? C.intl.string(C.t["0HbEQ6"]) : C.intl.string(C.t["5FPBOB"]),
          onChange: e => B(e),
          helperText: ei ? C.intl.string(C.t.AqTyaR) : true,
          placeholder: C.intl.string(C.t.ZwWruY),
          maxLength: _.xA,
          value: M,
          autoComplete: "off",
          inputRef: ef
        }), eo && eu ? (0, r.jsx)(F, {
          stageChannelsInGuild: es,
          channel: i,
          onSelectChannel: g
        }) : null, L && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(x.Z, {
            className: D.formItem,
            onScheduleChange: J,
            onRecurrenceChange: e => {
              let t = U.startDate;
              null != t && en((0, b.mF)(e, t))
            },
            schedule: U,
            recurrenceRule: et,
            timeSelected: V,
            onTimeChange: K
          }), null != U.startDate && U.startDate < a()() ? (0, r.jsx)(u.Text, {
            color: "text-feedback-critical",
            variant: "text-xs/normal",
            className: D.warning,
            children: C.intl.string(C.t.AXR5Ss)
          }) : null]
        }), h && (0, r.jsx)("div", {
          className: D.formItem,
          children: (0, r.jsx)(u.Kx8, {
            label: C.intl.string(C.t["+gRCC7"]),
            placeholder: C.intl.string(C.t["kWO/E8"]),
            value: z,
            onChange: e => q(e),
            maxLength: w.wm
          })
        }), eo && !eu ? (0, r.jsx)(u.Text, {
          color: "text-default",
          variant: "text-xs/normal",
          className: D.channelSelection,
          children: C.intl.format(C.t["S+9O7g"], {
            stageName: ec,
            stageHook: (e, t) => (0, r.jsx)("span", {
              className: D.channelName,
              children: i.name
            }, t)
          })
        }) : null, (0, r.jsx)(S.Z, {
          className: D.ageVerificationNotice
        })]
      })]
    }),
    ex = {
      onClose: o,
      title: null == G ? C.intl.string(C.t.DDF0cJ) : C.intl.string(C.t.YPdQOp),
      subtitle: null == G ? C.intl.string(C.t.bqQIwa) : C.intl.string(C.t["I+9bLx"]),
      transitionState: j,
      actions: [{
        variant: "secondary",
        text: C.intl.string(C.t["ETE/oC"]),
        onClick: () => o()
      }, {
        variant: "primary",
        text: L ? C.intl.string(C.t["60lJ0C"]) : null == G ? C.intl.string(C.t.s8mM8A) : C.intl.string(C.t.K344S7),
        onClick: ed,
        disabled: "" === M || null == ee || h && !em,
        loading: T
      }],
      actionBarInput: H ? (0, r.jsxs)(u.P3F, {
        onClick: () => X(!Q),
        className: D.notificationToggle,
        children: [(0, r.jsx)(u.FZ5, {
          checked: Q
        }), (0, r.jsx)(u.Text, {
          color: "text-default",
          variant: "text-sm/normal",
          children: C.intl.string(C.t["Pe+Pwp"])
        })]
      }) : true
    };
  return null == G ? (0, r.jsx)(c.ExpressiveModal, E(I({
    graphic: {
      type: "image",
      src: Z.Z
    }
  }, ex), {
    children: eb
  })) : (0, r.jsx)(c.Modal, E(I({}, ex), {
    children: eb
  }))
}