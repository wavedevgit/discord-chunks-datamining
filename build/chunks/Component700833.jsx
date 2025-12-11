/** Chunk was on 9536 **/
/** chunk id: 700833, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Md: () => p,
  a0: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk392711 = require("./392711.js"),
  Chunk481060 = require("./481060.js"),
  Chunk246364 = require("./246364.js"),
  Chunk405545 = require("./405545.jsx"),
  Chunk382574 = require("./382574.jsx"),
  Chunk279988 = require("./279988.jsx"),
  Chunk786127 = require("./786127.jsx"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
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

function m(e, t) {
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

function f(e) {
  let {
    dropHoveredIndex: t,
    formField: f,
    guild: p,
    index: h,
    isDragEnabled: x,
    submittedGuildJoinRequestsCount: j,
    removeFormField: v,
    updateFormField: O,
    updateFormFieldOrder: C,
    canRemove: y,
    actionsLocation: N,
    fieldStyle: E
  } = e, I = async () => {
    await v(h)
  }, S = async e => {
    await O(h, e)
  }, _ = async (e, t, n) => {
    await C(e, t, n)
  }, T = (0, i.uniqueId)(), P = t === h, w = {
    key: T,
    index: h,
    isDragEnabled: x,
    isDropHovered: P,
    onEdit: () => {
      0 === j ? b(f, S, p) : (0, l.ZDy)(async () => {
        let {
          default: e
        } = await n.e("74673").then(n.bind(n, 394045));
        return t => (0, r.jsx)(e, m(g({}, t), {
          guildId: p.id,
          submittedGuildJoinRequestsCount: j,
          onConfirm: () => b(f, S, p)
        }))
      })
    },
    onRemove: I,
    onDrop: _,
    canRemove: y,
    actionsLocation: N,
    fieldStyle: E
  };
  switch (f.field_type) {
    case a.QJ.TERMS:
      return (0, r.jsx)(c.Z, g({
        channelId: p.rulesChannelId,
        title: E === a.it.COMPACT ? u.intl.string(u.t["55+gic"]) : u.intl.string(u.t["53vNcB"]),
        formField: f
      }, w));
    case a.QJ.PARAGRAPH:
      return (0, r.jsx)(o.Z, g({
        formField: f
      }, w));
    case a.QJ.TEXT_INPUT:
      return (0, r.jsx)(d.Z, g({
        formField: f
      }, w));
    case a.QJ.MULTIPLE_CHOICE:
      return (0, r.jsx)(s.Z, g({
        formField: f
      }, w));
    default:
      return null
  }
}

function p(e, t, i) {
  switch (e) {
    case a.QJ.TERMS:
      return (0, l.ZDy)(async () => {
        let {
          default: e
        } = await n.e("5945").then(n.bind(n, 92451));
        return n => (0, r.jsx)(e, m(g({}, n), {
          field: true,
          onSave: t,
          guild: i
        }))
      });
    case a.QJ.PARAGRAPH:
      return (0, l.ZDy)(async () => {
        let {
          ParagraphFormFieldModal: e
        } = await n.e("6595").then(n.bind(n, 457042));
        return n => (0, r.jsx)(e, m(g({}, n), {
          field: true,
          onSave: t
        }))
      });
    case a.QJ.TEXT_INPUT:
      return (0, l.ZDy)(async () => {
        let {
          TextInputFormFieldModal: e
        } = await n.e("6595").then(n.bind(n, 457042));
        return n => (0, r.jsx)(e, m(g({}, n), {
          field: true,
          onSave: t
        }))
      });
    case a.QJ.MULTIPLE_CHOICE:
      return (0, l.ZDy)(async () => {
        let {
          default: e
        } = await n.e("94064").then(n.bind(n, 607569));
        return n => (0, r.jsx)(e, m(g({}, n), {
          field: true,
          onSave: t
        }))
      })
  }
}

function b(e, t, i) {
  switch (e.field_type) {
    case a.QJ.TERMS:
      return (0, l.ZDy)(async () => {
        let {
          default: l
        } = await n.e("5945").then(n.bind(n, 92451));
        return n => (0, r.jsx)(l, m(g({}, n), {
          field: e,
          onSave: t,
          guild: i
        }))
      });
    case a.QJ.PARAGRAPH:
      return (0, l.ZDy)(async () => {
        let {
          ParagraphFormFieldModal: i
        } = await n.e("6595").then(n.bind(n, 457042));
        return n => (0, r.jsx)(i, m(g({}, n), {
          field: e,
          onSave: t
        }))
      });
    case a.QJ.TEXT_INPUT:
      return (0, l.ZDy)(async () => {
        let {
          TextInputFormFieldModal: i
        } = await n.e("6595").then(n.bind(n, 457042));
        return n => (0, r.jsx)(i, m(g({}, n), {
          field: e,
          onSave: t
        }))
      });
    case a.QJ.MULTIPLE_CHOICE:
      return (0, l.ZDy)(async () => {
        let {
          default: i
        } = await n.e("94064").then(n.bind(n, 607569));
        return n => (0, r.jsx)(i, m(g({}, n), {
          field: e,
          onSave: t
        }))
      })
  }
}