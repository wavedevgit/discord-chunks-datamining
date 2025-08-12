/** Chunk was on web.js **/
/** chunk id: 252032, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
}), require("./997841.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk904245 = require("./904245.js"),
  Chunk257559 = require("./257559.jsx"),
  Chunk911969 = require("./911969.js"),
  Chunk541716 = require("./541716.js"),
  Chunk893718 = require("./893718.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk323873 = require("./323873.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk585483 = require("./585483.js"),
  Chunk630388 = require("./630388.js"),
  Chunk838440 = require("./838440.js"),
  Chunk930282 = require("./930282.jsx"),
  Chunk955384 = require("./955384.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk224837 = require("./224837.js"),
  Chunk433869 = require("./433869.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function N(e) {
  let {
    value: t,
    channel: n
  } = e;
  return (0, g.v)({
    type: c.Ie.EDIT,
    content: t,
    channel: n,
    restrictMentions: false,
    respectCooldown: false
  })
}

function C(e) {
  let {
    channel: t,
    message: n
  } = e, {
    id: c
  } = t, {
    id: u
  } = n, h = t.getGuildId(), g = (0, o.e7)([_.Z], () => _.Z.getGuild(h), [h]), E = t.type === y.d4z.GUILD_ANNOUNCEMENT, I = null != g && g.features.has(y.oNc.NEWS), S = E && I, {
    editingMessage: C,
    editingTextValue: P,
    editingRichValue: w
  } = (0, o.cj)([f.Z], () => ({
    editingMessage: f.Z.getEditingMessage(c),
    editingTextValue: f.Z.getEditingTextValue(c),
    editingRichValue: f.Z.getEditingRichValue(c)
  }), [c]), D = (0, o.e7)([d.default], () => d.default.getId()), L = i.useCallback((e, r, i) => {
    let {
      content: o
    } = i, c = p.Z.can(y.Plq.MANAGE_MESSAGES, t), u = null != C && null != C.author ? C.author.id : null, d = S && (u === D || c), f = {
      content: o,
      components: true
    };
    if (n.hasFlag(y.iLy.IS_COMPONENTS_V2)) {
      var _;
      let e = (null == (_ = n.components[0]) ? true : _.type) === l.re.MEDIA_GALLERY,
        t = n.components.filter(e => e.type !== l.re.TEXT_DISPLAY);
      t.splice(+!!e, 0, {
        type: l.re.TEXT_DISPLAY,
        content: o,
        id: "".concat(O.Kb)
      }), f.content = "", f.components = t
    }
    return d && null != C && (0, m.yE)(C.flags, y.iLy.CROSSPOSTED) ? s.Z.confirmEdit(e, r, f) : a.Z.editMessage(e, r, f), Promise.resolve()
  }, [C, S, D, t, n]), x = i.useCallback(e => (0, i.createElement)(R, A(T({}, e), {
    className: v.channelTextArea,
    key: u
  })), [u]);
  return null != P && null != w ? (0, r.jsx)(b.Z, {
    ref: true,
    channel: t,
    message: n,
    textValue: P,
    richValue: w,
    onCancel: a.Z.endEditMessage,
    onChange: a.Z.updateEditMessage,
    onConfirmDelete: s.Z.confirmDelete,
    saveMessage: L,
    validateEdit: N,
    children: x
  }) : null
}

function R(e) {
  let {
    textValue: t,
    richValue: n,
    message: o,
    channel: a,
    onChange: s,
    onSubmit: l,
    onKeyDown: d,
    renderLeftAccessories: f
  } = e, [_, p] = i.useState(true), m = i.useCallback(() => p(true), []), g = i.useCallback(() => p(false), []);
  return i.useEffect(() => (h.S.subscribe(y.CkL.TEXTAREA_FOCUS, m), h.S.subscribe(y.CkL.TEXTAREA_BLUR, g), () => {
    h.S.unsubscribe(y.CkL.TEXTAREA_FOCUS, m), h.S.unsubscribe(y.CkL.TEXTAREA_BLUR, g)
  }), [m, g]), (0, r.jsx)(u.ZP, {
    className: v.channelTextArea,
    textValue: t,
    richValue: n,
    channel: a,
    type: c.Ie.EDIT,
    onChange: s,
    onSubmit: e => {
      let {
        value: t
      } = e;
      return l(t)
    },
    onKeyDown: d,
    focused: _,
    onFocus: m,
    onBlur: g,
    renderLeftAccessories: f
  }, o.id)
}

function P(e, t, n) {
  let {
    message: i,
    channel: o,
    compact: a
  } = e;
  return n ? (0, r.jsx)(C, {
    channel: o,
    message: i
  }) : (0, r.jsx)(E.ZP, {
    message: i,
    content: t,
    compact: null != a && a
  })
}