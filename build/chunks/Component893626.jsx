/** Chunk was on 36371 **/
/** chunk id: 893626, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => k
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk658722 = require("./658722.js"),
  i = require.n(Chunk658722),
  Chunk793030 = require("./793030.js"),
  Chunk399606 = require("./399606.js"),
  Chunk668339 = require("./668339.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk734893 = require("./734893.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk903518 = require("./903518.js"),
  Chunk580357 = require("./580357.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk353441 = require("./353441.js");

function x(e) {
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

function j(e, t) {
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

function k(e) {
  var t, n, a;
  let {
    transitionState: k,
    onClose: y,
    guildId: O,
    welcomeMessage: I,
    onSave: P
  } = e, [C, _] = l.useState(x({}, I)), w = (0, s.e7)([g.Z], () => g.Z.getGuild(O)), Z = l.useCallback(e => {
    let t = {};
    return Promise.resolve(m.ZP.getMembers(O).filter(n => {
      var r;
      let l = p.default.getUser(n.userId);
      if (null != l && (t[n.userId] = l), null == w || null == l || !(0, f.Y)(w, l)) returnfalse;
      let a = "".concat(null != (r = n.nick) ? r : "", " ").concat(null == l ? true : l.username);
      return i()(e.toLowerCase(), a.toLowerCase())
    }).map(e => {
      var n, r, l;
      return {
        value: e.userId,
        label: null != (l = null != (r = e.nick) ? r : null == (n = t[e.userId]) ? true : n.username) ? l : ""
      }
    }))
  }, [O, w]), S = l.useCallback(e => {
    if (null == O || null == e) return null;
    let t = m.ZP.getMember(O, e.value);
    if (null == t) return null;
    let n = p.default.getUser(t.userId);
    if (null == n) return null;
    let l = n.getAvatarURL(O, 20);
    return (0, r.jsx)(c.Xo$, {
      size: c.EFr.SIZE_20,
      src: l,
      "aria-hidden": true
    })
  }, [O]), L = l.useCallback(e => {
    let {
      value: t
    } = e;
    _(e => j(x({}, e), {
      authorIds: null != t ? [t] : []
    }))
  }, [_]), U = l.useCallback(e => {
    _(t => j(x({}, t), {
      message: null != e ? e : ""
    }))
  }, [_]), G = l.useCallback(() => {
    P(C), y()
  }, [y, P, C]), M = l.useCallback(() => {
    P(null), y()
  }, [P, y]), T = null != (t = C.authorIds[0]) ? t : "", E = (0, s.e7)([m.ZP], () => null != O ? m.ZP.getMember(O, T) : null), R = (0, s.e7)([p.default], () => null != E ? p.default.getUser(E.userId) : null), H = null != (a = null != (n = null == E ? true : E.nick) ? n : null == R ? true : R.username) ? a : "", N = function(e) {
    if (null == e.message || 0 === e.message.length) return null;
    if (null == e.authorIds || 0 === e.authorIds.length)
      if (e.message.length < d.ZR) return h.intl.formatToPlainString(h.t.Lj831L, {
        minLength: d.ZR
      });
      else return h.intl.string(h.t["4m7gtn"]);
    return e.message.length < d.ZR ? h.intl.formatToPlainString(h.t.TJGHXt, {
      minLength: d.ZR
    }) : null
  }(C), D = l.useMemo(() => [{
    text: h.intl.string(h.t["ETE/oC"]),
    onClick: y,
    variant: "secondary"
  }, {
    text: h.intl.string(h.t["R3BPH+"]),
    onClick: G,
    variant: "primary",
    disabled: 0 === C.message.length || null != N
  }], [N, G, y, C.message.length]);
  return (0, r.jsxs)(o.Modal, {
    title: h.intl.string(h.t.UnLrit),
    transitionState: k,
    onClose: y,
    actions: D,
    actionBarInput: (0, r.jsx)(c.Avr, {
      text: h.intl.string(h.t.N86XcP),
      onClick: M,
      variant: "critical"
    }),
    children: [(0, r.jsxs)("div", {
      className: v.formGroup,
      children: [(0, r.jsxs)(c.Heading, {
        variant: "heading-md/semibold",
        color: "header-primary",
        children: [h.intl.string(h.t.zNQfQy), (0, r.jsx)(b.Z, {})]
      }), (0, r.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: h.intl.string(h.t.mQHK2S)
      }), (0, r.jsx)(u.d, {
        value: {
          value: T,
          label: H
        },
        renderOptionPrefix: S,
        options: Z,
        onChange: L,
        filter: false
      })]
    }), (0, r.jsx)("div", {
      className: v.separator
    }), (0, r.jsxs)("div", {
      className: v.formGroup,
      children: [(0, r.jsx)(c.Heading, {
        variant: "heading-md/semibold",
        color: "header-primary",
        children: h.intl.string(h.t.SHQcv7)
      }), (0, r.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: h.intl.format(h.t["6biC4R"], {})
      }), (0, r.jsx)(c.Kx8, {
        placeholder: h.intl.string(h.t["kX/Sbx"]),
        value: C.message,
        onChange: U,
        maxLength: d.W4
      }), null != N ? (0, r.jsx)(c.Text, {
        variant: "text-xs/normal",
        color: "text-feedback-critical",
        children: N
      }) : null]
    })]
  })
}