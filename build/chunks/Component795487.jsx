/** Chunk was on web.js **/
/** chunk id: 795487, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk575053 = require("./575053.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk219929 = require("./219929.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk391901 = require("./391901.js"),
  Chunk979712 = require("./979712.js");
let _ = function(e) {
  let t = i.useRef(null),
    {
      stripeType: n,
      flipped: o,
      updateCompleted: _,
      onFocus: m,
      onBlur: h
    } = e,
    [g, E] = i.useState(u.Qy.UNKNOWN),
    [b, y] = i.useState(false),
    [O, v] = i.useState(false),
    [S, I] = i.useState(null),
    [T, A] = i.useState({}),
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
    P = i.useCallback(e => {
      O || e.empty || v(true), null != _ && _(e.complete), null != e.error && y(false)
    }, [O, _]),
    R = i.useCallback(() => {
      y(true), null == m || m()
    }, [m]),
    w = i.useCallback(() => {
      y(false), null == h || h()
    }, [h]),
    D = i.useCallback(() => {
      if (null != C) switch (n) {
        case "cardNumber": {
          let e = C.getElement(a.CardNumberElement);
          if (null == e) return;
          e.on("change", e => {
            g !== e.brand && E(e.brand), e.empty && O ? I(d.intl.string(d.t.eOIfuy)) : null != e.error ? I(d.intl.string(d.t.x4pWtJ)) : I(null), P(e)
          }), e.on("focus", R), e.on("blur", w);
          break
        }
        case "cardExpiry": {
          let e = C.getElement(a.CardExpiryElement);
          if (null == e) return;
          e.on("change", e => {
            null != e.error || e.empty && O ? I(d.intl.string(d.t["9/zZdl"])) : I(null), P(e)
          }), e.on("focus", R), e.on("blur", w);
          break
        }
        case "cardCvc": {
          let e = C.getElement(a.CardCvcElement);
          if (null == e) return;
          e.on("change", e => {
            null != e.error || e.empty && O ? I(d.intl.string(d.t.ro4isZ)) : I(null), P(e)
          }), e.on("focus", R), e.on("blur", w)
        }
      }
    }, [w, P, R, g, C, O, n]);
  i.useEffect(() => (D(), () => {
    N()
  }), [D, N]);
  let x = (0, c.dQu)(l.Z.colors.TEXT_SECONDARY).hex(),
    L = (0, c.dQu)(l.Z.colors.TEXT_PRIMARY).hex();

  function j() {
    return s()(f.cardInput, {
      [f.cardInputError]: null !== S,
      [f.cardInputFocused]: b,
      [f.cardNumberInput]: "cardNumber" === n
    })
  }

  function M() {
    switch (n) {
      case "cardNumber":
        return (0, r.jsxs)("div", {
          children: [(0, r.jsx)(u.ZP, {
            className: f.cardIcon,
            type: g,
            flipped: o
          }), (0, r.jsx)(a.CardNumberElement, {
            options: {
              style: T,
              placeholder: d.intl.string(d.t.gPRHfw),
              disableLink: false
            },
            className: j()
          })]
        });
      case "cardExpiry":
        return (0, r.jsx)(a.CardExpiryElement, {
          options: {
            style: T,
            placeholder: d.intl.string(d.t.xeEWQ6)
          },
          className: j()
        });
      case "cardCvc":
        return (0, r.jsx)(a.CardCvcElement, {
          options: {
            style: T,
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
      className: s()(f.hiddenDiv, p.input)
    }), M(), (0, r.jsx)(c.pdY, {
      error: S
    })]
  })
}