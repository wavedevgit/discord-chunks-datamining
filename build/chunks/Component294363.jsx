/** Chunk was on 39048 **/
/** chunk id: 294363, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => C,
  b: () => T
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk478437 = require("./478437.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk58149 = require("./58149.js"),
  Chunk47167 = require("./47167.js"),
  Chunk554113 = require("./554113.js"),
  Chunk974103 = require("./974103.js"),
  Chunk978956 = require("./978956.js"),
  Chunk615550 = require("./615550.js"),
  Chunk419707 = require("./419707.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk808728 = require("./808728.js"),
  Chunk576705 = require("./576705.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk997509 = require("./997509.js"),
  Chunk600955 = require("./600955.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk690450 = require("./690450.js");

function S(e) {
  let {
    guild: t,
    isExpanded: n,
    selectedChannelId: l,
    className: a
  } = e, h = (0, m.w)(t), x = (0, p.A)(t), [j, _] = i.useState(x), O = (0, o.bG)([b.A], () => b.A.getChannel(l), [l]), v = (0, u.Ay)(O), S = async () => {
    _(!j);
    try {
      var e;
      await (0, g.jB)(t, !x);
      let n = null != (e = null != l ? l : t.safetyAlertsChannelId) ? e : null;
      if (null != n) {
        let e = {
          raid_alert_type: f.TF.JOIN_RAID,
          enabled: !x,
          raid_alert_channel_id: n,
          guild_id: t.id,
          channel_id: n
        };
        (0, d.zV)(A.HAw.GUILD_RAID_ALERTS_SETUP, e)
      }
    } catch (e) {
      (0, c.showToast)((0, c.createToast)(E.intl.string(E.t["46Rs3v"]), c.ToastType.FAILURE)), _(!x)
    }
  };
  return (0, r.jsxs)("div", {
    className: s()(N.D5, a),
    children: [(0, r.jsxs)("div", {
      className: N.Ly,
      children: [(0, r.jsx)(c.Heading, {
        variant: "text-md/semibold",
        color: "text-strong",
        children: E.intl.string(E.t.Qp98s9)
      }), (0, r.jsx)(c.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: E.intl.string(E.t.Mg843t)
      }), n || null == l ? null : (0, r.jsxs)(c.Text, {
        color: "interactive-text-default",
        variant: "text-xs/medium",
        className: N.Lp,
        children: [(0, r.jsx)(c.N$i, {
          size: "xxs",
          color: "currentColor"
        }), " ", v]
      })]
    }), (0, r.jsx)(y.A, {
      checked: j,
      onChange: S,
      disabled: !h || null == l
    })]
  })
}

function I(e) {
  var t;
  let {
    guild: n,
    selectedChannelId: i,
    setSelectedChannelId: l,
    className: g
  } = e, m = null != (t = n.safetyAlertsChannelId) ? t : null, h = (0, o.yK)([x.Ay, O.default, _.A, j.A], () => {
    let e = x.Ay.getChannels(n.id)[x.I6].filter(e => {
      let {
        channel: t
      } = e;
      return t.type === a.r.GUILD_TEXT && j.A.can(A.xBc.SEND_MESSAGES, t)
    }).map(e => {
      let {
        channel: t
      } = e;
      return {
        id: t.id,
        value: t.id,
        label: (0, u.m1)(t, O.default, _.A, true)
      }
    });
    return null != m ? e : [...e]
  }, [n.id, m]), b = async e => {
    l(e);
    try {
      if (e !== m && (await v.A.saveGuild(n.id, {
          safetyAlertsChannelId: e
        }, {
          throwErr: true
        }), v.A.updateGuild({
          safetyAlertsChannelId: e
        })), null != e) {
        let t = {
          raid_alert_type: f.TF.JOIN_RAID,
          enabled: (0, p.A)(n),
          raid_alert_channel_id: e,
          guild_id: n.id,
          channel_id: e
        };
        (0, d.zV)(A.HAw.GUILD_RAID_ALERTS_SETUP, t)
      }
    } catch (e) {
      (0, c.showToast)((0, c.createToast)(E.intl.string(E.t["46Rs3v"]), c.ToastType.FAILURE)), l(m)
    }
  };
  return (0, r.jsx)("div", {
    className: s()(N.ho, g),
    children: (0, r.jsx)("div", {
      className: N.U,
      children: (0, r.jsx)(c.ZiE, {
        selectionMode: "single",
        label: E.intl.string(E.t.sMkYE8),
        helperText: E.intl.string(E.t["1QxN9N"]),
        options: h,
        onSelectionChange: b,
        value: i,
        maxOptionsVisible: 5
      })
    })
  })
}

function C(e) {
  var t, n;
  let {
    guild: l
  } = e, [s, a] = i.useState(false), o = null != (t = l.safetyAlertsChannelId) ? t : null, [c, d] = i.useState(null != o ? o : null != (n = null == l ? true : l.publicUpdatesChannelId) ? n : null);
  return (0, r.jsx)(h.A, {
    renderHeader: (0, r.jsx)(S, {
      isExpanded: s,
      guild: l,
      selectedChannelId: c
    }),
    isExpanded: s,
    onExpand: () => a(!s),
    children: (0, r.jsx)(I, {
      guild: l,
      selectedChannelId: c,
      setSelectedChannelId: d
    })
  })
}

function T(e) {
  var t, n;
  let {
    guild: l
  } = e, s = null != (t = l.safetyAlertsChannelId) ? t : null, [a, o] = i.useState(null != s ? s : null != (n = null == l ? true : l.publicUpdatesChannelId) ? n : null);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(S, {
      isExpanded: true,
      guild: l,
      selectedChannelId: a,
      className: N.pN
    }), (0, r.jsx)(I, {
      guild: l,
      selectedChannelId: a,
      setSelectedChannelId: o,
      className: N.pN
    })]
  })
}