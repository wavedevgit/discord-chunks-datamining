/** Chunk was on 36371 **/
/** chunk id: 893626, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => I
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk658722 = require("./658722.js"),
  o = require.n(Chunk658722),
  Chunk399606 = require("./399606.js"),
  Chunk146187 = require("./146187.jsx"),
  Chunk257465 = require("./257465.jsx"),
  Chunk369585 = require("./369585.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk734893 = require("./734893.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk903518 = require("./903518.js"),
  Chunk580357 = require("./580357.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk353441 = require("./353441.js");

function y(e) {
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

function k(e, n) {
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

function I(e) {
  var n, t, a;
  let {
    transitionState: I,
    onClose: O,
    guildId: P,
    welcomeMessage: _,
    onSave: C
  } = e, [w, Z] = l.useState(y({}, _)), S = (0, s.e7)([h.Z], () => h.Z.getGuild(P)), T = l.useCallback(e => {
    let n = {};
    return Promise.resolve(p.ZP.getMembers(P).filter(t => {
      var r;
      let l = f.default.getUser(t.userId);
      if (null != l && (n[t.userId] = l), null == S || null == l || !(0, x.Y)(S, l)) returnfalse;
      let a = "".concat(null != (r = t.nick) ? r : "", " ").concat(null == l ? true : l.username);
      return o()(e.toLowerCase(), a.toLowerCase())
    }).map(e => {
      var t, r, l;
      return {
        value: e.userId,
        label: null != (l = null != (r = e.nick) ? r : null == (t = n[e.userId]) ? true : t.username) ? l : ""
      }
    }))
  }, [P, S]), M = l.useCallback(e => {
    if (null == P || null == e) return null;
    let n = p.ZP.getMember(P, e.value);
    if (null == n) return null;
    let t = f.default.getUser(n.userId);
    if (null == t) return null;
    let l = t.getAvatarURL(P, 20);
    return (0, r.jsx)(m.Xo$, {
      size: m.EFr.SIZE_20,
      src: l,
      "aria-hidden": true
    })
  }, [P]), N = l.useCallback(e => {
    let {
      value: n
    } = e;
    Z(e => k(y({}, e), {
      authorIds: null != n ? [n] : []
    }))
  }, [Z]), G = l.useCallback(e => {
    Z(n => k(y({}, n), {
      message: null != e ? e : ""
    }))
  }, [Z]), L = l.useCallback(() => {
    C(w), O()
  }, [O, C, w]), U = l.useCallback(() => {
    C(null), O()
  }, [C, O]), E = null != (n = w.authorIds[0]) ? n : "", H = (0, s.e7)([p.ZP], () => null != P ? p.ZP.getMember(P, E) : null), R = (0, s.e7)([f.default], () => null != H ? f.default.getUser(H.userId) : null), X = null != (a = null != (t = null == H ? true : H.nick) ? t : null == R ? true : R.username) ? a : "", B = function(e) {
    if (null == e.message || 0 === e.message.length) return null;
    if (null == e.authorIds || 0 === e.authorIds.length)
      if (e.message.length < g.ZR) return v.intl.formatToPlainString(v.t.Lj831N, {
        minLength: g.ZR
      });
      else return v.intl.string(v.t["4m7gtr"]);
    return e.message.length < g.ZR ? v.intl.formatToPlainString(v.t.TJGHXl, {
      minLength: g.ZR
    }) : null
  }(w), D = l.useMemo(() => [{
    text: v.intl.string(v.t["ETE/oK"]),
    onClick: O,
    variant: "secondary"
  }, {
    text: v.intl.string(v.t.R3BPHx),
    onClick: L,
    variant: "primary",
    disabled: 0 === w.message.length || null != B
  }], [B, L, O, w.message.length]);
  return (0, r.jsxs)(u.I, {
    transitionState: I,
    onClose: O,
    children: [(0, r.jsx)("div", {
      className: j.closeButton,
      children: (0, r.jsx)(i.P, {
        onClick: O
      })
    }), (0, r.jsxs)("div", {
      className: j.container,
      children: [(0, r.jsxs)("div", {
        className: j.formGroup,
        children: [(0, r.jsxs)(m.X6q, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: [v.intl.string(v.t.zNQfQ0), (0, r.jsx)(b.Z, {})]
        }), (0, r.jsx)(m.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: v.intl.string(v.t.mQHK2d)
        }), (0, r.jsx)(m.VcW, {
          value: {
            value: E,
            label: X
          },
          renderOptionPrefix: M,
          options: T,
          onChange: N,
          filter: false
        })]
      }), (0, r.jsx)("div", {
        className: j.separator
      }), (0, r.jsxs)("div", {
        className: j.formGroup,
        children: [(0, r.jsx)(m.X6q, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: v.intl.string(v.t.SHQcv7)
        }), (0, r.jsx)(m.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: v.intl.format(v.t["6biC4e"], {})
        }), (0, r.jsx)(d.iS, {
          className: j.welcomeMessageTextInput,
          placeholder: v.intl.string(v.t["kX/Sb2"]),
          value: w.message,
          onChange: G,
          maxLength: g.W4
        }), null != B ? (0, r.jsx)(m.Text, {
          variant: "text-xs/normal",
          color: "text-danger",
          children: B
        }) : null]
      })]
    }), (0, r.jsx)(c.G, {
      actions: D,
      leading: (0, r.jsx)(m.Avr, {
        text: v.intl.string(v.t.N86XcH),
        onClick: U,
        variant: "critical"
      })
    })]
  })
}