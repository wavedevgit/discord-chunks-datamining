/** Chunk was on 67000 **/
/** chunk id: 830993, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk616780 = require("./616780.js"),
  Chunk619915 = require("./619915.js"),
  Chunk620662 = require("./620662.js"),
  Chunk841784 = require("./841784.js"),
  Chunk471445 = require("./471445.js"),
  Chunk704538 = require("./704538.js"),
  Chunk644011 = require("./644011.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk158776 = require("./158776.js"),
  Chunk885110 = require("./885110.js"),
  Chunk979651 = require("./979651.js"),
  Chunk823379 = require("./823379.js"),
  Chunk355363 = require("./355363.js"),
  Chunk449932 = require("./449932.jsx"),
  Chunk561788 = require("./561788.jsx"),
  Chunk876548 = require("./876548.jsx"),
  Chunk543432 = require("./543432.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk582113 = require("./582113.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk26714 = require("./26714.js"),
  Chunk570291 = require("./570291.js");

function A(e) {
  var t, l;
  let {
    channel: a,
    guild: h,
    onAction: m,
    voiceStates: y,
    isChannelSelected: j,
    shouldShowSettingNudge: x
  } = e, S = i.useMemo(() => {
    var e;
    return null == y || y.length > 50 ? {} : {
      [a.getGuildId()]: null != (e = y.map(e => {
        let {
          user: t
        } = e;
        return t.id
      })) ? e : []
    }
  }, [a, y]);
  (0, c.$)(S, "VoiceChannelActivities");
  let _ = (0, u.ZP)(a),
    I = Array.from((0, u.uF)(_).values()),
    T = null != (t = null == y ? true : y.filter(C.lm)) ? t : [],
    A = () => e => [P.IIU.PLAYING, P.IIU.WATCHING].includes(e.type) && (null != e.assets || null != e.state || null != e.details || null != e.party) || e.type === P.IIU.LISTENING,
    D = (0, o.e7)([v.Z, O.Z, b.default], () => {
      let e = {};
      return T.forEach(t => {
        let n = t.user.id === b.default.getId() ? v.Z.findActivity(A(), true) : O.Z.findActivity(t.user.id, A());
        if (null != n && !(0, f.Z)(n)) {
          var r, i, l, a;
          let o = "".concat(null != (i = n.application_id) ? i : "", ":").concat(null != (l = null == (r = n.party) ? true : r.id) ? l : t.user.id),
            s = null != (a = e[o]) ? a : {
              members: [],
              activity: n
            };
          s.members.push(t), (0, d.Z)(s.activity, P.xjy.JOIN) || (s.activity = n), e[o] = s
        }
      }), Object.values(e)
    }, [T], o.pF),
    M = (0, p.p)({
      location: "voice_channel_activities"
    });
  if (D.length + I.length === 0) return null;
  let L = false;
  return (0, r.jsxs)(s.Ttm, {
    className: w.container,
    children: [(0, r.jsx)(R, {
      channel: a,
      isChannelSelected: j,
      voiceStatesCount: null != (l = null == y ? true : y.length) ? l : 0
    }), (0, r.jsx)("div", {
      className: w.headerDivider
    }), I.map((e, t) => {
      var n;
      return (0, r.jsx)(E.Z, {
        embeddedApp: e,
        presenceActivity: null != (n = e.presenceActivity) ? n : true,
        channel: a,
        onAction: m
      }, t)
    }), D.map((e, t) => {
      let {
        members: n,
        activity: l
      } = e;
      return M && null != l.application_id && N.RI.has(l.application_id) && !L ? (L = true, (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)(E.Z, {
          presenceActivity: l,
          channel: a,
          members: n,
          onAction: m
        }), (0, r.jsx)(g.Z, {
          className: w.voiceChannelGiftingBreadcrumb,
          applicationId: l.application_id,
          userIds: n.map(e => e.user.id),
          location: "voice_channel",
          guildId: a.guild_id,
          channelId: a.id
        })]
      }, "".concat(t, "-with-gifting-breadcrumb"))) : (0, r.jsx)(E.Z, {
        presenceActivity: l,
        channel: a,
        members: n,
        onAction: m
      }, t)
    }), x && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: w.headerDivider
      }), (0, r.jsx)("div", {
        className: w.settingNudgeText,
        children: (0, r.jsx)(s.Text, {
          variant: "text-xs/normal",
          tag: "span",
          children: Z.intl.format(Z.t.ePyoY2, {
            onClick: () => {
              (0, s.ZDy)(async () => {
                let {
                  default: e
                } = await n.e("86722").then(n.bind(n, 264333));
                return t => {
                  var n, i;
                  return (0, r.jsx)(e, (n = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                      }))), r.forEach(function(t) {
                        var r;
                        r = n[t], t in e ? Object.defineProperty(e, t, {
                          value: r,
                          enumerable: true,
                          configurable: true,
                          writable: true
                        }) : e[t] = r
                      })
                    }
                    return e
                  }({}, t), i = i = {
                    guild: h
                  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r)
                    }
                    return n
                  })(Object(i)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
                  }), n))
                }
              })
            }
          })
        })
      })]
    })]
  })
}

function R(e) {
  let {
    channel: t,
    isChannelSelected: n,
    voiceStatesCount: i
  } = e, l = (0, o.e7)([y.Z], () => !y.Z.can(P.Plq.CONNECT, t)), s = (0, o.e7)([j.Z], () => j.Z.hasVideo(t.id)), c = (0, x.ZP)({
    channel: t,
    locked: l,
    video: s,
    selected: n
  }), u = (0, o.e7)([m.Z], () => m.Z.getGuild(t.guild_id));
  return null == (0, h.KS)(t, u) ? null : (0, r.jsxs)("div", {
    className: a()(w.popoutHeaderContainer, T.popoutHeaderContainer),
    children: [(0, r.jsx)(S.Z, {
      channel: t
    }), c ? (0, r.jsx)(_.Z, {
      userCount: i,
      video: s,
      channel: t
    }) : (0, r.jsx)(I.Z, {
      userCount: i
    })]
  })
}