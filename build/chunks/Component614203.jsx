/** Chunk was on 58127 **/
/** chunk id: 614203, original params: t,e,s (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => x
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

function b(t) {
  for (var e = 1; e < arguments.length; e++) {
    var s = null != arguments[e] ? arguments[e] : {},
      n = Object.keys(s);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(s).filter(function(t) {
      return Object.getOwnPropertyDescriptor(s, t).enumerable
    }))), n.forEach(function(e) {
      var n;
      n = s[e], e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = n
    })
  }
  return t
}

function f(t, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
    var s = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      s.push.apply(s, n)
    }
    return s
  })(Object(e)).forEach(function(s) {
    Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(e, s))
  }), t
}

function x(t) {
  let {
    text: e = "",
    target: s
  } = t, x = (0, i.bG)([o.A], () => o.A.isEnabled()), h = (0, i.bG)([o.A], () => o.A.hasLearnedWord(e), [e]), y = r.useRef(f(b({}, t), {
    spellcheckEnabled: x
  }));
  y.current = f(b({}, t), {
    spellcheckEnabled: x
  });
  let m = r.useRef(false),
    [S, T] = r.useState(false),
    [j, O] = r.useState([]),
    C = r.useCallback(() => {
      let {
        spellcheckEnabled: t,
        text: e,
        onHeightUpdate: s
      } = y.current;
      t && (0, p.TT)() && Promise.all([(0, p.PS)(e, true), (0, p.Os)(e, true)]).then(t => {
        let [e, n] = t;
        m.current && (T(e), O(n), s())
      })
    }, []),
    E = r.useCallback(() => {
      if ((0, a.vq)(s, HTMLInputElement) || (0, a.vq)(s, HTMLTextAreaElement)) {
        let {
          selectionStart: t,
          selectionEnd: e,
          value: n
        } = s;
        s.value = "", s.value = n, "email" !== s.type && (s.selectionStart = t, s.selectionEnd = e)
      }
    }, [s]);
  return (r.useEffect(() => {
    let t = (0, p.nL)(C);
    return m.current = true, () => {
      m.current = false, t()
    }
  }, [C]), r.useEffect(() => {
    C()
  }, [e, x, C]), (0, p.TT)()) ? [j.map((t, e) => (0, n.jsx)(l.Drp, {
    id: "correction-".concat(e),
    label: t,
    action: () => {
      (0, p.rK)(t), s.focus()
    }
  }, "correction-".concat(e))), (0, n.jsxs)(n.Fragment, {
    children: [S ? (0, n.jsx)(l.Drp, {
      id: "add-to-dictionary",
      label: d.intl.string(d.t.HJmG1G),
      action: () => {
        (0, c.NG)(e), E()
      }
    }) : null, h && (0, n.jsx)(l.Drp, {
      id: "remove-from-dictionary",
      label: d.intl.string(d.t.xXqIX0),
      action: () => {
        (0, c.QZ)(e), E()
      }
    }), (0, n.jsx)(l.sLh, {
      id: "spellcheck",
      label: d.intl.string(d.t.TKkotf),
      checked: x,
      action: () => {
        (0, c.Np)(), E()
      }
    }), x ? (0, n.jsx)(l.Drp, {
      id: "languages",
      label: d.intl.string(d.t.OlOHDH),
      action: () => window.open(u.A.getArticleURL(g.MVz.SPELLCHECK))
    }) : null]
  })] : [null, null]
}