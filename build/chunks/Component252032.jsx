/** Chunk was on 88647 **/
/** chunk id: 252032, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./997841.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk904245 = require("./904245.js"),
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
  Chunk819514 = require("./819514.jsx"),
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
  return (0, g.v)({
    type: s.Ie.EDIT,
    content: t,
    channel: n,
    restrictMentions: false,
    respectCooldown: false
  })
}

function E(e) {
  let {
    channel: t,
    message: n
  } = e, {
    id: s
  } = t, {
    id: c
  } = n, h = t.getGuildId(), g = (0, l.e7)([p.Z], () => p.Z.getGuild(h), [h]), _ = t.type === C.d4z.GUILD_ANNOUNCEMENT, E = null != g && g.features.has(C.GuildFeatures.NEWS), S = _ && E, {
    editingMessage: P,
    editingTextValue: I,
    editingRichValue: Z
  } = (0, l.cj)([d.Z], () => ({
    editingMessage: d.Z.getEditingMessage(s),
    editingTextValue: d.Z.getEditingTextValue(s),
    editingRichValue: d.Z.getEditingRichValue(s)
  }), [s]), T = (0, l.e7)([u.default], () => u.default.getId()), N = i.useCallback((e, r, i) => {
    let {
      content: l
    } = i, s = f.Z.can(C.Plq.MANAGE_MESSAGES, t), c = null != P && null != P.author ? P.author.id : null, u = S && (c === T || s), d = {
      content: l,
      components: true
    };
    if (n.hasFlag(C.iLy.IS_COMPONENTS_V2)) {
      var p;
      let e = (null == (p = n.components[0]) ? true : p.type) === o.re.MEDIA_GALLERY,
        t = n.components.filter(e => e.type !== o.re.TEXT_DISPLAY);
      t.splice(+!!e, 0, {
        type: o.re.TEXT_DISPLAY,
        content: l,
        id: "".concat(v.Kb)
      }), d.content = "", d.components = t
    }
    return u && null != P && (0, m.yE)(P.flags, C.iLy.CROSSPOSTED) ? b.Z.confirmEdit(e, r, d) : a.Z.editMessage(e, r, d), Promise.resolve()
  }, [P, S, T, t, n]), A = i.useCallback(e => {
    var t, n;
    return (0, i.createElement)(j, (t = function(e) {
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
      key: c
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
  }, [c]);
  return null != I && null != Z ? (0, r.jsx)(y.Z, {
    ref: true,
    channel: t,
    message: n,
    textValue: I,
    richValue: Z,
    onCancel: a.Z.endEditMessage,
    onChange: a.Z.updateEditMessage,
    onConfirmDelete: b.Z.confirmDelete,
    saveMessage: N,
    validateEdit: O,
    children: A
  }) : null
}

function j(e) {
  let {
    textValue: t,
    richValue: n,
    message: l,
    channel: a,
    onChange: o,
    onSubmit: u,
    onKeyDown: d,
    renderLeftAccessories: p
  } = e, [f, m] = i.useState(true), g = i.useCallback(() => m(true), []), b = i.useCallback(() => m(false), []);
  return i.useEffect(() => (h.S.subscribe(C.CkL.TEXTAREA_FOCUS, g), h.S.subscribe(C.CkL.TEXTAREA_BLUR, b), () => {
    h.S.unsubscribe(C.CkL.TEXTAREA_FOCUS, g), h.S.unsubscribe(C.CkL.TEXTAREA_BLUR, b)
  }), [g, b]), (0, r.jsx)(c.ZP, {
    className: x.channelTextArea,
    textValue: t,
    richValue: n,
    channel: a,
    type: s.Ie.EDIT,
    onChange: o,
    onSubmit: e => {
      let {
        value: t
      } = e;
      return u(t)
    },
    onKeyDown: d,
    focused: f,
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
  return n ? (0, r.jsx)(E, {
    channel: l,
    message: i
  }) : (0, r.jsx)(_.ZP, {
    message: i,
    content: t,
    compact: null != a && a
  })
}