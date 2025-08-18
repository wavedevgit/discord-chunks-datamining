/** Chunk was on 91173 **/
/** chunk id: 333848, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./415506.js");
var Chunk990547 = require("./990547.js"),
  Chunk283693 = require("./283693.js"),
  Chunk570140 = require("./570140.js"),
  Chunk408987 = require("./408987.js"),
  Chunk9156 = require("./9156.js"),
  Chunk621600 = require("./621600.js"),
  Chunk573261 = require("./573261.js"),
  Chunk87051 = require("./87051.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js");
let m = {
  createChannel(e) {
    let {
      guildId: t,
      type: n,
      name: m,
      permissionOverwrites: f = [],
      bitrate: g,
      userLimit: _,
      parentId: h,
      skuId: b,
      branchId: E
    } = e;
    l.Z.dispatch({
      type: "CREATE_CHANNEL_MODAL_SUBMIT",
      guildId: t,
      channelType: n
    });
    let C = {
      type: n,
      name: m,
      permission_overwrites: f
    };
    if (null != g && g !== d.epw && (C.bitrate = g), null != _ && _ > 0 && (C.user_limit = _), null != h && (C.parent_id = h), n === d.d4z.GUILD_STORE) {
      if (null == b) throw Error("Unexpected missing SKU");
      C.sku_id = b, C.branch_id = E
    }
    return c.Z.post({
      url: d.ANM.GUILD_CHANNELS(t),
      body: C,
      oldFormErrors: true,
      trackedActionData: {
        event: r.NetworkActionNames.CHANNEL_CREATE,
        properties: e => {
          var t, n;
          return (0, i.iG)({
            is_private: f.length > 0,
            channel_id: null == e || null == (t = e.body) ? true : t.id,
            channel_type: null == e || null == (n = e.body) ? true : n.type
          })
        }
      },
      rejectWithError: false
    }).then(e => (a.ZP.isOptInEnabled(t) && u.Z.updateChannelOverrideSettings(t, e.body.id, {
      flags: p.ic.OPT_IN_ENABLED
    }, s.ZB.OptedIn), o.Z.checkGuildTemplateDirty(t), e), e => {
      throw l.Z.dispatch({
        type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
        errors: e.body
      }), e
    })
  },
  createRoleSubscriptionTemplateChannel: (e, t, n, l) => c.Z.post({
    url: d.ANM.GUILD_CHANNELS(e),
    body: {
      name: t,
      type: n,
      topic: l
    },
    oldFormErrors: true,
    trackedActionData: {
      event: r.NetworkActionNames.CHANNEL_CREATE,
      properties: e => {
        var t, n;
        return (0, i.iG)({
          is_private: true,
          channel_id: null == e || null == (t = e.body) ? true : t.id,
          channel_type: null == e || null == (n = e.body) ? true : n.type
        })
      }
    },
    rejectWithError: false
  })
}