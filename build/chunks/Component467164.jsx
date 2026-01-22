/** Chunk was on 86317 **/
/** chunk id: 467164, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => E
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

function T(e, t) {
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
  } = e, a = (0, c.bG)([g.A], () => g.A.getGuild(t.guild_id));
  return (r.useEffect(() => {
    null == a && n()
  }, [a, n]), null == a) ? null : (0, l.jsx)(R, {
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
  return null == r ? null : (0, l.jsx)("div", {
    className: _.BD,
    children: (0, l.jsx)(o.ZiE, {
      selectionMode: "single",
      required: true,
      label: C.intl.string(C.t.S7GjDz),
      value: n.id,
      options: t.map(e => ({
        id: e.id,
        value: e.id,
        label: (0, d.m1)(e, m.default, h.A, true),
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

function R(e) {
  var t, n;
  let {
    channel: i,
    guild: c,
    onClose: g,
    onSelectChannel: h,
    transitionState: m,
    isEvent: E = false
  } = e, {
    loading: R,
    error: I,
    onSave: z
  } = (0, D.A)(i, g), M = r.useMemo(() => v.A.getStageInstanceByChannel(i.id), [i.id]), [U, B] = r.useState(null != (t = null == M ? true : M.topic) ? t : ""), [L, F] = r.useState(""), [Z] = r.useState(E), [q, K] = r.useState({
    startDate: (0, f.jd)()
  }), [Q, X] = r.useState(false), V = (0, p.Z)(i), J = (0, p.K)(i), W = null == M && V && !Z, [Y, H] = r.useState(W && J), $ = w.dD.GUILD_ONLY, [ee] = r.useState(null != (n = null == M ? true : M.privacy_level) ? n : $), [et, en] = r.useState(null), el = (0, y.D3)(i.id), er = (0, y.Xk)(i.id), [ei, ea] = r.useState(false), es = (0, d.Ay)(i), ec = (0, x.A)(c), eo = null != h, eu = ec.length > 1;
  (0, u.Ay)(() => {
    b.default.track(P.HAw.START_STAGE_OPENED, {
      stage_instance_id: null == M ? true : M.id,
      can_start_public_stage: false,
      guild_id: i.guild_id
    })
  });
  let ed = e => {
      (e.preventDefault(), ee === w.dD.PUBLIC && U.length < 20 && !ei) ? ea(true): Z || null == z || z({
        topic: U,
        privacyLevel: ee,
        sendStartNotification: Y
      })
    },
    ex = r.useRef(null);
  r.useEffect(() => {
    var e;
    null == (e = ex.current) || e.focus()
  }, []);
  let ef = Q && null != q.startDate && q.startDate >= a()(),
    ej = (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("div", {
        className: _.GU,
        children: null == M && (el > 0 || er > 0) && (0, l.jsx)(O.Bw, {
          channelId: i.id
        })
      }), (0, l.jsxs)("form", {
        onSubmit: ed,
        className: _.Zd,
        children: [(0, l.jsx)(o.ksK, {
          required: true,
          error: null != I ? I.getAnyErrorMessage() : true,
          label: E ? C.intl.string(C.t["0HbEQ6"]) : C.intl.string(C.t["5FPBOB"]),
          onChange: e => B(e),
          helperText: ei ? C.intl.string(C.t.AqTyaR) : true,
          placeholder: C.intl.string(C.t.ZwWruY),
          maxLength: S.RY,
          value: U,
          autoComplete: "off",
          inputRef: ex
        }), eo && eu ? (0, l.jsx)(G, {
          stageChannelsInGuild: ec,
          channel: i,
          onSelectChannel: h
        }) : null, Z && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(j.A, {
            className: _.kz,
            onScheduleChange: K,
            onRecurrenceChange: e => {
              let t = q.startDate;
              null == t || en((0, f.nG)(e, t))
            },
            schedule: q,
            recurrenceRule: et,
            timeSelected: Q,
            onTimeChange: X
          }), null != q.startDate && q.startDate < a()() ? (0, l.jsx)(o.Text, {
            color: "text-feedback-critical",
            variant: "text-xs/normal",
            className: _.$e,
            children: C.intl.string(C.t.AXR5Ss)
          }) : null]
        }), E && (0, l.jsx)("div", {
          className: _.kz,
          children: (0, l.jsx)(o.fs1, {
            label: C.intl.string(C.t["+gRCC7"]),
            placeholder: C.intl.string(C.t["kWO/E8"]),
            value: L,
            onChange: e => F(e),
            maxLength: w.IJ
          })
        }), eo && !eu ? (0, l.jsx)(o.Text, {
          color: "text-default",
          variant: "text-xs/normal",
          className: _.Qw,
          children: C.intl.format(C.t["S+9O7g"], {
            stageName: es,
            stageHook: (e, t) => (0, l.jsx)("span", {
              className: _.HA,
              children: i.name
            }, t)
          })
        }) : null, (0, l.jsx)(A.A, {
          className: _.XI
        })]
      })]
    }),
    eg = {
      onClose: g,
      title: null == M ? C.intl.string(C.t.DDF0cJ) : C.intl.string(C.t.YPdQOp),
      subtitle: null == M ? C.intl.string(C.t.bqQIwa) : C.intl.string(C.t["I+9bLx"]),
      transitionState: m,
      actions: [{
        variant: "secondary",
        text: C.intl.string(C.t["ETE/oC"]),
        onClick: () => g()
      }, {
        variant: "primary",
        text: Z ? C.intl.string(C.t["60lJ0C"]) : null == M ? C.intl.string(C.t.s8mM8A) : C.intl.string(C.t.K344S7),
        onClick: ed,
        disabled: "" === U || null == ee || E && !ef,
        loading: R
      }],
      actionBarInput: W ? (0, l.jsxs)(o.DUT, {
        onClick: () => H(!Y),
        className: _.Qy,
        children: [(0, l.jsx)(o.P7L, {
          checked: Y
        }), (0, l.jsx)(o.Text, {
          color: "text-default",
          variant: "text-sm/normal",
          children: C.intl.string(C.t["Pe+Pwp"])
        })]
      }) : true
    };
  return null == M ? (0, l.jsx)(s.ExpressiveModal, T(N({
    graphic: {
      type: "image",
      src: k.A
    }
  }, eg), {
    children: ej
  })) : (0, l.jsx)(s.Modal, T(N({}, eg), {
    children: ej
  }))
}