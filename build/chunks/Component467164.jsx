/** Chunk was on 86317 **/
/** chunk id: 467164, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => I
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk989349 = require("./989349.js"),
  a = require.n(Chunk989349),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk47167 = require("./47167.js"),
  Chunk232246 = require("./232246.js"),
  Chunk974930 = require("./974930.js"),
  Chunk422845 = require("./422845.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk272379 = require("./272379.js"),
  Chunk446600 = require("./446600.js"),
  Chunk366098 = require("./366098.js"),
  Chunk918192 = require("./918192.jsx"),
  Chunk660110 = require("./660110.jsx"),
  Chunk567854 = require("./567854.js"),
  Chunk516607 = require("./516607.js"),
  Chunk652215 = require("./652215.js"),
  Chunk988794 = require("./988794.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk737782 = require("./737782.js"),
  Chunk973324 = require("./973324.js");

function N(e) {
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

function C(e, t) {
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

function I(e) {
  let {
    channel: t,
    onClose: n,
    transitionState: i
  } = e, a = (0, c.bG)([x.A], () => x.A.getGuild(t.guild_id));
  return (r.useEffect(() => {
    null == a && n()
  }, [a, n]), null == a) ? null : (0, l.jsx)(k, {
    transitionState: i,
    guild: a,
    channel: t,
    onClose: n
  })
}

function R(e) {
  let {
    stageChannelsInGuild: t,
    channel: n,
    onSelectChannel: r
  } = e;
  return null == r ? null : (0, l.jsx)("div", {
    className: w.BD,
    children: (0, l.jsx)(o.ZiE, {
      selectionMode: "single",
      required: true,
      label: P.intl.string(P.t.S7GjDz),
      value: n.id,
      options: t.map(e => ({
        id: e.id,
        value: e.id,
        label: (0, d.m1)(e, j.default, m.A, true),
        leading: (0, l.jsx)(o.qux, {
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

function k(e) {
  var t, n;
  let {
    channel: i,
    guild: c,
    onClose: x,
    onSelectChannel: m,
    transitionState: j,
    isEvent: I = false
  } = e, {
    loading: k,
    error: G,
    onSave: M
  } = (0, A.A)(i, x), B = r.useMemo(() => _.A.getStageInstanceByChannel(i.id), [i.id]), [U, z] = r.useState(null != (t = null == B ? true : B.topic) ? t : ""), [L, V] = r.useState(""), [F] = r.useState(I), [K, W] = r.useState({
    startDate: (0, h.jd)()
  }), [q, Q] = r.useState(false), Z = (0, p.Z)(i), X = (0, p.K)(i), J = null == B && Z && !F, [Y, H] = r.useState(J && X), $ = S.dD.GUILD_ONLY, [ee] = r.useState(null != (n = null == B ? true : B.privacy_level) ? n : $), [et, en] = r.useState(null), el = (0, O.D3)(i.id), er = (0, O.Xk)(i.id), [ei, ea] = r.useState(false), es = (0, d.Ay)(i), ec = (0, g.A)(c), eo = null != m, eu = ec.length > 1;
  (0, u.Ay)(() => {
    b.default.track(E.HAw.START_STAGE_OPENED, {
      stage_instance_id: null == B ? true : B.id,
      can_start_public_stage: false,
      guild_id: i.guild_id
    })
  });
  let ed = e => {
      (e.preventDefault(), ee === S.dD.PUBLIC && U.length < 20 && !ei) ? ea(true): F || null == M || M({
        topic: U,
        privacyLevel: ee,
        sendStartNotification: Y
      })
    },
    eg = r.useRef(null);
  r.useEffect(() => {
    var e;
    null == (e = eg.current) || e.focus()
  }, []);
  let eh = q && null != K.startDate && K.startDate >= a()(),
    ef = (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("div", {
        className: w.GU,
        children: null == B && (el > 0 || er > 0) && (0, l.jsx)(y.Bw, {
          channelId: i.id
        })
      }), (0, l.jsxs)("form", {
        onSubmit: ed,
        className: w.Zd,
        children: [(0, l.jsx)(o.ksK, {
          required: true,
          error: null != G ? G.getAnyErrorMessage() : true,
          label: I ? P.intl.string(P.t["0HbEQ6"]) : P.intl.string(P.t["5FPBOB"]),
          onChange: e => z(e),
          helperText: ei ? P.intl.string(P.t.AqTyaR) : true,
          placeholder: P.intl.string(P.t.ZwWruY),
          maxLength: T.RY,
          value: U,
          autoComplete: "off",
          inputRef: eg
        }), eo && eu ? (0, l.jsx)(R, {
          stageChannelsInGuild: ec,
          channel: i,
          onSelectChannel: m
        }) : null, F && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(f.A, {
            className: w.kz,
            onScheduleChange: W,
            onRecurrenceChange: e => {
              let t = K.startDate;
              null == t || en((0, h.nG)(e, t))
            },
            schedule: K,
            recurrenceRule: et,
            timeSelected: q,
            onTimeChange: Q
          }), null != K.startDate && K.startDate < a()() ? (0, l.jsx)(o.Text, {
            color: "text-feedback-critical",
            variant: "text-xs/normal",
            className: w.$e,
            children: P.intl.string(P.t.AXR5Ss)
          }) : null]
        }), I && (0, l.jsx)("div", {
          className: w.kz,
          children: (0, l.jsx)(o.fs1, {
            label: P.intl.string(P.t["+gRCC7"]),
            placeholder: P.intl.string(P.t["kWO/E8"]),
            value: L,
            onChange: e => V(e),
            maxLength: S.IJ
          })
        }), eo && !eu ? (0, l.jsx)(o.Text, {
          color: "text-default",
          variant: "text-xs/normal",
          className: w.Qw,
          children: P.intl.format(P.t["S+9O7g"], {
            stageName: es,
            stageHook: (e, t) => (0, l.jsx)("span", {
              className: w.HA,
              children: i.name
            }, t)
          })
        }) : null, (0, l.jsx)(v.A, {
          className: w.XI,
          channelId: i.id
        })]
      })]
    }),
    ex = {
      onClose: x,
      title: null == B ? P.intl.string(P.t.DDF0cJ) : P.intl.string(P.t.YPdQOp),
      subtitle: null == B ? P.intl.string(P.t.bqQIwa) : P.intl.string(P.t["I+9bLx"]),
      transitionState: j,
      actions: [{
        variant: "secondary",
        text: P.intl.string(P.t["ETE/oC"]),
        onClick: () => x()
      }, {
        variant: "primary",
        text: F ? P.intl.string(P.t["60lJ0C"]) : null == B ? P.intl.string(P.t.s8mM8A) : P.intl.string(P.t.K344S7),
        onClick: ed,
        disabled: "" === U || null == ee || I && !eh,
        loading: k
      }],
      actionBarInput: J ? (0, l.jsxs)(o.DUT, {
        onClick: () => H(!Y),
        className: w.Qy,
        children: [(0, l.jsx)(o.P7L, {
          checked: Y
        }), (0, l.jsx)(o.Text, {
          color: "text-default",
          variant: "text-sm/normal",
          children: P.intl.string(P.t["Pe+Pwp"])
        })]
      }) : true
    };
  return null == B ? (0, l.jsx)(s.ExpressiveModal, C(N({
    graphic: {
      type: "image",
      src: D.A
    }
  }, ex), {
    children: ef
  })) : (0, l.jsx)(s.Modal, C(N({}, ex), {
    children: ef
  }))
}