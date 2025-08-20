/** Chunk was on 88360 **/
/** chunk id: 333848, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => p
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
let p = {
  createChannel(e) {
    let {
      guildId: t,
      type: a,
      name: p,
      permissionOverwrites: _ = [],
      bitrate: g,
      userLimit: b,
      parentId: f,
      skuId: m,
      branchId: E
    } = e;
    n.Z.dispatch({
      type: "CREATE_CHANNEL_MODAL_SUBMIT",
      guildId: t,
      channelType: a
    });
    let y = {
      type: a,
      name: p,
      permission_overwrites: _
    };
    if (null != g && g !== u.epw && (y.bitrate = g), null != b && b > 0 && (y.user_limit = b), null != f && (y.parent_id = f), a === u.d4z.GUILD_STORE) {
      if (null == m) throw Error("Unexpected missing SKU");
      y.sku_id = m, y.branch_id = E
    }
    return c.Z.post({
      url: u.ANM.GUILD_CHANNELS(t),
      body: y,
      oldFormErrors: true,
      trackedActionData: {
        event: r.NetworkActionNames.CHANNEL_CREATE,
        properties: e => {
          var t, a;
          return (0, l.iG)({
            is_private: _.length > 0,
            channel_id: null == e || null == (t = e.body) ? true : t.id,
            channel_type: null == e || null == (a = e.body) ? true : a.type
          })
        }
      },
      rejectWithError: false
    }).then(e => (i.ZP.isOptInEnabled(t) && d.Z.updateChannelOverrideSettings(t, e.body.id, {
      flags: h.ic.OPT_IN_ENABLED
    }, s.ZB.OptedIn), o.Z.checkGuildTemplateDirty(t), e), e => {
      throw n.Z.dispatch({
        type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
        errors: e.body
      }), e
    })
  },
  createRoleSubscriptionTemplateChannel: (e, t, a, n) => c.Z.post({
    url: u.ANM.GUILD_CHANNELS(e),
    body: {
      name: t,
      type: a,
      topic: n
    },
    oldFormErrors: true,
    trackedActionData: {
      event: r.NetworkActionNames.CHANNEL_CREATE,
      properties: e => {
        var t, a;
        return (0, l.iG)({
          is_private: true,
          channel_id: null == e || null == (t = e.body) ? true : t.id,
          channel_type: null == e || null == (a = e.body) ? true : a.type
        })
      }
    },
    rejectWithError: false
  })
}