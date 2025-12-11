/** Chunk was on web.js **/
/** chunk id: 657198, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk685578 = require("./685578.js"),
  Chunk442837 = require("./442837.js"),
  Chunk911969 = require("./911969.js"),
  Chunk998698 = require("./998698.js"),
  Chunk703558 = require("./703558.js"),
  Chunk117530 = require("./117530.js"),
  Chunk91313 = require("./91313.js"),
  Chunk436660 = require("./436660.js"),
  Chunk887490 = require("./887490.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk299477 = require("./299477.js");

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

function v(e, t, n) {
  let {
    attributes: i,
    children: a,
    element: o
  } = t;
  switch (o.type) {
    case "applicationCommand":
      let s = u.Z.getActiveCommand(n),
        l = 0,
        c = 0;
      if (null != s && s.id === o.command.id) {
        var d;
        let t = p.cu(e);
        for (let e of null != (d = s.options) ? d : []) t.includes(e.name) ? c++ : l++
      }
      let f = {};
      if (l > 0) {
        let e;
        e = c > 0 ? h.intl.formatToPlainString(h.t.BP8N0K, {
          count: l
        }) : h.intl.formatToPlainString(h.t.lziVC9, {
          count: l
        }), f["data-trailing-placeholder"] = e
      }
      return (0, r.jsx)("div", O(b({
        className: g.applicationCommand
      }, i, f), {
        children: a
      }));
    case "applicationCommandOption":
      return (0, r.jsx)(S, {
        attributes: i,
        channelId: n,
        element: o,
        children: a
      });
    default:
      return null
  }
}
let S = e => {
  let t, {
      channelId: n,
      element: a,
      attributes: p,
      children: E
    } = e,
    y = (0, s.vt)(),
    v = (0, s.UE)(),
    S = (0, s._7)(),
    {
      optionType: I,
      errored: T
    } = (0, l.cj)([u.Z], () => {
      var e, t, r;
      return {
        optionType: null == (e = u.Z.getOption(n, a.optionName)) ? true : e.type,
        errored: (null == (r = u.Z.getOptionState(n, a.optionName)) || null == (t = r.lastValidationResult) ? true : t.success) !== true
      }
    }, [n, a.optionName]),
    C = (0, l.e7)([f.Z], () => f.Z.getUpload(n, a.optionName, d.d.SlashCommand), [n, a.optionName]),
    A = a.children[a.children.length - 1],
    N = null != A && m.LC.isText(A) && A.text.endsWith("\n"),
    P = o()(g.inlineElement, g.optionPill, {
      [g.selectedPill]: v && y,
      [g.erroredPill]: (!v || !y) && T
    }),
    R = i.useCallback(() => {
      m.bN.isVoid(S, a) || _.Q.selectCommandOption(S, a.optionName, true)
    }, [S, a]);
  return t = I === c.jw.ATTACHMENT ? (null == C ? true : C.filename) != null ? (0, r.jsxs)("span", {
    className: o()(g.optionPillValue, g.attachmentFilename),
    contentEditable: false,
    children: [C.filename, E]
  }) : (0, r.jsxs)("span", {
    className: o()(g.optionPillValue, g.readonlyPillValue),
    contentEditable: false,
    children: [h.intl.string(h.t.GRdFni), E]
  }) : (0, r.jsxs)("span", {
    className: g.optionPillValue,
    children: [E, N ? (0, r.jsx)("span", {
      className: g.newLine,
      contentEditable: false
    }) : null]
  }), (0, r.jsxs)("span", O(b({}, p), {
    className: P,
    children: [(0, r.jsxs)("span", {
      className: g.optionPillKey,
      contentEditable: false,
      onClick: R,
      children: [a.optionDisplayName, "​"]
    }), t, (0, r.jsx)("span", {
      contentEditable: false,
      children: "​"
    })]
  }))
}