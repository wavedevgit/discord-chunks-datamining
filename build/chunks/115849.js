/** Chunk was on 49078 **/
n.d(t, {
  Z: () => E
}), n(388685), n(781311), n(35282);
var r = n(255367),
  i = n(73800),
  s = n(120356),
  a = n.n(s),
  l = n(512722),
  u = n.n(l),
  c = n(481060),
  d = n(194359),
  o = n(313201),
  p = n(657682),
  f = n(981631),
  h = n(420212),
  b = n(388032),
  m = n(28898),
  g = n(20493);

function y(e) {
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

function x(e, t) {
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
let R = n(349181),
  j = {
    canSend: !1,
    hint: null,
    success: null,
    error: null
  },
  v = (0, o.hQ)(),
  O = "".concat(v, "-decription"),
  _ = "".concat(v, "-error");

function S(e, t) {
  switch (t.type) {
    case "RESET":
      return j;
    case "SUCCESS":
      return x(y({}, j), {
        success: t.text
      });
    case "HINT":
      return x(y({}, j), {
        canSend: !0,
        hint: t.text
      });
    case "ERROR":
      return x(y({}, e), {
        canSend: !0,
        error: t.text
      })
  }
}

function E(e) {
  let {
    placeholder: t = b.intl.string(b.t["Rn/sLi"])
  } = e, n = i.useRef(null), s = i.useRef(null), [l, o] = i.useReducer(S, j), {
    canSend: y,
    hint: x,
    success: E,
    error: w
  } = l;
  return i.useEffect(() => {
    null != E && (u()(null != n.current, "Input is submitting when not mounted"), n.current.value = "", n.current.focus())
  }, [E, n]), (0, r.jsxs)("form", {
    onSubmit: e => {
      e.preventDefault(), u()(null != n.current, "Input is submitted when not mounted");
      let t = n.current.value.trim();
      !t.includes("#") && t.startsWith("@") && (t = t.substring(1));
      let r = (0, p.Zy)(t);
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
        text: b.intl.format(b.t.Rtl1Eh, {
          discordTag: t
        })
      }), e => {
        var n;
        return o({
          type: "ERROR",
          text: (0, p.NF)(null == (n = e.body) ? void 0 : n.code, t)
        })
      })
    },
    autoComplete: "off",
    children: [(0, r.jsxs)("div", {
      className: m.addFriendWumpusWrapper,
      children: [(0, r.jsx)(c.R94, {
        id: O,
        type: c.R94.Types.DESCRIPTION,
        children: (0, r.jsx)(c.Text, {
          tag: "div",
          variant: "heading-md/normal",
          children: b.intl.string(b.t["Rn/sLi"])
        })
      }), (0, r.jsx)("img", {
        src: R,
        alt: "Wumpus Waving"
      })]
    }), (0, r.jsx)(c.tEY, {
      focusTarget: n,
      ringTarget: s,
      ringClassName: m.ring,
      children: (0, r.jsxs)("div", {
        ref: s,
        className: a()(m.addFriendInputWrapper, {
          [m.success]: E,
          [m.error]: w
        }),
        children: [(0, r.jsx)(c.oil, {
          id: v,
          inputRef: n,
          className: m.addFriendInput,
          inputClassName: m.input,
          onKeyPress: e => {
            let t = e.currentTarget.value;
            if (e.key !== h.mR.Enter && t.includes("#")) {
              u()(null != n.current, "Input is handling keypress when not mounted");
              let r = t.indexOf("#"),
                i = n.current.selectionStart,
                s = e.key === h.mR.Backspace || e.key === h.mR.ArrowRight || e.key === h.mR.ArrowLeft,
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
            null != n && (t = e + f.LYt.slice(null != n ? n.length + 1 : 0)), o({
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
          "aria-invalid": null != w || void 0,
          "aria-describedby": null != w ? _ : O
        }), null != x && (0, r.jsx)("div", {
          className: m.addFriendHint,
          "aria-hidden": !0,
          children: x
        }), (0, r.jsx)(c.zxk, {
          size: c.zxk.Sizes.SMALL,
          disabled: !y,
          type: "submit",
          children: b.intl.string(b.t["PMsq/f"])
        })]
      })
    }), null != w && (0, r.jsx)(c.R94, {
      role: "alert",
      id: _,
      type: c.R94.Types.ERROR,
      className: g.marginTop8,
      children: w
    }), null != E && (0, r.jsx)(c.R94, {
      role: "status",
      type: c.R94.Types.SUCCESS,
      className: g.marginTop8,
      children: E
    })]
  })
}