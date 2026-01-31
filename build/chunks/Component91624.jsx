/** Chunk was on 17534 **/
/** chunk id: 91624, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
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

function j(e) {
  let {
    value: t,
    channel: n
  } = e;
  return (0, m.i)({
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
  } = n, f = t.getGuildId(), m = (0, s.bG)([p.A], () => p.A.getGuild(f), [f]), A = t.type === O.rbe.GUILD_ANNOUNCEMENT, x = null != m && m.features.has(O.GuildFeatures.NEWS), E = A && x, {
    editingMessage: C,
    editingTextValue: S,
    editingRichValue: I
  } = (0, s.cf)([h.A], () => ({
    editingMessage: h.A.getEditingMessage(c),
    editingTextValue: h.A.getEditingTextValue(c),
    editingRichValue: h.A.getEditingRichValue(c)
  }), [c]), N = (0, s.bG)([d.default], () => d.default.getId()), T = l.useCallback((e, r, l) => {
    let {
      content: s
    } = l, c = g.A.can(O.xBc.MANAGE_MESSAGES, t), u = null != C && null != C.author ? C.author.id : null, d = E && (u === N || c), h = {
      content: s,
      components: true
    };
    if (n.hasFlag(O.pr7.IS_COMPONENTS_V2)) {
      var p;
      let e = (null == (p = n.components[0]) ? true : p.type) === o.I5.MEDIA_GALLERY,
        t = n.components.filter(e => e.type !== o.I5.TEXT_DISPLAY);
      t.splice(+!!e, 0, {
        type: o.I5.TEXT_DISPLAY,
        content: s,
        id: "".concat(82744)
      }), h.content = "", h.components = t
    }
    return d && null != C && (0, i.Lt)(C.flags, O.pr7.CROSSPOSTED) ? b.A.confirmEdit(e, r, h) : a.A.editMessage(e, r, h), Promise.resolve()
  }, [C, E, N, t, n]), P = l.useCallback(e => {
    var t, n;
    return (0, l.createElement)(v, (t = function(e) {
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
      className: _.gM,
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
    onCancel: a.A.endEditMessage,
    onChange: a.A.updateEditMessage,
    onConfirmDelete: b.A.confirmDelete,
    saveMessage: T,
    validateEdit: j,
    children: P
  }) : null
}

function v(e) {
  let {
    textValue: t,
    richValue: n,
    message: i,
    channel: s,
    onChange: a,
    onSubmit: o,
    onKeyDown: d,
    renderLeftAccessories: h
  } = e, [p, g] = l.useState(true), m = l.useCallback(() => g(true), []), b = l.useCallback(() => g(false), []);
  return l.useEffect(() => (f._.subscribe(O.jej.TEXTAREA_FOCUS, m), f._.subscribe(O.jej.TEXTAREA_BLUR, b), () => {
    f._.unsubscribe(O.jej.TEXTAREA_FOCUS, m), f._.unsubscribe(O.jej.TEXTAREA_BLUR, b)
  }), [m, b]), (0, r.jsx)(u.Ay, {
    className: _.gM,
    textValue: t,
    richValue: n,
    channel: s,
    type: c.oU.EDIT,
    onChange: a,
    onSubmit: e => {
      let {
        value: t
      } = e;
      return o(t)
    },
    onKeyDown: d,
    focused: p,
    onFocus: m,
    onBlur: b,
    renderLeftAccessories: h
  }, i.id)
}

function E(e, t, n) {
  let {
    message: l,
    channel: i,
    compact: s
  } = e;
  return n ? (0, r.jsx)(x, {
    channel: i,
    message: l
  }) : (0, r.jsx)(A.Ay, {
    message: l,
    content: t,
    compact: null != s && s
  })
}