/** Chunk was on 58121 **/
/** chunk id: 775028, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => H
}), require("./388685.js"), require("./539854.js"), require("./472816.js"), require("./794429.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk111028 = require("./111028.jsx"),
  Chunk266454 = require("./266454.js"),
  Chunk66999 = require("./66999.js"),
  Chunk549631 = require("./549631.jsx"),
  Chunk473403 = require("./473403.jsx"),
  Chunk454585 = require("./454585.js"),
  Chunk22082 = require("./22082.js"),
  Chunk703656 = require("./703656.js"),
  Chunk6025 = require("./6025.js"),
  Chunk922482 = require("./922482.js"),
  Chunk601070 = require("./601070.js"),
  Chunk216306 = require("./216306.js"),
  Chunk163 = require("./163.js"),
  Chunk753540 = require("./753540.js"),
  Chunk70297 = require("./70297.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk444630 = require("./444630.js"),
  Chunk430864 = require("./430864.js");

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let k = new Set([Chunk981631.d4z.GUILD_FORUM, Chunk981631.d4z.GUILD_MEDIA]),
  B = new Set([Chunk981631.d4z.GUILD_VOICE, Chunk981631.d4z.GUILD_STAGE_VOICE]);

function R(e) {
  let {
    guild: t,
    channel: r,
    onCategoryClick: i
  } = e, o = (0, Z.Mf)(t.id, r.id, r.id), s = (0, Z.t4)(t.id, r.id, r.id);
  return (0, l.jsxs)("div", {
    className: a()(E.categoryRow, {
      [E.uncategorized]: "null" === r.id
    }),
    onContextMenu: e => {
      (0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("8965"), n.e("14280")]).then(n.bind(n, 139035));
        return n => (0, l.jsx)(e, A(T({}, n), {
          channel: r,
          guild: t
        }))
      })
    },
    children: [(0, l.jsx)(d.Text, {
      className: E.categoryText,
      color: "text-muted",
      variant: "text-sm/medium",
      lineClamp: 1,
      children: r.name
    }), "null" !== r.id && !s && (0, l.jsxs)(d.P3F, {
      className: E.selectAll,
      onClick: () => {
        s || i(t.id, r.id, r.id)
      },
      children: [(0, l.jsx)(d.XZJ, {
        className: E.selectAllCheckbox,
        size: 14,
        shape: d.XZJ.Shapes.SMALL_BOX,
        value: o,
        type: d.XZJ.Types.INVERTED,
        displayOnly: true
      }), (0, l.jsx)(d.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: P.intl.string(P.t.mSQwnZ)
      })]
    })]
  })
}
let D = Chunk73800.memo(function() {
    return (0, Chunk255367.jsx)("div", {
      className: Chunk444630.separator
    })
  }),
  L = Chunk73800.memo(function(e) {
    let {
      index: t
    } = e;
    return (0, l.jsx)(d.Text, {
      variant: "text-xs/normal",
      className: E.subtitleSeparator,
      children: "\xb7"
    }, "separator-".concat(t))
  }),
  M = Chunk73800.memo(function(e) {
    let {
      channel: t,
      category: r,
      guild: i,
      isFirstChannel: s,
      isLastChannel: h,
      onChannelClick: O,
      tooltipDirection: N = "right"
    } = e, {
      isSubscriptionGated: R
    } = (0, p.Z)(t.id), M = (0, Z.Mf)(i.id, t.id, r.id), H = (0, Z.t4)(i.id, t.id, r.id), U = (0, Z.EH)(i.id, r.id), G = (0, o.e7)([v.Z], () => v.Z.getActiveThreadCount(i.id, t.id)), W = (0, o.e7)([_.Z], () => _.Z.shouldIndicateNewChannel(i.id, t.id)), F = e => {
      if (!H) return e.stopPropagation(), O(i.id, t.id, r.id), true
    }, q = e => {
      t.isGuildVocal() ? (0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("18320"), n.e("83331"), n.e("81070")]).then(n.bind(n, 213202));
        return n => (0, l.jsx)(e, A(T({}, n), {
          channel: t,
          guild: i
        }))
      }) : (0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("18320"), n.e("44011")]).then(n.bind(n, 373651));
        return n => (0, l.jsx)(e, A(T({}, n), {
          channel: t,
          guild: i
        }))
      })
    }, z = function(e, t) {
      let n = [];
      return I.TPd.GUILD_THREADS_ONLY.has(e.type) && t >= 1 && n.push((0, l.jsx)(d.Text, {
        variant: "text-xs/normal",
        className: E.channelSubtitle,
        children: P.intl.format(P.t.z0qMLy, {
          count: t
        })
      }, "thread-count")), B.has(e.type) || n.push((0, l.jsx)(d.Text, {
        variant: "text-xs/normal",
        className: E.channelSubtitle,
        children: (0, y.qw)(e.id)
      }, "active")), null != e.topic && e.topic.length > 0 && n.push((0, l.jsx)(m.Z, {
        className: S.markup,
        children: (0, l.jsx)(d.Text, {
          className: E.topic,
          variant: "text-xs/normal",
          children: x.Z.parseTopic(e.topic, true, {
            channelId: e.id
          })
        })
      }, "topic")), [n.map((e, t) => [e, (0, l.jsx)(L, {
        index: t
      }, "subtitle-separator-".concat(t))])].flat(2).slice(0, false)
    }(t, G), X = e => ((e.stopPropagation(), k.has(t.type) || e.shiftKey) ? (0, C.XU)(i.id, t.id) : t.isGuildStageVoice() || t.isGuildVoice() ? (0, j.Cq)(t) : b.Z.openChannelAsSidebar({
      guildId: t.guild_id,
      channelId: t.id,
      baseChannelId: w.oC.CHANNEL_BROWSER
    }), true), V = P.intl.string(P.t.vetGQk);
    t.isGuildStageVoice() || t.isGuildVoice() ? V = P.intl.string(P.t.VJlc0d) : t.isForumLikeChannel() && (V = P.intl.string(P.t["3xjX0d"]));
    let J = H ? "text-muted" : "text-default",
      Q = (0, d.dQu)(H ? c.Z.colors.TEXT_MUTED : c.Z.colors.TEXT_DEFAULT).hex();
    return (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(d.ua7, {
        text: U,
        delay: 500,
        position: N,
        children: e => (0, l.jsxs)(d.P3F, A(T({
          className: a()(E.channelRow, {
            [E.firstChannel]: s,
            [E.lastChannel]: h,
            [E.disabled]: H
          })
        }, e), {
          onClick: F,
          onContextMenu: q,
          children: [(0, l.jsxs)("div", {
            className: E.channelInfo,
            children: [(0, l.jsxs)("div", {
              className: E.channelName,
              children: [(0, l.jsx)(g._W, {
                channel: t,
                guild: i
              }), (0, l.jsx)(m.Z, {
                className: E.__invalid_name,
                children: (0, l.jsx)(d.Text, {
                  className: E.channelText,
                  variant: "text-md/medium",
                  lineClamp: 1,
                  color: J,
                  children: t.name
                })
              }), R ? (0, l.jsx)(f.Z, {
                color: Q,
                className: E.premiumIcon
              }) : null, W ? (0, l.jsx)(d.IGR, {
                text: P.intl.string(P.t.y2b7CA),
                color: c.Z.unsafe_rawColors.BRAND_260.css,
                className: E.titleBadge
              }) : null]
            }), (0, l.jsx)("div", {
              className: E.channelSubtitles,
              children: z
            })]
          }), (0, l.jsxs)("div", {
            className: E.channelActions,
            children: [(0, l.jsx)("div", {
              className: E.viewChannelButtonWrapper,
              children: (0, l.jsx)(d.zxk, {
                size: "sm",
                variant: "overlay-primary",
                onClick: X,
                text: V
              })
            }), (0, l.jsx)(d.XZJ, {
              "aria-checked": M,
              value: M,
              type: d.XZJ.Types.INVERTED,
              disabled: H,
              innerClassName: E.checkboxInner,
              displayOnly: true
            })]
          })]
        }))
      }), !h && (0, l.jsx)(D, {})]
    })
  });

function H(e) {
  let {
    categories: t,
    guild: n,
    className: i,
    innerClassName: o,
    hasSidebar: c
  } = e, {
    onChannelClick: u
  } = (0, O.Z)(n.id), m = (0, h.Nj)(s.z.CHANNEL_BROWSER_NUX) ? 0 : false, p = r.useCallback(e => {
    let {
      section: r
    } = e;
    if (0 === r && false === m) return null;
    let i = t._categories[r + m];
    return (0, l.jsx)(R, {
      channel: i.channel,
      guild: n,
      onCategoryClick: u
    }, i.channel.id)
  }, [t, n, m, u]), f = r.useCallback(e => {
    let {
      section: r,
      row: i
    } = e;
    if (0 === r && false === m) return (0, l.jsx)(N.Z, {
      guild: n
    });
    let a = t._categories[r + m],
      o = t[a.channel.id][i];
    return null == o ? null : (0, l.jsx)(M, {
      category: a.channel,
      channel: o.channel,
      guild: n,
      isFirstChannel: 0 === i,
      isLastChannel: t[a.channel.id].length - 1 === i,
      tooltipDirection: c ? "right" : "top",
      onChannelClick: u
    }, o.channel.id)
  }, [t, n, m, c, u]), g = (0, N.q)(n.id), x = (0, y.tn)(n.id, t, 64, g);
  return (0, l.jsx)(d._2F, {
    className: i,
    innerClassName: a()(o, E.scrollerInner),
    sectionHeight: 48,
    rowHeight: e => x[e].rowHeight,
    renderSection: p,
    renderRow: f,
    sections: x.map(e => e.rowCount)
  }, "channel-browser-list")
}