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
    [y, b] = i.useState(false),
    [O, v] = i.useState(false),
    [A, I] = i.useState(null),
    [S, T] = i.useState({}),
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
    w = i.useCallback(e => {
      O || e.empty || v(true), null != _ && _(e.complete), null != e.error && b(false)
    }, [O, _]),
    R = i.useCallback(() => {
      b(true), null == h || h()
    }, [h]),
    P = i.useCallback(() => {
      b(false), null == m || m()
    }, [m]),
    D = i.useCallback(() => {
      if (null != C) switch (n) {
        case "cardNumber": {
          let e = C.getElement(a.CardNumberElement);
          if (null == e) return;
          e.on("change", e => {
            g !== e.brand && E(e.brand), e.empty && O ? I(d.intl.string(d.t.eOIfuy)) : null != e.error ? I(d.intl.string(d.t.x4pWtJ)) : I(null), w(e)
          }), e.on("focus", R), e.on("blur", P);
          break
        }
        case "cardExpiry": {
          let e = C.getElement(a.CardExpiryElement);
          if (null == e) return;
          e.on("change", e => {
            null != e.error || e.empty && O ? I(d.intl.string(d.t["9/zZdl"])) : I(null), w(e)
          }), e.on("focus", R), e.on("blur", P);
          break
        }
        case "cardCvc": {
          let e = C.getElement(a.CardCvcElement);
          if (null == e) return;
          e.on("change", e => {
            null != e.error || e.empty && O ? I(d.intl.string(d.t.ro4isZ)) : I(null), w(e)
          }), e.on("focus", R), e.on("blur", P)
        }
      }
    }, [P, w, R, g, C, O, n]);
  i.useEffect(() => (D(), () => {
    N()
  }), [D, N]);
  let x = (0, c.rdh)(l.A.colors.TEXT_SUBTLE).hex(),
    L = (0, c.rdh)(l.A.colors.TEXT_STRONG).hex();

  function j() {
    return o()(f.vB, {
      [f.Tn]: null !== A,
      [f.iH]: y,
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
              style: S,
              placeholder: d.intl.string(d.t.gPRHfw),
              disableLink: false
            },
            className: j()
          })]
        });
      case "cardExpiry":
        return (0, r.jsx)(a.CardExpiryElement, {
          options: {
            style: S,
            placeholder: d.intl.string(d.t.xeEWQ6)
          },
          className: j()
        });
      case "cardCvc":
        return (0, r.jsx)(a.CardCvcElement, {
          options: {
            style: S,
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
      error: A
    })]
  })
}