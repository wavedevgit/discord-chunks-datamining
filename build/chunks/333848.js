/** Chunk was on 80284 (aa4470864aca9443.js) **/
l.d(t, {
  Z: () => d
}), l(411104);
var n = l(990547),
  r = l(283693),
  a = l(570140),
  s = l(408987),
  o = l(9156),
  i = l(621600),
  u = l(573261),
  c = l(87051),
  p = l(981631),
  h = l(526761);
let d = {
  createChannel(e) {
    let {
      guildId: t,
      type: l,
      name: d,
      permissionOverwrites: g = [],
      bitrate: f,
      userLimit: v,
      parentId: y,
      skuId: E,
      branchId: b
    } = e;
    a.Z.dispatch({
      type: "CREATE_CHANNEL_MODAL_SUBMIT",
      guildId: t,
      channelType: l
    });
    let N = {
      type: l,
      name: d,
      permission_overwrites: g
    };
    if (null != f && f !== p.epw && (N.bitrate = f), null != v && v > 0 && (N.user_limit = v), null != y && (N.parent_id = y), l === p.d4z.GUILD_STORE) {
      if (null == E) throw Error("Unexpected missing SKU");
      N.sku_id = E, N.branch_id = b
    }
    return u.Z.post({
      url: p.ANM.GUILD_CHANNELS(t),
      body: N,
      oldFormErrors: !0,
      trackedActionData: {
        event: n.NetworkActionNames.CHANNEL_CREATE,
        properties: e => {
          var t, l;
          return (0, r.iG)({
            is_private: g.length > 0,
            channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
            channel_type: null == e ? void 0 : null === (l = e.body) || void 0 === l ? void 0 : l.type
          })
        }
      },
      rejectWithError: !1
    }).then(e => (o.ZP.isOptInEnabled(t) && c.Z.updateChannelOverrideSettings(t, e.body.id, {
      flags: h.ic.OPT_IN_ENABLED
    }, i.ZB.OptedIn), s.Z.checkGuildTemplateDirty(t), e), e => {
      throw a.Z.dispatch({
        type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
        errors: e.body
      }), e
    })
  },
  createRoleSubscriptionTemplateChannel: (e, t, l, a) => u.Z.post({
    url: p.ANM.GUILD_CHANNELS(e),
    body: {
      name: t,
      type: l,
      topic: a
    },
    oldFormErrors: !0,
    trackedActionData: {
      event: n.NetworkActionNames.CHANNEL_CREATE,
      properties: e => {
        var t, l;
        return (0, r.iG)({
          is_private: !0,
          channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
          channel_type: null == e ? void 0 : null === (l = e.body) || void 0 === l ? void 0 : l.type
        })
      }
    },
    rejectWithError: !1
  })
}