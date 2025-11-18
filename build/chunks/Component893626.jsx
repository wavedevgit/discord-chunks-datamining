/** Chunk was on 36371 **/
/** chunk id: 893626, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk658722 = require("./658722.js"),
  o = require.n(Chunk658722),
  Chunk793030 = require("./793030.js"),
  Chunk399606 = require("./399606.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk734893 = require("./734893.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk903518 = require("./903518.js"),
  Chunk580357 = require("./580357.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk319407 = require("./319407.js");

function x(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      r = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), r.forEach(function(n) {
      var r;
      r = t[n], n in e ? Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = r
    })
  }
  return e
}

function j(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t.push.apply(t, r)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}

function y(e) {
  var n, t, a;
  let {
    transitionState: y,
    onClose: k,
    guildId: O,
    welcomeMessage: I,
    onSave: P
  } = e, [C, _] = l.useState(x({}, I)), w = (0, s.e7)([g.Z], () => g.Z.getGuild(O)), Z = l.useCallback(e => {
    let n = {};
    return Promise.resolve(m.ZP.getMembers(O).filter(t => {
      var r;
      let l = p.default.getUser(t.userId);
      if (null != l && (n[t.userId] = l), null == w || null == l || !(0, h.Y)(w, l)) returnfalse;
      let a = "".concat(null != (r = t.nick) ? r : "", " ").concat(null == l ? true : l.username);
      return o()(e.toLowerCase(), a.toLowerCase())
    }).map(e => {
      var t, r, l;
      return {
        value: e.userId,
        label: null != (l = null != (r = e.nick) ? r : null == (t = n[e.userId]) ? true : t.username) ? l : ""
      }
    }))
  }, [O, w]), S = l.useCallback(e => {
    if (null == O || null == e) return null;
    let n = m.ZP.getMember(O, e.value);
    if (null == n) return null;
    let t = p.default.getUser(n.userId);
    if (null == t) return null;
    let l = t.getAvatarURL(O, 20);
    return (0, r.jsx)(c.Xo$, {
      size: c.EFr.SIZE_20,
      src: l,
      "aria-hidden": true
    })
  }, [O]), G = l.useCallback(e => {
    let {
      value: n
    } = e;
    _(e => j(x({}, e), {
      authorIds: null != n ? [n] : []
    }))
  }, [_]), L = l.useCallback(e => {
    _(n => j(x({}, n), {
      message: null != e ? e : ""
    }))
  }, [_]), H = l.useCallback(() => {
    P(C), k()
  }, [k, P, C]), N = l.useCallback(() => {
    P(null), k()
  }, [P, k]), T = null != (n = C.authorIds[0]) ? n : "", U = (0, s.e7)([m.ZP], () => null != O ? m.ZP.getMember(O, T) : null), E = (0, s.e7)([p.default], () => null != U ? p.default.getUser(U.userId) : null), M = null != (a = null != (t = null == U ? true : U.nick) ? t : null == E ? true : E.username) ? a : "", R = function(e) {
    if (null == e.message || 0 === e.message.length) return null;
    if (null == e.authorIds || 0 === e.authorIds.length)
      if (e.message.length < d.ZR) return b.intl.formatToPlainString(b.t.Lj831L, {
        minLength: d.ZR
      });
      else return b.intl.string(b.t["4m7gtn"]);
    return e.message.length < d.ZR ? b.intl.formatToPlainString(b.t.TJGHXt, {
      minLength: d.ZR
    }) : null
  }(C), X = l.useMemo(() => [{
    text: b.intl.string(b.t["ETE/oC"]),
    onClick: k,
    variant: "secondary"
  }, {
    text: b.intl.string(b.t["R3BPH+"]),
    onClick: H,
    variant: "primary",
    disabled: 0 === C.message.length || null != R
  }], [R, H, k, C.message.length]);
  return (0, r.jsxs)(i.IX, {
    transitionState: y,
    onClose: k,
    children: [(0, r.jsx)("div", {
      className: v.closeButton,
      children: (0, r.jsx)(u.PZ7, {
        onClick: k
      })
    }), (0, r.jsxs)("div", {
      className: v.container,
      children: [(0, r.jsxs)("div", {
        className: v.formGroup,
        children: [(0, r.jsxs)(c.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: [b.intl.string(b.t.zNQfQy), (0, r.jsx)(f.Z, {})]
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: b.intl.string(b.t.mQHK2S)
        }), (0, r.jsx)(c.VcW, {
          value: {
            value: T,
            label: M
          },
          renderOptionPrefix: S,
          options: Z,
          onChange: G,
          filter: false
        })]
      }), (0, r.jsx)("div", {
        className: v.separator
      }), (0, r.jsxs)("div", {
        className: v.formGroup,
        children: [(0, r.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: b.intl.string(b.t.SHQcv7)
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: b.intl.format(b.t["6biC4R"], {})
        }), (0, r.jsx)(c.Kx8, {
          placeholder: b.intl.string(b.t["kX/Sbx"]),
          value: C.message,
          onChange: L,
          maxLength: d.W4
        }), null != R ? (0, r.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "text-danger",
          children: R
        }) : null]
      })]
    }), (0, r.jsx)(i.Go$, {
      actions: X,
      leading: (0, r.jsx)(c.Avr, {
        text: b.intl.string(b.t.N86XcP),
        onClick: N,
        variant: "critical"
      })
    })]
  })
}