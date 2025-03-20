/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  y: () => m
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(793030),
  a = n(246364),
  l = n(571728),
  o = n(446945),
  A = n(681460),
  c = n(700833),
  d = n(217472),
  u = n(592286),
  g = n(388032),
  f = n(365483);

function m(e) {
  var t;
  let {
    guild: n,
    formFields: A
  } = e, [m, h] = i.useState(A);
  i.useEffect(() => h(A), [A]);
  let C = null !== (t = (0, l.A)({
      guildId: n.id
    })) && void 0 !== t ? t : 0,
    [b, v] = i.useState(null),
    x = i.useMemo(() => null == m ? void 0 : m.some(e => (0, a.J)(e)), [m]),
    N = i.useMemo(() => m.length === u.nx, [m]),
    j = i.useCallback(e => {
      d.Z.setPendingMemberVerificationRules(n.id, e), h(e), null != b && v(null)
    }, [b, n.id]),
    E = i.useCallback(e => {
      j([...m, e])
    }, [m, j]),
    I = i.useCallback(e => {
      j([...m.slice(0, e), ...m.slice(e + 1)])
    }, [m, j]),
    O = i.useCallback((e, t) => {
      if (m[e] === t) return;
      let n = [...m];
      n[e] = t, j(n)
    }, [m, j]),
    y = i.useCallback((e, t, n) => {
      let r = m.indexOf(e),
        i = [...m];
      null != t && t !== r && (i.splice(r, 1), i.splice(t, 0, e), h(i)), n ? (j(i), null !== b && v(null)) : b !== t && v(t)
    }, [b, m, j]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.X6, {
      variant: "text-xs/bold",
      color: "text-muted",
      className: f.title,
      children: g.NW.format(g.t["sm+75u"], {
        currentCount: m.length,
        maxCount: u.nx
      })
    }), m.map(e => (0, c.a0)({
      dropHoveredIndex: b,
      formField: e,
      guild: n,
      index: m.indexOf(e),
      isDragEnabled: m.length > 1,
      submittedGuildJoinRequestsCount: C,
      removeFormField: I,
      updateFormField: O,
      updateFormFieldOrder: y,
      canRemove: m.length > 1,
      actionsLocation: "side",
      fieldStyle: a.it.COMPACT
    })), !N && (0, r.jsx)("div", {
      className: f.addQuestionsContainer,
      children: (0, r.jsx)(o.Z, {
        addFormField: E,
        guild: n,
        allowTerms: !x
      })
    }), !N && (0, r.jsx)(p, {
      addFormField: E
    })]
  })
}

function p(e) {
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
      className: f.examplesHeader,
      children: g.NW.string(g.t.ID04cH)
    }), (0, r.jsx)(A.j, {
      pills: n
    })]
  })
}