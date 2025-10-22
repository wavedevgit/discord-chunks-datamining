/** Chunk was on 29679 **/
/** chunk id: 181339, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => T,
  w: () => P
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk106351 = require("./106351.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk933557 = require("./933557.js"),
  Chunk369994 = require("./369994.js"),
  Chunk162157 = require("./162157.js"),
  Chunk290719 = require("./290719.js"),
  Chunk177862 = require("./177862.js"),
  Chunk11265 = require("./11265.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk434404 = require("./434404.js"),
  Chunk449226 = require("./449226.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk298392 = require("./298392.js");

function I(e) {
  let {
    guild: t,
    isExpanded: n,
    selectedChannelId: l,
    className: s
  } = e, h = (0, m.BT)(t), x = (0, p.Z)(t), [j, v] = i.useState(x), _ = (0, o.e7)([b.Z], () => b.Z.getChannel(l), [l]), C = (0, u.ZP)(_), I = async () => {
    v(!j);
    try {
      var e;
      await (0, g.f6)(t, !x);
      let n = null != (e = null != l ? l : t.safetyAlertsChannelId) ? e : null;
      if (null != n) {
        let e = {
          raid_alert_type: f.wR.JOIN_RAID,
          enabled: !x,
          raid_alert_channel_id: n,
          guild_id: t.id,
          channel_id: n
        };
        (0, d.yw)(y.rMx.GUILD_RAID_ALERTS_SETUP, e)
      }
    } catch (e) {
      (0, c.showToast)((0, c.createToast)(E.intl.string(E.t["46Rs3v"]), c.ToastType.FAILURE)), v(!x)
    }
  };
  return (0, r.jsxs)("div", {
    className: a()(N.itemWrapper, s),
    children: [(0, r.jsxs)("div", {
      className: N.itemContent,
      children: [(0, r.jsx)(c.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: E.intl.string(E.t.Qp98s9)
      }), (0, r.jsx)(c.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: E.intl.string(E.t.Mg843t)
      }), n || null == l ? null : (0, r.jsxs)(c.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        className: N.valuePill,
        children: [(0, r.jsx)(c.VL1, {
          size: "xxs",
          color: "currentColor"
        }), " ", C]
      })]
    }), (0, r.jsx)(O.Z, {
      checked: j,
      onChange: I,
      disabled: !h || null == l
    })]
  })
}

function S(e) {
  var t;
  let {
    guild: n,
    selectedChannelId: i,
    setSelectedChannelId: l,
    className: g
  } = e, m = null != (t = n.safetyAlertsChannelId) ? t : null, h = (0, o.Wu)([x.ZP, _.default, v.Z, j.Z], () => {
    let e = x.ZP.getChannels(n.id)[x.sH].filter(e => {
      let {
        channel: t
      } = e;
      return t.type === s.d.GUILD_TEXT && j.Z.can(y.Plq.SEND_MESSAGES, t)
    }).map(e => {
      let {
        channel: t
      } = e;
      return {
        value: t.id,
        label: (0, u.F6)(t, _.default, v.Z, true)
      }
    });
    return null != m ? e : [...e]
  }, [n.id, m]), b = async e => {
    l(e);
    try {
      if (e !== m && (await C.Z.saveGuild(n.id, {
          safetyAlertsChannelId: e
        }, {
          throwErr: true
        }), C.Z.updateGuild({
          safetyAlertsChannelId: e
        })), null != e) {
        let t = {
          raid_alert_type: f.wR.JOIN_RAID,
          enabled: (0, p.Z)(n),
          raid_alert_channel_id: e,
          guild_id: n.id,
          channel_id: e
        };
        (0, d.yw)(y.rMx.GUILD_RAID_ALERTS_SETUP, t)
      }
    } catch (e) {
      (0, c.showToast)((0, c.createToast)(E.intl.string(E.t["46Rs3v"]), c.ToastType.FAILURE)), l(m)
    }
  };
  return (0, r.jsx)("div", {
    className: a()(N.itemBodyContainer, g),
    children: (0, r.jsx)("div", {
      className: N.itemBodyInner,
      children: (0, r.jsx)(c.VcW, {
        wrapperClassName: N.bringToFront,
        label: E.intl.string(E.t.sMkYE8),
        helperText: E.intl.string(E.t["1QxN9N"]),
        options: h,
        onChange: b,
        value: i,
        maxVisibleItems: 5
      })
    })
  })
}

function T(e) {
  var t, n;
  let {
    guild: l
  } = e, [a, s] = i.useState(false), o = null != (t = l.safetyAlertsChannelId) ? t : null, [c, d] = i.useState(null != o ? o : null != (n = null == l ? true : l.publicUpdatesChannelId) ? n : null);
  return (0, r.jsx)(h.Z, {
    renderHeader: (0, r.jsx)(I, {
      isExpanded: a,
      guild: l,
      selectedChannelId: c
    }),
    isExpanded: a,
    onExpand: () => s(!a),
    children: (0, r.jsx)(S, {
      guild: l,
      selectedChannelId: c,
      setSelectedChannelId: d
    })
  })
}

function P(e) {
  var t, n;
  let {
    guild: l
  } = e, a = null != (t = l.safetyAlertsChannelId) ? t : null, [s, o] = i.useState(null != a ? a : null != (n = null == l ? true : l.publicUpdatesChannelId) ? n : null);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(I, {
      isExpanded: true,
      guild: l,
      selectedChannelId: s,
      className: N.noPadding
    }), (0, r.jsx)(S, {
      guild: l,
      selectedChannelId: s,
      setSelectedChannelId: o,
      className: N.noPadding
    })]
  })
}