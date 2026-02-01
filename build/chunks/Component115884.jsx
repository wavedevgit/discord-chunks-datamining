/** Chunk was on 21738 **/
/** chunk id: 115884, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => N
}), require("./896048.js"), require("./733351.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
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

function b(e) {
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

function E(e, t) {
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
  y = {
    canSend: false,
    hint: null,
    success: null,
    error: null
  },
  I = (0, Chunk915089.Ld)(),
  v = "".concat(I, "-decription"),
  S = "".concat(I, "-error");

function C(e, t) {
  switch (t.type) {
    case "RESET":
      return y;
    case "SUCCESS":
      return E(b({}, y), {
        success: t.text
      });
    case "HINT":
      return E(b({}, y), {
        canSend: true,
        hint: t.text
      });
    case "ERROR":
      return E(b({}, e), {
        canSend: true,
        error: t.text
      })
  }
}

function N(e) {
  let {
    placeholder: t = f.intl.string(f.t["Rn/sLl"])
  } = e, n = i.useRef(null), l = i.useRef(null), [s, p] = i.useReducer(C, y), {
    canSend: b,
    hint: E,
    error: N,
    success: T
  } = s;
  return i.useEffect(() => {
    null != T && (o()(null != n.current, "Input is submitting when not mounted"), n.current.value = "", n.current.focus())
  }, [T, n]), (0, r.jsxs)("form", {
    onSubmit: e => {
      e.preventDefault(), o()(null != n.current, "Input is submitted when not mounted");
      let t = n.current.value.trim();
      !t.includes("#") && t.startsWith("@") && (t = t.substring(1));
      let r = (0, h.Ty)(t);
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
        text: f.intl.format(f.t.Rtl1Ep, {
          discordTag: t
        })
      }), e => {
        var n;
        return p({
          type: "ERROR",
          text: (0, h.vU)(null == (n = e.body) ? true : n.code, t)
        })
      })
    },
    autoComplete: "off",
    children: [(0, r.jsxs)("div", {
      className: A.QR,
      children: [(0, r.jsx)(u.Text, {
        tag: "div",
        variant: "heading-md/normal",
        children: f.intl.string(f.t["Rn/sLl"])
      }), (0, r.jsx)("img", {
        src: O,
        alt: "Wumpus Waving"
      })]
    }), (0, r.jsx)(u.vN3, {
      focusTarget: n,
      ringTarget: l,
      ringClassName: A.hN,
      children: (0, r.jsxs)("div", {
        ref: l,
        className: a()(A.fc, {
          [A.kX]: T,
          [A.z3]: N
        }),
        children: [(0, r.jsx)(c.ob, {
          id: I,
          inputRef: n,
          className: A.QP,
          inputClassName: A.hF,
          onKeyPress: e => {
            let t = e.currentTarget.value;
            if (e.key !== m.N$.Enter && t.includes("#")) {
              o()(null != n.current, "Input is handling keypress when not mounted");
              let r = t.indexOf("#"),
                i = n.current.selectionStart,
                l = e.key === m.N$.Backspace || e.key === m.N$.ArrowRight || e.key === m.N$.ArrowLeft,
                a = e.which >= 48 && e.which <= 57;
              null != i && i > r && /^(.+?#\d{4})$/.test(t) && !l ? e.preventDefault() : null == i || !(i > r) || a || l || e.preventDefault()
            }
          },
          onChange: e => {
            if (e.length <= 0) return void p({
              type: "RESET"
            });
            let t = "",
              [, n] = e.split("#");
            null != n && (t = e + g.RoK.slice(null != n ? n.length + 1 : 0)), p({
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
          "aria-invalid": null != N || true,
          "aria-describedby": null != N ? S : v
        }), null != E && (0, r.jsx)("div", {
          className: A.dQ,
          "aria-hidden": true,
          children: E
        }), (0, r.jsx)(u.Button, {
          variant: "primary",
          size: "sm",
          text: f.intl.string(f.t["PMsq/b"]),
          disabled: !b,
          type: "submit"
        })]
      })
    }), null != N && (0, r.jsx)("div", {
      role: "alert",
      children: (0, r.jsx)(u.Text, {
        id: S,
        variant: "text-sm/normal",
        className: _.Ot,
        color: "text-feedback-critical",
        children: N
      })
    }), null != T && (0, r.jsx)("div", {
      role: "status",
      children: (0, r.jsx)(u.Text, {
        variant: "text-sm/normal",
        className: _.Ot,
        color: "text-feedback-positive",
        children: T
      })
    })]
  })
}