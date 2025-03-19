/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  O: () => N
});
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(481060),
  l = n(456268),
  o = n(863249),
  c = n(999382),
  A = n(209054),
  d = n(96788),
  u = n(217472),
  g = n(202905),
  f = n(44867),
  m = n(557359),
  p = n(658666),
  h = n(307375),
  C = n(384632),
  b = n(388032),
  v = n(241197);

function x(e) {
  let {
    pendingState: t
  } = e, n = i.useRef(!1), s = i.useCallback(async e => {
    if (!n.current) try {
      await (0, A.k)(e), (0, d.V)(e), (0, l.le)(), (0, l.aC)(e)
    } finally {
      n.current = !0
    }
  }, [n]);
  switch (t.joinType) {
    case C.A.INVITE:
      return (0, r.jsx)(m.A, {
        requireTerms: t.requireTerms,
        rules: t.termRules
      });
    case C.A.APPLY:
      return (0, r.jsx)(g.r, {
        pendingFields: t.pendingVerificationFields
      });
    case C.A.DISCOVERABLE:
      return (0, r.jsx)(f.c, {
        fetchDiscoveryData: s,
        settingsView: t.settingsView,
        requireTerms: t.requireTerms,
        rules: t.termRules
      })
  }
}

function N() {
  let e = (0, s.e7)([c.Z], () => c.Z.getProps().guild),
    t = (0, s.e7)([p.Z], () => p.Z.pendingState);
  i.useEffect(() => {
    (null == e ? void 0 : e.id) != null && o.ZP.fetchVerificationForm(e.id)
  }, [null == e ? void 0 : e.id]);
  let n = i.useCallback(t => {
    (null == e ? void 0 : e.id) != null && u.Z.setSelectedJoinType(e.id, t)
  }, [null == e ? void 0 : e.id]);
  if (null == e || null == t) return null;
  let {
    joinType: l
  } = t;
  return (0, r.jsxs)(a.Kqy, {
    gap: 32,
    children: [(0, r.jsx)(a.X6q, {
      color: "header-primary",
      variant: "heading-lg/semibold",
      children: b.NW.string(b.t.YJlvBA)
    }), (0, r.jsx)(h.h, {
      onTypePicked: n,
      activeType: l,
      guild: e
    }), (0, r.jsx)("div", {
      className: v.divider
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)(x, {
        pendingState: t
      })
    })]
  })
}