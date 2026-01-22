/** Chunk was on 47841 **/
/** chunk id: 583047, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  a: () => m
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

function m(e) {
  var t;
  let {
    guild: n,
    formFields: o
  } = e, [m, x] = i.useState(o);
  i.useEffect(() => x(o), [o]);
  let h = null != (t = (0, a.H)({
      guildId: n.id
    })) ? t : 0,
    [j, O] = i.useState(null),
    y = i.useMemo(() => null == m ? true : m.some(e => (0, s.i7)(e)), [m]),
    v = i.useMemo(() => m.length === f.OK, [m]),
    A = i.useCallback(e => {
      u.A.setPendingMemberVerificationRules(n.id, e), x(e), null != j && O(null)
    }, [j, n.id]),
    E = i.useCallback(e => {
      A([...m, e])
    }, [m, A]),
    N = i.useCallback(e => {
      A([...m.slice(0, e), ...m.slice(e + 1)])
    }, [m, A]),
    _ = i.useCallback((e, t) => {
      if (m[e] === t) return;
      let n = [...m];
      n[e] = t, A(n)
    }, [m, A]),
    S = i.useCallback((e, t, n) => {
      let r = m.indexOf(e),
        i = [...m];
      null != t && t !== r && (i.splice(r, 1), i.splice(t, 0, e), x(i)), n ? (A(i), null !== j && O(null)) : j !== t && O(t)
    }, [j, m, A]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.DZT, {
      variant: "text-xs/bold",
      color: "text-muted",
      className: b.DD,
      children: g.intl.format(g.t["sm+75n"], {
        currentCount: m.length,
        maxCount: f.OK
      })
    }), m.map(e => (0, d.Td)({
      dropHoveredIndex: j,
      formField: e,
      guild: n,
      index: m.indexOf(e),
      isDragEnabled: m.length > 1,
      submittedGuildJoinRequestsCount: h,
      removeFormField: N,
      updateFormField: _,
      updateFormFieldOrder: S,
      canRemove: m.length > 1,
      actionsLocation: "side",
      fieldStyle: s.Vf.COMPACT
    })), !v && (0, r.jsx)("div", {
      className: b.At,
      children: (0, r.jsx)(c.A, {
        addFormField: E,
        guild: n,
        allowTerms: !y
      })
    }), !v && (0, r.jsx)(p, {
      addFormField: E
    })]
  })
}

function p(e) {
  let {
    addFormField: t
  } = e, n = i.useMemo(() => [{
    text: g.intl.string(g.t.EOwiEk),
    onClick: () => {
      t({
        field_type: s.rX.TEXT_INPUT,
        label: g.intl.string(g.t.EOwiEk),
        required: true
      })
    }
  }, {
    text: g.intl.string(g.t.jqrNDh),
    onClick: () => {
      t({
        field_type: s.rX.TEXT_INPUT,
        label: g.intl.string(g.t.jqrNDh),
        required: true
      })
    }
  }, {
    text: g.intl.string(g.t.I5q8vp),
    onClick: () => {
      t({
        field_type: s.rX.TEXT_INPUT,
        label: g.intl.string(g.t.I5q8vp),
        required: true
      })
    }
  }], [t]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.DZT, {
      variant: "text-xs/bold",
      color: "text-muted",
      className: b.hD,
      children: g.intl.string(g.t.ID04cA)
    }), (0, r.jsx)(o.z, {
      pills: n
    })]
  })
}