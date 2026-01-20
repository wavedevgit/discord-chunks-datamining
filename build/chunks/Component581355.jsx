/** Chunk was on 24753 **/
/** chunk id: 581355, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => E
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
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

function D(e) {
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

function I(e, t) {
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

function E(e) {
  let {
    channel: t,
    onClose: n,
    transitionState: i
  } = e, a = (0, s.e7)([x.Z], () => x.Z.getGuild(t.guild_id));
  return (r.useEffect(() => {
    null == a && n()
  }, [a, n]), null == a) ? null : (0, l.jsx)(F, {
    transitionState: i,
    guild: a,
    channel: t,
    onClose: n
  })
}

function T(e) {
  let {
    stageChannelsInGuild: t,
    channel: n,
    onSelectChannel: r
  } = e;
  return null == r ? null : (0, l.jsx)("div", {
    className: Z.channelSelectionFormItem,
    children: (0, l.jsx)(o.VcW, {
      selectionMode: "single",
      required: true,
      label: w.intl.string(w.t.S7GjDz),
      value: n.id,
      options: t.map(e => ({
        id: e.id,
        value: e.id,
        label: (0, d.F6)(e, j.default, b.Z, true),
        leading: (0, l.jsx)(o.ewx, {
          size: "custom",
          color: "currentColor",
          height: 24
        })
      })),
      onSelectionChange: e => {
        let n = t.find(t => t.id === e);
        null != n && r(n)
      }
    })
  })
}

function F(e) {
  var t, n;
  let {
    channel: i,
    guild: s,
    onClose: x,
    onSelectChannel: b,
    transitionState: j,
    isEvent: E = false
  } = e, {
    loading: F,
    error: R,
    onSave: A
  } = (0, S.Z)(i, x), G = r.useMemo(() => v.Z.getStageInstanceByChannel(i.id), [i.id]), [M, z] = r.useState(null != (t = null == G ? true : G.topic) ? t : ""), [B, q] = r.useState(""), [L] = r.useState(E), [U, J] = r.useState({
    startDate: (0, m.ib)()
  }), [V, W] = r.useState(false), K = (0, p.J)(i), Y = (0, p.U)(i), H = null == G && K && !L, [Q, X] = r.useState(H && Y), $ = C.j8.GUILD_ONLY, [ee] = r.useState(null != (n = null == G ? true : G.privacy_level) ? n : $), [et, en] = r.useState(null), el = (0, O._d)(i.id), er = (0, O.K3)(i.id), [ei, ea] = r.useState(false), ec = (0, d.ZP)(i), es = (0, f.q)(s), eo = null != b, eu = es.length > 1;
  (0, u.ZP)(() => {
    h.default.track(_.rMx.START_STAGE_OPENED, {
      stage_instance_id: null == G ? true : G.id,
      can_start_public_stage: false,
      guild_id: i.guild_id
    })
  });
  let ed = e => {
      if (e.preventDefault(), ee === C.j8.PUBLIC && M.length < 20 && !ei) return void ea(true);
      L || null == A || A({
        topic: M,
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
    eg = (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("div", {
        className: Z.blockedUsersContainer,
        children: null == G && (el > 0 || er > 0) && (0, l.jsx)(y.mv, {
          channelId: i.id
        })
      }), (0, l.jsxs)("form", {
        onSubmit: ed,
        className: Z.form,
        children: [(0, l.jsx)(o.oil, {
          required: true,
          error: null != R ? R.getAnyErrorMessage() : true,
          label: E ? w.intl.string(w.t["0HbEQ6"]) : w.intl.string(w.t["5FPBOB"]),
          onChange: e => z(e),
          helperText: ei ? w.intl.string(w.t.AqTyaR) : true,
          placeholder: w.intl.string(w.t.ZwWruY),
          maxLength: N.xA,
          value: M,
          autoComplete: "off",
          inputRef: ef
        }), eo && eu ? (0, l.jsx)(T, {
          stageChannelsInGuild: es,
          channel: i,
          onSelectChannel: b
        }) : null, L && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(g.Z, {
            className: Z.formItem,
            onScheduleChange: J,
            onRecurrenceChange: e => {
              let t = U.startDate;
              null != t && en((0, m.mF)(e, t))
            },
            schedule: U,
            recurrenceRule: et,
            timeSelected: V,
            onTimeChange: W
          }), null != U.startDate && U.startDate < a()() ? (0, l.jsx)(o.Text, {
            color: "text-feedback-critical",
            variant: "text-xs/normal",
            className: Z.warning,
            children: w.intl.string(w.t.AXR5Ss)
          }) : null]
        }), E && (0, l.jsx)("div", {
          className: Z.formItem,
          children: (0, l.jsx)(o.Kx8, {
            label: w.intl.string(w.t["+gRCC7"]),
            placeholder: w.intl.string(w.t["kWO/E8"]),
            value: B,
            onChange: e => q(e),
            maxLength: C.wm
          })
        }), eo && !eu ? (0, l.jsx)(o.Text, {
          color: "text-default",
          variant: "text-xs/normal",
          className: Z.channelSelection,
          children: w.intl.format(w.t["S+9O7g"], {
            stageName: ec,
            stageHook: (e, t) => (0, l.jsx)("span", {
              className: Z.channelName,
              children: i.name
            }, t)
          })
        }) : null, (0, l.jsx)(P.Z, {
          className: Z.ageVerificationNotice
        })]
      })]
    }),
    ex = {
      onClose: x,
      title: null == G ? w.intl.string(w.t.DDF0cJ) : w.intl.string(w.t.YPdQOp),
      subtitle: null == G ? w.intl.string(w.t.bqQIwa) : w.intl.string(w.t["I+9bLx"]),
      transitionState: j,
      actions: [{
        variant: "secondary",
        text: w.intl.string(w.t["ETE/oC"]),
        onClick: () => x()
      }, {
        variant: "primary",
        text: L ? w.intl.string(w.t["60lJ0C"]) : null == G ? w.intl.string(w.t.s8mM8A) : w.intl.string(w.t.K344S7),
        onClick: ed,
        disabled: "" === M || null == ee || E && !em,
        loading: F
      }],
      actionBarInput: H ? (0, l.jsxs)(o.P3F, {
        onClick: () => X(!Q),
        className: Z.notificationToggle,
        children: [(0, l.jsx)(o.FZ5, {
          checked: Q
        }), (0, l.jsx)(o.Text, {
          color: "text-default",
          variant: "text-sm/normal",
          children: w.intl.string(w.t["Pe+Pwp"])
        })]
      }) : true
    };
  return null == G ? (0, l.jsx)(c.ExpressiveModal, I(D({
    graphic: {
      type: "image",
      src: k.Z
    }
  }, ex), {
    children: eg
  })) : (0, l.jsx)(c.Modal, I(D({}, ex), {
    children: eg
  }))
}