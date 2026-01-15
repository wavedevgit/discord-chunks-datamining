/** Chunk was on web.js **/
/** chunk id: 175592, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk213609 = require("./213609.js"),
  Chunk471445 = require("./471445.js"),
  Chunk920256 = require("./920256.js"),
  Chunk284928 = require("./284928.js"),
  Chunk315355 = require("./315355.js"),
  Chunk592125 = require("./592125.js"),
  Chunk626135 = require("./626135.js"),
  Chunk541716 = require("./541716.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk224438 = require("./224438.js");

function b(e) {
  let {
    channel: t,
    type: n
  } = e, r = (0, o.e7)([p.Z], () => {
    var e;
    let n = p.Z.getChannel(t.parent_id);
    return null != (e = null == n ? true : n.isForumLikeChannel()) && e
  }), i = [h.Ie.NORMAL, h.Ie.SIDEBAR].includes(n);
  return {
    shouldShow: t.isThread() && !r && i
  }
}

function y(e) {
  let {
    thread: t,
    pendingScheduledMessage: n
  } = e, h = (0, d.KN)({
    location: "ThreadsAlsoSendToChannelArea"
  }), [b, y] = (0, o.Wu)([p.Z, f.Z], () => [t.isThread() ? p.Z.getChannel(t.parent_id) : null, f.Z.getAlsoSendToChannel(t.id)]), O = i.useCallback(e => {
    _.default.track(m.rMx.MESSAGE_ALSO_SEND_TO_CHANNEL_TOGGLED, {
      value: e,
      guild_id: t.guild_id,
      channel_id: t.id
    }), (0, u.E)({
      channelId: t.id,
      enabled: e
    })
  }, [t]);
  (0, l.Z)({
    name: a.ImpressionNames.MESSAGE_ALSO_SEND_TO_CHANNEL,
    type: a.ImpressionTypes.VIEW
  }, {
    disableTrack: null == b || !h.enabled
  }, [b, h.enabled]);
  let v = null != n;
  if (!h.enabled || null == b) return null;
  let S = (0, c.KS)(b),
    I = g.intl.format(g.t.UqL10G, {
      callToActionHook: (e, t) => (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        lineClamp: 1,
        className: E.label,
        children: g.intl.string(g.t.Pi3JW7)
      }, t),
      channelName: b.name,
      channelNameHook: (e, t) => (0, r.jsxs)(s.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        lineClamp: 1,
        className: E.label,
        children: [null == S ? null : (0, r.jsx)(S, {
          color: "currentColor",
          className: E.icon
        }, t), e]
      }, t)
    });
  return (0, r.jsx)("div", {
    className: E.container,
    children: (0, r.jsx)(s.Checkbox, {
      checked: y,
      disabled: v,
      onChange: O,
      label: I,
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