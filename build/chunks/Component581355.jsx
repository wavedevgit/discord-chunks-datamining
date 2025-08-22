/** Chunk was on 73736 **/
/** chunk id: 581355, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => k
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
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
  Chunk785550 = require("./785550.js");

function k(e) {
  let {
    channel: t,
    onClose: n,
    transitionState: r
  } = e, a = (0, o.e7)([x.Z], () => x.Z.getGuild(t.guild_id));
  return (i.useEffect(() => {
    null == a && n()
  }, [a, n]), null == a) ? null : (0, l.jsx)(P, {
    transitionState: r,
    guild: a,
    channel: t,
    onClose: n
  })
}

function D(e) {
  let {
    stageChannelsInGuild: t,
    channel: n,
    onSelectChannel: i
  } = e;
  return null == i ? null : (0, l.jsx)(s.xJW, {
    title: T.intl.string(T.t.S7GjDw),
    className: Z.channelSelectionFormItem,
    required: true,
    children: (0, l.jsx)(s.VcW, {
      value: n.id,
      options: t.map(e => ({
        value: e.id,
        label: (0, d.F6)(e, p.default, b.Z, true)
      })),
      onChange: e => {
        let n = t.find(t => t.id === e);
        null != n && i(n)
      },
      renderOptionPrefix: () => (0, l.jsx)(s.ewx, {
        size: "custom",
        color: "currentColor",
        height: 24
      })
    })
  })
}

function P(e) {
  var t, n;
  let {
    channel: r,
    guild: x,
    onClose: b,
    onSelectChannel: p,
    transitionState: k,
    isEvent: P = false
  } = e, {
    loading: A,
    error: F,
    onSave: G
  } = (0, I.Z)(r, b), J = i.useMemo(() => S.Z.getStageInstanceByChannel(r.id), [r.id]), [B, R] = i.useState(null != (t = null == J ? true : J.topic) ? t : ""), [L, M] = i.useState(""), [U] = i.useState(P), [W, H] = i.useState({
    startDate: (0, m.ib)()
  }), [V, q] = i.useState(false), K = (0, j.J)(r), Y = (0, j.U)(r), Q = null == J && K && !U, [X, z] = i.useState(Q && Y), $ = (0, o.e7)([_.Z], () => _.Z.hasHotspot(E.v.LIVE_STAGE_NOTIFICATION_BADGE)), ee = w.j8.GUILD_ONLY, [et] = i.useState(null != (n = null == J ? true : J.privacy_level) ? n : ee), [en, el] = i.useState(null), ei = (0, O._d)(r.id), er = (0, O.K3)(r.id), [ea, eo] = i.useState(false), ec = (0, d.ZP)(r), es = (0, g.q)(x), eu = null != p, ed = es.length > 1;
  (0, u.ZP)(() => {
    v.default.track(C.rMx.START_STAGE_OPENED, {
      stage_instance_id: null == J ? true : J.id,
      can_start_public_stage: false,
      guild_id: r.guild_id
    })
  });
  let eg = e => {
      if (e.preventDefault(), et === w.j8.PUBLIC && B.length < 20 && !ea) return void eo(true);
      U || null == G || G({
        topic: B,
        privacyLevel: et,
        sendStartNotification: X
      })
    },
    em = i.useRef(null);
  i.useEffect(() => {
    var e;
    null == (e = em.current) || e.focus()
  }, []);
  let ef = V && null != W.startDate && W.startDate >= a()();
  return (0, l.jsxs)(c.Modal, {
    title: null == J ? T.intl.string(T.t.DDF0cH) : T.intl.string(T.t.YPdQOj),
    subtitle: null == J ? T.intl.string(T.t.bqQIwc) : T.intl.string(T.t["I+9bLy"]),
    transitionState: k,
    actions: [{
      variant: "secondary",
      text: T.intl.string(T.t["ETE/oK"]),
      onClick: () => b()
    }, {
      variant: "primary",
      text: U ? T.intl.string(T.t["60lJ0N"]) : null == J ? T.intl.string(T.t.s8mM8P) : T.intl.string(T.t.K344S0),
      onClick: eg,
      disabled: "" === B || null == et || P && !ef,
      loading: A
    }],
    onClose: b,
    children: [(0, l.jsx)("div", {
      className: Z.blockedUsersContainer,
      children: null == J && (ei > 0 || er > 0) && (0, l.jsx)(N.mv, {
        channelId: r.id
      })
    }), (0, l.jsxs)("form", {
      onSubmit: eg,
      className: Z.form,
      children: [(0, l.jsxs)(s.xJW, {
        title: P ? T.intl.string(T.t["0HbEQ0"]) : T.intl.string(T.t["5FPBOD"]),
        required: true,
        children: [(0, l.jsx)(s.oil, {
          onChange: e => R(e),
          placeholder: T.intl.string(T.t.ZwWrub),
          maxLength: y.xA,
          value: B,
          autoComplete: "off",
          inputRef: em
        }), ea && (0, l.jsx)(s.Text, {
          variant: "text-xs/normal",
          color: "text-feedback-warning",
          className: Z.warning,
          children: T.intl.string(T.t.AqTyaW)
        }), null != F ? (0, l.jsx)(s.Text, {
          color: "text-danger",
          variant: "text-xs/normal",
          className: Z.warning,
          children: F.getAnyErrorMessage()
        }) : null]
      }), eu && ed ? (0, l.jsx)(D, {
        stageChannelsInGuild: es,
        channel: r,
        onSelectChannel: p
      }) : null, U && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(h.Z, {
          className: Z.formItem,
          onScheduleChange: H,
          onRecurrenceChange: e => {
            let t = W.startDate;
            null != t && el((0, m.mF)(e, t))
          },
          schedule: W,
          recurrenceRule: en,
          timeSelected: V,
          onTimeChange: q
        }), null != W.startDate && W.startDate < a()() ? (0, l.jsx)(s.Text, {
          color: "text-danger",
          variant: "text-xs/normal",
          className: Z.warning,
          children: T.intl.string(T.t.AXR5Sk)
        }) : null]
      }), P && (0, l.jsx)(s.xJW, {
        title: T.intl.string(T.t["+gRCCw"]),
        className: Z.formItem,
        children: (0, l.jsx)(s.Kx8, {
          placeholder: T.intl.string(T.t["kWO/Ex"]),
          value: L,
          onChange: e => M(e),
          maxLength: w.wm
        })
      }), Q ? (0, l.jsx)(f.Z, {
        sendStartNotification: X,
        setSendStartNotification: z,
        showNotificationNewBadge: $
      }) : null, eu && !ed ? (0, l.jsx)(s.Text, {
        color: "header-secondary",
        variant: "text-xs/normal",
        className: Z.channelSelection,
        children: T.intl.format(T.t["S+9O7u"], {
          stageName: ec,
          stageHook: (e, t) => (0, l.jsx)("span", {
            className: Z.channelName,
            children: r.name
          }, t)
        })
      }) : null]
    })]
  })
}