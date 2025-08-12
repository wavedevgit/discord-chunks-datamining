/** Chunk was on web.js **/
/** chunk id: 657198, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk650557 = require("./650557.js"),
  Chunk442837 = require("./442837.js"),
  Chunk911969 = require("./911969.js"),
  Chunk998698 = require("./998698.js"),
  Chunk703558 = require("./703558.js"),
  Chunk117530 = require("./117530.js"),
  Chunk91313 = require("./91313.js"),
  Chunk436660 = require("./436660.js"),
  Chunk887490 = require("./887490.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk494332 = require("./494332.js");

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
    children: o,
    element: a
  } = t;
  switch (a.type) {
    case "applicationCommand":
      let s = u.Z.getActiveCommand(n),
        l = 0,
        c = 0;
      if (null != s && s.id === a.command.id) {
        var d;
        let t = _.cu(e);
        for (let e of null != (d = s.options) ? d : []) t.includes(e.name) ? c++ : l++
      }
      let f = {};
      if (l > 0) {
        let e;
        e = c > 0 ? m.intl.formatToPlainString(m.t.BP8N0N, {
          count: l
        }) : m.intl.formatToPlainString(m.t.lziVCw, {
          count: l
        }), f["data-trailing-placeholder"] = e
      }
      return (0, r.jsx)("div", O(b({
        className: g.applicationCommand
      }, i, f), {
        children: o
      }));
    case "applicationCommandOption":
      return (0, r.jsx)(I, {
        attributes: i,
        channelId: n,
        element: a,
        children: o
      });
    default:
      return null
  }
}
let I = e => {
  let t, {
      channelId: n,
      element: o,
      attributes: _,
      children: E
    } = e,
    y = (0, s.vt)(),
    v = (0, s.UE)(),
    I = (0, s._7)(),
    {
      optionType: T,
      errored: S
    } = (0, l.cj)([u.Z], () => {
      var e, t, r;
      return {
        optionType: null == (e = u.Z.getOption(n, o.optionName)) ? true : e.type,
        errored: (null == (r = u.Z.getOptionState(n, o.optionName)) || null == (t = r.lastValidationResult) ? true : t.success) !== true
      }
    }, [n, o.optionName]),
    A = (0, l.e7)([f.Z], () => f.Z.getUpload(n, o.optionName, d.d.SlashCommand), [n, o.optionName]),
    N = o.children[o.children.length - 1],
    C = null != N && h.LC.isText(N) && N.text.endsWith("\n"),
    R = a()(g.inlineElement, g.optionPill, {
      [g.selectedPill]: v && y,
      [g.erroredPill]: (!v || !y) && S
    }),
    P = i.useCallback(() => {
      h.bN.isVoid(I, o) || p.Q.selectCommandOption(I, o.optionName, true)
    }, [I, o]);
  return t = T === c.jw.ATTACHMENT ? (null == A ? true : A.filename) != null ? (0, r.jsxs)("span", {
    className: a()(g.optionPillValue, g.attachmentFilename),
    contentEditable: false,
    children: [A.filename, E]
  }) : (0, r.jsxs)("span", {
    className: a()(g.optionPillValue, g.readonlyPillValue),
    contentEditable: false,
    children: [m.intl.string(m.t.GRdFnp), E]
  }) : (0, r.jsxs)("span", {
    className: g.optionPillValue,
    children: [E, C ? (0, r.jsx)("span", {
      className: g.newLine,
      contentEditable: false
    }) : null]
  }), (0, r.jsxs)("span", O(b({}, _), {
    className: R,
    children: [(0, r.jsxs)("span", {
      className: g.optionPillKey,
      contentEditable: false,
      onClick: P,
      children: [o.optionDisplayName, "​"]
    }), t, (0, r.jsx)("span", {
      contentEditable: false,
      children: "​"
    })]
  }))
}