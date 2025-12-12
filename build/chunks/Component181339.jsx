/** Chunk was on 384 **/
/** chunk id: 181339, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => P,
  w: () => w
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk106351 = require("./106351.js"),
  Chunk442837 = require("./442837.js"),
  Chunk668339 = require("./668339.jsx"),
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
  Chunk824804 = require("./824804.js");

function S(e) {
  let {
    guild: t,
    isExpanded: n,
    selectedChannelId: l,
    className: a
  } = e, c = (0, p.BT)(t), x = (0, f.Z)(t), [j, _] = i.useState(x), v = (0, o.e7)([b.Z], () => b.Z.getChannel(l), [l]), O = (0, g.ZP)(v), C = async () => {
    _(!j);
    try {
      var e;
      await (0, m.f6)(t, !x);
      let n = null != (e = null != l ? l : t.safetyAlertsChannelId) ? e : null;
      if (null != n) {
        let e = {
          raid_alert_type: h.wR.JOIN_RAID,
          enabled: !x,
          raid_alert_channel_id: n,
          guild_id: t.id,
          channel_id: n
        };
        (0, d.yw)(N.rMx.GUILD_RAID_ALERTS_SETUP, e)
      }
    } catch (e) {
      (0, u.showToast)((0, u.createToast)(E.intl.string(E.t["46Rs3v"]), u.ToastType.FAILURE)), _(!x)
    }
  };
  return (0, r.jsxs)("div", {
    className: s()(I.itemWrapper, a),
    children: [(0, r.jsxs)("div", {
      className: I.itemContent,
      children: [(0, r.jsx)(u.Heading, {
        variant: "text-md/semibold",
        color: "text-strong",
        children: E.intl.string(E.t.Qp98s9)
      }), (0, r.jsx)(u.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: E.intl.string(E.t.Mg843t)
      }), n || null == l ? null : (0, r.jsxs)(u.Text, {
        color: "interactive-text-default",
        variant: "text-xs/medium",
        className: I.valuePill,
        children: [(0, r.jsx)(u.VL1, {
          size: "xxs",
          color: "currentColor"
        }), " ", O]
      })]
    }), (0, r.jsx)(y.Z, {
      checked: j,
      onChange: C,
      disabled: !c || null == l
    })]
  })
}

function T(e) {
  var t;
  let {
    guild: n,
    selectedChannelId: i,
    setSelectedChannelId: l,
    className: m
  } = e, p = null != (t = n.safetyAlertsChannelId) ? t : null, x = (0, o.Wu)([j.ZP, O.default, v.Z, _.Z], () => {
    let e = j.ZP.getChannels(n.id)[j.sH].filter(e => {
      let {
        channel: t
      } = e;
      return t.type === a.d.GUILD_TEXT && _.Z.can(N.Plq.SEND_MESSAGES, t)
    }).map(e => {
      let {
        channel: t
      } = e;
      return {
        value: t.id,
        label: (0, g.F6)(t, O.default, v.Z, true)
      }
    });
    return null != p ? e : [...e]
  }, [n.id, p]), b = async e => {
    l(e);
    try {
      if (e !== p && (await C.Z.saveGuild(n.id, {
          safetyAlertsChannelId: e
        }, {
          throwErr: true
        }), C.Z.updateGuild({
          safetyAlertsChannelId: e
        })), null != e) {
        let t = {
          raid_alert_type: h.wR.JOIN_RAID,
          enabled: (0, f.Z)(n),
          raid_alert_channel_id: e,
          guild_id: n.id,
          channel_id: e
        };
        (0, d.yw)(N.rMx.GUILD_RAID_ALERTS_SETUP, t)
      }
    } catch (e) {
      (0, u.showToast)((0, u.createToast)(E.intl.string(E.t["46Rs3v"]), u.ToastType.FAILURE)), l(p)
    }
  };
  return (0, r.jsx)("div", {
    className: s()(I.itemBodyContainer, m),
    children: (0, r.jsx)("div", {
      className: I.itemBodyInner,
      children: (0, r.jsx)(c.d, {
        wrapperClassName: I.bringToFront,
        label: E.intl.string(E.t.sMkYE8),
        helperText: E.intl.string(E.t["1QxN9N"]),
        options: x,
        onChange: b,
        value: i,
        maxVisibleItems: 5
      })
    })
  })
}

function P(e) {
  var t, n;
  let {
    guild: l
  } = e, [s, a] = i.useState(false), o = null != (t = l.safetyAlertsChannelId) ? t : null, [c, u] = i.useState(null != o ? o : null != (n = null == l ? true : l.publicUpdatesChannelId) ? n : null);
  return (0, r.jsx)(x.Z, {
    renderHeader: (0, r.jsx)(S, {
      isExpanded: s,
      guild: l,
      selectedChannelId: c
    }),
    isExpanded: s,
    onExpand: () => a(!s),
    children: (0, r.jsx)(T, {
      guild: l,
      selectedChannelId: c,
      setSelectedChannelId: u
    })
  })
}

function w(e) {
  var t, n;
  let {
    guild: l
  } = e, s = null != (t = l.safetyAlertsChannelId) ? t : null, [a, o] = i.useState(null != s ? s : null != (n = null == l ? true : l.publicUpdatesChannelId) ? n : null);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(S, {
      isExpanded: true,
      guild: l,
      selectedChannelId: a,
      className: I.noPadding
    }), (0, r.jsx)(T, {
      guild: l,
      selectedChannelId: a,
      setSelectedChannelId: o,
      className: I.noPadding
    })]
  })
}