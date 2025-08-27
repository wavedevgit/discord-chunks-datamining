/** Chunk was on 68197 **/
/** chunk id: 252032, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./997841.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk360514 = require("./360514.js");

function O(e) {
  let {
    value: t,
    channel: n
  } = e;
  return (0, b.v)({
    type: c.Ie.EDIT,
    content: t,
    channel: n,
    restrictMentions: false,
    respectCooldown: false
  })
}

function j(e) {
  let {
    channel: t,
    message: n
  } = e, {
    id: c
  } = t, {
    id: u
  } = n, m = t.getGuildId(), b = (0, l.e7)([h.Z], () => h.Z.getGuild(m), [m]), y = t.type === C.d4z.GUILD_ANNOUNCEMENT, j = null != b && b.features.has(C.oNc.NEWS), S = y && j, {
    editingMessage: I,
    editingTextValue: P,
    editingRichValue: Z
  } = (0, l.cj)([p.Z], () => ({
    editingMessage: p.Z.getEditingMessage(c),
    editingTextValue: p.Z.getEditingTextValue(c),
    editingRichValue: p.Z.getEditingRichValue(c)
  }), [c]), T = (0, l.e7)([d.default], () => d.default.getId()), N = i.useCallback((e, r, i) => {
    let {
      content: l
    } = i, c = f.Z.can(C.Plq.MANAGE_MESSAGES, t), u = null != I && null != I.author ? I.author.id : null, d = S && (u === T || c), p = {
      content: l,
      components: true
    };
    if (n.hasFlag(C.iLy.IS_COMPONENTS_V2)) {
      var h;
      let e = (null == (h = n.components[0]) ? true : h.type) === s.re.MEDIA_GALLERY,
        t = n.components.filter(e => e.type !== s.re.TEXT_DISPLAY);
      t.splice(+!!e, 0, {
        type: s.re.TEXT_DISPLAY,
        content: l,
        id: "".concat(v.Kb)
      }), p.content = "", p.components = t
    }
    return d && null != I && (0, g.yE)(I.flags, C.iLy.CROSSPOSTED) ? o.Z.confirmEdit(e, r, p) : a.Z.editMessage(e, r, p), Promise.resolve()
  }, [I, S, T, t, n]), A = i.useCallback(e => {
    var t, n;
    return (0, i.createElement)(E, (t = function(e) {
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
    }({}, e), n = n = {
      className: x.channelTextArea,
      key: u
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  }, [u]);
  return null != P && null != Z ? (0, r.jsx)(_.Z, {
    ref: true,
    channel: t,
    message: n,
    textValue: P,
    richValue: Z,
    onCancel: a.Z.endEditMessage,
    onChange: a.Z.updateEditMessage,
    onConfirmDelete: o.Z.confirmDelete,
    saveMessage: N,
    validateEdit: O,
    children: A
  }) : null
}

function E(e) {
  let {
    textValue: t,
    richValue: n,
    message: l,
    channel: a,
    onChange: o,
    onSubmit: s,
    onKeyDown: d,
    renderLeftAccessories: p
  } = e, [h, f] = i.useState(true), g = i.useCallback(() => f(true), []), b = i.useCallback(() => f(false), []);
  return i.useEffect(() => (m.S.subscribe(C.CkL.TEXTAREA_FOCUS, g), m.S.subscribe(C.CkL.TEXTAREA_BLUR, b), () => {
    m.S.unsubscribe(C.CkL.TEXTAREA_FOCUS, g), m.S.unsubscribe(C.CkL.TEXTAREA_BLUR, b)
  }), [g, b]), (0, r.jsx)(u.ZP, {
    className: x.channelTextArea,
    textValue: t,
    richValue: n,
    channel: a,
    type: c.Ie.EDIT,
    onChange: o,
    onSubmit: e => {
      let {
        value: t
      } = e;
      return s(t)
    },
    onKeyDown: d,
    focused: h,
    onFocus: g,
    onBlur: b,
    renderLeftAccessories: p
  }, l.id)
}

function S(e, t, n) {
  let {
    message: i,
    channel: l,
    compact: a
  } = e;
  return n ? (0, r.jsx)(j, {
    channel: l,
    message: i
  }) : (0, r.jsx)(y.ZP, {
    message: i,
    content: t,
    compact: null != a && a
  })
}