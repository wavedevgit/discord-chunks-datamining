/** Chunk was on 49078 **/
/** chunk id: 115849, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
}), require("./388685.js"), require("./781311.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk194359 = require("./194359.js"),
  Chunk313201 = require("./313201.js"),
  Chunk657682 = require("./657682.js"),
  Chunk981631 = require("./981631.js"),
  Chunk420212 = require("./420212.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk118213 = require("./118213.js"),
  Chunk10198 = require("./10198.js");

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

function R(e, t) {
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
  v = {
    canSend: false,
    hint: null,
    success: null,
    error: null
  },
  O = (0, Chunk313201.hQ)(),
  _ = "".concat(O, "-decription"),
  S = "".concat(O, "-error");

function E(e, t) {
  switch (t.type) {
    case "RESET":
      return v;
    case "SUCCESS":
      return R(x({}, v), {
        success: t.text
      });
    case "HINT":
      return R(x({}, v), {
        canSend: true,
        hint: t.text
      });
    case "ERROR":
      return R(x({}, e), {
        canSend: true,
        error: t.text
      })
  }
}

function w(e) {
  let {
    placeholder: t = m.intl.string(m.t["Rn/sLi"])
  } = e, n = i.useRef(null), s = i.useRef(null), [u, p] = i.useReducer(E, v), {
    canSend: x,
    hint: R,
    success: w,
    error: T
  } = u;
  return i.useEffect(() => {
    null != w && (l()(null != n.current, "Input is submitting when not mounted"), n.current.value = "", n.current.focus())
  }, [w, n]), (0, r.jsxs)("form", {
    onSubmit: e => {
      e.preventDefault(), l()(null != n.current, "Input is submitted when not mounted");
      let t = n.current.value.trim();
      !t.includes("#") && t.startsWith("@") && (t = t.substring(1));
      let r = (0, f.Zy)(t);
      if (null != r) return void p({
        type: "ERROR",
        text: r
      });
      o.Z.sendRequest({
        discordTag: t,
        context: {
          location: "Add Friend"
        }
      }).then(() => p({
        type: "SUCCESS",
        text: m.intl.format(m.t.Rtl1Eh, {
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
      className: g.addFriendWumpusWrapper,
      children: [(0, r.jsx)(d.R94, {
        id: _,
        type: d.R94.Types.DESCRIPTION,
        children: (0, r.jsx)(d.Text, {
          tag: "div",
          variant: "heading-md/normal",
          children: m.intl.string(m.t["Rn/sLi"])
        })
      }), (0, r.jsx)("img", {
        src: j,
        alt: "Wumpus Waving"
      })]
    }), (0, r.jsx)(d.tEY, {
      focusTarget: n,
      ringTarget: s,
      ringClassName: g.ring,
      children: (0, r.jsxs)("div", {
        ref: s,
        className: a()(g.addFriendInputWrapper, {
          [g.success]: w,
          [g.error]: T
        }),
        children: [(0, r.jsx)(c.Is, {
          id: O,
          inputRef: n,
          className: g.addFriendInput,
          inputClassName: g.input,
          onKeyPress: e => {
            let t = e.currentTarget.value;
            if (e.key !== b.mR.Enter && t.includes("#")) {
              l()(null != n.current, "Input is handling keypress when not mounted");
              let r = t.indexOf("#"),
                i = n.current.selectionStart,
                s = e.key === b.mR.Backspace || e.key === b.mR.ArrowRight || e.key === b.mR.ArrowLeft,
                a = e.which >= 48 && e.which <= 57;
              null != i && i > r && /^(.+?#\d{4})$/.test(t) && !s ? e.preventDefault() : null == i || !(i > r) || a || s || e.preventDefault()
            }
          },
          onChange: e => {
            if (e.length <= 0) return void p({
              type: "RESET"
            });
            let t = "",
              [, n] = e.split("#");
            null != n && (t = e + h.LYt.slice(null != n ? n.length + 1 : 0)), p({
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
          "aria-describedby": null != T ? S : _
        }), null != R && (0, r.jsx)("div", {
          className: g.addFriendHint,
          "aria-hidden": true,
          children: R
        }), (0, r.jsx)(d.zxk, {
          variant: "primary",
          size: "sm",
          text: m.intl.string(m.t["PMsq/f"]),
          disabled: !x,
          type: "submit"
        })]
      })
    }), null != T && (0, r.jsx)(d.R94, {
      role: "alert",
      id: S,
      type: d.R94.Types.ERROR,
      className: y.marginTop8,
      children: T
    }), null != w && (0, r.jsx)(d.R94, {
      role: "status",
      type: d.R94.Types.SUCCESS,
      className: y.marginTop8,
      children: w
    })]
  })
}