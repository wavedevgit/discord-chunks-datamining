/** Chunk was on 3205 **/
"use strict";
n.d(t, {
  y: () => h
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(793030),
  a = n(246364),
  l = n(571728),
  o = n(446945),
  c = n(681460),
  d = n(700833),
  u = n(217472),
  m = n(592286),
  g = n(388032),
  p = n(365483);

function h(e) {
  var t;
  let {
    guild: n,
    formFields: c
  } = e, [h, b] = i.useState(c);
  i.useEffect(() => b(c), [c]);
  let x = null !== (t = (0, l.A)({
      guildId: n.id
    })) && void 0 !== t ? t : 0,
    [j, N] = i.useState(null),
    v = i.useMemo(() => null == h ? void 0 : h.some(e => (0, a.J)(e)), [h]),
    _ = i.useMemo(() => h.length === m.nx, [h]),
    O = i.useCallback(e => {
      u.Z.setPendingMemberVerificationRules(n.id, e), b(e), null != j && N(null)
    }, [j, n.id]),
    y = i.useCallback(e => {
      O([...h, e])
    }, [h, O]),
    C = i.useCallback(e => {
      O([...h.slice(0, e), ...h.slice(e + 1)])
    }, [h, O]),
    I = i.useCallback((e, t) => {
      if (h[e] === t) return;
      let n = [...h];
      n[e] = t, O(n)
    }, [h, O]),
    E = i.useCallback((e, t, n) => {
      let r = h.indexOf(e),
        i = [...h];
      null != t && t !== r && (i.splice(r, 1), i.splice(t, 0, e), b(i)), n ? (O(i), null !== j && N(null)) : j !== t && N(t)
    }, [j, h, O]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.X6, {
      variant: "text-xs/bold",
      color: "text-muted",
      className: p.title,
      children: g.NW.format(g.t["sm+75u"], {
        currentCount: h.length,
        maxCount: m.nx
      })
    }), h.map(e => (0, d.a0)({
      dropHoveredIndex: j,
      formField: e,
      guild: n,
      index: h.indexOf(e),
      isDragEnabled: h.length > 1,
      submittedGuildJoinRequestsCount: x,
      removeFormField: C,
      updateFormField: I,
      updateFormFieldOrder: E,
      canRemove: h.length > 1,
      actionsLocation: "side",
      fieldStyle: a.it.COMPACT
    })), !_ && (0, r.jsx)("div", {
      className: p.addQuestionsContainer,
      children: (0, r.jsx)(o.Z, {
        addFormField: y,
        guild: n,
        allowTerms: !v
      })
    }), !_ && (0, r.jsx)(f, {
      addFormField: y
    })]
  })
}

function f(e) {
  let {
    addFormField: t
  } = e, n = i.useMemo(() => [{
    text: g.NW.string(g.t.EOwiEh),
    onClick: () => {
      t({
        field_type: a.QJ.TEXT_INPUT,
        label: g.NW.string(g.t.EOwiEh),
        required: !0
      })
    }
  }, {
    text: g.NW.string(g.t.jqrNDg),
    onClick: () => {
      t({
        field_type: a.QJ.TEXT_INPUT,
        label: g.NW.string(g.t.jqrNDg),
        required: !0
      })
    }
  }, {
    text: g.NW.string(g.t.I5q8vr),
    onClick: () => {
      t({
        field_type: a.QJ.TEXT_INPUT,
        label: g.NW.string(g.t.I5q8vr),
        required: !0
      })
    }
  }], [t]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.X6, {
      variant: "text-xs/bold",
      color: "text-muted",
      className: p.examplesHeader,
      children: g.NW.string(g.t.ID04cH)
    }), (0, r.jsx)(c.j, {
      pills: n
    })]
  })
}