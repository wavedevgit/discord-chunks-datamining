/** Chunk was on 49078 **/
r.d(t, {
  Z: () => v
}), r(388685), r(781311), r(35282);
var n = r(255367),
  l = r(73800),
  i = r(120356),
  s = r.n(i),
  a = r(512722),
  u = r.n(a),
  o = r(481060),
  c = r(194359),
  f = r(313201),
  d = r(657682),
  p = r(981631),
  x = r(420212),
  y = r(388032),
  g = r(28898),
  b = r(20493);

function h(e) {
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

function m(e, t) {
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
let _ = r(349181),
  O = {
    canSend: !1,
    hint: null,
    success: null,
    error: null
  },
  R = (0, f.hQ)(),
  j = "".concat(R, "-decription"),
  E = "".concat(R, "-error");

function S(e, t) {
  switch (t.type) {
    case "RESET":
      return O;
    case "SUCCESS":
      return m(h({}, O), {
        success: t.text
      });
    case "HINT":
      return m(h({}, O), {
        canSend: !0,
        hint: t.text
      });
    case "ERROR":
      return m(h({}, e), {
        canSend: !0,
        error: t.text
      })
  }
}

function v(e) {
  let {
    placeholder: t = y.intl.string(y.t["Rn/sLi"])
  } = e, r = l.useRef(null), i = l.useRef(null), [a, f] = l.useReducer(S, O), {
    canSend: h,
    hint: m,
    success: v,
    error: w
  } = a;
  return l.useEffect(() => {
    null != v && (u()(null != r.current, "Input is submitting when not mounted"), r.current.value = "", r.current.focus())
  }, [v, r]), (0, n.jsxs)("form", {
    onSubmit: e => {
      e.preventDefault(), u()(null != r.current, "Input is submitted when not mounted");
      let t = r.current.value.trim();
      !t.includes("#") && t.startsWith("@") && (t = t.substring(1));
      let n = (0, d.Zy)(t);
      if (null != n) return void f({
        type: "ERROR",
        text: n
      });
      c.Z.sendRequest({
        discordTag: t,
        context: {
          location: "Add Friend"
        }
      }).then(() => f({
        type: "SUCCESS",
        text: y.intl.format(y.t.Rtl1Eh, {
          discordTag: t
        })
      }), e => {
        var r;
        return f({
          type: "ERROR",
          text: (0, d.NF)(null == (r = e.body) ? void 0 : r.code, t)
        })
      })
    },
    autoComplete: "off",
    children: [(0, n.jsxs)("div", {
      className: g.addFriendWumpusWrapper,
      children: [(0, n.jsx)(o.R94, {
        id: j,
        type: o.R94.Types.DESCRIPTION,
        children: (0, n.jsx)(o.Text, {
          tag: "div",
          variant: "heading-md/normal",
          children: y.intl.string(y.t["Rn/sLi"])
        })
      }), (0, n.jsx)("img", {
        src: _,
        alt: "Wumpus Waving"
      })]
    }), (0, n.jsx)(o.tEY, {
      focusTarget: r,
      ringTarget: i,
      ringClassName: g.ring,
      children: (0, n.jsxs)("div", {
        ref: i,
        className: s()(g.addFriendInputWrapper, {
          [g.success]: v,
          [g.error]: w
        }),
        children: [(0, n.jsx)(o.oil, {
          id: R,
          inputRef: r,
          className: g.addFriendInput,
          inputClassName: g.input,
          onKeyPress: e => {
            let t = e.currentTarget.value;
            if (e.key !== x.mR.Enter && t.includes("#")) {
              u()(null != r.current, "Input is handling keypress when not mounted");
              let n = t.indexOf("#"),
                l = r.current.selectionStart,
                i = e.key === x.mR.Backspace || e.key === x.mR.ArrowRight || e.key === x.mR.ArrowLeft,
                s = e.which >= 48 && e.which <= 57;
              null != l && l > n && /^(.+?#\d{4})$/.test(t) && !i ? e.preventDefault() : null == l || !(l > n) || s || i || e.preventDefault()
            }
          },
          onChange: e => {
            if (e.length <= 0) return void f({
              type: "RESET"
            });
            let t = "",
              [, r] = e.split("#");
            null != r && (t = e + p.LYt.slice(null != r ? r.length + 1 : 0)), f({
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
          "aria-describedby": null != w ? E : j
        }), null != m && (0, n.jsx)("div", {
          className: g.addFriendHint,
          "aria-hidden": !0,
          children: m
        }), (0, n.jsx)(o.zxk, {
          variant: "primary",
          size: "sm",
          text: y.intl.string(y.t["PMsq/f"]),
          disabled: !h,
          type: "submit"
        })]
      })
    }), null != w && (0, n.jsx)(o.R94, {
      role: "alert",
      id: E,
      type: o.R94.Types.ERROR,
      className: b.marginTop8,
      children: w
    }), null != v && (0, n.jsx)(o.R94, {
      role: "status",
      type: o.R94.Types.SUCCESS,
      className: b.marginTop8,
      children: v
    })]
  })
}