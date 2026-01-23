/** Chunk was on web.js **/
/** chunk id: 829963, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk572211 = require("./572211.jsx"),
  Chunk354287 = require("./354287.js"),
  Chunk693879 = require("./693879.jsx"),
  Chunk353411 = require("./353411.js"),
  Chunk882171 = require("./882171.js"),
  Chunk206589 = require("./206589.js"),
  Chunk768349 = require("./768349.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk609653 = require("./609653.js");

function h(e) {
  var t, n, h, m;
  let {
    application: g,
    message: E,
    header: y,
    presenceActivity: b,
    hideParty: O,
    partyStatusElement: v,
    currentUserPresenceActivity: A,
    onClickContent: I,
    onView: S,
    guildId: T
  } = e, C = (0, d.w)(A, b), N = (0, c.Gq)(b, E.author, "Invite Embed"), R = i.useMemo(() => {
    let e = [];
    if (!C) {
      var t;
      e.push({
        label: null != (t = N.label) ? t : p.intl.string(p.t.VJlc0S),
        trackingArea: o.kY.SYNC,
        onClick: () => {
          N.onClick()
        },
        disabled: N.disabled,
        disabledReason: N.disabled ? N.tooltip : true
      })
    }
    return e
  }, [C, N]), w = null != b && null != b.details && null != b.state ? p.intl.formatToPlainString(p.t.JCvHtx, {
    track: b.details,
    artist: b.state
  }) : g.name, P = null != (t = null == b || null == (h = b.timestamps) ? true : h.start) ? t : null == b ? true : b.created_at, D = i.useMemo(() => {
    var e;
    return null != P ? (0, r.jsxs)("div", {
      className: _.Ym,
      children: [(0, r.jsx)(a.T7G, {
        size: "xxs",
        color: "currentColor"
      }), (0, r.jsx)(l.z, {
        entry: {
          start: P,
          end: null == b || null == (e = b.timestamps) ? true : e.end
        },
        textColor: "currentColor",
        textTabularNumbers: false,
        textFontCode: false
      })]
    }) : null
  }, [P, null == b || null == (m = b.timestamps) ? true : m.end]), x = i.useMemo(() => (0, r.jsxs)("div", {
    className: _.pq,
    children: [(0, r.jsx)(a.Text, {
      variant: "text-xs/normal",
      className: _.dS,
      color: "none",
      lineClamp: 1,
      children: D
    }), O ? null : v]
  }), [D, O, v]);
  return (0, r.jsx)(s.h, {
    header: y,
    title: w,
    iconSrc: null != (n = (0, u.A)(b, g.id)) ? n : true,
    info: x,
    actions: R,
    onClickContent: I,
    trackingConfig: {
      id: g.id,
      linkType: f.J.RICH_PRESENCE_INVITE,
      onView: S,
      referrerId: E.author.id,
      guildId: T,
      channelId: E.channel_id,
      messageId: E.id
    }
  })
}