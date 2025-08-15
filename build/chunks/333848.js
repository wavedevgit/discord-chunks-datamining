/** Chunk was on 72375 **/
/** chunk id: 333848, original params: e,n,i (module,exports,require) **/
require.d(exports, {
  Z: () => u
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
let u = {
  createChannel(e) {
    let {
      guildId: n,
      type: i,
      name: u,
      permissionOverwrites: h = [],
      bitrate: b,
      userLimit: E,
      parentId: C,
      skuId: v,
      branchId: g
    } = e;
    a.Z.dispatch({
      type: "CREATE_CHANNEL_MODAL_SUBMIT",
      guildId: n,
      channelType: i
    });
    let A = {
      type: i,
      name: u,
      permission_overwrites: h
    };
    if (null != b && b !== p.epw && (A.bitrate = b), null != E && E > 0 && (A.user_limit = E), null != C && (A.parent_id = C), i === p.d4z.GUILD_STORE) {
      if (null == v) throw Error("Unexpected missing SKU");
      A.sku_id = v, A.branch_id = g
    }
    return c.Z.post({
      url: p.ANM.GUILD_CHANNELS(n),
      body: A,
      oldFormErrors: true,
      trackedActionData: {
        event: r.NetworkActionNames.CHANNEL_CREATE,
        properties: e => {
          var n, i;
          return (0, t.iG)({
            is_private: h.length > 0,
            channel_id: null == e || null == (n = e.body) ? true : n.id,
            channel_type: null == e || null == (i = e.body) ? true : i.type
          })
        }
      },
      rejectWithError: false
    }).then(e => (_.ZP.isOptInEnabled(n) && d.Z.updateChannelOverrideSettings(n, e.body.id, {
      flags: s.ic.OPT_IN_ENABLED
    }, l.ZB.OptedIn), o.Z.checkGuildTemplateDirty(n), e), e => {
      throw a.Z.dispatch({
        type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
        errors: e.body
      }), e
    })
  },
  createRoleSubscriptionTemplateChannel: (e, n, i, a) => c.Z.post({
    url: p.ANM.GUILD_CHANNELS(e),
    body: {
      name: n,
      type: i,
      topic: a
    },
    oldFormErrors: true,
    trackedActionData: {
      event: r.NetworkActionNames.CHANNEL_CREATE,
      properties: e => {
        var n, i;
        return (0, t.iG)({
          is_private: true,
          channel_id: null == e || null == (n = e.body) ? true : n.id,
          channel_type: null == e || null == (i = e.body) ? true : i.type
        })
      }
    },
    rejectWithError: false
  })
}