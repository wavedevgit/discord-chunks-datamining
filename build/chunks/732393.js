/** Chunk was on 78650 **/
n.d(t, {
  Z: () => Z
}), n(388685);
var i = n(255367);
n(73800);
var r = n(442837),
  l = n(481060),
  a = n(239091),
  o = n(596454),
  s = n(339085),
  d = n(883429),
  u = n(456269),
  c = n(665906),
  f = n(592125),
  h = n(710352),
  g = n(388032),
  v = n(939852);

function b(e) {
  let {
    tag: t
  } = e, {
    name: n,
    emojiId: l,
    emojiName: a
  } = t, d = (0, r.e7)([s.ZP], () => null != l ? s.ZP.getUsableCustomEmojiById(l) : null);
  return (0, i.jsxs)(i.Fragment, {
    children: [null != a || null != l ? (0, i.jsx)(o.Z, {
      className: v.emoji,
      emojiId: l,
      emojiName: a,
      animated: !!(null == d ? void 0 : d.animated)
    }) : null, n]
  })
}

function Z(e) {
  let t = (0, r.e7)([f.Z], () => f.Z.getChannel(e), [e]),
    n = (0, c.C7)(t),
    o = (0, r.e7)([f.Z], () => f.Z.getChannel(null == t ? void 0 : t.parent_id), [t]),
    s = (0, u.Vm)(o),
    v = (0, u.eV)(t),
    Z = v.length >= h.Cn,
    p = (0, c.$R)(t);
  if (null == t) return (0, a.Zy)(), null;
  if (!n || __OVERLAY__ || !t.isForumPost() || (null == s ? void 0 : s.length) === 0 || !p || t.isModeratorReportChannel()) return null;
  let m = e => {
      let n = new Set(v);
      if (n.has(e)) n.delete(e);
      else {
        if (Z) return;
        n.add(e)
      }
      let i = Array.from(n).map(e => e.id);
      d.Z.updateForumPostTags(t.id, i)
    },
    O = null == s ? void 0 : s.map(e => {
      let t = v.includes(e);
      return (0, i.jsx)(l.S89, {
        id: e.id,
        label: (0, i.jsx)(b, {
          tag: e
        }),
        disabled: Z && !t,
        action: () => m(e),
        checked: t
      }, e.id)
    });
  return (0, i.jsx)(l.sNh, {
    id: "edit-tags",
    label: g.intl.string(g.t["436ZFx"]),
    children: O
  })
}