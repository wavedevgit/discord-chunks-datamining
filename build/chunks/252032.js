/** Chunk was on 71611 **/
n.d(t, {
  Z: () => N
}), n(789020), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(442837),
  o = n(904245),
  a = n(257559),
  s = n(541716),
  c = n(893718),
  u = n(540059),
  d = n(314897),
  p = n(323873),
  h = n(430824),
  f = n(496675),
  m = n(585483),
  g = n(630388),
  b = n(838440),
  _ = n(930282),
  C = n(955384),
  v = n(981631),
  y = n(656017);

function x(e) {
  let {
    value: t,
    channel: n
  } = e;
  return (0, b.v)({
    type: s.Ie.EDIT,
    content: t,
    channel: n,
    restrictMentions: !1,
    respectCooldown: !1
  })
}

function j(e) {
  let {
    channel: t,
    message: n
  } = e, {
    id: s
  } = t, {
    id: c
  } = n, m = t.getGuildId(), b = (0, l.e7)([h.Z], () => h.Z.getGuild(m), [m]), _ = t.type === v.d4z.GUILD_ANNOUNCEMENT, j = null != b && b.hasFeature(v.oNc.NEWS), N = _ && j, {
    editingMessage: E,
    editingTextValue: P,
    editingRichValue: I
  } = (0, l.cj)([p.Z], () => ({
    editingMessage: p.Z.getEditingMessage(s),
    editingTextValue: p.Z.getEditingTextValue(s),
    editingRichValue: p.Z.getEditingRichValue(s)
  }), [s]), S = (0, l.e7)([d.default], () => d.default.getId()), Z = i.useCallback((e, n, r) => {
    let {
      content: i
    } = r, l = f.Z.can(v.Plq.MANAGE_MESSAGES, t), s = null != E && null != E.author ? E.author.id : null;
    return N && (s === S || l) && null != E && (0, g.yE)(E.flags, v.iLy.CROSSPOSTED) ? a.Z.confirmEdit(e, n, i) : o.Z.editMessage(e, n, {
      content: i
    }), Promise.resolve()
  }, [E, N, S, t]), T = i.useCallback(e => {
    var t, n;
    return (0, i.createElement)(O, (t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = r
        })
      }
      return e
    }({}, e), n = n = {
      className: y.channelTextArea,
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
  }, [c]), A = (0, u.R6)("EditorWrapper");
  return null != P && null != I ? (0, r.jsx)(C.Z, {
    ref: void 0,
    channel: t,
    message: n,
    textValue: P,
    richValue: I,
    onCancel: o.Z.endEditMessage,
    onChange: o.Z.updateEditMessage,
    onConfirmDelete: a.Z.confirmDelete,
    saveMessage: Z,
    validateEdit: x,
    isRefreshEnabled: A,
    children: T
  }) : null
}

function O(e) {
  let {
    textValue: t,
    richValue: n,
    message: l,
    channel: o,
    onChange: a,
    onSubmit: u,
    onKeyDown: d,
    renderLeftAccessories: p
  } = e, [h, f] = i.useState(!0), g = i.useCallback(() => f(!0), []), b = i.useCallback(() => f(!1), []);
  return i.useEffect(() => (m.S.subscribe(v.CkL.TEXTAREA_FOCUS, g), m.S.subscribe(v.CkL.TEXTAREA_BLUR, b), () => {
    m.S.unsubscribe(v.CkL.TEXTAREA_FOCUS, g), m.S.unsubscribe(v.CkL.TEXTAREA_BLUR, b)
  }), [g, b]), (0, r.jsx)(c.Z, {
    className: y.channelTextArea,
    textValue: t,
    richValue: n,
    channel: o,
    type: s.Ie.EDIT,
    onChange: a,
    onSubmit: e => {
      let {
        value: t
      } = e;
      return u(t)
    },
    onKeyDown: d,
    focused: h,
    onFocus: g,
    onBlur: b,
    renderLeftAccessories: p
  }, l.id)
}

function N(e, t, n) {
  let {
    message: i,
    channel: l
  } = e;
  return n ? (0, r.jsx)(j, {
    channel: l,
    message: i
  }) : (0, r.jsx)(_.ZP, {
    message: i,
    content: t
  })
}