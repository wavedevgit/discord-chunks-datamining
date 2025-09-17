/** Chunk was on 66200 **/
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
  Chunk605838 = require("./605838.js"),
  Chunk787068 = require("./787068.js");

function Z(e) {
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
  }, [a, n]), null == a) ? null : (0, l.jsx)(B, {
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
    title: D.intl.string(D.t.S7GjDw),
    className: k.channelSelectionFormItem,
    required: true,
    children: (0, l.jsx)(u.VcW, {
      value: n.id,
      options: t.map(e => ({
        value: e.id,
        label: (0, g.F6)(e, j.default, _.Z, true)
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

function B(e) {
  var t, n;
  let {
    channel: i,
    guild: x,
    onClose: _,
    onSelectChannel: j,
    transitionState: F,
    isEvent: B = false
  } = e, {
    loading: M,
    error: R,
    onSave: J
  } = (0, N.Z)(i, _), L = r.useMemo(() => y.Z.getStageInstanceByChannel(i.id), [i.id]), [U, W] = r.useState(null != (t = null == L ? true : L.topic) ? t : ""), [q, H] = r.useState(""), [V] = r.useState(B), [K, Y] = r.useState({
    startDate: (0, b.ib)()
  }), [Q, z] = r.useState(false), X = (0, v.J)(i), $ = (0, v.U)(i), ee = null == L && X && !V, [et, en] = r.useState(ee && $), el = (0, o.e7)([p.Z], () => p.Z.hasHotspot(E.v.LIVE_STAGE_NOTIFICATION_BADGE)), er = C.j8.GUILD_ONLY, [ei] = r.useState(null != (n = null == L ? true : L.privacy_level) ? n : er), [ea, eo] = r.useState(null), ec = (0, S._d)(i.id), es = (0, S.K3)(i.id), [eu, ed] = r.useState(false), eg = (0, g.ZP)(i), ef = (0, f.q)(x), eb = null != j, em = ef.length > 1;
  (0, d.ZP)(() => {
    O.default.track(I.rMx.START_STAGE_OPENED, {
      stage_instance_id: null == L ? true : L.id,
      can_start_public_stage: false,
      guild_id: i.guild_id
    })
  });
  let eh = e => {
      if (e.preventDefault(), ei === C.j8.PUBLIC && U.length < 20 && !eu) return void ed(true);
      V || null == J || J({
        topic: U,
        privacyLevel: ei,
        sendStartNotification: et
      })
    },
    ep = r.useRef(null);
  r.useEffect(() => {
    var e;
    null == (e = ep.current) || e.focus()
  }, []);
  let ex = Q && null != K.startDate && K.startDate >= a()(),
    e_ = (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("div", {
        className: k.blockedUsersContainer,
        children: null == L && (ec > 0 || es > 0) && (0, l.jsx)(w.mv, {
          channelId: i.id
        })
      }), (0, l.jsxs)("form", {
        onSubmit: eh,
        className: k.form,
        children: [(0, l.jsxs)(u.xJW, {
          title: B ? D.intl.string(D.t["0HbEQ0"]) : D.intl.string(D.t["5FPBOD"]),
          required: true,
          children: [(0, l.jsx)(u.oil, {
            onChange: e => W(e),
            placeholder: D.intl.string(D.t.ZwWrub),
            maxLength: P.xA,
            value: U,
            autoComplete: "off",
            inputRef: ep
          }), eu && (0, l.jsx)(u.Text, {
            variant: "text-xs/normal",
            color: "text-feedback-warning",
            className: k.warning,
            children: D.intl.string(D.t.AqTyaW)
          }), null != R ? (0, l.jsx)(u.Text, {
            color: "text-danger",
            variant: "text-xs/normal",
            className: k.warning,
            children: R.getAnyErrorMessage()
          }) : null]
        }), eb && em ? (0, l.jsx)(G, {
          stageChannelsInGuild: ef,
          channel: i,
          onSelectChannel: j
        }) : null, V && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(h.Z, {
            className: k.formItem,
            onScheduleChange: Y,
            onRecurrenceChange: e => {
              let t = K.startDate;
              null != t && eo((0, b.mF)(e, t))
            },
            schedule: K,
            recurrenceRule: ea,
            timeSelected: Q,
            onTimeChange: z
          }), null != K.startDate && K.startDate < a()() ? (0, l.jsx)(u.Text, {
            color: "text-danger",
            variant: "text-xs/normal",
            className: k.warning,
            children: D.intl.string(D.t.AXR5Sk)
          }) : null]
        }), B && (0, l.jsx)(u.xJW, {
          title: D.intl.string(D.t["+gRCCw"]),
          className: k.formItem,
          children: (0, l.jsx)(u.Kx8, {
            placeholder: D.intl.string(D.t["kWO/Ex"]),
            value: q,
            onChange: e => H(e),
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
          children: D.intl.format(D.t["S+9O7u"], {
            stageName: eg,
            stageHook: (e, t) => (0, l.jsx)("span", {
              className: k.channelName,
              children: i.name
            }, t)
          })
        }) : null]
      })]
    }),
    ej = {
      title: null == L ? D.intl.string(D.t.DDF0cH) : D.intl.string(D.t.YPdQOj),
      subtitle: null == L ? D.intl.string(D.t.bqQIwc) : D.intl.string(D.t["I+9bLy"]),
      transitionState: F,
      actions: [{
        variant: "secondary",
        text: D.intl.string(D.t["ETE/oK"]),
        onClick: () => _()
      }, {
        variant: "primary",
        text: V ? D.intl.string(D.t["60lJ0N"]) : null == L ? D.intl.string(D.t.s8mM8P) : D.intl.string(D.t.K344S0),
        onClick: eh,
        disabled: "" === U || null == ei || B && !ex,
        loading: M
      }],
      onClose: _
    };
  return null == L ? (0, l.jsx)(c.I, A(Z({
    graphic: {
      type: "image",
      src: T.Z
    }
  }, ej), {
    children: e_
  })) : (0, l.jsx)(s.Modal, A(Z({}, ej), {
    children: e_
  }))
}