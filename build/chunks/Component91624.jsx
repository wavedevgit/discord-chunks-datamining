/** Chunk was on 97492 **/
/** chunk id: 91624, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
}), require("./938796.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk843472 = require("./843472.js"),
  Chunk155718 = require("./155718.js"),
  Chunk355622 = require("./355622.js"),
  Chunk133343 = require("./133343.jsx"),
  Chunk961350 = require("./961350.js"),
  Chunk580745 = require("./580745.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk203982 = require("./203982.js"),
  Chunk460350 = require("./460350.js"),
  Chunk145530 = require("./145530.jsx"),
  Chunk291812 = require("./291812.jsx"),
  Chunk205120 = require("./205120.jsx"),
  Chunk652215 = require("./652215.js");
require("./294920.js");
var Chunk119907 = require("./119907.js");

function v(e) {
  let {
    value: t,
    channel: n
  } = e;
  return (0, g.i)({
    type: c.oU.EDIT,
    content: t,
    channel: n,
    restrictMentions: false,
    respectCooldown: false
  })
}

function x(e) {
  let {
    channel: t,
    message: n
  } = e, {
    id: c
  } = t, {
    id: u
  } = n, b = t.getGuildId(), g = (0, a.bG)([p.A], () => p.A.getGuild(b), [b]), A = t.type === O.rbe.GUILD_ANNOUNCEMENT, x = null != g && g.features.has(O.GuildFeatures.NEWS), _ = A && x, {
    editingMessage: C,
    editingTextValue: S,
    editingRichValue: I
  } = (0, a.cf)([f.A], () => ({
    editingMessage: f.A.getEditingMessage(c),
    editingTextValue: f.A.getEditingTextValue(c),
    editingRichValue: f.A.getEditingRichValue(c)
  }), [c]), N = (0, a.bG)([d.default], () => d.default.getId()), T = l.useCallback((e, r, l) => {
    let {
      content: a
    } = l, c = h.A.can(O.xBc.MANAGE_MESSAGES, t), u = null != C && null != C.author ? C.author.id : null, d = _ && (u === N || c), f = {
      content: a,
      components: true
    };
    if (n.hasFlag(O.pr7.IS_COMPONENTS_V2)) {
      var p;
      let e = (null == (p = n.components[0]) ? true : p.type) === o.I5.MEDIA_GALLERY,
        t = n.components.filter(e => e.type !== o.I5.TEXT_DISPLAY);
      t.splice(+!!e, 0, {
        type: o.I5.TEXT_DISPLAY,
        content: a,
        id: "".concat(82744)
      }), f.content = "", f.components = t
    }
    return d && null != C && (0, i.Lt)(C.flags, O.pr7.CROSSPOSTED) ? m.A.confirmEdit(e, r, f) : s.A.editMessage(e, r, f), Promise.resolve()
  }, [C, _, N, t, n]), P = l.useCallback(e => {
    var t, n;
    return (0, l.createElement)(E, (t = function(e) {
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
      className: j.gM,
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
  return null != S && null != I ? (0, r.jsx)(y.A, {
    ref: true,
    channel: t,
    message: n,
    textValue: S,
    richValue: I,
    onCancel: s.A.endEditMessage,
    onChange: s.A.updateEditMessage,
    onConfirmDelete: m.A.confirmDelete,
    saveMessage: T,
    validateEdit: v,
    children: P
  }) : null
}

function E(e) {
  let {
    textValue: t,
    richValue: n,
    message: i,
    channel: a,
    onChange: s,
    onSubmit: o,
    onKeyDown: d,
    renderLeftAccessories: f
  } = e, [p, h] = l.useState(true), g = l.useCallback(() => h(true), []), m = l.useCallback(() => h(false), []);
  return l.useEffect(() => (b._.subscribe(O.jej.TEXTAREA_FOCUS, g), b._.subscribe(O.jej.TEXTAREA_BLUR, m), () => {
    b._.unsubscribe(O.jej.TEXTAREA_FOCUS, g), b._.unsubscribe(O.jej.TEXTAREA_BLUR, m)
  }), [g, m]), (0, r.jsx)(u.Ay, {
    className: j.gM,
    textValue: t,
    richValue: n,
    channel: a,
    type: c.oU.EDIT,
    onChange: s,
    onSubmit: e => {
      let {
        value: t
      } = e;
      return o(t)
    },
    onKeyDown: d,
    focused: p,
    onFocus: g,
    onBlur: m,
    renderLeftAccessories: f
  }, i.id)
}

function _(e, t, n) {
  let {
    message: l,
    channel: i,
    compact: a
  } = e;
  return n ? (0, r.jsx)(x, {
    channel: i,
    message: l
  }) : (0, r.jsx)(A.Ay, {
    message: l,
    content: t,
    compact: null != a && a
  })
}