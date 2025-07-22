/** Chunk was on 55305 **/
a.d(t, {
  Z: () => p
}), a(415506);
var r = a(990547),
  n = a(283693),
  o = a(570140),
  i = a(408987),
  l = a(9156),
  c = a(621600),
  d = a(573261),
  _ = a(87051),
  u = a(981631),
  s = a(526761);
let p = {
  createChannel(e) {
    let {
      guildId: t,
      type: a,
      name: p,
      permissionOverwrites: b = [],
      bitrate: h,
      userLimit: m,
      parentId: g,
      skuId: E,
      branchId: f
    } = e;
    o.Z.dispatch({
      type: "CREATE_CHANNEL_MODAL_SUBMIT",
      guildId: t,
      channelType: a
    });
    let v = {
      type: a,
      name: p,
      permission_overwrites: b
    };
    if (null != h && h !== u.epw && (v.bitrate = h), null != m && m > 0 && (v.user_limit = m), null != g && (v.parent_id = g), a === u.d4z.GUILD_STORE) {
      if (null == E) throw Error("Unexpected missing SKU");
      v.sku_id = E, v.branch_id = f
    }
    return d.Z.post({
      url: u.ANM.GUILD_CHANNELS(t),
      body: v,
      oldFormErrors: !0,
      trackedActionData: {
        event: r.NetworkActionNames.CHANNEL_CREATE,
        properties: e => {
          var t, a;
          return (0, n.iG)({
            is_private: b.length > 0,
            channel_id: null == e || null == (t = e.body) ? void 0 : t.id,
            channel_type: null == e || null == (a = e.body) ? void 0 : a.type
          })
        }
      },
      rejectWithError: !1
    }).then(e => (l.ZP.isOptInEnabled(t) && _.Z.updateChannelOverrideSettings(t, e.body.id, {
      flags: s.ic.OPT_IN_ENABLED
    }, c.ZB.OptedIn), i.Z.checkGuildTemplateDirty(t), e), e => {
      throw o.Z.dispatch({
        type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
        errors: e.body
      }), e
    })
  },
  createRoleSubscriptionTemplateChannel: (e, t, a, o) => d.Z.post({
    url: u.ANM.GUILD_CHANNELS(e),
    body: {
      name: t,
      type: a,
      topic: o
    },
    oldFormErrors: !0,
    trackedActionData: {
      event: r.NetworkActionNames.CHANNEL_CREATE,
      properties: e => {
        var t, a;
        return (0, n.iG)({
          is_private: !0,
          channel_id: null == e || null == (t = e.body) ? void 0 : t.id,
          channel_type: null == e || null == (a = e.body) ? void 0 : a.type
        })
      }
    },
    rejectWithError: !1
  })
}