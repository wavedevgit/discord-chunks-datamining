/** Chunk was on 93886 **/
n.d(t, {
  Z: () => b
}), n(47120), n(13667), n(390547);
var r = n(200651),
  a = n(442837),
  l = n(481060),
  i = n(100527),
  o = n(171368),
  s = n(594174),
  c = n(719247),
  d = n(71585),
  u = n(146282),
  m = n(897674),
  h = n(561308),
  x = n(206583),
  f = n(719461);

function p(e) {
  let {
    id: t
  } = e, n = (0, a.e7)([s.default], () => s.default.getUser(t));
  return null == n ? null : (0, r.jsx)(l.P3F, {
    className: f.entryAuthor,
    onClick: function() {
      (0, o.openUserProfileModal)({
        sourceAnalyticsLocations: [i.Z.DEV_TOOLS],
        userId: t
      })
    },
    children: (0, r.jsx)(l.Text, {
      variant: "text-md/semibold",
      children: n.username
    })
  })
}

function b() {
  var e;
  let t = (0, a.e7)([u.Z], () => u.Z.getFeed(x.YN.GLOBAL_FEED)),
    n = (0, a.e7)([u.Z], () => u.Z.getFilters()),
    i = (0, a.cj)([c.Z], () => {
      var e;
      let n = {};
      for (let r of null !== (e = null == t ? void 0 : t.entries) && void 0 !== e ? e : []) n[(0, c.T)(r.content)] = c.Z.canRenderContent(r.content);
      return n
    }, [t]),
    o = (0, a.e7)([d.Z], () => d.Z.getImpressionCappedItemIds());
  if (null == n) return null;
  let s = null == t ? void 0 : null === (e = t.entries) || void 0 === e ? void 0 : e.flatMap(e => {
    let {
      content: t
    } = e;
    if (!(0, m.g)(n, t)) return [];
    let a = i[(0, c.T)(t)];
    return (0, r.jsxs)("li", {
      className: f.locatorEntry,
      children: [(0, r.jsx)(p, {
        type: t.author_type,
        id: t.author_id
      }), !a && (0, r.jsx)(l.Text, {
        variant: "text-md/normal",
        children: "Expired or no matching presence"
      }), (0, h.n2)(t) && (0, r.jsxs)(l.Text, {
        variant: "text-md/normal",
        children: ["Expired at ", t.expires_at]
      }), o.has(t.id) && (0, r.jsx)(l.Text, {
        variant: "text-md/normal",
        children: "Impression capped"
      })]
    }, t.id)
  });
  return (0, r.jsxs)(l.hjN, {
    children: [(0, r.jsx)(l.vwX, {
      children: "Selected Content"
    }), null != s ? (0, r.jsx)("ul", {
      children: s
    }) : (0, r.jsx)("div", {
      children: "(none?)"
    })]
  })
}