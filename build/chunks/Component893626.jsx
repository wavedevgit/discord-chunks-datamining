/** Chunk was on 36371 **/
/** chunk id: 893626, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk658722 = require("./658722.js"),
  i = require.n(Chunk658722),
  Chunk793030 = require("./793030.js"),
  Chunk399606 = require("./399606.js"),
  Chunk668339 = require("./668339.jsx"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk734893 = require("./734893.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk903518 = require("./903518.js"),
  Chunk580357 = require("./580357.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk353441 = require("./353441.js");

function j(e) {
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

function k(e, t) {
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

function y(e) {
  var t, n, a;
  let {
    transitionState: y,
    onClose: O,
    guildId: I,
    welcomeMessage: P,
    onSave: C
  } = e, [_, w] = l.useState(j({}, P)), Z = (0, s.e7)([p.Z], () => p.Z.getGuild(I)), S = l.useCallback(e => {
    let t = {};
    return Promise.resolve(g.ZP.getMembers(I).filter(n => {
      var r;
      let l = f.default.getUser(n.userId);
      if (null != l && (t[n.userId] = l), null == Z || null == l || !(0, h.Y)(Z, l)) returnfalse;
      let a = "".concat(null != (r = n.nick) ? r : "", " ").concat(null == l ? true : l.username);
      return i()(e.toLowerCase(), a.toLowerCase())
    }).map(e => {
      var n, r, l;
      return {
        value: e.userId,
        label: null != (l = null != (r = e.nick) ? r : null == (n = t[e.userId]) ? true : n.username) ? l : ""
      }
    }))
  }, [I, Z]), G = l.useCallback(e => {
    if (null == I || null == e) return null;
    let t = g.ZP.getMember(I, e.value);
    if (null == t) return null;
    let n = f.default.getUser(t.userId);
    if (null == n) return null;
    let l = n.getAvatarURL(I, 20);
    return (0, r.jsx)(d.Xo$, {
      size: d.EFr.SIZE_20,
      src: l,
      "aria-hidden": true
    })
  }, [I]), L = l.useCallback(e => {
    let {
      value: t
    } = e;
    w(e => k(j({}, e), {
      authorIds: null != t ? [t] : []
    }))
  }, [w]), H = l.useCallback(e => {
    w(t => k(j({}, t), {
      message: null != e ? e : ""
    }))
  }, [w]), N = l.useCallback(() => {
    C(_), O()
  }, [O, C, _]), T = l.useCallback(() => {
    C(null), O()
  }, [C, O]), U = null != (t = _.authorIds[0]) ? t : "", E = (0, s.e7)([g.ZP], () => null != I ? g.ZP.getMember(I, U) : null), M = (0, s.e7)([f.default], () => null != E ? f.default.getUser(E.userId) : null), R = null != (a = null != (n = null == E ? true : E.nick) ? n : null == M ? true : M.username) ? a : "", X = function(e) {
    if (null == e.message || 0 === e.message.length) return null;
    if (null == e.authorIds || 0 === e.authorIds.length)
      if (e.message.length < m.ZR) return x.intl.formatToPlainString(x.t.Lj831L, {
        minLength: m.ZR
      });
      else return x.intl.string(x.t["4m7gtn"]);
    return e.message.length < m.ZR ? x.intl.formatToPlainString(x.t.TJGHXt, {
      minLength: m.ZR
    }) : null
  }(_), B = l.useMemo(() => [{
    text: x.intl.string(x.t["ETE/oC"]),
    onClick: O,
    variant: "secondary"
  }, {
    text: x.intl.string(x.t["R3BPH+"]),
    onClick: N,
    variant: "primary",
    disabled: 0 === _.message.length || null != X
  }], [X, N, O, _.message.length]);
  return (0, r.jsxs)(o.IX, {
    transitionState: y,
    onClose: O,
    children: [(0, r.jsx)("div", {
      className: v.closeButton,
      children: (0, r.jsx)(c.PZ7, {
        onClick: O
      })
    }), (0, r.jsxs)("div", {
      className: v.container,
      children: [(0, r.jsxs)("div", {
        className: v.formGroup,
        children: [(0, r.jsxs)(d.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: [x.intl.string(x.t.zNQfQy), (0, r.jsx)(b.Z, {})]
        }), (0, r.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: x.intl.string(x.t.mQHK2S)
        }), (0, r.jsx)(u.d, {
          value: {
            value: U,
            label: R
          },
          renderOptionPrefix: G,
          options: S,
          onChange: L,
          filter: false
        })]
      }), (0, r.jsx)("div", {
        className: v.separator
      }), (0, r.jsxs)("div", {
        className: v.formGroup,
        children: [(0, r.jsx)(d.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: x.intl.string(x.t.SHQcv7)
        }), (0, r.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: x.intl.format(x.t["6biC4R"], {})
        }), (0, r.jsx)(d.Kx8, {
          placeholder: x.intl.string(x.t["kX/Sbx"]),
          value: _.message,
          onChange: H,
          maxLength: m.W4
        }), null != X ? (0, r.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "text-feedback-critical",
          children: X
        }) : null]
      })]
    }), (0, r.jsx)(o.Go$, {
      actions: B,
      leading: (0, r.jsx)(d.Avr, {
        text: x.intl.string(x.t.N86XcP),
        onClick: T,
        variant: "critical"
      })
    })]
  })
}