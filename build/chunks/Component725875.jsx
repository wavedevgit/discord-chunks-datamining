/** Chunk was on 9414 **/
/** chunk id: 725875, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./539854.js"), require("./388685.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk139387 = require("./139387.js"),
  Chunk933557 = require("./933557.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk491302 = require("./491302.jsx"),
  Chunk936726 = require("./936726.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk434593 = require("./434593.js");

function f(e) {
  let {
    webhooks: t,
    selectableWebhookChannels: n,
    lastCreatedWebhookId: f,
    editedWebhook: g,
    errors: h,
    canNavigate: x
  } = e, j = r.useMemo(() => Object.values(n).map(e => ({
    value: e.id,
    label: (0, o.F6)(e, c.default, s.Z, true)
  })), [n]), v = r.useMemo(() => {
    let e = {};
    for (let i of t)
      if (i.channel_id in e) e[i.channel_id].webhooks.push(i);
      else {
        let t = n[i.channel_id];
        null != t && (e[i.channel_id] = {
          channel: t,
          webhooks: [i]
        })
      } return Object.values(e).sort((e, t) => e.channel.name.localeCompare(t.channel.name))
  }, [n, t]), O = r.useCallback(e => {
    x() && (e === (null == g ? true : g.id) ? a.Z.stopEditingWebhook() : a.Z.startEditingWebhook(e))
  }, [x, g]);
  return (0, i.jsx)("div", {
    className: m.__invalid_list,
    children: v.map(e => {
      let {
        channel: t,
        webhooks: n
      } = e;
      return function(e) {
        let {
          channel: t,
          webhooks: n,
          channelOptions: r,
          lastCreatedWebhookId: a,
          editedWebhook: f,
          errors: g,
          toggleWebhookExpand: h
        } = e;
        return (0, i.jsxs)("div", {
          children: [(0, i.jsx)(l.Text, {
            variant: "text-md/medium",
            className: m.groupHeader,
            children: p.intl.format(p.t.TKDIZg, {
              channelHook: () => (0, i.jsx)("span", {
                className: m.channelName,
                children: (0, o.F6)(t, c.default, s.Z, true)
              }, t.id)
            })
          }), n.map(e => {
            var t;
            return e.type === b.ylB.CHANNEL_FOLLOWER ? (0, i.jsx)(d.Z, {
              webhook: e,
              editedWebhook: f,
              channelOptions: r,
              isExpanded: (null == f ? true : f.id) === e.id,
              onToggleExpand: () => h(e.id),
              errors: g
            }, e.id) : (0, i.jsx)(u.Z, {
              id: (t = e.id, "settings-integrations-webhook-".concat(t)),
              webhook: e,
              editedWebhook: f,
              channelOptions: r,
              isExpanded: (null == f ? true : f.id) === e.id,
              isNew: a === e.id,
              onToggleExpand: () => h(e.id),
              errors: g
            }, e.id)
          })]
        }, t.id)
      }({
        channel: t,
        webhooks: n,
        channelOptions: j,
        lastCreatedWebhookId: f,
        editedWebhook: g,
        errors: h,
        toggleWebhookExpand: O
      })
    })
  })
}