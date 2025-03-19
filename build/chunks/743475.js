/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  BG: () => m,
  DO: () => h,
  pt: () => p
}), n(47120);
var r = n(570140),
  i = n(668781),
  s = n(881052),
  a = n(45966),
  l = n(637853),
  o = n(592125),
  c = n(823379),
  A = n(889369),
  d = n(570961),
  u = n(208665),
  g = n(290511),
  f = n(388032);

function m() {
  r.Z.dispatch({
    type: "GUILD_SETTINGS_DEFAULT_CHANNELS_RESET"
  })
}

function p(e) {
  r.Z.dispatch({
    type: "GUILD_SETTINGS_DEFAULT_CHANNELS_TOGGLE",
    channelId: e
  })
}
async function h(e) {
  let t = Array.from(A.Z.editedDefaultChannelIds).filter(e => null != o.Z.getChannel(e)),
    n = u.Z.advancedMode,
    [m, p] = (0, l.d9)(e.id, [...t]),
    h = (0, l.kl)(e.id, t, u.Z.editedOnboardingPrompts),
    C = (0, l.kl)(e.id, t, u.Z.editedOnboardingPrompts, l.V7);
  if (a.Z.getEnabled(e.id) && (!n && (p.length < g.md || m.length < g.X) || n && (h.length < g.md || C.length < g.X))) {
    i.Z.show({
      title: f.NW.string(f.t.iLdiqa),
      body: f.NW.string(f.t.JOT74e)
    });
    return
  }
  if (A.Z.hasChanges()) {
    r.Z.dispatch({
      type: "GUILD_SETTINGS_DEFAULT_CHANNELS_SUBMIT"
    });
    try {
      await (0, d.n_)(e.id, {
        default_channel_ids: t
      }), r.Z.dispatch({
        type: "GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS",
        guildId: e.id,
        channelIds: t
      })
    } catch (n) {
      var b;
      let {
        fieldName: e,
        error: t
      } = null !== (b = new s.Hx(n).getAnyErrorMessageAndField()) && void 0 !== b ? b : {};
      i.Z.show({
        title: f.NW.string(f.t.iLdiqa),
        body: [e, t].filter(c.lm).join(": ")
      }), r.Z.dispatch({
        type: "GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_FAILED"
      })
    }
  }
}