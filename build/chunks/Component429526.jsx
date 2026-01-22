/** Chunk was on 47841 **/
/** chunk id: 429526, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => j
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk374084 = require("./374084.js"),
  Chunk808728 = require("./808728.js"),
  Chunk71393 = require("./71393.js"),
  Chunk488926 = require("./488926.js"),
  Chunk199940 = require("./199940.js"),
  Chunk132514 = require("./132514.js"),
  Chunk139497 = require("./139497.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk659233 = require("./659233.js");
let h = [],
  j = function(e) {
    let {
      guildId: t
    } = e, n = (0, s.bG)([d.A], () => d.A.getGuild(t)), j = (0, s.yK)([g.A], () => {
      var e, t;
      return null != (e = null == (t = g.A.getSettings().resourceChannels) ? true : t.map(e => e.channelId)) ? e : h
    }), O = (0, s.yK)([g.A], () => g.A.getDismissedSuggestedChannelIds(t)), y = (0, s.bG)([o.Ay], () => o.Ay.getSelectableChannels(t)), v = i.useMemo(() => (0, l.chain)(y).filter(e => e.channel.type === m.rbe.GUILD_TEXT && e.channel.id !== (null == n ? true : n.rulesChannelId) && !O.includes(e.channel.id) && !j.includes(e.channel.id) && u.MJ(m.xBc.VIEW_CHANNEL, e.channel) && !u.MJ(m.xBc.SEND_MESSAGES, e.channel)).take(5).value(), [y, O, null == n ? true : n.rulesChannelId, j]), A = i.useCallback(() => {
      let e = v.map(e => e.channel.id);
      (0, f.kO)(t, e)
    }, [t, v]);
    return v.length <= 0 || j.length >= c.CW ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: x.rS,
        children: [(0, r.jsx)(a.Text, {
          variant: "text-md/semibold",
          children: p.intl.string(p.t.WThgAR)
        }), (0, r.jsxs)("div", {
          className: x.vn,
          children: [(0, r.jsx)(a.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: p.intl.string(p.t.YtNI8C)
          }), (0, r.jsxs)(a.DUT, {
            className: x.iC,
            onClick: A,
            children: [(0, r.jsx)(a.A9s, {
              size: "md",
              color: "currentColor",
              className: x.An
            }), (0, r.jsx)(a.Text, {
              variant: "text-xs/semibold",
              color: "text-brand",
              children: p.intl.string(p.t.aLqZTl)
            })]
          })]
        }), (0, r.jsx)("div", {
          className: x.cF,
          children: v.map((e, t) => (0, r.jsx)(b.A, {
            channel: e.channel,
            end: t < v.length - 1
          }, e.channel.id))
        })]
      }), (0, r.jsx)("div", {
        className: x.DY
      })]
    })
  }