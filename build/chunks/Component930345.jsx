/** Chunk was on 94194 **/
/** chunk id: 930345, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk91871 = require("./91871.js"),
  i = require.n(Chunk91871),
  Chunk158954 = require("./158954.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk374084 = require("./374084.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk569944 = require("./569944.js"),
  Chunk721228 = require("./721228.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk43079 = require("./43079.js");

function p(e) {
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

function v(e, t) {
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

function j(e) {
  var t;
  let {
    transitionState: n,
    onClose: a,
    guildId: j,
    welcomeMessage: y,
    onSave: O
  } = e, [k, C] = l.useState(p({}, y)), P = (0, c.bG)([g.A], () => g.A.getGuild(j)), w = l.useCallback(e => {
    let t = {};
    return Promise.resolve(d.Ay.getMembers(j).filter(n => {
      var r;
      let l = f.default.getUser(n.userId);
      if (null != l && (t[n.userId] = l), null == P || null == l || !(0, b.c)(P, l)) returnfalse;
      let a = "".concat(null != (r = n.nick) ? r : "", " ").concat(null == l ? true : l.username);
      return i()(e.toLowerCase(), a.toLowerCase())
    }).map(e => {
      var n, l, a;
      return {
        id: e.userId,
        value: e.userId,
        label: null != (n = null != (l = e.nick) ? l : null == (a = t[e.userId]) ? true : a.username) ? n : "",
        leading: null != t[e.userId] ? (0, r.jsx)(o.JsQ, {
          size: o._3J.SIZE_20,
          src: t[e.userId].getAvatarURL(j, 20),
          "aria-hidden": true
        }) : true
      }
    }))
  }, [j, P]), I = l.useCallback(e => {
    C(t => v(p({}, t), {
      authorIds: null != e ? [e] : []
    }))
  }, [C]), S = l.useCallback(e => {
    C(t => v(p({}, t), {
      message: null != e ? e : ""
    }))
  }, [C]), _ = l.useCallback(() => {
    O(k), a()
  }, [a, O, k]), L = l.useCallback(() => {
    O(null), a()
  }, [O, a]), H = null != (t = k.authorIds[0]) ? t : "", E = function(e) {
    if (null == e.message || 0 === e.message.length) return null;
    if (null == e.authorIds || 0 === e.authorIds.length)
      if (e.message.length < u.Fi) return x.intl.formatToPlainString(x.t.Lj831L, {
        minLength: u.Fi
      });
      else return x.intl.string(x.t["4m7gtn"]);
    return e.message.length < u.Fi ? x.intl.formatToPlainString(x.t.TJGHXt, {
      minLength: u.Fi
    }) : null
  }(k), T = l.useMemo(() => [{
    text: x.intl.string(x.t["ETE/oC"]),
    onClick: a,
    variant: "secondary"
  }, {
    text: x.intl.string(x.t["R3BPH+"]),
    onClick: _,
    variant: "primary",
    disabled: 0 === k.message.length || null != E
  }], [E, _, a, k.message.length]);
  return (0, r.jsxs)(s.Modal, {
    title: x.intl.string(x.t.UnLrit),
    transitionState: n,
    onClose: a,
    actions: T,
    actionBarInput: (0, r.jsx)(o.QWc, {
      text: x.intl.string(x.t.N86XcP),
      onClick: L,
      variant: "critical"
    }),
    children: [(0, r.jsxs)("div", {
      className: h.eH,
      children: [(0, r.jsxs)(o.Heading, {
        variant: "heading-md/semibold",
        color: "text-strong",
        children: [x.intl.string(x.t.zNQfQy), (0, r.jsx)(m.A, {})]
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: x.intl.string(x.t.mQHK2S)
      }), (0, r.jsx)(o.ZiE, {
        selectionMode: "single",
        value: null != H ? H : true,
        options: w,
        onSelectionChange: I
      })]
    }), (0, r.jsx)("div", {
      className: h.me
    }), (0, r.jsxs)("div", {
      className: h.eH,
      children: [(0, r.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        color: "text-strong",
        children: x.intl.string(x.t.SHQcv7)
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: x.intl.format(x.t["6biC4R"], {})
      }), (0, r.jsx)(o.fs1, {
        placeholder: x.intl.string(x.t["kX/Sbx"]),
        value: k.message,
        onChange: S,
        maxLength: u.dl
      }), null != E ? (0, r.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "text-feedback-critical",
        children: E
      }) : null]
    })]
  })
}