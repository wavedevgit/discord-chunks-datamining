/** Chunk was on 21968 **/
/** chunk id: 267001, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./321073.js"), require("./896048.js"), require("./638769.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk282956 = require("./282956.js"),
  Chunk47167 = require("./47167.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk624507 = require("./624507.jsx"),
  Chunk784309 = require("./784309.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk587625 = require("./587625.js");

function b(e) {
  let {
    webhooks: t,
    selectableWebhookChannels: n,
    lastCreatedWebhookId: b,
    editedWebhook: f,
    errors: h,
    canNavigate: x
  } = e, j = r.useMemo(() => Object.values(n).map(e => ({
    id: e.id,
    value: e.id,
    label: (0, s.m1)(e, c.default, o.A, true)
  })), [n]), O = r.useMemo(() => {
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
  }, [n, t]), y = r.useCallback(e => {
    x() && (e === (null == f ? true : f.id) ? a.A.stopEditingWebhook() : a.A.startEditingWebhook(e))
  }, [x, f]);
  return (0, i.jsx)("div", {
    className: g.__invalid_list,
    children: O.map(e => {
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
          editedWebhook: b,
          errors: f,
          toggleWebhookExpand: h
        } = e;
        return (0, i.jsxs)("div", {
          children: [(0, i.jsx)(l.Text, {
            variant: "text-md/medium",
            className: g.x,
            children: m.intl.format(m.t.TKDIZg, {
              channelHook: () => (0, i.jsx)("span", {
                className: g.H,
                children: (0, s.m1)(t, c.default, o.A, true)
              }, t.id)
            })
          }), n.map(e => {
            var t;
            return e.type === p.NH1.CHANNEL_FOLLOWER ? (0, i.jsx)(d.A, {
              webhook: e,
              editedWebhook: b,
              channelOptions: r,
              isExpanded: (null == b ? true : b.id) === e.id,
              onToggleExpand: () => h(e.id),
              errors: f
            }, e.id) : (0, i.jsx)(u.A, {
              id: (t = e.id, "settings-integrations-webhook-".concat(t)),
              webhook: e,
              editedWebhook: b,
              channelOptions: r,
              isExpanded: (null == b ? true : b.id) === e.id,
              isNew: a === e.id,
              onToggleExpand: () => h(e.id),
              errors: f
            }, e.id)
          })]
        }, t.id)
      }({
        channel: t,
        webhooks: n,
        channelOptions: j,
        lastCreatedWebhookId: b,
        editedWebhook: f,
        errors: h,
        toggleWebhookExpand: y
      })
    })
  })
}