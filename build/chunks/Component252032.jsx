/** Chunk was on 34740 **/
/** chunk id: 252032, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./997841.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk95015 = require("./95015.js"),
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
  } = n, m = t.getGuildId(), g = (0, a.e7)([h.Z], () => h.Z.getGuild(m), [m]), y = t.type === v.d4z.GUILD_ANNOUNCEMENT, j = null != g && g.features.has(v.GuildFeatures.NEWS), S = y && j, {
    editingMessage: P,
    editingTextValue: I,
    editingRichValue: Z
  } = (0, a.cj)([p.Z], () => ({
    editingMessage: p.Z.getEditingMessage(c),
    editingTextValue: p.Z.getEditingTextValue(c),
    editingRichValue: p.Z.getEditingRichValue(c)
  }), [c]), T = (0, a.e7)([d.default], () => d.default.getId()), N = r.useCallback((e, i, r) => {
    let {
      content: a
    } = r, c = f.Z.can(v.Plq.MANAGE_MESSAGES, t), u = null != P && null != P.author ? P.author.id : null, d = S && (u === T || c), p = {
      content: a,
      components: true
    };
    if (n.hasFlag(v.iLy.IS_COMPONENTS_V2)) {
      var h;
      let e = (null == (h = n.components[0]) ? true : h.type) === s.re.MEDIA_GALLERY,
        t = n.components.filter(e => e.type !== s.re.TEXT_DISPLAY);
      t.splice(+!!e, 0, {
        type: s.re.TEXT_DISPLAY,
        content: a,
        id: "".concat(_.Kb)
      }), p.content = "", p.components = t
    }
    return d && null != P && (0, l.yE)(P.flags, v.iLy.CROSSPOSTED) ? b.Z.confirmEdit(e, i, p) : o.Z.editMessage(e, i, p), Promise.resolve()
  }, [P, S, T, t, n]), A = r.useCallback(e => {
    var t, n;
    return (0, r.createElement)(E, (t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          var i;
          i = n[t], t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = i
        })
      }
      return e
    }({}, e), n = n = {
      className: x.channelTextArea,
      key: u
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n.push.apply(n, i)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  }, [u]);
  return null != I && null != Z ? (0, i.jsx)(C.Z, {
    ref: true,
    channel: t,
    message: n,
    textValue: I,
    richValue: Z,
    onCancel: o.Z.endEditMessage,
    onChange: o.Z.updateEditMessage,
    onConfirmDelete: b.Z.confirmDelete,
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
  } = e, [h, f] = r.useState(true), g = r.useCallback(() => f(true), []), b = r.useCallback(() => f(false), []);
  return r.useEffect(() => (m.S.subscribe(v.CkL.TEXTAREA_FOCUS, g), m.S.subscribe(v.CkL.TEXTAREA_BLUR, b), () => {
    m.S.unsubscribe(v.CkL.TEXTAREA_FOCUS, g), m.S.unsubscribe(v.CkL.TEXTAREA_BLUR, b)
  }), [g, b]), (0, i.jsx)(u.ZP, {
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
    message: r,
    channel: l,
    compact: a
  } = e;
  return n ? (0, i.jsx)(j, {
    channel: l,
    message: r
  }) : (0, i.jsx)(y.ZP, {
    message: r,
    content: t,
    compact: null != a && a
  })
}