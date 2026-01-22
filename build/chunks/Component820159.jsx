/** Chunk was on web.js **/
/** chunk id: 820159, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk253018 = require("./253018.js"),
  Chunk311907 = require("./311907.js"),
  Chunk155718 = require("./155718.js"),
  Chunk861382 = require("./861382.js"),
  Chunk31717 = require("./31717.js"),
  Chunk522602 = require("./522602.js"),
  Chunk317681 = require("./317681.js"),
  Chunk35277 = require("./35277.js"),
  Chunk711371 = require("./711371.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk562650 = require("./562650.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function A(e, t, n) {
  let {
    attributes: i,
    children: a,
    element: s
  } = t;
  switch (s.type) {
    case "applicationCommand":
      let o = u.A.getActiveCommand(n),
        l = 0,
        c = 0;
      if (null != o && o.id === s.command.id) {
        var d;
        let t = p.O7(e);
        for (let e of null != (d = o.options) ? d : []) t.includes(e.name) ? c++ : l++
      }
      let f = {};
      if (l > 0) {
        let e;
        e = c > 0 ? m.intl.formatToPlainString(m.t.BP8N0K, {
          count: l
        }) : m.intl.formatToPlainString(m.t.lziVC9, {
          count: l
        }), f["data-trailing-placeholder"] = e
      }
      return (0, r.jsx)("div", O(b({
        className: g.uB
      }, i, f), {
        children: a
      }));
    case "applicationCommandOption":
      return (0, r.jsx)(v, {
        attributes: i,
        channelId: n,
        element: s,
        children: a
      });
    default:
      return null
  }
}
let v = e => {
  let t, {
      channelId: n,
      element: a,
      attributes: p,
      children: E
    } = e,
    y = (0, o.f7)(),
    A = (0, o.zL)(),
    v = (0, o.RV)(),
    {
      optionType: S,
      errored: I
    } = (0, l.cf)([u.A], () => {
      var e, t, r;
      return {
        optionType: null == (e = u.A.getOption(n, a.optionName)) ? true : e.type,
        errored: (null == (r = u.A.getOptionState(n, a.optionName)) || null == (t = r.lastValidationResult) ? true : t.success) !== true
      }
    }, [n, a.optionName]),
    T = (0, l.bG)([f.A], () => f.A.getUpload(n, a.optionName, d.C.SlashCommand), [n, a.optionName]),
    C = a.children[a.children.length - 1],
    N = null != C && h.l5.isText(C) && C.text.endsWith("\n"),
    R = s()(g.S0, g.xP, {
      [g.t$]: A && y,
      [g.$2]: (!A || !y) && I
    }),
    w = i.useCallback(() => {
      h.VW.isVoid(v, a) || _.b.selectCommandOption(v, a.optionName, true)
    }, [v, a]);
  return t = S === c.n4.ATTACHMENT ? (null == T ? true : T.filename) != null ? (0, r.jsxs)("span", {
    className: s()(g._K, g.dU),
    contentEditable: false,
    children: [T.filename, E]
  }) : (0, r.jsxs)("span", {
    className: s()(g._K, g.ZI),
    contentEditable: false,
    children: [m.intl.string(m.t.GRdFni), E]
  }) : (0, r.jsxs)("span", {
    className: g._K,
    children: [E, N ? (0, r.jsx)("span", {
      className: g.Nx,
      contentEditable: false
    }) : null]
  }), (0, r.jsxs)("span", O(b({}, p), {
    className: R,
    children: [(0, r.jsxs)("span", {
      className: g.gA,
      contentEditable: false,
      onClick: w,
      children: [a.optionDisplayName, "​"]
    }), t, (0, r.jsx)("span", {
      contentEditable: false,
      children: "​"
    })]
  }))
}