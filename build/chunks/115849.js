/** Chunk was on 49078 **/
r.d(t, {
  Z: () => w
}), r(388685), r(781311), r(35282);
var n = r(255367),
  l = r(73800),
  i = r(120356),
  s = r.n(i),
  a = r(512722),
  u = r.n(a),
  o = r(755721),
  c = r(481060),
  f = r(194359),
  d = r(313201),
  p = r(657682),
  x = r(981631),
  y = r(420212),
  g = r(388032),
  b = r(28898),
  h = r(20493);

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
        enumerable: !0,
        configurable: !0,
        writable: !0
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
let O = r(349181),
  R = {
    canSend: !1,
    hint: null,
    success: null,
    error: null
  },
  j = (0, d.hQ)(),
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
        canSend: !0,
        hint: t.text
      });
    case "ERROR":
      return _(m({}, e), {
        canSend: !0,
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
          text: (0, p.NF)(null == (r = e.body) ? void 0 : r.code, t)
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
          autoFocus: !0,
          autoComplete: "off",
          name: "add-friend",
          "data-form-type": "other",
          "data-lpignore": !0,
          "data-1p-ignore": !0,
          placeholder: t,
          "aria-label": t,
          "aria-invalid": null != C || void 0,
          "aria-describedby": null != C ? S : E
        }), null != _ && (0, n.jsx)("div", {
          className: b.addFriendHint,
          "aria-hidden": !0,
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