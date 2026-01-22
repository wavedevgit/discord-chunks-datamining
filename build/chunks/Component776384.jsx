/** Chunk was on web.js **/
/** chunk id: 776384, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => O
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk110259 = require("./110259.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk139286 = require("./139286.js"),
  Chunk713654 = require("./713654.js"),
  Chunk252263 = require("./252263.js"),
  Chunk8455 = require("./8455.js"),
  Chunk67259 = require("./67259.js"),
  Chunk734057 = require("./734057.js"),
  Chunk954571 = require("./954571.js"),
  Chunk355622 = require("./355622.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk149650 = require("./149650.js");

function b(e) {
  let {
    channel: t,
    type: n
  } = e, r = (0, s.bG)([p.A], () => {
    var e;
    let n = p.A.getChannel(t.parent_id);
    return null != (e = null == n ? true : n.isForumLikeChannel()) && e
  }), i = [h.oU.NORMAL, h.oU.SIDEBAR].includes(n);
  return {
    shouldShow: t.isThread() && !r && i
  }
}

function y(e) {
  let {
    thread: t,
    pendingScheduledMessage: n
  } = e, h = (0, d.Vp)({
    location: "ThreadsAlsoSendToChannelArea"
  }), [b, y] = (0, s.yK)([p.A, f.A], () => [t.isThread() ? p.A.getChannel(t.parent_id) : null, f.A.getAlsoSendToChannel(t.id)]), O = i.useCallback(e => {
    _.default.track(m.HAw.MESSAGE_ALSO_SEND_TO_CHANNEL_TOGGLED, {
      value: e,
      guild_id: t.guild_id,
      channel_id: t.id
    }), (0, u.B)({
      channelId: t.id,
      enabled: e
    })
  }, [t]);
  (0, l.A)({
    name: a.ImpressionNames.MESSAGE_ALSO_SEND_TO_CHANNEL,
    type: a.ImpressionTypes.VIEW
  }, {
    disableTrack: null == b || !h.enabled
  }, [b, h.enabled]);
  let A = null != n;
  if (!h.enabled || null == b) return null;
  let v = (0, c.gU)(b),
    S = g.intl.format(g.t.UqL10G, {
      callToActionHook: (e, t) => (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        lineClamp: 1,
        className: E.Pf,
        children: g.intl.string(g.t.Pi3JW7)
      }, t),
      channelName: b.name,
      channelNameHook: (e, t) => (0, r.jsxs)(o.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        lineClamp: 1,
        className: E.Pf,
        children: [null == v ? null : (0, r.jsx)(v, {
          color: "currentColor",
          className: E.Kk
        }, t), e]
      }, t)
    });
  return (0, r.jsx)("div", {
    className: E.kL,
    children: (0, r.jsx)(o.Checkbox, {
      checked: y,
      disabled: A,
      onChange: O,
      label: S,
      labelType: "secondary"
    })
  })
}

function O(e) {
  let {
    channel: t,
    type: n,
    pendingScheduledMessage: i
  } = e, {
    shouldShow: a
  } = b({
    channel: t,
    type: n
  });
  return a ? (0, r.jsx)(y, {
    thread: t,
    pendingScheduledMessage: i
  }) : null
}