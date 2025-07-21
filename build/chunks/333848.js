/** Chunk was on 85352 **/
r.d(t, {
  Z: () => p
}), r(415506);
var a = r(990547),
  n = r(283693),
  o = r(570140),
  i = r(408987),
  l = r(9156),
  c = r(621600),
  d = r(573261),
  _ = r(87051),
  u = r(981631),
  s = r(526761);
let p = {
  createChannel(e) {
    let {
      guildId: t,
      type: r,
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
      channelType: r
    });
    let v = {
      type: r,
      name: p,
      permission_overwrites: b
    };
    if (null != h && h !== u.epw && (v.bitrate = h), null != m && m > 0 && (v.user_limit = m), null != g && (v.parent_id = g), r === u.d4z.GUILD_STORE) {
      if (null == E) throw Error("Unexpected missing SKU");
      v.sku_id = E, v.branch_id = f
    }
    return d.Z.post({
      url: u.ANM.GUILD_CHANNELS(t),
      body: v,
      oldFormErrors: !0,
      trackedActionData: {
        event: a.NetworkActionNames.CHANNEL_CREATE,
        properties: e => {
          var t, r;
          return (0, n.iG)({
            is_private: b.length > 0,
            channel_id: null == e || null == (t = e.body) ? void 0 : t.id,
            channel_type: null == e || null == (r = e.body) ? void 0 : r.type
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
  createRoleSubscriptionTemplateChannel: (e, t, r, o) => d.Z.post({
    url: u.ANM.GUILD_CHANNELS(e),
    body: {
      name: t,
      type: r,
      topic: o
    },
    oldFormErrors: !0,
    trackedActionData: {
      event: a.NetworkActionNames.CHANNEL_CREATE,
      properties: e => {
        var t, r;
        return (0, n.iG)({
          is_private: !0,
          channel_id: null == e || null == (t = e.body) ? void 0 : t.id,
          channel_type: null == e || null == (r = e.body) ? void 0 : r.type
        })
      }
    },
    rejectWithError: !1
  })
}