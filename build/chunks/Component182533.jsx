/** Chunk was on web.js **/
/** chunk id: 182533, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk342393 = require("./342393.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk926773 = require("./926773.js"),
  Chunk369498 = require("./369498.js"),
  Chunk270498 = require("./270498.js"),
  Chunk261418 = require("./261418.js"),
  Chunk158802 = require("./158802.js");
let m = function(e) {
  let t = (0, l.Ay)(),
    n = i.useRef(null),
    [m, g] = i.useState({}),
    E = (0, o.rdh)(o.LU0.colors.BACKGROUND_BASE_LOWER).hex();
  switch (i.useLayoutEffect(() => {
      let {
        current: e
      } = n;
      if (null == e) return;
      let t = window.getComputedStyle(e),
        r = window.getComputedStyle(e, "::placeholder"),
        i = t.getPropertyValue("font-family"),
        a = t.getPropertyValue("font-weight");
      g({
        base: {
          fontFamily: i,
          fontWeight: a,
          color: t.getPropertyValue("color"),
          fontSize: t.getPropertyValue("font-size"),
          backgroundColor: E,
          padding: "12px",
          "::placeholder": {
            color: r.getPropertyValue("color")
          },
          borderRadius: o.LU0.radii.xs
        }
      })
    }, [n, E]), e.type) {
    case c.he.PRZELEWY24: {
      let i = (0, s.Mw)(t) ? _ : h,
        {
          onNameChange: l,
          onEmailChange: c,
          onP24BankChange: f,
          p24BankValue: p,
          billingAddressInfo: g
        } = e;
      return (0, r.jsx)("div", {
        className: d.rf,
        children: (0, r.jsxs)(o.BJc, {
          gap: 16,
          children: [(0, r.jsx)(o.ksK, {
            label: u.intl.string(u.t["w/qqKK"]),
            inputRef: n,
            name: u.intl.string(u.t["w/qqKK"]),
            placeholder: u.intl.string(u.t["w/qqKK"]),
            onChange: e => c(e),
            value: g.email
          }), (0, r.jsx)(o.ksK, {
            label: u.intl.string(u.t["yf7ms+"]),
            name: u.intl.string(u.t["yf7ms+"]),
            placeholder: u.intl.string(u.t["yf7ms+"]),
            onChange: e => l(e),
            value: g.name
          }), (0, r.jsxs)(o.BJc, {
            gap: 4,
            children: [(0, r.jsx)(o.Text, {
              variant: "text-sm/semibold",
              children: u.intl.string(u.t.De3b8t)
            }), (0, r.jsx)(a.P24BankElement, {
              options: {
                value: p,
                style: m
              },
              onChange: e => f(e.value)
            }), (0, r.jsx)("div", {
              className: d.je,
              children: (0, r.jsx)("img", {
                src: i,
                alt: "Przelewy24"
              })
            })]
          })]
        })
      })
    }
    case c.he.EPS: {
      let {
        onAccountHolderNameChange: i,
        onEPSBankChange: l,
        epsBankValue: c,
        billingAddressInfo: _
      } = e, h = (0, s.Mw)(t) ? f : p;
      return (0, r.jsx)("div", {
        className: d.rf,
        children: (0, r.jsxs)(o.BJc, {
          gap: 16,
          children: [(0, r.jsx)(o.ksK, {
            label: u.intl.string(u.t.sN3wrd),
            inputRef: n,
            name: u.intl.string(u.t.sN3wrd),
            placeholder: u.intl.string(u.t.sN3wrd),
            onChange: e => i(e),
            value: _.name
          }), (0, r.jsxs)(o.BJc, {
            gap: 4,
            children: [(0, r.jsx)(o.Text, {
              variant: "text-sm/semibold",
              children: u.intl.string(u.t.dFyV07)
            }), (0, r.jsx)(a.EpsBankElement, {
              options: {
                value: c,
                style: m
              },
              onChange: e => l(e.value)
            }), (0, r.jsx)("div", {
              className: d.je,
              children: (0, r.jsx)("img", {
                src: h,
                alt: "EPS"
              })
            })]
          })]
        })
      })
    }
    default:
      throw Error("unknown payment source type")
  }
}