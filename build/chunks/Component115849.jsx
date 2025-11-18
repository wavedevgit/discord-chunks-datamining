/** Chunk was on 49078 **/
/** chunk id: 115849, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
}), require("./388685.js"), require("./781311.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  u = require.n(Chunk512722),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk194359 = require("./194359.js"),
  Chunk313201 = require("./313201.js"),
  Chunk657682 = require("./657682.js"),
  Chunk981631 = require("./981631.js"),
  Chunk295907 = require("./295907.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk118213 = require("./118213.js"),
  Chunk10198 = require("./10198.js");

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
let Chunk349181 = require("./349181.js"),
  _ = {
    canSend: false,
    hint: null,
    success: null,
    error: null
  },
  O = (0, Chunk313201.hQ)(),
  R = "".concat(O, "-decription"),
  w = "".concat(O, "-error");

function S(e, t) {
  switch (t.type) {
    case "RESET":
      return _;
    case "SUCCESS":
      return y(v({}, _), {
        success: t.text
      });
    case "HINT":
      return y(v({}, _), {
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

function T(e) {
  let {
    placeholder: t = h.intl.string(h.t["Rn/sLl"])
  } = e, n = i.useRef(null), a = i.useRef(null), [l, p] = i.useReducer(S, _), {
    canSend: v,
    hint: y,
    error: T,
    success: E
  } = l;
  return i.useEffect(() => {
    null != E && (u()(null != n.current, "Input is submitting when not mounted"), n.current.value = "", n.current.focus())
  }, [E, n]), (0, r.jsxs)("form", {
    onSubmit: e => {
      e.preventDefault(), u()(null != n.current, "Input is submitted when not mounted");
      let t = n.current.value.trim();
      !t.includes("#") && t.startsWith("@") && (t = t.substring(1));
      let r = (0, f.Zy)(t);
      if (null != r) return void p({
        type: "ERROR",
        text: r
      });
      d.Z.sendRequest({
        discordTag: t,
        context: {
          location: "Add Friend"
        }
      }).then(() => p({
        type: "SUCCESS",
        text: h.intl.format(h.t.Rtl1Ep, {
          discordTag: t
        })
      }), e => {
        var n;
        return p({
          type: "ERROR",
          text: (0, f.NF)(null == (n = e.body) ? true : n.code, t)
        })
      })
    },
    autoComplete: "off",
    children: [(0, r.jsxs)("div", {
      className: x.addFriendWumpusWrapper,
      children: [(0, r.jsx)(o.Text, {
        tag: "div",
        variant: "heading-md/normal",
        children: h.intl.string(h.t["Rn/sLl"])
      }), (0, r.jsx)("img", {
        src: j,
        alt: "Wumpus Waving"
      })]
    }), (0, r.jsx)(o.tEY, {
      focusTarget: n,
      ringTarget: a,
      ringClassName: x.ring,
      children: (0, r.jsxs)("div", {
        ref: a,
        className: s()(x.addFriendInputWrapper, {
          [x.success]: E,
          [x.error]: T
        }),
        children: [(0, r.jsx)(c.Is, {
          id: O,
          inputRef: n,
          className: x.addFriendInput,
          inputClassName: x.input,
          onKeyPress: e => {
            let t = e.currentTarget.value;
            if (e.key !== m.mR.Enter && t.includes("#")) {
              u()(null != n.current, "Input is handling keypress when not mounted");
              let r = t.indexOf("#"),
                i = n.current.selectionStart,
                a = e.key === m.mR.Backspace || e.key === m.mR.ArrowRight || e.key === m.mR.ArrowLeft,
                s = e.which >= 48 && e.which <= 57;
              null != i && i > r && /^(.+?#\d{4})$/.test(t) && !a ? e.preventDefault() : null == i || !(i > r) || s || a || e.preventDefault()
            }
          },
          onChange: e => {
            if (e.length <= 0) return void p({
              type: "RESET"
            });
            let t = "",
              [, n] = e.split("#");
            null != n && (t = e + b.LYt.slice(null != n ? n.length + 1 : 0)), p({
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
          "aria-invalid": null != T || true,
          "aria-describedby": null != T ? w : R
        }), null != y && (0, r.jsx)("div", {
          className: x.addFriendHint,
          "aria-hidden": true,
          children: y
        }), (0, r.jsx)(o.Button, {
          variant: "primary",
          size: "sm",
          text: h.intl.string(h.t["PMsq/b"]),
          disabled: !v,
          type: "submit"
        })]
      })
    }), null != T && (0, r.jsx)("div", {
      role: "alert",
      children: (0, r.jsx)(o.Text, {
        id: w,
        variant: "text-sm/normal",
        className: g.marginTop8,
        color: "text-feedback-critical",
        children: T
      })
    }), null != E && (0, r.jsx)("div", {
      role: "status",
      children: (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        className: g.marginTop8,
        color: "text-feedback-positive",
        children: E
      })
    })]
  })
}