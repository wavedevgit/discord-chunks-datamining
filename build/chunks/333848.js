/** Chunk was on 97167 **/
t.d(a, {
  Z: () => b
}), t(415506);
var r = t(990547),
  o = t(283693),
  n = t(570140),
  i = t(408987),
  c = t(9156),
  l = t(621600),
  d = t(573261),
  _ = t(87051),
  s = t(981631),
  u = t(526761);
let b = {
  createChannel(e) {
    let {
      guildId: a,
      type: t,
      name: b,
      permissionOverwrites: p = [],
      bitrate: h,
      userLimit: m,
      parentId: g,
      skuId: E,
      branchId: I
    } = e;
    n.Z.dispatch({
      type: "CREATE_CHANNEL_MODAL_SUBMIT",
      guildId: a,
      channelType: t
    });
    let L = {
      type: t,
      name: b,
      permission_overwrites: p
    };
    if (null != h && h !== s.epw && (L.bitrate = h), null != m && m > 0 && (L.user_limit = m), null != g && (L.parent_id = g), t === s.d4z.GUILD_STORE) {
      if (null == E) throw Error("Unexpected missing SKU");
      L.sku_id = E, L.branch_id = I
    }
    return d.Z.post({
      url: s.ANM.GUILD_CHANNELS(a),
      body: L,
      oldFormErrors: !0,
      trackedActionData: {
        event: r.NetworkActionNames.CHANNEL_CREATE,
        properties: e => {
          var a, t;
          return (0, o.iG)({
            is_private: p.length > 0,
            channel_id: null == e || null == (a = e.body) ? void 0 : a.id,
            channel_type: null == e || null == (t = e.body) ? void 0 : t.type
          })
        }
      },
      rejectWithError: !1
    }).then(e => (c.ZP.isOptInEnabled(a) && _.Z.updateChannelOverrideSettings(a, e.body.id, {
      flags: u.ic.OPT_IN_ENABLED
    }, l.ZB.OptedIn), i.Z.checkGuildTemplateDirty(a), e), e => {
      throw n.Z.dispatch({
        type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
        errors: e.body
      }), e
    })
  },
  createRoleSubscriptionTemplateChannel: (e, a, t, n) => d.Z.post({
    url: s.ANM.GUILD_CHANNELS(e),
    body: {
      name: a,
      type: t,
      topic: n
    },
    oldFormErrors: !0,
    trackedActionData: {
      event: r.NetworkActionNames.CHANNEL_CREATE,
      properties: e => {
        var a, t;
        return (0, o.iG)({
          is_private: !0,
          channel_id: null == e || null == (a = e.body) ? void 0 : a.id,
          channel_type: null == e || null == (t = e.body) ? void 0 : t.type
        })
      }
    },
    rejectWithError: !1
  })
}