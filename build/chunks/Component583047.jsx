/** Chunk was on 39048 **/
/** chunk id: 583047, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  a: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk513461 = require("./513461.js"),
  Chunk786180 = require("./786180.js"),
  Chunk892921 = require("./892921.jsx"),
  Chunk596484 = require("./596484.jsx"),
  Chunk322388 = require("./322388.jsx"),
  Chunk564864 = require("./564864.js"),
  Chunk260197 = require("./260197.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk35407 = require("./35407.js");

function f(e) {
  var t;
  let {
    guild: n,
    formFields: c
  } = e, [f, b] = i.useState(c);
  i.useEffect(() => b(c), [c]);
  let x = null != (t = (0, a.H)({
      guildId: n.id
    })) ? t : 0,
    [j, _] = i.useState(null),
    O = i.useMemo(() => null == f ? true : f.some(e => (0, s.i7)(e)), [f]),
    v = i.useMemo(() => f.length === g.OK, [f]),
    y = i.useCallback(e => {
      u.A.setPendingMemberVerificationRules(n.id, e), b(e), null != j && _(null)
    }, [j, n.id]),
    A = i.useCallback(e => {
      y([...f, e])
    }, [f, y]),
    E = i.useCallback(e => {
      y([...f.slice(0, e), ...f.slice(e + 1)])
    }, [f, y]),
    N = i.useCallback((e, t) => {
      if (f[e] === t) return;
      let n = [...f];
      n[e] = t, y(n)
    }, [f, y]),
    S = i.useCallback((e, t, n) => {
      let r = f.indexOf(e),
        i = [...f];
      null != t && t !== r && (i.splice(r, 1), i.splice(t, 0, e), b(i)), n ? (y(i), null !== j && _(null)) : j !== t && _(t)
    }, [j, f, y]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.DZT, {
      variant: "text-xs/bold",
      color: "text-muted",
      className: p.DD,
      children: m.intl.format(m.t["sm+75n"], {
        currentCount: f.length,
        maxCount: g.OK
      })
    }), f.map(e => (0, d.Td)({
      dropHoveredIndex: j,
      formField: e,
      guild: n,
      index: f.indexOf(e),
      isDragEnabled: f.length > 1,
      submittedGuildJoinRequestsCount: x,
      removeFormField: E,
      updateFormField: N,
      updateFormFieldOrder: S,
      canRemove: f.length > 1,
      actionsLocation: "side",
      fieldStyle: s.Vf.COMPACT
    })), !v && (0, r.jsx)("div", {
      className: p.At,
      children: (0, r.jsx)(o.A, {
        addFormField: A,
        guild: n,
        allowTerms: !O
      })
    }), !v && (0, r.jsx)(h, {
      addFormField: A
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
        field_type: s.rX.TEXT_INPUT,
        label: m.intl.string(m.t.EOwiEk),
        required: true
      })
    }
  }, {
    text: m.intl.string(m.t.jqrNDh),
    onClick: () => {
      t({
        field_type: s.rX.TEXT_INPUT,
        label: m.intl.string(m.t.jqrNDh),
        required: true
      })
    }
  }, {
    text: m.intl.string(m.t.I5q8vp),
    onClick: () => {
      t({
        field_type: s.rX.TEXT_INPUT,
        label: m.intl.string(m.t.I5q8vp),
        required: true
      })
    }
  }], [t]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.DZT, {
      variant: "text-xs/bold",
      color: "text-muted",
      className: p.hD,
      children: m.intl.string(m.t.ID04cA)
    }), (0, r.jsx)(c.z, {
      pills: n
    })]
  })
}