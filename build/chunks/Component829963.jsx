/** Chunk was on 64935 **/
/** chunk id: 829963, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
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

function g(e) {
  var t, n, g, _;
  let {
    application: h,
    message: b,
    header: A,
    presenceActivity: y,
    hideParty: v,
    partyStatusElement: x,
    currentUserPresenceActivity: O,
    onClickContent: E,
    onView: j,
    guildId: C
  } = e, I = (0, d.w)(O, y), S = (0, c.Gq)(y, b.author, "Invite Embed"), T = i.useMemo(() => {
    let e = [];
    if (!I) {
      var t;
      e.push({
        label: null != (t = S.label) ? t : m.intl.string(m.t.VJlc0S),
        trackingArea: s.kY.SYNC,
        onClick: () => {
          S.onClick()
        },
        disabled: S.disabled,
        disabledReason: S.disabled ? S.tooltip : true
      })
    }
    return e
  }, [I, S]), N = null != y && null != y.details && null != y.state ? m.intl.formatToPlainString(m.t.JCvHtx, {
    track: y.details,
    artist: y.state
  }) : h.name, P = null != (t = null == y || null == (g = y.timestamps) ? true : g.start) ? t : null == y ? true : y.created_at, w = i.useMemo(() => {
    var e;
    return null != P ? (0, r.jsxs)("div", {
      className: f.Ym,
      children: [(0, r.jsx)(l.T7G, {
        size: "xxs",
        color: "currentColor"
      }), (0, r.jsx)(o.z, {
        entry: {
          start: P,
          end: null == y || null == (e = y.timestamps) ? true : e.end
        },
        textColor: "currentColor",
        textTabularNumbers: false,
        textFontCode: false
      })]
    }) : null
  }, [P, null == y || null == (_ = y.timestamps) ? true : _.end]), R = i.useMemo(() => (0, r.jsxs)("div", {
    className: f.pq,
    children: [(0, r.jsx)(l.Text, {
      variant: "text-xs/normal",
      className: f.dS,
      color: "none",
      lineClamp: 1,
      children: w
    }), v ? null : x]
  }), [w, v, x]);
  return (0, r.jsx)(a.h, {
    header: A,
    title: N,
    iconSrc: null != (n = (0, u.A)(y, h.id)) ? n : true,
    info: R,
    actions: T,
    onClickContent: E,
    trackingConfig: {
      id: h.id,
      linkType: p.J.RICH_PRESENCE_INVITE,
      onView: j,
      referrerId: b.author.id,
      guildId: C,
      channelId: b.channel_id,
      messageId: b.id
    }
  })
}