/** Chunk was on web.js **/
/** chunk id: 755584, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./65821.js");
var Chunk110259 = require("./110259.js"),
  Chunk933681 = require("./933681.js"),
  Chunk73153 = require("./73153.js"),
  Chunk568185 = require("./568185.js"),
  Chunk543465 = require("./543465.js"),
  Chunk477427 = require("./477427.js"),
  Chunk499785 = require("./499785.js"),
  Chunk832712 = require("./832712.js"),
  Chunk652215 = require("./652215.js"),
  Chunk355097 = require("./355097.js");
let p = {
  createChannel(e) {
    let {
      guildId: t,
      type: n,
      name: p,
      permissionOverwrites: _ = [],
      bitrate: h,
      userLimit: m,
      parentId: g,
      skuId: E,
      branchId: y
    } = e;
    a.h.dispatch({
      type: "CREATE_CHANNEL_MODAL_SUBMIT",
      guildId: t,
      channelType: n
    });
    let b = {
      type: n,
      name: p,
      permission_overwrites: _
    };
    if (null != h && h !== d.gp3 && (b.bitrate = h), null != m && m > 0 && (b.user_limit = m), null != g && (b.parent_id = g), n === d.rbe.GUILD_STORE) {
      if (null == E) throw Error("Unexpected missing SKU");
      b.sku_id = E, b.branch_id = y
    }
    return c.A.post({
      url: d.Rsh.GUILD_CHANNELS(t),
      body: b,
      oldFormErrors: true,
      trackedActionData: {
        event: r.NetworkActionNames.CHANNEL_CREATE,
        properties: e => {
          var t, n;
          return (0, i.e0)({
            is_private: _.length > 0,
            channel_id: null == e || null == (t = e.body) ? true : t.id,
            channel_type: null == e || null == (n = e.body) ? true : n.type
          })
        }
      },
      rejectWithError: false
    }).then(e => (o.Ay.isOptInEnabled(t) && u.A.updateChannelOverrideSettings(t, e.body.id, {
      flags: f.vv.OPT_IN_ENABLED
    }, l.fd.OptedIn), s.A.checkGuildTemplateDirty(t), e), e => {
      throw a.h.dispatch({
        type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
        errors: e.body
      }), e
    })
  },
  createRoleSubscriptionTemplateChannel: (e, t, n, a) => c.A.post({
    url: d.Rsh.GUILD_CHANNELS(e),
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
        return (0, i.e0)({
          is_private: true,
          channel_id: null == e || null == (t = e.body) ? true : t.id,
          channel_type: null == e || null == (n = e.body) ? true : n.type
        })
      }
    },
    rejectWithError: false
  })
}