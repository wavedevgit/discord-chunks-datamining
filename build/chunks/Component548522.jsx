/** Chunk was on 384 **/
/** chunk id: 548522, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk246364 = require("./246364.js"),
  Chunk571728 = require("./571728.js"),
  Chunk446945 = require("./446945.jsx"),
  Chunk681460 = require("./681460.jsx"),
  Chunk700833 = require("./700833.jsx"),
  Chunk217472 = require("./217472.js"),
  Chunk592286 = require("./592286.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk194973 = require("./194973.js");

function f(e) {
  var t;
  let {
    guild: n,
    formFields: c
  } = e, [f, b] = i.useState(c);
  i.useEffect(() => b(c), [c]);
  let x = null != (t = (0, s.A)({
      guildId: n.id
    })) ? t : 0,
    [j, _] = i.useState(null),
    v = i.useMemo(() => null == f ? true : f.some(e => (0, a.J)(e)), [f]),
    O = i.useMemo(() => f.length === g.nx, [f]),
    C = i.useCallback(e => {
      u.Z.setPendingMemberVerificationRules(n.id, e), b(e), null != j && _(null)
    }, [j, n.id]),
    y = i.useCallback(e => {
      C([...f, e])
    }, [f, C]),
    N = i.useCallback(e => {
      C([...f.slice(0, e), ...f.slice(e + 1)])
    }, [f, C]),
    E = i.useCallback((e, t) => {
      if (f[e] === t) return;
      let n = [...f];
      n[e] = t, C(n)
    }, [f, C]),
    I = i.useCallback((e, t, n) => {
      let r = f.indexOf(e),
        i = [...f];
      null != t && t !== r && (i.splice(r, 1), i.splice(t, 0, e), b(i)), n ? (C(i), null !== j && _(null)) : j !== t && _(t)
    }, [j, f, C]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.X6q, {
      variant: "text-xs/bold",
      color: "text-muted",
      className: p.title,
      children: m.intl.format(m.t["sm+75n"], {
        currentCount: f.length,
        maxCount: g.nx
      })
    }), f.map(e => (0, d.a0)({
      dropHoveredIndex: j,
      formField: e,
      guild: n,
      index: f.indexOf(e),
      isDragEnabled: f.length > 1,
      submittedGuildJoinRequestsCount: x,
      removeFormField: N,
      updateFormField: E,
      updateFormFieldOrder: I,
      canRemove: f.length > 1,
      actionsLocation: "side",
      fieldStyle: a.it.COMPACT
    })), !O && (0, r.jsx)("div", {
      className: p.addQuestionsContainer,
      children: (0, r.jsx)(o.Z, {
        addFormField: y,
        guild: n,
        allowTerms: !v
      })
    }), !O && (0, r.jsx)(h, {
      addFormField: y
    })]
  })
}

function h(e) {
  let {
    addFormField: t
  } = e, n = i.useMemo(() => [{
    text: m.intl.string(m.t.EOwiEk),
    onClick: () => {
      t({
        field_type: a.QJ.TEXT_INPUT,
        label: m.intl.string(m.t.EOwiEk),
        required: true
      })
    }
  }, {
    text: m.intl.string(m.t.jqrNDh),
    onClick: () => {
      t({
        field_type: a.QJ.TEXT_INPUT,
        label: m.intl.string(m.t.jqrNDh),
        required: true
      })
    }
  }, {
    text: m.intl.string(m.t.I5q8vp),
    onClick: () => {
      t({
        field_type: a.QJ.TEXT_INPUT,
        label: m.intl.string(m.t.I5q8vp),
        required: true
      })
    }
  }], [t]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.X6q, {
      variant: "text-xs/bold",
      color: "text-muted",
      className: p.examplesHeader,
      children: m.intl.string(m.t.ID04cA)
    }), (0, r.jsx)(c.j, {
      pills: n
    })]
  })
}