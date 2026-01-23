/** Chunk was on 27084 **/
/** chunk id: 115884, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => S
}), require("./896048.js"), require("./733351.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  c = require.n(Chunk284009),
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

function v(e) {
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
  _ = (0, Chunk915089.Ld)(),
  R = "".concat(_, "-decription"),
  w = "".concat(_, "-error");

function N(e, t) {
  switch (t.type) {
    case "RESET":
      return O;
    case "SUCCESS":
      return y(v({}, O), {
        success: t.text
      });
    case "HINT":
      return y(v({}, O), {
        canSend: true,
        hint: t.text
      });
    case "ERROR":
      return y(v({}, e), {
        canSend: true,
        error: t.text
      })
  }
}

function S(e) {
  let {
    placeholder: t = m.intl.string(m.t["Rn/sLl"])
  } = e, n = i.useRef(null), a = i.useRef(null), [s, p] = i.useReducer(N, O), {
    canSend: v,
    hint: y,
    error: S,
    success: k
  } = s;
  return i.useEffect(() => {
    null != k && (c()(null != n.current, "Input is submitting when not mounted"), n.current.value = "", n.current.focus())
  }, [k, n]), (0, r.jsxs)("form", {
    onSubmit: e => {
      e.preventDefault(), c()(null != n.current, "Input is submitted when not mounted");
      let t = n.current.value.trim();
      !t.includes("#") && t.startsWith("@") && (t = t.substring(1));
      let r = (0, b.Ty)(t);
      null != r ? p({
        type: "ERROR",
        text: r
      }) : d.A.sendRequest({
        discordTag: t,
        context: {
          location: "Add Friend"
        }
      }).then(() => p({
        type: "SUCCESS",
        text: m.intl.format(m.t.Rtl1Ep, {
          discordTag: t
        })
      }), e => {
        var n;
        return p({
          type: "ERROR",
          text: (0, b.vU)(null == (n = e.body) ? true : n.code, t)
        })
      })
    },
    autoComplete: "off",
    children: [(0, r.jsxs)("div", {
      className: x.QR,
      children: [(0, r.jsx)(o.Text, {
        tag: "div",
        variant: "heading-md/normal",
        children: m.intl.string(m.t["Rn/sLl"])
      }), (0, r.jsx)("img", {
        src: j,
        alt: "Wumpus Waving"
      })]
    }), (0, r.jsx)(o.vN3, {
      focusTarget: n,
      ringTarget: a,
      ringClassName: x.hN,
      children: (0, r.jsxs)("div", {
        ref: a,
        className: l()(x.fc, {
          [x.kX]: k,
          [x.z3]: S
        }),
        children: [(0, r.jsx)(u.ob, {
          id: _,
          inputRef: n,
          className: x.QP,
          inputClassName: x.hF,
          onKeyPress: e => {
            let t = e.currentTarget.value;
            if (e.key !== h.N$.Enter && t.includes("#")) {
              c()(null != n.current, "Input is handling keypress when not mounted");
              let r = t.indexOf("#"),
                i = n.current.selectionStart,
                a = e.key === h.N$.Backspace || e.key === h.N$.ArrowRight || e.key === h.N$.ArrowLeft,
                l = e.which >= 48 && e.which <= 57;
              null != i && i > r && /^(.+?#\d{4})$/.test(t) && !a ? e.preventDefault() : null == i || !(i > r) || l || a || e.preventDefault()
            }
          },
          onChange: e => {
            if (e.length <= 0) return void p({
              type: "RESET"
            });
            let t = "",
              [, n] = e.split("#");
            null != n && (t = e + f.RoK.slice(null != n ? n.length + 1 : 0)), p({
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
          "aria-invalid": null != S || true,
          "aria-describedby": null != S ? w : R
        }), null != y && (0, r.jsx)("div", {
          className: x.dQ,
          "aria-hidden": true,
          children: y
        }), (0, r.jsx)(o.Button, {
          variant: "primary",
          size: "sm",
          text: m.intl.string(m.t["PMsq/b"]),
          disabled: !v,
          type: "submit"
        })]
      })
    }), null != S && (0, r.jsx)("div", {
      role: "alert",
      children: (0, r.jsx)(o.Text, {
        id: w,
        variant: "text-sm/normal",
        className: g.Ot,
        color: "text-feedback-critical",
        children: S
      })
    }), null != k && (0, r.jsx)("div", {
      role: "status",
      children: (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        className: g.Ot,
        color: "text-feedback-positive",
        children: k
      })
    })]
  })
}