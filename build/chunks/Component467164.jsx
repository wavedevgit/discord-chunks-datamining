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
  } = e, a = (0, c.bG)([m.A], () => m.A.getGuild(t.guild_id));
  return (r.useEffect(() => {
    null == a && n()
  }, [a, n]), null == a) ? null : (0, l.jsx)(G, {
    transitionState: i,
    guild: a,
    channel: t,
    onClose: n
  })
}

function I(e) {
  let {
    stageChannelsInGuild: t,
    channel: n,
    onSelectChannel: r
  } = e;
  return null == r ? null : (0, l.jsx)("div", {
    className: C.BD,
    children: (0, l.jsx)(o.ZiE, {
      selectionMode: "single",
      required: true,
      label: w.intl.string(w.t.S7GjDz),
      value: n.id,
      options: t.map(e => ({
        id: e.id,
        value: e.id,
        label: (0, d.m1)(e, f.default, h.A, true),
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

function G(e) {
  var t, n;
  let {
    channel: i,
    guild: c,
    onClose: m,
    onSelectChannel: h,
    transitionState: f,
    isEvent: E = false
  } = e, {
    loading: G,
    error: R,
    onSave: z
  } = (0, A.A)(i, m), M = r.useMemo(() => v.A.getStageInstanceByChannel(i.id), [i.id]), [B, U] = r.useState(null != (t = null == M ? true : M.topic) ? t : ""), [L, F] = r.useState(""), [Z] = r.useState(E), [q, K] = r.useState({
    startDate: (0, g.jd)()
  }), [V, Q] = r.useState(false), X = (0, p.Z)(i), J = (0, p.K)(i), W = null == M && X && !Z, [Y, H] = r.useState(W && J), $ = P.dD.GUILD_ONLY, [ee] = r.useState(null != (n = null == M ? true : M.privacy_level) ? n : $), [et, en] = r.useState(null), el = (0, y.D3)(i.id), er = (0, y.Xk)(i.id), [ei, ea] = r.useState(false), es = (0, d.Ay)(i), ec = (0, x.A)(c), eo = null != h, eu = ec.length > 1;
  (0, u.Ay)(() => {
    b.default.track(S.HAw.START_STAGE_OPENED, {
      stage_instance_id: null == M ? true : M.id,
      can_start_public_stage: false,
      guild_id: i.guild_id
    })
  });
  let ed = e => {
      (e.preventDefault(), ee === P.dD.PUBLIC && B.length < 20 && !ei) ? ea(true): Z || null == z || z({
        topic: B,
        privacyLevel: ee,
        sendStartNotification: Y
      })
    },
    ex = r.useRef(null);
  r.useEffect(() => {
    var e;
    null == (e = ex.current) || e.focus()
  }, []);
  let eg = V && null != q.startDate && q.startDate >= a()(),
    ej = (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("div", {
        className: C.GU,
        children: null == M && (el > 0 || er > 0) && (0, l.jsx)(O.Bw, {
          channelId: i.id
        })
      }), (0, l.jsxs)("form", {
        onSubmit: ed,
        className: C.Zd,
        children: [(0, l.jsx)(o.ksK, {
          required: true,
          error: null != R ? R.getAnyErrorMessage() : true,
          label: E ? w.intl.string(w.t["0HbEQ6"]) : w.intl.string(w.t["5FPBOB"]),
          onChange: e => U(e),
          helperText: ei ? w.intl.string(w.t.AqTyaR) : true,
          placeholder: w.intl.string(w.t.ZwWruY),
          maxLength: D.RY,
          value: B,
          autoComplete: "off",
          inputRef: ex
        }), eo && eu ? (0, l.jsx)(I, {
          stageChannelsInGuild: ec,
          channel: i,
          onSelectChannel: h
        }) : null, Z && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(j.A, {
            className: C.kz,
            onScheduleChange: K,
            onRecurrenceChange: e => {
              let t = q.startDate;
              null == t || en((0, g.nG)(e, t))
            },
            schedule: q,
            recurrenceRule: et,
            timeSelected: V,
            onTimeChange: Q
          }), null != q.startDate && q.startDate < a()() ? (0, l.jsx)(o.Text, {
            color: "text-feedback-critical",
            variant: "text-xs/normal",
            className: C.$e,
            children: w.intl.string(w.t.AXR5Ss)
          }) : null]
        }), E && (0, l.jsx)("div", {
          className: C.kz,
          children: (0, l.jsx)(o.fs1, {
            label: w.intl.string(w.t["+gRCC7"]),
            placeholder: w.intl.string(w.t["kWO/E8"]),
            value: L,
            onChange: e => F(e),
            maxLength: P.IJ
          })
        }), eo && !eu ? (0, l.jsx)(o.Text, {
          color: "text-default",
          variant: "text-xs/normal",
          className: C.Qw,
          children: w.intl.format(w.t["S+9O7g"], {
            stageName: es,
            stageHook: (e, t) => (0, l.jsx)("span", {
              className: C.HA,
              children: i.name
            }, t)
          })
        }) : null, (0, l.jsx)(_.A, {
          className: C.XI,
          channelId: i.id
        })]
      })]
    }),
    em = {
      onClose: m,
      title: null == M ? w.intl.string(w.t.DDF0cJ) : w.intl.string(w.t.YPdQOp),
      subtitle: null == M ? w.intl.string(w.t.bqQIwa) : w.intl.string(w.t["I+9bLx"]),
      transitionState: f,
      actions: [{
        variant: "secondary",
        text: w.intl.string(w.t["ETE/oC"]),
        onClick: () => m()
      }, {
        variant: "primary",
        text: Z ? w.intl.string(w.t["60lJ0C"]) : null == M ? w.intl.string(w.t.s8mM8A) : w.intl.string(w.t.K344S7),
        onClick: ed,
        disabled: "" === B || null == ee || E && !eg,
        loading: G
      }],
      actionBarInput: W ? (0, l.jsxs)(o.DUT, {
        onClick: () => H(!Y),
        className: C.Qy,
        children: [(0, l.jsx)(o.P7L, {
          checked: Y
        }), (0, l.jsx)(o.Text, {
          color: "text-default",
          variant: "text-sm/normal",
          children: w.intl.string(w.t["Pe+Pwp"])
        })]
      }) : true
    };
  return null == M ? (0, l.jsx)(s.ExpressiveModal, T(N({
    graphic: {
      type: "image",
      src: k.A
    }
  }, em), {
    children: ej
  })) : (0, l.jsx)(s.Modal, T(N({}, em), {
    children: ej
  }))
}