/** Chunk was on 50751 **/
n.d(t, {
  Z: () => d
});
var i = n(200651);
n(192379);
var r = n(120356),
  o = n.n(r),
  l = n(442837),
  a = n(592125),
  s = n(944486),
  u = n(293224),
  c = n(7652);

function d(e) {
  let {
    locked: t
  } = e, n = (0, l.e7)([s.Z], () => s.Z.getVoiceChannelId()), r = (0, l.e7)([a.Z], () => a.Z.getChannel(n)), d = null != r;
  return (0, i.jsxs)("div", {
    className: o()({
      [c.panelContainer]: !0,
      [c.locked]: t
    }),
    children: [(0, i.jsxs)("div", {
      className: c.panelRow,
      children: [(0, i.jsxs)("div", {
        className: c.buttonSection,
        children: [(0, i.jsx)(u.Ox, {
          voiceChannel: r,
          locked: t
        }), (0, i.jsx)(u.SE, {
          voiceChannel: r,
          locked: t
        }), (0, i.jsx)(u.N3, {
          voiceChannel: r,
          locked: t
        })]
      }), (0, i.jsxs)("div", {
        className: c.buttonSection,
        children: [(0, i.jsx)(u.sm, {
          voiceChannel: r,
          locked: t
        }), (0, i.jsx)(u.aG, {
          voiceChannel: r,
          locked: t
        })]
      }), (0, i.jsx)("div", {
        className: o()(c.buttonSection, d && c.inCall),
        children: (0, i.jsx)(u.c_, {
          voiceChannel: r,
          locked: t
        })
      })]
    }), d && (0, i.jsx)("div", {
      className: c.panelRow,
      children: (0, i.jsx)(u.L, {
        voiceChannel: r,
        locked: t
      })
    })]
  })
}