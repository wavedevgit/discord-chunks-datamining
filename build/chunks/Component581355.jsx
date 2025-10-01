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
  Chunk785550 = require("./785550.js"),
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
  } = e, a = (0, o.e7)([j.Z], () => j.Z.getGuild(t.guild_id));
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
  return null == l ? null : (0, r.jsx)(c.xJW, {
    title: C.intl.string(C.t.S7GjDw),
    className: k.channelSelectionFormItem,
    required: true,
    children: (0, r.jsx)(c.VcW, {
      value: n.id,
      options: t.map(e => ({
        value: e.id,
        label: (0, d.F6)(e, p.default, h.Z, true)
      })),
      onChange: e => {
        let n = t.find(t => t.id === e);
        null != n && l(n)
      },
      renderOptionPrefix: () => (0, r.jsx)(c.ewx, {
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
    guild: j,
    onClose: h,
    onSelectChannel: p,
    transitionState: F,
    isEvent: G = false
  } = e, {
    loading: M,
    error: R,
    onSave: B
  } = (0, S.Z)(i, h), q = l.useMemo(() => y.Z.getStageInstanceByChannel(i.id), [i.id]), [z, L] = l.useState(null != (t = null == q ? true : q.topic) ? t : ""), [U, V] = l.useState(""), [W] = l.useState(G), [J, K] = l.useState({
    startDate: (0, m.ib)()
  }), [H, Q] = l.useState(false), Y = (0, v.J)(i), X = (0, v.U)(i), $ = null == q && Y && !W, [ee, et] = l.useState($ && X), en = (0, o.e7)([f.Z], () => f.Z.hasHotspot(Z.v.LIVE_STAGE_NOTIFICATION_BADGE)), er = D.j8.GUILD_ONLY, [el] = l.useState(null != (n = null == q ? true : q.privacy_level) ? n : er), [ei, ea] = l.useState(null), es = (0, P._d)(i.id), eo = (0, P.K3)(i.id), [ec, eu] = l.useState(false), ed = (0, d.ZP)(i), eg = (0, g.q)(j), em = null != p, eb = eg.length > 1;
  (0, u.ZP)(() => {
    O.default.track(N.rMx.START_STAGE_OPENED, {
      stage_instance_id: null == q ? true : q.id,
      can_start_public_stage: false,
      guild_id: i.guild_id
    })
  });
  let ex = e => {
      if (e.preventDefault(), el === D.j8.PUBLIC && z.length < 20 && !ec) return void eu(true);
      W || null == B || B({
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
  let ej = H && null != J.startDate && J.startDate >= a()(),
    eh = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: k.blockedUsersContainer,
        children: null == q && (es > 0 || eo > 0) && (0, r.jsx)(_.mv, {
          channelId: i.id
        })
      }), (0, r.jsxs)("form", {
        onSubmit: ex,
        className: k.form,
        children: [(0, r.jsxs)(c.xJW, {
          title: G ? C.intl.string(C.t["0HbEQ0"]) : C.intl.string(C.t["5FPBOD"]),
          required: true,
          children: [(0, r.jsx)(c.oil, {
            onChange: e => L(e),
            placeholder: C.intl.string(C.t.ZwWrub),
            maxLength: w.xA,
            value: z,
            autoComplete: "off",
            inputRef: ef
          }), ec && (0, r.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "text-feedback-warning",
            className: k.warning,
            children: C.intl.string(C.t.AqTyaW)
          }), null != R ? (0, r.jsx)(c.Text, {
            color: "text-danger",
            variant: "text-xs/normal",
            className: k.warning,
            children: R.getAnyErrorMessage()
          }) : null]
        }), em && eb ? (0, r.jsx)(A, {
          stageChannelsInGuild: eg,
          channel: i,
          onSelectChannel: p
        }) : null, W && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(x.Z, {
            className: k.formItem,
            onScheduleChange: K,
            onRecurrenceChange: e => {
              let t = J.startDate;
              null != t && ea((0, m.mF)(e, t))
            },
            schedule: J,
            recurrenceRule: ei,
            timeSelected: H,
            onTimeChange: Q
          }), null != J.startDate && J.startDate < a()() ? (0, r.jsx)(c.Text, {
            color: "text-danger",
            variant: "text-xs/normal",
            className: k.warning,
            children: C.intl.string(C.t.AXR5Sk)
          }) : null]
        }), G && (0, r.jsx)(c.xJW, {
          title: C.intl.string(C.t["+gRCCw"]),
          className: k.formItem,
          children: (0, r.jsx)(c.Kx8, {
            placeholder: C.intl.string(C.t["kWO/Ex"]),
            value: U,
            onChange: e => V(e),
            maxLength: D.wm
          })
        }), $ ? (0, r.jsx)(b.Z, {
          sendStartNotification: ee,
          setSendStartNotification: et,
          showNotificationNewBadge: en
        }) : null, em && !eb ? (0, r.jsx)(c.Text, {
          color: "header-secondary",
          variant: "text-xs/normal",
          className: k.channelSelection,
          children: C.intl.format(C.t["S+9O7u"], {
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
      title: null == q ? C.intl.string(C.t.DDF0cH) : C.intl.string(C.t.YPdQOj),
      subtitle: null == q ? C.intl.string(C.t.bqQIwc) : C.intl.string(C.t["I+9bLy"]),
      transitionState: F,
      actions: [{
        variant: "secondary",
        text: C.intl.string(C.t["ETE/oK"]),
        onClick: () => h()
      }, {
        variant: "primary",
        text: W ? C.intl.string(C.t["60lJ0N"]) : null == q ? C.intl.string(C.t.s8mM8P) : C.intl.string(C.t.K344S0),
        onClick: ex,
        disabled: "" === z || null == el || G && !ej,
        loading: M
      }],
      onClose: h
    };
  return null == q ? (0, r.jsx)(s.ExpressiveModal, T(E({
    graphic: {
      type: "image",
      src: I.Z
    }
  }, ep), {
    children: eh
  })) : (0, r.jsx)(s.Modal, T(E({}, ep), {
    children: eh
  }))
}