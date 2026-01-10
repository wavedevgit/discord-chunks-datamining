/** Chunk was on 81985 **/
/** chunk id: 252032, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
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
  Chunk548498 = require("./548498.js");

function C(e) {
  let {
    value: t,
    channel: n
  } = e;
  return (0, m.v)({
    type: c.Ie.EDIT,
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
    id: c
  } = t, {
    id: u
  } = n, g = t.getGuildId(), m = (0, a.e7)([f.Z], () => f.Z.getGuild(g), [g]), y = t.type === O.d4z.GUILD_ANNOUNCEMENT, E = null != m && m.features.has(O.GuildFeatures.NEWS), _ = y && E, {
    editingMessage: I,
    editingTextValue: P,
    editingRichValue: Z
  } = (0, a.cj)([p.Z], () => ({
    editingMessage: p.Z.getEditingMessage(c),
    editingTextValue: p.Z.getEditingTextValue(c),
    editingRichValue: p.Z.getEditingRichValue(c)
  }), [c]), N = (0, a.e7)([d.default], () => d.default.getId()), T = i.useCallback((e, r, i) => {
    let {
      content: a
    } = i, c = h.Z.can(O.Plq.MANAGE_MESSAGES, t), u = null != I && null != I.author ? I.author.id : null, d = _ && (u === N || c), p = {
      content: a,
      components: true
    };
    if (n.hasFlag(O.iLy.IS_COMPONENTS_V2)) {
      var f;
      let e = (null == (f = n.components[0]) ? true : f.type) === s.re.MEDIA_GALLERY,
        t = n.components.filter(e => e.type !== s.re.TEXT_DISPLAY);
      t.splice(+!!e, 0, {
        type: s.re.TEXT_DISPLAY,
        content: a,
        id: "".concat(j.Kb)
      }), p.content = "", p.components = t
    }
    return d && null != I && (0, l.yE)(I.flags, O.iLy.CROSSPOSTED) ? b.Z.confirmEdit(e, r, p) : o.Z.editMessage(e, r, p), Promise.resolve()
  }, [I, _, N, t, n]), A = i.useCallback(e => {
    var t, n;
    return (0, i.createElement)(S, (t = function(e) {
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
  return null != P && null != Z ? (0, r.jsx)(v.Z, {
    ref: true,
    channel: t,
    message: n,
    textValue: P,
    richValue: Z,
    onCancel: o.Z.endEditMessage,
    onChange: o.Z.updateEditMessage,
    onConfirmDelete: b.Z.confirmDelete,
    saveMessage: T,
    validateEdit: C,
    children: A
  }) : null
}

function S(e) {
  let {
    textValue: t,
    richValue: n,
    message: l,
    channel: a,
    onChange: o,
    onSubmit: s,
    onKeyDown: d,
    renderLeftAccessories: p
  } = e, [f, h] = i.useState(true), m = i.useCallback(() => h(true), []), b = i.useCallback(() => h(false), []);
  return i.useEffect(() => (g.S.subscribe(O.CkL.TEXTAREA_FOCUS, m), g.S.subscribe(O.CkL.TEXTAREA_BLUR, b), () => {
    g.S.unsubscribe(O.CkL.TEXTAREA_FOCUS, m), g.S.unsubscribe(O.CkL.TEXTAREA_BLUR, b)
  }), [m, b]), (0, r.jsx)(u.ZP, {
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
    focused: f,
    onFocus: m,
    onBlur: b,
    renderLeftAccessories: p
  }, l.id)
}

function _(e, t, n) {
  let {
    message: i,
    channel: l,
    compact: a
  } = e;
  return n ? (0, r.jsx)(E, {
    channel: l,
    message: i
  }) : (0, r.jsx)(y.ZP, {
    message: i,
    content: t,
    compact: null != a && a
  })
}