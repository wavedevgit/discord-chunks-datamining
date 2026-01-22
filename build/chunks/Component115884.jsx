/** Chunk was on 27084 **/
/** chunk id: 115884, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => k
}), require("./896048.js"), require("./733351.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  c = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk49229 = require("./49229.js"),
  Chunk915089 = require("./915089.js"),
  Chunk395422 = require("./395422.js"),
  Chunk652215 = require("./652215.js"),
  Chunk650583 = require("./650583.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk680982 = require("./680982.js"),
  Chunk473169 = require("./473169.js");

function g(e) {
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

function y(e, t) {
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
let Chunk892799 = require("./892799.js"),
  O = {
    canSend: false,
    hint: null,
    success: null,
    error: null
  },
  R = (0, Chunk915089.Ld)(),
  w = "".concat(R, "-decription"),
  N = "".concat(R, "-error");

function S(e, t) {
  switch (t.type) {
    case "RESET":
      return O;
    case "SUCCESS":
      return y(g({}, O), {
        success: t.text
      });
    case "HINT":
      return y(g({}, O), {
        canSend: true,
        hint: t.text
      });
    case "ERROR":
      return y(g({}, e), {
        canSend: true,
        error: t.text
      })
  }
}

function k(e) {
  let {
    placeholder: t = m.intl.string(m.t["Rn/sLl"])
  } = e, n = l.useRef(null), a = l.useRef(null), [s, f] = l.useReducer(S, O), {
    canSend: g,
    hint: y,
    error: k,
    success: E
  } = s;
  return l.useEffect(() => {
    null != E && (i()(null != n.current, "Input is submitting when not mounted"), n.current.value = "", n.current.focus())
  }, [E, n]), (0, r.jsxs)("form", {
    onSubmit: e => {
      e.preventDefault(), i()(null != n.current, "Input is submitted when not mounted");
      let t = n.current.value.trim();
      !t.includes("#") && t.startsWith("@") && (t = t.substring(1));
      let r = (0, p.Ty)(t);
      null != r ? f({
        type: "ERROR",
        text: r
      }) : d.A.sendRequest({
        discordTag: t,
        context: {
          location: "Add Friend"
        }
      }).then(() => f({
        type: "SUCCESS",
        text: m.intl.format(m.t.Rtl1Ep, {
          discordTag: t
        })
      }), e => {
        var n;
        return f({
          type: "ERROR",
          text: (0, p.vU)(null == (n = e.body) ? true : n.code, t)
        })
      })
    },
    autoComplete: "off",
    children: [(0, r.jsxs)("div", {
      className: v.QR,
      children: [(0, r.jsx)(u.Text, {
        tag: "div",
        variant: "heading-md/normal",
        children: m.intl.string(m.t["Rn/sLl"])
      }), (0, r.jsx)("img", {
        src: j,
        alt: "Wumpus Waving"
      })]
    }), (0, r.jsx)(u.vN3, {
      focusTarget: n,
      ringTarget: a,
      ringClassName: v.hN,
      children: (0, r.jsxs)("div", {
        ref: a,
        className: c()(v.fc, {
          [v.kX]: E,
          [v.z3]: k
        }),
        children: [(0, r.jsx)(o.ob, {
          id: R,
          inputRef: n,
          className: v.QP,
          inputClassName: v.hF,
          onKeyPress: e => {
            let t = e.currentTarget.value;
            if (e.key !== h.N$.Enter && t.includes("#")) {
              i()(null != n.current, "Input is handling keypress when not mounted");
              let r = t.indexOf("#"),
                l = n.current.selectionStart,
                a = e.key === h.N$.Backspace || e.key === h.N$.ArrowRight || e.key === h.N$.ArrowLeft,
                c = e.which >= 48 && e.which <= 57;
              null != l && l > r && /^(.+?#\d{4})$/.test(t) && !a ? e.preventDefault() : null == l || !(l > r) || c || a || e.preventDefault()
            }
          },
          onChange: e => {
            if (e.length <= 0) return void f({
              type: "RESET"
            });
            let t = "",
              [, n] = e.split("#");
            null != n && (t = e + b.RoK.slice(null != n ? n.length + 1 : 0)), f({
              type: "HINT",
              text: t
            })
          },
          maxLength: 37,
          autoFocus: true,
          autoComplete: "off",
          name: "add-friend",
          "data-form-type": "other",
          "data-lpignore": true,
          "data-1p-ignore": true,
          placeholder: t,
          "aria-label": t,
          "aria-invalid": null != k || true,
          "aria-describedby": null != k ? N : w
        }), null != y && (0, r.jsx)("div", {
          className: v.dQ,
          "aria-hidden": true,
          children: y
        }), (0, r.jsx)(u.Button, {
          variant: "primary",
          size: "sm",
          text: m.intl.string(m.t["PMsq/b"]),
          disabled: !g,
          type: "submit"
        })]
      })
    }), null != k && (0, r.jsx)("div", {
      role: "alert",
      children: (0, r.jsx)(u.Text, {
        id: N,
        variant: "text-sm/normal",
        className: x.Ot,
        color: "text-feedback-critical",
        children: k
      })
    }), null != E && (0, r.jsx)("div", {
      role: "status",
      children: (0, r.jsx)(u.Text, {
        variant: "text-sm/normal",
        className: x.Ot,
        color: "text-feedback-positive",
        children: E
      })
    })]
  })
}