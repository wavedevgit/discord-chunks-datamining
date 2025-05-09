/** Chunk was on 98350 **/
n.d(t, {
  ZP: () => v,
  k: () => _,
  u9: () => b
}), n(388685);
var i = n(255367);
n(73800);
var r = n(913527),
  l = n.n(r),
  a = n(442837),
  u = n(481060),
  o = n(211739),
  c = n(87051),
  s = n(496729),
  d = n(777861),
  f = n(9156),
  g = n(621600),
  E = n(933557),
  p = n(981631),
  O = n(969943),
  h = n(388032);
let _ = () => [{
    value: O.Oe.MINUTES_15,
    label: h.intl.string(h.t["8ot6go"])
  }, {
    value: O.Oe.HOURS_1,
    label: h.intl.string(h.t.UMWBZm)
  }, {
    value: O.Oe.HOURS_3,
    label: h.intl.string(h.t.QmYWtr)
  }, {
    value: O.Oe.HOURS_8,
    label: h.intl.string(h.t.EpAXPD)
  }, {
    value: O.Oe.HOURS_24,
    label: h.intl.string(h.t["755t4u"])
  }, {
    value: O.Oe.ALWAYS,
    label: h.intl.string(h.t.r3LawM)
  }],
  b = e => {
    let t = e > 0 ? l()().add(e, "second").toISOString() : null;
    return {
      muted: !0,
      mute_config: {
        selected_time_window: e,
        end_time: t
      }
    }
  };

function v(e, t) {
  let [n, r] = (0, a.Wu)([f.ZP], () => [f.ZP.isChannelMuted(e.guild_id, e.id), f.ZP.getChannelMuteConfig(e.guild_id, e.id)]), l = (0, d.U)(r), O = (0, E.ZP)(e, !0);

  function v(t) {
    t && e.type === p.d4z.GUILD_CATEGORY && (0, o.c4)(e.id), c.Z.updateChannelOverrideSettings(e.guild_id, e.id, {
      muted: t
    }, g.UE.muted(t))
  }
  let C = h.intl.string(h.t.tbeRRE),
    y = h.intl.string(h.t.OYefmZ);
  switch (e.type) {
    case p.d4z.GUILD_CATEGORY:
      C = h.intl.string(h.t.pNMCg4), y = h.intl.string(h.t.olaBeH);
      break;
    case p.d4z.GROUP_DM:
      C = h.intl.string(h.t.LO3kaG), y = h.intl.string(h.t["s5/5fn"]);
      break;
    case p.d4z.DM:
      C = h.intl.format(h.t.byjuJi, {
        name: O
      }), y = h.intl.format(h.t["eC+9rq"], {
        name: O
      });
      break;
    default:
      C = h.intl.string(h.t.tbeRRE), y = h.intl.string(h.t.OYefmZ)
  }
  return n ? (0, i.jsx)(u.sNh, {
    id: "unmute-channel",
    label: y,
    subtext: l,
    action: () => v(!1)
  }) : (0, i.jsx)(u.sNh, {
    id: "mute-channel",
    label: C,
    action: () => {
      v(!0), (0, s.sT)({
        channelId: e.id,
        location: "channel_context_menu"
      })
    },
    children: _().map(n => {
      let {
        value: r,
        label: l
      } = n;
      return (0, i.jsx)(u.sNh, {
        id: "".concat(r),
        label: l,
        action: () => (function(n) {
          e.type === p.d4z.GUILD_CATEGORY && (0, o.c4)(e.id);
          let i = b(n);
          c.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, g.ZB.Muted, t)
        })(r)
      }, r)
    })
  })
}