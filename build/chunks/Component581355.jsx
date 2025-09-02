/** Chunk was on 73736 **/
/** chunk id: 581355, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => F
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk667202 = require("./667202.jsx"),
  Chunk82659 = require("./82659.jsx"),
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

function A(e, t) {
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

function F(e) {
  let {
    channel: t,
    onClose: n,
    transitionState: i
  } = e, a = (0, o.e7)([x.Z], () => x.Z.getGuild(t.guild_id));
  return (r.useEffect(() => {
    null == a && n()
  }, [a, n]), null == a) ? null : (0, l.jsx)(J, {
    transitionState: i,
    guild: a,
    channel: t,
    onClose: n
  })
}

function G(e) {
  let {
    stageChannelsInGuild: t,
    channel: n,
    onSelectChannel: r
  } = e;
  return null == r ? null : (0, l.jsx)(u.xJW, {
    title: Z.intl.string(Z.t.S7GjDw),
    className: k.channelSelectionFormItem,
    required: true,
    children: (0, l.jsx)(u.VcW, {
      value: n.id,
      options: t.map(e => ({
        value: e.id,
        label: (0, f.F6)(e, j.default, _.Z, true)
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

function J(e) {
  var t, n;
  let {
    channel: i,
    guild: x,
    onClose: _,
    onSelectChannel: j,
    transitionState: F,
    isEvent: J = false
  } = e, {
    loading: B,
    error: R,
    onSave: L
  } = (0, I.Z)(i, _), M = r.useMemo(() => y.Z.getStageInstanceByChannel(i.id), [i.id]), [U, W] = r.useState(null != (t = null == M ? true : M.topic) ? t : ""), [H, V] = r.useState(""), [q] = r.useState(J), [K, Y] = r.useState({
    startDate: (0, b.ib)()
  }), [Q, X] = r.useState(false), z = (0, v.J)(i), $ = (0, v.U)(i), ee = null == M && z && !q, [et, en] = r.useState(ee && $), el = (0, o.e7)([h.Z], () => h.Z.hasHotspot(E.v.LIVE_STAGE_NOTIFICATION_BADGE)), er = C.j8.GUILD_ONLY, [ei] = r.useState(null != (n = null == M ? true : M.privacy_level) ? n : er), [ea, eo] = r.useState(null), ec = (0, S._d)(i.id), es = (0, S.K3)(i.id), [eu, ed] = r.useState(false), ef = (0, f.ZP)(i), eg = (0, g.q)(x), eb = null != j, em = eg.length > 1;
  (0, d.ZP)(() => {
    O.default.track(P.rMx.START_STAGE_OPENED, {
      stage_instance_id: null == M ? true : M.id,
      can_start_public_stage: false,
      guild_id: i.guild_id
    })
  });
  let ep = e => {
      if (e.preventDefault(), ei === C.j8.PUBLIC && U.length < 20 && !eu) return void ed(true);
      q || null == L || L({
        topic: U,
        privacyLevel: ei,
        sendStartNotification: et
      })
    },
    eh = r.useRef(null);
  r.useEffect(() => {
    var e;
    null == (e = eh.current) || e.focus()
  }, []);
  let ex = Q && null != K.startDate && K.startDate >= a()(),
    e_ = (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("div", {
        className: k.blockedUsersContainer,
        children: null == M && (ec > 0 || es > 0) && (0, l.jsx)(w.mv, {
          channelId: i.id
        })
      }), (0, l.jsxs)("form", {
        onSubmit: ep,
        className: k.form,
        children: [(0, l.jsxs)(u.xJW, {
          title: J ? Z.intl.string(Z.t["0HbEQ0"]) : Z.intl.string(Z.t["5FPBOD"]),
          required: true,
          children: [(0, l.jsx)(u.oil, {
            onChange: e => W(e),
            placeholder: Z.intl.string(Z.t.ZwWrub),
            maxLength: N.xA,
            value: U,
            autoComplete: "off",
            inputRef: eh
          }), eu && (0, l.jsx)(u.Text, {
            variant: "text-xs/normal",
            color: "text-feedback-warning",
            className: k.warning,
            children: Z.intl.string(Z.t.AqTyaW)
          }), null != R ? (0, l.jsx)(u.Text, {
            color: "text-danger",
            variant: "text-xs/normal",
            className: k.warning,
            children: R.getAnyErrorMessage()
          }) : null]
        }), eb && em ? (0, l.jsx)(G, {
          stageChannelsInGuild: eg,
          channel: i,
          onSelectChannel: j
        }) : null, q && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(p.Z, {
            className: k.formItem,
            onScheduleChange: Y,
            onRecurrenceChange: e => {
              let t = K.startDate;
              null != t && eo((0, b.mF)(e, t))
            },
            schedule: K,
            recurrenceRule: ea,
            timeSelected: Q,
            onTimeChange: X
          }), null != K.startDate && K.startDate < a()() ? (0, l.jsx)(u.Text, {
            color: "text-danger",
            variant: "text-xs/normal",
            className: k.warning,
            children: Z.intl.string(Z.t.AXR5Sk)
          }) : null]
        }), J && (0, l.jsx)(u.xJW, {
          title: Z.intl.string(Z.t["+gRCCw"]),
          className: k.formItem,
          children: (0, l.jsx)(u.Kx8, {
            placeholder: Z.intl.string(Z.t["kWO/Ex"]),
            value: H,
            onChange: e => V(e),
            maxLength: C.wm
          })
        }), ee ? (0, l.jsx)(m.Z, {
          sendStartNotification: et,
          setSendStartNotification: en,
          showNotificationNewBadge: el
        }) : null, eb && !em ? (0, l.jsx)(u.Text, {
          color: "header-secondary",
          variant: "text-xs/normal",
          className: k.channelSelection,
          children: Z.intl.format(Z.t["S+9O7u"], {
            stageName: ef,
            stageHook: (e, t) => (0, l.jsx)("span", {
              className: k.channelName,
              children: i.name
            }, t)
          })
        }) : null]
      })]
    }),
    ej = {
      title: null == M ? Z.intl.string(Z.t.DDF0cH) : Z.intl.string(Z.t.YPdQOj),
      subtitle: null == M ? Z.intl.string(Z.t.bqQIwc) : Z.intl.string(Z.t["I+9bLy"]),
      transitionState: F,
      actions: [{
        variant: "secondary",
        text: Z.intl.string(Z.t["ETE/oK"]),
        onClick: () => _()
      }, {
        variant: "primary",
        text: q ? Z.intl.string(Z.t["60lJ0N"]) : null == M ? Z.intl.string(Z.t.s8mM8P) : Z.intl.string(Z.t.K344S0),
        onClick: ep,
        disabled: "" === U || null == ei || J && !ex,
        loading: B
      }],
      onClose: _
    };
  return null == M ? (0, l.jsx)(c.I, A(T({
    graphic: {
      type: "image",
      src: D.Z
    }
  }, ej), {
    children: e_
  })) : (0, l.jsx)(s.Modal, A(T({}, ej), {
    children: e_
  }))
}