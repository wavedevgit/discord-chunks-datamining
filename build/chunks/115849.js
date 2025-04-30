/** Chunk was on 49078 **/
n.d(t, {
  Z: () => w
}), n(388685), n(781311), n(35282);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(512722),
  u = n.n(l),
  c = n(481060),
  d = n(194359),
  o = n(313201),
  p = n(540059),
  f = n(657682),
  h = n(981631),
  b = n(420212),
  g = n(388032),
  m = n(28898),
  y = n(20493);

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
        enumerable: !0,
        configurable: !0,
        writable: !0
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
let j = n(349181),
  v = {
    canSend: !1,
    hint: null,
    success: null,
    error: null
  },
  O = (0, o.hQ)(),
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
        canSend: !0,
        hint: t.text
      });
    case "ERROR":
      return R(x({}, e), {
        canSend: !0,
        error: t.text
      })
  }
}

function w(e) {
  let {
    placeholder: t = g.intl.string(g.t["Rn/sLi"])
  } = e, n = i.createRef(), s = i.createRef(), [l, o] = i.useReducer(E, v), {
    canSend: x,
    hint: R,
    success: w,
    error: T
  } = l, k = (0, p.Q3)("AddFriendInput");
  return i.useEffect(() => {
    null != w && (u()(null != n.current, "Input is submitting when not mounted"), n.current.value = "", n.current.focus())
  }, [w, n]), (0, r.jsxs)("form", {
    onSubmit: e => {
      e.preventDefault(), u()(null != n.current, "Input is submitted when not mounted");
      let t = n.current.value.trim();
      !t.includes("#") && t.startsWith("@") && (t = t.substring(1));
      let r = (0, f.Zy)(t);
      if (null != r) return void o({
        type: "ERROR",
        text: r
      });
      d.Z.sendRequest({
        discordTag: t,
        context: {
          location: "Add Friend"
        }
      }).then(() => o({
        type: "SUCCESS",
        text: g.intl.format(g.t.Rtl1Eh, {
          discordTag: t
        })
      }), e => {
        var n;
        return o({
          type: "ERROR",
          text: (0, f.NF)(null == (n = e.body) ? void 0 : n.code, t)
        })
      })
    },
    autoComplete: "off",
    children: [(0, r.jsxs)("div", {
      className: m.addFriendWumpusWrapper,
      children: [(0, r.jsx)(c.R94, {
        id: _,
        type: c.R94.Types.DESCRIPTION,
        children: (0, r.jsx)(c.Text, {
          tag: "div",
          variant: "heading-md/normal",
          children: g.intl.string(g.t["Rn/sLi"])
        })
      }), k ? (0, r.jsx)("img", {
        src: j,
        alt: "Wumpus Waving"
      }) : null]
    }), (0, r.jsx)(c.tEY, {
      focusTarget: n,
      ringTarget: s,
      ringClassName: m.ring,
      children: (0, r.jsxs)("div", {
        ref: s,
        className: a()(m.addFriendInputWrapper, {
          [m.success]: w,
          [m.error]: T
        }),
        children: [(0, r.jsx)(c.oil, {
          id: O,
          inputRef: n,
          className: m.addFriendInput,
          inputClassName: m.input,
          onKeyPress: e => {
            let t = e.currentTarget.value;
            if (e.key !== b.mR.Enter && t.includes("#")) {
              u()(null != n.current, "Input is handling keypress when not mounted");
              let r = t.indexOf("#"),
                i = n.current.selectionStart,
                s = e.key === b.mR.Backspace || e.key === b.mR.ArrowRight || e.key === b.mR.ArrowLeft,
                a = e.which >= 48 && e.which <= 57;
              null != i && i > r && /^(.+?#\d{4})$/.test(t) && !s ? e.preventDefault() : null == i || !(i > r) || a || s || e.preventDefault()
            }
          },
          onChange: e => {
            if (e.length <= 0) return void o({
              type: "RESET"
            });
            let t = "",
              [, n] = e.split("#");
            null != n && (t = e + h.LYt.slice(null != n ? n.length + 1 : 0)), o({
              type: "HINT",
              text: t
            })
          },
          maxLength: 37,
          autoFocus: !0,
          autoComplete: "off",
          name: "add-friend",
          "data-form-type": "other",
          "data-lpignore": !0,
          "data-1p-ignore": !0,
          placeholder: t,
          "aria-label": t,
          "aria-invalid": null != T || void 0,
          "aria-describedby": null != T ? S : _
        }), null != R && (0, r.jsx)("div", {
          className: m.addFriendHint,
          "aria-hidden": !0,
          children: R
        }), (0, r.jsx)(c.zxk, {
          size: c.zxk.Sizes.SMALL,
          disabled: !x,
          type: "submit",
          children: g.intl.string(g.t["PMsq/f"])
        })]
      })
    }), null != T && (0, r.jsx)(c.R94, {
      role: "alert",
      id: S,
      type: c.R94.Types.ERROR,
      className: y.marginTop8,
      children: T
    }), null != w && (0, r.jsx)(c.R94, {
      role: "status",
      type: c.R94.Types.SUCCESS,
      className: y.marginTop8,
      children: w
    })]
  })
}