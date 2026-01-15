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

function T(e) {
  let {
    channel: t,
    onClose: n,
    transitionState: i
  } = e, a = (0, c.e7)([b.Z], () => b.Z.getGuild(t.guild_id));
  return (r.useEffect(() => {
    null == a && n()
  }, [a, n]), null == a) ? null : (0, l.jsx)(R, {
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
    onSelectChannel: r
  } = e;
  return null == r ? null : (0, l.jsx)("div", {
    className: k.channelSelectionFormItem,
    children: (0, l.jsx)(o.d, {
      required: true,
      label: Z.intl.string(Z.t.S7GjDz),
      value: n.id,
      options: t.map(e => ({
        value: e.id,
        label: (0, f.F6)(e, h.default, j.Z, true)
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

function R(e) {
  var t, n;
  let {
    channel: i,
    guild: c,
    onClose: o,
    onSelectChannel: b,
    transitionState: j,
    isEvent: h = false
  } = e, {
    loading: T,
    error: R,
    onSave: A
  } = (0, N.Z)(i, o), G = r.useMemo(() => O.Z.getStageInstanceByChannel(i.id), [i.id]), [z, M] = r.useState(null != (t = null == G ? true : G.topic) ? t : ""), [B, q] = r.useState(""), [L] = r.useState(h), [U, J] = r.useState({
    startDate: (0, x.ib)()
  }), [V, K] = r.useState(false), W = (0, v.J)(i), Y = (0, v.U)(i), H = null == G && W && !L, [Q, X] = r.useState(H && Y), $ = w.j8.GUILD_ONLY, [ee] = r.useState(null != (n = null == G ? true : G.privacy_level) ? n : $), [et, en] = r.useState(null), el = (0, y._d)(i.id), er = (0, y.K3)(i.id), [ei, ea] = r.useState(false), es = (0, f.ZP)(i), ec = (0, m.q)(c), eo = null != b, eu = ec.length > 1;
  (0, d.ZP)(() => {
    p.default.track(C.rMx.START_STAGE_OPENED, {
      stage_instance_id: null == G ? true : G.id,
      can_start_public_stage: false,
      guild_id: i.guild_id
    })
  });
  let ed = e => {
      if (e.preventDefault(), ee === w.j8.PUBLIC && z.length < 20 && !ei) return void ea(true);
      L || null == A || A({
        topic: z,
        privacyLevel: ee,
        sendStartNotification: Q
      })
    },
    ef = r.useRef(null);
  r.useEffect(() => {
    var e;
    null == (e = ef.current) || e.focus()
  }, []);
  let em = V && null != U.startDate && U.startDate >= a()(),
    ex = (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("div", {
        className: k.blockedUsersContainer,
        children: null == G && (el > 0 || er > 0) && (0, l.jsx)(P.mv, {
          channelId: i.id
        })
      }), (0, l.jsxs)("form", {
        onSubmit: ed,
        className: k.form,
        children: [(0, l.jsx)(u.oil, {
          required: true,
          error: null != R ? R.getAnyErrorMessage() : true,
          label: h ? Z.intl.string(Z.t["0HbEQ6"]) : Z.intl.string(Z.t["5FPBOB"]),
          onChange: e => M(e),
          helperText: ei ? Z.intl.string(Z.t.AqTyaR) : true,
          placeholder: Z.intl.string(Z.t.ZwWruY),
          maxLength: _.xA,
          value: z,
          autoComplete: "off",
          inputRef: ef
        }), eo && eu ? (0, l.jsx)(F, {
          stageChannelsInGuild: ec,
          channel: i,
          onSelectChannel: b
        }) : null, L && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(g.Z, {
            className: k.formItem,
            onScheduleChange: J,
            onRecurrenceChange: e => {
              let t = U.startDate;
              null != t && en((0, x.mF)(e, t))
            },
            schedule: U,
            recurrenceRule: et,
            timeSelected: V,
            onTimeChange: K
          }), null != U.startDate && U.startDate < a()() ? (0, l.jsx)(u.Text, {
            color: "text-feedback-critical",
            variant: "text-xs/normal",
            className: k.warning,
            children: Z.intl.string(Z.t.AXR5Ss)
          }) : null]
        }), h && (0, l.jsx)("div", {
          className: k.formItem,
          children: (0, l.jsx)(u.Kx8, {
            label: Z.intl.string(Z.t["+gRCC7"]),
            placeholder: Z.intl.string(Z.t["kWO/E8"]),
            value: B,
            onChange: e => q(e),
            maxLength: w.wm
          })
        }), eo && !eu ? (0, l.jsx)(u.Text, {
          color: "text-default",
          variant: "text-xs/normal",
          className: k.channelSelection,
          children: Z.intl.format(Z.t["S+9O7g"], {
            stageName: es,
            stageHook: (e, t) => (0, l.jsx)("span", {
              className: k.channelName,
              children: i.name
            }, t)
          })
        }) : null, (0, l.jsx)(S.Z, {
          className: k.ageVerificationNotice
        })]
      })]
    }),
    eg = {
      onClose: o,
      title: null == G ? Z.intl.string(Z.t.DDF0cJ) : Z.intl.string(Z.t.YPdQOp),
      subtitle: null == G ? Z.intl.string(Z.t.bqQIwa) : Z.intl.string(Z.t["I+9bLx"]),
      transitionState: j,
      actions: [{
        variant: "secondary",
        text: Z.intl.string(Z.t["ETE/oC"]),
        onClick: () => o()
      }, {
        variant: "primary",
        text: L ? Z.intl.string(Z.t["60lJ0C"]) : null == G ? Z.intl.string(Z.t.s8mM8A) : Z.intl.string(Z.t.K344S7),
        onClick: ed,
        disabled: "" === z || null == ee || h && !em,
        loading: T
      }],
      actionBarInput: H ? (0, l.jsxs)(u.P3F, {
        onClick: () => X(!Q),
        className: k.notificationToggle,
        children: [(0, l.jsx)(u.FZ5, {
          checked: Q
        }), (0, l.jsx)(u.Text, {
          color: "text-default",
          variant: "text-sm/normal",
          children: Z.intl.string(Z.t["Pe+Pwp"])
        })]
      }) : true
    };
  return null == G ? (0, l.jsx)(s.ExpressiveModal, E(I({
    graphic: {
      type: "image",
      src: D.Z
    }
  }, eg), {
    children: ex
  })) : (0, l.jsx)(s.Modal, E(I({}, eg), {
    children: ex
  }))
}