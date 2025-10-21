/** Chunk was on 64982 **/
/** chunk id: 700833, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Md: () => f,
  a0: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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

function p(e) {
  let {
    dropHoveredIndex: t,
    formField: p,
    guild: f,
    index: b,
    isDragEnabled: x,
    submittedGuildJoinRequestsCount: j,
    removeFormField: v,
    updateFormField: _,
    updateFormFieldOrder: C,
    canRemove: O,
    actionsLocation: y,
    fieldStyle: E
  } = e, N = async () => {
    await v(b)
  }, I = async e => {
    await _(b, e)
  }, S = async (e, t, n) => {
    await C(e, t, n)
  }, T = (0, i.uniqueId)(), P = t === b, w = {
    key: T,
    index: b,
    isDragEnabled: x,
    isDropHovered: P,
    onEdit: () => {
      0 === j ? h(p, I, f) : (0, l.ZDy)(async () => {
        let {
          default: e
        } = await n.e("74673").then(n.bind(n, 394045));
        return t => (0, r.jsx)(e, m(g({}, t), {
          guildId: f.id,
          submittedGuildJoinRequestsCount: j,
          onConfirm: () => h(p, I, f)
        }))
      })
    },
    onRemove: N,
    onDrop: S,
    canRemove: O,
    actionsLocation: y,
    fieldStyle: E
  };
  switch (p.field_type) {
    case a.QJ.TERMS:
      return (0, r.jsx)(c.Z, g({
        channelId: f.rulesChannelId,
        title: E === a.it.COMPACT ? u.intl.string(u.t["55+gic"]) : u.intl.string(u.t["53vNcB"]),
        formField: p
      }, w));
    case a.QJ.PARAGRAPH:
      return (0, r.jsx)(o.Z, g({
        formField: p
      }, w));
    case a.QJ.TEXT_INPUT:
      return (0, r.jsx)(d.Z, g({
        formField: p
      }, w));
    case a.QJ.MULTIPLE_CHOICE:
      return (0, r.jsx)(s.Z, g({
        formField: p
      }, w));
    default:
      return null
  }
}

function f(e, t, i) {
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

function h(e, t, i) {
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