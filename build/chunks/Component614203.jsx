/** Chunk was on 58127 **/
/** chunk id: 614203, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk621466 = require("./621466.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk711581 = require("./711581.js"),
  Chunk638128 = require("./638128.js"),
  Chunk975571 = require("./975571.js"),
  Chunk454235 = require("./454235.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function g(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), l.forEach(function(e) {
      var l;
      l = n[e], e in t ? Object.defineProperty(t, e, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = l
    })
  }
  return t
}

function f(t, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(t);
      n.push.apply(n, l)
    }
    return n
  })(Object(e)).forEach(function(n) {
    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
  }), t
}

function h(t) {
  let {
    text: e = "",
    target: n
  } = t, h = (0, i.bG)([c.A], () => c.A.isEnabled()), y = (0, i.bG)([c.A], () => c.A.hasLearnedWord(e), [e]), m = r.useRef(f(g({}, t), {
    spellcheckEnabled: h
  }));
  m.current = f(g({}, t), {
    spellcheckEnabled: h
  });
  let T = r.useRef(false),
    [S, j] = r.useState(false),
    [x, C] = r.useState([]),
    O = r.useCallback(() => {
      let {
        spellcheckEnabled: t,
        text: e,
        onHeightUpdate: n
      } = m.current;
      t && (0, d.TT)() && Promise.all([(0, d.PS)(e, true), (0, d.Os)(e, true)]).then(t => {
        let [e, l] = t;
        T.current && (j(e), C(l), n())
      })
    }, []),
    A = r.useCallback(() => {
      if ((0, a.vq)(n, HTMLInputElement) || (0, a.vq)(n, HTMLTextAreaElement)) {
        let {
          selectionStart: t,
          selectionEnd: e,
          value: l
        } = n;
        n.value = "", n.value = l, "email" !== n.type && (n.selectionStart = t, n.selectionEnd = e)
      }
    }, [n]);
  return (r.useEffect(() => {
    let t = (0, d.nL)(O);
    return T.current = true, () => {
      T.current = false, t()
    }
  }, [O]), r.useEffect(() => {
    O()
  }, [e, h, O]), (0, d.TT)()) ? [x.map((t, e) => (0, l.jsx)(s.Drp, {
    id: "correction-".concat(e),
    label: t,
    action: () => {
      (0, d.rK)(t), n.focus()
    }
  }, "correction-".concat(e))), (0, l.jsxs)(l.Fragment, {
    children: [S ? (0, l.jsx)(s.Drp, {
      id: "add-to-dictionary",
      label: b.intl.string(b.t.HJmG1G),
      action: () => {
        (0, o.NG)(e), A()
      }
    }) : null, y && (0, l.jsx)(s.Drp, {
      id: "remove-from-dictionary",
      label: b.intl.string(b.t.xXqIX0),
      action: () => {
        (0, o.QZ)(e), A()
      }
    }), (0, l.jsx)(s.sLh, {
      id: "spellcheck",
      label: b.intl.string(b.t.TKkotf),
      checked: h,
      action: () => {
        (0, o.Np)(), A()
      }
    }), h ? (0, l.jsx)(s.Drp, {
      id: "languages",
      label: b.intl.string(b.t.OlOHDH),
      action: () => window.open(u.A.getArticleURL(p.MVz.SPELLCHECK))
    }) : null]
  })] : [null, null]
}