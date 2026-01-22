/** Chunk was on 47841 **/
/** chunk id: 322388, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  PV: () => m,
  Td: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk735438 = require("./735438.js"),
  Chunk397927 = require("./397927.js"),
  Chunk513461 = require("./513461.js"),
  Chunk910919 = require("./910919.jsx"),
  Chunk286056 = require("./286056.jsx"),
  Chunk645745 = require("./645745.jsx"),
  Chunk468287 = require("./468287.jsx"),
  Chunk985018 = require("./985018.jsx");

function f(e) {
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

function g(e, t) {
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

function b(e) {
  let {
    dropHoveredIndex: t,
    formField: b,
    guild: m,
    index: x,
    isDragEnabled: h,
    submittedGuildJoinRequestsCount: j,
    removeFormField: O,
    updateFormField: y,
    updateFormFieldOrder: v,
    canRemove: A,
    actionsLocation: E,
    fieldStyle: N
  } = e, _ = async () => {
    await O(x)
  }, S = async e => {
    await y(x, e)
  }, T = async (e, t, n) => {
    await v(e, t, n)
  }, I = (0, i.uniqueId)(), C = t === x, P = {
    key: I,
    index: x,
    isDragEnabled: h,
    isDropHovered: C,
    onEdit: () => {
      0 === j ? p(b, S, m) : (0, l.mMO)(async () => {
        let {
          default: e
        } = await n.e("5705").then(n.bind(n, 83024));
        return t => (0, r.jsx)(e, g(f({}, t), {
          guildId: m.id,
          submittedGuildJoinRequestsCount: j,
          onConfirm: () => p(b, S, m)
        }))
      })
    },
    onRemove: _,
    onDrop: T,
    canRemove: A,
    actionsLocation: E,
    fieldStyle: N
  };
  switch (b.field_type) {
    case s.rX.TERMS:
      return (0, r.jsx)(o.A, f({
        channelId: m.rulesChannelId,
        title: N === s.Vf.COMPACT ? u.intl.string(u.t["55+gic"]) : u.intl.string(u.t["53vNcB"]),
        formField: b
      }, P));
    case s.rX.PARAGRAPH:
      return (0, r.jsx)(c.A, f({
        formField: b
      }, P));
    case s.rX.TEXT_INPUT:
      return (0, r.jsx)(d.A, f({
        formField: b
      }, P));
    case s.rX.MULTIPLE_CHOICE:
      return (0, r.jsx)(a.A, f({
        formField: b
      }, P));
    default:
      return null
  }
}

function m(e, t, i) {
  switch (e) {
    case s.rX.TERMS:
      return (0, l.mMO)(async () => {
        let {
          default: e
        } = await n.e("32435").then(n.bind(n, 24094));
        return n => (0, r.jsx)(e, g(f({}, n), {
          field: true,
          onSave: t,
          guild: i
        }))
      });
    case s.rX.PARAGRAPH:
      return (0, l.mMO)(async () => {
        let {
          ParagraphFormFieldModal: e
        } = await n.e("26510").then(n.bind(n, 542717));
        return n => (0, r.jsx)(e, g(f({}, n), {
          field: true,
          onSave: t
        }))
      });
    case s.rX.TEXT_INPUT:
      return (0, l.mMO)(async () => {
        let {
          TextInputFormFieldModal: e
        } = await n.e("26510").then(n.bind(n, 542717));
        return n => (0, r.jsx)(e, g(f({}, n), {
          field: true,
          onSave: t
        }))
      });
    case s.rX.MULTIPLE_CHOICE:
      return (0, l.mMO)(async () => {
        let {
          default: e
        } = await n.e("52981").then(n.bind(n, 520660));
        return n => (0, r.jsx)(e, g(f({}, n), {
          field: true,
          onSave: t
        }))
      })
  }
}

function p(e, t, i) {
  switch (e.field_type) {
    case s.rX.TERMS:
      return (0, l.mMO)(async () => {
        let {
          default: l
        } = await n.e("32435").then(n.bind(n, 24094));
        return n => (0, r.jsx)(l, g(f({}, n), {
          field: e,
          onSave: t,
          guild: i
        }))
      });
    case s.rX.PARAGRAPH:
      return (0, l.mMO)(async () => {
        let {
          ParagraphFormFieldModal: i
        } = await n.e("26510").then(n.bind(n, 542717));
        return n => (0, r.jsx)(i, g(f({}, n), {
          field: e,
          onSave: t
        }))
      });
    case s.rX.TEXT_INPUT:
      return (0, l.mMO)(async () => {
        let {
          TextInputFormFieldModal: i
        } = await n.e("26510").then(n.bind(n, 542717));
        return n => (0, r.jsx)(i, g(f({}, n), {
          field: e,
          onSave: t
        }))
      });
    case s.rX.MULTIPLE_CHOICE:
      return (0, l.mMO)(async () => {
        let {
          default: i
        } = await n.e("52981").then(n.bind(n, 520660));
        return n => (0, r.jsx)(i, g(f({}, n), {
          field: e,
          onSave: t
        }))
      })
  }
}