/** Chunk was on 29679 **/
/** chunk id: 548522, original params: e,t,n (module,exports,require) **/
"use strict";
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
  Chunk811217 = require("./811217.js");

function f(e) {
  var t;
  let {
    guild: n,
    formFields: c
  } = e, [f, x] = i.useState(c);
  i.useEffect(() => x(c), [c]);
  let b = null != (t = (0, a.A)({
      guildId: n.id
    })) ? t : 0,
    [j, v] = i.useState(null),
    _ = i.useMemo(() => null == f ? true : f.some(e => (0, s.J)(e)), [f]),
    O = i.useMemo(() => f.length === m.nx, [f]),
    y = i.useCallback(e => {
      u.Z.setPendingMemberVerificationRules(n.id, e), x(e), null != j && v(null)
    }, [j, n.id]),
    C = i.useCallback(e => {
      y([...f, e])
    }, [f, y]),
    N = i.useCallback(e => {
      y([...f.slice(0, e), ...f.slice(e + 1)])
    }, [f, y]),
    E = i.useCallback((e, t) => {
      if (f[e] === t) return;
      let n = [...f];
      n[e] = t, y(n)
    }, [f, y]),
    I = i.useCallback((e, t, n) => {
      let r = f.indexOf(e),
        i = [...f];
      null != t && t !== r && (i.splice(r, 1), i.splice(t, 0, e), x(i)), n ? (y(i), null !== j && v(null)) : j !== t && v(t)
    }, [j, f, y]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.X6q, {
      variant: "text-xs/bold",
      color: "text-muted",
      className: p.title,
      children: g.intl.format(g.t["sm+75u"], {
        currentCount: f.length,
        maxCount: m.nx
      })
    }), f.map(e => (0, d.a0)({
      dropHoveredIndex: j,
      formField: e,
      guild: n,
      index: f.indexOf(e),
      isDragEnabled: f.length > 1,
      submittedGuildJoinRequestsCount: b,
      removeFormField: N,
      updateFormField: E,
      updateFormFieldOrder: I,
      canRemove: f.length > 1,
      actionsLocation: "side",
      fieldStyle: s.it.COMPACT
    })), !O && (0, r.jsx)("div", {
      className: p.addQuestionsContainer,
      children: (0, r.jsx)(o.Z, {
        addFormField: C,
        guild: n,
        allowTerms: !_
      })
    }), !O && (0, r.jsx)(h, {
      addFormField: C
    })]
  })
}

function h(e) {
  let {
    addFormField: t
  } = e, n = i.useMemo(() => [{
    text: g.intl.string(g.t.EOwiEh),
    onClick: () => {
      t({
        field_type: s.QJ.TEXT_INPUT,
        label: g.intl.string(g.t.EOwiEh),
        required: true
      })
    }
  }, {
    text: g.intl.string(g.t.jqrNDg),
    onClick: () => {
      t({
        field_type: s.QJ.TEXT_INPUT,
        label: g.intl.string(g.t.jqrNDg),
        required: true
      })
    }
  }, {
    text: g.intl.string(g.t.I5q8vr),
    onClick: () => {
      t({
        field_type: s.QJ.TEXT_INPUT,
        label: g.intl.string(g.t.I5q8vr),
        required: true
      })
    }
  }], [t]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.X6q, {
      variant: "text-xs/bold",
      color: "text-muted",
      className: p.examplesHeader,
      children: g.intl.string(g.t.ID04cH)
    }), (0, r.jsx)(c.j, {
      pills: n
    })]
  })
}