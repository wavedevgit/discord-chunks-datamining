/** Chunk was on 49078 **/
/** chunk id: 115849, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => w
}), require("./388685.js"), require("./781311.js"), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk420212 = require("./420212.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk28898 = require("./28898.js"),
  Chunk20493 = require("./20493.js");

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}
let Chunk349181 = require("./349181.js"),
  R = {
    canSend: false,
    hint: null,
    success: null,
    error: null
  },
  j = (0, Chunk313201.hQ)(),
  E = "".concat(j, "-decription"),
  S = "".concat(j, "-error");

function v(e, t) {
  switch (t.type) {
    case "RESET":
      return R;
    case "SUCCESS":
      return _(m({}, R), {
        success: t.text
      });
    case "HINT":
      return _(m({}, R), {
        canSend: true,
        hint: t.text
      });
    case "ERROR":
      return _(m({}, e), {
        canSend: true,
        error: t.text
      })
  }
}

function w(e) {
  let {
    placeholder: t = g.intl.string(g.t["Rn/sLi"])
  } = e, r = l.useRef(null), i = l.useRef(null), [a, d] = l.useReducer(v, R), {
    canSend: m,
    hint: _,
    success: w,
    error: C
  } = a;
  return l.useEffect(() => {
    null != w && (u()(null != r.current, "Input is submitting when not mounted"), r.current.value = "", r.current.focus())
  }, [w, r]), (0, n.jsxs)("form", {
    onSubmit: e => {
      e.preventDefault(), u()(null != r.current, "Input is submitted when not mounted");
      let t = r.current.value.trim();
      !t.includes("#") && t.startsWith("@") && (t = t.substring(1));
      let n = (0, p.Zy)(t);
      if (null != n) return void d({
        type: "ERROR",
        text: n
      });
      f.Z.sendRequest({
        discordTag: t,
        context: {
          location: "Add Friend"
        }
      }).then(() => d({
        type: "SUCCESS",
        text: g.intl.format(g.t.Rtl1Eh, {
          discordTag: t
        })
      }), e => {
        var r;
        return d({
          type: "ERROR",
          text: (0, p.NF)(null == (r = e.body) ? true : r.code, t)
        })
      })
    },
    autoComplete: "off",
    children: [(0, n.jsxs)("div", {
      className: b.addFriendWumpusWrapper,
      children: [(0, n.jsx)(c.R94, {
        id: E,
        type: c.R94.Types.DESCRIPTION,
        children: (0, n.jsx)(c.Text, {
          tag: "div",
          variant: "heading-md/normal",
          children: g.intl.string(g.t["Rn/sLi"])
        })
      }), (0, n.jsx)("img", {
        src: O,
        alt: "Wumpus Waving"
      })]
    }), (0, n.jsx)(c.tEY, {
      focusTarget: r,
      ringTarget: i,
      ringClassName: b.ring,
      children: (0, n.jsxs)("div", {
        ref: i,
        className: s()(b.addFriendInputWrapper, {
          [b.success]: w,
          [b.error]: C
        }),
        children: [(0, n.jsx)(o.Is, {
          id: j,
          inputRef: r,
          className: b.addFriendInput,
          inputClassName: b.input,
          onKeyPress: e => {
            let t = e.currentTarget.value;
            if (e.key !== y.mR.Enter && t.includes("#")) {
              u()(null != r.current, "Input is handling keypress when not mounted");
              let n = t.indexOf("#"),
                l = r.current.selectionStart,
                i = e.key === y.mR.Backspace || e.key === y.mR.ArrowRight || e.key === y.mR.ArrowLeft,
                s = e.which >= 48 && e.which <= 57;
              null != l && l > n && /^(.+?#\d{4})$/.test(t) && !i ? e.preventDefault() : null == l || !(l > n) || s || i || e.preventDefault()
            }
          },
          onChange: e => {
            if (e.length <= 0) return void d({
              type: "RESET"
            });
            let t = "",
              [, r] = e.split("#");
            null != r && (t = e + x.LYt.slice(null != r ? r.length + 1 : 0)), d({
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
          "aria-invalid": null != C || true,
          "aria-describedby": null != C ? S : E
        }), null != _ && (0, n.jsx)("div", {
          className: b.addFriendHint,
          "aria-hidden": true,
          children: _
        }), (0, n.jsx)(c.zxk, {
          variant: "primary",
          size: "sm",
          text: g.intl.string(g.t["PMsq/f"]),
          disabled: !m,
          type: "submit"
        })]
      })
    }), null != C && (0, n.jsx)(c.R94, {
      role: "alert",
      id: S,
      type: c.R94.Types.ERROR,
      className: h.marginTop8,
      children: C
    }), null != w && (0, n.jsx)(c.R94, {
      role: "status",
      type: c.R94.Types.SUCCESS,
      className: h.marginTop8,
      children: w
    })]
  })
}