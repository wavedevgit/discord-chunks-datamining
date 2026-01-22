/** Chunk was on 88890 **/
/** chunk id: 83726, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk398450 = require("./398450.jsx"),
  Chunk985018 = require("./985018.jsx");

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function d(e, t) {
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

function c(e) {
  let {
    setSlide: t
  } = e, [n, c] = l.useState(10);
  return l.useEffect(() => {
    if (n > 0) {
      let e = setTimeout(() => {
        c(e => e - 1)
      }, 1e3);
      return () => clearTimeout(e)
    }
  }, [n]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.A.SlideHeader, d(o({}, e), {
      subtitle: a.intl.string(a.t.c5J7O0)
    })), (0, r.jsxs)(s.A.SlideContent, {
      children: [(0, r.jsx)(i.Text, {
        variant: "text-md/normal",
        children: a.intl.format(a.t.Nixbli, {})
      }), (0, r.jsx)(i.Text, {
        variant: "text-md/normal",
        children: n > 0 ? a.intl.format(a.t.tsWkAE, {
          countdown: n
        }) : a.intl.string(a.t["GK/Qfd"])
      })]
    }), (0, r.jsx)(s.A.SlideFooter, d(o({}, e), {
      trailingButton: (0, r.jsx)(i.Button, {
        variant: "primary",
        text: a.intl.string(a.t.oyjspn),
        onClick: () => t("backup_ack"),
        disabled: n > 0,
        loading: n > 0,
        fullWidth: true
      })
    }))]
  })
}