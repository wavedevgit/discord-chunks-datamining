/** Chunk was on 9536 **/
/** chunk id: 181339, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => P,
  w: () => w
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk146473 = require("./146473.js");

function _(e) {
  let {
    guild: t,
    isExpanded: n,
    selectedChannelId: l,
    className: s
  } = e, c = (0, f.BT)(t), h = (0, b.Z)(t), [j, v] = i.useState(h), O = (0, o.e7)([x.Z], () => x.Z.getChannel(l), [l]), y = (0, g.ZP)(O), C = async () => {
    v(!j);
    try {
      var e;
      await (0, m.f6)(t, !h);
      let n = null != (e = null != l ? l : t.safetyAlertsChannelId) ? e : null;
      if (null != n) {
        let e = {
          raid_alert_type: p.wR.JOIN_RAID,
          enabled: !h,
          raid_alert_channel_id: n,
          guild_id: t.id,
          channel_id: n
        };
        (0, u.yw)(E.rMx.GUILD_RAID_ALERTS_SETUP, e)
      }
    } catch (e) {
      (0, d.showToast)((0, d.createToast)(I.intl.string(I.t["46Rs3v"]), d.ToastType.FAILURE)), v(!h)
    }
  };
  return (0, r.jsxs)("div", {
    className: a()(S.itemWrapper, s),
    children: [(0, r.jsxs)("div", {
      className: S.itemContent,
      children: [(0, r.jsx)(d.Heading, {
        variant: "text-md/semibold",
        color: "text-strong",
        children: I.intl.string(I.t.Qp98s9)
      }), (0, r.jsx)(d.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: I.intl.string(I.t.Mg843t)
      }), n || null == l ? null : (0, r.jsxs)(d.Text, {
        color: "interactive-text-default",
        variant: "text-xs/medium",
        className: S.valuePill,
        children: [(0, r.jsx)(d.VL1, {
          size: "xxs",
          color: "currentColor"
        }), " ", y]
      })]
    }), (0, r.jsx)(N.Z, {
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
  } = e, f = null != (t = n.safetyAlertsChannelId) ? t : null, h = (0, o.Wu)([j.ZP, y.default, O.Z, v.Z], () => {
    let e = j.ZP.getChannels(n.id)[j.sH].filter(e => {
      let {
        channel: t
      } = e;
      return t.type === s.d.GUILD_TEXT && v.Z.can(E.Plq.SEND_MESSAGES, t)
    }).map(e => {
      let {
        channel: t
      } = e;
      return {
        value: t.id,
        label: (0, g.F6)(t, y.default, O.Z, true)
      }
    });
    return null != f ? e : [...e]
  }, [n.id, f]), x = async e => {
    l(e);
    try {
      if (e !== f && (await C.Z.saveGuild(n.id, {
          safetyAlertsChannelId: e
        }, {
          throwErr: true
        }), C.Z.updateGuild({
          safetyAlertsChannelId: e
        })), null != e) {
        let t = {
          raid_alert_type: p.wR.JOIN_RAID,
          enabled: (0, b.Z)(n),
          raid_alert_channel_id: e,
          guild_id: n.id,
          channel_id: e
        };
        (0, u.yw)(E.rMx.GUILD_RAID_ALERTS_SETUP, t)
      }
    } catch (e) {
      (0, d.showToast)((0, d.createToast)(I.intl.string(I.t["46Rs3v"]), d.ToastType.FAILURE)), l(f)
    }
  };
  return (0, r.jsx)("div", {
    className: a()(S.itemBodyContainer, m),
    children: (0, r.jsx)("div", {
      className: S.itemBodyInner,
      children: (0, r.jsx)(c.d, {
        wrapperClassName: S.bringToFront,
        label: I.intl.string(I.t.sMkYE8),
        helperText: I.intl.string(I.t["1QxN9N"]),
        options: h,
        onChange: x,
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
  } = e, [a, s] = i.useState(false), o = null != (t = l.safetyAlertsChannelId) ? t : null, [c, d] = i.useState(null != o ? o : null != (n = null == l ? true : l.publicUpdatesChannelId) ? n : null);
  return (0, r.jsx)(h.Z, {
    renderHeader: (0, r.jsx)(_, {
      isExpanded: a,
      guild: l,
      selectedChannelId: c
    }),
    isExpanded: a,
    onExpand: () => s(!a),
    children: (0, r.jsx)(T, {
      guild: l,
      selectedChannelId: c,
      setSelectedChannelId: d
    })
  })
}

function w(e) {
  var t, n;
  let {
    guild: l
  } = e, a = null != (t = l.safetyAlertsChannelId) ? t : null, [s, o] = i.useState(null != a ? a : null != (n = null == l ? true : l.publicUpdatesChannelId) ? n : null);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(_, {
      isExpanded: true,
      guild: l,
      selectedChannelId: s,
      className: S.noPadding
    }), (0, r.jsx)(T, {
      guild: l,
      selectedChannelId: s,
      setSelectedChannelId: o,
      className: S.noPadding
    })]
  })
}