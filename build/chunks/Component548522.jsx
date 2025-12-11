/** Chunk was on 9536 **/
/** chunk id: 548522, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  y: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk246364 = require("./246364.js"),
  Chunk571728 = require("./571728.js"),
  Chunk446945 = require("./446945.jsx"),
  Chunk681460 = require("./681460.jsx"),
  Chunk700833 = require("./700833.jsx"),
  Chunk217472 = require("./217472.js"),
  Chunk592286 = require("./592286.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk775129 = require("./775129.js");

function p(e) {
  var t;
  let {
    guild: n,
    formFields: c
  } = e, [p, h] = i.useState(c);
  i.useEffect(() => h(c), [c]);
  let x = null != (t = (0, s.A)({
      guildId: n.id
    })) ? t : 0,
    [j, v] = i.useState(null),
    O = i.useMemo(() => null == p ? true : p.some(e => (0, a.J)(e)), [p]),
    C = i.useMemo(() => p.length === g.nx, [p]),
    y = i.useCallback(e => {
      u.Z.setPendingMemberVerificationRules(n.id, e), h(e), null != j && v(null)
    }, [j, n.id]),
    N = i.useCallback(e => {
      y([...p, e])
    }, [p, y]),
    E = i.useCallback(e => {
      y([...p.slice(0, e), ...p.slice(e + 1)])
    }, [p, y]),
    I = i.useCallback((e, t) => {
      if (p[e] === t) return;
      let n = [...p];
      n[e] = t, y(n)
    }, [p, y]),
    S = i.useCallback((e, t, n) => {
      let r = p.indexOf(e),
        i = [...p];
      null != t && t !== r && (i.splice(r, 1), i.splice(t, 0, e), h(i)), n ? (y(i), null !== j && v(null)) : j !== t && v(t)
    }, [j, p, y]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.X6q, {
      variant: "text-xs/bold",
      color: "text-muted",
      className: f.title,
      children: m.intl.format(m.t["sm+75n"], {
        currentCount: p.length,
        maxCount: g.nx
      })
    }), p.map(e => (0, d.a0)({
      dropHoveredIndex: j,
      formField: e,
      guild: n,
      index: p.indexOf(e),
      isDragEnabled: p.length > 1,
      submittedGuildJoinRequestsCount: x,
      removeFormField: E,
      updateFormField: I,
      updateFormFieldOrder: S,
      canRemove: p.length > 1,
      actionsLocation: "side",
      fieldStyle: a.it.COMPACT
    })), !C && (0, r.jsx)("div", {
      className: f.addQuestionsContainer,
      children: (0, r.jsx)(o.Z, {
        addFormField: N,
        guild: n,
        allowTerms: !O
      })
    }), !C && (0, r.jsx)(b, {
      addFormField: N
    })]
  })
}

function b(e) {
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
      className: f.examplesHeader,
      children: m.intl.string(m.t.ID04cA)
    }), (0, r.jsx)(c.j, {
      pills: n
    })]
  })
}