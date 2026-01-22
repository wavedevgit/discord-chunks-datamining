/** Chunk was on web.js **/
/** chunk id: 622678, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk342393 = require("./342393.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk812745 = require("./812745.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk173900 = require("./173900.js"),
  Chunk713545 = require("./713545.js");
let _ = function(e) {
  let t = i.useRef(null),
    {
      stripeType: n,
      flipped: s,
      updateCompleted: _,
      onFocus: h,
      onBlur: m
    } = e,
    [g, E] = i.useState(u.Be.UNKNOWN),
    [b, y] = i.useState(false),
    [O, A] = i.useState(false),
    [v, S] = i.useState(null),
    [I, T] = i.useState({}),
    C = (0, a.useElements)(),
    N = i.useCallback(() => {
      if (null != C) switch (n) {
        case "cardNumber": {
          let e = C.getElement(a.CardNumberElement);
          if (null == e) return;
          e.off("change"), e.off("focus"), e.off("blur");
          break
        }
        case "cardExpiry": {
          let e = C.getElement(a.CardExpiryElement);
          if (null == e) return;
          e.off("change"), e.off("focus"), e.off("blur");
          break
        }
        case "cardCvc": {
          let e = C.getElement(a.CardCvcElement);
          if (null == e) return;
          e.off("change"), e.off("focus"), e.off("blur")
        }
      }
    }, [C, n]),
    R = i.useCallback(e => {
      O || e.empty || A(true), null != _ && _(e.complete), null != e.error && y(false)
    }, [O, _]),
    w = i.useCallback(() => {
      y(true), null == h || h()
    }, [h]),
    P = i.useCallback(() => {
      y(false), null == m || m()
    }, [m]),
    D = i.useCallback(() => {
      if (null != C) switch (n) {
        case "cardNumber": {
          let e = C.getElement(a.CardNumberElement);
          if (null == e) return;
          e.on("change", e => {
            g !== e.brand && E(e.brand), e.empty && O ? S(d.intl.string(d.t.eOIfuy)) : null != e.error ? S(d.intl.string(d.t.x4pWtJ)) : S(null), R(e)
          }), e.on("focus", w), e.on("blur", P);
          break
        }
        case "cardExpiry": {
          let e = C.getElement(a.CardExpiryElement);
          if (null == e) return;
          e.on("change", e => {
            null != e.error || e.empty && O ? S(d.intl.string(d.t["9/zZdl"])) : S(null), R(e)
          }), e.on("focus", w), e.on("blur", P);
          break
        }
        case "cardCvc": {
          let e = C.getElement(a.CardCvcElement);
          if (null == e) return;
          e.on("change", e => {
            null != e.error || e.empty && O ? S(d.intl.string(d.t.ro4isZ)) : S(null), R(e)
          }), e.on("focus", w), e.on("blur", P)
        }
      }
    }, [P, R, w, g, C, O, n]);
  i.useEffect(() => (D(), () => {
    N()
  }), [D, N]);
  let x = (0, c.rdh)(l.A.colors.TEXT_SUBTLE).hex(),
    L = (0, c.rdh)(l.A.colors.TEXT_STRONG).hex();

  function j() {
    return o()(f.vB, {
      [f.Tn]: null !== v,
      [f.iH]: b,
      [f.yD]: "cardNumber" === n
    })
  }

  function M() {
    switch (n) {
      case "cardNumber":
        return (0, r.jsxs)("div", {
          children: [(0, r.jsx)(u.Ay, {
            className: f.Ie,
            type: g,
            flipped: s
          }), (0, r.jsx)(a.CardNumberElement, {
            options: {
              style: I,
              placeholder: d.intl.string(d.t.gPRHfw),
              disableLink: false
            },
            className: j()
          })]
        });
      case "cardExpiry":
        return (0, r.jsx)(a.CardExpiryElement, {
          options: {
            style: I,
            placeholder: d.intl.string(d.t.xeEWQ6)
          },
          className: j()
        });
      case "cardCvc":
        return (0, r.jsx)(a.CardCvcElement, {
          options: {
            style: I,
            placeholder: d.intl.string(d.t.wZz04F)
          },
          className: j()
        })
    }
  }
  return i.useLayoutEffect(() => {
    let {
      current: e
    } = t;
    if (null == e) return;
    let n = window.getComputedStyle(e),
      r = n.getPropertyValue("font-family");
    T({
      base: {
        fontFamily: r,
        fontWeight: n.getPropertyValue("font-weight"),
        color: L,
        fontSize: n.getPropertyValue("font-size"),
        "::placeholder": {
          color: x
        }
      }
    })
  }, [t, x, L]), (0, r.jsxs)("div", {
    className: f.Zm,
    "data-stripe-type": n,
    children: [(0, r.jsx)("div", {
      ref: t,
      className: o()(f.iw, p.hF)
    }), M(), (0, r.jsx)(c.dzK, {
      error: v
    })]
  })
}