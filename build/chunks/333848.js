/** Chunk was on web.js **/
/** chunk id: 333848, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
      type: n,
      name: p,
      permissionOverwrites: _ = [],
      bitrate: m,
      userLimit: h,
      parentId: g,
      skuId: E,
      branchId: b
    } = e;
    a.Z.dispatch({
      type: "CREATE_CHANNEL_MODAL_SUBMIT",
      guildId: t,
      channelType: n
    });
    let y = {
      type: n,
      name: p,
      permission_overwrites: _
    };
    if (null != m && m !== d.epw && (y.bitrate = m), null != h && h > 0 && (y.user_limit = h), null != g && (y.parent_id = g), n === d.d4z.GUILD_STORE) {
      if (null == E) throw Error("Unexpected missing SKU");
      y.sku_id = E, y.branch_id = b
    }
    return c.Z.post({
      url: d.ANM.GUILD_CHANNELS(t),
      body: y,
      oldFormErrors: true,
      trackedActionData: {
        event: r.NetworkActionNames.CHANNEL_CREATE,
        properties: e => {
          var t, n;
          return (0, i.iG)({
            is_private: _.length > 0,
            channel_id: null == e || null == (t = e.body) ? true : t.id,
            channel_type: null == e || null == (n = e.body) ? true : n.type
          })
        }
      },
      rejectWithError: false
    }).then(e => (s.ZP.isOptInEnabled(t) && u.Z.updateChannelOverrideSettings(t, e.body.id, {
      flags: f.ic.OPT_IN_ENABLED
    }, l.ZB.OptedIn), o.Z.checkGuildTemplateDirty(t), e), e => {
      throw a.Z.dispatch({
        type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
        errors: e.body
      }), e
    })
  },
  createRoleSubscriptionTemplateChannel: (e, t, n, a) => c.Z.post({
    url: d.ANM.GUILD_CHANNELS(e),
    body: {
      name: t,
      type: n,
      topic: a
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