/** Chunk was on web.js **/
/** chunk id: 795487, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk289008 = require("./289008.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk219929 = require("./219929.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk391901 = require("./391901.js"),
  Chunk979712 = require("./979712.js");
let p = function(e) {
  let t = i.useRef(null),
    {
      stripeType: n,
      flipped: o,
      updateCompleted: p,
      onFocus: h,
      onBlur: m
    } = e,
    [g, E] = i.useState(u.Qy.UNKNOWN),
    [b, y] = i.useState(false),
    [O, v] = i.useState(false),
    [I, T] = i.useState(null),
    [S, A] = i.useState({}),
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
      O || e.empty || v(true), null != p && p(e.complete), null != e.error && y(false)
    }, [O, p]),
    P = i.useCallback(() => {
      y(true), null == h || h()
    }, [h]),
    w = i.useCallback(() => {
      y(false), null == m || m()
    }, [m]),
    D = i.useCallback(() => {
      if (null != C) switch (n) {
        case "cardNumber": {
          let e = C.getElement(a.CardNumberElement);
          if (null == e) return;
          e.on("change", e => {
            g !== e.brand && E(e.brand), e.empty && O ? T(d.intl.string(d.t.eOIfuy)) : null != e.error ? T(d.intl.string(d.t.x4pWtJ)) : T(null), R(e)
          }), e.on("focus", P), e.on("blur", w);
          break
        }
        case "cardExpiry": {
          let e = C.getElement(a.CardExpiryElement);
          if (null == e) return;
          e.on("change", e => {
            null != e.error || e.empty && O ? T(d.intl.string(d.t["9/zZdl"])) : T(null), R(e)
          }), e.on("focus", P), e.on("blur", w);
          break
        }
        case "cardCvc": {
          let e = C.getElement(a.CardCvcElement);
          if (null == e) return;
          e.on("change", e => {
            null != e.error || e.empty && O ? T(d.intl.string(d.t.ro4isZ)) : T(null), R(e)
          }), e.on("focus", P), e.on("blur", w)
        }
      }
    }, [w, R, P, g, C, O, n]);
  i.useEffect(() => (D(), () => {
    N()
  }), [D, N]);
  let x = (0, c.dQu)(l.Z.colors.TEXT_SECONDARY).hex(),
    L = (0, c.dQu)(l.Z.colors.TEXT_PRIMARY).hex();

  function M() {
    return s()(f.cardInput, {
      [f.cardInputError]: null !== I,
      [f.cardInputFocused]: b,
      [f.cardNumberInput]: "cardNumber" === n
    })
  }

  function j() {
    switch (n) {
      case "cardNumber":
        return (0, r.jsxs)("div", {
          children: [(0, r.jsx)(u.ZP, {
            className: f.cardIcon,
            type: g,
            flipped: o
          }), (0, r.jsx)(a.CardNumberElement, {
            options: {
              style: S,
              placeholder: d.intl.string(d.t.gPRHfw),
              disableLink: false
            },
            className: M()
          })]
        });
      case "cardExpiry":
        return (0, r.jsx)(a.CardExpiryElement, {
          options: {
            style: S,
            placeholder: d.intl.string(d.t.xeEWQ6)
          },
          className: M()
        });
      case "cardCvc":
        return (0, r.jsx)(a.CardCvcElement, {
          options: {
            style: S,
            placeholder: d.intl.string(d.t.wZz04F)
          },
          className: M()
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
    A({
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
    className: f.cardNumberWrapper,
    "data-stripe-type": n,
    children: [(0, r.jsx)("div", {
      ref: t,
      className: s()(f.hiddenDiv, _.input)
    }), j(), (0, r.jsx)(c.pdY, {
      error: I
    })]
  })
}