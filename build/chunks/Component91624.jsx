/** Chunk was on 61344 **/
/** chunk id: 91624, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
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

function E(e) {
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

function O(e) {
  let {
    channel: t,
    message: n
  } = e, {
    id: c
  } = t, {
    id: u
  } = n, m = t.getGuildId(), g = (0, a.bG)([p.A], () => p.A.getGuild(m), [m]), b = t.type === y.rbe.GUILD_ANNOUNCEMENT, O = null != g && g.features.has(y.GuildFeatures.NEWS), x = b && O, {
    editingMessage: S,
    editingTextValue: j,
    editingRichValue: I
  } = (0, a.cf)([h.A], () => ({
    editingMessage: h.A.getEditingMessage(c),
    editingTextValue: h.A.getEditingTextValue(c),
    editingRichValue: h.A.getEditingRichValue(c)
  }), [c]), T = (0, a.bG)([d.default], () => d.default.getId()), N = r.useCallback((e, l, r) => {
    let {
      content: a
    } = r, c = f.A.can(y.xBc.MANAGE_MESSAGES, t), u = null != S && null != S.author ? S.author.id : null, d = x && (u === T || c), h = {
      content: a,
      components: true
    };
    if (n.hasFlag(y.pr7.IS_COMPONENTS_V2)) {
      var p;
      let e = (null == (p = n.components[0]) ? true : p.type) === o.I5.MEDIA_GALLERY,
        t = n.components.filter(e => e.type !== o.I5.TEXT_DISPLAY);
      t.splice(+!!e, 0, {
        type: o.I5.TEXT_DISPLAY,
        content: a,
        id: "".concat(82744)
      }), h.content = "", h.components = t
    }
    return d && null != S && (0, i.Lt)(S.flags, y.pr7.CROSSPOSTED) ? A.A.confirmEdit(e, l, h) : s.A.editMessage(e, l, h), Promise.resolve()
  }, [S, x, T, t, n]), P = r.useCallback(e => {
    var t, n;
    return (0, r.createElement)(C, (t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
          var l;
          l = n[t], t in e ? Object.defineProperty(e, t, {
            value: l,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = l
        })
      }
      return e
    }({}, e), n = n = {
      className: v.gM,
      key: u
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        n.push.apply(n, l)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  }, [u]);
  return null != j && null != I ? (0, l.jsx)(_.A, {
    ref: true,
    channel: t,
    message: n,
    textValue: j,
    richValue: I,
    onCancel: s.A.endEditMessage,
    onChange: s.A.updateEditMessage,
    onConfirmDelete: A.A.confirmDelete,
    saveMessage: N,
    validateEdit: E,
    children: P
  }) : null
}

function C(e) {
  let {
    textValue: t,
    richValue: n,
    message: i,
    channel: a,
    onChange: s,
    onSubmit: o,
    onKeyDown: d,
    renderLeftAccessories: h
  } = e, [p, f] = r.useState(true), g = r.useCallback(() => f(true), []), A = r.useCallback(() => f(false), []);
  return r.useEffect(() => (m._.subscribe(y.jej.TEXTAREA_FOCUS, g), m._.subscribe(y.jej.TEXTAREA_BLUR, A), () => {
    m._.unsubscribe(y.jej.TEXTAREA_FOCUS, g), m._.unsubscribe(y.jej.TEXTAREA_BLUR, A)
  }), [g, A]), (0, l.jsx)(u.Ay, {
    className: v.gM,
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
    onBlur: A,
    renderLeftAccessories: h
  }, i.id)
}

function x(e, t, n) {
  let {
    message: r,
    channel: i,
    compact: a
  } = e;
  return n ? (0, l.jsx)(O, {
    channel: i,
    message: r
  }) : (0, l.jsx)(b.Ay, {
    message: r,
    content: t,
    compact: null != a && a
  })
}