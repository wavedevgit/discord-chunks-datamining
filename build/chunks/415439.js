/** Chunk was on 51724 **/
n.d(t, {
  BV: () => E,
  FW: () => C,
  Kt: () => _,
  ZC: () => j
});
var r = n(442837),
  i = n(493683),
  s = n(153867),
  a = n(636449),
  l = n(122613),
  o = n(100527),
  c = n(87005),
  d = n(895924),
  u = n(812236),
  m = n(740492),
  p = n(973616),
  g = n(592125),
  h = n(626135),
  f = n(823379),
  x = n(728345),
  b = n(812206),
  N = n(981631);
async function _(e, t, n) {
  t(e.id);
  let r = e.bot;
  if (null == r) try {
    var s, c, m;
    r = null !== (m = null === (s = b.Z.getApplication(e.id)) || void 0 === s ? void 0 : s.bot) && void 0 !== m ? m : null === (c = p.ZP.createFromServer(await (0, x.UM)(e.id))) || void 0 === c ? void 0 : c.bot
  } catch (e) {
    t(void 0);
    return
  }
  if (null != r) {
    let s;
    let c = null == g.Z.getDMFromUserId(r.id);
    try {
      s = (0, a.R)() ? await i.Z.getOrEnsurePrivateChannel(r.id) : await i.Z.openPrivateChannel([r.id], !1, !1, o.Z.APP_DMS_QUICK_LAUNCHER)
    } catch (e) {
      t(void 0)
    }
    if (h.default.track(N.rMx.APP_DMS_QUICK_LAUNCHER_CLICKED, {
        application_id: e.id,
        is_new_dm: c,
        channel_id: s
      }), null == s) {
      t(void 0);
      return
    }
    try {
      await (0, u.ZP)(s, e.id)
    } catch (e) {
      if (e.message === u.sV) {
        t(void 0);
        return
      }
    }
    await (0, l.Z)({
      targetApplicationId: e.id,
      channelId: s,
      analyticsLocations: n,
      commandOrigin: d.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON,
      onExecutedCallback() {
        t(void 0)
      }
    })
  } else t(void 0)
}

function E(e, t) {
  s.ZP.updatedUnsyncedSettings({
    showPlayAgain: e
  }), e || h.default.track(N.rMx.APP_DMS_QUICK_LAUNCHER_HIDDEN, {
    source: t
  })
}

function C() {
  let e = (0, r.e7)([m.ZP], () => m.ZP.showPlayAgain),
    {
      frecentApps: t
    } = j();
  return e && t.length > 0
}

function j() {
  let {
    frecentApps: e,
    loading: t
  } = (0, c.f)({
    context: {
      type: "contextless"
    },
    onlyActivityApps: !0,
    allowCommandFetch: !0,
    includeAuthorizedAppsAndFetch: !1
  });
  return {
    frecentApps: e.map(e => e.application).filter(f.lm),
    loading: t
  }
}